/* eslint-disable @typescript-eslint/no-var-requires */
// One-off script to remove "Gemini"/"Generated"/noise from project titles in DB
// Usage: node scripts/sanitize-project-titles.js

const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');

let connectionString = process.env.DATABASE_URL;
if (connectionString && !connectionString.includes('sslmode=')) {
  connectionString += connectionString.includes('?') ? '&sslmode=no-verify' : '?sslmode=no-verify';
}
const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

function toTitleCase(str) {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

function cleanTitle(raw, idx, imageUrl) {
  const base = raw && raw.trim().length > 0 ? raw : (imageUrl?.split('/').pop()?.split('.')[0] ?? '');
  let cleaned = base
    .replace(/gemini/gi, '')
    .replace(/generated/gi, '')
    .replace(/\b(image|img)\b/gi, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\b[a-f0-9]{6,}\b/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (cleaned.length < 3) {
    cleaned = `Projectfoto ${idx + 1}`;
  }
  return toTitleCase(cleaned);
}

async function main() {
  console.log('🔧 Sanitize project titles (remove Gemini/Generated/IDs)…');
  const projects = await prisma.project.findMany({
    select: { id: true, title: true, imageUrl: true },
    orderBy: { createdAt: 'asc' },
  });

  let updates = 0;
  for (let i = 0; i < projects.length; i++) {
    const p = projects[i];
    const newTitle = cleanTitle(p.title || '', i, p.imageUrl);
    if (newTitle !== (p.title || '').trim()) {
      await prisma.project.update({
        where: { id: p.id },
        data: { title: newTitle },
      });
      console.log(`✓ ${p.id}: "${p.title}" → "${newTitle}"`);
      updates++;
    }
  }

  console.log(`\n✅ Klaar. Gewijzigde titels: ${updates}/${projects.length}`);
}

main()
  .catch((e) => {
    console.error('❌ Fout:', e?.message || e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
