const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkAdmin() {
  try {
    const user = await prisma.user.findUnique({
      where: { email: 'admin@yannova.be' }
    });
    
    console.log('Admin user:', JSON.stringify(user, null, 2));
    
    if (user) {
      console.log('\nUser details:');
      console.log('- Email:', user.email);
      console.log('- Role:', user.role);
      console.log('- Name:', user.name);
    } else {
      console.log('Admin user not found!');
    }
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

checkAdmin();
