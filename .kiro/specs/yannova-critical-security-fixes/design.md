# Yannova Critical Security Fixes - Bugfix Design

## Overview

This design addresses 6 critical security vulnerabilities in the Yannova renovation website that must be fixed before production deployment. The bugs expose production credentials in version control, prevent proper environment-specific configuration, use hardcoded values that break deployment flexibility, and lack proper input sanitization that could lead to XSS attacks.

The fix strategy follows a defense-in-depth approach:
1. Move all secrets to gitignored files and environment variables
2. Make all configuration environment-aware using NEXT_PUBLIC_SITE_URL
3. Replace hardcoded admin emails with database-driven role-based access control
4. Implement production-safe logging with conditional execution
5. Add comprehensive input sanitization using DOMPurify and Zod validation
6. Provide migration path for existing admin users

This ensures zero secrets in git history, proper multi-environment support, flexible admin management, clean production logs, and protection against XSS attacks.

## Glossary

- **Bug_Condition (C)**: The conditions that trigger each of the 6 security vulnerabilities
- **Property (P)**: The desired secure behavior after fixes are applied
- **Preservation**: Existing functionality that must remain unchanged (authentication flow, email sending, SEO generation, database operations)
- **Secrets Exposure**: Production credentials stored in tracked .env file that gets committed to git
- **Environment-Aware Configuration**: Configuration values that automatically adapt based on NODE_ENV and deployment context
- **Role-Based Access Control (RBAC)**: Using database User.role column instead of hardcoded email arrays
- **Input Sanitization**: Process of removing or escaping potentially malicious content from user input
- **DOMPurify**: Industry-standard library for sanitizing HTML to prevent XSS attacks
- **Logger Utility**: Centralized logging function that respects NODE_ENV to prevent console statements in production
- **.env.local**: Gitignored environment file for local development secrets (takes precedence over .env)
- **NEXT_PUBLIC_SITE_URL**: Environment variable for the site's base URL (e.g., https://www.yannova.be)
- **AUTH_URL**: NextAuth configuration for callback URLs (must match deployment environment)

## Bug Details

### Fault Condition

The security vulnerabilities manifest across 6 distinct conditions:

**1. Secrets Exposure Condition**
The bug manifests when the `.env` file contains production credentials and is tracked by git. The file exposes database passwords, SMTP credentials, API keys, and NextAuth secrets in plaintext that become permanently accessible in git history.

**Formal Specification:**
```
FUNCTION isSecretsExposureBug(file)
  INPUT: file of type EnvironmentFile
  OUTPUT: boolean
  
  RETURN file.path == ".env"
         AND file.isTrackedByGit == true
         AND (file.contains("DATABASE_URL") WITH productionPassword
              OR file.contains("SMTP_PASS") WITH productionPassword
              OR file.contains("GOOGLE_GENERATIVE_AI_API_KEY") WITH realApiKey
              OR file.contains("SUPABASE_SERVICE_ROLE_KEY") WITH realServiceKey
              OR file.contains("AUTH_SECRET") WITH realSecret)
END FUNCTION
```

**2. Environment Configuration Condition**
The bug manifests when `AUTH_URL` is hardcoded to `http://localhost:3000` in the `.env` file. When deployed to production (Vercel), NextAuth callbacks fail because they redirect to localhost instead of the production domain.

**Formal Specification:**
```
FUNCTION isAuthUrlBug(config, environment)
  INPUT: config of type EnvironmentConfig, environment of type DeploymentEnvironment
  OUTPUT: boolean
  
  RETURN config.AUTH_URL == "http://localhost:3000"
         AND environment.type == "production"
         AND environment.domain != "localhost:3000"
END FUNCTION
```

**3. Hardcoded URLs Condition**
The bug manifests when `src/lib/seo-helper.ts` uses hardcoded `https://www.yannova.be` URLs at lines 70, 85, and 100. When developers test with staging or preview URLs, SEO metadata incorrectly points to production domain.

**Formal Specification:**
```
FUNCTION isHardcodedUrlBug(seoHelper, environment)
  INPUT: seoHelper of type SourceFile, environment of type DeploymentEnvironment
  OUTPUT: boolean
  
  RETURN seoHelper.contains("https://www.yannova.be") == true
         AND seoHelper.usesHardcodedUrl(line IN [70, 85, 100]) == true
         AND environment.actualDomain != "https://www.yannova.be"
         AND seoMetadata.canonicalUrl != environment.actualDomain
END FUNCTION
```

**4. Hardcoded Admin Access Condition**
The bug manifests when `src/auth.ts` validates login against the hardcoded `ALLOWED_EMAILS` array containing 5 email addresses. When admin access needs to be granted or revoked, code changes and redeployment are required, despite the database having a `User.role` column.

**Formal Specification:**
```
FUNCTION isHardcodedAdminBug(authFile, database)
  INPUT: authFile of type SourceFile, database of type DatabaseSchema
  OUTPUT: boolean
  
  RETURN authFile.contains("ALLOWED_EMAILS") == true
         AND authFile.usesHardcodedArray() == true
         AND database.User.hasColumn("role") == true
         AND authFile.checksRole() == false
         AND adminAccessChange.requiresCodeDeployment == true
END FUNCTION
```

