# 🚀 Deployment Checklist - Yannova Project

## ✅ Pre-Deployment Checklist

### 1. Git Repository Setup

#### A. Verifieer dat secrets NIET worden gecommit
```bash
# Check of .env en .env.local worden genegeerd
git check-ignore .env .env.local
# Beide moeten worden getoond (betekent: worden genegeerd)

# Check git status - .env en .env.local mogen NIET in de lijst staan
git status
```

#### B. Commit de security fixes
```bash
# Stage alle security fix bestanden
git add .env.local.example
git add src/lib/logger.ts
git add src/lib/sanitize.ts
git add src/auth.ts
git add src/lib/seo-helper.ts
git add src/app/api/contact/route.ts
git add src/lib/prisma.ts
git add src/lib/actions.ts
git add prisma/migrations/update_admin_roles.sql
git add package.json package-lock.json
git add SECURITY_FIXES_README.md

# Commit met duidelijke message
git commit -m "security: fix 6 critical security vulnerabilities

- Remove secrets from .env (now uses .env.local)
- Add environment-aware AUTH_URL configuration
- Replace hardcoded URLs with NEXT_PUBLIC_SITE_URL
- Implement database-driven admin access (role-based)
- Add production-safe logging utility
- Implement input sanitization with DOMPurify + Zod

All production secrets are now in .env.local (gitignored).
See SECURITY_FIXES_README.md for details."
```

#### C. Push naar GitHub/GitLab (AANBEVOLEN)
```bash
# Maak een nieuwe repository op GitHub/GitLab
# Dan:
git remote add origin https://github.com/jouw-username/yannova.git
git branch -M main
git push -u origin main
```

**Waarom belangrijk?**
- ✅ Backup van je code
- ✅ Version control
- ✅ Makkelijk deployen naar Vercel
- ✅ Samenwerken met team

---

### 2. Database Migratie Uitvoeren

#### Optie A: Via Supabase Dashboard (AANBEVOLEN als database niet lokaal bereikbaar is)
```bash
1. Open Supabase dashboard: https://supabase.com/dashboard
2. Selecteer je project: nnlekbywldrainqhvgif
3. Ga naar "SQL Editor"
4. Kopieer de inhoud van: prisma/migrations/update_admin_roles.sql
5. Plak in SQL Editor en klik "Run"
```

#### Optie B: Via Prisma CLI (als database bereikbaar is)
```bash
npx prisma db execute --file prisma/migrations/update_admin_roles.sql
```

#### Verifieer de migratie
```bash
# Check of admin users de juiste role hebben
# In Supabase SQL Editor:
SELECT email, role FROM "User" WHERE email IN (
  'roustamyandiev00@gmail.com',
  'info@yannova.be',
  'windowpro.be@gmail.com',
  'innovar.labs7@gmail.com',
  'admin@yannova.be'
);
# Alle moeten role = 'admin' hebben
```

---

### 3. Lokale Test

```bash
# 1. Verifieer dat .env.local bestaat met echte credentials
cat .env.local

# 2. Install dependencies (als nog niet gedaan)
npm install

# 3. Generate Prisma client
npx prisma generate

# 4. TypeScript check
npx tsc --noEmit

# 5. Start development server
npm run dev

# 6. Test in browser: http://localhost:3000
```

#### Test deze functionaliteiten:
- [ ] Homepage laadt correct
- [ ] Contact form werkt (test met XSS payload: `<script>alert('test')</script>`)
- [ ] Admin login werkt met een van de 5 admin emails
- [ ] SEO metadata toont localhost URL in development
- [ ] Geen console.log statements zichtbaar in browser console (production mode)

---

### 4. Vercel Deployment Setup

#### A. Maak Vercel Project
```bash
# Optie 1: Via Vercel CLI
npm install -g vercel
vercel login
vercel

# Optie 2: Via Vercel Dashboard
# 1. Ga naar https://vercel.com/new
# 2. Import je GitHub repository
# 3. Vercel detecteert automatisch Next.js
```

#### B. Configureer Environment Variables in Vercel

**KRITIEK: Zet deze environment variables in Vercel dashboard:**

```bash
# Email Configuration
SMTP_HOST=mail.b.hostedemail.com
SMTP_PORT=465
SMTP_USER=info@yannova.be
SMTP_PASS=WRmN3yerM_B8qjFq3z3i

# NextAuth Configuration
AUTH_SECRET=7pSeJLMcZmKwfTR2Md5eaZUOme5zJ5Sn5ECFgpSUJwQ=
AUTH_URL=https://www.yannova.be

# Database - Supabase PostgreSQL
DATABASE_URL=postgresql://postgres:WRmN3yerM_B8qjFq3z3i@db.nnlekbywldrainqhvgif.supabase.co:5432/postgres?schema=public
DIRECT_URL=postgresql://postgres:WRmN3yerM_B8qjFq3z3i@db.nnlekbywldrainqhvgif.supabase.co:5432/postgres?schema=public

# Google AI & Analytics
NEXT_PUBLIC_GA_ID=G-1RS27QF82W
GOOGLE_GENERATIVE_AI_API_KEY=AIzaSyDwQoafHHw0rhkZiL-r6c6B-oocdWMwBXA

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://nnlekbywldrainqhvgif.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ubGVrYnl3bGRyYWlucWh2Z2lmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2OTEyNzQsImV4cCI6MjA4NjI2NzI3NH0.CJQllEg5x6p-EeG88Wa6fQyhSF-ALnUJWt1ZcVmY7GU
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ubGVrYnl3bGRyYWlucWh2Z2lmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDY5MTI3NCwiZXhwIjoyMDg2MjY3Mjc0fQ.W3uOn6epICefxPzxuFmWsZ8Qr9XNWiisIGcilimbYAY

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.yannova.be

# Contact Email (optional)
CONTACT_EMAIL=info@yannova.be
```

