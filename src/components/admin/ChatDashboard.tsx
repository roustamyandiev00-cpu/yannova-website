"use client";
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { ChatSession, ChatMessage } from '@/lib/supabase';
import {
  MessageCircle,
  Mail,
  Clock,
  X,
  Send,
  User,
  CheckCircle,
  RefreshCw,
} from 'lucide-react';

type SessionFilter = 'all' | 'active' | 'closed' | 'archived';

export function ChatDashboard() {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [loadingSessions, setLoadingSessions] = useState(true);
  const [selectedSession, setSelectedSession] = useState<ChatSession | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [replyText, setReplyText] = useState('');
  const [sendingReply, setSendingReply] = useState(false);
  const [filter, setFilter] = useState<SessionFilter>('active');

  const loadSessions = async () => {
    setLoadingSessions(true);
    const { data, error } = await supabase
      .from('chat_sessions')
      .select('id,email,name,phone,status,created_at,updated_at')
      .order('updated_at', { ascending: false })
      .limit(100);

    if (!error && data) {
      setSessions(data);
      if (selectedSession) {
        const stillExists = data.find((s) => s.id === selectedSession.id);
        if (!stillExists) {
          setSelectedSession(null);
          setMessages([]);
        }
      }
    } else {
      console.error('Error loading chat sessions', error);
    }
    setLoadingSessions(false);
  };

  useEffect(() => {
    loadSessions();
  }, []);

  useEffect(() => {
    if (!selectedSession) {
      setMessages([]);
      return;
    }

    let isCancelled = false;

    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('id,session_id,text,sender,email,created_at')
        .eq('session_id', selectedSession.id)
        .order('created_at', { ascending: true });

      if (!error && data && !isCancelled) {
        setMessages(data);
      } else if (error) {
        console.error('Error loading chat messages', error);
      }
    };

    fetchMessages();

    const channel = supabase
      .channel(`admin-chat:${selectedSession.id}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `session_id=eq.${selectedSession.id}`,
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new as ChatMessage]);
        },
      )
      .subscribe();

    return () => {
      isCancelled = true;
      supabase.removeChannel(channel);
    };
  }, [selectedSession]);

  const handleSendReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedSession) return;

    setSendingReply(true);
    try {
      const { error } = await supabase.from('chat_messages').insert({
        session_id: selectedSession.id,
        text: replyText.trim(),
        sender: 'admin',
      });

      if (error) {
        console.error('Error sending admin reply', error);
      } else {
        setReplyText('');
      }
    } finally {
      setSendingReply(false);
    }
  };

  const handleChangeStatus = async (status: ChatSession['status']) => {
    if (!selectedSession) return;

    const { error } = await supabase
      .from('chat_sessions')
      .update({ status })
      .eq('id', selectedSession.id);

    if (error) {
      console.error('Error updating session status', error);
      return;
    }

    setSessions((prev) =>
      prev.map((s) => (s.id === selectedSession.id ? { ...s, status } : s)),
    );
    setSelectedSession((prev) => (prev ? { ...prev, status } : prev));
  };

  const filteredSessions = sessions.filter((session) => {
    if (filter === 'all') return true;
    return session.status === filter;
  });

  const activeCount = sessions.filter((s) => s.status === 'active').length;

  const formatTime = (iso: string) => {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return '';
    return date.toLocaleTimeString('nl-BE', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (iso: string) => {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return '';
    return date.toLocaleDateString('nl-BE', { day: 'numeric', month: 'short' });
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 h-[calc(100vh-220px)]">
      <div className="bg-card rounded-xl border border-white/10 overflow-hidden flex flex-col">
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <MessageCircle className="h-5 w-5 text-secondary" />
            <h2 className="font-semibold">Chat Sessies</h2>
            <span className="ml-auto text-sm text-gray-400">
              {activeCount} actief
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-2">
              {(['all', 'active', 'closed', 'archived'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1 text-xs rounded-full transition-colors ${
                    filter === f
                      ? 'bg-secondary text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {f === 'all'
                    ? 'Alle'
                    : f === 'active'
                    ? 'Actief'
                    : f === 'closed'
                    ? 'Gesloten'
                    : 'Gearchiveerd'}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={loadSessions}
              className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-1 text-xs text-gray-300 hover:bg-white/5"
            >
              <RefreshCw className="h-3 w-3" />
              Vernieuw
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {loadingSessions ? (
            <div className="p-8 text-center text-gray-400">
              <RefreshCw className="h-8 w-8 mx-auto mb-3 animate-spin" />
              <p>Chats laden...</p>
            </div>
          ) : filteredSessions.length === 0 ? (
            <div className="p-8 text-center text-gray-400">
              <MessageCircle className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p>Geen chat sessies gevonden</p>
            </div>
          ) : (
            <div className="divide-y divide-white/5">
              {filteredSessions.map((session) => (
                <button
                  key={session.id}
                  type="button"
                  onClick={() => setSelectedSession(session)}
                  className={`w-full p-4 text-left transition-colors hover:bg-white/5 ${
                    selectedSession?.id === session.id ? 'bg-white/10' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <User className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">
                        {session.name || session.email}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {session.email}
                      </p>
                      <div className="mt-1 flex items-center gap-2">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            session.status === 'active'
                              ? 'bg-green-500/20 text-green-400'
                              : session.status === 'archived'
                              ? 'bg-gray-500/20 text-gray-300'
                              : 'bg-gray-500/20 text-gray-400'
                          }`}
                        >
                          {session.status === 'active'
                            ? 'Actief'
                            : session.status === 'archived'
                            ? 'Archief'
                            : 'Gesloten'}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {formatDate(session.updated_at)}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="lg:col-span-2 bg-card rounded-xl border border-white/10 overflow-hidden flex flex-col">
        {selectedSession ? (
          <>
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium">
                    {selectedSession.name || selectedSession.email}
                  </p>
                  <p className="text-xs text-gray-400">
                    {selectedSession.email} • gestart op{' '}
                    {formatDate(selectedSession.created_at)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {selectedSession.status !== 'archived' && (
                  <button
                    type="button"
                    onClick={() => handleChangeStatus('archived')}
                    className="flex items-center gap-1 px-3 py-1.5 text-xs text-gray-200 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    Archiveren
                  </button>
                )}
                {selectedSession.status === 'active' && (
                  <button
                    type="button"
                    onClick={() => handleChangeStatus('closed')}
                    className="flex items-center gap-1 px-3 py-1.5 text-xs text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                  >
                    <X className="h-3 w-3" />
                    Sluiten
                  </button>
                )}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="text-center text-gray-400 py-8">
                  <p>Nog geen berichten in deze sessie</p>
                </div>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === 'admin' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-3 ${
                        msg.sender === 'admin'
                          ? 'bg-secondary text-white rounded-tr-none'
                          : msg.sender === 'ai'
                          ? 'bg-white/10 text-gray-200 rounded-tl-none border border-secondary/40'
                          : 'bg-white/10 text-gray-200 rounded-tl-none'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.sender === 'admin' ? 'text-white/70' : 'text-gray-400'
                        } flex items-center gap-1`}
                      >
                        {formatTime(msg.created_at)}
                        {msg.sender === 'admin' && (
                          <CheckCircle className="h-3 w-3" />
                        )}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {selectedSession.status === 'active' && (
              <form onSubmit={handleSendReply} className="p-4 border-t border-white/10">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Typ uw antwoord..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-secondary"
                  />
                  <button
                    type="submit"
                    disabled={!replyText.trim() || sendingReply}
                    className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/90 disabled:opacity-50 transition-colors"
                  >
                    <Send className="h-4 w-4" />
                    Verstuur
                  </button>
                </div>
              </form>
            )}
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            <div className="text-center">
              <MessageCircle className="h-16 w-16 mx-auto mb-4 opacity-30" />
              <p>Selecteer een chat sessie om te beginnen</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

