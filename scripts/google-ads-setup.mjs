#!/usr/bin/env node
/**
 * Google Ads setup helper for yannova.be
 *
 * Usage:
 *   node scripts/google-ads-setup.mjs auth     # OAuth flow → saves refresh token
 *   node scripts/google-ads-setup.mjs accounts   # List accessible Google Ads accounts
 *   node scripts/google-ads-setup.mjs check      # Verify env vars + show next steps
 *
 * Requires in .env.local:
 *   GOOGLE_ADS_CLIENT_ID
 *   GOOGLE_ADS_CLIENT_SECRET
 *   GOOGLE_ADS_REFRESH_TOKEN   (created by `auth` command)
 *   GOOGLE_ADS_DEVELOPER_TOKEN (from Google Ads → Tools → API Center)
 *   GOOGLE_ADS_CUSTOMER_ID     (10-digit ID, no dashes)
 */

import { createServer } from 'http';
import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const ENV_LOCAL = resolve(ROOT, '.env.local');
const DEFAULT_REDIRECT_URI = 'http://127.0.0.1:8085/oauth2callback';
const SCOPES = 'https://www.googleapis.com/auth/adwords';

function resolveOAuthConfig(env) {
  const useWeb = env.GOOGLE_ADS_USE_WEB_CLIENT === '1' || env.GOOGLE_ADS_USE_WEB_CLIENT === 'true';
  const clientId = useWeb
    ? env.GOOGLE_OAUTH_WEB_CLIENT_ID || env.GOOGLE_ADS_CLIENT_ID
    : env.GOOGLE_ADS_CLIENT_ID;
  const clientSecret = useWeb
    ? env.GOOGLE_OAUTH_WEB_CLIENT_SECRET || env.GOOGLE_ADS_CLIENT_SECRET
    : env.GOOGLE_ADS_CLIENT_SECRET;
  const redirectUri = env.GOOGLE_ADS_OAUTH_REDIRECT_URI || DEFAULT_REDIRECT_URI;
  return { clientId, clientSecret, redirectUri, useWeb };
}

function printOAuthTroubleshooting({ clientId, redirectUri, useWeb }) {
  console.log('📋 Controleer in Google Cloud Console (project yannovabe):\n');
  console.log(`   Client: ${useWeb ? 'Web' : 'Desktop'} — ${clientId}`);
  console.log(`   Redirect URI (exact kopieren): ${redirectUri}`);
  console.log('   1. APIs → Google Ads API → ENABLED');
  console.log('   2. OAuth consent screen → Test users → info@yannova.be');
  console.log('   3. OAuth consent screen → Scopes → Google Ads API toevoegen');
  console.log(`   4. Credentials → client → redirect URI: ${redirectUri}`);
  console.log('   5. Probeer incognito als je 400 krijgt (Chrome-profiel kan storen)\n');
}

function loadEnv() {
  const env = {};
  for (const file of [resolve(ROOT, '.env'), ENV_LOCAL]) {
    if (!existsSync(file)) continue;
    for (const line of readFileSync(file, 'utf8').split('\n')) {
      const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
      if (!m) continue;
      let val = m[2].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      env[m[1]] = val;
    }
  }
  return env;
}

function saveRefreshToken(token) {
  let content = existsSync(ENV_LOCAL) ? readFileSync(ENV_LOCAL, 'utf8') : '';
  if (/^GOOGLE_ADS_REFRESH_TOKEN=/m.test(content)) {
    content = content.replace(/^GOOGLE_ADS_REFRESH_TOKEN=.*$/m, `GOOGLE_ADS_REFRESH_TOKEN="${token}"`);
  } else {
    content += `\n# Google Ads API\nGOOGLE_ADS_REFRESH_TOKEN="${token}"\n`;
  }
  writeFileSync(ENV_LOCAL, content);
  console.log('✅ GOOGLE_ADS_REFRESH_TOKEN opgeslagen in .env.local');
}

