# SEO Technische Checklist - Yannova.be

## ✅ Wat is al technisch goed

- [x] Next.js App Router met SSR
- [x] Metadata API correct geïmplementeerd
- [x] Schema.org structured data (LocalBusiness, Service, FAQ, Breadcrumb)
- [x] Sitemap.xml dynamisch gegenereerd
- [x] Robots.txt aanwezig
- [x] OpenGraph en Twitter cards
- [x] Canonical URLs
- [x] Google Analytics & Microsoft Clarity
- [x] Google Tag Manager
- [x] Responsive design
- [x] HTTPS

## 🔧 Technische Verbeteringen Nodig

### 1. Homepage Metadata Update

**Bestand:** `src/app/page.tsx`

**Huidige title:**
```typescript
title: 'Ramen & Deuren in Antwerpen Stad en rond Antwerpen | Yannova'
```

**Nieuwe title:**
```typescript
title: 'Ramen & Deuren Plaatsen Antwerpen | Gevelrenovatie & Crepi | Yannova'
```

**Huidige description:**
```typescript
description: 'Ramen, deuren, gevelisolatie en renovatie in Antwerpen stad en rond Antwerpen...'
```

**Nieuwe description:**
```typescript
description: 'Specialist in ramen, deuren en gevelrenovatie in Antwerpen en omgeving. Gratis opmeting en offerte binnen 24u. 15+ jaar ervaring. PVC & aluminium ramen, crepi, isolatie.'
```

### 2. Nieuwe Lokale Pagina's Aanmaken

#### Crepi Pagina's (6 stuks)
- [ ] `src/app/crepi/antwerpen/page.tsx`
- [ ] `src/app/crepi/berchem/page.tsx`
- [ ] `src/app/crepi/brasschaat/page.tsx`
- [ ] `src/app/crepi/schoten/page.tsx`
- [ ] `src/app/crepi/deurne/page.tsx`
- [ ] `src/app/crepi/merksem/page.tsx`

**Template structuur:**
```typescript
import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { generateFAQSchema } from "@/lib/faq-schema";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";

export const metadata: Metadata = generateSEO({
  title: "Crepi Aanbrengen [Stad] | Gevelbepleistering | Yannova",
  description: "Crepi laten aanbrengen in [Stad]. Professionele gevelbepleistering met isolatie. Gratis opmeting, offerte binnen 24u. 10 jaar garantie.",
  path: "/crepi/[stad]",
  keywords: [
    "crepi [stad]",
    "crepi aanbrengen [stad]",
    "gevelbepleistering [stad]",
    "crepi prijs [stad]",
  ],
});

// Component met:
// - Hero sectie
// - Voordelen (3 stats)
// - Over crepi in [stad]
// - Kenmerken (6-8 bullets)
// - Prijzen sectie
// - Werkgebied
// - FAQ (4-5 vragen)
// - CTA sectie
```

#### Gevelisolatie Pagina's (6 stuks)
- [ ] `src/app/gevelisolatie/antwerpen/page.tsx`
- [ ] `src/app/gevelisolatie/berchem/page.tsx`
- [ ] `src/app/gevelisolatie/brasschaat/page.tsx`
- [ ] `src/app/gevelisolatie/schoten/page.tsx`
- [ ] `src/app/gevelisolatie/deurne/page.tsx`
- [ ] `src/app/gevelisolatie/merksem/page.tsx`

#### Renovatie Pagina's (6 stuks)
- [ ] `src/app/renovatie/antwerpen/page.tsx`
- [ ] `src/app/renovatie/berchem/page.tsx`
- [ ] `src/app/renovatie/brasschaat/page.tsx`
- [ ] `src/app/renovatie/schoten/page.tsx`
- [ ] `src/app/renovatie/deurne/page.tsx`
- [ ] `src/app/renovatie/merksem/page.tsx`

### 3. Blog Artikelen Toevoegen (8 stuks)

- [ ] `src/app/blog/crepi-gevel-prijs-per-m2/page.tsx`
- [ ] `src/app/blog/renovatie-premies-vlaanderen-2026/page.tsx`
- [ ] `src/app/blog/gevelisolatie-prijs-voordelen/page.tsx`
- [ ] `src/app/blog/beste-ramen-voor-renovatie/page.tsx`
- [ ] `src/app/blog/energiebesparende-renovaties/page.tsx`
- [ ] `src/app/blog/hoe-lang-duurt-gevelrenovatie/page.tsx`
- [ ] `src/app/blog/pvc-ramen-onderhoud/page.tsx`
- [ ] `src/app/blog/aluminium-ramen-voordelen/page.tsx`