**Hoe environment variables toevoegen in Vercel:**
1. Ga naar je project in Vercel dashboard
2. Klik op "Settings" tab
3. Klik op "Environment Variables" in sidebar
4. Voeg elke variable toe (Name + Value)
5. Selecteer "Production", "Preview", en "Development"
6. Klik "Save"

#### C. Deploy
```bash
# Vercel deploy automatisch bij git push (als GitHub connected)
git push origin main

# Of handmatig:
vercel --prod
```

---

### 5. Post-Deployment Verificatie

#### A. Test Production Website
```bash
# Open je production URL
open https://www.yannova.be
```

**Test checklist:**
- [ ] Homepage laadt correct
- [ ] SEO metadata toont production URL (https://www.yannova.be)
- [ ] Contact form werkt
- [ ] Contact form blokkeert XSS payloads
- [ ] Admin login werkt met admin email
- [ ] Admin dashboard toegankelijk
- [ ] Geen console.log statements in browser console
- [ ] Database connectie werkt
- [ ] Email verzending werkt

#### B. Security Verificatie
```bash
# 1. Check of secrets NIET zichtbaar zijn in source code
# Open browser DevTools > Sources > zoek naar "WRmN3yerM_B8qjFq3z3i"
# Moet NIET gevonden worden!

# 2. Check of .env.local NIET in git history zit
git log --all --full-history --source -- .env.local
# Moet leeg zijn!

# 3. Test XSS bescherming
# Vul contact form in met: <script>alert('xss')</script>
# Script mag NIET uitgevoerd worden
```

#### C. Performance Check
```bash
# Run Lighthouse audit
# Chrome DevTools > Lighthouse > Generate report

# Check:
# - Performance score > 90
# - Best Practices score > 90
# - SEO score > 90
```

---

### 6. Monitoring Setup (OPTIONEEL maar AANBEVOLEN)

#### A. Vercel Analytics
```bash
# Vercel Analytics is automatisch enabled
# Check in Vercel dashboard > Analytics tab
```

#### B. Error Tracking (Sentry)
```bash
# Install Sentry
npm install @sentry/nextjs

# Initialize
npx @sentry/wizard@latest -i nextjs

# Add SENTRY_DSN to Vercel environment variables
```

#### C. Uptime Monitoring
- **UptimeRobot** (gratis): https://uptimerobot.com
- **Pingdom** (gratis tier): https://www.pingdom.com
- Monitor: https://www.yannova.be

---

## 🎯 100% Zekerheid Checklist

### Pre-Deployment
- [x] Secrets verwijderd uit .env
- [x] .env.local aangemaakt met echte credentials
- [x] .env.local is gitignored
- [x] .env.local.example aangemaakt
- [x] Security fixes geïmplementeerd
- [x] TypeScript compileert zonder errors
- [ ] Git commit gemaakt
- [ ] Git repository op GitHub/GitLab

### Database
- [ ] SQL migratie uitgevoerd
- [ ] Admin users hebben role='admin'
- [ ] Database connectie getest

### Deployment
- [ ] Vercel project aangemaakt
- [ ] Environment variables geconfigureerd in Vercel
- [ ] Deployed naar production
- [ ] Production URL werkt

### Testing
- [ ] Homepage laadt
- [ ] Contact form werkt
- [ ] XSS bescherming actief
- [ ] Admin login werkt
- [ ] SEO metadata correct
- [ ] Geen console.log in production
- [ ] Performance > 90

### Security
- [ ] Secrets NIET in git history
- [ ] Secrets NIET in source code
- [ ] XSS payloads geblokkeerd
- [ ] Admin access via database roles
- [ ] Logging production-safe

---

## 🆘 Troubleshooting

### "Database connection failed"
```bash
# Check DATABASE_URL in Vercel environment variables
# Moet exact zijn: postgresql://postgres:PASSWORD@db.nnlekbywldrainqhvgif.supabase.co:5432/postgres?schema=public
```

### "Admin login fails"
```bash
# 1. Check of SQL migratie is uitgevoerd
# 2. Verifieer User.role in database
# 3. Check AUTH_URL in Vercel (moet https://www.yannova.be zijn)
```

### "SEO metadata shows wrong URL"
```bash
# Check NEXT_PUBLIC_SITE_URL in Vercel
# Moet zijn: https://www.yannova.be
```

### "Console statements still visible"
```bash
# Check NODE_ENV in Vercel
# Moet zijn: production (automatisch gezet door Vercel)
```

---

## 📞 Support

Als je problemen hebt:
1. Check SECURITY_FIXES_README.md voor details
2. Check Vercel deployment logs
3. Check Supabase logs
4. Check browser console voor errors

---

**Laatste update**: 2 maart 2026  
**Status**: ✅ Klaar voor deployment
