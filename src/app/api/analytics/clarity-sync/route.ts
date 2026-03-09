import { NextRequest, NextResponse } from 'next/server';
import { syncClarityToAnalytics, syncClarityHistorical } from '@/lib/clarity-sync';

export async function POST(request: NextRequest) {
  try {
    const { date, days } = await request.json();

    if (days) {
      // Sync meerdere dagen
      const results = await syncClarityHistorical(days);
      return NextResponse.json({ 
        success: true, 
        synced: results.length,
        results 
      });
    } else {
      // Sync enkele dag
      const targetDate = date ? new Date(date) : new Date();
      const result = await syncClarityToAnalytics(targetDate);
      return NextResponse.json(result);
    }
  } catch (error) {
    console.error('Error syncing Clarity data:', error);
    return NextResponse.json(
      { error: 'Failed to sync Clarity data' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Sync vandaag automatisch
    const result = await syncClarityToAnalytics();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error syncing Clarity data:', error);
    return NextResponse.json(
      { error: 'Failed to sync Clarity data' },
      { status: 500 }
    );
  }
}
