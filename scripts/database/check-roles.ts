
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
  const { prisma } = await import('../src/lib/prisma');
  
  const users = await prisma.user.findMany({
    select: {
      email: true,
      role: true,
    }
  });

  console.log('Huidige gebruikers en rollen:');
  if (users.length === 0) {
    console.log('Geen gebruikers gevonden.');
  } else {
    users.forEach(u => {
      console.log(`- ${u.email}: ${u.role}`);
    });
  }

  await prisma.$disconnect();
}

main().catch(console.error);
