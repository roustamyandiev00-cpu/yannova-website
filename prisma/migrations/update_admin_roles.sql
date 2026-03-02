-- Migration: Update existing admin users to have admin role
-- This migration updates the 5 users from the hardcoded ALLOWED_EMAILS array
-- to have the 'admin' role in the database

-- Update existing admin users to have admin role
UPDATE "User" 
SET role = 'admin' 
WHERE email IN (
  'roustamyandiev00@gmail.com',
  'info@yannova.be',
  'windowpro.be@gmail.com',
  'innovar.labs7@gmail.com',
  'admin@yannova.be'
)
AND role != 'admin';

-- Log the migration
-- This ensures that existing admin users continue to have access after
-- the code changes from hardcoded ALLOWED_EMAILS to database role checking