**5. Console Statements Condition**
The bug manifests when the application runs in production with 50+ console.log/error/warn statements executing across the codebase. In `src/auth.ts`, authentication failures log sensitive information like attempted login emails, creating performance overhead and exposing internal logic.

**Formal Specification:**
```
FUNCTION isConsoleStatementBug(codebase, environment)
  INPUT: codebase of type SourceFiles, environment of type DeploymentEnvironment
  OUTPUT: boolean
  
  RETURN environment.NODE_ENV == "production"
         AND codebase.countConsoleStatements() > 0
         AND (codebase.logsUserEmail() == true
              OR codebase.logsDatabaseErrors() == true
              OR codebase.logsInternalLogic() == true)
END FUNCTION
```

**6. Input Sanitization Condition**
The bug manifests when `src/app/api/contact/route.ts` receives user input and inserts it into email HTML using `${message.replace(/\n/g, "<br>")}` without sanitization. Malicious input like `<script>alert('xss')</script>` is included directly in the email HTML body.

**Formal Specification:**
```
FUNCTION isInputSanitizationBug(apiRoute, userInput)
  INPUT: apiRoute of type APIRoute, userInput of type UserSubmission
  OUTPUT: boolean
  
  RETURN apiRoute.receivesUserInput() == true
         AND apiRoute.insertsIntoHTML(userInput) == true
         AND apiRoute.sanitizesHTML(userInput) == false
         AND userInput.containsMaliciousContent() == true
         AND emailBody.includesUnsanitizedInput() == true
END FUNCTION
```

### Examples

**Bug 1: Secrets Exposure**
- Current: `.env` contains `DATABASE_URL="postgresql://postgres:WRmN3yerM_B8qjFq3z3i@..."` and is tracked by git
- Expected: `.env` contains `DATABASE_URL="postgresql://postgres:YOUR_PASSWORD_HERE@..."` with comment, real value in `.env.local`
- Impact: Production database password permanently exposed in git history

**Bug 2: AUTH_URL Configuration**
- Current: `.env` has `AUTH_URL=http://localhost:3000`, deployed to Vercel at `https://www.yannova.be`
- Expected: Production uses `AUTH_URL=https://www.yannova.be`, development uses `http://localhost:3000`
- Impact: NextAuth callbacks fail in production, users cannot log in

**Bug 3: Hardcoded URLs**
- Current: `seo-helper.ts` line 70: `canonical: 'https://www.yannova.be${path}'` when deployed to `https://staging.yannova.be`
- Expected: `canonical: '${process.env.NEXT_PUBLIC_SITE_URL}${path}'` adapts to deployment environment
- Impact: SEO metadata points to wrong domain in staging/preview deployments

**Bug 4: Hardcoded Admin Access**
- Current: `auth.ts` checks `ALLOWED_EMAILS.includes(email)`, database has `User.role = "admin"`
- Expected: `auth.ts` checks `user.role === "admin" || user.role === "super_admin"`
- Impact: Adding new admin requires code change and redeployment instead of database update

**Bug 5: Console Statements**
- Current: Production logs `console.log('Email not in allowed list:', email)` exposing attempted logins
- Expected: Development logs debug info, production uses structured logging or no logs
- Impact: Performance overhead, sensitive data exposure, internal logic revealed

**Bug 6: Input Sanitization**
- Current: Contact form accepts `<script>alert('xss')</script>` and inserts it as `${message.replace(/\n/g, "<br>")}`
- Expected: Input is sanitized with DOMPurify before insertion: `DOMPurify.sanitize(message)`
- Impact: XSS vulnerability in email HTML, potential script execution in email clients

## Expected Behavior

### Preservation Requirements

**Unchanged Behaviors:**
- Valid admin users must continue to authenticate successfully with correct credentials
- NextAuth session management must continue to maintain user sessions correctly
- Protected admin routes must continue to enforce authentication requirements
- Legitimate contact form submissions must continue to send emails successfully
- Email templates must continue to format correctly with proper line breaks
- SMTP configuration must continue to use Nodemailer to send emails
- Pages must continue to generate correct SEO metadata
- Database SEO overrides must continue to be prioritized over defaults
- Open Graph tags must continue to include all required properties
- Prisma queries must continue to interact with the database correctly
- User records must continue to return complete user objects
- Database connections must continue to use connection pooling correctly
- Development server (`npm run dev`) must continue to start successfully
- Environment variables must continue to be loaded from `.env.local` first, then `.env`
- TypeScript compilation must continue to type-check without errors
- API routes must continue to use correct HTTP status codes
- Validation failures must continue to return 400 Bad Request with error messages
- Server errors must continue to return 500 Internal Server Error responses

