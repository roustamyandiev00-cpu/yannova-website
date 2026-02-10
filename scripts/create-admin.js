const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');

let connectionString = process.env.DATABASE_URL?.replace('prisma+postgres://', 'postgres://');
if (connectionString && !connectionString.includes('sslmode=')) {
  connectionString += (connectionString.includes('?') ? '&' : '?') + 'sslmode=require';
}

console.log("Connection String check:", connectionString ? "Exists" : "Missing");
console.log("Protocol:", connectionString?.split('://')[0]);
console.log("Has sslmode:", connectionString?.includes('sslmode'));

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const args = process.argv.slice(2);
  const email = args[0];
  const password = args[1];

  if (!email || !password) {
    console.error('Gebruik: node scripts/create-admin.js <email> <wachtwoord>');
    process.exit(1);
  }

  console.log(`Bezig met aanmaken admin user: ${email}...`);

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: 'Admin',
      },
    });
    console.log(`✅ Admin user aangemaakt: ${user.email}`);
  } catch (e) {
    if (e.code === 'P2002') {
      console.error('❌ Fout: Er bestaat al een gebruiker met dit emailadres.');
    } else {
      console.error('❌ Er ging iets mis:', e);
    }
  } finally {
    await prisma.$disconnect();
  }
}

main();
