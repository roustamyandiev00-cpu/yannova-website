"use client";
'use client';

import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

type Step = 'welcome' | 'form' | 'success';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>('welcome');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setStep('welcome');
      setErrorMsg('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject: 'Chat bericht',
          message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Er is iets misgegaan');
      }

      setStep('success');
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : 'Er is een fout opgetreden');
    } finally {
      setIsSubmitting(false);
    }
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
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c10] shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-secondary/20 to-secondary/10 p-4">
              <div>
                <h3 className="font-bold text-white">Yannova Chat</h3>
                <p className="text-xs text-gray-400">We reageren binnen 24 uur</p>
              </div>
              <button
                onClick={toggleChat}
                className="rounded-full p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="h-96 overflow-y-auto p-4">
              {step === 'welcome' && (
                <div className="flex h-full flex-col justify-center text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                      <MessageSquare className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">Hoe kunnen we helpen?</h3>
                  <p className="mb-6 text-sm text-gray-400">
                    Stel uw vraag en we nemen zo snel mogelijk contact met u op.
                  </p>
                  <button
                    onClick={() => setStep('form')}
                    className="rounded-lg bg-secondary py-2.5 text-sm font-bold text-white transition-colors hover:bg-secondary/90"
                  >
                    Start gesprek
                  </button>
                </div>
              )}

              {step === 'form' && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-gray-400">
                      Naam *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Uw naam"
                      className="w-full rounded-lg border border-white/10 p-3 text-sm text-white placeholder-gray-500 focus:border-secondary focus:ring-1 focus:ring-secondary bg-white/5"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-gray-400">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Uw e-mailadres"
                      className="w-full rounded-lg border border-white/10 p-3 text-sm text-white placeholder-gray-500 focus:border-secondary focus:ring-1 focus:ring-secondary bg-white/5"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-gray-400">
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Uw telefoonnummer"
                      className="w-full rounded-lg border border-white/10 p-3 text-sm text-white placeholder-gray-500 focus:border-secondary focus:ring-1 focus:ring-secondary bg-white/5"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-gray-400">
                      Bericht *
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Waarmee kunnen we u helpen?"
                      rows={4}
                      className="w-full rounded-lg border border-white/10 p-3 text-sm text-white placeholder-gray-500 focus:border-secondary focus:ring-1 focus:ring-secondary bg-white/5 resize-none"
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

                  <button
                    type="button"
                    onClick={() => setStep('welcome')}
                    className="mt-2 w-full text-center text-xs text-gray-400 hover:text-white hover:underline"
                  >
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
                  <button
                    onClick={() => {
                      setStep('welcome');
                      setName('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="mt-6 text-sm text-secondary hover:underline"
                  >
                    Nieuw bericht
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
