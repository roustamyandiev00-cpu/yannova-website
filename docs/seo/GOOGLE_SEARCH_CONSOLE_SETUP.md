# Google Search Console Setup Guide

## Stap 1: Account Aanmaken

1. Ga naar [Google Search Console](https://search.google.com/search-console)
2. Log in met je Google account
3. Klik op "Property toevoegen"

## Stap 2: Website Verificatie

### Optie A: HTML Bestand Upload (Aanbevolen)

1. Kies "URL-voorvoegsel" en voer in: `https://www.yannova.be`
2. Selecteer verificatiemethode: "HTML-bestand"
3. Download het verificatiebestand (bijv. `google1234567890abcdef.html`)
4. Plaats het bestand in de `/public` folder van je project
5. Deploy je website
6. Klik op "Verifiëren" in Google Search Console

### Optie B: HTML Meta Tag

1. Kies "HTML-tag" als verificatiemethode
2. Kopieer de meta tag
3. Voeg toe aan `src/app/layout.tsx` in de metadata:

```typescript
export const metadata: Metadata = {
  // ... andere metadata
  verification: {
    google: 'jouw-verificatie-code-hier',
  },
}
```

4. Deploy je website
5. Klik op "Verifiëren"

### Optie C: Google Analytics

Als je Google Analytics al hebt ingesteld via GTM:
1. Selecteer "Google Analytics"
2. Klik op "Verifiëren"

## Stap 3: Sitemap Indienen

1. Klik in het linkermenu op "Sitemaps"
2. Voer in: `sitemap.xml`
3. Klik op "Indienen"

Je sitemap URL is: `https://www.yannova.be/sitemap.xml`

## Stap 4: Belangrijke Instellingen

### URL-parameters
- Ga naar "Instellingen" → "Crawlsnelheid"
- Laat standaard instellingen staan (Google bepaalt automatisch)

### Internationale targeting
- Ga naar "Instellingen" → "Internationale targeting"
- Land: België
- Taal: Nederlands (nl-BE)

### Gebruikers toevoegen
Als je team members wilt toevoegen:
1. Ga naar "Instellingen" → "Gebruikers en machtigingen"
2. Klik op "Gebruiker toevoegen"
3. Voer e-mailadres in
4. Kies machtigingsniveau (Eigenaar/Volledig/Beperkt)

## Stap 5: Eerste Controles

### Indexatiestatus Controleren
1. Ga naar "Overzicht"
2. Bekijk "Indexering" sectie
3. Check hoeveel pagina's geïndexeerd zijn

### URL Inspection Tool
Test belangrijke pagina's:
1. Klik op "URL-inspectie" (zoekbalk bovenaan)
2. Voer URL in (bijv. `https://www.yannova.be/ramen`)
3. Bekijk indexatiestatus
4. Klik "Indexering aanvragen" als pagina nog niet geïndexeerd is

### Belangrijke Pagina's om te Testen:
- https://www.yannova.be
- https://www.yannova.be/ramen
- https://www.yannova.be/deuren
- https://www.yannova.be/gevelrenovatie
- https://www.yannova.be/diensten
- https://www.yannova.be/contact

## Stap 6: Performance Monitoring

### Core Web Vitals
1. Ga naar "Ervaring" → "Core Web Vitals"
2. Bekijk prestaties voor mobiel en desktop
3. Los problemen op indien nodig

### Mobile Usability
1. Ga naar "Ervaring" → "Mobiele bruikbaarheid"
2. Check voor mobile-friendly issues
3. Los problemen op

## Stap 7: Regelmatige Controles

### Wekelijks:
- Check "Prestaties" voor traffic trends
- Bekijk nieuwe indexeringsproblemen
- Monitor crawl errors

### Maandelijks:
- Analyseer top queries
- Check backlinks (Koppelingen → Externe koppelingen)
- Review Core Web Vitals

## Veelvoorkomende Problemen

### "Pagina niet geïndexeerd"
**Oplossing:**
1. Check robots.txt: `https://www.yannova.be/robots.txt`
2. Controleer of pagina in sitemap staat
3. Gebruik URL Inspection Tool
4. Klik "Indexering aanvragen"

### "Sitemap kan niet worden gelezen"
**Oplossing:**
1. Test sitemap: `https://www.yannova.be/sitemap.xml`
2. Check of sitemap geldig XML is
3. Controleer server errors (500, 404)

### "Mobiele bruikbaarheidsproblemen"
**Oplossing:**
1. Test met [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
2. Fix responsive design issues
3. Check viewport meta tag

## Handige Links

- [Search Console Help](https://support.google.com/webmasters)
- [SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Google Search Central](https://developers.google.com/search)

## Support

Voor technische vragen:
- Check de [SEO Checklist](./SEO_CHECKLIST.md)
- Gebruik Google's URL Inspection Tool
- Raadpleeg Search Console Help Center

---

**Laatste update:** ${new Date().toLocaleDateString('nl-BE')}
