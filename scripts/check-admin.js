const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');

async function checkAdmin() {
  let connectionString = process.env.DATABASE_URL;
  
  if (connectionString && !connectionString.includes('sslmode=')) {
    connectionString += connectionString.includes('?') ? '&sslmode=no-verify' : '?sslmode=no-verify';
  }

  const pool = new Pool({
    connectionString,
    ssl: {
      rejectUnauthorized: false
    },
  });

  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  try {
    console.log('Checking admin user...');
    
    const user = await prisma.user.findUnique({
      where: { email: 'admin@yannova.be' }
    });
    
    if (user) {
      console.log('\n✅ User found:');
      console.log('Email:', user.email);
      console.log('Role:', user.role);
      console.log('Active:', user.active);
      console.log('Password hash (first 30 chars):', user.password.substring(0, 30));
      console.log('Created:', user.createdAt);
    } else {
      console.log('\n❌ User not found');
    }
    
    await prisma.$disconnect();
    await pool.end();
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

checkAdmin();
