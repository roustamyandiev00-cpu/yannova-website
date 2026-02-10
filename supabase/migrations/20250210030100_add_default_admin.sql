-- Insert default admin user
-- Password: admin123 (hashed with bcrypt)
INSERT INTO "User" ("id", "email", "password", "name", "role", "active", "createdAt", "updatedAt")
VALUES (
    gen_random_uuid()::text,
    'admin@yannova.be',
    '$2a$10$9CWlm.Fz6pGOQYKfiHpO0.LkLFnzFZVXJfEJtXaOeXzA6fF1zLm2', -- admin123
    'Administrator',
    'super_admin',
    true,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
)
ON CONFLICT ("email") DO NOTHING;
