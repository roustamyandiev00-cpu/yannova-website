# 🚀 Vercel Deployment Guide - Yannova

## Optie 1: Deploy via Vercel Dashboard (Aanbevolen)

### Stap 1: Maak Vercel Account
1. Ga naar: https://vercel.com/signup
2. Sign up met GitHub, GitLab, of Email
3. Verifieer je email

### Stap 2: Import Project

#### A. Via GitHub (Als je GitHub repository hebt)
1. Ga naar: https://vercel.com/new
2. Klik "Import Git Repository"
3. Selecteer je GitHub repository
4. Vercel detecteert automatisch Next.js
5. Klik "Deploy"

#### B. Via Vercel CLI (Zonder GitHub)
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? yannova-website
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

### Stap 3: Configureer Environment Variables

**KRITIEK: Voeg deze environment variables toe in Vercel dashboard**

1. Ga naar je project in Vercel
2. Klik "Settings" tab
3. Klik "Environment Variables" in sidebar
4. Voeg ALLE onderstaande variables toe:

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

# Contact Email
CONTACT_EMAIL=info@yannova.be
```

**Voor elke variable:**
- Name: (bijv. `SMTP_HOST`)
- Value: (de waarde)
- Environment: Selecteer **Production**, **Preview**, en **Development**
- Klik "Save"

### Stap 4: Configureer Custom Domain

1. In Vercel project > Settings > Domains
2. Klik "Add Domain"
3. Voeg toe: `www.yannova.be`
4. Voeg toe: `yannova.be`
5. Vercel geeft je DNS instructies

**DNS Configuratie (bij je domain provider):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.21.21
```

### Stap 5: Redeploy met Environment Variables

1. Ga naar Vercel project > Deployments
2. Klik op laatste deployment
3. Klik "..." menu > "Redeploy"
4. Selecteer "Use existing Build Cache" = NO
5. Klik "Redeploy"

---

## Optie 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Set environment variables via CLI
vercel env add SMTP_HOST production
# Enter value when prompted
# Repeat for all variables
```

---

## 🔍 Post-Deployment Verificatie

### 1. Check Deployment Status
```bash
# Via CLI
vercel ls

# Via Dashboard
# Vercel > Your Project > Deployments
# Status should be "Ready"
```

### 2. Test Production URL
```bash
# Open production URL
open https://www.yannova.be

# Or via CLI
vercel --prod --yes
```

### 3. Verify Environment Variables
```bash
# Via CLI
vercel env ls

# Via Dashboard
# Settings > Environment Variables
# All variables should be listed
```

### 4. Check Build Logs
```bash
# Via Dashboard
# Deployments > Click deployment > View Function Logs
# Check for errors
```

---

## 🧪 Testing Checklist

Test deze functionaliteiten op production:

- [ ] Homepage laadt correct
- [ ] SEO metadata toont `https://www.yannova.be` (niet localhost)
- [ ] Contact form werkt
- [ ] Contact form blokkeert XSS: `<script>alert('test')</script>`
- [ ] Admin login werkt met admin email
- [ ] Admin dashboard toegankelijk
- [ ] Geen console.log in browser console
- [ ] Database connectie werkt
- [ ] Email verzending werkt
- [ ] Google Analytics tracking werkt
- [ ] Alle pagina's laden (diensten, projecten, contact, etc.)

---

## 🗄️ Database Migratie (BELANGRIJK!)

**Na deployment, run de SQL migratie:**

### Via Supabase Dashboard:
1. Open: https://supabase.com/dashboard
2. Selecteer project: `nnlekbywldrainqhvgif`
3. Ga naar "SQL Editor"
4. Kopieer inhoud van `prisma/migrations/update_admin_roles.sql`
5. Plak en klik "Run"

**SQL Migratie:**
```sql
-- Update existing admin users to have admin role
UPDATE "User" 
SET role = 'admin' 
WHERE email IN (
  'roustamyandiev00@gmail.com',
  'info@yannova.be',
  'windowpro.be@gmail.com',
  'innovar.labs7@gmail.com',
  'admin@yannova.be'
)
AND role != 'admin';
```

**Verifieer:**
```sql
SELECT email, role FROM "User" 
WHERE email IN (
  'roustamyandiev00@gmail.com',
  'info@yannova.be',
  'windowpro.be@gmail.com',
  'innovar.labs7@gmail.com',
  'admin@yannova.be'
);
```

Alle moeten `role = 'admin'` hebben!

---

## 🔧 Troubleshooting

### Build Fails
```bash
# Check build logs in Vercel dashboard
# Common issues:
# - Missing environment variables
# - TypeScript errors
# - Missing dependencies

# Fix locally first:
npm run build
npx tsc --noEmit
```

### Environment Variables Not Working
```bash
# Redeploy after adding variables:
vercel --prod --force

# Check if variables are set:
vercel env ls
```

### Database Connection Fails
```bash
# Check DATABASE_URL in Vercel
# Must include: ?schema=public
# Check Supabase connection pooler settings
```

### Admin Login Fails
```bash
# 1. Check if SQL migration ran
# 2. Check AUTH_URL = https://www.yannova.be
# 3. Check AUTH_SECRET is set
# 4. Check User.role in database
```

### Custom Domain Not Working
```bash
# Check DNS propagation:
dig www.yannova.be

# Check Vercel domain settings:
# Settings > Domains > Verify DNS
```

---

## 📊 Monitoring

### Vercel Analytics
- Automatically enabled
- View: Project > Analytics tab
- Shows: Page views, performance, errors

### Error Tracking (Optional)
```bash
# Install Sentry
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs

# Add SENTRY_DSN to Vercel environment variables
```

### Uptime Monitoring (Optional)
- **UptimeRobot**: https://uptimerobot.com (gratis)
- Monitor: https://www.yannova.be
- Alert via email/SMS bij downtime

---

## 🎉 Success!

Als alles werkt:
- ✅ Website live op https://www.yannova.be
- ✅ Alle environment variables geconfigureerd
- ✅ Database migratie uitgevoerd
- ✅ Admin login werkt
- ✅ Contact form werkt
- ✅ Security fixes actief

**Volgende stappen:**
1. Test alle functionaliteit
2. Setup monitoring
3. Configureer custom domain
4. Enable Vercel Analytics
5. Setup error tracking (Sentry)

---

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Next.js Docs: https://nextjs.org/docs

**Project Details:**
- Framework: Next.js 16.1.6
- React: 19.2.3
- Database: Supabase PostgreSQL
- Deployment: Vercel
- Region: Amsterdam (ams1)
