import { ClarityDashboard } from '@/components/ClarityDashboard';

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Analytics Dashboard</h1>
          <p className="text-gray-400">
            View your website analytics powered by Microsoft Clarity
          </p>
        </div>
        
        <ClarityDashboard />
        
        <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-2">
            View Full Analytics
          </h3>
          <p className="text-gray-400 mb-4">
            For detailed session recordings, heatmaps, and advanced insights, visit the Clarity dashboard.
          </p>
          <a
            href="https://clarity.microsoft.com/projects/view/vsu0sqq5xj/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Open Clarity Dashboard
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