**Scope:**
All inputs and operations that do NOT involve the 6 specific bug conditions should be completely unaffected by these fixes. This includes:
- All existing authentication flows for valid users
- All database operations and queries
- All API routes not modified for sanitization
- All SEO metadata generation logic (only URL source changes)
- All email sending functionality (only sanitization added)
- All development workflows and build processes

## Hypothesized Root Cause

Based on the bug analysis, the root causes are:

1. **Secrets Management Oversight**: The project was initialized with production credentials directly in `.env` for quick setup, without following the Next.js best practice of using `.env.local` for secrets. The `.env` file was not added to `.gitignore`, causing it to be tracked and committed with real credentials.

2. **Single-Environment Configuration**: The `.env` file was configured only for local development (`AUTH_URL=http://localhost:3000`) without considering that production deployments need different values. No environment-specific configuration strategy was implemented.

3. **Development-First Hardcoding**: The `seo-helper.ts` was written with the production domain hardcoded for convenience during development, without abstracting it to an environment variable. This is a common pattern when developers focus on getting features working before considering deployment flexibility.

4. **Legacy Authentication Pattern**: The `ALLOWED_EMAILS` array was likely implemented as a quick authentication mechanism during initial development, before the database schema was finalized. Once the `User.role` column was added to the schema, the authentication code was never refactored to use it.

5. **Development Debugging Artifacts**: Console statements were added during development for debugging authentication flows and error tracking. These were never removed or made conditional before production deployment, as there was no logging strategy in place.

6. **Incomplete Input Validation**: The contact form API implements basic presence validation (`if (!name || !email || !message)`) but lacks security-focused sanitization. The developer may not have been aware of XSS risks in email HTML or assumed email clients would handle sanitization automatically.

## Correctness Properties

Property 1: Fault Condition - Secrets Protection

_For any_ environment file that contains credentials, the fixed system SHALL ensure that production secrets are stored only in gitignored files (`.env.local`) or environment variables, with the tracked `.env` file containing only placeholder values and documentation comments.

**Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5**

Property 2: Fault Condition - Environment-Aware AUTH_URL

_For any_ deployment environment (development, staging, production), the fixed system SHALL configure `AUTH_URL` to match the environment's actual domain, either by deriving it from `NEXT_PUBLIC_SITE_URL` or using environment-specific values.

**Validates: Requirements 2.6, 2.7, 2.8**

Property 3: Fault Condition - Dynamic URL Configuration

_For any_ SEO metadata generation, the fixed system SHALL use `process.env.NEXT_PUBLIC_SITE_URL` instead of hardcoded URLs for canonical and Open Graph URLs, with appropriate fallback to localhost in development.

**Validates: Requirements 2.9, 2.10, 2.11**

Property 4: Fault Condition - Database-Driven Admin Access

_For any_ user authentication attempt, the fixed system SHALL check the `User.role` column in the database instead of the hardcoded `ALLOWED_EMAILS` array, granting admin access when `role === "admin"` or `role === "super_admin"`.

**Validates: Requirements 2.12, 2.13, 2.14, 2.15, 2.16**

Property 5: Fault Condition - Production-Safe Logging

_For any_ logging statement in the codebase, the fixed system SHALL execute console statements only in development (`NODE_ENV !== "production"`), using a logger utility that respects environment configuration and logs securely without exposing sensitive data.

**Validates: Requirements 2.17, 2.18, 2.19, 2.20, 2.21**

Property 6: Fault Condition - Input Sanitization

_For any_ user input received by API routes (especially contact form), the fixed system SHALL sanitize HTML content using DOMPurify before processing, escaping or stripping all HTML tags and scripts to prevent XSS attacks.

**Validates: Requirements 2.22, 2.23, 2.24, 2.25, 2.26**

Property 7: Preservation - Existing Functionality

_For any_ operation that does NOT involve the 6 specific bug conditions, the fixed system SHALL produce exactly the same behavior as the original system, preserving all authentication flows, database operations, email functionality, SEO generation, and API responses.

**Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12, 3.13, 3.14, 3.15, 3.16, 3.17, 3.18**

## Fix Implementation

### Changes Required

Assuming our root cause analysis is correct, the following changes are needed:

#### Fix 1: Secrets Management

**Files to Modify:**
- `.env` - Replace all production secrets with placeholders
- Create `.env.local.example` - Document all required environment variables
- `.gitignore` - Ensure `.env.local` is ignored (should already be present in Next.js projects)

**Specific Changes:**

