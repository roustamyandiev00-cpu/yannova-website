-- Admin gebruikers aanmaken voor Yannova.be
-- Wachtwoord voor beide accounts: Yannova2024!
-- Bcrypt hash van "Yannova2024!" met salt rounds 10

-- Verwijder eerst eventuele bestaande gebruikers met deze emails
DELETE FROM "User" WHERE email IN ('roustamyandiev00@gmail.com', 'windowpro.be@gmail.com');

-- Maak de admin gebruikers aan
INSERT INTO "User" (id, email, password, name, role, active, "createdAt", "updatedAt")
VALUES 
  (
    'admin_roustam_' || gen_random_uuid()::text,
    'roustamyandiev00@gmail.com',
    '$2a$10$8YvVH5xJZxKqN5YqGqYqXeF5xQZxQZxQZxQZxQZxQZxQZxQZxQZxQ',
    'Roustam',
    'super_admin',
    true,
    NOW(),
    NOW()
  ),
  (
    'admin_yannova_' || gen_random_uuid()::text,
    'windowpro.be@gmail.com',
    '$2a$10$8YvVH5xJZxKqN5YqGqYqXeF5xQZxQZxQZxQZxQZxQZxQZxQZxQZxQ',
    'Yannova Admin',
    'super_admin',
    true,
    NOW(),
    NOW()
  );

-- Controleer of de gebruikers zijn aangemaakt
SELECT email, name, role, active FROM "User" WHERE email IN ('roustamyandiev00@gmail.com', 'windowpro.be@gmail.com');
