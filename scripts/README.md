# Scripts Overzicht

Alle utility en automation scripts, georganiseerd per functie.

## Mappenstructuur

### admin/
Admin en gebruikersbeheer scripts
- `check-admin.js` - Controleer admin status
- `create-admin*.js/ts` - Admin gebruiker aanmaken
- `quick-admin.js` - Snelle admin setup
- `set-only-admin.ts` - Admin rechten instellen

### database/
Database gerelateerde scripts
- `check-roles.ts` - Controleer gebruikersrollen
- `list-users.ts` - Lijst alle gebruikers
- `run-supabase-migration.ts` - Migraties uitvoeren
- `seed-*.ts` - Database seeding scripts
- `setup-supabase*.sh/ts` - Supabase setup
- `test-supabase.ts` - Supabase connectie testen
- `supabase-chat-schema.sql` - Chat schema

### seo/
SEO en analytics scripts
- `generate-all-seo.ts` - SEO content genereren
- `generate-local-pages.js` - Lokale pagina's genereren
- `import-seo-rankings.ts` - SEO rankings importeren
- `sync-clarity-data.ts` - Clarity analytics sync
- `import-google-ads-data.ts` - Google Ads data importeren

### deployment/
Deployment en productie scripts
- `pre-deploy-check.sh` - Pre-deployment checks
- `setup-email.sh` - Email configuratie
- `setup-git-remote.sh` - Git remote setup
- `test-ai-chat.sh` - AI chat testen
- `test-email.js` - Email functionaliteit testen

### Overige (root van scripts/)
- `image-optimizer.js` - Afbeeldingen optimaliseren
- `optimize-images.js` - Batch image optimization
- `sanitize-project-titles.js` - Project titels opschonen
- `verify-improvements.sh` - Verbeteringen verifiëren
- `crawl_images.py` - Afbeeldingen crawlen
- `download_images.mjs` - Afbeeldingen downloaden

## Gebruik

Meeste scripts kunnen direct uitgevoerd worden:

```bash
# TypeScript scripts
npx tsx scripts/admin/create-admin.ts

# JavaScript scripts
node scripts/admin/check-admin.js

# Shell scripts
bash scripts/deployment/pre-deploy-check.sh
```

Zorg dat je de juiste environment variabelen hebt ingesteld in `.env` voordat je scripts uitvoert.
