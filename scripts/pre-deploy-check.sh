#!/bin/bash

# Pre-deployment checklist script
# Run before deploying to production

echo "🚀 Yannova.be Pre-Deployment Check"
echo "===================================="
echo ""

ERRORS=0
WARNINGS=0

# Colors
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Check if .env.local exists
echo "📋 Checking environment configuration..."
if [ ! -f .env.local ]; then
    echo -e "${RED}❌ .env.local not found${NC}"
    ERRORS=$((ERRORS + 1))
else
    echo -e "${GREEN}✅ .env.local exists${NC}"
    
    # Check required variables
    required_vars=("SMTP_HOST" "SMTP_USER" "SMTP_PASS" "AUTH_SECRET" "DATABASE_URL")
    for var in "${required_vars[@]}"; do
        if grep -q "^${var}=" .env.local && ! grep -q "${var}=YOUR_" .env.local; then
            echo -e "${GREEN}  ✅ ${var} is set${NC}"
        else
            echo -e "${RED}  ❌ ${var} is not set or still has placeholder${NC}"
            ERRORS=$((ERRORS + 1))
        fi
    done
fi
echo ""

# Check if build succeeds
echo "🔨 Testing production build..."
if npm run build > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Build successful${NC}"
else
    echo -e "${RED}❌ Build failed - check errors above${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Check if sitemap is accessible
echo "🗺️  Checking sitemap..."
if [ -f "src/app/sitemap.ts" ]; then
    echo -e "${GREEN}✅ Sitemap file exists${NC}"
else
    echo -e "${RED}❌ Sitemap file not found${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Check if robots.txt is configured
echo "🤖 Checking robots.txt..."
if [ -f "src/app/robots.ts" ]; then
    echo -e "${GREEN}✅ Robots.txt configured${NC}"
else
    echo -e "${RED}❌ Robots.txt not found${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Check for OG image
echo "🖼️  Checking Open Graph image..."
if [ -f "public/og-image.jpg" ] || [ -f "public/og-image.png" ]; then
    echo -e "${GREEN}✅ OG image exists${NC}"
else
    echo -e "${YELLOW}⚠️  OG image not found - create public/og-image.jpg (1200x630px)${NC}"
    WARNINGS=$((WARNINGS + 1))
fi
echo ""

# Check for logo
echo "🎨 Checking logo..."
if [ -f "public/logo.png" ] || [ -f "public/logo.svg" ]; then
    echo -e "${GREEN}✅ Logo exists${NC}"
else
    echo -e "${YELLOW}⚠️  Logo not found - create public/logo.png${NC}"
    WARNINGS=$((WARNINGS + 1))
fi
echo ""

# Check TypeScript
echo "📘 Checking TypeScript..."
if npx tsc --noEmit > /dev/null 2>&1; then
    echo -e "${GREEN}✅ No TypeScript errors${NC}"
else
    echo -e "${YELLOW}⚠️  TypeScript warnings found${NC}"
    WARNINGS=$((WARNINGS + 1))
fi
echo ""

# Check for common issues
echo "🔍 Checking for common issues..."

# Check for console.logs
if grep -r "console.log" src/ --exclude-dir=node_modules > /dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  console.log statements found - consider removing for production${NC}"
    WARNINGS=$((WARNINGS + 1))
else
    echo -e "${GREEN}✅ No console.log statements${NC}"
fi

# Check for TODO comments
TODO_COUNT=$(grep -r "TODO" src/ --exclude-dir=node_modules 2>/dev/null | wc -l)
if [ "$TODO_COUNT" -gt 0 ]; then
    echo -e "${YELLOW}⚠️  ${TODO_COUNT} TODO comments found${NC}"
    WARNINGS=$((WARNINGS + 1))
else
    echo -e "${GREEN}✅ No TODO comments${NC}"
fi
echo ""

# Summary
echo "=================================="
echo "📊 Summary"
echo "=================================="
echo -e "Errors: ${RED}${ERRORS}${NC}"
echo -e "Warnings: ${YELLOW}${WARNINGS}${NC}"
echo ""

if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✅ Ready for deployment!${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Commit and push to GitHub: git push origin main"
    echo "2. Add environment variables to Vercel (see VERCEL_DEPLOYMENT.md)"
    echo "3. Deploy from Vercel dashboard"
    echo "4. Test production site"
    echo "5. Submit sitemap to Google Search Console"
    exit 0
else
    echo -e "${RED}❌ Fix errors before deploying${NC}"
    exit 1
fi
