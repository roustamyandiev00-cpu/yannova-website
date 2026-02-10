'use client';

import { useState } from 'react';
import { saveSeoPage, deleteSeoPage, runSeoAudit, generateAiSeo } from '@/lib/actions';
import { Globe, AlertCircle, CheckCircle, AlertTriangle, Trash2, Plus, Edit3, FileSearch, Map, Eye, Facebook, Search, Sparkles, Loader2 } from 'lucide-react';
// Image import removed since it was unused

export interface SeoPageType {
  id: string;
  path: string;
  title: string;
  description: string;
  keywords: string | null;
  ogImage: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  canonicalUrl: string | null;
  h1: string | null;
  noindex: boolean;
  nofollow: boolean;
  updatedAt: Date;
}

export interface SeoAuditItemType {
  id: string;
  path: string;
  issue: string;
  severity: string;
  message: string;
  fixed: boolean;
}

export default function SeoClientPage({ pages, audits }: { pages: SeoPageType[]; audits: SeoAuditItemType[] }) {
  const [showForm, setShowForm] = useState(false);
  const [editingPage, setEditingPage] = useState<SeoPageType | null>(null);
  const [message, setMessage] = useState('');
  const [previewTab, setPreviewTab] = useState<'google' | 'social'>('google');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateAi = async () => {
    if (!editingPage?.path) return;

    setIsGenerating(true);
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('path', editingPage.path);
      // Use title as pageName if available, otherwise just path
      formData.append('pageName', editingPage.title || editingPage.path);

      const result = await generateAiSeo(null, formData);

      if (result.success && result.data) {
        setEditingPage(prev => ({
          ...prev!,
          title: result.data.title || prev?.title || '',
          description: result.data.description || prev?.description || '',
          keywords: result.data.keywords || prev?.keywords || '',
          h1: result.data.h1 || prev?.h1 || '',
          ogTitle: result.data.ogTitle || prev?.ogTitle || '',
          ogDescription: result.data.ogDescription || prev?.ogDescription || '',
        }));
        setMessage('✨ AI heeft succesvol metadata gegenereerd!');
      } else {
        setMessage('AI Generatie mislukt: ' + (result.error || 'Onbekende fout'));
      }
    } catch (error) {
      console.error('AI Error:', error);
      setMessage('Er ging iets mis met de AI generatie.');
    } finally {
      setIsGenerating(false);
    }
  };

  // Hardcoded routes for now - could be dynamic in future
  const routes = [
    { path: '/', name: 'Homepage' },
    { path: '/diensten', name: 'Diensten' },
    { path: '/projecten', name: 'Projecten' },
    { path: '/over-ons', name: 'Over Ons' },
    { path: '/advies', name: 'Advies' },
    { path: '/premie-gids', name: 'Premie Gids' },
    { path: '/contact', name: 'Contact' },
  ];

  const handleEdit = (page: SeoPageType) => {
    setEditingPage(page);
    setShowForm(true);
  };

  const handleNew = (path: string = '/') => {
    setEditingPage({
      id: '',
      path,
      title: '',
      description: '',
      keywords: '',
      ogImage: '',
      ogTitle: '',
      ogDescription: '',
      canonicalUrl: '',
      h1: '',
      noindex: false,
      nofollow: false,
      updatedAt: new Date(),
    });
    setShowForm(true);
  };

  const handleDelete = async (path: string) => {
    if (confirm('Weet je zeker dat je deze SEO pagina wilt verwijderen?')) {
      const result = await deleteSeoPage(path);
      if (result.success) {
        window.location.reload();
      } else {
        setMessage(result.message || 'Er is iets misgegaan');
      }
    }
  };

  const runAudit = async () => {
    const result = await runSeoAudit();
    if (result.success) {
      window.location.reload();
    } else {
      setMessage(result.message || 'Audit mislukt');
    }
  };

  const getTitleLengthColor = (length: number) => {
    if (length === 0) return 'text-gray-500';
    if (length >= 50 && length <= 60) return 'text-green-400';
    return 'text-yellow-400';
  };

  const getDescriptionLengthColor = (length: number) => {
    if (length === 0) return 'text-gray-500';
    if (length >= 150 && length <= 160) return 'text-green-400';
    return 'text-yellow-400';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">SEO Beheer</h1>
        <div className="flex gap-2">
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-foreground hover:bg-white/20"
          >
            <Map className="h-4 w-4" />
            Sitemap
          </a>
          <button
            onClick={runAudit}
            className="flex items-center gap-2 rounded-md bg-secondary/20 px-4 py-2 text-sm font-medium text-secondary hover:bg-secondary/30"
          >
            <FileSearch className="h-4 w-4" />
            SEO Audit
          </button>
          <button
            onClick={() => handleNew()}
            className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium text-white hover:bg-secondary/80"
          >
            <Plus className="h-4 w-4" />
            Nieuwe Pagina
          </button>
        </div>
      </div>

      {message && (
        <div className="rounded-md bg-secondary/20 p-4 text-sm text-secondary">
          {message}
        </div>
      )}

      {/* SEO Audit Issues */}
      {audits && audits.length > 0 && (
        <div className="rounded-xl bg-card ring-1 ring-white/10 p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-yellow-500" />
            SEO Issues ({audits.length})
          </h2>
          <div className="space-y-2">
            {audits.map((audit) => (
              <div
                key={audit.id}
                className="flex items-center justify-between rounded-lg bg-white/5 p-3"
              >
                <div className="flex items-center gap-3">
                  {audit.severity === 'error' ? (
                    <AlertCircle className="h-4 w-4 text-red-400" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-yellow-400" />
                  )}
                  <div>
                    <p className="text-sm font-medium text-foreground">{audit.path}</p>
                    <p className="text-xs text-gray-400">{audit.message}</p>
                  </div>
                </div>
                {!audit.fixed && (
                  <button
                    onClick={() => handleEdit(pages.find(p => p.path === audit.path) || { path: audit.path } as SeoPageType)}
                    className="text-sm text-secondary hover:underline"
                  >
                    Fix
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pages Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {routes.map((route) => {
          const page = pages ? pages.find((p) => p.path === route.path) : undefined;
          return (
            <div
              key={route.path}
              className="rounded-xl bg-card ring-1 ring-white/10 p-6 hover:ring-secondary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-secondary/20 p-2">
                    <Globe className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{route.name}</h3>
                    <p className="text-xs text-gray-400">{route.path}</p>
                  </div>
                </div>
                {page && (
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleEdit(page)}
                      className="rounded-md p-1 hover:bg-white/10 text-gray-400 hover:text-secondary"
                    >
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(page.path)}
                      className="rounded-md p-1 hover:bg-white/10 text-gray-400 hover:text-red-400"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>

              {page ? (
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Titel: {page.title.slice(0, 30)}...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Beschrijving: {page.description.slice(0, 30)}...</span>
                  </div>
                  {page.h1 && (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-gray-300">H1: {page.h1.slice(0, 30)}</span>
                    </div>
                  )}
                  {page.noindex && (
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-yellow-400" />
                      <span className="text-yellow-400">Noindex</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-sm text-gray-400 mb-3">Geen SEO data ingesteld</p>
                  <button
                    onClick={() => handleNew(route.path)}
                    className="text-sm text-secondary hover:underline"
                  >
                    + SEO toevoegen
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Edit Modal */}
      {showForm && editingPage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-xl bg-card ring-1 ring-white/10 shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
              {/* Form Section */}
              <div className="p-6 lg:border-r border-white/10 overflow-y-auto max-h-[85vh]">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">
                    {editingPage.id ? 'SEO Bewerken' : 'SEO Toevoegen'}
                  </h2>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleGenerateAi}
                      disabled={isGenerating || !editingPage.path}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isGenerating ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Sparkles className="h-4 w-4" />
                      )}
                      Genereer met AI
                    </button>
                    <button
                      onClick={() => setShowForm(false)}
                      className="lg:hidden text-gray-400 hover:text-white ml-2"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                <form
                  action={async (formData) => {
                    const result = await saveSeoPage(formData);
                    if (result.success) {
                      window.location.reload();
                    } else {
                      setMessage(result.message || 'Opslaan mislukt');
                    }
                  }}
                  className="space-y-4"
                >
                  <input type="hidden" name="path" value={editingPage.path} />

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Pagina Pad
                    </label>
                    <input
                      type="text"
                      name="path" // Added name attribute so it's submitted if needed, though hidden input handles it generally. This is mostly for display/readonly.
                      value={editingPage.path}
                      readOnly
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1 flex justify-between">
                      <span>Meta Titel *</span>
                      <span className={`text-xs ${getTitleLengthColor(editingPage.title.length)}`}>
                        {editingPage.title.length} / 60
                      </span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={editingPage.title}
                      onChange={(e) => setEditingPage({ ...editingPage, title: e.target.value })}
                      maxLength={70}
                      required
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                      placeholder="Yannova Bouw - Specialist in ramen en deuren"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1 flex justify-between">
                      <span>Meta Beschrijving *</span>
                      <span className={`text-xs ${getDescriptionLengthColor(editingPage.description.length)}`}>
                        {editingPage.description.length} / 160
                      </span>
                    </label>
                    <textarea
                      name="description"
                      value={editingPage.description}
                      onChange={(e) => setEditingPage({ ...editingPage, description: e.target.value })}
                      maxLength={170}
                      required
                      rows={3}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                      placeholder="Specialist in ramen, deuren en renovatie in regio Zoersel..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Keywords <span className="text-xs text-gray-500">(komma gescheiden)</span>
                    </label>
                    <input
                      type="text"
                      name="keywords"
                      value={editingPage.keywords || ''}
                      onChange={(e) => setEditingPage({ ...editingPage, keywords: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                      placeholder="ramen, deuren, renovatie, zoersel"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      H1 Tag <span className="text-xs text-gray-500">(Hoofdtitel op de pagina)</span>
                    </label>
                    <input
                      type="text"
                      name="h1"
                      value={editingPage.h1 || ''}
                      onChange={(e) => setEditingPage({ ...editingPage, h1: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                      placeholder="Specialist in Ramen en Deuren in Zoersel"
                    />
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h3 className="text-sm font-bold text-white mb-3">Social Media (Open Graph)</h3>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">
                          OG Titel
                        </label>
                        <input
                          type="text"
                          name="ogTitle"
                          value={editingPage.ogTitle || ''}
                          onChange={(e) => setEditingPage({ ...editingPage, ogTitle: e.target.value })}
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                          placeholder="Zelfde als meta titel indien leeg"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">
                          OG Beschrijving
                        </label>
                        <textarea
                          name="ogDescription"
                          value={editingPage.ogDescription || ''}
                          onChange={(e) => setEditingPage({ ...editingPage, ogDescription: e.target.value })}
                          rows={2}
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                          placeholder="Zelfde als meta beschrijving indien leeg"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">
                          OG Afbeelding URL
                        </label>
                        <input
                          type="url"
                          name="ogImage"
                          value={editingPage.ogImage || ''}
                          onChange={(e) => setEditingPage({ ...editingPage, ogImage: e.target.value })}
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                          placeholder="https://..."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Canonical URL
                    </label>
                    <input
                      type="url"
                      name="canonicalUrl"
                      value={editingPage.canonicalUrl || ''}
                      onChange={(e) => setEditingPage({ ...editingPage, canonicalUrl: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                      placeholder="https://www.yannova.be/..."
                    />
                  </div>

                  <div className="flex gap-4 pt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="noindex"
                        checked={editingPage.noindex}
                        onChange={(e) => setEditingPage({ ...editingPage, noindex: e.target.checked })}
                        className="rounded border-white/10 bg-white/5 text-secondary focus:ring-secondary"
                      />
                      <span className="text-sm text-gray-300">Noindex</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="nofollow"
                        checked={editingPage.nofollow}
                        onChange={(e) => setEditingPage({ ...editingPage, nofollow: e.target.checked })}
                        className="rounded border-white/10 bg-white/5 text-secondary focus:ring-secondary"
                      />
                      <span className="text-sm text-gray-300">Nofollow</span>
                    </label>
                  </div>

                  <div className="flex justify-end gap-3 pt-6 sticky bottom-0 bg-card py-4 border-t border-white/5">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="rounded-md px-4 py-2 text-sm font-medium text-gray-300 hover:text-white"
                    >
                      Annuleren
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-secondary px-6 py-2 text-sm font-medium text-white hover:bg-secondary/80 shadow-lg shadow-secondary/20 transition-all hover:scale-105"
                    >
                      Opslaan
                    </button>
                  </div>
                </form>
              </div>

              {/* Preview Section */}
              <div className="hidden lg:flex flex-col bg-black/20 p-6 border-l border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Eye className="h-5 w-5 text-secondary" />
                    Live Preview
                  </h3>
                  <div className="flex bg-white/5 p-1 rounded-lg">
                    <button
                      onClick={() => setPreviewTab('google')}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${previewTab === 'google' ? 'bg-secondary text-white shadow-sm' : 'text-gray-400 hover:text-white'
                        }`}
                    >
                      <Search className="h-3 w-3" />
                      Google
                    </button>
                    <button
                      onClick={() => setPreviewTab('social')}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${previewTab === 'social' ? 'bg-[#1877F2] text-white shadow-sm' : 'text-gray-400 hover:text-white'
                        }`}
                    >
                      <Facebook className="h-3 w-3" />
                      Social
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                  {previewTab === 'google' ? (
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                          Y
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-[#202124] leading-tight">Yannova Bouw</span>
                          <span className="text-xs text-[#4d5156] leading-tight">https://www.yannova.be{editingPage.path}</span>
                        </div>
                      </div>
                      <h3 className="text-[#1a0dab] text-xl font-normal hover:underline cursor-pointer truncate">
                        {editingPage.title || 'Pagina Titel'}
                      </h3>
                      <p className="text-[#4d5156] text-sm mt-1 line-clamp-2">
                        {editingPage.description || 'Pagina beschrijving komt hier te staan...'}
                      </p>
                    </div>
                  ) : (
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden max-w-sm mx-auto shadow-sm">
                      {editingPage.ogImage ? (
                        <div className="relative h-48 w-full bg-gray-100">
                          <img
                            src={editingPage.ogImage}
                            alt="Preview"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=Preview';
                            }}
                          />
                        </div>
                      ) : (
                        <div className="h-48 w-full bg-gray-100 flex items-center justify-center text-gray-400">
                          <ImageIcon className="h-10 w-10" />
                        </div>
                      )}
                      <div className="p-3 bg-[#f0f2f5] border-t border-gray-200">
                        <div className="uppercase text-xs text-gray-500 font-medium mb-1 truncate">
                          YANNOVA.BE
                        </div>
                        <div className="text-gray-900 font-bold leading-tight mb-1 line-clamp-2">
                          {editingPage.ogTitle || editingPage.title || 'Pagina Titel'}
                        </div>
                        <div className="text-gray-600 text-sm line-clamp-1">
                          {editingPage.ogDescription || editingPage.description || 'Pagina beschrijving...'}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-8 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20 text-sm text-yellow-200">
                    <strong className="block mb-1 text-yellow-400">SEO Tips:</strong>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-gray-300">
                      <li>Houd de titel tussen 50-60 tekens.</li>
                      <li>Houd de beschrijving tussen 150-160 tekens.</li>
                      <li>Gebruik unieke titels en beschrijvingen voor elke pagina.</li>
                      <li>Zorg dat je belangrijkste zoekwoord in de titel staat.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ImageIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}
