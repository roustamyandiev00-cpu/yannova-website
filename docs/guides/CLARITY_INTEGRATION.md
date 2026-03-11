# Microsoft Clarity Integratie ard

## Overzicht

Je analytics dashboard is nu volledig geïntegreerd met Microsoft Clarity! Dit betekent dat je automatisch traffic data kunt syncen en combineren met je Google Ads en SEO metrics.

## Setup

### 1. Clarity API Credentials

Voeg toe aan je `.env.local`:

```env
CLARITY_API_TOKEN=your_clarity_api_token
CLARITY_PROJECT_ID=vsu0sqq5xj
NEXT_PUBLIC_CLARITY_ID=vsu0sqq5xj
```

### 2. Database Setup

 gedaan:

```bash
npx prisma generate
npx prisma db push
```

## Clarity Data Syncen

### Automatisch Syncen (Aanbevolen)

Maak een cron job die dagelijks draait:

```bash
# Voeg toe aan crontab (crontab -e)
0 2 * * * cd /path/to/project && npx tsx scripts/sync-clarity-data.ts
```

### Handmatig Syncen

```bash
# Sync vandaag
npxts/sync-clarity-data.ts

# Sync laatste 7 dagen
npx tsx scripts/sync-clarity-data.ts 7

# Sync laatste 30 dagen
npx tsx scripts/sync-clarity-data.ts 30
```

### Via API

```bash
# Sync vandaag
curl -X GET http://localhost:3000/api/analytics/clarity-sync

# Sync laatste 7 dagen
curl -X POST http://localhost:3000/api/analytics/clarity-sync \
  -H "Content-Type: application/json" \
  -d '{"days": 7}'
```

## Wat Wordt Gesynchroniseerd?

### Traffic Analytics
- **Pageviews** - Totaal aantal pagina views
- **Unique Visitors** - Unieke bezoekers (sessions)
- **Bounce Rate** - Percentage bezoekers die direct vertrekken
- **Avg Session Time** - Gemiddelde sessie duur

### Performance Metrics
Autperformance metrics:
- `bounce_rate` - Voor trend tracking
- `avg_session_duration` - Voor gebruikerservaring monitoring

## Dashboard Features

### Clarity Sectie
Het dashboard toont nu:
- Real-time traffic metrics van Clarity
- Vergelijking met vorige periode
- Trends en verbeteringen
- Link naar volledig Clarity dashboard

### Gecombineerde Insights
- Trsies (Google Ads)
- Bounce rate + SEO rankings
- Session time + Performance metrics

## Custom Event Tracking

### In Je Code

Track custom events die automatisch naar conversies worden geconverteerd:

```typescript
import { trackClarityEvent } from '@/lib/clarity-sync';

// Bij form submit
await trackClarityEvent('form_submit', sessionId, {
  source: 'google_ads',
  campaign: 'Gevelrenovatie 2024',
  page: '/contact'
});

// Bij phone click
await trackClarityEvent('phone_click', sessionId, {
  source: 'organic',
  device: 'mobile'
});

// Bij WhatsApp click
await trackClarityEvent('whatsapp_click', sessionId, {
  source: 'direct',
  page: '/diensten/gevelrenovatie'
});
```

### In Clarity Dashboard

1. Ga naar Clarity Dashboard
2. Setup custom events
3. Events worden automatisch gesynchroniseerd

## Vercel Deployment

### Environment Variables

Voeg toe in Vercel dashboard:

```
CLARITY_API_TOKEN=your_token
CLARITY_PROJECT_ID=vsu0sqq5xj
NEXT_PUBLIC_CLARITY_ID=vsu0sqq5xj
```

### Cron Job Setup

Optie 1: Vercel Cron (Aanbevolen)

Voeg toe aan `vercel.json`:

c: `src/lib/clarity-sync.ts`
bruik heatmap data voor optimalisaties
```

## Volgende Stappen

1. ✅ Setup Clarity API credentials
2. ✅ Sync historische data (30 dagen)
3. ✅ Setup dagelijkse cron job
4. ✅ Monitor dashboard voor insights
5. ⬜ Setup custom events
6. ⬜ Integreer heatmap data
7. ⬜ Maak custom reports

## Support

- Clarity Docs: https://learn.microsoft.com/en-us/clarity/
- Clarity API: https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-api
- Dashboard Code: `src/app/admin/analytics/page.tsx`
- Sync Logiclarity-api';
import { prisma } from '@/lib/prisma';

const metrics = await getClarityMetrics();

// Track als custom metric
await prisma.performanceMetric.create({
  data: {
    metric: 'user_engagement_score',
    value: (1 - metrics.bounceRate / 100) * metrics.avgSessionDuration,
    category: 'user_experience',
    period: new Date()
  }
});
```

### Heatmap Data

```typescript
import { getClarityHeatmap } from '@/lib/clarity-api';

const heatmap = await getClarityHeatmap('/diensten/gevelrenovatie');
// Geics

Voeg eigen metrics toe gebaseerd op Clarity data:

```typescript
import { getClarityMetrics } from '@/lib/acht 1 uur)
npx tsx scripts/sync-clarity-data.ts 7
```

## Best Practices

### 1. Dagelijkse Sync
Sync elke dag om actuele data te hebben

### 2. Historische Data
Sync eenmalig laatste 30-90 dagen voor baseline

### 3. Monitoring
Check regelmatig of sync succesvol is:
```sql
SELECT date, pageViews, uniqueVisitors 
FROM TrafficAnalytics 
ORDER BY date DESC 
LIMIT 7;
```

### 4. Backup
Clarity data blijft in Clarity beschikbaar, maar sync regelmatig voor eigen analytics

## Geavanceerde Features

### Custom Metr## Rate Limiting

Clarity API heeft rate limits. Het sync script wacht automatisch 1 seconde tussen requests. Voor grote syncs (>30 dagen), doe dit in batches:

```bash
# Week 1
npx tsx scripts/sync-clarity-data.ts 7

# Week 2 (ws/view/vsu0sqq5xj/heatmaps

### API Token Aanmaken
1. Ga naar https://clarity.microsoft.com/settings/api
2. Klik "Generate new token"
3. Kopieer token naar `.env.local`

## Troubleshooting

### "Clarity API credentials not configured"

Check of je environment variables correct zijn:
```bash
echo $CLARITY_API_TOKEN
echo $CLARITY_PROJECT_ID
```

### Geen data na sync

1. Check of Clarity data heeft voor de periode
2. Verifieer API token permissions
3. Check console logs: `npx tsx scripts/sync-clarity-data.ts`

#```

Optie 2: External Cron Service

Gebruik een service zoals:
- [cron-job.org](https://cron-job.org)
- [EasyCron](https://www.easycron.com)
- GitHub Actions

Configureer om dagelijks te callen:
```
https://jouw-domain.vercel.app/api/analytics/clarity-sync
```

## Clarity Dashboard Links

### Jouw Project
- Dashboard: https://clarity.microsoft.com/projects/view/vsu0sqq5xj/dashboard
- Recordings: https://clarity.microsoft.com/projects/view/vsu0sqq5xj/recordings
- Heatmaps: https://clarity.microsoft.com/project```json
{
  "crons": [{
    "path": "/api/analytics/clarity-sync",
    "schedule": "0 2 * * *"
  }]
}
