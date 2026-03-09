# Analytics Dashboard - Quick Start

## 🚀 Snelle Setup (5 minuten)

### Stap 1: Database Setup

```bash
# Genereer Prisma client met nieuwe tabellen
npx prisma generate

# Push naar database
npx prisma db push
```

### Stap 2: Test Data Importeren (Optioneel)

```bash
# Import voorbeeld Google Ads data
npx tsx scripts/import-google-ads-data.ts

# Import voorbeeld SEO rankings
npx tsx scripts/import-seo-rankings.ts
```

### Stap 3: Dashboard Bekijken

Open in je browser:
```
http://localhost:3000/admin/analytics
```

## ✨ Wat Kun Je Nu?

### 1. Data Bekijken
- Google Ads performance (impressies, clicks, conversies)
- Top presterende zoekwoorden
- SEO rankings met trends
- Conversies per bron
- Performance verbeteringen

### 2. Data Toevoegen
Klik op de **+** knop rechtsonder en kies:

**Google Ads:**
- Zoekwoord + metrics
- Automatische CTR/CPC berekening

**Performance:**
- Metric naam (bijv. "page_speed")
- Waarde + vorige waarde
- Automatische verbetering berekening

**SEO:**
- Keyword + positie
- Trend tracking

### 3. Automatisch Tracken

#### Conversies bij Lead Aanmaak

In `src/app/api/contact/route.ts` (of waar je leads aanmaakt):

```typescript
import { trackConversion, getUTMParameters, getDeviceType } from '@/lib/analytics-tracker';

// Na lead aanmaken
await trackConversion({
  type: 'lead',
  source: getUTMParameters(request.url).source || 'direct',
  campaign: getUTMParameters(request.url).campaign,
  keyword: getUTMParameters(request.url).keyword,
  leadId: lead.id,
  page: request.headers.get('referer'),
  device: getDeviceType(request.headers.get('user-agent') || '')
});
```

## 📊 Nieuwe Database Tabellen

Het systeem heeft deze tabellen toegevoegd:

1. **GoogleAdsKeyword** - Zoekwoord performance
2. **GoogleAdsCampaign** - Campagne metrics
3. **PerformanceMetric** - Website verbeteringen
4. **SeoRanking** - Keyword posities
5. **Conversion** - Conversie tracking
6. **TrafficAnalytics** - Dagelijkse traffic stats

## 🎯 Gebruik Cases

### Google Ads Optimalisatie
1. Voeg wekelijks je keyword data toe
2. Identificeer beste performers (hoogste conversie rate)
3. Zie welke keywords te duur zijn (hoge CPC, lage conversies)
4. Track trends over tijd

### SEO Monitoring
1. Voeg maandelijks je rankings toe
2. Zie welke keywords stijgen/dalen
3. Focus op keywords met hoog volume + lage difficulty
4. Track impact van SEO verbeteringen

### Performance Tracking
1. Meet voor/na bij elke optimalisatie
2. Track page speed, conversion rate, etc.
3. Zie automatisch verbeteringspercentage
4. Documenteer wat werkt

### Conversie Analyse
1. Zie welke bronnen meeste leads genereren
2. Vergelijk Google Ads vs Organic
3. Optimaliseer marketing budget
4. Track ROI per campagne

## 🔧 Handige Scripts

### Bulk Import Google Ads

Bewerk `scripts/import-google-ads-data.ts` met je eigen data:

```typescript
const sampleData = {
  keywords: [
    {
      keyword: 'jouw zoekwoord',
      impressions: 1500,
      clicks: 45,
      conversions: 3,
      cost: 67.50,
      campaign: 'Jouw Campagne',
      period: new Date('2024-03-01')
    }
  ]
};
```

Run: `npx tsx scripts/import-google-ads-data.ts`

### Bulk Import SEO Rankings

Bewerk `scripts/import-seo-rankings.ts`:

```typescript
const seoRankings = [
  {
    keyword: 'jouw keyword',
    position: 3,
    previousPosition: 7,
    url: '/jouw-pagina',
    searchVolume: 880,
    difficulty: 45
  }
];
```

Run: `npx tsx scripts/import-seo-rankings.ts`

## 📈 Tips voor Beste Resultaten

1. **Consistentie**: Voeg data regelmatig toe (wekelijks/maandelijks)
2. **UTM Parameters**: Gebruik in al je Google Ads campagnes
3. **Notities**: Documenteer wat je hebt veranderd bij verbeteringen
4. **Vergelijken**: Kijk naar trends, niet alleen absolute cijfers
5. **Actie**: Gebruik insights om beslissingen te maken

## 🎨 Dashboard Features

- ✅ Real-time metrics
- ✅ Trend indicators (↑ ↓)
- ✅ Percentage changes
- ✅ Top performers
- ✅ Conversie funnels
- ✅ Cost analysis
- ✅ ROI tracking
- ✅ Mobile responsive
- ✅ Dark mode design

## 🚀 Volgende Stappen

1. **Integreer met je forms** - Auto-track conversies
2. **Setup cron jobs** - Dagelijkse traffic updates
3. **Google Ads API** - Automatische import (toekomstig)
4. **Grafieken toevoegen** - Visualiseer trends
5. **Email rapporten** - Wekelijkse updates

## 📚 Meer Info

Zie `ANALYTICS_DASHBOARD_GUIDE.md` voor:
- Gedetailleerde API documentatie
- Geavanceerde features
- Troubleshooting
- Best practices
- Toekomstige uitbreidingen

## 💡 Vragen?

Check de code:
- Dashboard: `src/app/admin/analytics/page.tsx`
- API: `src/app/api/analytics/`
- Helpers: `src/lib/analytics-tracker.ts`
- Schema: `prisma/schema.prisma`
