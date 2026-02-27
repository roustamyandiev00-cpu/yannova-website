'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User } from 'lucide-react';
import { createLead } from '@/lib/actions';
import { AnimatePresence, motion } from 'framer-motion';
import { db } from '@/lib/firebase';
import { 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  where, 
  orderBy, 
  serverTimestamp,
  Timestamp,
  DocumentData
} from 'firebase/firestore';
import { logChatOpened, logChatMessageSent, logLeadSubmitted } from '@/components/FirebaseAnalytics';
import { useChatAutomation } from '@/hooks/use-chat-automation';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'admin';
  timestamp: Timestamp;
  email?: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'welcome' | 'email' | 'chat' | 'form' | 'success'>('welcome');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatSessionId, setChatSessionId] = useState<string | null>(null);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Chat automation hook
  const { sendAutoReply } = useChatAutomation(chatSessionId, email);

  // Generate or retrieve session ID
  useEffect(() => {
    const storedSessionId = localStorage.getItem('yannova_chat_session_id');
    const storedEmail = localStorage.getItem('yannova_chat_email');
    
    if (storedSessionId && storedEmail) {
      setChatSessionId(storedSessionId);
      setEmail(storedEmail);
      setStep('chat');
    }
  }, []);

  // Subscribe to messages when in chat mode
  useEffect(() => {
    if (!chatSessionId || step !== 'chat') return;

    const messagesRef = collection(db, 'chatMessages');
    const q = query(
      messagesRef, 
      where('sessionId', '==', chatSessionId),
      orderBy('timestamp', 'asc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs: Message[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data() as DocumentData;
        msgs.push({
          id: doc.id,
          text: data.text,
          sender: data.sender,
          timestamp: data.timestamp as Timestamp,
          email: data.email,
        });
      });
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [chatSessionId, step]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => {
    if (!isOpen) {
      logChatOpened();
    }
    setIsOpen(!isOpen);
  };

  const handleStartChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    
    try {
      // Create a new chat session
      const sessionsRef = collection(db, 'chatSessions');
      const sessionDoc = await addDoc(sessionsRef, {
        email: email,
        status: 'active',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      const newSessionId = sessionDoc.id;
      setChatSessionId(newSessionId);
      
      // Store in localStorage for persistence
      localStorage.setItem('yannova_chat_session_id', newSessionId);
      localStorage.setItem('yannova_chat_email', email);

      // Send welcome message
      const messagesRef = collection(db, 'chatMessages');
      await addDoc(messagesRef, {
        sessionId: newSessionId,
        text: 'Hallo! 👋 Welkom bij Yannova. Waarmee kan ik u helpen vandaag?',
        sender: 'admin',
        email: email,
        timestamp: serverTimestamp(),
      });

      // Send initial user message if provided
      if (message.trim()) {
        await addDoc(messagesRef, {
          sessionId: newSessionId,
          text: message,
          sender: 'user',
          email: email,
          timestamp: serverTimestamp(),
        });
      }

      logChatMessageSent();
      setStep('chat');
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error starting chat:', error);
      setErrorMsg('Kan chat niet starten. Probeer het later opnieuw.');
      setIsSubmitting(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || !chatSessionId) return;

    try {
      const messagesRef = collection(db, 'chatMessages');
      await addDoc(messagesRef, {
        sessionId: chatSessionId,
        text: inputMessage,
        sender: 'user',
        email: email,
        timestamp: serverTimestamp(),
      });

      // Update session timestamp
      const { doc: firestoreDoc, updateDoc } = await import('firebase/firestore');
      const sessionRef = firestoreDoc(db, 'chatSessions', chatSessionId);
      await updateDoc(sessionRef, {
        updatedAt: serverTimestamp(),
      });

      setInputMessage('');
      logChatMessageSent();

      // Trigger auto reply after user message
      setTimeout(() => {
        sendAutoReply(inputMessage);
      }, 1000);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    const formData = new FormData();
    formData.append('message', message);
    formData.append('email', email);
    formData.append('source', 'chatbot');

    try {
      const result = await createLead(null, formData);

      if (result.success) {
        logLeadSubmitted('chatbot_form');
        setStep('success');
        setTimeout(() => {
          setIsOpen(false);
          setStep('welcome');
          setMessage('');
          setEmail('');
          setErrorMsg(null);
        }, 5000);
      } else {
        setErrorMsg(result.message || 'Er ging iets mis.');
      }
    } catch {
      setErrorMsg('Kan geen verbinding maken met de server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white shadow-lg shadow-secondary/30 transition-all hover:scale-105 hover:bg-secondary/90"
        aria-label="Chat openen"
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
            className="fixed bottom-24 right-6 z-50 w-[350px] overflow-hidden rounded-2xl border border-border bg-background shadow-2xl sm:w-[380px]"
          >
            {/* Header */}
            <div className="bg-secondary p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Yannova Support</h3>
                  <p className="text-xs text-white/80">We antwoorden meestal binnen 1 uur</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 h-[350px] flex flex-col overflow-y-auto bg-background/50">
              {step === 'welcome' && (
                <div className="space-y-4">
                  <div className="mr-8 rounded-2xl rounded-tl-none bg-white/10 p-3 text-sm text-gray-200">
                    Hallo! 👋 Welkom bij Yannova. Waarmee kan ik u helpen vandaag?
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => { setMessage("Ik wil graag een offerte voor ramen/deuren."); setStep('email'); }}
                      className="text-left text-sm p-3 rounded-xl bg-white/5 border border-white/10 hover:border-secondary hover:text-secondary transition-colors shadow-sm"
                    >
                      Ik wil graag een offerte voor ramen/deuren.
                    </button>
                    <button
                      onClick={() => { setMessage("Ik heb een vraag over gevelrenovatie."); setStep('email'); }}
                      className="text-left text-sm p-3 rounded-xl bg-white/5 border border-white/10 hover:border-secondary hover:text-secondary transition-colors shadow-sm"
                    >
                      Ik heb een vraag over gevelrenovatie.
                    </button>
                    <button
                      onClick={() => { setMessage(""); setStep('email'); }}
                      className="text-left text-sm p-3 rounded-xl bg-white/5 border border-white/10 hover:border-secondary hover:text-secondary transition-colors shadow-sm"
                    >
                      Stel een andere vraag...
                    </button>
                  </div>
                </div>
              )}

              {step === 'email' && (
                <form onSubmit={handleStartChat} className="flex flex-col h-full">
                  <div className="mr-8 rounded-2xl rounded-tl-none bg-white/10 p-3 text-sm text-gray-200 mb-4">
                    {message ? `Vraag: ${message}` : 'Waarmee kunnen we u helpen?'}
                  </div>
                  <div className="mr-8 rounded-2xl rounded-tl-none bg-white/10 p-3 text-sm text-gray-200 mb-4">
                    Laat uw e-mailadres achter om de chat te starten. Uw gesprek wordt bewaard voor latere referentie.
                  </div>

                  <div className="flex-1 space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Uw e-mailadres"
                      className="w-full rounded-lg border border-white/10 p-3 text-sm text-white placeholder-gray-500 focus:border-secondary focus:ring-1 focus:ring-secondary bg-white/5"
                      required
                    />
                  </div>

                  {errorMsg && (
                    <div className="mt-2 text-xs text-red-400 bg-red-500/10 p-2 rounded">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-secondary py-2.5 text-sm font-bold text-white transition-colors hover:bg-secondary/90 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Chat starten...' : (
                      <>Start Chat <Send className="h-4 w-4" /></>
                    )}
                  </button>

                  <button type="button" onClick={() => setStep('welcome')} className="mt-2 text-xs text-center text-gray-400 hover:text-white hover:underline">
                    Terug
                  </button>
                </form>
              )}

              {step === 'chat' && (
                <div className="flex flex-col h-full">
                  <div className="flex-1 space-y-3 overflow-y-auto pr-1">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                            msg.sender === 'user'
                              ? 'rounded-tr-none bg-secondary text-white'
                              : 'rounded-tl-none bg-white/10 text-gray-200'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>

                  <form onSubmit={handleSendMessage} className="mt-3 flex gap-2">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Typ uw bericht..."
                      className="flex-1 rounded-lg border border-white/10 p-2.5 text-sm text-white placeholder-gray-500 focus:border-secondary focus:ring-1 focus:ring-secondary bg-white/5"
                    />
                    <button
                      type="submit"
                      disabled={!inputMessage.trim()}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-white transition-colors hover:bg-secondary/90 disabled:opacity-50"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              )}

              {step === 'form' && (
                <form onSubmit={handleSubmitLead} className="flex flex-col h-full">
                  <div className="mr-8 rounded-2xl rounded-tl-none bg-white/10 p-3 text-sm text-gray-200 mb-4">
                    Laat uw bericht en e-mailadres achter, dan nemen we zo snel mogelijk contact op!
                  </div>

                  <div className="flex-1 space-y-3">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Uw vraag of bericht..."
                      className="w-full rounded-lg border border-white/10 p-3 text-sm text-white placeholder-gray-500 focus:border-secondary focus:ring-1 focus:ring-secondary min-h-[80px] resize-none bg-white/5"
                      required
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Uw e-mailadres"
                      className="w-full rounded-lg border border-white/10 p-3 text-sm text-white placeholder-gray-500 focus:border-secondary focus:ring-1 focus:ring-secondary bg-white/5"
                      required
                    />
                  </div>

                  {errorMsg && (
                    <div className="mt-2 text-xs text-red-400 bg-red-500/10 p-2 rounded">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-secondary py-2.5 text-sm font-bold text-white transition-colors hover:bg-secondary/90 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Versturen...' : (
                      <>Verstuur Bericht <Send className="h-4 w-4" /></>
                    )}
                  </button>

                  <button type="button" onClick={() => setStep('welcome')} className="mt-2 text-xs text-center text-gray-400 hover:text-white hover:underline">
                    Terug
                  </button>
                </form>
              )}

              {step === 'success' && (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                    <Send className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Bedankt!</h3>
                  <p className="mt-2 text-sm text-gray-300">
                    We hebben uw bericht ontvangen. We nemen spoedig contact met u op via {email}.
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-white/5 p-2 text-center text-[10px] text-gray-400 border-t border-white/10">
              Powered by Yannova
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
