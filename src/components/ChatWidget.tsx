"use client";
'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User as UserIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import type { ChatMessage } from '@/lib/supabase';

type Step = 'welcome' | 'chat';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>('welcome');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [initialMessage, setInitialMessage] = useState('');
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAiTyping, setIsAiTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    'Wat kosten nieuwe ramen ongeveer?',
    'Heb ik recht op premies voor ramen en deuren?',
    'Wat is beter: PVC of aluminium voor mijn woning?',
  ];

  const STORAGE_KEY = 'yannovaChatSessionId';

  // Restore existing chat session if available
  useEffect(() => {
    try {
      const storedSessionId = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
      if (storedSessionId) {
        setSessionId(storedSessionId);
        setStep('chat');
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Subscribe to realtime messages
  useEffect(() => {
    if (!sessionId) return;

    // Fetch existing messages
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('session_id', sessionId)
        .order('created_at', { ascending: true });

      if (data && !error) {
        setMessages(data);
      }
    };

    fetchMessages();

    // Subscribe to new messages
    const channel = supabase
      .channel(`chat:${sessionId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `session_id=eq.${sessionId}`,
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new as ChatMessage]);
          if ((payload.new as ChatMessage).sender === 'ai') {
            setIsAiTyping(false);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [sessionId]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const endChatAndReset = async () => {
    if (sessionId) {
      try {
        await supabase
          .from('chat_sessions')
          .update({ status: 'closed' })
          .eq('id', sessionId);
      } catch {
        // Non-blocking: als sluiten faalt, gewoon lokaal resetten
      }
    }

    try {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // Ignore storage errors
    }

    setSessionId(null);
    setMessages([]);
    setStep('welcome');
    setInputMessage('');
    setInitialMessage('');
  };

  const startChat = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create chat session
      const { data: session, error: sessionError } = await supabase
        .from('chat_sessions')
        .insert({
          email,
          name,
          phone,
          status: 'active',
        })
        .select()
        .single();

      if (sessionError) throw sessionError;

      setSessionId(session.id);
      try {
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(STORAGE_KEY, session.id);
        }
      } catch {
        // Ignore storage errors
      }

      // Send welcome message from AI
      const { error: welcomeError } = await supabase
        .from('chat_messages')
        .insert({
          session_id: session.id,
          text: `Hallo ${name}! 👋 Welkom bij Yannova. Ik ben je AI assistent. Waarmee kan ik je helpen vandaag?`,
          sender: 'ai',
        });

      if (welcomeError) throw welcomeError;

      // Send initial user message if provided
      if (initialMessage.trim()) {
        await sendMessage(initialMessage, session.id);
      }

      setStep('chat');
    } catch (error) {
      console.error('Error starting chat:', error);
      alert('Er is een fout opgetreden. Probeer het opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendMessage = async (text: string, sid?: string) => {
    const currentSessionId = sid || sessionId;
    if (!currentSessionId || !text.trim()) return;

    try {
      // Save user message
      const { error: messageError } = await supabase
        .from('chat_messages')
        .insert({
          session_id: currentSessionId,
          text: text.trim(),
          sender: 'user',
          email,
        });

      if (messageError) throw messageError;

      setInputMessage('');
      setIsAiTyping(true);

      // Get AI response
      const response = await fetch('/api/chat/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text.trim(),
          sessionId: currentSessionId,
        }),
      });

      if (!response.ok) {
        throw new Error('AI response failed');
      }

      // AI response is automatically added via realtime subscription
    } catch (error) {
      console.error('Error sending message:', error);
      setIsAiTyping(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isAiTyping) return;
    await sendMessage(inputMessage);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        aria-label="Open chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 flex h-[600px] w-96 max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c10] shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-linear-to-r from-secondary/20 to-secondary/10 p-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Yannova AI Chat</h3>
                  <p className="text-xs text-gray-400">Direct advies over ramen, deuren en renovatie</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="rounded-full p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden">
              {step === 'welcome' && (
                <div className="flex h-full flex-col justify-center p-6">
                  <div className="mb-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                        <Bot className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-white">Chat met onze AI</h3>
                    <p className="text-sm text-gray-400">
                      Stel je vraag over ramen, deuren of renovatie en krijg direct antwoord!
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      U krijgt binnen enkele seconden een eerste reactie. Voor een offerte vragen we later je gegevens.
                    </p>
                  </div>

                  <form onSubmit={startChat} className="space-y-3">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Uw naam *"
                      className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white placeholder-gray-500 focus:border-secondary focus:ring-1 focus:ring-secondary"
                      required
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Uw e-mail *"
                      className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white placeholder-gray-500 focus:border-secondary focus:ring-1 focus:ring-secondary"
                      required
                    />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Uw telefoon (optioneel)"
                      className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white placeholder-gray-500 focus:border-secondary focus:ring-1 focus:ring-secondary"
                    />
                    <textarea
                      value={initialMessage}
                      onChange={(e) => setInitialMessage(e.target.value)}
                      placeholder="Uw vraag (optioneel)"
                      rows={3}
                      className="w-full resize-none rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white placeholder-gray-500 focus:border-secondary focus:ring-1 focus:ring-secondary"
                    />
                    <div className="space-y-2">
                      <p className="text-xs text-gray-500">Of kies een voorbeeldvraag:</p>
                      <div className="flex flex-wrap gap-2">
                        {quickQuestions.map((q) => (
                          <button
                            key={q}
                            type="button"
                            onClick={() => setInitialMessage(q)}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200 hover:bg-white/10"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-lg bg-secondary py-2.5 text-sm font-bold text-white transition-colors hover:bg-secondary/90 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Starten...' : 'Start Chat'}
                    </button>
                  </form>
                </div>
              )}

              {step === 'chat' && (
                <>
                  {/* Messages */}
                  <div className="h-[calc(100%-60px)] overflow-y-auto p-4 space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex gap-2 ${
                          msg.sender === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        {msg.sender !== 'user' && (
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                            <Bot className="h-4 w-4" />
                          </div>
                        )}
                        <div
                          className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
                            msg.sender === 'user'
                              ? 'bg-secondary text-white'
                              : 'bg-white/5 text-gray-200'
                          }`}
                        >
                          {msg.text}
                        </div>
                        {msg.sender === 'user' && (
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                            <UserIcon className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                    ))}
                    {isAiTyping && (
                      <div className="flex gap-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                          <Bot className="h-4 w-4" />
                        </div>
                        <div className="rounded-2xl bg-white/5 px-4 py-2">
                          <div className="flex gap-1">
                            <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '0ms' }} />
                            <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '150ms' }} />
                            <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: '300ms' }} />
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input */}
                  <form onSubmit={handleSendMessage} className="border-t border-white/10 p-3 space-y-2">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Typ uw bericht..."
                        className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-secondary focus:ring-1 focus:ring-secondary"
                        disabled={isAiTyping}
                      />
                      <button
                        type="submit"
                        disabled={!inputMessage.trim() || isAiTyping}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-white transition-colors hover:bg-secondary/90 disabled:opacity-50"
                      >
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] text-gray-500">
                        Antwoorden door AI. Voor een offerte nemen we persoonlijk contact op.
                      </p>
                      <button
                        type="button"
                        onClick={endChatAndReset}
                        className="text-[10px] text-gray-400 hover:text-gray-200 underline-offset-2 hover:underline"
                      >
                        Nieuw gesprek
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