1. **Update `.env` to remove production secrets:**
   ```env
   # Email Configuration
   SMTP_HOST=mail.b.hostedemail.com
   SMTP_PORT=465
   SMTP_USER=info@yannova.be
   SMTP_PASS=YOUR_SMTP_PASSWORD_HERE  # Get from .env.local or Vercel env vars
   
   # NextAuth Configuration
   AUTH_SECRET=YOUR_AUTH_SECRET_HERE  # Generate with: openssl rand -base64 32
   AUTH_URL=http://localhost:3000  # Override in production with NEXT_PUBLIC_SITE_URL
   
   # Database - Supabase PostgreSQL
   DATABASE_URL="postgresql://postgres:YOUR_PASSWORD_HERE@db.nnlekbywldrainqhvgif.supabase.co:5432/postgres?schema=public"
   DIRECT_URL="postgresql://postgres:YOUR_PASSWORD_HERE@db.nnlekbywldrainqhvgif.supabase.co:5432/postgres?schema=public"
   
   # Google AI & Analytics
   NEXT_PUBLIC_GA_ID=G-1RS27QF82W
   GOOGLE_GENERATIVE_AI_API_KEY=YOUR_GOOGLE_AI_API_KEY_HERE
   
   # Supabase (optional - for file storage)
   NEXT_PUBLIC_SUPABASE_URL=https://nnlekbywldrainqhvgif.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY_HERE
   SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY_HERE
   
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000  # Override in production: https://www.yannova.be
   ```

2. **Create `.env.local.example` with documentation:**
   ```env
   # Copy this file to .env.local and fill in the real values
   # .env.local is gitignored and will not be committed
   
   # Email Configuration
   SMTP_HOST=mail.b.hostedemail.com
   SMTP_PORT=465
   SMTP_USER=info@yannova.be
   SMTP_PASS=<get from hosting provider>
   
   # NextAuth Configuration
   AUTH_SECRET=<generate with: openssl rand -base64 32>
   
   # Database - Supabase PostgreSQL
   DATABASE_URL="postgresql://postgres:<PASSWORD>@db.nnlekbywldrainqhvgif.supabase.co:5432/postgres?schema=public"
   DIRECT_URL="postgresql://postgres:<PASSWORD>@db.nnlekbywldrainqhvgif.supabase.co:5432/postgres?schema=public"
   
   # Google AI API Key
   GOOGLE_GENERATIVE_AI_API_KEY=<get from Google Cloud Console>
   
   # Supabase Keys
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<get from Supabase dashboard>
   SUPABASE_SERVICE_ROLE_KEY=<get from Supabase dashboard>
   
   # Production Site URL (for Vercel deployment)
   NEXT_PUBLIC_SITE_URL=https://www.yannova.be
   ```

3. **Verify `.gitignore` includes `.env.local`:**
   - Next.js projects should already have this, but verify the line exists
   - If not present, add: `.env*.local`

#### Fix 2: Environment-Aware AUTH_URL

**Files to Modify:**
- `.env` - Update AUTH_URL configuration
- `src/auth.config.ts` or `src/auth.ts` - Make AUTH_URL environment-aware (if needed)

**Specific Changes:**

1. **Update `.env` with environment-aware configuration:**
   ```env
   # NextAuth Configuration
   AUTH_SECRET=YOUR_AUTH_SECRET_HERE
   # AUTH_URL is automatically derived from NEXT_PUBLIC_SITE_URL in production
   # For local development, it defaults to http://localhost:3000
   ```

2. **Ensure NextAuth uses environment-aware URL:**
   - NextAuth automatically uses `NEXTAUTH_URL` or derives from `VERCEL_URL` in production
   - If explicit configuration is needed, use: `AUTH_URL=${NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}`
   - Vercel automatically sets `VERCEL_URL` which NextAuth can use

3. **Production environment variables (set in Vercel dashboard):**
   ```env
   NEXT_PUBLIC_SITE_URL=https://www.yannova.be
   AUTH_URL=https://www.yannova.be
   ```

#### Fix 3: Dynamic URL Configuration in SEO Helper

**File to Modify:**
- `src/lib/seo-helper.ts`

**Specific Changes:**

