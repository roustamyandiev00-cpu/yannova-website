
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';

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

const USERS = [
  'roustamyandiev00@gmail.com',
  'info@yannova.be',
  'windowpro.be@gmail.com',
  'innovar.labs7@gmail.com',
];

const DEFAULT_PASSWORD = 'Privet007.@.';

async function main() {
  const { prisma } = await import('../src/lib/prisma');
  const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 10);

  console.log('Seeding users from hardcoded list...');

  for (const email of USERS) {
    try {
      const existing = await prisma.user.findUnique({ where: { email } });
      if (!existing) {
        await prisma.user.create({
          data: {
            email,
            password: hashedPassword,
            name: email.split('@')[0],
            role: 'user', // Default to user
            active: true,
          },
        });
        console.log(`✅ Created user: ${email}`);
      } else {
        console.log(`ℹ️ User already exists: ${email}`);
      }
    } catch (e) {
      console.error(`❌ Failed to create ${email}:`, e);
    }
  }

  console.log('Done. You can now manage these users via the database.');
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