async function cmdAuth(env) {
  const { clientId, clientSecret, redirectUri, useWeb } = resolveOAuthConfig(env);
  if (!clientId || !clientSecret) {
    console.error('❌ OAuth client ID/secret ontbreken in .env.local');
    console.error('   Desktop: GOOGLE_ADS_CLIENT_ID + GOOGLE_ADS_CLIENT_SECRET');
    console.error('   Web: GOOGLE_OAUTH_WEB_CLIENT_ID + GOOGLE_OAUTH_WEB_CLIENT_SECRET');
    console.error('   Of zet GOOGLE_ADS_USE_WEB_CLIENT=1 om web client te gebruiken');
    process.exit(1);
  }

  printOAuthTroubleshooting({ clientId, redirectUri, useWeb });

  const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  authUrl.searchParams.set('client_id', clientId);
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('scope', SCOPES);
  authUrl.searchParams.set('access_type', 'offline');
  authUrl.searchParams.set('prompt', 'consent');
  authUrl.searchParams.set('include_granted_scopes', 'true');

  console.log('\n🔐 Google Ads OAuth\n');
  console.log('1. Open deze URL in je browser (liefst incognito):\n');
  console.log(authUrl.toString());
  console.log('\n2. Log in met je Google Ads account');
  console.log('3. Geef toestemming\n');

  try {
    execSync(`open -na "Google Chrome" --args --incognito "${authUrl.toString()}"`, { stdio: 'ignore' });
  } catch {
    try {
      execSync(`open "${authUrl.toString()}"`, { stdio: 'ignore' });
    } catch {
      // open not available
    }
  }

  const code = await new Promise((resolvePromise, reject) => {
    const server = createServer(async (req, res) => {
      const url = new URL(req.url, redirectUri);
      if (url.pathname !== '/oauth2callback') {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      const authCode = url.searchParams.get('code');
      const error = url.searchParams.get('error');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      if (error) {
        res.end(`<h1>Fout: ${error}</h1><p>Sluit dit venster.</p>`);
        reject(new Error(error));
      } else if (!authCode) {
        res.end('<h1>Geen code ontvangen</h1>');
        reject(new Error('Geen authorization code ontvangen'));
      } else {
        res.end('<h1>✅ Gelukt!</h1><p>Je kunt dit venster sluiten en terug naar de terminal.</p>');
        resolvePromise(authCode);
      }
      server.close();
    });
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        reject(new Error('Poort 8085 is bezet. Stop andere npm run google-ads:auth en probeer opnieuw.'));
      } else {
        reject(err);
      }
    });
    server.listen(8085, '127.0.0.1', () =>
      console.log(`⏳ Wacht op OAuth callback op ${redirectUri} ...`)
    );
    setTimeout(() => {
      server.close();
      reject(new Error('Timeout na 5 minuten'));
    }, 5 * 60 * 1000);
  });

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }),
  });

  const tokens = await tokenRes.json();
  if (!tokens.refresh_token) {
    console.error('❌ Geen refresh_token ontvangen. Revoke toegang op myaccount.google.com/permissions en probeer opnieuw.');
    console.error(JSON.stringify(tokens, null, 2));
    process.exit(1);
  }

  saveRefreshToken(tokens.refresh_token);
  console.log('\n✅ Volgende stap: node scripts/google-ads-setup.mjs accounts');
}

async function getAccessToken(env) {
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: env.GOOGLE_ADS_CLIENT_ID,
      client_secret: env.GOOGLE_ADS_CLIENT_SECRET,
      refresh_token: env.GOOGLE_ADS_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });
  const data = await res.json();
  if (!data.access_token) throw new Error(`Token refresh failed: ${JSON.stringify(data)}`);
  return data.access_token;
}

async function cmdAccounts(env) {
  const devToken = env.GOOGLE_ADS_DEVELOPER_TOKEN;
  const refreshToken = env.GOOGLE_ADS_REFRESH_TOKEN;
  if (!refreshToken) {
    console.error('❌ Eerst: node scripts/google-ads-setup.mjs auth');
    process.exit(1);
  }
  if (!devToken) {
    console.error('❌ GOOGLE_ADS_DEVELOPER_TOKEN ontbreekt.');
    console.error('   Haal op via: Google Ads → Tools → Setup → API Center');
    process.exit(1);
  }

  const accessToken = await getAccessToken(env);
  const res = await fetch('https://googleads.googleapis.com/v18/customers:listAccessibleCustomers', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'developer-token': devToken,
    },
  });

  const data = await res.json();
  if (!res.ok) {
    console.error('❌ API fout:', JSON.stringify(data, null, 2));
    process.exit(1);
  }

  console.log('\n📋 Toegankelijke Google Ads accounts:\n');
  const ids = (data.resourceNames || []).map((r) => r.replace('customers/', ''));
  if (ids.length === 0) {
    console.log('   Geen accounts gevonden. Maak eerst een account aan op ads.google.com');
    return;
  }
  for (const id of ids) {
    const aw = `AW-${id.replace(/-/g, '')}`;
    console.log(`   Customer ID: ${id}`);
    console.log(`   Ads tag:     ${aw}`);
    console.log('');
  }
  console.log('Voeg toe aan Vercel + .env.local:');
  console.log(`   NEXT_PUBLIC_GOOGLE_ADS_ID=AW-${ids[0].replace(/-/g, '')}`);
}

