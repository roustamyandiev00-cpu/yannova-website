const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const adminEmails = [
    'roustamyandiev00@gmail.com',
    'windowpro.be@gmail.com'
  ];
  
  // Wachtwoord: Yannova2024!
  const password = 'Yannova2024!';
  const hashedPassword = await bcrypt.hash(password, 10);

  console.log('🔐 Bezig met aanmaken admin accounts...\n');

  for (const email of adminEmails) {
    try {
      const existingUser = await prisma.user.findUnique({
        where: { email }
      });

      if (existingUser) {
        // Update bestaande gebruiker
        await prisma.user.update({
          where: { email },
          data: {
            password: hashedPassword,
            role: 'super_admin',
            active: true,
            name: email === 'roustamyandiev00@gmail.com' ? 'Roustam' : 'Yannova Admin'
          }
        });
        console.log(`✅ Gebruiker ${email} bijgewerkt`);
      } else {
        // Maak nieuwe gebruiker aan
        await prisma.user.create({
          data: {
            email,
            password: hashedPassword,
            role: 'super_admin',
            active: true,
            name: email === 'roustamyandiev00@gmail.com' ? 'Roustam' : 'Yannova Admin'
          }
        });
        console.log(`✅ Gebruiker ${email} aangemaakt`);
      }
    } catch (error) {
      console.error(`❌ Fout bij ${email}:`, error.message);
    }
  }

  console.log('\n🎉 Klaar! Je kunt nu inloggen met:');
  console.log('📧 Email: roustamyandiev00@gmail.com of windowpro.be@gmail.com');
  console.log('🔑 Wachtwoord: Yannova2024!');
  console.log('\n🌐 Login URL: http://localhost:3000/admin/login');
}

main()
  .catch((e) => {
    console.error('❌ Fout:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
