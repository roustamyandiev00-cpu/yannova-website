'use client';

import { useState, useEffect } from 'react';
import { getArchivedSessions, restoreArchivedSession, getChatStatistics } from '@/lib/chat-archive';
import { Archive, Search, Calendar, Tag, RefreshCw, MessageSquare, Star, CheckCircle, X } from 'lucide-react';

interface ArchivedSession {
  id: string;
  email: string;
  status: 'archived';
  createdAt: { toDate: () => Date };
  updatedAt: { toDate: () => Date };
  archivedAt: { toDate: () => Date };
  archivedBy: string;
  messageCount: number;
  tags?: string[];
  notes?: string;
  rating?: number;
  leadConverted?: boolean;
}

export function ChatArchiveDashboard() {
  const [sessions, setSessions] = useState<ArchivedSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    loadSessions();
    loadStats();
  }, []);

  const loadSessions = async () => {
    const result = await getArchivedSessions();
    if (result.success) {
      setSessions(result.sessions || []);
    }
    setLoading(false);
  };

  const loadStats = async () => {
    const result = await getChatStatistics('month');
    if (result.success) {
      setStats(result.stats);
    }
  };

  const handleRestore = async (sessionId: string) => {
    if (!confirm('Weet u zeker dat u dit gesprek wilt herstellen?')) return;
    
    const result = await restoreArchivedSession(sessionId);
    if (result.success) {
      loadSessions();
    }
  };

  const filteredSessions = sessions.filter(session => {
    const matchesSearch = session.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => session.tags?.includes(tag));
    return matchesSearch && matchesTags;
  });

  const allTags = [...new Set(sessions.flatMap(s => s.tags || []))];

  const formatDate = (timestamp: { toDate: () => Date }) => {
    if (!timestamp) return '';
    return timestamp.toDate().toLocaleDateString('nl-BE', { 
      day: 'numeric', 
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      {stats && (
        <div className="grid gap-4 sm:grid-cols-4">
          <div className="rounded-xl bg-card p-4 border border-white/10">
            <p className="text-sm text-gray-400">Totaal Gesprekken</p>
            <p className="text-2xl font-bold">{stats.totalSessions}</p>
          </div>
          <div className="rounded-xl bg-card p-4 border border-white/10">
            <p className="text-sm text-gray-400">Actieve Chats</p>
            <p className="text-2xl font-bold text-green-400">{stats.activeSessions}</p>
          </div>
          <div className="rounded-xl bg-card p-4 border border-white/10">
            <p className="text-sm text-gray-400">Gem. Berichten</p>
            <p className="text-2xl font-bold">{stats.avgMessagesPerSession}</p>
          </div>
          <div className="rounded-xl bg-card p-4 border border-white/10">
            <p className="text-sm text-gray-400">Conversie</p>
            <p className="text-2xl font-bold text-secondary">{stats.conversionRate}%</p>
          </div>
        </div>
      )}

      {/* Search and Filters */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Zoek op e-mail..."
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:border-secondary"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10"
        >
          <Tag className="h-4 w-4" />
          Filters
        </button>
      </div>

      {/* Tags Filter */}
      {showFilters && allTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => {
                if (selectedTags.includes(tag)) {
                  setSelectedTags(selectedTags.filter(t => t !== tag));
                } else {
                  setSelectedTags([...selectedTags, tag]);
                }
              }}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                selectedTags.includes(tag)
                  ? 'bg-secondary text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Sessions Table */}
      <div className="rounded-xl bg-card border border-white/10 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-400">
            <RefreshCw className="h-8 w-8 mx-auto mb-3 animate-spin" />
            <p>Laden...</p>
          </div>
        ) : filteredSessions.length === 0 ? (
          <div className="p-8 text-center text-gray-400">
            <Archive className="h-12 w-12 mx-auto mb-3 opacity-30" />
            <p>Geen gearchiveerde gesprekken gevonden</p>
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="text-left p-4 text-sm font-medium text-gray-300">E-mail</th>
                <th className="text-left p-4 text-sm font-medium text-gray-300">Datum</th>
                <th className="text-left p-4 text-sm font-medium text-gray-300">Berichten</th>
                <th className="text-left p-4 text-sm font-medium text-gray-300">Tags</th>
                <th className="text-left p-4 text-sm font-medium text-gray-300">Acties</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredSessions.map((session) => (
                <tr key={session.id} className="hover:bg-white/5">
                  <td className="p-4">
                    <p className="text-sm font-medium">{session.email}</p>
                    {session.leadConverted && (
                      <span className="inline-flex items-center gap-1 text-xs text-green-400">
                        <CheckCircle className="h-3 w-3" />
                        Lead
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-sm text-gray-400">
                    {formatDate(session.archivedAt)}
                  </td>
                  <td className="p-4">
                    <span className="flex items-center gap-1 text-sm">
                      <MessageSquare className="h-4 w-4 text-gray-400" />
                      {session.messageCount}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-1">
                      {session.tags?.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs rounded-full bg-secondary/20 text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      {session.rating && (
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="text-sm">{session.rating}</span>
                        </div>
                      )}
                      <button
                        onClick={() => handleRestore(session.id)}
                        className="px-3 py-1 text-xs rounded-lg bg-secondary/20 text-secondary hover:bg-secondary/30"
                      >
                        Herstellen
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
