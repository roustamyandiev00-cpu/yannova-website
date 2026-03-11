"use client";
'use client';

import { useEffect, useState } from 'react';

interface ClarityMetrics {
  totalSessions: number;
  totalPageViews: number;
  avgSessionDuration: number;
  bounceRate: number;
  topPages: Array<{ url: string; views: number }>;
}

export function ClarityDashboard() {
  const [metrics, setMetrics] = useState<ClarityMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMetrics() {
      try {
        const response = await fetch('/api/clarity/metrics');
        if (!response.ok) throw new Error('Failed to fetch metrics');
        const data = await response.json();
        setMetrics(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    fetchMetrics();
  }, []);

  if (loading) {
    return (
      <div className="p-6 bg-gray-900 rounded-lg">
        <p className="text-gray-400">Loading analytics...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-900/20 border border-red-500 rounded-lg">
        <p className="text-red-400">Error: {error}</p>
      </div>
    );
  }

  if (!metrics) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Microsoft Clarity Analytics</h2>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Sessions"
          value={metrics.totalSessions.toLocaleString()}
          icon="👥"
        />
        <MetricCard
          title="Page Views"
          value={metrics.totalPageViews.toLocaleString()}
          icon="📄"
        />
        <MetricCard
          title="Avg. Duration"
          value={`${Math.round(metrics.avgSessionDuration / 1000)}s`}
          icon="⏱️"
        />
        <MetricCard
          title="Bounce Rate"
          value={`${metrics.bounceRate.toFixed(1)}%`}
          icon="📊"
        />
      </div>

      {/* Top Pages */}
      <div className="bg-gray-900 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Top Pages</h3>
        <div className="space-y-2">
          {metrics.topPages.map((page, index) => (
            <div
              key={page.url}
              className="flex items-center justify-between p-3 bg-gray-800 rounded"
            >
              <div className="flex items-center gap-3">
                <span className="text-gray-400 font-mono text-sm">
                  #{index + 1}
                </span>
                <span className="text-white truncate max-w-md">{page.url}</span>
              </div>
              <span className="text-blue-400 font-semibold">
                {page.views} views
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, icon }: { title: string; value: string; icon: string }) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-400 text-sm">{title}</span>
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-3xl font-bold text-white">{value}</p>
    </div>
  );
}
