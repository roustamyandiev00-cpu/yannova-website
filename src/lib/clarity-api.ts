/**
 * Microsoft Clarity API Client
 * Documentation: https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-api
 */

const CLARITY_API_BASE = 'https://www.clarity.ms/api/v1';
const CLARITY_API_TOKEN = process.env.CLARITY_API_TOKEN;
const CLARITY_PROJECT_ID = process.env.CLARITY_PROJECT_ID;

interface ClaritySession {
  sessionId: string;
  url: string;
  startTime: string;
  endTime: string;
  pages: number;
  duration: number;
  device: string;
  browser: string;
  country: string;
}

interface ClarityMetrics {
  totalSessions: number;
  totalPageViews: number;
  avgSessionDuration: number;
  bounceRate: number;
  topPages: Array<{ url: string; views: number }>;
}

/**
 * Fetch sessions from Clarity API
 */
export async function getClaritySessions(
  startDate?: string,
  endDate?: string
): Promise<ClaritySession[]> {
  if (!CLARITY_API_TOKEN || !CLARITY_PROJECT_ID) {
    throw new Error('Clarity API credentials not configured');
  }

  const params = new URLSearchParams({
    projectId: CLARITY_PROJECT_ID,
    ...(startDate && { startDate }),
    ...(endDate && { endDate }),
  });

  const response = await fetch(
    `${CLARITY_API_BASE}/projects/${CLARITY_PROJECT_ID}/sessions?${params}`,
    {
      headers: {
        Authorization: `Bearer ${CLARITY_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    }
  );

  if (!response.ok) {
    throw new Error(`Clarity API error: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Get aggregated metrics from Clarity
 */
export async function getClarityMetrics(
  startDate?: string,
  endDate?: string
): Promise<ClarityMetrics> {
  const sessions = await getClaritySessions(startDate, endDate);

  const totalSessions = sessions.length;
  const totalPageViews = sessions.reduce((sum, s) => sum + s.pages, 0);
  const avgSessionDuration =
    sessions.reduce((sum, s) => sum + s.duration, 0) / totalSessions;
  const bounceRate =
    (sessions.filter((s) => s.pages === 1).length / totalSessions) * 100;

  // Count page views
  const pageViews = new Map<string, number>();
  sessions.forEach((session) => {
    const count = pageViews.get(session.url) || 0;
    pageViews.set(session.url, count + 1);
  });

  const topPages = Array.from(pageViews.entries())
    .map(([url, views]) => ({ url, views }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 10);

  return {
    totalSessions,
    totalPageViews,
    avgSessionDuration,
    bounceRate,
    topPages,
  };
}

/**
 * Get heatmap data for a specific page
 */
export async function getClarityHeatmap(pageUrl: string) {
  if (!CLARITY_API_TOKEN || !CLARITY_PROJECT_ID) {
    throw new Error('Clarity API credentials not configured');
  }

  const response = await fetch(
    `${CLARITY_API_BASE}/projects/${CLARITY_PROJECT_ID}/heatmaps?url=${encodeURIComponent(pageUrl)}`,
    {
      headers: {
        Authorization: `Bearer ${CLARITY_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error(`Clarity API error: ${response.statusText}`);
  }

  return response.json();
}
