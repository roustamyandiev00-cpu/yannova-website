-- Create site_settings table
CREATE TABLE IF NOT EXISTS site_settings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    key TEXT NOT NULL UNIQUE,
    value TEXT,
    category TEXT NOT NULL DEFAULT 'general',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on key for faster lookups
CREATE INDEX IF NOT EXISTS idx_site_settings_key ON site_settings(key);

-- Create index on category for grouping
CREATE INDEX IF NOT EXISTS idx_site_settings_category ON site_settings(category);

-- Enable Row Level Security
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access" ON site_settings
    FOR SELECT TO anon, authenticated
    USING (true);

-- Create policy for authenticated users to insert
CREATE POLICY "Allow authenticated insert" ON site_settings
    FOR INSERT TO authenticated
    WITH CHECK (true);

-- Create policy for authenticated users to update
CREATE POLICY "Allow authenticated update" ON site_settings
    FOR UPDATE TO authenticated
    USING (true)
    WITH CHECK (true);

-- Create policy for authenticated users to delete
CREATE POLICY "Allow authenticated delete" ON site_settings
    FOR DELETE TO authenticated
    USING (true);

-- Insert default settings
INSERT INTO site_settings (key, value, category) VALUES
    ('site_name', 'Yannova', 'general'),
    ('site_description', 'Uw partner voor renovaties en verbouwingen', 'general'),
    ('site_url', 'https://yannova.be', 'general'),
    ('contact_email', 'info@yannova.be', 'contact'),
    ('contact_phone', '', 'contact'),
    ('contact_address', '', 'contact'),
    ('social_facebook', '', 'social'),
    ('social_instagram', '', 'social'),
    ('social_linkedin', '', 'social'),
    ('social_twitter', '', 'social'),
    ('seo_title', 'Yannova - Renovaties & Verbouwingen', 'seo'),
    ('seo_description', 'Professionele renovaties en verbouwingen door Yannova', 'seo'),
    ('seo_keywords', 'renovatie, verbouwing, ramen, deuren, gevel', 'seo')
ON CONFLICT (key) DO NOTHING;
