// Direct database insert via environment variable
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

// Load env
require('dotenv').config({ path: '.env.local' });
require('dotenv').config({ path: '.env' });

async function main() {
  const connectionString = process.env.DATABASE_URL;
  
  if (!connectionString) {
    console.error('❌ DATABASE_URL niet gevonden in .env.local of .env');
    process.exit(1);
  }

  console.log('🔗 Verbinden met database...');
  
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  
  const pool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false }
  });

  try {
    // Test connection
    await pool.query('SELECT 1');
    console.log('✅ Database verbinding succesvol\n');

    // Generate password hash
    const password = 'Yannova2024!';
    const hash = await bcrypt.hash(password, 10);
    console.log('🔐 Wachtwoord hash gegenereerd\n');

    // Delete existing users
    console.log('🗑️  Verwijderen van bestaande admin accounts...');
    await pool.query(
      `DELETE FROM "User" WHERE email IN ($1, $2)`,
      ['roustamyandiev00@gmail.com', 'windowpro.be@gmail.com']
    );

    // Insert new users
    console.log('➕ Aanmaken van nieuwe admin accounts...');
    const result = await pool.query(
      `INSERT INTO "User" (id, email, password, name, role, active, "createdAt", "updatedAt")
       VALUES 
         ($1, $2, $3, $4, $5, $6, NOW(), NOW()),
         ($7, $8, $9, $10, $11, $12, NOW(), NOW())
       RETURNING email, name, role, active`,
      [
        'clx' + Math.random().toString(36).substring(2, 15),
        'roustamyandiev00@gmail.com',
        hash,
        'Roustam',
        'super_admin',
        true,
        'clx' + Math.random().toString(36).substring(2, 15),
        'windowpro.be@gmail.com',
        hash,
        'Yannova Admin',
        'super_admin',
        true
      ]
    );

    console.log('\n✅ Admin accounts succesvol aangemaakt:\n');
    result.rows.forEach(user => {
      console.log(`   📧 ${user.email}`);
      console.log(`   👤 ${user.name}`);
      console.log(`   🔑 ${user.role}`);
      console.log(`   ✓  ${user.active ? 'Actief' : 'Inactief'}\n`);
    });

    console.log('🎉 Klaar! Je kunt nu inloggen met:');
    console.log('📧 Email: roustamyandiev00@gmail.com of windowpro.be@gmail.com');
    console.log('🔑 Wachtwoord: Yannova2024!');
    console.log('🌐 Login URL: http://localhost:3000/admin/login\n');

  } catch (error) {
    console.error('❌ Fout:', error.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

main();
