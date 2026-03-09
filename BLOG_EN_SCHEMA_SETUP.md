# Blog & Schema.org Setup ✅

## ✅ Wat is aangemaakt

### Blog Sectie
- **Blog overzichtspagina**: `/blog`
- **3 Blog artikelen**:
  1. `/blog/wat-kosten-nieuwe-ramen` - Prijzen en kosten
  2. `/blog/premies-ramen-deuren-2026` - Premies en subsidies
  3. `/blog/pvc-of-aluminium-ramen` - Vergelijking en advies

### Schema.org Structured Data

#### 1. Article Schema (`src/lib/article-schema.ts`)
- Voor blog artikelen
- Bevat: headline, description, author, publisher, dates
- Helpt Google artikelen te begrijpen en tonen in zoekresultaten

#### 2. Product Schema (`src/lib/product-schema.ts`)
- Voor ramen en deuren producten
- Bevat: naam, beschrijving, prijs, ratings
- Zorgt voor rich snippets met sterren en prijzen in Google

#### 3. Review Schema (`src/lib/review-schema.ts`)
- Voor klantreviews en testimonials
- Bevat: auteur, rating, datum, review tekst
- Toont sterren in Google zoekresultaten

#### 4. Testimonials Data (`src/data/testimonials.ts`)
- 6 klantreviews met 4-5 sterren
- Gemiddelde rating: 4.8/5
- Gebruikt op alle lokale pagina's

### Toegepast op pagina's
- ✅ `/ramen/antwerpen` - Product + Review schema
- ✅ `/ramen/zoersel` - Product + Review schema
- ✅ `/deuren/antwerpen` - Product + Review schema
- ✅ `/deuren/zoersel` - Product + Review schema
- ✅ Alle blog posts - Article schema

### Navigatie
- ✅ Blog link toegevoegd aan navbar
- ✅ Sitemap bijgewerkt met blog pagina's

## 🎯 Voordelen voor SEO

### Rich Snippets in Google
Met de toegevoegde schema's kun je nu verschijnen met:
- ⭐ Sterren ratings (4.8/5)
- 💰 Prijzen (vanaf €400/m²)
- 📝 Article snippets met auteur en datum
- 🔍 FAQ accordeons direct in zoekresultaten

### Blog voordelen
- 📈 Trekt organisch verkeer via long-tail keywords
- 💡 Positioneert je als expert
- 🔗 Interne links naar contact/offerte pagina's
- 📱 Deelbaar op social media

## 📊 Verwachte resultaten

### Binnen 2-4 weken:
- Blog artikelen beginnen te ranken voor:
  - "wat kosten nieuwe ramen"
  - "premies ramen vlaanderen"
  - "pvc of aluminium ramen"
- Rich snippets verschijnen in Google
- Meer klikken door sterren en prijzen

### Binnen 2-3 maanden:
- Hogere rankings door meer content
- Meer organisch verkeer
- Betere conversie door expert positionering

## 🔍 Testen

### Schema validatie
Test je structured data:
1. Ga naar: https://search.google.com/test/rich-results
2. Voer je URL in (bijv. `https://www.yannova.be/ramen/antwerpen`)
3. Check of alle schema's correct zijn

### Google Search Console
- Submit je sitemap: `https://www.yannova.be/sitemap.xml`
- Monitor welke pagina's geïndexeerd worden
- Check welke rich snippets verschijnen

## 📝 Volgende stappen

### Meer blog content (aanbevolen)
- "5 tekenen dat je nieuwe ramen nodig hebt"
- "Hoe lang gaan ramen mee?"
- "Energiebesparing met nieuwe ramen"
- "Ramen plaatsen: wat komt er bij kijken?"
- "Onderhoud tips voor PVC en aluminium ramen"

### Schema uitbreiden
- [ ] HowTo schema voor installatiegidsen
- [ ] Video schema als je video's toevoegt
- [ ] Event schema voor open dagen/beurzen

### Content optimalisatie
- [ ] Voeg afbeeldingen toe aan blog posts
- [ ] Voeg interne links toe tussen blog posts
- [ ] Voeg social share buttons toe
- [ ] Maak een nieuwsbrief signup

## 💡 Tips

1. **Regelmatig publiceren**: Probeer 1-2 blog posts per maand
2. **Keyword research**: Gebruik Google Search Console om te zien waar mensen naar zoeken
3. **Update oude posts**: Houd prijzen en premies up-to-date
4. **Promoot je blog**: Deel op social media, in nieuwsbrieven
5. **Monitor resultaten**: Check Google Analytics voor blog verkeer

## 🛠️ Technische details

### Bestanden aangemaakt
```
src/
├── app/
│   └── blog/
│       ├── page.tsx
│       ├── wat-kosten-nieuwe-ramen/page.tsx
│       ├── premies-ramen-deuren-2026/page.tsx
│       └── pvc-of-aluminium-ramen/page.tsx
├── lib/
│   ├── article-schema.ts
│   ├── product-schema.ts
│   └── review-schema.ts
└── data/
    └── testimonials.ts
```

### Schema types gebruikt
- Article (BlogPosting)
- Product
- Review + AggregateRating
- LocalBusiness (met reviews)
- FAQ (al bestaand)
- Breadcrumb (al bestaand)

## ✅ Checklist

- [x] Blog sectie opgezet
- [x] 3 blog artikelen geschreven
- [x] Article schema toegevoegd
- [x] Product schema toegevoegd
- [x] Review schema toegevoegd
- [x] Testimonials data aangemaakt
- [x] Schema's toegepast op lokale pagina's
- [x] Blog link in navigatie
- [x] Sitemap bijgewerkt
- [ ] Test schema's met Google Rich Results Test
- [ ] Submit sitemap aan Google Search Console
- [ ] Monitor resultaten in Analytics