1. **Add environment-aware base URL helper at the top of the file:**
   ```typescript
   // Get the base URL for the site, environment-aware
   const getBaseUrl = (): string => {
     // In production, use NEXT_PUBLIC_SITE_URL
     if (process.env.NEXT_PUBLIC_SITE_URL) {
       return process.env.NEXT_PUBLIC_SITE_URL;
     }
     
     // In Vercel preview deployments, use VERCEL_URL
     if (process.env.VERCEL_URL) {
       return `https://${process.env.VERCEL_URL}`;
     }
     
     // Fallback to localhost for local development
     return 'http://localhost:3000';
   };
   ```

2. **Replace hardcoded URLs at line 70 (canonical URL in default case):**
   ```typescript
   // OLD:
   canonical: `https://www.yannova.be${path}`,
   
   // NEW:
   canonical: `${getBaseUrl()}${path}`,
   ```

3. **Replace hardcoded URLs at line 85 (Open Graph URL in default case):**
   ```typescript
   // OLD:
   url: `https://www.yannova.be${path}`,
   
   // NEW:
   url: `${getBaseUrl()}${path}`,
   ```

4. **Replace hardcoded URLs at line 100 (canonical URL in database case):**
   ```typescript
   // OLD:
   canonical: seoPage.canonicalUrl || `https://www.yannova.be${path}`,
   
   // NEW:
   canonical: seoPage.canonicalUrl || `${getBaseUrl()}${path}`,
   ```

5. **Replace hardcoded URL in Open Graph section (around line 105):**
   ```typescript
   // OLD:
   url: `https://www.yannova.be${path}`,
   
   // NEW:
   url: `${getBaseUrl()}${path}`,
   ```

#### Fix 4: Database-Driven Admin Access Control

**File to Modify:**
- `src/auth.ts`

**Specific Changes:**

1. **Remove the hardcoded ALLOWED_EMAILS array:**
   ```typescript
   // DELETE THIS:
   const ALLOWED_EMAILS = [
     'roustamyandiev00@gmail.com',
     'info@yannova.be',
     'windowpro.be@gmail.com',
     'innovar.labs7@gmail.com',
     'admin@yannova.be',
   ];
   ```

2. **Update the authorize function to check database role:**
   ```typescript
   // OLD:
   if (!ALLOWED_EMAILS.includes(email)) {
     console.log('Email not in allowed list:', email);
     return null;
   }
   
   const user = await getUser(email);
   if (!user) return null;
   
   // NEW:
   const user = await getUser(email);
   if (!user) return null;
   
   // Check if user has admin or super_admin role
   if (user.role !== 'admin' && user.role !== 'super_admin') {
     return null;
   }
   ```

3. **Remove console.log statements (covered in Fix 5):**
   ```typescript
   // DELETE:
   console.log('Email not in allowed list:', email);
   console.log('Invalid credentials');
   ```

**Migration Plan for Existing Admin Users:**

The 5 emails currently in `ALLOWED_EMAILS` need to be updated in the database:

```sql
-- Update existing admin users to have admin role
UPDATE "User" 
SET role = 'admin' 
WHERE email IN (
  'roustamyandiev00@gmail.com',
  'info@yannova.be',
  'windowpro.be@gmail.com',
  'innovar.labs7@gmail.com',
  'admin@yannova.be'
);
```

This migration should be run BEFORE deploying the code changes to ensure no admin users lose access.

**Future Admin Management:**

To add a new admin user:
```sql
-- Grant admin access
UPDATE "User" SET role = 'admin' WHERE email = 'newadmin@example.com';
```

To revoke admin access:
```sql
-- Revoke admin access
UPDATE "User" SET role = 'user' WHERE email = 'oldadmin@example.com';
```

#### Fix 5: Production-Safe Logging

**Files to Create:**
- `src/lib/logger.ts` - Centralized logging utility

**Files to Modify:**
- `src/auth.ts` - Replace console statements with logger
- `src/lib/seo-helper.ts` - Replace console.error with logger
- `src/app/api/contact/route.ts` - Replace console statements with logger
- Any other files with console statements (to be identified during implementation)

**Specific Changes:**

1. **Create `src/lib/logger.ts` utility:**
   ```typescript
   type LogLevel = 'debug' | 'info' | 'warn' | 'error';
   
   class Logger {
     private isDevelopment = process.env.NODE_ENV !== 'production';
   
     debug(message: string, ...args: any[]): void {
       if (this.isDevelopment) {
         console.log(`[DEBUG] ${message}`, ...args);
       }
     }
   
     info(message: string, ...args: any[]): void {
       if (this.isDevelopment) {
         console.info(`[INFO] ${message}`, ...args);
       }
     }
   
     warn(message: string, ...args: any[]): void {
       if (this.isDevelopment) {
         console.warn(`[WARN] ${message}`, ...args);
       }
     }
   
     error(message: string, error?: any): void {
       // Always log errors, but sanitize in production
       if (this.isDevelopment) {
         console.error(`[ERROR] ${message}`, error);
       } else {
         // In production, log only the message without sensitive details
         console.error(`[ERROR] ${message}`);
         // In a real production app, send to error tracking service (Sentry, etc.)
       }
     }
   }
   
   export const logger = new Logger();
   ```

2. **Update `src/auth.ts` to use logger:**
   ```typescript
   // Add import at top:
   import { logger } from '@/lib/logger';
   
   // Replace console.log statements:
   // OLD:
   console.log('Email not in allowed list:', email);
   // NEW:
   logger.debug('User role check failed', { email });
   
   // OLD:
   console.log('Invalid credentials');
   // NEW:
   logger.debug('Invalid credentials provided');
   
   // OLD:
   console.error('Failed to fetch user:', error);
   // NEW:
   logger.error('Failed to fetch user', error);
   ```

3. **Update `src/lib/seo-helper.ts` to use logger:**
   ```typescript
   // Add import at top:
   import { logger } from '@/lib/logger';
   
   // Replace console.error:
   // OLD:
   console.error('Error fetching SEO metadata:', error);
   // NEW:
   logger.error('Error fetching SEO metadata', error);
   ```

4. **Update `src/app/api/contact/route.ts` to use logger:**
   ```typescript
   // Add import at top:
   import { logger } from '@/lib/logger';
   
   // Replace console.log:
   // OLD:
   console.log("Simulating email send:", mailOptions);
   // NEW:
   logger.debug("Simulating email send", { to: mailOptions.to, subject: mailOptions.subject });
   
   // Replace console.error:
   // OLD:
   console.error("Error sending email:", error);
   // NEW:
   logger.error("Error sending email", error);
   ```

#### Fix 6: Input Sanitization

**Dependencies to Install:**
```bash
npm install isomorphic-dompurify
npm install --save-dev @types/dompurify
```

**Files to Create:**
- `src/lib/sanitize.ts` - Input sanitization utilities

**Files to Modify:**
- `src/app/api/contact/route.ts` - Add sanitization to contact form

**Specific Changes:**

1. **Create `src/lib/sanitize.ts` utility:**
   ```typescript
   import DOMPurify from 'isomorphic-dompurify';
   
   /**
    * Sanitize HTML content to prevent XSS attacks
    * Strips all HTML tags and scripts
    */
   export function sanitizeHtml(dirty: string): string {
     return DOMPurify.sanitize(dirty, {
       ALLOWED_TAGS: [], // Strip all HTML tags
       ALLOWED_ATTR: [], // Strip all attributes
     });
   }
   
   /**
    * Sanitize HTML but allow safe formatting tags
    * Useful for email content where basic formatting is desired
    */
   export function sanitizeHtmlWithFormatting(dirty: string): string {
     return DOMPurify.sanitize(dirty, {
       ALLOWED_TAGS: ['br', 'p', 'strong', 'em'], // Allow basic formatting
       ALLOWED_ATTR: [], // No attributes allowed
     });
   }
   
   /**
    * Escape HTML entities for safe display
    * Alternative to DOMPurify for simple text
    */
   export function escapeHtml(text: string): string {
     const map: Record<string, string> = {
       '&': '&amp;',
       '<': '&lt;',
       '>': '&gt;',
       '"': '&quot;',
       "'": '&#039;',
     };
     return text.replace(/[&<>"']/g, (char) => map[char]);
   }
   ```

2. **Update `src/app/api/contact/route.ts` to sanitize input:**
   ```typescript
   // Add imports at top:
   import { sanitizeHtml, escapeHtml } from '@/lib/sanitize';
   import { z } from 'zod';
   
   // Add Zod schema for validation:
   const contactSchema = z.object({
     name: z.string().min(1).max(100),
     email: z.string().email().max(255),
     phone: z.string().max(20).optional(),
     message: z.string().min(1).max(5000),
   });
   
   // In POST function, replace validation:
   // OLD:
   if (!name || !email || !message) {
     return NextResponse.json(
       { error: "Naam, email en bericht zijn verplicht." },
       { status: 400 }
     );
   }
   
   // NEW:
   const validation = contactSchema.safeParse(body);
   if (!validation.success) {
     return NextResponse.json(
       { error: "Ongeldige invoer. Controleer alle velden." },
       { status: 400 }
     );
   }
   
   const { name, email, phone, message } = validation.data;
   
   // Sanitize all user inputs
   const sanitizedName = sanitizeHtml(name);
   const sanitizedEmail = sanitizeHtml(email);
   const sanitizedPhone = phone ? sanitizeHtml(phone) : undefined;
   const sanitizedMessage = sanitizeHtml(message);
   ```

3. **Update email content to use sanitized values:**
   ```typescript
   // Update mailOptions to use sanitized values:
   const mailOptions = {
     from: `"${sanitizedName}" <${sanitizedEmail}>`,
     to: process.env.CONTACT_EMAIL || "info@yannova.be",
     subject: `Nieuw bericht van ${sanitizedName} via Yannova Website`,
     text: `Naam: ${sanitizedName}\nEmail: ${sanitizedEmail}\nTelefoon: ${sanitizedPhone || "Niet opgegeven"}\n\nBericht:\n${sanitizedMessage}`,
     html: `
       <h3>Nieuw contactformulier bericht</h3>
       <p><strong>Naam:</strong> ${escapeHtml(sanitizedName)}</p>
       <p><strong>Email:</strong> ${escapeHtml(sanitizedEmail)}</p>
       <p><strong>Telefoon:</strong> ${escapeHtml(sanitizedPhone || "Niet opgegeven")}</p>
       <br/>
       <p><strong>Bericht:</strong></p>
       <p>${escapeHtml(sanitizedMessage).replace(/\n/g, "<br>")}</p>
     `,
   };
   ```

**Sanitization Strategy:**
- Use `sanitizeHtml()` to strip all HTML from user input first
- Then use `escapeHtml()` when inserting into HTML templates
- This double-layer approach ensures maximum protection
- For the message field, preserve line breaks by converting `\n` to `<br>` AFTER escaping

## Testing Strategy

### Validation Approach

The testing strategy follows a two-phase approach: first, demonstrate each bug on the unfixed code to confirm the vulnerabilities exist, then verify all fixes work correctly while preserving existing functionality. Each of the 6 bugs requires different testing approaches based on their nature.

### Exploratory Fault Condition Checking

**Goal**: Demonstrate each of the 6 bugs BEFORE implementing fixes to confirm the vulnerabilities and understand their impact.

**Test Plan**: Create tests that expose each vulnerability on the UNFIXED code, then verify the same tests pass after fixes are applied.

**Test Cases:**

1. **Secrets Exposure Test** (Manual verification - will fail on unfixed code)
   - Check if `.env` file is tracked by git: `git ls-files .env`
   - Search for production passwords in `.env`: grep for `WRmN3yerM_B8qjFq3z3i`
   - Verify secrets are in git history: `git log -p -- .env`
   - Expected: Secrets found in tracked file and git history

2. **AUTH_URL Configuration Test** (Integration test - will fail on unfixed code)
   - Deploy to Vercel staging environment
   - Attempt to log in with valid admin credentials
   - Observe NextAuth callback URL in browser network tab
   - Expected: Callback redirects to `http://localhost:3000` instead of staging URL, causing authentication failure

3. **Hardcoded URLs Test** (Unit test - will fail on unfixed code)
   - Set `NEXT_PUBLIC_SITE_URL=https://staging.yannova.be`
   - Call `getSeoMetadata('/')` and inspect canonical URL
   - Expected: Returns `https://www.yannova.be/` instead of `https://staging.yannova.be/`

4. **Hardcoded Admin Access Test** (Unit test - will fail on unfixed code)
   - Create test user with `email='test@example.com'` and `role='admin'` in database
   - Attempt to authenticate with this user
   - Expected: Authentication fails because email is not in `ALLOWED_EMAILS` array

5. **Console Statements Test** (Manual verification - will fail on unfixed code)
   - Set `NODE_ENV=production`
   - Attempt to log in with invalid email
   - Check console output
   - Expected: Console logs `'Email not in allowed list: [email]'` exposing attempted login

6. **Input Sanitization Test** (Unit test - will fail on unfixed code)
   - Submit contact form with `message='<script>alert("xss")</script>'`
   - Inspect generated email HTML body
   - Expected: Email contains unsanitized `<script>` tag that could execute in email clients

**Expected Counterexamples:**
- Secrets permanently exposed in git history
- Production authentication fails due to localhost callback URL
- SEO metadata points to wrong domain in non-production environments
- Admin users with correct database role cannot log in
- Sensitive information logged to console in production
- XSS payloads included in email HTML without sanitization

### Fix Checking

**Goal**: Verify that for all inputs where each bug condition holds, the fixed system produces the expected secure behavior.

**Pseudocode:**
```
FOR ALL bug IN [secrets, auth_url, hardcoded_urls, admin_access, console_logs, input_sanitization] DO
  FOR ALL input WHERE isBugCondition(bug, input) DO
    result := fixedSystem(input)
    ASSERT expectedSecureBehavior(bug, result)
  END FOR
END FOR
```

**Test Cases:**

1. **Secrets Protection Verification:**
   - Verify `.env` contains only placeholders: `grep -v "YOUR_.*_HERE" .env` returns no secrets
   - Verify `.env.local.example` exists and documents all variables
   - Verify `.env.local` is in `.gitignore`
   - Verify production secrets work from Vercel environment variables

2. **AUTH_URL Environment Awareness:**
   - Test in development: `AUTH_URL` should be `http://localhost:3000`
   - Test in Vercel production: `AUTH_URL` should be `https://www.yannova.be`
   - Test in Vercel preview: `AUTH_URL` should match preview URL
   - Verify NextAuth callbacks work in all environments

3. **Dynamic URL Configuration:**
   - Set `NEXT_PUBLIC_SITE_URL=https://staging.yannova.be`
   - Call `getSeoMetadata('/')` and verify canonical is `https://staging.yannova.be/`
   - Unset `NEXT_PUBLIC_SITE_URL` in development
   - Verify fallback to `http://localhost:3000`

4. **Database-Driven Admin Access:**
   - Create user with `role='admin'`, verify authentication succeeds
   - Create user with `role='super_admin'`, verify authentication succeeds
   - Create user with `role='user'`, verify authentication fails
   - Update existing admin user role to `'user'`, verify access revoked
   - Verify all 5 original admin emails still work after migration

5. **Production-Safe Logging:**
   - Set `NODE_ENV=production`
   - Trigger authentication failure
   - Verify no console output appears
   - Set `NODE_ENV=development`
   - Verify debug logs appear with appropriate context

6. **Input Sanitization:**
   - Submit `<script>alert('xss')</script>` in contact form
   - Verify email HTML contains escaped text, not script tag
   - Submit `<img src=x onerror=alert(1)>` in contact form
   - Verify malicious HTML is stripped or escaped
   - Submit legitimate message with line breaks
   - Verify line breaks are preserved as `<br>` tags

### Preservation Checking

**Goal**: Verify that for all operations where the bug conditions do NOT hold, the fixed system produces the same result as the original system.

**Pseudocode:**
```
FOR ALL operation WHERE NOT isBugCondition(operation) DO
  ASSERT fixedSystem(operation) = originalSystem(operation)
END FOR
```

**Testing Approach**: Property-based testing is recommended for preservation checking because:
- It generates many test cases automatically across the input domain
- It catches edge cases that manual unit tests might miss
- It provides strong guarantees that behavior is unchanged for all non-buggy inputs
- It's especially valuable for authentication flows, database operations, and API responses

**Test Plan**: Document current behavior on UNFIXED code first, then write tests to verify this behavior continues after fixes.

**Test Cases:**

1. **Authentication Flow Preservation:**
   - Observe: Valid admin users with correct credentials can log in successfully
   - Test: After fix, verify same users still authenticate with same credentials
   - Observe: Invalid credentials are rejected with appropriate error
   - Test: After fix, verify invalid credentials still rejected
   - Observe: Session management maintains user state across requests
   - Test: After fix, verify sessions still work identically

2. **Email Functionality Preservation:**
   - Observe: Legitimate contact form submissions send emails successfully
   - Test: After fix, verify emails still sent with same SMTP configuration
   - Observe: Email templates format correctly with line breaks
   - Test: After fix, verify legitimate line breaks still converted to `<br>`
   - Observe: Email subject and headers are correctly formatted
   - Test: After fix, verify email structure unchanged

3. **SEO Metadata Preservation:**
   - Observe: Pages generate correct title, description, keywords
   - Test: After fix, verify same metadata generated (only URL source changes)
   - Observe: Database SEO overrides take precedence over defaults
   - Test: After fix, verify override logic still works
   - Observe: Open Graph tags include all required properties
   - Test: After fix, verify OG tags structure unchanged

4. **Database Operations Preservation:**
   - Observe: Prisma queries fetch user records correctly
   - Test: After fix, verify same queries return same data
   - Observe: User records include all fields (id, email, name, role, etc.)
   - Test: After fix, verify complete user objects still returned
   - Observe: Database connections use connection pooling
   - Test: After fix, verify connection behavior unchanged

5. **Development Workflow Preservation:**
   - Observe: `npm run dev` starts development server successfully
   - Test: After fix, verify dev server still starts
   - Observe: Environment variables load from `.env.local` first, then `.env`
   - Test: After fix, verify load order unchanged
   - Observe: TypeScript compilation succeeds without errors
   - Test: After fix, verify no new type errors introduced

6. **API Response Preservation:**
   - Observe: Validation failures return 400 with error messages
   - Test: After fix, verify same status codes and error format
   - Observe: Server errors return 500 responses
   - Test: After fix, verify error handling unchanged
   - Observe: Successful requests return 200 with expected data
   - Test: After fix, verify success responses unchanged

### Unit Tests

**Secrets Management:**
- Test that `.env` file contains no production passwords (regex pattern matching)
- Test that `.env.local.example` exists and documents all required variables
- Test that application loads environment variables correctly from `.env.local`

**Environment Configuration:**
- Test `getBaseUrl()` returns correct URL based on environment variables
- Test `getBaseUrl()` falls back to localhost when no env vars set
- Test `getBaseUrl()` uses `VERCEL_URL` in preview deployments

**Admin Access Control:**
- Test user with `role='admin'` passes authorization
- Test user with `role='super_admin'` passes authorization
- Test user with `role='user'` fails authorization
- Test user with `role='editor'` fails authorization (if not admin)
- Test non-existent user returns null

**Logger Utility:**
- Test logger.debug() outputs in development, silent in production
- Test logger.info() outputs in development, silent in production
- Test logger.error() outputs in both environments (sanitized in production)
- Test logger respects `NODE_ENV` environment variable

**Input Sanitization:**
- Test `sanitizeHtml()` strips all HTML tags
- Test `sanitizeHtml()` removes script tags
- Test `escapeHtml()` escapes special characters (&, <, >, ", ')
- Test sanitization preserves legitimate text content
- Test Zod schema validates email format
- Test Zod schema enforces max length constraints

### Property-Based Tests

**SEO Metadata Generation:**
- Generate random paths and verify canonical URLs use `getBaseUrl()`
- Generate random `NEXT_PUBLIC_SITE_URL` values and verify they're used correctly
- Verify no hardcoded `https://www.yannova.be` remains in output

**Authentication Preservation:**
- Generate random valid user credentials and verify authentication behavior unchanged
- Generate random invalid credentials and verify rejection behavior unchanged
- Verify session management works across many random scenarios

**Input Sanitization Coverage:**
- Generate random XSS payloads and verify all are sanitized
- Generate random legitimate messages and verify they're preserved correctly
- Generate random HTML injection attempts and verify they're neutralized

### Integration Tests

**Full Authentication Flow:**
- Test complete login flow from form submission to session creation
- Test admin access to protected routes after authentication
- Test logout flow and session cleanup

**Contact Form End-to-End:**
- Test legitimate contact form submission sends email successfully
- Test malicious input is sanitized before email generation
- Test validation errors return appropriate error messages

**Multi-Environment Deployment:**
- Test application works correctly in local development
- Test application works correctly in Vercel preview deployment
- Test application works correctly in production deployment
- Verify SEO metadata, authentication, and all features work in each environment

**Admin Migration:**
- Test all 5 original admin users can still log in after role-based migration
- Test new admin users can be added via database update
- Test admin access can be revoked via database update without code changes
