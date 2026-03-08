import { NextResponse } from 'next/server';
import { checkDatabaseHealth } from '@/lib/prisma';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  const startTime = Date.now();
  
  try {
    // Check database health
    const dbHealthy = await checkDatabaseHealth();
    const dbResponseTime = Date.now() - startTime;
    
    // Check environment
    const env = process.env.NODE_ENV || 'unknown';
    const version = process.env.npm_package_version || '1.0.0';
    
    // Memory usage
    const memoryUsage = process.memoryUsage();
    const memoryMB = {
      rss: Math.round(memoryUsage.rss / 1024 / 1024),
      heapTotal: Math.round(memoryUsage.heapTotal / 1024 / 1024),
      heapUsed: Math.round(memoryUsage.heapUsed / 1024 / 1024),
      external: Math.round(memoryUsage.external / 1024 / 1024),
    };
    
    if (!dbHealthy) {
      return NextResponse.json(
        { 
          status: 'unhealthy', 
          checks: {
            database: {
              status: 'fail',
              responseTime: `${dbResponseTime}ms`
            }
          },
          environment: env,
          version,
          timestamp: new Date().toISOString(),
          uptime: process.uptime()
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      status: 'healthy',
      checks: {
        database: {
          status: 'pass',
          responseTime: `${dbResponseTime}ms`
        }
      },
      environment: env,
      version,
      memory: memoryMB,
      uptime: Math.round(process.uptime()),
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json(
      { 
        status: 'error', 
        message: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
