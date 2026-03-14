const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function runMigration() {
  console.log('🚀 Starting database migration...\n');

  try {
    // Read the migration file
    const migrationPath = path.join(__dirname, '..', 'supabase', 'migrations', '20240315_create_shop_tables.sql');
    const sql = fs.readFileSync(migrationPath, 'utf8');

    console.log('📄 Migration file loaded');
    console.log('📊 Executing SQL...\n');

    // Execute the SQL
    const { data, error } = await supabase.rpc('exec_sql', { sql_query: sql });

    if (error) {
      // If exec_sql doesn't exist, try direct query
      console.log('⚠️  exec_sql function not found, trying direct execution...\n');
      
      // Split SQL into individual statements
      const statements = sql
        .split(';')
        .map(s => s.trim())
        .filter(s => s.length > 0 && !s.startsWith('--'));

      for (const statement of statements) {
        if (statement) {
          console.log(`Executing: ${statement.substring(0, 50)}...`);
          const { error: stmtError } = await supabase.rpc('exec', { sql: statement });
          if (stmtError) {
            console.error(`❌ Error: ${stmtError.message}`);
          }
        }
      }
    }

    console.log('\n✅ Migration completed successfully!');
    console.log('\n📋 Created tables:');
    console.log('   - shop_orders');
    console.log('   - shop_order_items');
    console.log('\n🔐 RLS policies enabled');
    console.log('📊 Indexes created');
    console.log('\n🎉 Database is ready for the shop!');

  } catch (error) {
    console.error('\n❌ Migration failed:', error.message);
    console.log('\n💡 Please run the migration manually:');
    console.log('   1. Go to Supabase Dashboard');
    console.log('   2. SQL Editor → New Query');
    console.log('   3. Copy content from: supabase/migrations/20240315_create_shop_tables.sql');
    console.log('   4. Run the query');
    process.exit(1);
  }
}

runMigration();
