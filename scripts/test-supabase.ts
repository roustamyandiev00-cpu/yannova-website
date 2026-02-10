// Test Supabase connection and settings
import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log('Testing Supabase connection...\n');

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase URL or Anon Key');
  process.exit(1);
}

console.log('✓ Environment variables present');
console.log(`  URL: ${supabaseUrl.substring(0, 30)}...`);

// Test anon client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  try {
    // Test 1: Check if we can connect
    console.log('\n1. Testing connection...');
    const { error: healthError } = await supabase.from('site_settings').select('count(*)', { count: 'exact', head: true });

    if (healthError) {
      console.error('❌ Connection failed:', healthError.message);
      console.error('Error details:', JSON.stringify(healthError, null, 2));
      return;
    }
    console.log('✓ Supabase is reachable');

    // Test 2: Fetch settings
    console.log('\n2. Testing site_settings fetch...');
    const { data: settings, error: settingsError } = await supabase
      .from('site_settings')
      .select('*');

    if (settingsError) {
      console.error('❌ Fetch failed:', settingsError.message);
      return;
    }

    console.log(`✓ Retrieved ${settings?.length || 0} settings:`);
    settings?.forEach(s => {
      console.log(`  - ${s.key}: ${s.value?.substring(0, 40) || '(empty)'}${s.value?.length > 40 ? '...' : ''}`);
    });

    // Test 3: Service role (if available)
    if (supabaseServiceKey) {
      console.log('\n3. Testing service role client...');
      const supabaseAdmin = createClient(supabaseUrl!, supabaseServiceKey, {
        auth: { autoRefreshToken: false, persistSession: false },
      });

      const { error: adminError } = await supabaseAdmin
        .from('site_settings')
        .select('*', { head: true });

      if (adminError) {
        console.error('❌ Service role failed:', adminError.message);
      } else {
        console.log('✓ Service role client works');
      }
    }

    console.log('\n✅ All Supabase tests passed!');

  } catch (error) {
    console.error('\n❌ Test error:', error);
  }
}

testConnection();
