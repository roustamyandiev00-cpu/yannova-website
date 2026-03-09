# Quick Start Guide - Belangrijkste Acties

## 🚨 URGENT - Doe dit VANDAAG

### 1. Roteer Credentials (15 minuten)

**Waarom**: Je `.env.local` bevat gevoelige data die geroteerd moet worden.

**Stappen**:

1. **SMTP Wachtwoord wijzigen**
   - Ga naar mail.b.hostedemail.com
   - Wijzig wachtwoord voor info@yannova.be
   - Update in `.env.local`: `SMTP_PASS=nieuw_wachtwoord`

2. **Database Wachtwoord wijzigen**
   - Ga naar Supabase Dashboard → Settings → Database
   - Reset database password
   - Update in `.env.local`: `DATABASE_URL` en `DIRECT_URL`

3. **Supabase Service Role Key roteren**
   - Ga naar Supabase Dashboard → Settings → API
   - Rotate Service Role Key
   - Update in `.env.local`: `SUPABASE_SERVICE_ROLE_KEY=nieuwe_key`

4. **AUTH_SECRET genereren**
   ```bash
   openssl rand -base64 32
   ```
   - Update in `.env.local`: `AUTH_SECRET=nieuwe_secret`

5. **Vercel Environment Variables updaten**
   - Ga naar Vercel Dashboard → Your Project → Settings → Environment Variables
   - Update alle gewijzigde credentials voor Production

6. **Verwijder SECURITY_WARNING.md**
   ```bash
   rm SECURITY_WARNING.md
   ```

---

## 🚀 Deploy naar Production (5 minuten)

```bash
# Check of alles werkt lokaal
npm run build
npm run start

# Als alles werkt, deploy
git add .
git commit -m "feat: security, performance, and SEO improvements

- Added CSRF protection
- Enhanced security headers
- Optimized fonts and third-party scripts
- Improved accessibility
- Added analytics tracking
- Enhanced structured data"

git push
```

---

## ✅ Verifieer dat alles werkt (10 minuten)

### 1. Test Contact Form
- Ga naar https://www.yannova.be/contact
- Open browser console (F12)
- Vul formulier in en verstuur
- Check of CSRF token wordt gefetched
- Verifieer dat email aankomt

### 2. Check Security Headers
```bash
curl -I https://www.yannova.be
```
Moet bevatten:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Content-Security-Policy: ...`

### 3. Test Performance
- Ga naar https://pagespeed.web.dev/
- Test je website
- Check Core Web Vitals scores

### 4. Check Analytics
- Ga naar Clarity dashboard (clarity.microsoft.com)
- Verifieer dat tracking werkt
- Check Google Analytics voor events

---

## 📱 Optioneel - Apple Touch Icon (5 minuten)

1. Maak een 180x180 PNG icon van je logo
2. Sla op als `public/apple-touch-icon.png`
3. Deploy opnieuw

---

## 📊 Monitor Performance (Ongoing)

### Google Analytics 4
- Dashboard → Reports → Engagement → Events
- Check voor Web Vitals events (LCP, FID, CLS)

### Microsoft Clarity
- Dashboard → Recordings
- Bekijk session recordings
- Check heatmaps

### Vercel Analytics
- Vercel Dashboard → Your Project → Analytics
- Monitor Core Web Vitals

---

## 🔧 Volgende Stappen (Deze Week)

### 1. Event Tracking Toevoegen (30 minuten)

Voeg tracking toe aan belangrijke buttons:

```typescript
import { trackCTAClick, trackPhoneClick } from '@/lib/analytics-tracker';

// In je component
<button onClick={() => trackCTAClick('Gratis Offerte', 'Hero')}>
  Gratis Offerte
</button>

<a href="tel:+32489960001" onClick={() => trackPhoneClick('Header')}>
  Bel Ons
</a>
```

### 2. OptimizedImage Implementeren (1 uur)

Replace `<img>` tags met `<OptimizedImage>`:

```typescript
import { OptimizedImage } from '@/components/OptimizedImage';

// Voor hero images (above the fold)
<OptimizedImage
  src="/images/hero.jpg"
  alt="Ramen plaatsen Antwerpen"
  width={1200}
  height={600}
  priority={true}
  sizes="100vw"
/>

// Voor andere images
<OptimizedImage
  src="/images/project.jpg"
  alt="Project beschrijving"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### 3. Canonical URLs Toevoegen (30 minuten)

In dynamic pages (bijv. `src/app/diensten/[slug]/page.tsx`):

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    // ... existing metadata
    alternates: {
      canonical: `https://www.yannova.be/diensten/${params.slug}`,
    },
  };
}
```

---

## 🎯 Success Metrics

Na 1 week moet je zien:

- ✅ Lighthouse Performance Score: 85+
- ✅ Lighthouse SEO Score: 95+
- ✅ Lighthouse Accessibility Score: 90+
- ✅ Core Web Vitals: All Green
- ✅ Security Headers: A+ op securityheaders.com
- ✅ Analytics Events: Tracking in GA4
- ✅ Clarity Sessions: Recording user behavior

---

## 🆘 Troubleshooting

### CSRF Token Error
**Probleem**: "Ongeldige beveiligingstoken"
**Oplossing**: 
1. Check of `/api/csrf` endpoint werkt
2. Verifieer dat token wordt gefetched in ContactForm
3. Check browser console voor errors

### Performance Issues
**Probleem**: Slow page load
**Oplossing**:
1. Check of scripts `lazyOnload` gebruiken
2. Verifieer dat images geoptimaliseerd zijn
3. Run Lighthouse audit voor specifieke issues

### Analytics Not Tracking
**Probleem**: Geen events in GA4
**Oplossing**:
1. Check of `NEXT_PUBLIC_GA_MEASUREMENT_ID` is ingesteld
2. Verifieer dat gtag.js laadt in browser
3. Test in incognito mode (ad blockers kunnen tracking blokkeren)

---

## 📚 Documentatie

- **Volledige details**: Zie `IMPROVEMENTS_IMPLEMENTED.md`
- **Security headers**: `next.config.ts`
- **CSRF protection**: `src/lib/csrf.ts`
- **Analytics**: `src/lib/analytics-tracker.ts`
- **Structured data**: `src/lib/structured-data.ts`

---

## ✨ Klaar!

Je website is nu:
- 🔒 Veiliger (CSRF, security headers)
- ⚡ Sneller (font optimization, script loading)
- 📊 Beter te tracken (analytics events)
- ♿ Toegankelijker (ARIA labels)
- 🔍 Beter voor SEO (structured data)

**Volgende stap**: Roteer credentials en deploy! 🚀
