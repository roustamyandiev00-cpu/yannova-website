
import fs from 'fs';
import path from 'path';

// Load .env manually
const envPath = path.resolve(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
  const envConfig = fs.readFileSync(envPath, 'utf-8');
  envConfig.split('\n').forEach(line => {
    if (line.trim().startsWith('#')) return;
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      let value = match[2].trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      process.env[key] = value;
    }
  });
}

async function main() {
  const args = process.argv.slice(2);
  const targetEmail = args[0];

  if (!targetEmail) {
    console.error('Gebruik: npx tsx scripts/set-only-admin.ts <email>');
    process.exit(1);
  }

  const { prisma } = await import('../src/lib/prisma');
  
  // 1. Check if target user exists
  const targetUser = await prisma.user.findUnique({
    where: { email: targetEmail }
  });

  if (!targetUser) {
    console.error(`❌ Gebruiker niet gevonden: ${targetEmail}`);
    await prisma.$disconnect();
    process.exit(1);
  }

  console.log(`Bezig met instellen van ${targetEmail} als enige admin...`);

  // 2. Set ALL users to 'user'
  const updateResult = await prisma.user.updateMany({
    where: {}, // All users
    data: { role: 'user' }
  });
  console.log(`ℹ️ Alle ${updateResult.count} gebruikers zijn nu 'user'.`);

  // 3. Set target user to 'admin'
  await prisma.user.update({
    where: { email: targetEmail },
    data: { role: 'admin' }
  });

  console.log(`✅ ${targetEmail} is nu de enige admin.`);
  
  await prisma.$disconnect();
}

main().catch(console.error);
