# Implementation Plan

## Phase 1: Exploration Tests (BEFORE Implementation)

### 1. Secrets Exposure Exploration

- [ ] 1.1 Write bug condition exploration test for secrets in .env
  - **Property 1: Fault Condition** - Secrets Exposed in Tracked Files
  - **CRITICAL**: This test MUST FAIL on unfixed code - failure confirms the bug exists
  - **DO NOT attempt to fix the test or the code when it fails**
  - **NOTE**: This test encodes the expected behavior - it will validate the fix when it passes after implementation
  - **GOAL**: Surface counterexamples that demonstrate secrets are exposed in tracked files
  - **Scoped PBT Approach**: Check that .env file contains placeholder values only, not real credentials
  - Test that .env file does NOT contain production database password `WRmN3yerM_B8qjFq3z3i`
  - Test that .env file does NOT contain SMTP password in plaintext
  - Test that .env file does NOT contain Google AI API key `AIzaSyDwQoafHHw0rhkZiL-r6c6B-oocdWMwBXA`
  - Test that .env file does NOT contain Supabase service role key
  - Test that .env file does NOT contain NextAuth secret `7pSeJLMcZmKwfTR2Md5eaZUOme5zJ5Sn5ECFgpSUJwQ=`
  - Test that .env.local.example exists with documentation
  - Run test on UNFIXED code
  - **EXPECTED OUTCOME**: Test FAILS (this is correct - it proves secrets are exposed)
  - Document counterexamples found to understand root cause
  - Mark task complete when test is written, run, and failure is documented
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6_

- [ ] 1.2 Write bug condition exploration test for hardcoded AUTH_URL
  - **Property 1: Fault Condition** - Hardcoded Localhost AUTH_URL
  - **CRITICAL**: This test MUST FAIL on unfixed code - failure confirms the bug exists
  - **DO NOT attempt to fix the test or the code when it fails**
  - **GOAL**: Confirm AUTH_URL is hardcoded to localhost
  - Test that .env contains `AUTH_URL=http://localhost:3000`
  - Test that AUTH_URL is not environment-aware
  - Run test on UNFIXED code
  - **EXPECTED OUTCOME**: Test FAILS (confirms hardcoded localhost URL)
  - Document counterexamples found
  - Mark task complete when test is written, run, and failure is documented
  - _Requirements: 2.1, 2.2, 2.3_

- [ ] 1.3 Write bug condition exploration test for hardcoded URLs in seo-helper.ts
  - **Property 1: Fault Condition** - Hardcoded Production URLs
  - **CRITICAL**: This test MUST FAIL on unfixed code - failure confirms the bug exists
  - **DO NOT attempt to fix the test or the code when it fails**
  - **GOAL**: Confirm URLs are hardcoded in SEO helper
  - Test that src/lib/seo-helper.ts contains hardcoded `https://www.yannova.be` at line 70
  - Test that src/lib/seo-helper.ts contains hardcoded `https://www.yannova.be` at line 85
  - Test that src/lib/seo-helper.ts contains hardcoded `https://www.yannova.be` at line 100
  - Run test on UNFIXED code
  - **EXPECTED OUTCOME**: Test FAILS (confirms hardcoded URLs exist)
  - Document counterexamples found
  - Mark task complete when test is written, run, and failure is documented
  - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [ ] 1.4 Write bug condition exploration test for hardcoded admin emails
  - **Property 1: Fault Condition** - Hardcoded ALLOWED_EMAILS Array
  - **CRITICAL**: This test MUST FAIL on unfixed code - failure confirms the bug exists
  - **DO NOT attempt to fix the test or the code when it fails**
  - **GOAL**: Confirm admin access uses hardcoded email array
  - Test that src/auth.ts contains `ALLOWED_EMAILS` array with 5 hardcoded emails
  - Test that authentication logic checks against hardcoded array instead of database role
  - Test that User.role column is ignored in authentication
  - Run test on UNFIXED code
  - **EXPECTED OUTCOME**: Test FAILS (confirms hardcoded admin access)
  - Document counterexamples found
  - Mark task complete when test is written, run, and failure is documented
  - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [ ] 1.5 Write bug condition exploration test for console statements in production
  - **Property 1: Fault Condition** - Console Statements in Production Code
  - **CRITICAL**: This test MUST FAIL on unfixed code - failure confirms the bug exists
  - **DO NOT attempt to fix the test or the code when it fails**
  - **GOAL**: Confirm console statements exist in production code
  - Test that src/auth.ts contains `console.log('Email not in allowed list:', email)`
  - Test that src/auth.ts contains `console.log('Invalid credentials')`
  - Test that src/auth.ts contains `console.error('Failed to fetch user:', error)`
  - Test that codebase contains 50+ console.log/error/warn statements
  - Run test on UNFIXED code
  - **EXPECTED OUTCOME**: Test FAILS (confirms console statements exist)
  - Document counterexamples found
  - Mark task complete when test is written, run, and failure is documented
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ] 1.6 Write bug condition exploration test for missing input sanitization
  - **Property 1: Fault Condition** - No HTML Sanitization in Contact API
  - **CRITICAL**: This test MUST FAIL on unfixed code - failure confirms the bug exists
  - **DO NOT attempt to fix the test or the code when it fails**
  - **GOAL**: Confirm input sanitization is missing
  - Test that src/app/api/contact/route.ts does not sanitize HTML in user input
  - Test that malicious input `<script>alert('xss')</script>` is not sanitized
  - Test that message.replace(/\n/g, "<br>") inserts unsanitized HTML
  - Test that no DOMPurify or similar sanitization library is used
  - Run test on UNFIXED code
  - **EXPECTED OUTCOME**: Test FAILS (confirms missing sanitization)
  - Document counterexamples found
  - Mark task complete when test is written, run, and failure is documented
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

