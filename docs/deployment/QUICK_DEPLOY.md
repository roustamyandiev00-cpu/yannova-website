# 🚀 Quick Deployment Guide

## Stap 1: Pre-Deployment Check

```bash
npm run pre-deploy
```

Dit controleert:
- ✅ Environment variables
- ✅ Build succesvol
- ✅ TypeScript errors
- ✅ Sitemap & robots.txt
- ✅ Assets (OG image, logo)

## Stap 2: Commit & Push

```bash
git add .
git commit -m "feat: SEO optimalisaties + email configuratie"
git push origin main
```

## Stap 3: Vercel Environment Variables

Ga naar [Vercel Dashboard](https://vercel.com/dashboard) → Je Project → Settings → Environment Variables

### Required Variables:

```env
# Email
SMTP_HOST=mail.b.hostedemail.com
SMTP_PORT=587
SMTP_USER=info@yannova.be
SMTP_PASS=WRmN3yerM_B8qjFq3z3i
CONTACT_EMAIL=info@yannova.be

# Auth (genereer nieuwe voor productie!)
AUTH_SECRET=zgX5qjcxcTVTXy28PODzEELVJaDRP2l/1DFG/hSbrQ8=
AUTH_URL=https://www.yannova.be

# Database (vul wachtwoord in)
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.nnlekbywldrainqhvgif.supabase.co:5432/postgres?schema=public
DIRECT_URL=postgresql://postgres:[PASSWORD]@db.nnlekbywldrainqhvgif.supabase.co:5432/postgres?schema=public

# Site
NEXT_PUBLIC_SITE_URL=https://www.yannova.be
NEXT_PUBLIC_GA_ID=G-1RS27QF82W
```

### Optional Variables:

```env
# Google AI (voor chat)
GOOGLE_GENERATIVE_AI_API_KEY=[your-key]

# Supabase Storage
NEXT_PUBLIC_SUPABASE_URL=https://nnlekbywldrainqhvgif.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[your-key]
SUPABASE_SERVICE_ROLE_KEY=[your-key]
```

**Belangrijk:** Selecteer voor elke variable: Production, Preview, Development

## Stap 4: Deploy

Vercel deployt automatisch bij elke push naar `main` branch.

Of handmatig:
1. Ga naar Deployments tab
2. Klik op "Redeploy"

## Stap 5: Verificatie

Test na deployment:

```bash
# Homepage
curl -I https://www.yannova.be

# Sitemap
curl https://www.yannova.be/sitemap.xml

# Robots
curl https://www.yannova.be/robots.txt

# Health check
curl https://www.yannova.be/api/health

# Contact form (test)
curl -X POST https://www.yannova.be/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test bericht"}'
```

## Stap 6: Google Search Console

1. Ga naar [Google Search Console](https://search.google.com/search-console)
2. Voeg property toe: `https://www.yannova.be`
3. Verifieer eigendom (DNS of HTML tag)
4. Submit sitemap: `https://www.yannova.be/sitemap.xml`

## Stap 7: Monitoring

### Performance Check
```bash
npx lighthouse https://www.yannova.be --view
```

### Check Structured Data
- https://validator.schema.org/
- Voer in: https://www.yannova.be

### Check Open Graph
- https://www.opengraph.xyz/
- https://cards-dev.twitter.com/validator

## 🐛 Troubleshooting

### Build Fails
```bash
# Test lokaal
npm run build

# Check logs in Vercel dashboard
```

### Email werkt niet
- Verify SMTP credentials in Vercel
- Check function logs in Vercel
- Test lokaal: `npm run test:email`

### Database errors
- Check DATABASE_URL in Vercel
- Verify Supabase is online
- Check connection limits

### 404 errors
- Clear Vercel cache
- Redeploy
- Check routes in `src/app/`

## 📊 Post-Deployment Checklist

- [ ] Homepage laadt correct
- [ ] Contactformulier werkt
- [ ] Email ontvangen op info@yannova.be
- [ ] Admin login werkt
- [ ] Sitemap toegankelijk
- [ ] Robots.txt correct
- [ ] Google Analytics tracking
- [ ] Mobile responsive
- [ ] Lighthouse score > 90
- [ ] Sitemap submitted to Google
- [ ] Social media cards testen

## 🎯 Volgende Stappen

1. **Content**
   - Blog posts schrijven
   - Afbeeldingen optimaliseren
   - Alt-teksten toevoegen

2. **SEO**
   - Google My Business claimen
   - Reviews verzamelen
   - Backlinks opbouwen

3. **Marketing**
   - Social media posts
   - Google Ads campagne
   - Email marketing

---

**Deployment Date:** Maart 2026
**Version:** 1.0.0
