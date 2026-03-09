'use client';

import { useState } from 'react';
import { Plus, Save, X } from 'lucide-react';

type DataType = 'google-ads' | 'performance' | 'seo';

export default function AnalyticsDataEntry() {
  const [isOpen, setIsOpen] = useState(false);
  const [dataType, setDataType] = useState<DataType>('google-ads');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Google Ads form
  const [adsData, setAdsData] = useState({
    keyword: '',
    matchType: 'broad',
    impressions: 0,
    clicks: 0,
    conversions: 0,
    cost: 0,
    campaign: '',
    adGroup: ''
  });

  // Performance form
  const [perfData, setPerfData] = useState({
    metric: '',
    value: 0,
    previousValue: 0,
    category: 'seo',
    page: '',
    notes: ''
  });

  // SEO form
  const [seoData, setSeoData] = useState({
    keyword: '',
    position: 1,
    previousPosition: 0,
    url: '',
    searchVolume: 0,
    difficulty: 50
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      let endpoint = '';
      let body = {};

      switch (dataType) {
        case 'google-ads':
          endpoint = '/api/analytics/google-ads';
          // Calculate CTR and conversion rate
          const ctr = adsData.impressions > 0 ? (adsData.clicks / adsData.impressions) * 100 : 0;
          const conversionRate = adsData.clicks > 0 ? (adsData.conversions / adsData.clicks) * 100 : 0;
          const cpc = adsData.clicks > 0 ? adsData.cost / adsData.clicks : 0;
          
          body = {
            keywords: [{
              ...adsData,
              ctr,
              conversionRate,
              cpc,
              period: new Date().toISOString()
            }]
          };
          break;

        case 'performance':
          endpoint = '/api/analytics/performance';
          body = perfData;
          break;

        case 'seo':
          endpoint = '/api/analytics/seo';
          body = {
            rankings: [{
              ...seoData,
              period: new Date().toISOString()
            }]
          };
          break;
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        setMessage('Data succesvol opgeslagen!');
        // Reset form
        setAdsData({
          keyword: '',
          matchType: 'broad',
          impressions: 0,
          clicks: 0,
          conversions: 0,
          cost: 0,
          campaign: '',
          adGroup: ''
        });
        setPerfData({
          metric: '',
          value: 0,
          previousValue: 0,
          category: 'seo',
          page: '',
          notes: ''
        });
        setSeoData({
          keyword: '',
          position: 1,
          previousPosition: 0,
          url: '',
          searchVolume: 0,
          difficulty: 50
        });
        
        setTimeout(() => {
          setIsOpen(false);
          setMessage('');
          window.location.reload();
        }, 1500);
      } else {
        setMessage('Fout bij opslaan van data');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Fout bij opslaan van data');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-secondary text-white p-4 rounded-full shadow-lg hover:bg-secondary/80 transition-colors z-50"
      >
        <Plus className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Analytics Data Toevoegen</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Data Type Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Data Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setDataType('google-ads')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  dataType === 'google-ads'
                    ? 'bg-secondary text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                Google Ads
              </button>
              <button
                type="button"
                onClick={() => setDataType('performance')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  dataType === 'performance'
                    ? 'bg-secondary text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                Performance
              </button>
              <button
                type="button"
                onClick={() => setDataType('seo')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  dataType === 'seo'
                    ? 'bg-secondary text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                SEO Ranking
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Google Ads Form */}
            {dataType === 'google-ads' && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Zoekwoord *
                    </label>
                    <input
                      type="text"
                      required
                      value={adsData.keyword}
                      onChange={(e) => setAdsData({ ...adsData, keyword: e.target.value })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Match Type
                    </label>
                    <select
                      value={adsData.matchType}
                      onChange={(e) => setAdsData({ ...adsData, matchType: e.target.value })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option value="broad">Broad</option>
                      <option value="phrase">Phrase</option>
                      <option value="exact">Exact</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Impressies
                    </label>
                    <input
                      type="number"
                      value={adsData.impressions}
                      onChange={(e) => setAdsData({ ...adsData, impressions: parseInt(e.target.value) || 0 })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Clicks
                    </label>
                    <input
                      type="number"
                      value={adsData.clicks}
                      onChange={(e) => setAdsData({ ...adsData, clicks: parseInt(e.target.value) || 0 })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Conversies
                    </label>
                    <input
                      type="number"
                      value={adsData.conversions}
                      onChange={(e) => setAdsData({ ...adsData, conversions: parseInt(e.target.value) || 0 })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Kosten (€)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={adsData.cost}
                      onChange={(e) => setAdsData({ ...adsData, cost: parseFloat(e.target.value) || 0 })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Campagne
                    </label>
                    <input
                      type="text"
                      value={adsData.campaign}
                      onChange={(e) => setAdsData({ ...adsData, campaign: e.target.value })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Ad Group
                    </label>
                    <input
                      type="text"
                      value={adsData.adGroup}
                      onChange={(e) => setAdsData({ ...adsData, adGroup: e.target.value })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Performance Form */}
            {dataType === 'performance' && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Metric Naam *
                    </label>
                    <input
                      type="text"
                      required
                      value={perfData.metric}
                      onChange={(e) => setPerfData({ ...perfData, metric: e.target.value })}
                      placeholder="bijv. page_speed, conversion_rate"
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Categorie
                    </label>
                    <select
                      value={perfData.category}
                      onChange={(e) => setPerfData({ ...perfData, category: e.target.value })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option value="seo">SEO</option>
                      <option value="performance">Performance</option>
                      <option value="conversion">Conversion</option>
                      <option value="user_experience">User Experience</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Huidige Waarde *
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      required
                      value={perfData.value}
                      onChange={(e) => setPerfData({ ...perfData, value: parseFloat(e.target.value) || 0 })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Vorige Waarde
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={perfData.previousValue}
                      onChange={(e) => setPerfData({ ...perfData, previousValue: parseFloat(e.target.value) || 0 })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Pagina (optioneel)
                  </label>
                  <input
                    type="text"
                    value={perfData.page}
                    onChange={(e) => setPerfData({ ...perfData, page: e.target.value })}
                    placeholder="/diensten/gevelrenovatie"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Notities
                  </label>
                  <textarea
                    value={perfData.notes}
                    onChange={(e) => setPerfData({ ...perfData, notes: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
              </>
            )}

            {/* SEO Form */}
            {dataType === 'seo' && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Zoekwoord *
                    </label>
                    <input
                      type="text"
                      required
                      value={seoData.keyword}
                      onChange={(e) => setSeoData({ ...seoData, keyword: e.target.value })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      URL *
                    </label>
                    <input
                      type="text"
                      required
                      value={seoData.url}
                      onChange={(e) => setSeoData({ ...seoData, url: e.target.value })}
                      placeholder="/diensten/gevelrenovatie"
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Huidige Positie *
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={seoData.position}
                      onChange={(e) => setSeoData({ ...seoData, position: parseInt(e.target.value) || 1 })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Vorige Positie
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={seoData.previousPosition}
                      onChange={(e) => setSeoData({ ...seoData, previousPosition: parseInt(e.target.value) || 0 })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Zoekvolume (maandelijks)
                    </label>
                    <input
                      type="number"
                      value={seoData.searchVolume}
                      onChange={(e) => setSeoData({ ...seoData, searchVolume: parseInt(e.target.value) || 0 })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Moeilijkheidsgraad (1-100)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={seoData.difficulty}
                      onChange={(e) => setSeoData({ ...seoData, difficulty: parseInt(e.target.value) || 50 })}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                </div>
              </>
            )}

            {message && (
              <div className={`p-4 rounded-lg ${
                message.includes('succesvol') 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-red-500/20 text-red-400'
              }`}>
                {message}
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Save className="h-5 w-5" />
                {loading ? 'Opslaan...' : 'Opslaan'}
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 bg-white/5 text-gray-400 rounded-lg hover:bg-white/10 transition-colors"
              >
                Annuleren
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
