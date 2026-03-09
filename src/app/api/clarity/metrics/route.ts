import { NextResponse } from 'next/server';
import { getClarityMetrics } from '@/lib/clarity-api';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate') || undefined;
    const endDate = searchParams.get('endDate') || undefined;

    const metrics = await getClarityMetrics(startDate, endDate);
    
    return NextResponse.json(metrics);
  } catch (error) {
    console.error('Clarity API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch metrics' },
      { status: 500 }
    );
  }
}
