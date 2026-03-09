import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { rankings } = data;

    if (rankings && Array.isArray(rankings)) {
      await Promise.all(
        rankings.map((ranking: any) =>
          prisma.seoRanking.create({
            data: {
              keyword: ranking.keyword,
              position: ranking.position,
              previousPosition: ranking.previousPosition || null,
              url: ranking.url,
              searchEngine: ranking.searchEngine || 'google',
              location: ranking.location || 'Belgium',
              device: ranking.device || 'desktop',
              searchVolume: ranking.searchVolume || null,
              difficulty: ranking.difficulty || null,
              period: new Date(ranking.period || Date.now())
            }
          })
        )
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving SEO rankings:', error);
    return NextResponse.json(
      { error: 'Failed to save rankings' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days') || '30');
    const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

    const rankings = await prisma.seoRanking.findMany({
      where: { period: { gte: startDate } },
      orderBy: { period: 'desc' }
    });

    return NextResponse.json(rankings);
  } catch (error) {
    console.error('Error fetching SEO rankings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch rankings' },
      { status: 500 }
    );
  }
}
