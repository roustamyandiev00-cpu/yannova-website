import { Metadata } from 'next';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import {
  Archive,
  ArrowUpRight,
  Clock3,
  MessageCircle,
  MessageSquareText,
  ShieldCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Chat Analytics | Yannova Admin',
  description: 'Overzicht van live chat sessies en berichten',
};

interface ChatSessionRow {
  id: string;
  email: string;
  name?: string;
  status: 'active' | 'archived' | 'closed';
  created_at: string;
  updated_at: string;
}

async function getChatAnalytics() {
  const [activeSessions, closedSessions, archivedSessions, totalMessages, recentSessions] =
    await Promise.all([
      supabase
        .from('chat_sessions')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'active'),
      supabase
        .from('chat_sessions')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'closed'),
      supabase
        .from('chat_sessions')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'archived'),
      supabase.from('chat_messages').select('*', { count: 'exact', head: true }),
      supabase
        .from('chat_sessions')
        .select('id,email,name,status,created_at,updated_at')
        .order('updated_at', { ascending: false })
        .limit(8),
    ]);

  const errors = [
    activeSessions.error,
    closedSessions.error,
    archivedSessions.error,
    totalMessages.error,
    recentSessions.error,
  ].filter(Boolean);

  return {
    activeCount: activeSessions.count ?? 0,
    closedCount: closedSessions.count ?? 0,
    archivedCount: archivedSessions.count ?? 0,
    messageCount: totalMessages.count ?? 0,
    recentSessions: (recentSessions.data as ChatSessionRow[] | null) ?? [],
    errorMessage: errors.length > 0 ? 'Chatdata kon niet volledig geladen worden.' : null,
  };
}

function formatDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return 'Onbekend';

  return date.toLocaleString('nl-BE', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function StatCard({
  label,
  value,
  icon: Icon,
  accent,
}: {
  label: string;
  value: number;
  icon: React.ElementType;
  accent: string;
}) {
  return (
    <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-gray-400">{label}</p>
          <p className="mt-2 text-3xl font-bold text-white">{value}</p>
        </div>
        <div className={`rounded-lg p-3 ${accent}`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );
}

export default async function ChatAnalyticsPage() {
  const { activeCount, closedCount, archivedCount, messageCount, recentSessions, errorMessage } =
    await getChatAnalytics();

  return (
    <main className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Chat Analytics</h1>
          <p className="mt-1 text-sm text-gray-400">
            Snelle health check van live chat sessies, archief en berichtenvolume.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/admin/chat"
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary/80"
          >
            Open Live Chat
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="/admin/chat-archief"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-white/5"
          >
            Open Archief
          </Link>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Actieve sessies"
          value={activeCount}
          icon={MessageCircle}
          accent="bg-green-500"
        />
        <StatCard
          label="Gesloten sessies"
          value={closedCount}
          icon={ShieldCheck}
          accent="bg-blue-500"
        />
        <StatCard
          label="Archief"
          value={archivedCount}
          icon={Archive}
          accent="bg-gray-600"
        />
        <StatCard
          label="Berichten totaal"
          value={messageCount}
          icon={MessageSquareText}
          accent="bg-secondary"
        />
      </div>

      <section className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-white">Recent bijgewerkte chats</h2>
            <p className="mt-1 text-sm text-gray-400">
              Laatste sessies op basis van bijgewerkte timestamp.
            </p>
          </div>
          <Clock3 className="h-5 w-5 text-gray-400" />
        </div>

        {errorMessage && (
          <div className="mb-4 rounded-lg border border-orange-500/20 bg-orange-500/10 px-4 py-3 text-sm text-orange-300">
            {errorMessage}
          </div>
        )}

        {recentSessions.length === 0 ? (
          <div className="rounded-lg border border-dashed border-white/10 px-6 py-10 text-center text-sm text-gray-400">
            Geen chat sessies gevonden.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                    Klant
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                    Laatste update
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {recentSessions.map((session) => (
                  <tr key={session.id} className="hover:bg-white/5">
                    <td className="px-4 py-4">
                      <div className="text-sm font-medium text-white">
                        {session.name || session.email}
                      </div>
                      <div className="text-xs text-gray-400">{session.email}</div>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                          session.status === 'active'
                            ? 'bg-green-500/20 text-green-400'
                            : session.status === 'archived'
                              ? 'bg-gray-500/20 text-gray-300'
                              : 'bg-blue-500/20 text-blue-300'
                        }`}
                      >
                        {session.status === 'active'
                          ? 'Actief'
                          : session.status === 'archived'
                            ? 'Gearchiveerd'
                            : 'Gesloten'}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-300">
                      {formatDate(session.updated_at)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
