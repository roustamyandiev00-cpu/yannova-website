#!/usr/bin/env node
/**
 * Create Google Ads conversion actions via API and sync labels to .env.local + Vercel.
 *
 * Usage:
 *   node scripts/google-ads-create-conversions.mjs
 *   node scripts/google-ads-create-conversions.mjs --sync-only   # re-fetch existing labels
 *
 * Requires .env.local:
 *   GOOGLE_ADS_CLIENT_ID, GOOGLE_ADS_CLIENT_SECRET, GOOGLE_ADS_REFRESH_TOKEN
 *   GOOGLE_ADS_DEVELOPER_TOKEN, GOOGLE_ADS_CUSTOMER_ID=18278098205
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const ENV_LOCAL = resolve(ROOT, '.env.local');
const API = 'https://googleads.googleapis.com/v18';
const CUSTOMER_ID = '18278098205';

const CONVERSIONS = [
  {
    name: 'Offerte Formulier - Yannova',
    category: 'SUBMIT_LEAD_FORM',
    value: 50,
    primary: true,
    envKey: 'NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL',
  },
  {
    name: 'WhatsApp Contact - Yannova',
    category: 'CONTACT',
    value: 20,
    primary: false,
    envKey: 'NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL',
  },
  {
    name: 'Telefoon Klik - Yannova',
    category: 'CONTACT',
    value: 25,
    primary: false,
    envKey: 'NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL',
  },
  {
    name: 'Email Contact - Yannova',
    category: 'CONTACT',
    value: 15,
    primary: false,
    envKey: 'NEXT_PUBLIC_GOOGLE_ADS_EMAIL_LABEL',
  },
];

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
  if (!data.access_token) throw new Error(`OAuth failed: ${JSON.stringify(data)}`);
  return data.access_token;
}

async function adsQuery(env, accessToken, query) {
  const customerId = env.GOOGLE_ADS_CUSTOMER_ID || CUSTOMER_ID;
  const res = await fetch(`${API}/customers/${customerId}/googleAds:searchStream`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'developer-token': env.GOOGLE_ADS_DEVELOPER_TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`API error (${res.status}): ${text}`);
  }
  if (!res.ok) {
    const err = Array.isArray(data) ? data[0]?.error : data.error;
    throw new Error(JSON.stringify(err || data, null, 2));
  }
  return data;
}

function extractLabel(conversionAction) {
  const snippets = conversionAction?.tagSnippets || [];
  for (const s of snippets) {
    const match = s.eventSnippet?.match(/send_to['"]:\s*['"]AW-\d+\/([^'"]+)['"]/);
    if (match) return match[1];
  }
  // Fallback: id-based label from resource name
  return null;
}

async function listConversions(env, accessToken) {
  const result = await adsQuery(
    env,
    accessToken,
    `SELECT conversion_action.id, conversion_action.name, conversion_action.resource_name,
            conversion_action.category, conversion_action.status,
            conversion_action.tag_snippets
     FROM conversion_action
     WHERE conversion_action.status != 'REMOVED'
     ORDER BY conversion_action.name`
  );

  const rows = [];
  for (const batch of result) {
    for (const r of batch.results || []) {
      rows.push(r.conversionAction);
    }
  }
  return rows;
}

async function createConversion(env, accessToken, spec) {
  const customerId = env.GOOGLE_ADS_CUSTOMER_ID || CUSTOMER_ID;
  const res = await fetch(`${API}/customers/${customerId}/conversionActions:mutate`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'developer-token': env.GOOGLE_ADS_DEVELOPER_TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      operations: [
        {
          create: {
            name: spec.name,
            category: spec.category,
            type: 'WEBPAGE',
            status: 'ENABLED',
            valueSettings: {
              defaultValue: spec.value,
              defaultCurrencyCode: 'EUR',
              alwaysUseDefaultValue: true,
            },
            countingType: 'ONE_PER_CLICK',
            includeInConversionsMetric: spec.primary,
            clickThroughLookbackWindowDays: spec.primary ? 30 : 7,
            viewThroughLookbackWindowDays: 1,
            primaryForGoal: spec.primary,
          },
        },
      ],
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(JSON.stringify(data, null, 2));
  return data.results?.[0]?.resourceName;
}

function upsertEnvVar(content, key, value) {
  const line = `${key}=${value}`;
  const re = new RegExp(`^${key}=.*$`, 'm');
  if (re.test(content)) return content.replace(re, line);
  return content + `\n${line}`;
}

function saveLabelsToEnv(labels) {
  let content = existsSync(ENV_LOCAL) ? readFileSync(ENV_LOCAL, 'utf8') : '';
  for (const [key, value] of Object.entries(labels)) {
    content = upsertEnvVar(content, key, `"${value}"`);
  }
  writeFileSync(ENV_LOCAL, content);
  console.log('\n✅ Labels opgeslagen in .env.local');
}

function syncToVercel(labels) {
  console.log('\n📦 Vercel env vars syncen...\n');
  for (const [key, value] of Object.entries(labels)) {
    try {
      execSync(`npx vercel env rm ${key} production -y 2>/dev/null || true`, {
        cwd: ROOT,
        stdio: 'ignore',
      });
      execSync(`echo "${value}" | npx vercel env add ${key} production`, {
        cwd: ROOT,
        stdio: 'pipe',
      });
      console.log(`   ✅ ${key}`);
    } catch (e) {
      console.log(`   ⚠️  ${key}: ${e.message}`);
    }
  }
}

async function main() {
  const syncOnly = process.argv.includes('--sync-only');
  const env = loadEnv();

  if (!env.GOOGLE_ADS_REFRESH_TOKEN) {
    console.error('\n❌ GOOGLE_ADS_REFRESH_TOKEN ontbreekt.');
    console.error('   Run eerst: npm run google-ads:auth\n');
    process.exit(1);
  }
  if (!env.GOOGLE_ADS_DEVELOPER_TOKEN) {
    console.error('\n❌ GOOGLE_ADS_DEVELOPER_TOKEN ontbreekt.');
    console.error('   Google Ads → Tools → Setup → API Center → kopieer developer token');
    console.error('   Voeg toe aan .env.local: GOOGLE_ADS_DEVELOPER_TOKEN="..."\n');
    process.exit(1);
  }

  const accessToken = await getAccessToken(env);
  let existing = await listConversions(env, accessToken);
  console.log(`\n📋 ${existing.length} bestaande conversie(s) gevonden\n`);

  if (!syncOnly) {
    for (const spec of CONVERSIONS) {
      const found = existing.find((c) => c.name === spec.name);
      if (found) {
        console.log(`   ⏭️  Bestaat al: ${spec.name}`);
        continue;
      }
      try {
        const rn = await createConversion(env, accessToken, spec);
        console.log(`   ✅ Aangemaakt: ${spec.name} (${rn})`);
      } catch (e) {
        if (String(e.message).includes('DUPLICATE_NAME')) {
          console.log(`   ⏭️  Duplicate: ${spec.name}`);
        } else {
          console.error(`   ❌ ${spec.name}: ${e.message}`);
        }
      }
    }
    existing = await listConversions(env, accessToken);
  }

  const labels = {};
  for (const spec of CONVERSIONS) {
    const action = existing.find((c) => c.name === spec.name);
    if (!action) {
      console.log(`   ⚠️  Niet gevonden: ${spec.name}`);
      continue;
    }
    const label = extractLabel(action);
    if (label) {
      labels[spec.envKey] = label;
      console.log(`   🏷️  ${spec.name}: ${label}`);
    } else {
      console.log(`   ⚠️  Geen label voor: ${spec.name} (id: ${action.id})`);
    }
  }

  if (Object.keys(labels).length === 0) {
    console.error('\n❌ Geen labels gevonden. Controleer API-toegang.\n');
    process.exit(1);
  }

  saveLabelsToEnv(labels);
  syncToVercel(labels);

  console.log('\n🚀 Redeploy productie...\n');
  try {
    execSync('npx vercel --prod --yes', { cwd: ROOT, stdio: 'inherit' });
  } catch {
    console.log('   Run handmatig: npx vercel --prod --yes');
  }

  console.log('\n✅ Klaar! Conversies + labels zijn live.\n');
}

main().catch((e) => {
  console.error('\n❌', e.message, '\n');
  process.exit(1);
});
