import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing SUPABASE_SERVICE_ROLE_KEY');
  console.log('URL:', supabaseUrl ? 'set' : 'missing');
  console.log('KEY:', supabaseServiceKey ? 'set' : 'missing');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

async function setupSiteSettings() {
  console.log('Checking if site_settings table exists...');
  
  // Try to select from table to see if it exists
  const { error: checkError } = await supabase
    .from('site_settings')
    .select('*')
    .limit(1);
  
  if (checkError && checkError.code === '42P01') {
    console.log('Table does not exist. Please create it manually in SQL Editor:');
    console.log('\n--- COPY THIS SQL ---');
    console.log(`CREATE TABLE IF NOT EXISTS site_settings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    key TEXT NOT NULL UNIQUE,
    value TEXT,
    category TEXT NOT NULL DEFAULT 'general',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_site_settings_key ON site_settings(key);
CREATE INDEX IF NOT EXISTS idx_site_settings_category ON site_settings(category);

ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access" ON site_settings
    FOR SELECT TO anon, authenticated
    USING (true);

CREATE POLICY "Allow authenticated insert" ON site_settings
    FOR INSERT TO authenticated
    WITH CHECK (true);

CREATE POLICY "Allow authenticated update" ON site_settings
    FOR UPDATE TO authenticated
    USING (true)
    WITH CHECK (true);`);
    console.log('--- END SQL ---\n');
    return;
  }
  
  if (checkError) {
    console.error('Error checking table:', checkError);
    return;
  }
  
  console.log('Table exists! Inserting default settings...');
  
  // Insert default settings
  const defaultSettings = [
    { key: 'site_name', value: 'Yannova', category: 'general' },
    { key: 'site_description', value: 'Uw partner voor renovaties en verbouwingen', category: 'general' },
    { key: 'site_url', value: 'https://yannova.be', category: 'general' },
    { key: 'contact_email', value: 'info@yannova.be', category: 'contact' },
    { key: 'contact_phone', value: '', category: 'contact' },
    { key: 'contact_address', value: '', category: 'contact' },
    { key: 'social_facebook', value: '', category: 'social' },
    { key: 'social_instagram', value: '', category: 'social' },
    { key: 'social_linkedin', value: '', category: 'social' },
    { key: 'social_twitter', value: '', category: 'social' },
    { key: 'seo_title', value: 'Yannova - Renovaties & Verbouwingen', category: 'seo' },
    { key: 'seo_description', value: 'Professionele renovaties en verbouwingen door Yannova', category: 'seo' },
    { key: 'seo_keywords', value: 'renovatie, verbouwing, ramen, deuren, gevel', category: 'seo' },
  ];

  for (const setting of defaultSettings) {
    const { error } = await supabase
      .from('site_settings')
      .upsert(setting, { onConflict: 'key' });
    
    if (error) {
      console.error(`Error inserting ${setting.key}:`, error);
    } else {
      console.log(`✓ ${setting.key}`);
    }
  }
  
  console.log('\n✅ Setup complete!');
}

setupSiteSettings().catch(console.error);