## Phase 2: Preservation Tests (BEFORE Implementation)

- [ ] 2. Write preservation property tests (BEFORE implementing fixes)
  - **Property 2: Preservation** - Existing Functionality Preserved
  - **IMPORTANT**: Follow observation-first methodology
  - Observe behavior on UNFIXED code for non-buggy functionality
  - Write property-based tests capturing observed behavior patterns from Preservation Requirements
  - Property-based testing generates many test cases for stronger guarantees
  - Run tests on UNFIXED code
  - **EXPECTED OUTCOME**: Tests PASS (this confirms baseline behavior to preserve)
  - Mark task complete when tests are written, run, and passing on unfixed code
  
  - [ ] 2.1 Test authentication flow preservation
    - Observe: Valid admin users can log in with correct credentials
    - Observe: NextAuth session management maintains user sessions
    - Observe: Protected admin routes enforce authentication
    - Write property test: for all valid admin credentials, authentication succeeds
    - Verify test passes on UNFIXED code
    - _Requirements: 3.1, 3.2, 3.3_
  
  - [ ] 2.2 Test email functionality preservation
    - Observe: Legitimate contact form submissions send emails successfully
    - Observe: Email templates render with proper line breaks
    - Observe: SMTP configuration works with Nodemailer
    - Write property test: for all valid contact form inputs, emails are sent
    - Verify test passes on UNFIXED code
    - _Requirements: 3.4, 3.5, 3.6_
  
  - [ ] 2.3 Test SEO metadata preservation
    - Observe: Pages generate correct SEO metadata
    - Observe: Database SEO overrides are prioritized
    - Observe: Open Graph tags include all required properties
    - Write property test: for all pages, SEO metadata is generated correctly
    - Verify test passes on UNFIXED code
    - _Requirements: 3.7, 3.8, 3.9_
  
  - [ ] 2.4 Test database operations preservation
    - Observe: Prisma queries interact with database correctly
    - Observe: User records return complete user objects
    - Observe: Database connections use connection pooling
    - Write property test: for all database queries, operations complete successfully
    - Verify test passes on UNFIXED code
    - _Requirements: 3.10, 3.11, 3.12_
  
  - [ ] 2.5 Test development workflow preservation
    - Observe: npm run dev starts development server successfully
    - Observe: Environment variables load from .env.local first, then .env
    - Observe: TypeScript compilation type-checks without errors
    - Write property test: development commands execute successfully
    - Verify test passes on UNFIXED code
    - _Requirements: 3.13, 3.14, 3.15_
  
  - [ ] 2.6 Test API routes preservation
    - Observe: API routes return correct HTTP status codes
    - Observe: Validation failures return 400 Bad Request
    - Observe: Server errors return 500 Internal Server Error
    - Write property test: for all API routes, responses use correct status codes
    - Verify test passes on UNFIXED code
    - _Requirements: 3.16, 3.17, 3.18_

