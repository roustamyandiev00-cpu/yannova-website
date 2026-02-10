-- Enable RLS and add policies for Prisma tables

-- User table
ALTER TABLE "User" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow admin full access on User" ON "User"
    FOR ALL TO authenticated
    USING (true)
    WITH CHECK (true);

-- Project table
ALTER TABLE "Project" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on Project" ON "Project"
    FOR SELECT TO anon, authenticated
    USING (true);

CREATE POLICY "Allow admin full access on Project" ON "Project"
    FOR ALL TO authenticated
    USING (true)
    WITH CHECK (true);

-- Lead table
ALTER TABLE "Lead" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert on Lead" ON "Lead"
    FOR INSERT TO anon, authenticated
    WITH CHECK (true);

CREATE POLICY "Allow admin full access on Lead" ON "Lead"
    FOR ALL TO authenticated
    USING (true)
    WITH CHECK (true);

-- Testimonial table
ALTER TABLE "Testimonial" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read approved Testimonials" ON "Testimonial"
    FOR SELECT TO anon, authenticated
    USING ("approved" = true);

CREATE POLICY "Allow admin full access on Testimonial" ON "Testimonial"
    FOR ALL TO authenticated
    USING (true)
    WITH CHECK (true);

-- MediaFile table
ALTER TABLE "MediaFile" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on MediaFile" ON "MediaFile"
    FOR SELECT TO anon, authenticated
    USING (true);

CREATE POLICY "Allow admin full access on MediaFile" ON "MediaFile"
    FOR ALL TO authenticated
    USING (true)
    WITH CHECK (true);

-- PageView table
ALTER TABLE "PageView" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert on PageView" ON "PageView"
    FOR INSERT TO anon, authenticated
    WITH CHECK (true);

CREATE POLICY "Allow admin read on PageView" ON "PageView"
    FOR SELECT TO authenticated
    USING (true);

-- ActivityLog table
ALTER TABLE "ActivityLog" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow admin full access on ActivityLog" ON "ActivityLog"
    FOR ALL TO authenticated
    USING (true)
    WITH CHECK (true);
