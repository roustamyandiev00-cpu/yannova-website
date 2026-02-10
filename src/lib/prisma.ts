import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

let connectionString = process.env.DATABASE_URL;

if (process.env.DATABASE_URL?.startsWith('prisma+postgres://')) {
  try {
    const url = new URL(process.env.DATABASE_URL);
    const apiKey = url.searchParams.get('api_key');
    if (apiKey) {
      const decoded = Buffer.from(apiKey, 'base64').toString('utf-8');
      const config = JSON.parse(decoded);
      if (config.databaseUrl) {
        // Override connection limit to prevent hanging in dev
        const dbUrl = new URL(config.databaseUrl);
        dbUrl.searchParams.set('connection_limit', '20');
        dbUrl.searchParams.set('pool_timeout', '20');
        connectionString = dbUrl.toString();
      }
    }
  } catch (e) {
    console.warn('Failed to parse prisma+postgres URL, falling back to original', e);
  }
} else if (process.env.DATABASE_URL?.startsWith('postgres://')) {
  connectionString = process.env.DATABASE_URL;
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

export const prisma = globalForPrisma.prisma || new PrismaClient({
  adapter,
  log: ['query'],
});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
