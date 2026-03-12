/**
 * Microsoft Clarity API Client
 * Documentation: https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-data-export-api
 */

const CLARITY_API_BASE = 'https://www.clarity.ms/export-data/api/v1';
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

type ClarityApiValue = string | number | null | undefined;
type ClarityApiRow = Record<string, ClarityApiValue>;

interface ClarityApiMetric {
  metricName?: string;
  information?: ClarityApiRow[];
}

function getNumOfDays(startDate?: string, endDate?: string) {
  if (!startDate || !endDate) return 3;

  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffMs = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffMs / (24 * 60 * 60 * 1000));

  return Math.min(Math.max(diffDays || 1, 1), 3);
}

function toNumber(value: ClarityApiValue) {
  if (typeof value === 'number') return Number.isFinite(value) ? value : 0;
  if (typeof value === 'string') {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
}

function getStringValue(row: ClarityApiRow, keys: string[]) {
  for (const key of keys) {
    const value = row[key];
    if (typeof value === 'string' && value.trim()) {
      return value;
    }
  }

  return '';
}

function getNumberValue(row: ClarityApiRow, keys: string[]) {
  for (const key of keys) {
    const rawValue = row[key];
    if (rawValue === undefined || rawValue === null || rawValue === '') {
      continue;
    }

    const value = toNumber(rawValue);
    if (Number.isFinite(value)) {
      return value;
    }
  }

  return 0;
}

function normalizeMetricName(name?: string) {
  return (name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function getMetric(metrics: ClarityApiMetric[], name: string) {
  const target = normalizeMetricName(name);
  return metrics.find((metric) => normalizeMetricName(metric.metricName) === target);
}

function getAverageSessionDurationMs(
  engagementRow: ClarityApiRow,
  totalSessions: number
) {
  const averageDuration = getNumberValue(engagementRow, [
    'averageEngagementTime',
    'avgEngagementTime',
    'averageTime',
    'time',
    'engagementTime',
  ]);

  if (averageDuration > 0) {
    return averageDuration;
  }

  const totalTimeSeconds = getNumberValue(engagementRow, ['totalTime', 'activeTime']);
  if (totalTimeSeconds > 0 && totalSessions > 0) {
    return Math.round((totalTimeSeconds / totalSessions) * 1000);
  }

  return 0;
}

async function fetchClarityInsights(params: URLSearchParams) {
  if (!CLARITY_API_TOKEN || !CLARITY_PROJECT_ID) {
    throw new Error('Clarity API credentials not configured');
  }

  const response = await fetch(
    `${CLARITY_API_BASE}/project-live-insights?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${CLARITY_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      throw new Error(
        'Clarity API token rejected by Microsoft. Generate a new Data Export API token in Clarity and update CLARITY_API_TOKEN.'
      );
    }

    throw new Error(`Clarity API error: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as ClarityApiMetric[];
}

/**
 * Fetch raw insights from Clarity Data Export API.
 * Kept under the old function name to avoid wider refactors.
 */
export async function getClaritySessions(
  startDate?: string,
  endDate?: string
): Promise<ClaritySession[]> {
  const params = new URLSearchParams({
    numOfDays: String(getNumOfDays(startDate, endDate)),
    dimension1: 'URL',
  });

  const metrics = await fetchClarityInsights(params);
  const rows =
    getMetric(metrics, 'Popular Pages')?.information ||
    getMetric(metrics, 'Traffic')?.information ||
    [];

  return rows.map((row, index) => ({
    sessionId: String(index + 1),
    url: getStringValue(row, ['URL', 'Url', 'url']),
    startTime: '',
    endTime: '',
    pages: getNumberValue(row, [
      'totalPageViews',
      'pageViews',
      'views',
      'visitsCount',
      'count',
      'sessionsCount',
      'totalSessionCount',
    ]),
    duration: 0,
    device: getStringValue(row, ['Device', 'device']),
    browser: getStringValue(row, ['Browser', 'browser']),
    country: getStringValue(row, ['Country/Region', 'Country', 'country']),
  }));
}

/**
 * Get aggregated metrics from Clarity
 */
export async function getClarityMetrics(
  startDate?: string,
  endDate?: string
): Promise<ClarityMetrics> {
  const numOfDays = getNumOfDays(startDate, endDate);
  const [overallMetrics, urlMetrics] = await Promise.all([
    fetchClarityInsights(
      new URLSearchParams({
        numOfDays: String(numOfDays),
      }),
    ),
    fetchClarityInsights(
      new URLSearchParams({
        numOfDays: String(numOfDays),
        dimension1: 'URL',
      }),
    ),
  ]);

  const trafficRow = getMetric(overallMetrics, 'Traffic')?.information?.[0] ?? {};
  const engagementRow = getMetric(overallMetrics, 'Engagement Time')?.information?.[0] ?? {};
  const popularPageRows =
    getMetric(urlMetrics, 'Popular Pages')?.information ||
    getMetric(urlMetrics, 'Traffic')?.information ||
    [];

  const totalSessions = getNumberValue(trafficRow, [
    'totalSessionCount',
    'totalSessions',
    'sessionCount',
    'sessions',
  ]);

  const topPages = popularPageRows
    .map((row) => ({
      url: getStringValue(row, ['URL', 'Url', 'url']),
      views: getNumberValue(row, [
        'totalPageViews',
        'pageViews',
        'views',
        'visitsCount',
        'count',
        'sessionsCount',
        'totalSessionCount',
      ]),
    }))
    .filter((row) => row.url && row.views > 0)
    .sort((a, b) => b.views - a.views)
    .slice(0, 10);

  const totalPageViews =
    getNumberValue(trafficRow, ['totalPageViews', 'pageViews', 'pageCount', 'totalPageCount']) ||
    topPages.reduce((sum, page) => sum + page.views, 0);

  const avgSessionDuration = getAverageSessionDurationMs(engagementRow, totalSessions);

  const bounceRate = getNumberValue(trafficRow, ['bounceRate', 'bouncePercentage']);

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
  const metrics = await fetchClarityInsights(
    new URLSearchParams({
      numOfDays: '1',
      dimension1: 'URL',
    }),
  );

  const pages =
    getMetric(metrics, 'Popular Pages')?.information ||
    getMetric(metrics, 'Traffic')?.information ||
    [];

  return pages.find((row) => getStringValue(row, ['URL', 'Url', 'url']) === pageUrl) ?? null;
}