function cmdOpen(env) {
  const customerId = env.GOOGLE_ADS_CUSTOMER_ID || '18278098205';
  const formatted = customerId.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  const urls = {
    dashboard: `https://ads.google.com/aw/overview?ocid=${customerId}`,
    conversions: `https://ads.google.com/aw/conversions?ocid=${customerId}`,
    newConversion: `https://ads.google.com/aw/conversions/new?ocid=${customerId}`,
    campaigns: `https://ads.google.com/aw/campaigns?ocid=${customerId}`,
  };
  console.log(`\n🔗 Google Ads — account ${formatted} (AW-${customerId}):\n`);
  for (const [name, url] of Object.entries(urls)) {
    console.log(`   ${name}: ${url}`);
  }
  console.log('\n📌 Conversies aanmaken (handmatig):');
  console.log('   1. Open "conversions" → + Nieuwe conversieactie → Website');
  console.log('   2. Gebruik exact deze namen (voor sync met de site):');
  console.log('      • Offerte Formulier - Yannova');
  console.log('      • WhatsApp Contact - Yannova');
  console.log('      • Telefoon Klik - Yannova');
  console.log('      • Email Contact - Yannova');
  console.log('   3. Tag instellen → Google-tag → kopieer het label (deel na AW-18278098205/)');
  console.log('   4. Run: npm run google-ads:apply-labels -- --contact=LABEL ...\n');
  try {
    execSync(`open "${urls.conversions}"`, { stdio: 'ignore' });
    console.log('✅ Conversies pagina geopend in browser\n');
  } catch {
    console.log('Open handmatig de conversions URL\n');
  }
}

function cmdVercel(env) {
  const adsId = env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-9417266407';
  const gaId = env.NEXT_PUBLIC_GA_ID || 'G-8WTT4MHH91';
  const label = env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL;
  console.log('\n📦 Vercel env (Production):\n');
  console.log(`   NEXT_PUBLIC_GOOGLE_ADS_ID=${adsId}  ✅ al ingesteld`);
  console.log(`   NEXT_PUBLIC_GA_ID=${gaId}  ✅ al ingesteld`);
  if (label) {
    console.log(`   NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL=${label}`);
  } else {
    console.log('   NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL  ❌ nog invullen na conversie aanmaken');
    console.log('\n   echo "JOUW_LABEL" | npx vercel env add NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL production');
  }
  console.log('\n   Redeploy: npx vercel --prod\n');
}

function cmdCheck(env) {
  console.log('\n🔍 Google Ads status check — yannova.be\n');

  const checks = [
    ['GOOGLE_ADS_CLIENT_ID', env.GOOGLE_ADS_CLIENT_ID],
    ['GOOGLE_ADS_CLIENT_SECRET', env.GOOGLE_ADS_CLIENT_SECRET ? '✓ ingesteld' : null],
    ['GOOGLE_ADS_REFRESH_TOKEN', env.GOOGLE_ADS_REFRESH_TOKEN ? '✓ ingesteld' : null],
    ['GOOGLE_ADS_DEVELOPER_TOKEN', env.GOOGLE_ADS_DEVELOPER_TOKEN],
    ['NEXT_PUBLIC_GOOGLE_ADS_ID', env.NEXT_PUBLIC_GOOGLE_ADS_ID],
    ['NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL', env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL],
    ['NEXT_PUBLIC_GA_ID', env.NEXT_PUBLIC_GA_ID],
    ['NEXT_PUBLIC_GTM_ID', env.NEXT_PUBLIC_GTM_ID],
  ];

  for (const [key, val] of checks) {
    const ok = val && val !== 'YOUR_ADS_ID' && !val.includes('XXXX');
    console.log(`   ${ok ? '✅' : '❌'} ${key}: ${val || '(ontbreekt)'}`);
  }

  console.log('\n📌 Oud account in docs: AW-17673401673 / AW-9417266407 — niet meer gebruiken.\n');

  console.log('Stappenplan:');
  console.log('   1. Account aanmaken/inloggen → ads.google.com (browser)');
  console.log('   2. node scripts/google-ads-setup.mjs auth');
  console.log('   3. Developer token aanvragen in Google Ads API Center');
  console.log('   4. node scripts/google-ads-setup.mjs accounts');
  console.log('   5. Conversie aanmaken → kopieer label → Vercel env vars');
  console.log('   6. Campagne live zetten\n');
}

const cmd = process.argv[2] || 'check';
const env = loadEnv();

switch (cmd) {
  case 'auth':
    await cmdAuth(env);
    break;
  case 'accounts':
    await cmdAccounts(env);
    break;
  case 'open':
    cmdOpen(env);
    break;
  case 'vercel':
    cmdVercel(env);
    break;
  case 'check':
  default:
    cmdCheck(env);
}
