#!/bin/bash

# Verification script for website improvements
# Run this after implementing changes to verify everything works

echo "🔍 Verifying Website Improvements..."
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if files exist
echo "📁 Checking if new files exist..."

files=(
  "src/lib/csrf.ts"
  "src/lib/rate-limit-redis.ts"
  "src/lib/analytics-tracker.ts"
  "src/app/api/csrf/route.ts"
  "src/components/OptimizedImage.tsx"
  "IMPROVEMENTS_IMPLEMENTED.md"
  "QUICK_START_GUIDE.md"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo -e "${GREEN}✓${NC} $file exists"
  else
    echo -e "${RED}✗${NC} $file missing"
  fi
done

echo ""
echo "🔧 Checking modified files..."

# Check if CSRF is implemented in contact route
if grep -q "getCsrfTokenFromRequest" "src/app/api/contact/route.ts"; then
  echo -e "${GREEN}✓${NC} CSRF protection added to contact route"
else
  echo -e "${RED}✗${NC} CSRF protection missing in contact route"
fi

# Check if font optimization is added
if grep -q "display: 'swap'" "src/app/layout.tsx"; then
  echo -e "${GREEN}✓${NC} Font optimization added"
else
  echo -e "${RED}✗${NC} Font optimization missing"
fi

# Check if preconnect links are added
if grep -q "preconnect" "src/app/layout.tsx"; then
  echo -e "${GREEN}✓${NC} Preconnect links added"
else
  echo -e "${RED}✗${NC} Preconnect links missing"
fi

# Check if security headers are added
if grep -q "Content-Security-Policy" "next.config.ts"; then
  echo -e "${GREEN}✓${NC} Security headers added"
else
  echo -e "${RED}✗${NC} Security headers missing"
fi

# Check if aria-live is added to ContactForm
if grep -q "aria-live" "src/components/ContactForm.tsx"; then
  echo -e "${GREEN}✓${NC} Accessibility improvements added to ContactForm"
else
  echo -e "${RED}✗${NC} Accessibility improvements missing in ContactForm"
fi

echo ""
echo "⚠️  Manual Checks Required:"
echo ""
echo "1. ${YELLOW}Credentials Rotation${NC}"
echo "   - Have you rotated all credentials in .env.local?"
echo "   - Have you updated Vercel environment variables?"
echo ""
echo "2. ${YELLOW}Apple Touch Icon${NC}"
echo "   - Does public/apple-touch-icon.png exist?"
echo ""
echo "3. ${YELLOW}Build Test${NC}"
echo "   - Run: npm run build"
echo "   - Check for any errors"
echo ""
echo "4. ${YELLOW}Local Testing${NC}"
echo "   - Run: npm run start"
echo "   - Test contact form with CSRF token"
echo "   - Check browser console for errors"
echo ""
echo "5. ${YELLOW}Production Deployment${NC}"
echo "   - Commit and push changes"
echo "   - Verify deployment on Vercel"
echo "   - Test live site"
echo ""
echo "📚 For detailed instructions, see:"
echo "   - QUICK_START_GUIDE.md (immediate actions)"
echo "   - IMPROVEMENTS_IMPLEMENTED.md (full details)"
echo ""
echo "✨ Done!"
