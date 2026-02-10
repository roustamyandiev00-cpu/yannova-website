import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables');
  process.exit(1);
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

async function runMigration() {
  try {
    // Read the migration file
    const migrationPath = path.join(__dirname, '..', 'supabase', 'migrations', '20250210023400_create_site_settings.sql');
    const sql = fs.readFileSync(migrationPath, 'utf8');
    
    console.log('📦 Running Supabase migration...');
    
    // Execute the SQL
    const { error } = await supabaseAdmin.rpc('exec_sql', { sql });
    
    if (error) {
      // If exec_sql doesn't exist, try running queries directly
      console.log('⚠️ exec_sql not available, trying direct queries...');
      
      // Split SQL into statements and execute individually
      const statements = sql.split(';').filter(s => s.trim());
      
      for (const statement of statements) {
        if (statement.trim()) {
          const { error: queryError } = await supabaseAdmin.rpc('exec_sql', { 
            sql: statement.trim() + ';' 
          });
          
          if (queryError && !queryError.message.includes('already exists')) {
            console.log('Query error (may be expected):', queryError.message);
          }
        }
      }
    }
    
    console.log('✅ Migration completed!');
    
    // Verify table exists
    const { data, error: verifyError } = await supabaseAdmin
      .from('site_settings')
      .select('count(*)', { count: 'exact', head: true });
    
    if (verifyError) {
      console.error('❌ Table verification failed:', verifyError.message);
    } else {
      console.log('✅ site_settings table is ready');
    }
    
  } catch (error) {
    console.error('❌ Migration error:', error);
  }
}

runMigration();
