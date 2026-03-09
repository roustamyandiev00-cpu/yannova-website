import { prisma } from '@/lib/prisma';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  MousePointerClick, 
  Eye, 
  Target,
  Search,
  BarChart3,
  Award,
  Users,
  Clock,
  Activity
} from 'lucide-react';
import Link from 'next/link';
import AnalyticsDataEntry from '@/components/admin/AnalyticsDataEntry';

// Helper function to calculate percentage change
function calculateChange(current: number, previous: number): number {
  if (previous === 0) return current > 0 ? 100 : 0;
  return ((current - previous) / previous) * 100;
}

// Helper function to format currency
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('nl-BE', { 
    style: 'currency', 
    currency: 'EUR' 
  }).format(amount);
}

// Helper to format time
function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60);
  return `${mins}m ${secs}s`;
}

// Metric Card Component
interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ElementType;
  color: string;
  subtitle?: string;
}

function MetricCard({ title, value, change, icon: Icon, color, subtitle }: MetricCardProps) {
  const isPositive = change !== undefined && change >= 0;
  
  return (
    <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
      <div className="flex items-center justify-between">
        <div className={`rounded-lg p-2 ${color}`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        {change !== undefined && (
          <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
            <span>{Math.abs(change).toFixed(1)}%</span>
          </div>
        )}
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-white mt-1">{value}</p>
        {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}

export default async function AnalyticsPage() {
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const sixtyDaysAgo = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000);

  // Fetch Google Ads data
  const [currentAdsData, previousAdsData] = await Promise.all([
    prisma.googleAdsKeyword.aggregate({
      where: { period: { gte: thirtyDaysAgo } },
      _sum: { impressions: true, clicks: true, conversions: true, cost: true },
      _avg: { ctr: true, conversionRate: true }
    }),
    prisma.googleAdsKeyword.aggregate({
      where: { 
        period: { gte: sixtyDaysAgo, lt: thirtyDaysAgo }
      },
      _sum: { impressions: true, clicks: true, conversions: true, cost: true }
    })
  ]);

  // Top performing keywords
  const topKeywords = await prisma.googleAdsKeyword.groupBy({
    by: ['keyword'],
    where: { period: { gte: thirtyDaysAgo } },
    _sum: { conversions: true, clicks: true, cost: true },
    _avg: { conversionRate: true, ctr: true },
    orderBy: { _sum: { conversions: 'desc' } },
    take: 10
  });

  // SEO Rankings
  const seoRankings = await prisma.seoRanking.findMany({
    where: { period: { gte: thirtyDaysAgo } },
    orderBy: { position: 'asc' },
    take: 10,
    distinct: ['keyword']
  });

  // Performance Metrics
  const performanceMetrics = await prisma.performanceMetric.findMany({
    where: { period: { gte: thirtyDaysAgo } },
    orderBy: { period: 'desc' },
    take: 20
  });

  // Conversion data
  const [currentConversions, previousConversions] = await Promise.all([
    prisma.conversion.count({ where: { createdAt: { gte: thirtyDaysAgo } } }),
    prisma.conversion.count({ 
      where: { 
        createdAt: { gte: sixtyDaysAgo, lt: thirtyDaysAgo }
      }
    })
  ]);

  // Conversion by source
  const conversionsBySource = await prisma.conversion.groupBy({
    by: ['source'],
    where: { createdAt: { gte: thirtyDaysAgo } },
    _count: true,
    orderBy: { _count: { source: 'desc' } }
  });

  // Traffic Analytics (Clarity data)
  const trafficData = await prisma.trafficAnalytics.findMany({
    where: { date: { gte: thirtyDaysAgo } },
    orderBy: { date: 'desc' },
    take: 30
  });

  const totalPageViews = trafficData.reduce((sum, day) => sum + day.pageViews, 0);
  const totalUniqueVisitors = trafficData.reduce((sum, day) => sum + day.uniqueVisitors, 0);
  const avgBounceRate = trafficData.length > 0 
    ? trafficData.reduce((sum, day) => sum + day.bounceRate, 0) / trafficData.length 
    : 0;
  const avgSessionTime = trafficData.length > 0
    ? trafficData.reduce((sum, day) => sum + day.avgSessionTime, 0) / trafficData.length
    : 0;

  // Calculate changes
  const impressionsChange = calculateChange(
    currentAdsData._sum.impressions || 0,
    previousAdsData._sum.impressions || 0
  );
  const clicksChange = calculateChange(
    currentAdsData._sum.clicks || 0,
    previousAdsData._sum.clicks || 0
  );
  const conversionsChange = calculateChange(
    currentConversions,
    previousConversions
  );
  const costChange = calculateChange(
    currentAdsData._sum.cost || 0,
    previousAdsData._sum.cost || 0
  );

  return (
    <main className="space-y-8">
      <AnalyticsDataEntry />
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Analytics Dashboard</h1>
          <p className="text-sm text-gray-400 mt-1">Laatste 30 dagen vs vorige 30 dagen</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="https://clarity.microsoft.com/projects/view/vsu0sqq5xj/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            Clarity Dashboard →
          </Link>
        </div>
      </div>

      {/* Clarity / Traffic Metrics */}
      {trafficData.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Activity className="h-5 w-5 text-blue-400" />
            Website Traffic (Microsoft Clarity)
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              title="Pageviews"
              value={totalPageViews.toLocaleString('nl-BE')}
              icon={Eye}
              color="bg-blue-500"
              subtitle="Laatste 30 dagen"
            />
            <MetricCard
              title="Unieke Bezoekers"
              value={totalUniqueVisitors.toLocaleString('nl-BE')}
              icon={Users}
              color="bg-purple-500"
            />
            <MetricCard
              title="Bounce Rate"
              value={`${avgBounceRate.toFixed(1)}%`}
              icon={TrendingDown}
              color="bg-orange-500"
            />
            <MetricCard
              title="Gem. Sessie Tijd"
              value={formatTime(avgSessionTime)}
              icon={Clock}
              color="bg-green-500"
            />
          </div>
        </section>
      )}

      {/* Google Ads Metrics */}
      {(currentAdsData._sum.impressions || 0) > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-green-400" />
            Google Ads Performance
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              title="Impressies"
              value={(currentAdsData._sum.impressions || 0).toLocaleString('nl-BE')}
              change={impressionsChange}
              icon={Eye}
              color="bg-blue-500"
            />
            <MetricCard
              title="Clicks"
              value={(currentAdsData._sum.clicks || 0).toLocaleString('nl-BE')}
              change={clicksChange}
              icon={MousePointerClick}
              color="bg-purple-500"
              subtitle={`CTR: ${(currentAdsData._avg.ctr || 0).toFixed(2)}%`}
            />
            <MetricCard
              title="Conversies"
              value={currentConversions}
              change={conversionsChange}
              icon={Target}
              color="bg-green-500"
              subtitle={`Rate: ${(currentAdsData._avg.conversionRate || 0).toFixed(2)}%`}
            />
            <MetricCard
              title="Kosten"
              value={formatCurrency(currentAdsData._sum.cost || 0)}
              change={costChange}
              icon={DollarSign}
              color="bg-orange-500"
              subtitle={`CPC: ${formatCurrency((currentAdsData._sum.cost || 0) / (currentAdsData._sum.clicks || 1))}`}
            />
          </div>
        </section>
      )}

      {/* Top Keywords */}
      {topKeywords.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Search className="h-5 w-5 text-yellow-400" />
            Top Presterende Zoekwoorden
          </h2>
          <div className="rounded-xl bg-card shadow-sm ring-1 ring-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Zoekwoord
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Clicks
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Conversies
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                      CTR
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Conv. Rate
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Kosten
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {topKeywords.map((kw, index) => (
                    <tr key={index} className="hover:bg-white/5">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        {kw.keyword}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                        {(kw._sum.clicks || 0).toLocaleString('nl-BE')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                          {kw._sum.conversions || 0}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                        {(kw._avg.ctr || 0).toFixed(2)}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                        {(kw._avg.conversionRate || 0).toFixed(2)}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 text-right">
                        {formatCurrency(kw._sum.cost || 0)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* SEO Rankings & Conversions */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* SEO Rankings */}
        {seoRankings.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-blue-400" />
              SEO Rankings (Top 10)
            </h2>
            <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
              <div className="space-y-3">
                {seoRankings.map((ranking) => (
                  <div key={ranking.id} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{ranking.keyword}</p>
                      <p className="text-xs text-gray-400">{ranking.url}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      {ranking.previousPosition && (
                        <span className={`text-xs ${
                          ranking.position < ranking.previousPosition 
                            ? 'text-green-400' 
                            : 'text-red-400'
                        }`}>
                          {ranking.position < ranking.previousPosition ? '↑' : '↓'}
                          {Math.abs(ranking.position - ranking.previousPosition)}
                        </span>
                      )}
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 text-sm font-bold">
                        {ranking.position}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Conversions by Source */}
        {conversionsBySource.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-purple-400" />
              Conversies per Bron
            </h2>
            <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
              <div className="space-y-4">
                {conversionsBySource.map((source) => {
                  const total = conversionsBySource.reduce((sum, s) => sum + s._count, 0);
                  const percentage = (source._count / total) * 100;
                  
                  return (
                    <div key={source.source}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-white capitalize">
                          {source.source.replace('_', ' ')}
                        </span>
                        <span className="text-sm text-gray-400">
                          {source._count} ({percentage.toFixed(1)}%)
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div
                          className="bg-linear-to-r from-secondary to-blue-500 h-2 rounded-full transition-all"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Performance Improvements */}
      {performanceMetrics.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-400" />
            Recente Verbeteringen
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {performanceMetrics.slice(0, 6).map((metric) => (
              <div key={metric.id} className="rounded-xl bg-card p-4 shadow-sm ring-1 ring-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-400 capitalize">
                    {metric.metric.replace('_', ' ')}
                  </span>
                  {metric.improvement !== null && metric.improvement > 0 && (
                    <span className="text-xs text-green-400 flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      +{metric.improvement.toFixed(1)}%
                    </span>
                  )}
                </div>
                <p className="text-2xl font-bold text-white">{metric.value.toFixed(2)}</p>
                {metric.page && (
                  <p className="text-xs text-gray-500 mt-1">{metric.page}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Empty State */}
      {topKeywords.length === 0 && seoRankings.length === 0 && trafficData.length === 0 && (
        <div className="rounded-xl bg-card p-12 text-center shadow-sm ring-1 ring-white/10">
          <Activity className="h-12 w-12 text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Nog geen analytics data</h3>
          <p className="text-gray-400 mb-6">
            Begin met het toevoegen van data via de + knop rechtsonder, of sync je Clarity data.
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => fetch('/api/analytics/clarity-sync').then(() => window.location.reload())}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sync Clarity Data
            </button>
            <Link
              href="/admin"
              className="px-4 py-2 bg-white/5 text-gray-400 rounded-lg hover:bg-white/10 transition-colors"
            >
              Terug naar Dashboard
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
