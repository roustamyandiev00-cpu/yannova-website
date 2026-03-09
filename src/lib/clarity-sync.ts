/**
 * Sync Microsoft Clarity data naar Analytics Dashboard
 */

import { prisma } from './prisma';
import { getClarityMetrics } from './clarity-api';

export async function syncClarityToAnalytics(date?: Date) {
  const targetDate = date || new Date();
  targetDate.setHours(0, 0, 0, 0);

  try {
    // Get Clarity metrics voor de dag
    const startDate = targetDate.toISOString().split('T')[0];
    const endDate = new Date(targetDate.getTime() + 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0];

    const metrics = await getClarityMetrics(startDate, endDate);

    // Update TrafficAnalytics
    await prisma.trafficAnalytics.upsert({
      where: { date: targetDate },
      update: {
        pageViews: metrics.totalPageViews,
        uniqueVisitors: metrics.totalSessions,
        bounceRate: metrics.bounceRate,
        avgSessionTime: Math.round(metrics.avgSessionDuration / 1000), // Convert ms to seconds
      },
      create: {
        date: targetDate,
        pageViews: metrics.totalPageViews,
        uniqueVisitors: metrics.totalSessions,
        bounceRate: metrics.bounceRate,
        avgSessionTime: Math.round(metrics.avgSessionDuration / 1000),
        newVisitors: 0,
        returningVisitors: 0,
      },
    });

    // Track als performance metric
    await prisma.performanceMetric.create({
      data: {
        metric: 'bounce_rate',
        value: metrics.bounceRate,
        category: 'user_experience',
        period: targetDate,
        notes: 'Synced from Microsoft Clarity',
      },
    });

    await prisma.performanceMetric.create({
      data: {
        metric: 'avg_session_duration',
        value: metrics.avgSessionDuration / 1000,
        category: 'user_experience',
        period: targetDate,
        notes: 'Synced from Microsoft Clarity (seconds)',
      },
    });

    console.log(`✅ Clarity data synced for ${startDate}`);
    return { success: true, date: startDate };
  } catch (error) {
    console.error('Error syncing Clarity data:', error);
    throw error;
  }
}

/**
 * Sync laatste 30 dagen van Clarity data
 */
export async function syncClarityHistorical(days: number = 30) {
  const results = [];
  
  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    try {
      const result = await syncClarityToAnalytics(date);
      results.push(result);
      
      // Wacht 1 seconde tussen requests om rate limiting te vermijden
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`Failed to sync ${date.toISOString().split('T')[0]}:`, error);
    }
  }
  
  return results;
}

/**
 * Track custom Clarity events naar conversies
 */
export async function trackClarityEvent(
  eventName: string,
  sessionId: string,
  metadata?: Record<string, any>
) {
  try {
    // Bepaal conversie type gebaseerd op event naam
    let conversionType: 'lead' | 'call' | 'form' | 'chat' = 'form';
    
    if (eventName.includes('phone') || eventName.includes('call')) {
      conversionType = 'call';
    } else if (eventName.includes('chat') || eventName.includes('whatsapp')) {
      conversionType = 'chat';
    } else if (eventName.includes('lead') || eventName.includes('contact')) {
      conversionType = 'lead';
    }

    // Track als conversie
    await prisma.conversion.create({
      data: {
        type: conversionType,
        source: metadata?.source || 'clarity_event',
        campaign: metadata?.campaign,
        keyword: metadata?.keyword,
        page: metadata?.page,
        device: metadata?.device,
      },
    });

    console.log(`✅ Clarity event tracked: ${eventName}`);
  } catch (error) {
    console.error('Error tracking Clarity event:', error);
  }
}
