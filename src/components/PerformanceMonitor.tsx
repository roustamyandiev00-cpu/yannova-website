"use client";
'use client';

import { useEffect } from 'react';

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Send metrics to analytics
    const sendToAnalytics = (metric: { name: string; value: number; rating?: string }) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
          value: Math.round(metric.value),
          metric_rating: metric.rating,
          event_category: 'Web Vitals',
        });
      }
      
      // Also log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Performance] ${metric.name}:`, Math.round(metric.value), metric.rating);
      }
    };

    // Web Vitals monitoring
    if ('PerformanceObserver' in window) {
      try {
        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number };
          const value = lastEntry.renderTime || lastEntry.loadTime || 0;
          const rating = value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
          sendToAnalytics({ name: 'LCP', value, rating });
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const fidEntry = entry as PerformanceEntry & { processingStart?: number; startTime: number };
            if (fidEntry.processingStart) {
              const value = fidEntry.processingStart - fidEntry.startTime;
              const rating = value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
              sendToAnalytics({ name: 'FID', value, rating });
            }
          });
        });
        fidObserver.observe({ type: 'first-input', buffered: true });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const clsEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
            if (!clsEntry.hadRecentInput && clsEntry.value) {
              clsValue += clsEntry.value;
            }
          }
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });

        // Send CLS on page unload
        window.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'hidden') {
            const rating = clsValue <= 0.1 ? 'good' : clsValue <= 0.25 ? 'needs-improvement' : 'poor';
            sendToAnalytics({ name: 'CLS', value: clsValue, rating });
          }
        });
      } catch {
        // Silently fail if PerformanceObserver is not supported
      }
    }
  }, []);

  return null;
}
