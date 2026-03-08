import { NextResponse } from 'next/server';
import { rateLimitMiddleware } from '@/lib/rate-limit';
import { logger } from '@/lib/logger';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    // Rate limiting: 100 requests per minute
    const { isLimited } = rateLimitMiddleware(request, 100, 60 * 1000);
    
    if (isLimited) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      );
    }

    const body = await request.json();
    
    // Validate metric data
    if (!body || !body.name || typeof body.value !== 'number') {
      return NextResponse.json(
        { error: 'Invalid metric data' },
        { status: 400 }
      );
    }

    // Log Web Vitals in production
    if (process.env.NODE_ENV === 'production') {
      logger.info('Web Vital', {
        name: body.name,
        value: body.value,
        rating: body.rating,
        id: body.id,
      });

      // Here you could send to analytics service like:
      // - Google Analytics
      // - Vercel Analytics
      // - Custom analytics database
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error('Error processing Web Vital', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
