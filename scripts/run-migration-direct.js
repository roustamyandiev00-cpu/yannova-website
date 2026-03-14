const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function checkTables() {
  console.log('🔍 Checking if tables exist...\n');
  
  const { data: orders, error: ordersError } = await supabase
    .from('shop_orders')
    .select('count')
    .limit(1);

  const { data: items, error: itemsError } = await supabase
    .from('shop_order_items')
    .select('count')
    .limit(1);

  if (!ordersError && !itemsError) {
    console.log('✅ Tables already exist!');
    console.log('   - shop_orders ✓');
    console.log('   - shop_order_items ✓');
    console.log('\n🎉 Database is ready!');
    return true;
  }

  return false;
}

async function runMigration() {
  console.log('🚀 Database Migration Tool\n');
  console.log('=' .repeat(50));
  
  const exists = await checkTables();
  
  if (exists) {
    console.log('\n✨ No migration needed - tables already exist!');
    return;
  }

  console.log('\n❌ Tables not found');
  console.log('\n📋 Manual Migration Required:');
  console.log('=' .repeat(50));
  console.log('\n1. Open Supabase Dashboard:');
  console.log(`   ${supabaseUrl.replace('/rest/v1', '')}`);
  console.log('\n2. Go to: SQL Editor → New Query');
  console.log('\n3. Copy and paste this SQL:\n');
  
  const migrationPath = path.join(__dirname, '..', 'supabase', 'migrations', '20240315_create_shop_tables.sql');
  const sql = fs.readFileSync(migrationPath, 'utf8');
  
  console.log('─'.repeat(50));
  console.log(sql);
  console.log('─'.repeat(50));
  
  console.log('\n4. Click "Run" button');
  console.log('\n5. Verify tables are created');
  console.log('\n💡 Or copy from: supabase/migrations/20240315_create_shop_tables.sql');
}

runMigration().catch(console.error);
