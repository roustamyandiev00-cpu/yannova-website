-- Create admin user
INSERT INTO "User" (id, email, password, name, role)
VALUES (
  gen_random_uuid()::text,
  'admin@yannova.be',
  '$2a$10$9CWlm.Fz6pGOQYKfiHpO0.LkLFnzFZVXJfEJtXaOeXzA6fF1zLm2',
  'Administrator',
  'admin'
)
ON CONFLICT (email) DO UPDATE
SET role = 'admin';
