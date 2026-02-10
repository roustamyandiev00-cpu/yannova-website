-- Create tables from Prisma schema

-- User table
CREATE TABLE IF NOT EXISTS "User" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT NOT NULL DEFAULT 'admin',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "lastLogin" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User"("email");

-- Project table
CREATE TABLE IF NOT EXISTS "Project" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "views" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- Lead table
CREATE TABLE IF NOT EXISTS "Lead" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "message" TEXT NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'chatbot',
    "read" BOOLEAN NOT NULL DEFAULT false,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "priority" TEXT NOT NULL DEFAULT 'normal',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- Testimonial table
CREATE TABLE IF NOT EXISTS "Testimonial" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "company" TEXT,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "text" TEXT NOT NULL,
    "imageUrl" TEXT,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);

-- MediaFile table
CREATE TABLE IF NOT EXISTS "MediaFile" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "filename" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "mimeType" TEXT NOT NULL,
    "folder" TEXT NOT NULL DEFAULT 'uploads',
    "alt" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "MediaFile_pkey" PRIMARY KEY ("id")
);

-- PageView table
CREATE TABLE IF NOT EXISTS "PageView" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "path" TEXT NOT NULL,
    "referrer" TEXT,
    "userAgent" TEXT,
    "ip" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "PageView_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "PageView_path_idx" ON "PageView"("path");
CREATE INDEX IF NOT EXISTS "PageView_createdAt_idx" ON "PageView"("createdAt");

-- ActivityLog table
CREATE TABLE IF NOT EXISTS "ActivityLog" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "entity" TEXT NOT NULL,
    "entityId" TEXT,
    "details" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ActivityLog_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "ActivityLog_userId_idx" ON "ActivityLog"("userId");
CREATE INDEX IF NOT EXISTS "ActivityLog_createdAt_idx" ON "ActivityLog"("createdAt");

-- AddForeignKey
ALTER TABLE "ActivityLog" ADD CONSTRAINT "ActivityLog_userId_fkey" 
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
