"use client";
/**
 * VOORBEELD: Hoe de AI Chatbot te integreren
 * 
 * Dit bestand toont hoe je de nieuwe AI chatbot API gebruikt
 */

'use client';

import { useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export function EnhancedChatWidget() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [quickReplies, setQuickReplies] = useState<string[]>([]);

  async function sendMessage(userMessage: string) {
    if (!userMessage.trim()) return;

    setLoading(true);
    
    // Add user message
    const newMessages = [
      ...messages,
      { role: 'user' as const, content: userMessage, timestamp: new Date() }
    ];
    setMessages(newMessages);
    setInput('');

    try {
      // Call AI API
      const response = await fetch('/api/chat/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          userMessage
        })
      });

      const data = await response.json();

      // Add AI response
      setMessages([
        ...newMessages,
        { 
          role: 'assistant' as const, 
          content: data.response, 
          timestamp: new Date() 
        }
      ]);

      // Update quick replies
      if (data.quickReplies) {
        setQuickReplies(data.quickReplies);
      }

      // Handle human intervention
      if (data.needsHuman) {
        console.log('Human intervention needed');
        // Trigger notification to admin
      }

    } catch (error) {
      console.error('Chat error:', error);
      setMessages([
        ...newMessages,
        { 
          role: 'assistant' as const, 
          content: 'Sorry, er ging iets mis. Probeer het opnieuw.', 
          timestamp: new Date() 
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-xl">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg">
        <h3 className="font-bold">Chat met Yannova</h3>
        <p className="text-sm opacity-90">We helpen je graag!</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Replies */}
      {quickReplies.length > 0 && (
        <div className="px-4 py-2 flex flex-wrap gap-2">
          {quickReplies.map((reply, idx) => (
            <button
              key={idx}
              onClick={() => sendMessage(reply)}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition"
            >
              {reply}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(input);
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Typ je bericht..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Verstuur
          </button>
        </form>
      </div>
    </div>
  );
}

// Integreer in je bestaande ChatWidget.tsx of Chatbot.tsx:
//
// import { EnhancedChatWidget } from '@/components/examples/ChatbotExample';
//
// export default function ChatWidget() {
//   return <EnhancedChatWidget />;
// }
