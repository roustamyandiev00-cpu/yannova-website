# Admin User Setup Guide

**Status:** REQUIRED BEFORE LAUNCH  
**Time Required:** 5 minutes

---

## What You Need

1. **Supabase project ID:** `adlqcdnpjaglfvleeykj` ✓
2. **Admin email from whitelist:** `roustamyandiev00@gmail.com` ✓
3. **A password for the admin account:** (you choose)
4. **Access to Supabase dashboard:** https://app.supabase.com

---

## Step 1: Generate Bcrypt Hash for Your Password

Choose a password (or use the default `admin123`), then generate its bcrypt hash.

### Option A: Use Online Tool (Fastest)

1. Go to: https://bcrypt.online/
2. Enter your password: `admin123`
3. Set rounds to: `10`
4. Click "Hash"
5. Copy the hash (looks like: `$2a$10$...`)

**Example output:**
```
$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36gBS8Xa
```

### Option B: Generate Locally (More Secure)

Run this command in your terminal:

```bash
node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('admin123', 10, (err, hash) => { if(err) console.error(err); else console.log(hash); });"
```

**Or use this shorter command:**
```bash
npm exec bcryptjs-cli -- hash "admin123"
```

---

## Step 2: Create Admin User in Supabase

### Method 1: Using Supabase SQL Editor (Recommended)

1. Go to: https://app.supabase.com/projects/adlqcdnpjaglfvleeykj/sql
   - Should auto-select the yannova project
   - Click "SQL Editor" in left menu

2. Click "New Query"

3. Paste this SQL (replace `$2a$10$...` with your bcrypt hash):

```sql
INSERT INTO "User" (
  id,
  email,
  password,
  name,
  role,
  active,
  "createdAt",
  "updatedAt"
) VALUES (
  'admin-' || gen_random_uuid()::text,
  'roustamyandiev00@gmail.com',
  '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36gBS8Xa',
  'Admin User',
  'super_admin',
  true,
  NOW(),
  NOW()
);
```

4. Click "Run" (or Cmd+Enter)

5. Should show: "1 row inserted successfully"

✓ **Admin user created!**

### Method 2: Using Supabase UI (If you prefer GUI)

1. Go to: https://app.supabase.com/projects/adlqcdnpjaglfvleeykj/editor/users
   - Click "Table Editor"
   - Click on "User" table

2. Click "Insert Row" (+ button)

3. Fill in:
   - **id:** (leave empty, auto-generated)
   - **email:** `roustamyandiev00@gmail.com`
   - **password:** (your bcrypt hash, see Step 1)
   - **name:** `Admin User`
   - **role:** `super_admin`
   - **active:** `true`
   - **lastLogin:** (leave empty)
   - **createdAt:** (auto-filled)
   - **updatedAt:** (auto-filled)

4. Click "Save"

✓ **Admin user created!**

---

## Step 3: Test Admin Login

1. Go to: https://www.yannova.be/auth/signin

2. Enter:
   - **Email:** `roustamyandiev00@gmail.com`
   - **Password:** (the password you hashed - default is `admin123`)

3. Click "Sign In"

4. Should redirect to: https://www.yannova.be/admin

✓ **Admin access verified!**

---

## If Login Fails

### Error: "Email not in whitelist"
**Cause:** Email is not in the ALLOWED_ADMIN_EMAILS list in `src/auth.ts`

**Solution:** Update `src/auth.ts` line 24-26 with your email:
```typescript
const ALLOWED_ADMIN_EMAILS = [
  'roustamyandiev00@gmail.com',
  'windowpro.be@gmail.com',
  'your-email@example.com'  // Add your email
];
```
Then rebuild and redeploy.

### Error: "User not found"
**Cause:** The user wasn't created in the database

**Solution:**
1. Go back to Step 2
2. Verify SQL ran successfully
3. Check that email matches exactly

### Error: "Invalid password"
**Cause:** Password hash is wrong or doesn't match

**Solution:**
1. Re-generate the bcrypt hash (Step 1)
2. Update the User record in Supabase with the new hash
3. Try logging in again

---

## Quick Reference: Admin Dashboard

**After login, access:**
- Admin dashboard: https://www.yannova.be/admin
- Projects: https://www.yannova.be/admin/projects
- Leads: https://www.yannova.be/admin/leads
- Settings: https://www.yannova.be/admin/settings

---

## Additional Admin Users

To create more admin users, repeat Steps 1-2 with different emails. Just update:

```sql
INSERT INTO "User" (...) VALUES (
  'admin-' || gen_random_uuid()::text,
  'another-email@example.com',  -- Change this
  '$2a$10$...',  -- Use their bcrypt hash
  'Another Admin',  -- Change name
  'super_admin',
  true,
  NOW(),
  NOW()
);
```

Make sure to add their email to the ALLOWED_ADMIN_EMAILS whitelist in `src/auth.ts`.

---

## Security Notes

✓ **Good security practices:**
- Whitelist emails in code (not allowing anyone)
- Use bcrypt hashing (not plaintext passwords)
- Role-based access ("super_admin" can do everything)
- Passwords stored in database, not in .env

⚠️ **Things to do:**
- Change `admin123` to a strong password
- Don't share the password via email
- Use the admin dashboard to rotate passwords monthly
- Keep Supabase credentials secret

---

## Troubleshooting Checklist

Before deployment, verify:

- [ ] Bcrypt hash generated (doesn't contain `/` at the start)
- [ ] SQL query runs without errors in Supabase
- [ ] User appears in "User" table with email
- [ ] User has "super_admin" role
- [ ] User "active" is set to true
- [ ] Can login at https://www.yannova.be/auth/signin
- [ ] Redirects to admin dashboard
- [ ] Email in ALLOWED_ADMIN_EMAILS whitelist

---

## Support

If you get stuck:
1. Check the SQL error message in Supabase
2. Verify email matches exactly (case-sensitive)
3. Ensure bcrypt hash starts with `$2a$10$`
4. Check that the User table exists: https://app.supabase.com/projects/adlqcdnpjaglfvleeykj/editor/users

---

**Estimated time to complete:** 5 minutes  
**Required before:** Site can be accessed at `/admin`

