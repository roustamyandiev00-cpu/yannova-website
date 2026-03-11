require('dotenv').config({ path: '.env.local' });
const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const bcrypt = require('bcryptjs');

async function fixAdminPassword() {
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
    console.log('Checking admin user...\n');
    
    const email = 'admin@yannova.be';
    const password = 'admin123';
    
    // Check if user exists
    let user = await prisma.user.findUnique({
      where: { email }
    });
    
    if (user) {
      console.log('✅ User found:', user.email);
      console.log('Role:', user.role);
      console.log('Active:', user.active);
      
      // Test the current password
      const passwordMatch = await bcrypt.compare(password, user.password);
      console.log('\nPassword test:', passwordMatch ? '✅ MATCHES' : '❌ DOES NOT MATCH');
      
      if (!passwordMatch) {
        console.log('\n🔧 Fixing password...');
        const hashedPassword = await bcrypt.hash(password, 10);
        
        await prisma.user.update({
          where: { email },
          data: { password: hashedPassword }
        });
        
        console.log('✅ Password updated successfully!');
        
        // Verify the fix
        const updatedUser = await prisma.user.findUnique({
          where: { email }
        });
        const newPasswordMatch = await bcrypt.compare(password, updatedUser.password);
        console.log('Verification:', newPasswordMatch ? '✅ Password now works!' : '❌ Still not working');
      }
    } else {
      console.log('❌ User not found. Creating new admin user...\n');
      
      const hashedPassword = await bcrypt.hash(password, 10);
      
      user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name: 'Admin',
          role: 'admin',
          active: true
        }
      });
      
      console.log('✅ Admin user created successfully!');
      console.log('Email:', user.email);
      console.log('Role:', user.role);
    }
    
    console.log('\n📝 Login credentials:');
    console.log('Email: admin@yannova.be');
    console.log('Password: admin123');
    
    await prisma.$disconnect();
    await pool.end();
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error);
    process.exit(1);
  }
}

fixAdminPassword();
