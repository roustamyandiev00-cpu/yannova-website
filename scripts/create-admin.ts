import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

let connectionString = process.env.DATABASE_URL?.replace('prisma+postgres://', 'postgres://');
if (connectionString && !connectionString.includes('sslmode=')) {
  connectionString += (connectionString.includes('?') ? '&' : '?') + 'sslmode=require';
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const args = process.argv.slice(2);
  const email = args[0];
  const password = args[1];

  if (!email || !password) {
    // eslint-disable-next-line no-console
    console.error('Gebruik: node scripts/create-admin.js <email> <wachtwoord>');
    process.exit(1);
  }

  // eslint-disable-next-line no-console
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
    // eslint-disable-next-line no-console
    console.log(`Admin user aangemaakt: ${user.email}`);
  } catch (e) {
    if (typeof e === 'object' && e !== null && 'code' in e && (e as { code?: string }).code === 'P2002') {
      // eslint-disable-next-line no-console
      console.error('Fout: Er bestaat al een gebruiker met dit emailadres.');
    } else {
      // eslint-disable-next-line no-console
      console.error('Er ging iets mis:', e);
    }
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

void main();
