# SEO Optimalisatie Overzicht

## ✅ Wat is geïmplementeerd

### 1. Sitemap (sitemap.xml)
- ✅ Alle belangrijke pagina's opgenomen
- ✅ Correcte prioriteiten ingesteld
- ✅ Change frequencies geconfigureerd
- ✅ Lokale pagina's (werkgebied) toegevoegd
- ✅ Blog posts opgenomen
- ✅ Service pagina's met hoge prioriteit

**Locatie:** `src/app/sitemap.ts`

### 2. Meta Tags
- ✅ Title tags geoptimaliseerd
- ✅ Meta descriptions (155-160 karakters)
- ✅ Keywords toegevoegd
- ✅ Canonical URLs ingesteld
- ✅ Language tags (nl_BE)
- ✅ Geo-targeting (Antwerpen)

**Locatie:** `src/app/layout.tsx`

### 3. Open Graph (Social Media)
- ✅ OG title, description, image
- ✅ OG type (website/article)
- ✅ OG locale (nl_BE)
- ✅ Twitter Card (summary_large_image)
- ✅ Image dimensions (1200x630px)

**Afbeelding:** `public/og-image.jpg` (moet nog vervangen worden door echte afbeelding)

### 4. Structured Data (Schema.org)
- ✅ LocalBusiness schema
- ✅ Organization schema
- ✅ WebSite schema met SearchAction
- ✅ Service schemas (4 services)
- ✅ Article schema (voor blog posts)
- ✅ Breadcrumb schema
- ✅ FAQ schema helper
- ✅ AggregateRating (4.9/5 - 47 reviews)

**Locatie:** `src/lib/structured-data.ts`

### 5. Robots.txt
- ✅ Crawling toegestaan voor alle pagina's
- ✅ Admin en API routes geblokkeerd
- ✅ Sitemap URL toegevoegd
- ✅ Googlebot specifieke rules

**Locatie:** `src/app/robots.ts`

### 6. Technical SEO
- ✅ Mobile-responsive design
- ✅ Fast loading times (Next.js optimizations)
- ✅ Image optimization (next/image)
- ✅ Lazy loading
- ✅ Compression enabled
- ✅ HTTPS (via Vercel)
- ✅ Security headers

## 📋 Actiepunten

### Hoge Prioriteit

1. **Open Graph Image Maken**
   - Formaat: 1200x630px
   - Bevat: Logo + "Ramen, Deuren & Renovatie Antwerpen"
   - Bestand: `public/og-image.jpg`

2. **Logo Toevoegen**
   - Formaat: PNG met transparante achtergrond
   - Afmetingen: 250x60px (ongeveer)
   - Bestand: `public/logo.png`

3. **Google Search Console**
   - Website toevoegen: www.yannova.be
   - Sitemap submitten: https://www.yannova.be/sitemap.xml
   - Eigendom verifiëren

4. **Google My Business**
   - Bedrijfsprofiel aanmaken/claimen
   - Adres, telefoonnummer, openingstijden toevoegen
   - Foto's uploaden
   - Reviews verzamelen

### Middel Prioriteit

5. **Content Optimalisatie**
   - H1, H2, H3 tags controleren
   - Alt-teksten voor alle afbeeldingen
   - Internal linking verbeteren
   - Content uitbreiden (min. 300 woorden per pagina)

6. **Blog Posts Schrijven**
   - "Wat kosten nieuwe ramen in 2026?"
   - "PVC vs Aluminium ramen: wat is beter?"
   - "Premies voor ramen en deuren in Vlaanderen"
   - "Hoe kies je de juiste ramen voor je woning?"

7. **Lokale SEO**
   - NAP (Name, Address, Phone) consistent houden
   - Lokale citations opbouwen
   - Reviews verzamelen op Google
   - Lokale backlinks opbouwen

### Lage Prioriteit

8. **Performance Optimalisatie**
   - Lighthouse score > 90
   - Core Web Vitals optimaliseren
   - Image formats (WebP, AVIF)
   - Font optimization

9. **Analytics & Tracking**
   - Google Analytics events
   - Conversion tracking
   - Heatmaps (Hotjar/Microsoft Clarity)
   - Search Console monitoring

## 🛠️ Gebruik van SEO Helpers

### Voor nieuwe pagina's:

```typescript
import { generatePageMetadata } from '@/components/SEO';

export const metadata = generatePageMetadata({
  title: "Ramen Antwerpen",
  description: "Specialist in ramen plaatsen in Antwerpen...",
  keywords: ["ramen antwerpen", "pvc ramen", "aluminium ramen"],
  url: "/ramen/antwerpen",
});
```

### Voor lokale pagina's:

```typescript
import { generateLocalPageMetadata } from '@/components/SEO';

export const metadata = generateLocalPageMetadata({
  city: "Antwerpen",
  service: "Ramen & Deuren",
  keywords: ["ramen antwerpen stad", "deuren antwerpen"],
});
```

### Voor blog posts:

```typescript
import { generateBlogMetadata } from '@/components/SEO';

export const metadata = generateBlogMetadata({
  title: "Wat kosten nieuwe ramen?",
  description: "Ontdek de prijzen van nieuwe ramen...",
  slug: "wat-kosten-nieuwe-ramen",
  publishedTime: "2026-03-08",
  keywords: ["ramen prijzen", "kosten nieuwe ramen"],
});
```

## 📊 SEO Monitoring

### Tools om te gebruiken:

1. **Google Search Console**
   - Indexatie status
   - Search queries
   - Click-through rates
   - Mobile usability

2. **Google Analytics**
   - Traffic sources
   - User behavior
   - Conversion rates
   - Bounce rates

3. **PageSpeed Insights**
   - Performance score
   - Core Web Vitals
   - Optimization suggestions

4. **Lighthouse**
   ```bash
   npx lighthouse https://www.yannova.be --view
   ```

5. **Schema Markup Validator**
   - https://validator.schema.org/
   - Test structured data

## 🎯 SEO Doelen

### Korte termijn (1-3 maanden)
- [ ] Top 10 voor "ramen antwerpen"
- [ ] Top 10 voor "deuren antwerpen"
- [ ] Top 5 voor "ramen zoersel"
- [ ] 50+ organische bezoekers per dag

### Middellange termijn (3-6 maanden)
- [ ] Top 5 voor "ramen antwerpen"
- [ ] Top 3 voor "renovatie antwerpen"
- [ ] 100+ organische bezoekers per dag
- [ ] 10+ leads per maand via organisch verkeer

### Lange termijn (6-12 maanden)
- [ ] Top 3 voor alle hoofdkeywords
- [ ] 200+ organische bezoekers per dag
- [ ] 20+ leads per maand via organisch verkeer
- [ ] Domain Authority > 30

## 📝 Content Kalender

### Maart 2026
- Blog: "Premies voor ramen en deuren 2026"
- Blog: "Wat kosten nieuwe ramen?"

### April 2026
- Blog: "PVC vs Aluminium ramen"
- Case study: Renovatie project Antwerpen

### Mei 2026
- Blog: "Energiezuinige ramen kiezen"
- Video: "Zo plaatsen we ramen"

## 🔗 Belangrijke Links

- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com
- Google My Business: https://business.google.com
- Schema Validator: https://validator.schema.org
- PageSpeed Insights: https://pagespeed.web.dev

---

**Laatste update:** Maart 2026
**Volgende review:** April 2026
