import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const prisma = new PrismaClient();

async function main() {
  const adminEmails = [
    'roustamyandiev00@gmail.com',
    'windowpro.be@gmail.com'
  ];
  
  // Wachtwoord: Yannova2024!
  const password = 'Yannova2024!';
  const hashedPassword = await bcrypt.hash(password, 10);

  for (const email of adminEmails) {
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
  }

  console.log('\n🎉 Klaar! Je kunt nu inloggen met:');
  console.log('Email: roustamyandiev00@gmail.com of windowpro.be@gmail.com');
  console.log('Wachtwoord: Yannova2024!');
}

main()
  .catch((e) => {
    console.error('❌ Fout:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
