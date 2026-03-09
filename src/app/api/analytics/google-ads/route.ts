import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { keywords, campaigns } = data;

    // Save keywords data
    if (keywords && Array.isArray(keywords)) {
      await Promise.all(
        keywords.map((kw: any) =>
          prisma.googleAdsKeyword.create({
            data: {
              keyword: kw.keyword,
              matchType: kw.matchType || 'broad',
              impressions: kw.impressions || 0,
              clicks: kw.clicks || 0,
              conversions: kw.conversions || 0,
              cost: kw.cost || 0,
              ctr: kw.ctr || 0,
              cpc: kw.cpc || 0,
              conversionRate: kw.conversionRate || 0,
              qualityScore: kw.qualityScore,
              status: kw.status || 'active',
              campaign: kw.campaign,
              adGroup: kw.adGroup,
              period: new Date(kw.period || Date.now())
            }
          })
        )
      );
    }

    // Save campaigns data
    if (campaigns && Array.isArray(campaigns)) {
      await Promise.all(
        campaigns.map((camp: any) =>
          prisma.googleAdsCampaign.create({
            data: {
              name: camp.name,
              budget: camp.budget,
              spent: camp.spent || 0,
              impressions: camp.impressions || 0,
              clicks: camp.clicks || 0,
              conversions: camp.conversions || 0,
              ctr: camp.ctr || 0,
              conversionRate: camp.conversionRate || 0,
              status: camp.status || 'active',
              startDate: new Date(camp.startDate),
              endDate: camp.endDate ? new Date(camp.endDate) : null,
              period: new Date(camp.period || Date.now())
            }
          })
        )
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving Google Ads data:', error);
    return NextResponse.json(
      { error: 'Failed to save data' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days') || '30');
    const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

    const keywords = await prisma.googleAdsKeyword.findMany({
      where: { period: { gte: startDate } },
      orderBy: { period: 'desc' }
    });

    const campaigns = await prisma.googleAdsCampaign.findMany({
      where: { period: { gte: startDate } },
      orderBy: { period: 'desc' }
    });

    return NextResponse.json({ keywords, campaigns });
  } catch (error) {
    console.error('Error fetching Google Ads data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
