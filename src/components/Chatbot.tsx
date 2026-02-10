"use client";

import { Message } from "ai";
import { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { MessageCircle, X, Send, Loader2, Bot, User, Mail, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { createLead } from "@/lib/actions";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ChatStep = 'chat' | 'lead-form' | 'lead-success';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<ChatStep>('chat');
  const scrollRef = useRef<HTMLDivElement>(null);
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat();
  
  // Lead form state
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Check if last message indicates offerte interest
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage?.role === 'user') {
      const content = lastMessage.content.toLowerCase();
      if (content.includes('offerte') || content.includes('prijs') || content.includes('kost')) {
        // Auto-suggest lead form after bot responds
        const timer = setTimeout(() => {
          if (step === 'chat') {
            // Don't auto-switch, but we could show a suggestion
          }
        }, 2000);
        return () => clearTimeout(timer);
      }
    }
  }, [messages, step]);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData();
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('name', name);
    formData.append('message', `Chat lead: ${messages.map(m => m.content).join('\n')}`);
    formData.append('source', 'chatbot-offerte');

    try {
      const result = await createLead(null, formData);
      if (result.success) {
        setStep('lead-success');
        setTimeout(() => {
          setStep('chat');
          setEmail('');
          setPhone('');
          setName('');
        }, 5000);
      } else {
        setSubmitError(result.message || 'Er ging iets mis.');
      }
    } catch {
      setSubmitError('Kan geen verbinding maken met de server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderChatContent = () => {
    if (step === 'lead-form') {
      return (
        <div className="p-4 space-y-4">
          <div className="text-center mb-4">
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Mail className="h-6 w-6 text-secondary" />
              </div>
            </div>
            <h3 className="text-white font-bold">Gratis offerte aanvragen</h3>
            <p className="text-gray-400 text-sm mt-1">
              Vul uw gegevens in en we nemen binnen 24 uur contact op.
            </p>
          </div>
          
          <form onSubmit={handleLeadSubmit} className="space-y-3">
            <div>
              <label className="text-xs text-gray-400 block mb-1">Naam</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Uw naam"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-secondary"
                required
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="uw@email.be"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-secondary"
                required
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1">Telefoon</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+32 4XX XX XX XX"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-secondary"
                required
              />
            </div>
            
            {submitError && (
              <div className="text-xs text-red-400 bg-red-500/10 p-2 rounded">
                {submitError}
              </div>
            )}
            
            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setStep('chat')}
                className="flex-1 py-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terug
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-secondary text-white py-2 rounded-lg text-sm font-semibold hover:bg-secondary/80 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Versturen...' : 'Verstuur'}
              </button>
            </div>
          </form>
        </div>
      );
    }

    if (step === 'lead-success') {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center p-4">
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
          <h3 className="text-white font-bold text-lg mb-2">Bedankt!</h3>
          <p className="text-gray-400 text-sm">
            We hebben uw aanvraag ontvangen. U hoort binnen 24 uur van ons.
          </p>
        </div>
      );
    }

    return (
      <>
        {/* Messages Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-2 opacity-50">
              <Bot className="h-10 w-10" />
              <p className="text-sm">Hallo! Ik ben de Yannova assistent. Hoe kan ik u vandaag helpen met uw bouwproject?</p>
            </div>
          )}
          {messages.map((m: Message) => (
            <div
              key={m.id}
              className={cn(
                "flex w-max max-w-[80%] flex-col gap-1 rounded-2xl px-4 py-2 text-sm",
                m.role === "user" 
                  ? "ml-auto bg-secondary text-white rounded-tr-none" 
                  : "bg-white/5 text-gray-200 rounded-tl-none border border-white/10"
              )}
            >
              <div className="flex items-center gap-2 mb-1">
                {m.role === "user" ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3 text-secondary" />}
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-50">
                  {m.role === "user" ? "U" : "Yannova"}
                </span>
              </div>
              {m.content}
            </div>
          ))}
          {isLoading && (
            <div className="flex w-max max-w-[80%] flex-col gap-1 rounded-2xl bg-white/5 px-4 py-2 text-sm text-gray-200 rounded-tl-none border border-white/10">
              <div className="flex items-center gap-2 mb-1">
                <Bot className="h-3 w-3 text-secondary" />
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-50">Yannova</span>
              </div>
              <Loader2 className="h-4 w-4 animate-spin opacity-50" />
            </div>
          )}
          {error && (
            <div className="rounded-lg bg-red-500/10 p-3 text-xs text-red-400 border border-red-500/20">
              Er is een fout opgetreden. Probeer het later opnieuw.
            </div>
          )}
        </div>

        {/* Offerte Button */}
        {messages.length > 0 && (
          <div className="px-4 pb-2">
            <button
              onClick={() => setStep('lead-form')}
              className="w-full bg-secondary/20 border border-secondary/30 text-secondary text-sm py-2 rounded-lg hover:bg-secondary/30 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Vraag gratis offerte aan
            </button>
          </div>
        )}

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="border-t border-white/10 p-4 bg-white/5">
          <div className="flex gap-2">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Stel uw vraag..."
              className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </>
    );
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white shadow-2xl transition-transform hover:scale-110 active:scale-95"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-background shadow-2xl sm:w-[400px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-secondary p-4 text-white">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Kimberly</h3>
                  <p className="text-[10px] opacity-80">Yannova Assistent</p>
                </div>
              </div>
              <button onClick={() => { setIsOpen(false); setStep('chat'); }} className="rounded-full p-1 hover:bg-white/10">
                <X className="h-5 w-5" />
              </button>
            </div>

            {renderChatContent()}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
