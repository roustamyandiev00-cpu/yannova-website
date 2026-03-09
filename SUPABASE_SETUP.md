# Supabase Setup Instructies

## Stap 1: Haal je Supabase credentials op

Ga naar je Supabase dashboard en haal de volgende informatie op:

### API Keys
Ga naar: https://supabase.com/dashboard/project/uphjbgfwtvtqwnyrtnee/settings/api

Kopieer:
- **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **service_role key** → `SUPABASE_SERVICE_ROLE_KEY`

### Database Password
Ga naar: https://supabase.com/dashboard/project/uphjbgfwtvtqwnyrtnee/settings/database

Scroll naar "Connection string" en kopieer je database password.

## Stap 2: Vul de credentials in `.env.local`

Open `.env.local` en vervang de volgende placeholders:

```bash
# Supabase API Keys
NEXT_PUBLIC_SUPABASE_ANON_KEY=[YOUR-ANON-KEY]
SUPABASE_SERVICE_ROLE_KEY=[YOUR-SERVICE-ROLE-KEY]

# Database URLs - vervang [YOUR-PASSWORD] met je database password
DATABASE_URL="postgresql://postgres.uphjbgfwtvtqwnyrtnee:[YOUR-PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.uphjbgfwtvtqwnyrtnee:[YOUR-PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:5432/postgres"
```

## Stap 3: Test de connectie

Na het invullen van de credentials, test de database connectie:

```bash
# Test Prisma connectie
npx prisma db push

# Of run migrations
npx prisma migrate dev
```

## Stap 4: (Optioneel) Firebase Setup

Als je Firebase wilt gebruiken voor chat/analytics, uncomment de Firebase sectie in `.env.local` en vul de credentials in van:
https://console.firebase.google.com/project/ai-agent-5fab0/settings/general

## Stap 5: Start de development server

```bash
npm run dev
```

De applicatie zou nu moeten werken zonder errors!

## Troubleshooting

### "Firebase not configured" errors
Dit is normaal als je Firebase niet gebruikt. De applicatie werkt prima zonder Firebase.

### Database connection errors
- Controleer of je database password correct is
- Controleer of je IP adres is toegevoegd aan de Supabase allowlist
- Ga naar: https://supabase.com/dashboard/project/uphjbgfwtvtqwnyrtnee/settings/database

### MCP Server niet verbonden
1. Open VS Code Command Palette (Cmd+Shift+P)
2. Run "Kiro: Focus on MCP Servers View"
3. Reconnect de Supabase server
4. Log in via de browser flow
