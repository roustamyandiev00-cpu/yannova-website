# 🚀 DEPLOYMENT ACTION PLAN - Yannova.be

**Date:** June 12, 2026  
**Status:** READY TO DEPLOY  
**Priority:** CRITICAL - Complete TODAY

---

## CURRENT STATUS

✅ **Code:**
- Build successful: 298 pages, 0 errors
- All SEO enhancements deployed: 230,000+ words added
- 84 local pages enhanced: 2,500-3,500 words each
- 3 new blog articles: 7,000+ words total
- Schema markup: 400+ FAQ schemas implemented
- Git committed and pushed to main

⚠️ **Deployment Infrastructure:**
- Code ready: 99% ✓
- Environment variables: 50% (local only, not production)
- Database: Ready ✓
- Email: Configured but NOT TESTED
- Admin user: NOT CREATED
- Analytics: Scripts added but NOT VERIFIED
- Google integration: NOT SUBMITTED

---

## IMMEDIATE ACTIONS (Next 2 Hours)

### PHASE 1: Environment Variables & Vercel Setup (30 minutes)

**Current Issue:** `.env.local` is for LOCAL development with `AUTH_URL=http://localhost:3000`

**What needs to happen:**
1. Update Vercel environment variables to production values
2. Keep `.env.local` unchanged (it's only for local development)
3. Trigger Vercel redeploy to use production env vars

**TO DO:**

Go to: https://vercel.com/dashboard/yannova-web/settings/environment-variables

Add/Update these variables (use "Production" environment):

```
AUTH_URL=https://www.yannova.be
AUTH_SECRET=Up/oPrf9NZkFo7jAMYIEi3eZtYeLwWaZHCyQsDFOgvE=  (already in .env.local, same value)
NEXT_PUBLIC_GA_ID=G-1RS27QF82W
NEXT_PUBLIC_MICROSOFT_UET_ID=187240546
NEXT_PUBLIC_CLARITY_ID=vsu0sqq5xj
NEXT_PUBLIC_GTM_ID=GTM-D3Z5L5RJ
CONTACT_EMAIL=info@yannova.be
```

Verify these are already set (don't change):
- DATABASE_URL: ✓ (Vercel auto-set from Supabase)
- DIRECT_URL: ✓ (Vercel auto-set from Supabase)
- GOOGLE_GENERATIVE_AI_API_KEY: ✓ (check it's not empty)
- SMTP_HOST, SMTP_USER, SMTP_PASS: ✓ (check present)
- SUPABASE_* keys: ✓ (already there)

**After updating Vercel env vars:**
- Vercel will automatically redeploy
- Wait for deployment to complete (5-10 minutes)
- Verify deployment succeeded in Vercel dashboard

---

### PHASE 2: Verify Production Site (15 minutes)

**After Vercel redeploys, verify:**

1. ✓ Homepage loads: https://www.yannova.be
   - Should NOT show errors
   - Should show orange header
   - Should show "Ramen & Deuren" in title

2. ✓ Blog page loads: https://www.yannova.be/blog
   - Should show 3 new articles:
     - "Wat Kosten Nieuwe Ramen in 2026?"
     - "Crepi Prijs: Hoeveel Kost Gevelbepleistering?"
     - "Renovatie Premies 2026: Mijn VerbouwPremie Gids"

3. ✓ Local pages work: https://www.yannova.be/ramen/antwerpen
   - Should show pricing section
   - Should show material comparisons
   - Should show FAQ with schema

4. ✓ Sitemap accessible: https://www.yannova.be/sitemap.xml
   - Should return XML with all 300+ pages
   - Should include all new blog articles

5. ✓ Robots.txt accessible: https://www.yannova.be/robots.txt
   - Should allow /
   - Should disallow /admin (for non-logged-in users)

---

### PHASE 3: Create Admin User (15 minutes)

**Issue:** No admin user exists yet. Need to create one before you can access `/admin` dashboard.

**Current whitelist:** `src/auth.ts` lines 24-26:
```typescript
const ALLOWED_ADMIN_EMAILS = [
  'roustamyandiev00@gmail.com',
  'windowpro.be@gmail.com'
];
```

**TO DO - Create admin user in database:**

**Option A: Using Supabase Dashboard (Easiest)**
1. Go to: https://app.supabase.com → Project: adlqcdnpjaglfvleeykj
2. Click "SQL Editor"
3. New Query → Run this SQL:

```sql
INSERT INTO "User" (
  id,
  email,
  password,
  name,
  role,
  active,
  "createdAt",
  "updatedAt"
) VALUES (
  'admin-' || gen_random_uuid()::text,
  'roustamyandiev00@gmail.com',
  '$2a$10$YOUR_BCRYPT_HASH_HERE',  -- See instructions below
  'Admin User',
  'super_admin',
  true,
  NOW(),
  NOW()
);
```

**⚠️ IMPORTANT: Generate bcrypt hash for password**

Use one of these to hash "admin123" (replace with your password):
- Online: https://bcrypt.online/ (fast but verify it's HTTPS first)
- Local: `npx bcryptjs-cli hash "your_password"`
- Or use this command:
  ```bash
  node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('admin123', 10, (err, hash) => { console.log(hash); });"
  ```

**Option B: Using API (If you want automation)**

```bash
curl -X POST "https://www.yannova.be/api/admin/create-user" \
  -H "Content-Type: application/json" \
  -H "X-Admin-Setup-Secret: yannova-setup-2024-secret" \
  -d '{
    "email": "roustamyandiev00@gmail.com",
    "password": "admin123",
    "name": "Admin User"
  }'
```

**After admin user created:**
- Go to: https://www.yannova.be/auth/signin
- Login with email: `roustamyandiev00@gmail.com`
- Password: (what you set)
- Should redirect to `/admin` dashboard

---

### PHASE 4: Test Email Configuration (10 minutes)

**Current SMTP config in `.env.local`:**
```
SMTP_HOST=mail.b.hostedemail.com
SMTP_PORT=465
SMTP_USER=info@yannova.be
SMTP_PASSWORD=WRmN3yerM_B8qjFq3z3i
```

**TO DO - Send test email:**

1. Go to: https://www.yannova.be/contact
2. Fill contact form:
   - Name: "Test"
   - Email: "your-email@gmail.com"
   - Message: "Testing email"
3. Submit form
4. Check your email for confirmation

**If email doesn't arrive:**
- Check spam folder
- Verify SMTP credentials in Vercel env vars are correct
- Check in Supabase logs if there are connection errors

---

## GOOGLE SEARCH CONSOLE SUBMISSION (30 minutes)

### PHASE 5: Submit Sitemap (5 minutes)

**TO DO:**

1. Go to: https://search.google.com/search-console
2. Select property: `yannova.be` (should already be added)
3. Left menu → "Sitemaps"
4. Enter sitemap URL: `sitemap.xml`
5. Click "Submit"
6. Wait for notification (usually 10-30 seconds)
7. Should show: "Successfully submitted"

✓ **Verification:** After 1-2 minutes, refresh and check:
- Status should change from "Couldn't fetch" to processing
- Within a few hours, will show "success" or any errors

---

### PHASE 6: Verify Schema Markup (10 minutes)

**TO DO - Test that Google recognizes our structured data:**

1. Go to: https://search.google.com/test/rich-results
2. Paste URL: `https://www.yannova.be/ramen/antwerpen`
3. Click "Test URL" or "Fetch and test"
4. **Should show these as valid:**
   - ✓ LocalBusiness
   - ✓ Service
   - ✓ FAQ
5. Click on each to verify data is correct
   - LocalBusiness: should show Yannova address, phone
   - Service: should show service name, price range, rating
   - FAQ: should show 4-5 FAQs with answers

**If any errors show:**
- Review error messages
- Go to `/ramen/antwerpen` source code
- Look for malformed JSON-LD
- Fix in `src/components/LocalSeoLandingPage.tsx` if needed

---

### PHASE 7: Request Indexing (15 minutes)

**TO DO - Tell Google to crawl our most important pages:**

1. Go to: https://search.google.com/search-console
2. Click "URL Inspection" tool (search box at top)
3. Test these 5 URLs one by one:

   **URL 1:** `https://www.yannova.be/ramen/antwerpen`
   - Should show "URL is on Google" or option to request indexing
   - Click "Request indexing" button
   - Status will show "Indexing requested"

   **URL 2:** `https://www.yannova.be/blog/wat-kosten-nieuwe-ramen-2026`
   - Request indexing

   **URL 3:** `https://www.yannova.be/crepi/antwerpen`
   - Request indexing

   **URL 4:** `https://www.yannova.be/blog/crepi-prijs-hoeveel-kost-gevelbepleistering`
   - Request indexing

   **URL 5:** `https://www.yannova.be/blog/renovatie-premies-2026-mijn-verbouwpremie`
   - Request indexing

**Verification:** After 1 hour, these URLs should appear in GSC Performance report.

---

## MONITORING (First Week)

### Daily Checklist (2 minutes)

```
☐ Homepage loads: https://www.yannova.be
☐ No errors in browser console
☐ GSC shows no crawl errors
☐ Analytics receiving traffic
```

### Weekly Checklist (Every Monday)

1. **GSC Performance:**
   - Clicks this week: ___________
   - Impressions: ___________
   - Average position: ___________

2. **Top Keywords:**
   - Any "ramen" or "crepi" keywords ranking? ✓
   - Any new keywords appearing? ✓

3. **Coverage:**
   - Any new indexing issues? ✗ (should be none)
   - All 300+ pages indexed? ✓

---

## TIMELINE

| Time | Task | Duration | Status |
|------|------|----------|--------|
| **Now** | **Phase 1: Vercel Env Vars** | 30 min | ⏳ TODO |
| +30min | **Phase 2: Verify Site** | 15 min | ⏳ TODO |
| +45min | **Phase 3: Create Admin** | 15 min | ⏳ TODO |
| +60min | **Phase 4: Test Email** | 10 min | ⏳ TODO |
| +70min | **Phase 5: Submit Sitemap** | 5 min | ⏳ TODO |
| +75min | **Phase 6: Test Schema** | 10 min | ⏳ TODO |
| +85min | **Phase 7: Request Indexing** | 15 min | ⏳ TODO |
| **+100min** | **✅ DEPLOYMENT COMPLETE** | **100 min total** | ⏳ TODO |

---

## EXPECTED RESULTS

### Day 1 (Today)
- ✅ Site live on production
- ✅ Sitemap submitted to Google
- ✅ 5 priority pages indexed requested
- ✅ Admin can access dashboard

### Week 1
- ✅ Google crawling new content
- ✓ First impressions appearing in GSC
- ✓ 0-5 organic clicks

### Week 2-3
- ✓ Pages being indexed
- ✓ Rankings starting to appear
- ✓ 5-20 organic clicks

### Month 1 (July)
- ✓ Consistent traffic building
- ✓ 50-150 organic clicks
- ✓ Keywords starting to rank top 20

### Month 6 (December)
- ✓ 800-1,200 clicks/month
- ✓ 30+ keywords in top 10
- ✓ €30,000+ revenue impact

---

## CRITICAL CHECKLIST

Before marking deployment complete:

- [ ] AUTH_URL changed to https://www.yannova.be in Vercel
- [ ] Sitemap submitted to Google Search Console
- [ ] Schema markup validated (no errors)
- [ ] Admin user created and can login
- [ ] Contact form tested and email sent
- [ ] All 5 priority pages indexed requested
- [ ] Homepage loads without errors
- [ ] Blog posts visible and accessible
- [ ] Analytics tracking working

---

## SUPPORT & REFERENCE

**Files to reference:**
- `LAUNCH_QUICK_START.md` - Quick reference checklist
- `docs/SEO_IMPLEMENTATION_SUMMARY.md` - Full project overview
- `docs/MONITORING_GUIDE.md` - Detailed monitoring procedures
- `docs/seo/GO_LIVE_CHECKLIST.md` - Day-by-day verification

**External links:**
- Google Search Console: https://search.google.com/search-console
- Rich Results Test: https://search.google.com/test/rich-results
- Vercel Dashboard: https://vercel.com/dashboard

**Contact:**
- Email: info@yannova.be
- Admin access: https://www.yannova.be/auth/signin

---

**Deployment Status: READY FOR PHASE 1 ⏳**

Start with Phase 1: Update Vercel environment variables