## Phase 3: Implementation

### 3. Fix #1: Secrets Management - Move credentials from .env to .env.local

- [x] 3.1 Create .env.local.example with documentation
  - Create .env.local.example file with all required environment variables
  - Add clear comments explaining where to find real values
  - Include placeholders for DATABASE_URL, SMTP credentials, API keys, NextAuth secret
  - Document that developers should copy to .env.local and fill in real values
  - _Bug_Condition: .env file contains production secrets in tracked files_
  - _Expected_Behavior: .env contains only placeholders, real secrets in .env.local (gitignored)_
  - _Preservation: Existing authentication, email, and database functionality must continue working_
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5_

- [x] 3.2 Replace production secrets in .env with placeholders
  - Replace DATABASE_URL with placeholder and comment
  - Replace SMTP_PASSWORD with placeholder and comment
  - Replace GOOGLE_AI_API_KEY with placeholder and comment
  - Replace SUPABASE_SERVICE_ROLE_KEY with placeholder and comment
  - Replace AUTH_SECRET with placeholder and comment
  - Add comments directing developers to .env.local.example
  - _Bug_Condition: .env file contains production secrets_
  - _Expected_Behavior: .env contains only placeholders_
  - _Preservation: Environment variable loading order (.env.local first) must be preserved_
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2_

- [x] 3.3 Verify .gitignore excludes .env.local
  - Check that .gitignore contains .env.local entry
  - Add .env.local to .gitignore if not present
  - Verify .env.local.example is NOT in .gitignore (should be tracked)
  - _Bug_Condition: Production secrets could be committed to git_
  - _Expected_Behavior: .env.local is gitignored, secrets never committed_
  - _Preservation: Existing .gitignore patterns must be preserved_
  - _Requirements: 1.6, 2.5_

- [ ] 3.4 Verify secrets management exploration test now passes
  - **Property 1: Expected Behavior** - Secrets Protected from Git
  - **IMPORTANT**: Re-run the SAME test from task 1.1 - do NOT write a new test
  - Run secrets exposure exploration test from step 1.1
  - **EXPECTED OUTCOME**: Test PASSES (confirms secrets are protected)
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

### 4. Fix #2: Environment-Aware AUTH_URL - Dynamic configuration

- [ ] 4.1 Update .env to use dynamic AUTH_URL
  - Change AUTH_URL to use NEXT_PUBLIC_SITE_URL or environment-specific value
  - Set AUTH_URL=http://localhost:3000 for development
  - Document that production should set AUTH_URL=https://www.yannova.be or derive from NEXT_PUBLIC_SITE_URL
  - Add comment explaining environment-aware configuration
  - _Bug_Condition: AUTH_URL hardcoded to localhost causes production auth failures_
  - _Expected_Behavior: AUTH_URL is environment-aware (localhost in dev, production URL in prod)_
  - _Preservation: Development authentication flow must continue working_
  - _Requirements: 2.1, 2.2, 2.3, 2.6, 2.7, 2.8_

- [ ] 4.2 Update .env.local.example with AUTH_URL guidance
  - Add AUTH_URL to .env.local.example
  - Document development value: http://localhost:3000
  - Document production value: https://www.yannova.be or ${NEXT_PUBLIC_SITE_URL}
  - Add comment explaining NextAuth callback requirements
  - _Bug_Condition: AUTH_URL not environment-aware_
  - _Expected_Behavior: Clear documentation for environment-specific AUTH_URL_
  - _Preservation: NextAuth session management must continue working_
  - _Requirements: 2.6, 2.7, 2.8_

