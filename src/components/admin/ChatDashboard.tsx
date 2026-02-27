'use client';

import { useState, useEffect, useMemo } from 'react';
import { db } from '@/lib/firebase';
import { 
  collection, 
  onSnapshot, 
  query, 
  where, 
  orderBy, 
  updateDoc,
  doc,
  addDoc,
  serverTimestamp,
  Timestamp,
  DocumentData
} from 'firebase/firestore';
import { MessageCircle, Mail, Clock, CheckCircle, X, Send, User, Search, Filter } from 'lucide-react';

interface ChatSession {
  id: string;
  email: string;
  status: 'active' | 'closed';
  createdAt: Timestamp;
  updatedAt: Timestamp;
  unreadCount?: number;
}

interface ChatMessage {
  id: string;
  sessionId: string;
  text: string;
  sender: 'user' | 'admin';
  email: string;
  timestamp: Timestamp;
  read?: boolean;
}

export function ChatDashboard() {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [selectedSession, setSelectedSession] = useState<ChatSession | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [replyText, setReplyText] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'closed'>('all');

  // Subscribe to chat sessions
  useEffect(() => {
    const sessionsRef = collection(db, 'chatSessions');
    const q = query(sessionsRef, orderBy('updatedAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const sessionsData: ChatSession[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data() as DocumentData;
        sessionsData.push({
          id: doc.id,
          email: data.email,
          status: data.status,
          createdAt: data.createdAt as Timestamp,
          updatedAt: data.updatedAt as Timestamp,
        });
      });
      setSessions(sessionsData);
    });

    return () => unsubscribe();
  }, []);

  // Subscribe to messages for selected session
  useEffect(() => {
    if (!selectedSession) return;

    const messagesRef = collection(db, 'chatMessages');
    const q = query(
      messagesRef,
      where('sessionId', '==', selectedSession.id),
      orderBy('timestamp', 'asc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData: ChatMessage[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data() as DocumentData;
        messagesData.push({
          id: doc.id,
          sessionId: data.sessionId,
          text: data.text,
          sender: data.sender,
          email: data.email,
          timestamp: data.timestamp as Timestamp,
          read: data.read,
        });
      });
      setMessages(messagesData);
    }, (error) => {
      console.error('Messages subscription error:', error);
      setMessages([]);
    });

    return () => unsubscribe();
  }, [selectedSession]);

  const handleSendReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedSession) return;

    try {
      const messagesRef = collection(db, 'chatMessages');
      await addDoc(messagesRef, {
        sessionId: selectedSession.id,
        text: replyText,
        sender: 'admin',
        email: 'admin@yannova.be',
        timestamp: serverTimestamp(),
        read: true,
      });

      // Update session timestamp
      const sessionRef = doc(db, 'chatSessions', selectedSession.id);
      await updateDoc(sessionRef, {
        updatedAt: serverTimestamp(),
      });

      setReplyText('');
    } catch (error) {
      console.error('Error sending reply:', error);
    }
  };

  const handleCloseSession = async () => {
    if (!selectedSession) return;

    try {
      const sessionRef = doc(db, 'chatSessions', selectedSession.id);
      await updateDoc(sessionRef, {
        status: 'closed',
        updatedAt: serverTimestamp(),
      });
      setSelectedSession(null);
    } catch (error) {
      console.error('Error closing session:', error);
    }
  };

  const filteredSessions = sessions.filter((session) => {
    if (filter === 'all') return true;
    return session.status === filter;
  });

  const formatTime = (timestamp: Timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    return date.toLocaleTimeString('nl-BE', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (timestamp: Timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    return date.toLocaleDateString('nl-BE', { day: 'numeric', month: 'short' });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
      {/* Sessions List */}
      <div className="bg-card rounded-xl border border-white/10 overflow-hidden flex flex-col">
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle className="h-5 w-5 text-secondary" />
            <h2 className="font-semibold">Chat Sessies</h2>
            <span className="ml-auto text-sm text-gray-400">
              {sessions.filter(s => s.status === 'active').length} actief
            </span>
          </div>
          <div className="flex gap-2">
            {(['all', 'active', 'closed'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 text-xs rounded-full transition-colors ${
                  filter === f
                    ? 'bg-secondary text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {f === 'all' ? 'Alle' : f === 'active' ? 'Actief' : 'Gesloten'}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredSessions.length === 0 ? (
            <div className="p-8 text-center text-gray-400">
              <MessageCircle className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p>Geen chat sessies gevonden</p>
            </div>
          ) : (
            <div className="divide-y divide-white/5">
              {filteredSessions.map((session) => (
                <button
                  key={session.id}
                  onClick={() => setSelectedSession(session)}
                  className={`w-full p-4 text-left transition-colors hover:bg-white/5 ${
                    selectedSession?.id === session.id ? 'bg-white/10' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <User className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{session.email}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          session.status === 'active'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {session.status === 'active' ? 'Actief' : 'Gesloten'}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {formatDate(session.updatedAt)}
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

      {/* Chat Messages */}
      <div className="lg:col-span-2 bg-card rounded-xl border border-white/10 overflow-hidden flex flex-col">
        {selectedSession ? (
          <>
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium">{selectedSession.email}</p>
                  <p className="text-xs text-gray-400">
                    Gestart op {formatDate(selectedSession.createdAt)}
                  </p>
                </div>
              </div>
              {selectedSession.status === 'active' && (
                <button
                  onClick={handleCloseSession}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                >
                  <X className="h-4 w-4" />
                  Sluiten
                </button>
              )}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="text-center text-gray-400 py-8">
                  <p>Nog geen berichten in deze sessie</p>
                </div>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-3 ${
                        msg.sender === 'admin'
                          ? 'bg-secondary text-white rounded-tr-none'
                          : 'bg-white/10 text-gray-200 rounded-tl-none'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className={`text-xs mt-1 ${
                        msg.sender === 'admin' ? 'text-white/60' : 'text-gray-500'
                      }`}>
                        {formatTime(msg.timestamp)}
                        {msg.sender === 'admin' && (
                          <CheckCircle className="h-3 w-3 inline ml-1" />
                        )}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Reply Input */}
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
                    disabled={!replyText.trim()}
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
