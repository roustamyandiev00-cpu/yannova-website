#!/usr/bin/env node
/**
 * Apply Google Ads conversion labels to .env.local + Vercel + redeploy.
 *
 * Usage:
 *   node scripts/google-ads-apply-labels.mjs \
 *     --contact=AbC123xYz \
 *     --phone=DeF456aBc \
 *     --whatsapp=GhI789dEf \
 *     --email=JkL012gHi
 *
 * Or from Google Ads UI: copy all 4 labels and pass them.
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const ENV_LOCAL = resolve(ROOT, '.env.local');

const KEYS = {
  contact: 'NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL',
  phone: 'NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL',
  whatsapp: 'NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL',
  email: 'NEXT_PUBLIC_GOOGLE_ADS_EMAIL_LABEL',
};

function parseArgs() {
  const labels = {};
  for (const arg of process.argv.slice(2)) {
    const m = arg.match(/^--(\w+)=(.+)$/);
    if (m && KEYS[m[1]]) labels[m[1]] = m[2];
  }
  return labels;
}

function upsertEnv(content, key, value) {
  const line = `${key}="${value}"`;
  const re = new RegExp(`^${key}=.*$`, 'm');
  return re.test(content) ? content.replace(re, line) : content + `\n${line}`;
}

function main() {
  const labels = parseArgs();
  if (!labels.contact) {
    console.error(`
Usage: node scripts/google-ads-apply-labels.mjs --contact=LABEL [--phone=] [--whatsapp=] [--email=]

Minimaal --contact is verplicht (offerteformulier).
`);
    process.exit(1);
  }

  let content = existsSync(ENV_LOCAL) ? readFileSync(ENV_LOCAL, 'utf8') : '';
  const vercelVars = {};

  for (const [key, envKey] of Object.entries(KEYS)) {
    if (labels[key]) {
      content = upsertEnv(content, envKey, labels[key]);
      vercelVars[envKey] = labels[key];
      console.log(`✅ ${envKey}=${labels[key]}`);
    }
  }

  writeFileSync(ENV_LOCAL, content);
  console.log('\n📦 Vercel sync...');

  for (const [key, value] of Object.entries(vercelVars)) {
    try {
      execSync(`npx vercel env rm ${key} production -y 2>/dev/null || true`, { cwd: ROOT, stdio: 'ignore' });
      execSync(`echo "${value}" | npx vercel env add ${key} production`, { cwd: ROOT, stdio: 'pipe' });
      console.log(`   ✅ ${key}`);
    } catch (e) {
      console.log(`   ⚠️  ${key}: ${e.message}`);
    }
  }

  console.log('\n🚀 Deploying...\n');
  execSync('npx vercel --prod --yes', { cwd: ROOT, stdio: 'inherit' });
  console.log('\n✅ Labels live op yannova.be\n');
}

main();
