# Intelligent Analytics Dashboard - Gebruikershandleiding

## Overzicht

Je hebt nu een geavanceerd analytics dashboard dat automatisch alle belangrijke metrics bijhoudt:

- **Google Ads Performance** - Zoekwoorden, conversies, kosten, CTR
- **SEO Rankings** - Keyword posities en verbeteringen
- **Performance Metrics** - Snelheid, conversie rates, verbeteringen
- **Conversie Tracking** - Leads, calls, forms per bron
- **Traffic Analytics** - Bezoekers, pageviews, populaire pagina's

## Database Setup

Eerst moet je de nieuwe database tabellen aanmaken:

```bash
npx prisma generate
npx prisma db push
```

## Dashboard Gebruiken

### 1. Analytics Bekijken

Ga naar: `/admin/analytics`

Hier zie je:
- Google Ads metrics (impressies, clicks, conversies, kosten)
- Top presterende zoekwoorden
- SEO rankings met positie veranderingen
- Conversies per bron
- Recente verbeteringen

### 2. Data Toevoegen

Klik op de **+** knop rechtsonder op de analytics pagina.

#### Google Ads Data Toevoegen

1. Selecteer "Google Ads"
2. Vul in:
   - Zoekwoord (bijv. "gevelrenovatie antwerpen")
   - Match Type (broad/phrase/exact)
   - Impressies (aantal keer getoond)
   - Clicks (aantal clicks)
   - Conversies (aantal leads/verkopen)
   - Kosten in euro's
   - Campagne naam (optioneel)
   - Ad Group (optioneel)

Het systeem berekent automatisch:
- CTR (Click-Through Rate)
- Conversie Rate
- CPC (Cost Per Click)

#### Performance Metrics Toevoegen

1. Selecteer "Performance"
2. Vul in:
   - Metric naam (bijv. "page_speed", "conversion_rate")
   - Categorie (SEO/Performance/Conversion/User Experience)
   - Huidige waarde
   - Vorige waarde (voor verbetering berekening)
   - Pagina (optioneel)
   - Notities

Het systeem berekent automatisch het verbeteringspercentage.

#### SEO Rankings Toevoegen

1. Selecteer "SEO Ranking"
2. Vul in:
   - Zoekwoord
   - URL (welke pagina rankt)
   - Huidige positie (1-100)
   - Vorige positie (voor trend)
   - Zoekvolume (maandelijks)
   - Moeilijkheidsgraad (1-100)

## Automatische Tracking

### Conversies Automatisch Tracken

In je lead/contact formulieren, voeg toe:

```typescript
import { trackConversion, getUTMParameters, getDeviceType } from '@/lib/analytics-tracker';

// Bij het aanmaken van een lead
const lead = await prisma.lead.create({ ... });

// Track de conversie
const utmParams = getUTMParameters(request.url);
await trackConversion({
  type: 'lead',
  source: utmParams.source || 'direct',
  campaign: utmParams.campaign,
  keyword: utmParams.keyword,
  leadId: lead.id,
  page: request.headers.get('referer'),
  device: getDeviceType(request.headers.get('user-agent') || '')
});
```

### Traffic Analytics Updaten

Maak een cron job of scheduled task:

```typescript
import { updateTrafficAnalytics } from '@/lib/analytics-tracker';

// Run dit dagelijks
await updateTrafficAnalytics();
```

## API Endpoints

### Google Ads Data

**POST** `/api/analytics/google-ads`
```json
{
  "keywords": [{
    "keyword": "gevelrenovatie antwerpen",
    "matchType": "phrase",
    "impressions": 1500,
    "clicks": 45,
    "conversions": 3,
    "cost": 67.50,
    "campaign": "Gevelrenovatie 2024",
    "adGroup": "Antwerpen"
  }]
}
```

**GET** `/api/analytics/google-ads?days=30`

### Performance Metrics

**POST** `/api/analytics/performance`
```json
{
  "metric": "page_speed",
  "value": 92,
  "previousValue": 78,
  "category": "performance",
  "page": "/diensten/gevelrenovatie",
  "notes": "Optimized images and lazy loading"
}
```

**GET** `/api/analytics/performance?days=30&category=seo`

### SEO Rankings

**POST** `/api/analytics/seo`
```json
{
  "rankings": [{
    "keyword": "gevelrenovatie antwerpen",
    "position": 3,
    "previousPosition": 7,
    "url": "/diensten/gevelrenovatie",
    "searchVolume": 880,
    "difficulty": 45
  }]
}
```

**GET** `/api/analytics/seo?days=30`

## Best Practices

### 1. Regelmatig Data Toevoegen

- **Google Ads**: Wekelijks of maandelijks
- **SEO Rankings**: Wekelijks
- **Performance Metrics**: Bij elke verbetering

### 2. Consistente Naming

Gebruik consistente namen voor:
- Campagnes
- Zoekwoorden
- Metrics
- Pagina URLs

### 3. UTM Parameters Gebruiken

Voor Google Ads campagnes, gebruik UTM parameters:

```
https://yannova.be/diensten/gevelrenovatie?utm_source=google&utm_campaign=gevelrenovatie_2024&utm_term=gevelrenovatie+antwerpen
```

### 4. Notities Bijhouden

Bij performance metrics, voeg altijd notities toe over wat je hebt verbeterd.

## Rapportage

### Beste Zoekwoorden Identificeren

Kijk naar:
- Hoogste conversie rate
- Laagste CPC
- Beste ROI (conversies / kosten)

### Verbeteringen Meten

Het dashboard toont automatisch:
- Percentage verandering vs vorige periode
- Trend indicators (↑ ↓)
- Verbeteringspercentages

### Conversie Bronnen

Zie welke bronnen de meeste conversies genereren:
- Google Ads
- Organic (SEO)
- Direct
- Referral

## Troubleshooting

### Data verschijnt niet

1. Check of database migratie is uitgevoerd
2. Ververs de pagina
3. Check browser console voor errors

### Verkeerde berekeningen

- Zorg dat impressies > clicks > conversies
- Check dat kosten correct zijn ingevoerd (gebruik punt voor decimalen)

### Performance Issues

Als het dashboard traag is:
- Beperk de datum range (standaard 30 dagen)
- Archiveer oude data
- Voeg database indexes toe

## Toekomstige Uitbreidingen

Mogelijke verbeteringen:
- Google Ads API integratie (automatische import)
- Google Search Console integratie
- Grafieken en visualisaties
- Export naar Excel/PDF
- Email rapporten
- Doelen en targets instellen
- A/B testing tracking
- Heatmaps integratie

## Support

Voor vragen of problemen, check:
- Database schema: `prisma/schema.prisma`
- API routes: `src/app/api/analytics/`
- Components: `src/components/admin/`
- Helper functies: `src/lib/analytics-tracker.ts`
