# Bugfix Requirements Document

## Introduction

This document addresses critical security and configuration vulnerabilities in the Yannova renovation website (Next.js 16 + React 19). The bugs expose sensitive credentials, prevent proper production deployment, and create security risks through hardcoded values and missing input sanitization. These issues must be fixed before production deployment to prevent credential exposure, authentication failures, and potential XSS attacks.

## Bug Analysis

### Current Behavior (Defect)

#### 1. Secrets Exposure

1.1 WHEN the `.env` file is examined THEN the system exposes production database credentials including password `WRmN3yerM_B8qjFq3z3i` in `DATABASE_URL`

1.2 WHEN the `.env` file is examined THEN the system exposes SMTP password `WRmN3yerM_B8qjFq3z3i` in plaintext

1.3 WHEN the `.env` file is examined THEN the system exposes Google AI API key `AIzaSyDwQoafHHw0rhkZiL-r6c6B-oocdWMwBXA` in plaintext

1.4 WHEN the `.env` file is examined THEN the system exposes Supabase service role key with full database access in plaintext

1.5 WHEN the `.env` file is examined THEN the system exposes NextAuth secret `7pSeJLMcZmKwfTR2Md5eaZUOme5zJ5Sn5ECFgpSUJwQ=` in plaintext

1.6 WHEN the `.env` file is committed to git THEN all production secrets become permanently exposed in git history

#### 2. Environment-Specific Configuration

2.1 WHEN the application runs in production THEN `AUTH_URL=http://localhost:3000` causes NextAuth callbacks to fail

2.2 WHEN the application is deployed to Vercel THEN authentication redirects to localhost instead of production domain

2.3 WHEN the `.env` file contains `AUTH_URL=http://localhost:3000` THEN production authentication cannot function correctly

#### 3. Hardcoded URLs

3.1 WHEN `src/lib/seo-helper.ts` generates SEO metadata THEN the system uses hardcoded `https://www.yannova.be` at line 70 in canonical URL

3.2 WHEN `src/lib/seo-helper.ts` generates Open Graph metadata THEN the system uses hardcoded `https://www.yannova.be` at line 85 in og:url

3.3 WHEN `src/lib/seo-helper.ts` generates fallback metadata THEN the system uses hardcoded `https://www.yannova.be` at line 100 in canonical URL

3.4 WHEN developers test with staging or preview URLs THEN SEO metadata incorrectly points to production domain

#### 4. Hardcoded Admin Access Control

4.1 WHEN `src/auth.ts` validates user login THEN the system checks against hardcoded array `ALLOWED_EMAILS` containing 5 email addresses

4.2 WHEN a new admin user needs access THEN code changes and redeployment are required to add their email

4.3 WHEN an admin user should be revoked THEN code changes and redeployment are required to remove their email

4.4 WHEN the database has a `User.role` column THEN the system ignores it and uses hardcoded email list instead

#### 5. Console Statements in Production

5.1 WHEN authentication fails in `src/auth.ts` THEN the system logs `console.log('Email not in allowed list:', email)` exposing attempted login emails

5.2 WHEN authentication fails in `src/auth.ts` THEN the system logs `console.log('Invalid credentials')` creating performance overhead

5.3 WHEN errors occur in `src/auth.ts` THEN the system logs `console.error('Failed to fetch user:', error)` potentially exposing database errors

5.4 WHEN the application runs in production THEN 50+ console.log/error/warn statements execute across the codebase

5.5 WHEN console statements execute in production THEN browser performance degrades and internal logic is exposed

#### 6. Missing Input Sanitization

6.1 WHEN `src/app/api/contact/route.ts` receives user input THEN the system performs basic validation but no HTML sanitization

6.2 WHEN the contact form email is generated THEN user input `${message.replace(/\n/g, "<br>")}` is inserted into HTML without sanitization

6.3 WHEN malicious input like `<script>alert('xss')</script>` is submitted THEN the system includes it directly in email HTML body

6.4 WHEN the contact API receives input THEN the system validates presence but not content safety

6.5 WHEN other API routes in `src/app/api/` receive user input THEN no systematic input sanitization exists

### Expected Behavior (Correct)

#### 1. Secrets Management

2.1 WHEN the `.env` file is examined THEN the system SHALL contain only placeholder values and comments indicating where to find real values

2.2 WHEN production secrets are needed THEN the system SHALL read them from `.env.local` (gitignored) or Vercel environment variables

2.3 WHEN the `.env.local.example` file is examined THEN the system SHALL provide clear documentation of all required environment variables

2.4 WHEN developers set up the project THEN the system SHALL guide them to copy `.env.local.example` to `.env.local` and fill in real values

2.5 WHEN the repository is cloned THEN no production secrets SHALL be accessible in any tracked files

