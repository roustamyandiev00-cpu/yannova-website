# Admin Login Oplossing

## Probleem
Je kunt niet inloggen op het admin dashboard omdat de admin gebruikers nog niet in de database staan.

## Oplossing: SQL Direct Uitvoeren in Supabase

Omdat we SSL certificaat problemen hebben met scripts, moet je de admin accounts handmatig aanmaken via Supabase SQL Editor.

### Stap 1: Open Supabase SQL Editor

1. Ga naar https://supabase.com/dashboard
2. Selecteer je Yannova project
3. Klik op "SQL Editor" in het linker menu

### Stap 2: Kopieer en Plak Deze SQL

```sql
-- Verwijder eerst eventuele bestaande admin accounts
DELETE FROM "User" WHERE email IN ('roustamyandiev00@gmail.com', 'windowpro.be@gmail.com');

-- Maak nieuwe admin accounts aan met wachtwoord: Yannova2024!
INSERT INTO "User" (id, email, password, name, role, active, "createdAt", "updatedAt")
VALUES (
  'clx' || substr(md5(random()::text), 1, 22),
  'roustamyandiev00@gmail.com',
  '$2b$10$AoFs/JQdta1nepywj0EWyewyImD61tJoYlOtWp/Bw9ZAO9btZARBC',
  'Roustam',
  'super_admin',
  true,
  NOW(),
  NOW()
);

INSERT INTO "User" (id, email, password, name, role, active, "createdAt", "updatedAt")
VALUES (
  'clx' || substr(md5(random()::text), 1, 22),
  'windowpro.be@gmail.com',
  '$2b$10$AoFs/JQdta1nepywj0EWyewyImD61tJoYlOtWp/Bw9ZAO9btZARBC',
  'Yannova Admin',
  'super_admin',
  true,
  NOW(),
  NOW()
);
```

### Stap 3: Voer de SQL Uit

1. Plak de SQL in de SQL Editor
2. Klik op de groene "Run" knop (of druk Ctrl+Enter / Cmd+Enter)
3. Je zou een succesbericht moeten zien: "Success. No rows returned"

### Stap 4: Test Login

Ga naar: https://www.yannova.be/admin/login

**Login gegevens:**
- Email: `roustamyandiev00@gmail.com` OF `windowpro.be@gmail.com`
- Wachtwoord: `Yannova2024!`

## Beveiliging

✅ Alleen deze 2 emails kunnen inloggen (whitelist is actief)
✅ Wachtwoord is veilig gehashed met bcrypt
✅ Beide accounts hebben super_admin rechten

## Als het nog steeds niet werkt

1. Check of de SQL succesvol is uitgevoerd in Supabase
2. Probeer de browser cache te legen
3. Check of je de juiste email gebruikt (lowercase!)
4. Kijk in de browser console voor eventuele errors

## Volgende Stappen

Na succesvolle login kun je:
- Projecten beheren
- Leads bekijken
- Chat berichten lezen
- Testimonials goedkeuren
- En meer...
