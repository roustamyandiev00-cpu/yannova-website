const bcrypt = require('bcryptjs');

const password = 'Yannova2024!';
const hash = bcrypt.hashSync(password, 10);

console.log('\n🔐 Bcrypt hash voor wachtwoord "Yannova2024!":');
console.log(hash);
console.log('\n📋 Kopieer deze hash en gebruik het in Supabase SQL Editor:\n');

console.log(`-- Admin gebruikers aanmaken voor Yannova.be
-- Wachtwoord: Yannova2024!

-- Verwijder eerst eventuele bestaande gebruikers met deze emails
DELETE FROM "User" WHERE email IN ('roustamyandiev00@gmail.com', 'windowpro.be@gmail.com');

-- Maak de admin gebruikers aan
INSERT INTO "User" (id, email, password, name, role, active, "createdAt", "updatedAt")
VALUES 
  (
    'clx' || substr(md5(random()::text), 1, 22),
    'roustamyandiev00@gmail.com',
    '${hash}',
    'Roustam',
    'super_admin',
    true,
    NOW(),
    NOW()
  ),
  (
    'clx' || substr(md5(random()::text), 1, 22),
    'windowpro.be@gmail.com',
    '${hash}',
    'Yannova Admin',
    'super_admin',
    true,
    NOW(),
    NOW()
  );

-- Controleer of de gebruikers zijn aangemaakt
SELECT email, name, role, active, "createdAt" FROM "User" 
WHERE email IN ('roustamyandiev00@gmail.com', 'windowpro.be@gmail.com');
`);

console.log('\n✅ Voer deze SQL uit in Supabase SQL Editor');
console.log('📍 Ga naar: https://supabase.com/dashboard/project/[jouw-project]/sql/new\n');