- [ ] 4.3 Verify AUTH_URL exploration test now passes
  - **Property 1: Expected Behavior** - Environment-Aware AUTH_URL
  - **IMPORTANT**: Re-run the SAME test from task 1.2 - do NOT write a new test
  - Run AUTH_URL exploration test from step 1.2
  - **EXPECTED OUTCOME**: Test PASSES (confirms AUTH_URL is environment-aware)
  - _Requirements: 2.6, 2.7, 2.8_

### 5. Fix #3: Dynamic URL Configuration - Use NEXT_PUBLIC_SITE_URL

- [x] 5.1 Update seo-helper.ts to use NEXT_PUBLIC_SITE_URL
  - Replace hardcoded `https://www.yannova.be` at line 70 with `process.env.NEXT_PUBLIC_SITE_URL`
  - Replace hardcoded `https://www.yannova.be` at line 85 with `process.env.NEXT_PUBLIC_SITE_URL`
  - Replace hardcoded `https://www.yannova.be` at line 100 with `process.env.NEXT_PUBLIC_SITE_URL`
  - Add fallback to `http://localhost:3000` when NEXT_PUBLIC_SITE_URL is not set
  - _Bug_Condition: Hardcoded production URLs prevent staging/preview deployments_
  - _Expected_Behavior: SEO metadata uses environment-aware URLs_
  - _Preservation: SEO metadata generation and database overrides must continue working_
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 2.9, 2.10, 2.11_

- [x] 5.2 Add NEXT_PUBLIC_SITE_URL to .env and .env.local.example
  - Add NEXT_PUBLIC_SITE_URL=http://localhost:3000 to .env for development
  - Add NEXT_PUBLIC_SITE_URL to .env.local.example with production value
  - Document that production should set NEXT_PUBLIC_SITE_URL=https://www.yannova.be
  - Add comment explaining this is used for SEO metadata and canonical URLs
  - _Bug_Condition: No environment variable for site URL_
  - _Expected_Behavior: NEXT_PUBLIC_SITE_URL configured for all environments_
  - _Preservation: Environment variable loading must continue working_
  - _Requirements: 2.9, 2.10, 2.11_

- [ ] 5.3 Verify hardcoded URLs exploration test now passes
  - **Property 1: Expected Behavior** - Dynamic URL Configuration
  - **IMPORTANT**: Re-run the SAME test from task 1.3 - do NOT write a new test
  - Run hardcoded URLs exploration test from step 1.3
  - **EXPECTED OUTCOME**: Test PASSES (confirms URLs are dynamic)
  - _Requirements: 2.9, 2.10, 2.11_

### 6. Fix #4: Database-Driven Admin Access - Use User.role with SQL migration

- [x] 6.1 Create SQL migration to add role column if not exists
  - Create migration file to add `role` column to User table if it doesn't exist
  - Set default role to "user"
  - Add enum or varchar constraint for role values: "user", "admin", "super_admin"
  - Update existing admin users (from ALLOWED_EMAILS) to have role="admin"
  - _Bug_Condition: Admin access uses hardcoded email array_
  - _Expected_Behavior: Admin access uses database role column_
  - _Preservation: Database operations and connection pooling must continue working_
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 2.12, 2.13, 2.14, 2.15, 2.16_

- [x] 6.2 Update src/auth.ts to check User.role instead of ALLOWED_EMAILS
  - Remove ALLOWED_EMAILS hardcoded array
  - Update authentication logic to query User.role from database
  - Grant access when role = "admin" or role = "super_admin"
  - Deny access when role = "user"
  - Maintain existing authentication flow and session management
  - _Bug_Condition: Hardcoded ALLOWED_EMAILS array requires code changes for admin management_
  - _Expected_Behavior: Database role column controls admin access_
  - _Preservation: Valid admin users must continue to authenticate successfully_
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 2.12, 2.13, 2.14, 2.15, 2.16_

- [x] 6.3 Update Prisma schema if needed
  - Add role field to User model in schema.prisma if not present
  - Set appropriate type (enum or string) and default value
  - Run prisma generate to update client
  - _Bug_Condition: Schema doesn't reflect role-based access control_
  - _Expected_Behavior: Prisma schema includes role field_
  - _Preservation: Existing Prisma queries must continue working_
  - _Requirements: 2.12, 2.13, 2.14_

