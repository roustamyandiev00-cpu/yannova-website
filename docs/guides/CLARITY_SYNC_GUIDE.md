# Microsoft Clarity Sync Guide

## Quick Start

### 1. Setup Environment Variables

```env
CLARITY_API_TOKEN=your_token_here
CLARITY_PROJECT_ID=vsu0sqq5xj
NEXT_PUBLIC_CLARITY_ID=vsu0sqq5xj
```

### 2. Sync Data

```bash
# Sync vandaag
npx tsx scripts/sync-clarity-data.ts

# Sync laatste 30 dagen
npx tsx scripts/sync-clarity-data.ts 30
```

### 3. View Dashboard

Ga naar: `/admin/analytics`

## Wat Wordt Gesynchroniseerd

- Pageviews
- Unique Visitors  
- Bounce Rate
- Average Session Time

## Automatische Sync

### Vercel Cron

Voeg toe aan `vercel.json`:

```json
{
  "crons": [{
    "path": "/api/analytics/clarity-sync",
    "schedule": "0 2 * * *"
  }]
}
```

### Manual Cron

```bash
# crontab -e
0 2 * * * cd /path/to/project && npx tsx scripts/sync-clarity-data.ts
```

## Links

- Dashboard: https://clarity.microsoft.com/projects/view/vsu0sqq5xj/dashboard
- API Settings: https://clarity.microsoft.com/settings/api