**Blog template structuur:**
```typescript
import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { generateArticleSchema } from "@/lib/article-schema";

export const metadata: Metadata = generateSEO({
  title: "[Artikel Titel] | Yannova Blog",
  description: "[150 karakters beschrijving]",
  path: "/blog/[slug]",
  keywords: ["keyword1", "keyword2", "keyword3"],
});

// Article schema met:
// - headline
// - datePublished
// - dateModified
// - author
// - image
```

### 4. Sitemap Updaten

**Bestand:** `src/app/sitemap.ts`

**Toevoegen:**
```typescript
// Crepi pagina's
'/crepi/antwerpen',
'/crepi/berchem',
'/crepi/brasschaat',
'/crepi/schoten',
'/crepi/deurne',
'/crepi/merksem',

// Gevelisolatie pagina's
'/gevelisolatie/antwerpen',
'/gevelisolatie/berchem',
'/gevelisolatie/brasschaat',
'/gevelisolatie/schoten',
'/gevelisolatie/deurne',
'/gevelisolatie/merksem',

// Renovatie pagina's
'/renovatie/antwerpen',
'/renovatie/berchem',
'/renovatie/brasschaat',
'/renovatie/schoten',
'/renovatie/deurne',
'/renovatie/merksem',

// Nieuwe blog artikelen
'/blog/crepi-gevel-prijs-per-m2',
'/blog/renovatie-premies-vlaanderen-2026',
// etc.
```

### 5. Interne Linking Component

**Nieuw bestand:** `src/components/RelatedServices.tsx`

```typescript
interface RelatedServicesProps {
  currentService: 'ramen' | 'deuren' | 'crepi' | 'gevelisolatie' | 'renovatie';
  city: string;
}

export function RelatedServices({ currentService, city }: RelatedServicesProps) {
  // Toon 3-4 gerelateerde diensten in dezelfde stad
  // Met links naar die pagina's
}
```

**Gebruik in elke lokale pagina:**
```typescript
<RelatedServices currentService="ramen" city="antwerpen" />
```

### 6. Prijzen Component

**Nieuw bestand:** `src/components/PricingSection.tsx`

```typescript
interface PricingSectionProps {
  service: 'ramen' | 'deuren' | 'crepi' | 'gevelisolatie';
}

export function PricingSection({ service }: PricingSectionProps) {
  // Toon prijsindicatie per dienst
  // Met disclaimer "indicatief, offerte op maat"
  // Met CTA "Gratis offerte"
}
```

### 7. Schema Markup Uitbreiden

**Bestand:** `src/lib/structured-data.ts`

**Toevoegen:**

```typescript
// Product schema voor diensten met prijzen
export function generateProductSchema(product: {
  name: string;
  description: string;
  price: string;
  priceCurrency: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: product.priceCurrency,
      availability: "https://schema.org/InStock",
      url: product.url,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
    },
  };
}

// HowTo schema voor blog artikelen
export function generateHowToSchema(howto: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howto.name,
    description: howto.description,
    step: howto.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
```

### 8. SEO Helper Functions

**Bestand:** `src/lib/seo-helper.ts`

**Toevoegen:**

```typescript
// Genereer lokale keywords
export function generateLocalKeywords(service: string, city: string) {
  return [
    `${service} ${city}`,
    `${service} plaatsen ${city}`,
    `${service} ${city} prijs`,
    `${service} aannemer ${city}`,
    `${service} bedrijf ${city}`,
  ];
}

// Genereer lokale FAQ's
export function generateLocalFAQs(service: string, city: string) {
  return [
    {
      question: `Wat kost ${service} in ${city}?`,
      answer: `De prijs voor ${service} in ${city} hangt af van...`,
    },
    {
      question: `Hoe lang duurt ${service} plaatsen in ${city}?`,
      answer: `Voor een gemiddelde woning in ${city} duurt...`,
    },
    {
      question: `Zijn er premies beschikbaar in ${city}?`,
      answer: `Ja, in ${city} en Vlaanderen zijn er verschillende premies...`,
    },
    {
      question: `Werken jullie in heel ${city}?`,
      answer: `Ja, wij zijn actief in heel ${city} en omgeving...`,
    },
  ];
}
```

### 9. Content Uitbreiding Bestaande Pagina's

**Bestanden om uit te breiden:**
- [ ] `src/app/ramen/antwerpen/page.tsx` (600 → 1200 woorden)
- [ ] `src/app/ramen/berchem/page.tsx`
- [ ] `src/app/ramen/brasschaat/page.tsx`
- [ ] `src/app/deuren/antwerpen/page.tsx`
- [ ] `src/app/deuren/berchem/page.tsx`

**Toevoegen aan elke pagina:**
1. Prijzen sectie (200 woorden)
2. Materialen vergelijking (150 woorden)
3. Premies sectie (150 woorden)
4. Proces sectie (100 woorden)
5. Extra FAQ's (2-3 vragen)

