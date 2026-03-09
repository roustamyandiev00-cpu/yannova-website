# SEO Verbeteringen voor Yannova.be

## ✅ Wat is geïmplementeerd

### 1. Sitemap Optimalisatie
- ✅ Alle pagina's toegevoegd aan sitemap.ts
- ✅ Correcte prioriteiten en change frequencies ingesteld
- ✅ Ontbrekende pagina's toegevoegd (deuren, renovatie, gevelisolatie-crepi, premies, offerte, calculator)

### 2. Robots.txt
- ✅ Statische robots.txt aangemaakt in /public
- ✅ Admin en API routes uitgesloten
- ✅ Sitemap URL toegevoegd

### 3. SEO Helper Utilities
- ✅ `src/lib/seo.ts` - Herbruikbare metadata generator
- ✅ `src/lib/faq-schema.ts` - FAQ structured data voor rich snippets
- ✅ `src/lib/breadcrumb-schema.ts` - Breadcrumb navigatie voor Google
- ✅ `src/lib/article-schema.ts` - Article en Review schema voor toekomstig gebruik
- ✅ `src/lib/sitemap-utils.ts` - Utilities voor dynamische sitemap generatie

### 4. Structured Data
- ✅ FAQ schema toegevoegd aan alle belangrijke pagina's
- ✅ Breadcrumb schema voor betere navigatie
- ✅ LocalBusiness schema al aanwezig in layout.tsx
- ✅ Homepage FAQ schema toegevoegd

### 5. Next.js Config
- ✅ Security headers toegevoegd
- ✅ DNS prefetch control
- ✅ X-Frame-Options voor beveiliging

### 6. Pagina's geoptimaliseerd
- ✅ Homepage (/) - FAQ schema
- ✅ Ramen (/ramen) - FAQ + Breadcrumb
- ✅ Diensten (/diensten) - Breadcrumb
- ✅ Ramen & Deuren (/diensten/ramen-deuren) - FAQ + Breadcrumb
- ✅ Gevelrenovatie (/diensten/gevelrenovatie) - FAQ + Breadcrumb
- ✅ Totaalrenovatie (/diensten/renovatie) - FAQ + Breadcrumb
- ✅ Contact (/contact) - Breadcrumb
- ✅ Over Ons (/over-ons) - Breadcrumb

### 7. Components
- ✅ Breadcrumbs component voor visuele navigatie

## Hoe te gebruiken

### Metadata toevoegen aan een pagina

```typescript
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Jouw pagina titel",
  description: "Jouw pagina beschrijving",
  path: "/jouw-pagina",
  keywords: ["keyword1", "keyword2"],
});
```

### FAQ Schema toevoegen

```typescript
import { generateFAQSchema, commonFAQs } from "@/lib/faq-schema";

const faqSchema = generateFAQSchema(commonFAQs.ramen);

// In je component:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
/>
```

### Breadcrumb Schema toevoegen

```typescript
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Diensten", url: "/diensten" },
  { name: "Ramen", url: "/diensten/ramen" },
]);
```

## Volgende stappen voor optimale SEO

### 1. Content Optimalisatie
- [ ] Voeg meer lokale content toe (per gemeente)
- [ ] Schrijf blog artikelen over ramen, deuren, renovatie
- [ ] Voeg klantreviews toe met schema markup
- [ ] Maak landingspagina's per dienst + locatie combinatie

### 2. Technische SEO
- [ ] Voeg Open Graph images toe voor social sharing
- [ ] Implementeer lazy loading voor afbeeldingen
- [ ] Optimaliseer Core Web Vitals (LCP, FID, CLS)
- [ ] Voeg canonical tags toe aan alle pagina's

### 3. Lokale SEO
- [ ] Claim Google Business Profile
- [ ] Voeg bedrijf toe aan lokale directories
- [ ] Verzamel Google reviews
- [ ] Maak locatie-specifieke landingspagina's

### 4. Structured Data uitbreiden
- [ ] Product schema voor ramen/deuren
- [ ] Review schema voor testimonials
- [ ] Video schema als je video's toevoegt
- [ ] HowTo schema voor installatiegidsen

### 5. Performance
- [ ] Optimaliseer afbeeldingen (WebP/AVIF)
- [ ] Implementeer caching strategie
- [ ] Minimaliseer JavaScript bundles
- [ ] Gebruik CDN voor statische assets

## SEO Checklist per pagina

- [ ] Unieke, beschrijvende title (50-60 karakters)
- [ ] Meta description (150-160 karakters)
- [ ] H1 tag met hoofdkeyword
- [ ] H2/H3 tags voor structuur
- [ ] Alt tekst voor alle afbeeldingen
- [ ] Interne links naar gerelateerde pagina's
- [ ] Externe links naar autoritative bronnen
- [ ] FAQ sectie met structured data
- [ ] Breadcrumb navigatie
- [ ] Mobile-friendly design
- [ ] Snelle laadtijd (<3 seconden)

## Tools voor SEO monitoring

1. **Google Search Console** - Monitor indexering en zoekprestaties
2. **Google Analytics** - Analyseer verkeer en conversies
3. **PageSpeed Insights** - Test snelheid en Core Web Vitals
4. **Schema Markup Validator** - Valideer structured data
5. **Mobile-Friendly Test** - Test mobiele gebruiksvriendelijkheid

## Keywords strategie

### Primaire keywords
- ramen antwerpen
- deuren antwerpen
- renovatie antwerpen
- gevelrenovatie antwerpen

### Secundaire keywords (per locatie)
- ramen [gemeente]
- deuren [gemeente]
- renovatie [gemeente]

### Long-tail keywords
- "ramen plaatsen antwerpen prijs"
- "beste ramen antwerpen"
- "renovatiebedrijf antwerpen"
- "gevelisolatie antwerpen premie"

## Lokale SEO per gemeente

Maak voor elke belangrijke gemeente een landingspagina:
- Antwerpen (stad)
- Berchem
- Deurne
- Merksem
- Wilrijk
- Brasschaat
- Schoten
- Wijnegem
- Mechelen
- Zoersel

Elke pagina moet bevatten:
- Lokale keywords in title en H1
- Specifieke informatie over de gemeente
- Lokale projecten/referenties
- Google Maps embed
- Lokale contactinformatie
