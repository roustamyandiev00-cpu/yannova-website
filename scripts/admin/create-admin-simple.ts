import { Pool } from 'pg';
import bcrypt from 'bcryptjs';
import 'dotenv/config';

async function createAdmin() {
  const connectionString = process.env.DATABASE_URL?.replace('prisma+postgres://', 'postgres://');

  if (!connectionString) {
     
    console.error('DATABASE_URL is undefined');
    process.exit(1);
  }

  const pool = new Pool({ connectionString });

  try {
    const hashedPassword = await bcrypt.hash('admin123', 10);

    const result = await pool.query(
      `INSERT INTO "User" (id, email, password, name, role, active, "createdAt", "updatedAt")
       VALUES (gen_random_uuid(), $1, $2, $3, $4, true, NOW(), NOW())
       ON CONFLICT (email) DO NOTHING
       RETURNING email`,
      ['admin@yannova.be', hashedPassword, 'Admin', 'admin'],
    );

    if (result.rowCount === 0) {
       
      console.log('Admin user already exists or could not be created');
    } else {
       
      console.log('Admin user created: admin@yannova.be');
       
      console.log('Password: admin123');
    }
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
     
    console.error('Error:', message);
  } finally {
    await pool.end();
  }
}

void createAdmin();
