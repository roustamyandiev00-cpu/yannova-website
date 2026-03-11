-- Admin gebruikers aanmaken voor Yannova.be
-- Wachtwoord: Yannova2024!

-- Verwijder eerst eventuele bestaande gebruikers met deze emails
DELETE FROM "User" WHERE email IN ('roustamyandiev00@gmail.com', 'windowpro.be@gmail.com');

-- Maak de admin gebruikers aan
INSERT INTO "User" (id, email, password, name, role, active, "createdAt", "updatedAt")
VALUES 
  (
    'clx' || substr(md5(random()::text), 1, 22),
    'roustamyandiev00@gmail.com',
    '$2b$10$UxOEcV1uf5BAI1WyswCNi.wxl47.EW7jDA4LLfUZLrCkFF2NrnyLm',
    'Roustam',
    'super_admin',
    true,
    NOW(),
    NOW()
  ),
  (
    'clx' || substr(md5(random()::text), 1, 22),
    'windowpro.be@gmail.com',
    '$2b$10$UxOEcV1uf5BAI1WyswCNi.wxl47.EW7jDA4LLfUZLrCkFF2NrnyLm',
    'Yannova Admin',
    'super_admin',
    true,
    NOW(),
    NOW()
  );

-- Controleer of de gebruikers zijn aangemaakt
SELECT email, name, role, active FROM "User" 
WHERE email IN ('roustamyandiev00@gmail.com', 'windowpro.be@gmail.com');