- [ ] 6.4 Verify hardcoded admin emails exploration test now passes
  - **Property 1: Expected Behavior** - Database-Driven Admin Access
  - **IMPORTANT**: Re-run the SAME test from task 1.4 - do NOT write a new test
  - Run hardcoded admin emails exploration test from step 1.4
  - **EXPECTED OUTCOME**: Test PASSES (confirms database-driven access)
  - _Requirements: 2.12, 2.13, 2.14, 2.15, 2.16_

### 7. Fix #5: Production-Safe Logging - Create logger utility

- [x] 7.1 Create src/lib/logger.ts utility
  - Create logger utility that respects NODE_ENV environment variable
  - Implement log levels: debug, info, warn, error
  - Disable console.log in production (NODE_ENV=production)
  - Enable all logging in development (NODE_ENV=development)
  - Use structured logging format with timestamps
  - _Bug_Condition: Console statements execute in production causing performance overhead_
  - _Expected_Behavior: Logger utility respects environment and disables console in production_
  - _Preservation: Development workflow and debugging must continue working_
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 2.17, 2.18, 2.19, 2.20, 2.21_

- [x] 7.2 Replace console statements in src/auth.ts with logger
  - Replace `console.log('Email not in allowed list:', email)` with logger.debug
  - Replace `console.log('Invalid credentials')` with logger.debug
  - Replace `console.error('Failed to fetch user:', error)` with logger.error
  - Ensure sensitive data (emails, passwords) is not logged even in development
  - _Bug_Condition: Console statements expose sensitive data and create performance overhead_
  - _Expected_Behavior: Logger utility used with appropriate log levels_
  - _Preservation: Authentication flow and error handling must continue working_
  - _Requirements: 5.1, 5.2, 5.3, 2.17, 2.18, 2.19, 2.20, 2.21_

- [ ] 7.3 Replace console statements across codebase
  - Identify and replace 50+ console.log/error/warn statements
  - Use appropriate log levels (debug, info, warn, error)
  - Ensure no sensitive data is logged
  - Test that logging works in development and is disabled in production
  - _Bug_Condition: Console statements throughout codebase_
  - _Expected_Behavior: All console statements replaced with logger utility_
  - _Preservation: Application functionality must continue working_
  - _Requirements: 5.4, 5.5, 2.17, 2.18, 2.19, 2.20_

- [ ] 7.4 Verify console statements exploration test now passes
  - **Property 1: Expected Behavior** - Production-Safe Logging
  - **IMPORTANT**: Re-run the SAME test from task 1.5 - do NOT write a new test
  - Run console statements exploration test from step 1.5
  - **EXPECTED OUTCOME**: Test PASSES (confirms logger utility in use)
  - _Requirements: 2.17, 2.18, 2.19, 2.20, 2.21_

### 8. Fix #6: Input Sanitization - Add DOMPurify + Zod validation

- [x] 8.1 Install DOMPurify and Zod dependencies
  - Run `npm install dompurify zod`
  - Run `npm install --save-dev @types/dompurify` for TypeScript types
  - Verify dependencies are added to package.json
  - _Bug_Condition: No sanitization library installed_
  - _Expected_Behavior: DOMPurify and Zod available for input sanitization_
  - _Preservation: Existing dependencies and build process must continue working_
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 2.22, 2.23, 2.24, 2.25, 2.26_

- [x] 8.2 Create input sanitization utility
  - Create src/lib/sanitize.ts with DOMPurify wrapper
  - Implement sanitizeHtml function that strips/escapes HTML tags and scripts
  - Configure DOMPurify to remove all script tags and event handlers
  - Add TypeScript types for sanitization functions
  - _Bug_Condition: No systematic input sanitization_
  - _Expected_Behavior: Reusable sanitization utility available_
  - _Preservation: Application functionality must continue working_
  - _Requirements: 2.22, 2.23, 2.25, 2.26_

