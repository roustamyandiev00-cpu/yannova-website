"use client";
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { ChatSession } from '@/lib/supabase';
import { Archive, Search, RefreshCw, MessageSquare } from 'lucide-react';

export function ChatArchiveDashboard() {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const loadSessions = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('chat_sessions')
      .select('id,email,name,status,created_at,updated_at')
      .eq('status', 'archived')
      .order('updated_at', { ascending: false })
      .limit(200);

    if (!error && data) {
      setSessions(data);
    } else {
      console.error('Error loading archived chat sessions', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const t = setTimeout(() => {
      void loadSessions();
    }, 0);
    return () => clearTimeout(t);
  }, []);

  const handleRestore = async (sessionId: string) => {
    if (!window.confirm('Weet u zeker dat u dit gesprek opnieuw actief wilt maken?')) return;

    const { error } = await supabase
      .from('chat_sessions')
      .update({ status: 'active' })
      .eq('id', sessionId);

    if (error) {
      console.error('Error restoring session', error);
      return;
    }

    setSessions((prev) => prev.filter((s) => s.id !== sessionId));
  };

  const filteredSessions = sessions.filter((session) => {
    const haystack = `${session.email} ${session.name || ''}`.toLowerCase();
    return haystack.includes(searchTerm.toLowerCase());
  });

  const formatDate = (iso: string) => {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return '';
    return date.toLocaleDateString('nl-BE', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-lg font-semibold text-foreground">Gearchiveerde gesprekken</h2>
        <span className="text-xs text-gray-400">
          {sessions.length} in archief
        </span>
        <button
          type="button"
          onClick={loadSessions}
          className="ml-auto inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300 hover:bg-white/5"
        >
          <RefreshCw className="h-3 w-3" />
          Vernieuw
        </button>
      </div>

      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Zoek op e-mail of naam..."
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:border-secondary"
          />
        </div>
      </div>

      <div className="rounded-xl bg-card border border-white/10 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-400">
            <RefreshCw className="h-8 w-8 mx-auto mb-3 animate-spin" />
            <p>Archief laden...</p>
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
                <th className="text-left p-4 text-sm font-medium text-gray-300">
                  Klant
                </th>
                <th className="text-left p-4 text-sm font-medium text-gray-300">
                  E-mail
                </th>
                <th className="text-left p-4 text-sm font-medium text-gray-300">
                  Laatst bijgewerkt
                </th>
                <th className="text-left p-4 text-sm font-medium text-gray-300">
                  Acties
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredSessions.map((session) => (
                <tr key={session.id} className="hover:bg-white/5">
                  <td className="p-4 text-sm text-foreground">
                    {session.name || 'Onbekend'}
                  </td>
                  <td className="p-4 text-sm text-gray-300">
                    {session.email}
                  </td>
                  <td className="p-4 text-sm text-gray-400">
                    {formatDate(session.updated_at)}
                  </td>
                  <td className="p-4">
                    <button
                      type="button"
                      onClick={() => handleRestore(session.id)}
                      className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-lg bg-secondary/20 text-secondary hover:bg-secondary/30"
                    >
                      <MessageSquare className="h-3 w-3" />
                      Terug naar actief
                    </button>
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
