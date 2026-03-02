import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { logger } from '@/lib/logger';

// Ensure DATABASE_URL has sslmode parameter for self-signed certificates
let connectionString = process.env.DATABASE_URL;

if (connectionString && !connectionString.includes('sslmode=')) {
  connectionString += connectionString.includes('?') ? '&sslmode=no-verify' : '?sslmode=no-verify';
}

// Enhanced connection pool configuration for Supabase with retry logic
const pool = new Pool({
  connectionString,
  ssl: process.env.NODE_ENV === 'production' 
    ? { rejectUnauthorized: true }
    : false, // Disable SSL verification in development
  // Connection pool settings optimized for serverless
  max: 10, // Maximum number of clients in the pool
  min: 2, // Minimum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 10000, // Return error after 10 seconds if connection not available
  maxUses: 7500, // Close connection after 7500 uses (prevents memory leaks)
});

import { logger } from '@/lib/logger';

// Handle pool errors gracefully
pool.on('error', (err) => {
  logger.error('Unexpected error on idle client', err);
});

// Connection retry logic
pool.on('connect', () => {
  if (process.env.NODE_ENV === 'development') {
    logger.debug('Database connection established');
  }
});

const adapter = new PrismaPg(pool);

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
    errorFormat: 'pretty',
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Graceful shutdown
process.on('beforeExit', async () => {
  await pool.end();
  await prisma.$disconnect();
});

// Helper function to retry database operations
export async function withRetry<T>(
  operation: () => Promise<T>,
  maxRetries = 3,
  delay = 1000
): Promise<T> {
  let lastError: Error | undefined;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error as Error;
      logger.error(`Database operation failed (attempt ${i + 1}/${maxRetries})`, error);
      
      // Don't retry on certain errors
      if (error instanceof Error && 
          (error.message.includes('Unique constraint') || 
           error.message.includes('Foreign key constraint'))) {
        throw error;
      }
      
      if (i < maxRetries - 1) {
        // Exponential backoff
        const waitTime = delay * Math.pow(2, i);
        logger.debug(`Retrying in ${waitTime}ms...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }
  }
  
  throw lastError || new Error('Operation failed after retries');
}

// Health check function
export async function checkDatabaseHealth(): Promise<boolean> {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return true;
  } catch (error) {
    logger.error('Database health check failed', error);
    return false;
  }
}
