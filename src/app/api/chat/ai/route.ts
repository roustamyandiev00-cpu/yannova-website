import { NextResponse } from 'next/server';
import { generateText } from 'ai';
import { google } from '@ai-sdk/google';
import { supabase } from '@/lib/supabase';

const SYSTEM_PROMPT = `Je bent een vriendelijke en behulpzame AI assistent voor Yannova, een bedrijf gespecialiseerd in ramen, deuren en renovatie in Antwerpen en omgeving.

Belangrijke informatie over Yannova:
- Specialist in PVC en aluminium ramen en deuren
- HR++ en drievoudig glas beschikbaar
- Actief in Antwerpen stad en omgeving (30km straal)
- Gratis opmeting en offerte binnen 24 uur
- 30 jaar garantie op profielen
- Ook gevelrenovatie, isolatie en totaalrenovatie
- Telefoonnummer: +32 489 96 00 01
- Email: info@yannova.be
- Website: www.yannova.be

Diensten:
1. Ramen & Deuren - PVC en aluminium, energiezuinig
2. Gevelrenovatie - Isolatie met crepi afwerking
3. Totaalrenovatie - Volledige verbouwingen
4. Isolatiewerken - Dak en gevel isolatie

Premies:
- Mijn VerbouwPremie beschikbaar voor renovaties
- We helpen met premie-aanvragen

Antwoord altijd in het Nederlands, wees vriendelijk en professioneel. Als je het antwoord niet weet, verwijs dan naar contact opnemen via telefoon of email. Houd antwoorden kort en to-the-point (max 3-4 zinnen).`;

async function touchChatSession(sessionId: string) {
  const { error } = await supabase
    .from('chat_sessions')
    .update({ updated_at: new Date().toISOString() })
    .eq('id', sessionId);

  if (error) {
    console.error('Error updating chat session timestamp:', error);
  }
}

export async function POST(request: Request) {
  try {
    const { message, sessionId } = await request.json();

    if (!message || !sessionId) {
      return NextResponse.json(
        { error: 'Message and sessionId are required' },
        { status: 400 }
      );
    }

    // Get conversation history from Supabase
    const { data: messages, error: fetchError } = await supabase
      .from('chat_messages')
      .select('text, sender')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true })
      .limit(10); // Last 10 messages for context

    if (fetchError) {
      console.error('Error fetching messages:', fetchError);
    }

    // Build conversation context
    const conversationHistory =
      messages?.map((msg) => ({
        role: (msg.sender === 'user' ? 'user' : 'assistant') as 'user' | 'assistant',
        content: msg.text,
      })) || [];

    const xaiApiKey = process.env.XAI_API_KEY;
    const googleApiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    const cfAccountId = process.env.CF_AI_ACCOUNT_ID;
    const cfApiToken = process.env.CF_AI_API_TOKEN;
    const cfModel = process.env.CF_AI_MODEL;
    const fallbackText =
      'Onze AI-assistent is momenteel niet actief in deze omgeving. Stel uw vraag gerust via het contactformulier of bel ons op +32 489 96 00 01 voor direct advies.';

    let text = '';
    let isFallback = false;

    if (xaiApiKey) {
      try {
        // Grok AI (xAI) - OpenAI-compatible API
        const grokResponse = await fetch('https://api.x.ai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${xaiApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'grok-4-latest',
            messages: [
              { role: 'system', content: SYSTEM_PROMPT },
              ...conversationHistory,
              { role: 'user', content: message },
            ],
            stream: false,
            temperature: 0.7,
            max_tokens: 300,
          }),
        });

        if (!grokResponse.ok) {
          const errorData = await grokResponse.json();
          console.error('Grok AI error:', errorData);
          throw new Error('Grok AI request failed');
        }

        const grokJson = await grokResponse.json();
        text = grokJson.choices?.[0]?.message?.content?.trim() || '';

        if (!text) {
          throw new Error('Grok AI returned empty response');
        }
      } catch (providerError) {
        console.error('Grok AI unavailable, using fallback path:', providerError);
      }
    }

    if (!text && googleApiKey && googleApiKey !== 'YOUR_GOOGLE_AI_API_KEY_HERE') {
      // Google Gemini via AI SDK
      try {
        const result = await generateText({
          model: google('gemini-1.5-flash'),
          system: SYSTEM_PROMPT,
          messages: [
            ...conversationHistory,
            { role: 'user' as const, content: message },
          ],
          temperature: 0.7,
          maxTokens: 300,
        });
        text = result.text.trim();
      } catch (providerError) {
        console.error('Gemini unavailable, using fallback path:', providerError);
      }
    }

    if (!text && cfAccountId && cfApiToken && cfModel) {
      // Cloudflare Workers AI
      try {
        const cfResponse = await fetch(
          `https://api.cloudflare.com/client/v4/accounts/${cfAccountId}/ai/run/${encodeURIComponent(
            cfModel,
          )}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${cfApiToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                ...conversationHistory,
                { role: 'user', content: message },
              ],
            }),
          },
        );

        const cfJson = (await cfResponse.json()) as {
          success?: boolean;
          result?: { response?: string };
          errors?: unknown;
        };

        if (!cfResponse.ok || cfJson.success === false) {
          console.error('Cloudflare AI error:', cfJson.errors || cfJson);
          throw new Error('Cloudflare AI request failed');
        }

        text = (cfJson.result?.response || '').trim();
        if (!text) {
          throw new Error('Cloudflare AI returned empty response');
        }
      } catch (providerError) {
        console.error('Cloudflare AI unavailable, using fallback path:', providerError);
      }
    }

    if (!text) {
      text = fallbackText;
      isFallback = true;
    }

    // Save AI response to database
    const { error: insertError } = await supabase
      .from('chat_messages')
      .insert({
        session_id: sessionId,
        text,
        sender: 'ai',
      });

    if (insertError) {
      console.error('Error saving AI message:', insertError);
    } else {
      await touchChatSession(sessionId);
    }

    return NextResponse.json({ 
      response: text,
      success: true,
      fallback: isFallback,
    });

  } catch (error) {
    console.error('AI Chat Error:', error);
    return NextResponse.json(
      { 
        error: 'Er is een fout opgetreden bij het verwerken van uw bericht.',
        response: 'Sorry, ik kan momenteel niet antwoorden. Neem contact op via +32 489 96 00 01 of info@yannova.be voor directe hulp.'
      },
      { status: 500 }
    );
  }
}