### 10. Image Optimization

**Bestand:** `next.config.js`

**Controleren:**
```javascript
module.exports = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
```

### 11. Robots.txt Optimalisatie

**Bestand:** `src/app/robots.ts`

**Controleren:**
```typescript
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: 'https://www.yannova.be/sitemap.xml',
  };
}
```

### 12. Performance Optimalisatie

**Checklist:**
- [ ] Lazy loading voor afbeeldingen
- [ ] Font optimization (next/font)
- [ ] CSS minification
- [ ] JavaScript code splitting
- [ ] Preload critical resources
- [ ] Defer non-critical scripts

### 13. Mobile Optimization

**Checklist:**
- [ ] Test alle pagina's op mobiel (Chrome DevTools)
- [ ] Controleer touch targets (min 48x48px)
- [ ] Test formulieren op mobiel
- [ ] Controleer laadsnelheid op 3G
- [ ] Test sticky CTA buttons

### 14. Analytics & Tracking

**Bestand:** `src/lib/analytics-tracker.ts`

**Events toevoegen:**
```typescript
// Track offerte aanvragen per stad
export function trackQuoteRequest(city: string, service: string) {
  gtag('event', 'quote_request', {
    city: city,
    service: service,
  });
}

// Track telefoongesprekken
export function trackPhoneCall(city: string) {
  gtag('event', 'phone_call', {
    city: city,
  });
}
```

### 15. Structured Data Testing

**Tools gebruiken:**
- [ ] Google Rich Results Test
- [ ] Schema.org Validator
- [ ] Google Search Console

**Testen voor:**
- LocalBusiness schema
- Service schema
- FAQ schema
- Breadcrumb schema
- Product schema (nieuwe)
- HowTo schema (nieuwe)

## 🚀 Implementatie Volgorde

### Sprint 1 (Week 1-2): Quick Wins
1. Homepage metadata updaten
2. Interne linking component maken
3. Prijzen component maken
4. Bestaande pagina's uitbreiden

### Sprint 2 (Week 3-4): Crepi Pagina's
1. 6 crepi pagina's aanmaken
2. Sitemap updaten
3. Interne links toevoegen

### Sprint 3 (Week 5-6): Gevelisolatie Pagina's
1. 6 gevelisolatie pagina's aanmaken
2. Sitemap updaten
3. Interne links toevoegen

### Sprint 4 (Week 7-8): Renovatie Pagina's
1. 6 renovatie pagina's aanmaken
2. Sitemap updaten
3. Interne links toevoegen

### Sprint 5 (Week 9-12): Blog Content
1. 4 blog artikelen schrijven
2. HowTo schema toevoegen
3. Interne links naar diensten

### Sprint 6 (Week 13-16): Optimalisatie
1. Performance optimalisatie
2. Mobile testing
3. Schema markup testen
4. Analytics setup

## 📊 Testing Checklist

### SEO Testing
- [ ] Google Search Console - geen errors
- [ ] Bing Webmaster Tools - geregistreerd
- [ ] Sitemap geïndexeerd
- [ ] Alle pagina's crawlbaar
- [ ] Canonical URLs correct
- [ ] Meta descriptions uniek
- [ ] Titles uniek en optimaal

### Performance Testing
- [ ] PageSpeed Insights > 90
- [ ] Core Web Vitals groen
- [ ] Mobile speed > 80
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1

### Structured Data Testing
- [ ] LocalBusiness schema valid
- [ ] Service schema valid
- [ ] FAQ schema valid
- [ ] Breadcrumb schema valid
- [ ] Product schema valid
- [ ] HowTo schema valid

### Mobile Testing
- [ ] Responsive op alle schermen
- [ ] Touch targets groot genoeg
- [ ] Formulieren werken
- [ ] CTA buttons zichtbaar
- [ ] Geen horizontale scroll

## 🔍 Monitoring

### Wekelijks controleren
- Google Search Console impressies
- Google Search Console clicks
- Gemiddelde positie per keyword
- Crawl errors
- Core Web Vitals

### Maandelijks controleren
- Organisch verkeer trend
- Conversie rate
- Bounce rate per pagina
- Top performing pagina's
- Backlinks (Ahrefs/SEMrush)

## 📝 Documentatie

### Code comments toevoegen
- [ ] Metadata configuratie
- [ ] Schema markup
- [ ] SEO helper functions
- [ ] Analytics tracking

### README updaten
- [ ] SEO strategie uitleggen
- [ ] Lokale pagina's structuur
- [ ] Blog content richtlijnen
- [ ] Schema markup gebruik

---

**Totaal aantal taken:** 50+
**Geschatte tijd:** 40-60 uur
**Prioriteit:** Hoog (direct impact op leads)
