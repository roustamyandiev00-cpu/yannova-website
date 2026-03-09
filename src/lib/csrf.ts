/**
 * CSRF Protection Middleware
 * Generates and validates CSRF tokens to prevent cross-site request forgery
 */

import { randomBytes, createHash } from 'crypto';

const CSRF_SECRET = process.env.CSRF_SECRET || process.env.AUTH_SECRET || 'default-secret-change-in-production';
const TOKEN_LENGTH = 32;

/**
 * Generate a CSRF token
 */
export function generateCsrfToken(): string {
  const token = randomBytes(TOKEN_LENGTH).toString('hex');
  return token;
}

/**
 * Create a hash of the token for validation
 */
export function hashToken(token: string): string {
  return createHash('sha256')
    .update(`${token}${CSRF_SECRET}`)
    .digest('hex');
}

/**
 * Validate a CSRF token
 */
export function validateCsrfToken(token: string, hash: string): boolean {
  if (!token || !hash) return false;
  const expectedHash = hashToken(token);
  return expectedHash === hash;
}

/**
 * Extract CSRF token from request headers
 */
export function getCsrfTokenFromRequest(request: Request): string | null {
  return request.headers.get('x-csrf-token');
}
