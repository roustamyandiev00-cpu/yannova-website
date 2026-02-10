# 🚀 YANNOVA.BE DEPLOYMENT GUIDE

## ✅ Lokaal gefixt:
- [x] Prisma schema.prisma (URL configuratie voor Prisma 7)
- [x] prisma.config.ts (laadt nu .env.local)
- [x] .env.local (bijgewerkt met nieuwe Supabase credentials)
- [x] Database schema gepusht naar Supabase

## 📋 VERCEL ENVIRONMENT VARIABLES

Ga naar: https://vercel.com/jouw-project/settings/environment-variables
Voeg ALLE onderstaande variabelen toe voor: **Production**, **Preview**, en **Development**

### 1. DATABASE (KRITIEK)
```
DATABASE_URL=postgres://postgres.adlqcdnpjaglfvleeykj:AXOuhMbviXiwobNg@aws-1-eu-central-1.pooler.supabase.com:6543/postgres?sslmode=require&pgbouncer=true
```
⚠️ LET OP: Voor PRODUCTIE gebruik je port 6543 met pgbouncer=true (connection pooling)

### 2. NEXTAUTH (KRITIEK - PAS AUTH_URL AAN!)
```
AUTH_SECRET=7pSeJLMcZmKwfTR2Md5eaZUOme5zJ5Sn5ECFgpSUJwQ=
AUTH_URL=https://yannova.be
```
⚠️ Vervang `https://yannova.be` met je echte production URL!

### 3. EMAIL SMTP
```
SMTP_HOST=mail.b.hostedemail.com
SMTP_PORT=465
SMTP_USER=info@yannova.be
SMTP_PASS=WRmN3yerM_B8qjFq3z3i
```

### 4. GOOGLE AI & ANALYTICS  
```
GOOGLE_GENERATIVE_AI_API_KEY=AIzaSyDwQoafHHw0rhkZiL-r6c6B-oocdWMwBXA
NEXT_PUBLIC_GA_ID=G-1RS27QF82W
```

### 5. SUPABASE
```
NEXT_PUBLIC_SUPABASE_URL=https://adlqcdnpjaglfvleeykj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkbHFjZG5wamFnbGZ2bGVleWtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3MDAyMjAsImV4cCI6MjA4NjI3NjIyMH0.V9C4PscilGrnZVB0qvqvSQc-dZBujk8pdwpyoHQdZ8g
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkbHFjZG5wamFnbGZ2bGVleWtqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDcwMDIyMCwiZXhwIjoyMDg2Mjc2MjIwfQ.BarUVh1VtzYgoZzmblwVQM44rXo04Io3HOGhk-ck6oY
```

## 🔧 DEPLOYMENT STAPPEN

### Stap 1: Commit en Push
```bash
git add .
git commit -m "fix: update Prisma config and database setup for deployment"
git push origin main
```

### Stap 2: Vercel Environment Variables
1. Ga naar Vercel Dashboard
2. Settings → Environment Variables  
3. Kopieer ALLE bovenstaande variabelen
4. Select: Production, Preview, Development
5. Klik "Save"

### Stap 3: Redeploy
Vercel zal automatisch deployen na je git push.

Of manueel:
1. Ga naar Deployments tab
2. Klik op "..." bij laatste deployment
3. Klik "Redeploy"

## 🎯 BELANGRIJK

### Database URLs:
- **Lokaal (.env.local)**: Port 5432 zonder pgbouncer (voor migrations)
- **Production (Vercel)**: Port 6543 met pgbouncer=true (voor runtime)

### Als deployment faalt:
1. Check Build Logs in Vercel
2. Veelvoorkomende issues:
   - Ontbrekende env vars → Check Settings
   - Database connection → Verifieer DATABASE_URL
   - TypeScript errors → Run `npm run build` lokaal eerst

## 📝 Post-Deployment Checklist

Na succesvolle deployment:
- [ ] Test de homepage: https://jouw-domain.vercel.app
- [ ] Test contact form (email)
- [ ] Test admin login: https://jouw-domain.vercel.app/admin/login
- [ ] Test chatbot functionaliteit
- [ ] Check Google Analytics tracking

## 🔒 SECURITY REMINDERS

1. Verwijder .env uit Git history (bevat oude credentials):
   ```bash
   git filter-branch --force --index-filter \
   "git rm --cached --ignore-unmatch .env" \
   --prune-empty --tag-name-filter cat -- --all
   ```

2. Update .gitignore om .env te excluden (al gedaan ✅)

3. Rotate SMTP password en API keys periodiek

## 🆘 TROUBLESHOOTING

**Build fails met "Prisma schema validation error":**
- Database URL ontbreekt in Vercel env vars
- Check of prisma.config.ts correct is

**"Cannot connect to database":**
- Verifieer DATABASE_URL in Vercel
- Check Supabase database status
- Gebruik pgbouncer=true voor production

**NextAuth errors:**
- Update AUTH_URL naar je production domain
- Verifieer AUTH_SECRET is gezet in Vercel

## ✅ DONE!

Na deze stappen zou je site live moeten zijn! 🎉
