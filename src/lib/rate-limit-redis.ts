/**
 * Redis-based Rate Limiter (for production with Vercel KV or Redis)
 * 
 * To use this in production:
 * 1. Install: npm install @vercel/kv
 * 2. Set up Vercel KV in your project
 * 3. Replace imports in API routes from './rate-limit' to './rate-limit-redis'
 */

// Uncomment when ready to use Redis:
// import { kv } from '@vercel/kv';

interface RateLimitResult {
  isLimited: boolean;
  remaining: number;
  resetTime: number;
}

/**
 * Redis-based rate limiter using Vercel KV
 * Persists across deployments and serverless function instances
 */
export async function rateLimitRedis(
  identifier: string,
  limit: number = 10,
  windowMs: number = 60 * 1000
): Promise<RateLimitResult> {
  // TODO: Uncomment when Vercel KV is set up
  /*
  const key = `rate-limit:${identifier}`;
  const now = Date.now();
  const windowStart = now - windowMs;

  try {
    // Get current count
    const count = await kv.zcount(key, windowStart, now);
    
    if (count >= limit) {
      // Get oldest entry to calculate reset time
      const oldest = await kv.zrange(key, 0, 0, { withScores: true });
      const resetTime = oldest.length > 0 ? oldest[1] + windowMs : now + windowMs;
      
      return {
        isLimited: true,
        remaining: 0,
        resetTime,
      };
    }

    // Add current request
    await kv.zadd(key, { score: now, member: `${now}-${Math.random()}` });
    
    // Clean up old entries
    await kv.zremrangebyscore(key, 0, windowStart);
    
    // Set expiry
    await kv.expire(key, Math.ceil(windowMs / 1000));

    return {
      isLimited: false,
      remaining: limit - count - 1,
      resetTime: now + windowMs,
    };
  } catch (error) {
    console.error('Redis rate limit error:', error);
    // Fallback: allow request if Redis fails
    return {
      isLimited: false,
      remaining: limit,
      resetTime: now + windowMs,
    };
  }
  */

  // Temporary fallback until Redis is configured
  const now = Date.now();
  return {
    isLimited: false,
    remaining: limit,
    resetTime: now + windowMs,
  };
}

/**
 * Get client IP address from request
 */
export function getClientIp(request: Request): string {
  const headers = request.headers;
  
  const forwardedFor = headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIp = headers.get('x-real-ip');
  if (realIp) return realIp;

  const cfConnectingIp = headers.get('cf-connecting-ip');
  if (cfConnectingIp) return cfConnectingIp;

  return 'unknown';
}

/**
 * Rate limit middleware for API routes (Redis version)
 */
export async function rateLimitMiddlewareRedis(
  request: Request,
  limit: number = 10,
  windowMs: number = 60 * 1000
): Promise<RateLimitResult> {
  const ip = getClientIp(request);
  return rateLimitRedis(ip, limit, windowMs);
}
