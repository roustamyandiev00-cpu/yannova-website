"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Bot, ExternalLink, RotateCcw, Send, Sparkles, User as UserIcon } from "lucide-react";
import { supabase } from "@/lib/supabase";
import type { ChatMessage } from "@/lib/supabase";

const quickLinks = [
  { title: "Premies", href: "/premie-gids" },
  { title: "Ramen", href: "/ramen" },
  { title: "Ramen & Deuren", href: "/ramen-deuren" },
  { title: "Contact", href: "/contact" },
  { title: "Offerte", href: "/contact" },
];

const introLinks = [
  { title: "Bekijk onze ramen", href: "/ramen" },
  { title: "Bekijk premies", href: "/premie-gids" },
];

const STORAGE_KEY = "yannovaAiShellSessionId";
const VISITOR_NAME = "Vraag AI bezoeker";

function buildVisitorEmail() {
  return `vraag-ai+${Date.now().toString(36)}@chat.yannova.be`;
}

export function AIChatShell() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const loadMessages = async (currentSessionId: string) => {
    const { data, error } = await supabase
      .from("chat_messages")
      .select("id,session_id,text,sender,email,created_at")
      .eq("session_id", currentSessionId)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error loading AI chat messages:", error);
      return;
    }

    setMessages(data ?? []);
  };

  const touchSession = async (currentSessionId: string) => {
    const { error } = await supabase
      .from("chat_sessions")
      .update({ updated_at: new Date().toISOString() })
      .eq("id", currentSessionId);

    if (error) {
      console.error("Error updating AI chat session timestamp:", error);
    }
  };

  const createSession = async (): Promise<string> => {
    const { data, error } = await supabase
      .from("chat_sessions")
      .insert({
        email: buildVisitorEmail(),
        name: VISITOR_NAME,
        status: "active",
      })
      .select("id")
      .single();

    if (error) {
      throw error;
    }

    setSessionId(data.id);

    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, data.id);
      }
    } catch {
      // Ignore storage errors.
    }

    return data.id;
  };

  const resetConversation = async () => {
    if (sessionId) {
      const { error } = await supabase
        .from("chat_sessions")
        .update({ status: "closed", updated_at: new Date().toISOString() })
        .eq("id", sessionId);

      if (error) {
        console.error("Error closing AI chat session:", error);
      }
    }

    try {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // Ignore storage errors.
    }

    setSessionId(null);
    setMessages([]);
    setInput("");
    setErrorMessage(null);
    setIsLoading(false);
  };

  useEffect(() => {
    try {
      const storedSessionId =
        typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;

      if (storedSessionId) {
        setSessionId(storedSessionId);
      }
    } catch {
      // Ignore storage errors.
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (!sessionId) {
      setMessages([]);
      return;
    }

    void loadMessages(sessionId);

    const channel = supabase
      .channel(`vraag-ai:${sessionId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "chat_messages",
          filter: `session_id=eq.${sessionId}`,
        },
        (payload) => {
          const nextMessage = payload.new as ChatMessage;
          setMessages((prev) =>
            prev.some((message) => message.id === nextMessage.id) ? prev : [...prev, nextMessage],
          );

          if (nextMessage.sender !== "user") {
            setIsLoading(false);
          }
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [sessionId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const question = input.trim();

    if (!question || isLoading) return;

    setErrorMessage(null);
    setInput("");
    setIsLoading(true);

    try {
      let currentSessionId = sessionId;

      if (!currentSessionId) {
        currentSessionId = await createSession();
      }

      if (!currentSessionId) {
        throw new Error("Unable to create chat session");
      }

      const { error: userInsertError } = await supabase.from("chat_messages").insert({
        session_id: currentSessionId,
        text: question,
        sender: "user",
      });

      if (userInsertError) {
        throw userInsertError;
      }

      await touchSession(currentSessionId);

      const response = await fetch("/api/chat/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: question,
          sessionId: currentSessionId,
        }),
      });

      const data = (await response.json()) as {
        error?: string;
        response?: string;
        success?: boolean;
      };

      if (!response.ok || !data.success) {
        throw new Error(data.error || "AI response failed");
      }

      await touchSession(currentSessionId);
      await loadMessages(currentSessionId);
      setIsLoading(false);
    } catch (error) {
      console.error("Error sending AI shell message:", error);
      setErrorMessage("De AI-chat kon uw bericht niet verwerken. Probeer opnieuw.");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-[600px] flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/5 px-4 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Yannova AI</h2>
          <p className="text-xs text-gray-400">Gesprekken verschijnen ook in het admin dashboard</p>
        </div>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.length === 0 && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-xl bg-white/10 px-4 py-3 text-gray-200">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-white">
                <Bot className="h-4 w-4 text-secondary" />
                Yannova AI
              </div>
              <p className="text-sm leading-relaxed">
                Hallo! Stel uw vraag over ramen, deuren, premies of renovatie en ik help u verder.
              </p>
              <div className="mt-3 space-y-2 border-t border-white/10 pt-3">
                <p className="text-xs font-medium text-gray-400">Gerelateerde pagina&apos;s:</p>
                <div className="flex flex-wrap gap-2">
                  {introLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-3 py-1.5 text-xs text-secondary transition-colors hover:bg-white/20 hover:text-white"
                    >
                      {link.title}
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-xl px-4 py-3 ${
                message.sender === "user"
                  ? "bg-secondary text-white"
                  : message.sender === "admin"
                    ? "bg-blue-500/20 text-blue-100 border border-blue-400/30"
                    : "bg-white/10 text-gray-200"
              }`}
            >
              {message.sender !== "user" && (
                <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-gray-400">
                  {message.sender === "admin" ? (
                    <>
                      <UserIcon className="h-3 w-3" />
                      Admin
                    </>
                  ) : (
                    <>
                      <Bot className="h-3 w-3 text-secondary" />
                      Yannova AI
                    </>
                  )}
                </div>
              )}
              <p className="text-sm leading-relaxed">{message.text}</p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="rounded-xl bg-white/10 px-4 py-3">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="flex gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
                <span>Aan het denken...</span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-white/10 bg-white/5 px-4 py-2">
        <div className="flex flex-wrap gap-2">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="rounded-lg bg-white/10 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:bg-white/20 hover:text-white"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="border-t border-white/10 p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Stel je vraag over ramen, deuren, premies..."
            className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-colors focus:border-secondary/50 focus:outline-none"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-white transition-colors hover:bg-secondary/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="min-h-[20px] text-xs text-red-400">
            {errorMessage}
          </div>
          <button
            type="button"
            onClick={resetConversation}
            className="inline-flex items-center gap-1 text-xs text-gray-400 transition-colors hover:text-white"
          >
            <RotateCcw className="h-3 w-3" />
            Nieuw gesprek
          </button>
        </div>
      </form>
    </div>
  );
}
