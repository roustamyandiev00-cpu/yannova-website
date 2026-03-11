# Admin Setup Instructies

## Stap 1: Environment Variable Toevoegen in Vercel

1. Ga naar https://vercel.com/dashboard
2. Selecteer je project (yannova-website)
3. Ga naar **Settings** → **Environment Variables**
4. Voeg toe:
   - **Name**: `ADMIN_SETUP_SECRET`
   - **Value**: `yannova-admin-setup-2024-secure`
   - **Environment**: Production
5. Klik op **Save**
6. **Redeploy** je applicatie (Settings → Deployments → laatste deployment → ... → Redeploy)

## Stap 2: Admin Gebruikers Aanmaken

Nadat de deployment klaar is, voer dit uit in je terminal:

```bash
curl -X POST https://www.yannova.be/api/setup-admin \
  -H "Content-Type: application/json" \
  -d '{"secret":"yannova-admin-setup-2024-secure"}'
```

Of gebruik deze JavaScript code in de browser console op www.yannova.be:

```javascript
fetch('/api/setup-admin', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ secret: 'yannova-admin-setup-2024-secure' })
})
.then(r => r.json())
.then(console.log);
```

## Stap 3: Inloggen

Na succesvolle setup kun je inloggen op:
- **URL**: https://www.yannova.be/admin/login
- **Email**: roustamyandiev00@gmail.com of windowpro.be@gmail.com
- **Wachtwoord**: Yannova2024!

## Stap 4: Beveiliging (BELANGRIJK!)

Na het aanmaken van de admin accounts:

1. **Verwijder de setup endpoint** of maak hem ontoegankelijk:
   - Verwijder `src/app/api/setup-admin/route.ts`
   - Of verander de `ADMIN_SETUP_SECRET` in Vercel naar een random waarde

2. **Commit en push de wijzigingen**

## Troubleshooting

### "Unauthorized" error
- Check of `ADMIN_SETUP_SECRET` correct is ingesteld in Vercel
- Check of je de juiste secret gebruikt in de request

### "Database connection error"
- Check of `DATABASE_URL` correct is ingesteld in Vercel
- Check of de database bereikbaar is

### Kan nog steeds niet inloggen
- Check of de setup succesvol was (response moet "success: true" bevatten)
- Probeer de browser cache te legen
- Check of je de juiste email gebruikt (lowercase!)

## Alternatieve Methode: Via Supabase Dashboard

Als de API methode niet werkt, kun je ook direct in Supabase SQL Editor:

1. Ga naar https://supabase.com/dashboard
2. Selecteer je project
3. Ga naar **SQL Editor**
4. Voer uit:

```sql
-- Genereer hash voor wachtwoord "Yannova2024!"
-- Deze hash moet je eerst lokaal genereren met:
-- node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('Yannova2024!', 10));"

DELETE FROM "User" WHERE email IN ('roustamyandiev00@gmail.com', 'windowpro.be@gmail.com');

INSERT INTO "User" (id, email, password, name, role, active, "createdAt", "updatedAt")
VALUES 
  (
    'clx' || substr(md5(random()::text), 1, 22),
    'roustamyandiev00@gmail.com',
    '$2b$10$[HASH_HIER]',  -- Vervang met de gegenereerde hash
    'Roustam',
    'super_admin',
    true,
    NOW(),
    NOW()
  ),
  (
    'clx' || substr(md5(random()::text), 1, 22),
    'windowpro.be@gmail.com',
    '$2b$10$[HASH_HIER]',  -- Vervang met de gegenereerde hash
    'Yannova Admin',
    'super_admin',
    true,
    NOW(),
    NOW()
  );
```
