"use client";

import Link from "next/link";
import { useState } from "react";
import { Send, Sparkles, ExternalLink } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  relatedLinks?: { title: string; href: string }[];
}

const quickLinks = [
  { title: "Premies", href: "/premie-gids" },
  { title: "Ramen", href: "/ramen" },
  { title: "Ramen & Deuren", href: "/diensten/ramen-deuren" },
  { title: "Contact", href: "/contact" },
  { title: "Offerte", href: "/contact" },
];

export function AIChatShell() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hallo! Ik ben Yannova AI. Stel je vraag over ramen, deuren, premies of renovatie en ik help je verder.",
      relatedLinks: [
        { title: "Bekijk onze ramen", href: "/ramen" },
        { title: "Bekijk premies", href: "/premie-gids" },
      ],
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const question = input;
    const userMessage: Message = { role: "user", content: question };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const aiResponse: Message = {
        role: "assistant",
        content: `Bedankt voor je vraag over "${question}". Voor een gedetailleerd antwoord en persoonlijk advies kan je een gratis offerte aanvragen of contact opnemen met ons team.`,
        relatedLinks: [
          { title: "Gratis offerte aanvragen", href: "/contact" },
          { title: "Contact opnemen", href: "/contact" },
          { title: "Bekijk projecten", href: "/projecten" },
        ],
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[600px] bg-white/5 border border-white/10 rounded-xl overflow-hidden">
      <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border-b border-white/10">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <h2 className="font-semibold text-white text-sm">Yannova AI</h2>
          <p className="text-xs text-gray-400">24/7 beschikbaar</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-xl px-4 py-3 ${
                message.role === "user" ? "bg-secondary text-white" : "bg-white/10 text-gray-200"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>

              {message.role === "assistant" && message.relatedLinks && (
                <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
                  <p className="text-xs text-gray-400 font-medium">Gerelateerde pagina&apos;s:</p>
                  <div className="flex flex-wrap gap-2">
                    {message.relatedLinks.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.href}
                        className="inline-flex items-center gap-1 text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg text-secondary hover:text-white transition-colors"
                      >
                        {link.title}
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/10 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="animate-pulse flex gap-1">
                  <span className="h-2 w-2 bg-gray-400 rounded-full" />
                  <span className="h-2 w-2 bg-gray-400 rounded-full animation-delay-200" />
                  <span className="h-2 w-2 bg-gray-400 rounded-full animation-delay-400" />
                </div>
                <span>Aan het denken...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="px-4 py-2 border-t border-white/10 bg-white/5">
        <div className="flex flex-wrap gap-2">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg text-gray-300 hover:text-white transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Stel je vraag over ramen, deuren, premies..."
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-secondary/50 transition-colors"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="flex items-center justify-center h-10 w-10 bg-secondary hover:bg-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-white transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
