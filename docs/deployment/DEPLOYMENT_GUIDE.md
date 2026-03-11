# 🚀 YANNOVA.BE DEPLOYMENT GUIDE

## ✅ Lokaal gefixt:
- [x] Prisma schema.prisma (URL configuratie voor Prisma 7)
- [x] prisma.config.ts (laadt nu .env.local)
- [x] .env.local (bijgewerkt met nieuwe Supabase credentials)
- [x] Database schema gepusht naar Supabase

## 📋 VERCEL ENVIRONMENT VARIABLES (ONTBREKEN NOG!)

Ga naar: https://vercel.com/roustamyandiev9-gmailcoms-projects/yannova-web/settings/environment-variables
Voeg ALLE onderstaande variabelen toe voor: **Production**, **Preview**, en **Development**.

### 1. DATABASE (CHECK DIT GOED!)
```
DATABASE_URL=postgres://postgres.adlqcdnpjaglfvleeykj:AXOuhMbviXiwobNg@aws-1-eu-central-1.pooler.supabase.com:6543/postgres?sslmode=require&pgbouncer=true
```
⚠️ **BELANGRIJK**: Verwijder eventuele oude `DATABASE_URL` of `POSTGRES_*` variabelen in Vercel eerst, of overschrijf ze!
Voor PRODUCTIE gebruik je port 6543 met pgbouncer=true.

### 2. NEXTAUTH (NOODZAKELIJK VOOR LOGIN)
```
AUTH_SECRET=7pSeJLMcZmKwfTR2Md5eaZUOme5zJ5Sn5ECFgpSUJwQ=
AUTH_URL=https://yannova-web.vercel.app
```
⚠️ **LET OP**: Zet `AUTH_URL` naar je Vercel domein (bijv. `https://yannova-web.vercel.app`) of je eigen domein (`https://yannova.be`) als je dat al hebt gekoppeld. Pas dit aan zodra je live gaat!

### 3. EMAIL SMTP (VOOR CONTACTFORMULIER)
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

### 5. SUPABASE (FILES & OPSLAG)
```
NEXT_PUBLIC_SUPABASE_URL=https://adlqcdnpjaglfvleeykj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkbHFjZG5wamFnbGZ2bGVleWtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3MDAyMjAsImV4cCI6MjA4NjI3NjIyMH0.V9C4PscilGrnZVB0qvqvSQc-dZBujk8pdwpyoHQdZ8g
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkbHFjZG5wamFnbGZ2bGVleWtqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDcwMDIyMCwiZXhwIjoyMDg2Mjc2MjIwfQ.BarUVh1VtzYgoZzmblwVQM44rXo04Io3HOGhk-ck6oY
```

## 🔧 DEPLOYMENT

Omdat je geen git repo hebt gekoppeld, deployen we direct via Vercel CLI:

1. **Zet EERST de Environment Variables in Vercel Dashboard** (zie hierboven).
2. Run dit commando in je terminal:
   ```bash
   vercel --prod
   ```

## 🎯 CONTROLE

Na deployment, check:
1. **Admin Login**: Werkt de login? (Zo niet, check `AUTH_URL` en `DATABASE_URL`)
2. **Contact Form**: Krijg je een mail? (Zo niet, check `SMTP_*` vars)
3. **Database**: Worden nieuwe projecten/leads opgeslagen?

Succes! 🚀
