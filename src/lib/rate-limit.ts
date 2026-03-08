/**
 * Simple rate limiter for API routes
 * Prevents abuse by limiting requests per IP address
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

class RateLimiter {
  private requests: Map<string, RateLimitEntry> = new Map();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Clean up expired entries every minute
    this.cleanupInterval = setInterval(() => {
      this.cleanup();
    }, 60 * 1000);
  }

  /**
   * Check if a request should be rate limited
   * @param identifier Unique identifier (usually IP address)
   * @param limit Maximum number of requests
   * @param windowMs Time window in milliseconds
   * @returns Object with isLimited boolean and remaining requests
   */
  check(
    identifier: string,
    limit: number = 10,
    windowMs: number = 60 * 1000
  ): { isLimited: boolean; remaining: number; resetTime: number } {
    const now = Date.now();
    const entry = this.requests.get(identifier);

    // No previous requests or window expired
    if (!entry || now > entry.resetTime) {
      this.requests.set(identifier, {
        count: 1,
        resetTime: now + windowMs,
      });
      return {
        isLimited: false,
        remaining: limit - 1,
        resetTime: now + windowMs,
      };
    }

    // Increment count
    entry.count++;

    // Check if limit exceeded
    if (entry.count > limit) {
      return {
        isLimited: true,
        remaining: 0,
        resetTime: entry.resetTime,
      };
    }

    return {
      isLimited: false,
      remaining: limit - entry.count,
      resetTime: entry.resetTime,
    };
  }

  /**
   * Reset rate limit for an identifier
   * @param identifier Unique identifier
   */
  reset(identifier: string): void {
    this.requests.delete(identifier);
  }

  /**
   * Clean up expired entries
   */
  private cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.requests.entries()) {
      if (now > entry.resetTime) {
        this.requests.delete(key);
      }
    }
  }

  /**
   * Get statistics
   */
  getStats() {
    return {
      activeIdentifiers: this.requests.size,
      identifiers: Array.from(this.requests.keys()),
    };
  }

  /**
   * Cleanup on shutdown
   */
  destroy(): void {
    clearInterval(this.cleanupInterval);
    this.requests.clear();
  }
}

// Export singleton instance
export const rateLimiter = new RateLimiter();

/**
 * Get client IP address from request headers
 * Works with Vercel, Cloudflare, and other proxies
 */
export function getClientIp(headers: Headers): string {
  // Try various headers in order of preference
  const forwardedFor = headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIp = headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  const cfConnectingIp = headers.get('cf-connecting-ip');
  if (cfConnectingIp) {
    return cfConnectingIp;
  }

  // Fallback
  return 'unknown';
}

/**
 * Rate limit middleware for API routes
 * Usage in API route:
 * 
 * const { isLimited } = rateLimitMiddleware(request);
 * if (isLimited) {
 *   return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
 * }
 */
export function rateLimitMiddleware(
  request: Request,
  limit: number = 10,
  windowMs: number = 60 * 1000
) {
  const ip = getClientIp(new Headers(request.headers));
  return rateLimiter.check(ip, limit, windowMs);
}
