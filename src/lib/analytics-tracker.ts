import { prisma } from './prisma';

interface ConversionData {
  type: 'lead' | 'call' | 'form' | 'chat';
  source?: string;
  campaign?: string;
  keyword?: string;
  value?: number;
  leadId?: string;
  page?: string;
  device?: string;
}

export async function trackConversion(data: ConversionData) {
  try {
    await prisma.conversion.create({
      data: {
        type: data.type,
        source: data.source || 'direct',
        campaign: data.campaign || null,
        keyword: data.keyword || null,
        value: data.value || null,
        leadId: data.leadId || null,
        page: data.page || null,
        device: data.device || null,
      }
    });
  } catch (error) {
    console.error('Error tracking conversion:', error);
  }
}

export async function updateTrafficAnalytics() {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Get today's page views
    const pageViews = await prisma.pageView.count({
      where: {
        createdAt: {
          gte: today
        }
      }
    });

    // Get unique visitors (by IP)
    const uniqueVisitors = await prisma.pageView.groupBy({
      by: ['ip'],
      where: {
        createdAt: {
          gte: today
        }
      }
    });

    // Get top pages
    const topPages = await prisma.pageView.groupBy({
      by: ['path'],
      where: {
        createdAt: {
          gte: today
        }
      },
      _count: true,
      orderBy: {
        _count: {
          path: 'desc'
        }
      },
      take: 10
    });

    // Update or create traffic analytics
    await prisma.trafficAnalytics.upsert({
      where: { date: today },
      update: {
        pageViews,
        uniqueVisitors: uniqueVisitors.length,
        topPages: JSON.stringify(topPages.map(p => ({ path: p.path, views: p._count })))
      },
      create: {
        date: today,
        pageViews,
        uniqueVisitors: uniqueVisitors.length,
        topPages: JSON.stringify(topPages.map(p => ({ path: p.path, views: p._count })))
      }
    });
  } catch (error) {
    console.error('Error updating traffic analytics:', error);
  }
}

// Helper to get UTM parameters from URL
export function getUTMParameters(url: string) {
  try {
    const urlObj = new URL(url);
    return {
      source: urlObj.searchParams.get('utm_source') || undefined,
      campaign: urlObj.searchParams.get('utm_campaign') || undefined,
      keyword: urlObj.searchParams.get('utm_term') || undefined,
    };
  } catch {
    return {};
  }
}

// Helper to detect device type
export function getDeviceType(userAgent: string): string {
  if (/mobile/i.test(userAgent)) return 'mobile';
  if (/tablet/i.test(userAgent)) return 'tablet';
  return 'desktop';
}
