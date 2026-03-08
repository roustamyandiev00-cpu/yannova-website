/**
 * Simple in-memory cache for server-side data
 * Useful for caching database queries and API responses
 */

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

class Cache {
  private cache: Map<string, CacheEntry<any>> = new Map();
  private defaultTTL = 60 * 1000; // 1 minute default

  /**
   * Get a value from cache
   * @param key Cache key
   * @param ttl Time to live in milliseconds (optional, uses default if not provided)
   * @returns Cached value or null if expired/not found
   */
  get<T>(key: string, ttl?: number): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return null;
    }

    const maxAge = ttl || this.defaultTTL;
    const age = Date.now() - entry.timestamp;

    if (age > maxAge) {
      this.cache.delete(key);
      return null;
    }

    return entry.data as T;
  }

  /**
   * Set a value in cache
   * @param key Cache key
   * @param data Data to cache
   */
  set<T>(key: string, data: T): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }

  /**
   * Delete a value from cache
   * @param key Cache key
   */
  delete(key: string): void {
    this.cache.delete(key);
  }

  /**
   * Clear all cache entries
   */
  clear(): void {
    this.cache.clear();
  }

  /**
   * Get or set a value in cache
   * If the value exists and is not expired, return it
   * Otherwise, call the factory function and cache the result
   * 
   * @param key Cache key
   * @param factory Function to generate the value if not cached
   * @param ttl Time to live in milliseconds (optional)
   * @returns Cached or newly generated value
   */
  async getOrSet<T>(
    key: string,
    factory: () => Promise<T>,
    ttl?: number
  ): Promise<T> {
    const cached = this.get<T>(key, ttl);
    
    if (cached !== null) {
      return cached;
    }

    const data = await factory();
    this.set(key, data);
    return data;
  }

  /**
   * Get cache statistics
   */
  getStats() {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys()),
    };
  }
}

// Export singleton instance
export const cache = new Cache();

/**
 * Cache decorator for functions
 * Usage: const cachedFn = withCache('key', fn, 60000);
 */
export function withCache<T extends (...args: any[]) => Promise<any>>(
  keyPrefix: string,
  fn: T,
  ttl?: number
): T {
  return (async (...args: Parameters<T>) => {
    const key = `${keyPrefix}:${JSON.stringify(args)}`;
    return cache.getOrSet(key, () => fn(...args), ttl);
  }) as T;
}
