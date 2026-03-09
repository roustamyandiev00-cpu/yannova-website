import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { metric, value, previousValue, category, page, notes } = data;

    // Calculate improvement
    let improvement = null;
    if (previousValue !== null && previousValue !== undefined && previousValue !== 0) {
      improvement = ((value - previousValue) / previousValue) * 100;
    }

    const performanceMetric = await prisma.performanceMetric.create({
      data: {
        metric,
        value,
        previousValue: previousValue || null,
        improvement,
        category,
        page: page || null,
        notes: notes || null,
        period: new Date()
      }
    });

    return NextResponse.json(performanceMetric);
  } catch (error) {
    console.error('Error saving performance metric:', error);
    return NextResponse.json(
      { error: 'Failed to save metric' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days') || '30');
    const category = searchParams.get('category');
    const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

    const where: any = { period: { gte: startDate } };
    if (category) {
      where.category = category;
    }

    const metrics = await prisma.performanceMetric.findMany({
      where,
      orderBy: { period: 'desc' }
    });

    return NextResponse.json(metrics);
  } catch (error) {
    console.error('Error fetching performance metrics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch metrics' },
      { status: 500 }
    );
  }
}