#### 2. Environment-Specific Configuration

2.6 WHEN the application runs in development THEN `AUTH_URL` SHALL be `http://localhost:3000`

2.7 WHEN the application runs in production THEN `AUTH_URL` SHALL be derived from `NEXT_PUBLIC_SITE_URL` or set explicitly to `https://www.yannova.be`

2.8 WHEN NextAuth processes callbacks THEN the system SHALL use the correct environment-specific URL

#### 3. Dynamic URL Configuration

2.9 WHEN `src/lib/seo-helper.ts` generates SEO metadata THEN the system SHALL use `process.env.NEXT_PUBLIC_SITE_URL` instead of hardcoded URLs

2.10 WHEN `NEXT_PUBLIC_SITE_URL` is not set THEN the system SHALL fall back to `http://localhost:3000` in development

2.11 WHEN SEO metadata is generated THEN all canonical and Open Graph URLs SHALL be environment-aware

#### 4. Database-Driven Admin Access

2.12 WHEN `src/auth.ts` validates user login THEN the system SHALL check the `User.role` column in the database

2.13 WHEN a user has `role = "admin"` or `role = "super_admin"` THEN the system SHALL grant admin access

2.14 WHEN a user has `role = "user"` THEN the system SHALL deny admin access

2.15 WHEN admin access needs to be granted or revoked THEN the system SHALL allow database updates without code changes

2.16 WHEN the hardcoded `ALLOWED_EMAILS` array is removed THEN existing admin users SHALL continue to function via database roles

#### 5. Production-Safe Logging

2.17 WHEN the application runs in production THEN the system SHALL NOT execute console.log statements

2.18 WHEN the application runs in development THEN the system SHALL log debug information using a proper logging library

2.19 WHEN errors occur THEN the system SHALL log them using structured logging with appropriate log levels

2.20 WHEN logging is needed THEN the system SHALL use a logger utility that respects `NODE_ENV` environment variable

2.21 WHEN authentication events occur THEN the system SHALL log them securely without exposing sensitive data

#### 6. Input Sanitization

2.22 WHEN `src/app/api/contact/route.ts` receives user input THEN the system SHALL sanitize HTML content before processing

2.23 WHEN user input is inserted into email HTML THEN the system SHALL escape or strip all HTML tags and scripts

2.24 WHEN the contact form validates input THEN the system SHALL use Zod schemas for type-safe validation

2.25 WHEN any API route receives user input THEN the system SHALL apply consistent sanitization patterns

2.26 WHEN malicious input is submitted THEN the system SHALL neutralize it before storage or email transmission

### Unchanged Behavior (Regression Prevention)

#### 1. Authentication Flow

3.1 WHEN valid admin users log in with correct credentials THEN the system SHALL CONTINUE TO authenticate them successfully

3.2 WHEN NextAuth session management operates THEN the system SHALL CONTINUE TO maintain user sessions correctly

3.3 WHEN users access protected admin routes THEN the system SHALL CONTINUE TO enforce authentication requirements

#### 2. Email Functionality

3.4 WHEN legitimate contact form submissions are made THEN the system SHALL CONTINUE TO send emails successfully

3.5 WHEN email templates are rendered THEN the system SHALL CONTINUE TO format them correctly with proper line breaks

3.6 WHEN SMTP configuration is valid THEN the system SHALL CONTINUE TO use Nodemailer to send emails

#### 3. SEO Metadata

3.7 WHEN pages are rendered THEN the system SHALL CONTINUE TO generate correct SEO metadata

3.8 WHEN database SEO overrides exist THEN the system SHALL CONTINUE TO prioritize them over defaults

3.9 WHEN Open Graph tags are generated THEN the system SHALL CONTINUE TO include all required properties

#### 4. Database Operations

3.10 WHEN Prisma queries execute THEN the system SHALL CONTINUE TO interact with the database correctly

3.11 WHEN user records are fetched THEN the system SHALL CONTINUE TO return complete user objects

3.12 WHEN database connections are established THEN the system SHALL CONTINUE TO use connection pooling correctly

#### 5. Development Workflow

3.13 WHEN developers run `npm run dev` THEN the system SHALL CONTINUE TO start the development server successfully

3.14 WHEN environment variables are loaded THEN the system SHALL CONTINUE TO read from `.env.local` first, then `.env`

3.15 WHEN TypeScript compilation occurs THEN the system SHALL CONTINUE TO type-check without errors

#### 6. API Routes

3.16 WHEN API routes return responses THEN the system SHALL CONTINUE TO use correct HTTP status codes

3.17 WHEN validation fails THEN the system SHALL CONTINUE TO return 400 Bad Request with error messages

3.18 WHEN server errors occur THEN the system SHALL CONTINUE TO return 500 Internal Server Error responses
