const bcrypt = require('bcryptjs');

async function generateSQL() {
  const password = 'Yannova2024!';
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const adminEmails = [
    { email: 'roustamyandiev00@gmail.com', name: 'Roustam' },
    { email: 'windowpro.be@gmail.com', name: 'Yannova Admin' }
  ];

  console.log('\n=== SQL VOOR SUPABASE SQL EDITOR ===\n');
  console.log('-- Kopieer en plak deze SQL in Supabase SQL Editor\n');
  console.log('-- Verwijder eerst eventuele bestaande admin accounts');
  console.log(`DELETE FROM "User" WHERE email IN ('${adminEmails.map(a => a.email).join("', '")}');\n`);
  console.log('-- Maak nieuwe admin accounts aan');
  
  adminEmails.forEach(admin => {
    console.log(`INSERT INTO "User" (id, email, password, name, role, active, "createdAt", "updatedAt")`);
    console.log(`VALUES (`);
    console.log(`  'clx' || substr(md5(random()::text), 1, 22),`);
    console.log(`  '${admin.email}',`);
    console.log(`  '${hashedPassword}',`);
    console.log(`  '${admin.name}',`);
    console.log(`  'super_admin',`);
    console.log(`  true,`);
    console.log(`  NOW(),`);
    console.log(`  NOW()`);
    console.log(`);\n`);
  });

  console.log('\n=== LOGIN GEGEVENS ===');
  console.log('URL: https://www.yannova.be/admin/login');
  console.log('Emails:');
  adminEmails.forEach(admin => console.log(`  - ${admin.email}`));
  console.log(`Wachtwoord: ${password}`);
  console.log('\n=== INSTRUCTIES ===');
  console.log('1. Ga naar https://supabase.com/dashboard');
  console.log('2. Selecteer je project');
  console.log('3. Ga naar SQL Editor');
  console.log('4. Kopieer de SQL hierboven');
  console.log('5. Plak in SQL Editor en klik op "Run"');
  console.log('6. Test login op https://www.yannova.be/admin/login\n');
}

generateSQL().catch(console.error);
