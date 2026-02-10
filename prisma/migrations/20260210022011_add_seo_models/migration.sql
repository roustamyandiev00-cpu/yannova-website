-- CreateTable
CREATE TABLE "SeoPage" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "keywords" TEXT,
    "ogImage" TEXT,
    "ogTitle" TEXT,
    "ogDescription" TEXT,
    "canonicalUrl" TEXT,
    "h1" TEXT,
    "noindex" BOOLEAN NOT NULL DEFAULT false,
    "nofollow" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SeoPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeoAudit" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "issue" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "fixed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fixedAt" TIMESTAMP(3),

    CONSTRAINT "SeoAudit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SeoPage_path_key" ON "SeoPage"("path");

-- CreateIndex
CREATE INDEX "SeoPage_path_idx" ON "SeoPage"("path");

-- CreateIndex
CREATE INDEX "SeoAudit_path_idx" ON "SeoAudit"("path");

-- CreateIndex
CREATE INDEX "SeoAudit_createdAt_idx" ON "SeoAudit"("createdAt");
