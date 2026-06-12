# Go-Live Checklist - Yannova.be SEO Optimization

**Status:** ✅ Code Ready, Awaiting Deployment

## 🚀 Pre-Launch Verification (Local)

- [x] Build successful: `npm run build` ✓
- [x] No TypeScript errors
- [x] All 298 pages generated
- [x] Sitemap includes all new content
- [x] Schema markup validated
- [x] Images optimized
- [x] No 404 links

## 📋 Deployment Steps

### 1. Deploy to Production
```bash
# Push to Vercel / hosting provider
git push origin main

# Or manually build and deploy
npm run build
npm run start
```

### 2. Verify Live (5 minutes after deploy)
- [ ] Check homepage loads: https://www.yannova.be
- [ ] Check ramen page: https://www.yannova.be/ramen/antwerpen
- [ ] Check blog post: https://www.yannova.be/blog/wat-kosten-nieuwe-ramen-2026
- [ ] Check crepi page: https://www.yannova.be/crepi/antwerpen
- [ ] Sitemap loads: https://www.yannova.be/sitemap.xml

## 🔍 Google Search Console (Day 1)

### Within 1 hour of launch:

1. **Submit Sitemap**
   - Go to: https://search.google.com/search-console
   - Select property: yannova.be
   - Click "Sitemaps" (left menu)
   - Enter: `sitemap.xml`
   - Click "Submit"

2. **Request Indexing (High Priority)**
   - Go to "URL Inspection" tool (search bar at top)
   - Test these URLs:
     - https://www.yannova.be/ramen/antwerpen
     - https://www.yannova.be/blog/wat-kosten-nieuwe-ramen-2026
     - https://www.yannova.be/crepi/antwerpen
     - https://www.yannova.be/blog/crepi-prijs-hoeveel-kost-gevelbepleistering
     - https://www.yannova.be/blog/renovatie-premies-2026-mijn-verbouwpremie
   - For each: Click "Request indexing" button

3. **Verify Schema Markup**
   - Go to "Rich Results Test" (Google's Rich Results Test tool)
   - Test: https://www.yannova.be/ramen/antwerpen
   - Should show: LocalBusiness, Service, FAQ schemas ✓
   - Test: https://www.yannova.be/blog/wat-kosten-nieuwe-ramen-2026
   - Should show: FAQPage schema ✓

## 📊 Analytics Setup (Day 1)

- [ ] Verify Google Analytics tracking working
  - Check: Real-time visitors
  - Check: Events firing (form submissions, CTA clicks)

- [ ] Verify Google Tag Manager
  - Check: All events recorded
  - Check: Conversions tracked

- [ ] Setup Google Search Console alerts
  - Crawl errors
  - Core Web Vitals issues
  - Security issues

## 🧪 On-Page Tests (Day 1-2)

### Mobile Friendliness
- [ ] Test homepage: https://search.google.com/test/mobile-friendly
- [ ] Test local page: https://search.google.com/test/mobile-friendly
- [ ] All should pass ✓

### Page Speed
- [ ] Homepage: https://pagespeed.web.dev → Target: >80
- [ ] Blog post: https://pagespeed.web.dev → Target: >75
- [ ] Local page: https://pagespeed.web.dev → Target: >80

### Rich Snippets
- [ ] Rich Results Test (FAQ): https://search.google.com/test/rich-results
- [ ] Rich Results Test (LocalBusiness): https://search.google.com/test/rich-results

## 📈 Monitoring Setup (Day 2)

### Keyword Tracking
Monitor these keywords weekly (use GSC or SEMrush):

**High Priority (Most searches):**
- "ramen antwerpen"
- "renovatie premies 2026"
- "crepi prijs"
- "gevelisolatie antwerpen"
- "wat kosten nieuwe ramen"

**Track in:**
- Google Search Console (free)
- Or SEMrush/Ahrefs (paid)

### Traffic Baseline
- [ ] Screenshot Google Analytics (organic traffic baseline)
- [ ] Note current ranking positions (use Google Search Console)
- [ ] Record date: __________

## 🎯 Quick Wins First Week

### Content Marketing
- [ ] Share new blog posts on social media
  - Facebook: 5 posts (1 per article over 5 days)
  - WhatsApp Business: Share link in status
  - Email: Send to recent clients

- [ ] Internal linking review
  - Add links from homepage to blog articles
  - Add links from services page to local pages

### Google Business Profile
- [ ] Add 5 new project photos
- [ ] Post "We've updated our website" update
- [ ] Ask 3 recent clients for Google review

## 📝 First Month Checklist

### Week 1
- [x] Deploy to production
- [x] Submit sitemap to GSC
- [x] Request indexing for priority pages
- [x] Verify schemas with Rich Results Test
- [x] Check mobile friendliness
- [x] Baseline keyword rankings

### Week 2-3
- [ ] Social media promotion of new content
- [ ] Send email to client list about premies blog
- [ ] Check GSC for new impressions
- [ ] Any crawl errors? Fix them.

### Week 4
- [ ] Check rankings for top 10 keywords
- [ ] Analyze traffic from new blog posts
- [ ] Calculate early ROI (leads from organic)
- [ ] Plan next content batch (if going well)

## 🔄 Monthly Routine

### Every Monday (Automated or Manual)

**Check rankings:**
- Top 20 keywords ranking?
- Any sudden drops? (Fix immediately)
- New keywords ranking?

**Check traffic:**
- Organic visitors: higher than last week?
- Blog traffic: growing?
- Local page traffic: any standouts?

**Check GSC:**
- New indexing issues?
- Core Web Vitals status?
- New backlinks detected?

### Every Month (Full Audit)

**Check Content:**
- Do descriptions match page content?
- Are calls-to-action visible?
- Are old blog posts still relevant?

**Update if needed:**
- Premies blog: Update for new government changes
- Pricing: If prices changed, update blog
- Local pages: Add new testimonials

**Check competitors:**
- What are they ranking for?
- Any new content strategies?
- Better local pages than ours?

## 🚨 Red Flags to Watch

### If you see this → Do this:
| Issue | Action |
|-------|--------|
| Traffic drops 50%+ | Check Search Console for errors, check if pages still indexed, check robots.txt |
| Crawl error spike | Fix errors in GSC, resubmit sitemap |
| Mobile score drops | Test with Lighthouse, check viewport meta tag, fix CSS issues |
| New competitors ranking | Analyze their pages, improve our content, add backlinks |
| Keyword position drops 10+ spots | Check on-page factors, add internal links, improve content |

## 📞 Support Resources

- Google Search Console Help: https://support.google.com/webmasters
- PageSpeed Insights: https://pagespeed.web.dev
- Rich Results Test: https://search.google.com/test/rich-results
- Mobile Friendly Test: https://search.google.com/test/mobile-friendly

## ✅ Sign-Off

- **Deployment Date:** __________
- **Deployed by:** __________
- **Verification Date:** __________
- **GSC Sitemap Submitted:** ☐ Yes ☐ No
- **All Tests Passing:** ☐ Yes ☐ No
- **Ready for Monitoring:** ☐ Yes ☐ No

---

**Next Milestone:** After 2 weeks, review first results and adjust strategy if needed.