- [ ] 8.3 Create Zod validation schemas for contact form
  - Create src/lib/validation.ts with Zod schemas
  - Define contactFormSchema with name, email, phone, message fields
  - Add email format validation, length constraints, required field checks
  - Export type-safe validation functions
  - _Bug_Condition: Basic validation without type safety_
  - _Expected_Behavior: Type-safe Zod validation schemas_
  - _Preservation: Validation logic must continue working_
  - _Requirements: 2.24, 2.25_

- [x] 8.4 Update src/app/api/contact/route.ts with sanitization
  - Import sanitizeHtml from src/lib/sanitize.ts
  - Import contactFormSchema from src/lib/validation.ts
  - Validate request body with Zod schema before processing
  - Sanitize all user input (name, email, message) before inserting into email HTML
  - Replace `${message.replace(/\n/g, "<br>")}` with sanitized version
  - Test that malicious input like `<script>alert('xss')</script>` is neutralized
  - _Bug_Condition: User input inserted into email HTML without sanitization_
  - _Expected_Behavior: All user input sanitized before use_
  - _Preservation: Email functionality and formatting must continue working_
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 2.22, 2.23, 2.24, 2.25, 2.26_

- [ ] 8.5 Apply sanitization to other API routes
  - Identify other API routes in src/app/api/ that receive user input
  - Apply consistent sanitization patterns using sanitizeHtml utility
  - Use Zod schemas for validation where appropriate
  - Test that all user input is sanitized before processing
  - _Bug_Condition: No systematic input sanitization across API routes_
  - _Expected_Behavior: Consistent sanitization across all API routes_
  - _Preservation: API functionality must continue working_
  - _Requirements: 6.5, 2.25, 2.26_

- [ ] 8.6 Verify input sanitization exploration test now passes
  - **Property 1: Expected Behavior** - Input Sanitization Active
  - **IMPORTANT**: Re-run the SAME test from task 1.6 - do NOT write a new test
  - Run input sanitization exploration test from step 1.6
  - **EXPECTED OUTCOME**: Test PASSES (confirms sanitization is active)
  - _Requirements: 2.22, 2.23, 2.24, 2.25, 2.26_

## Phase 4: Final Validation

- [ ] 9. Verify all preservation tests still pass
  - **Property 2: Preservation** - All Existing Functionality Preserved
  - **IMPORTANT**: Re-run the SAME tests from task 2 - do NOT write new tests
  - Run all preservation property tests from step 2
  - **EXPECTED OUTCOME**: All tests PASS (confirms no regressions)
  - Verify authentication flow works (task 2.1)
  - Verify email functionality works (task 2.2)
  - Verify SEO metadata works (task 2.3)
  - Verify database operations work (task 2.4)
  - Verify development workflow works (task 2.5)
  - Verify API routes work (task 2.6)
  - _Requirements: 3.1-3.18_

- [ ] 10. Checkpoint - Ensure all tests pass
  - Run all exploration tests - should now PASS (were failing before fixes)
  - Run all preservation tests - should still PASS (no regressions)
  - Verify all 6 security fixes are implemented correctly
  - Verify no production secrets in tracked files
  - Verify environment-aware configuration works
  - Verify dynamic URL configuration works
  - Verify database-driven admin access works
  - Verify production-safe logging works
  - Verify input sanitization works
  - Ask the user if questions arise

## Summary

This implementation plan addresses 6 critical security vulnerabilities:

1. **Secrets Management**: Moves production credentials from tracked .env to gitignored .env.local
2. **Environment-Aware AUTH_URL**: Makes authentication URL dynamic for proper production deployment
3. **Dynamic URL Configuration**: Replaces hardcoded URLs with NEXT_PUBLIC_SITE_URL environment variable
4. **Database-Driven Admin Access**: Replaces hardcoded email array with User.role database column
5. **Production-Safe Logging**: Creates logger utility that disables console statements in production
6. **Input Sanitization**: Adds DOMPurify and Zod for HTML sanitization and type-safe validation

The plan follows the bugfix workflow:
- Phase 1: Exploration tests (write tests that FAIL on unfixed code to confirm bugs exist)
- Phase 2: Preservation tests (write tests that PASS on unfixed code to prevent regressions)
- Phase 3: Implementation (apply fixes with clear acceptance criteria)
- Phase 4: Final validation (verify all tests pass)
