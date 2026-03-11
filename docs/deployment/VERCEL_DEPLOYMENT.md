# Vercel Deployment Checklist

## 📋 Environment Variables

Ga naar je Vercel project → Settings → Environment Variables en voeg de volgende toe:

### Email Configuration (REQUIRED)
```
SMTP_HOST=mail.b.hostedemail.com
SMTP_PORT=587
SMTP_USER=info@yannova.be
SMTP_PASS=WRmN3yerM_B8qjFq3z3i
CONTACT_EMAIL=info@yannova.be
```

### NextAuth Configuration (REQUIRED)
```bash
# Genereer een nieuwe secret met:
openssl rand -base64 32
```
```
AUTH_SECRET=[generated-secret-here]
AUTH_URL=https://www.yannova.be
```

### Database - Supabase (REQUIRED)
```
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.nnlekbywldrainqhvgif.supabase.co:5432/postgres?schema=public
DIRECT_URL=postgresql://postgres:[PASSWORD]@db.nnlekbywldrainqhvgif.supabase.co:5432/postgres?schema=public
```

### Google AI (OPTIONAL - voor chat functionaliteit)
```
GOOGLE_GENERATIVE_AI_API_KEY=[your-api-key]
```

### Supabase Storage (OPTIONAL - voor file uploads)
```
NEXT_PUBLIC_SUPABASE_URL=https://nnlekbywldrainqhvgif.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[your-anon-key]
SUPABASE_SERVICE_ROLE_KEY=[your-service-role-key]
```

### Site Configuration (REQUIRED)
```
NEXT_PUBLIC_SITE_URL=https://www.yannova.be
NEXT_PUBLIC_GA_ID=G-1RS27QF82W
```

## 🚀 Deployment Stappen

### 1. Push naar GitHub
```bash
git add .
git commit -m "feat: email configuratie + SEO optimalisaties"
git push origin main
```

### 2. Vercel Dashboard
1. Ga naar [vercel.com/dashboard](https://vercel.com/dashboard)
2. Selecteer je Yannova.be project
3. Ga naar Settings → Environment Variables
4. Voeg alle bovenstaande variables toe
5. Selecteer voor elke variable: Production, Preview, Development

### 3. Redeploy
- Ga naar Deployments tab
- Klik op de laatste deployment
- Klik op "Redeploy" knop
- Of push een nieuwe commit naar GitHub

### 4. Verificatie
Na deployment, test:
- ✅ Homepage laadt: https://www.yannova.be
- ✅ Contactformulier werkt
- ✅ Email wordt ontvangen op info@yannova.be
- ✅ Admin login werkt: https://www.yannova.be/admin/login
- ✅ Sitemap toegankelijk: https://www.yannova.be/sitemap.xml
- ✅ Robots.txt werkt: https://www.yannova.be/robots.txt

## 🔒 Security Checklist

- [ ] AUTH_SECRET is uniek en sterk
- [ ] Database wachtwoorden zijn veilig
- [ ] SMTP credentials zijn correct
- [ ] Environment variables zijn ALLEEN in Vercel, niet in code
- [ ] .env.local staat in .gitignore

## 📊 Post-Deployment

### Google Search Console
1. Ga naar [search.google.com/search-console](https://search.google.com/search-console)
2. Voeg www.yannova.be toe als property
3. Submit sitemap: https://www.yannova.be/sitemap.xml

### Google Analytics
1. Controleer of GA_ID correct is: G-1RS27QF82W
2. Test of events worden getrackt

### Performance Check
```bash
# Lighthouse score checken
npx lighthouse https://www.yannova.be --view
```

## 🐛 Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify all environment variables are set
- Check for TypeScript errors: `npm run build` locally

### Email Not Working
- Verify SMTP credentials in Vercel
- Check Vercel function logs
- Test with: `curl -X POST https://www.yannova.be/api/contact`

### Database Connection Issues
- Verify DATABASE_URL is correct
- Check Supabase dashboard for connection limits
- Ensure IP whitelist includes Vercel IPs (usually 0.0.0.0/0)

## 📝 Notes

- Vercel automatically runs `npm run build`
- Prisma generates client during `postinstall` script
- Environment variables are encrypted at rest
- Changes to env vars require redeploy

---

**Deployment Date:** Maart 2026
**Next.js Version:** 16.1.6
**Node Version:** 20.x
