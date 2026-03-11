import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { supabase } from '@/lib/supabase';

// Mark the route as dynamic
export const dynamic = 'force-dynamic';

const systemPrompt = `Je bent Kimberly, een vriendelijke medewerker van Yannova Bouw in Zoersel. Je helpt klanten met vragen over ramen, deuren, gevelrenovatie en isolatie.

COMMUNICATIESTIJL:
- Praat als een échte persoon, niet als een robot
- Geef KORTE, natuurlijke antwoorden (max 2-3 zinnen)
- Stel ALLEEN relevante vragen die logisch zijn in het gesprek
- Wees behulpzaam maar niet opdringerig
- Gebruik geen kunstmatige verkooptaal

GESPREKSSTRATEGIE:
- Luister eerst naar wat de klant vraagt
- Geef een direct, nuttig antwoord
- Stel daarna 1 logische vervolgvraag (alleen als relevant)
- Verzamel contactgegevens op een natuurlijk moment (voornaam, achternaam, telefoon)
- Voorbeeld: "Graag! Voor een offerte kom ik graag langs. Mag ik uw naam en telefoonnummer?"

BEDRIJFSINFO:
- Locatie: Zoersel, werken in Antwerpen en Mechelen
- 15+ jaar ervaring, 30 jaar garantie
- Contact: +32 489 96 00 01, info@yannova.be
- Merken: Schüco, Reynaers, Aluplast, Salamander, Rehau, Veka

DIENSTEN:
- PVC & aluminium ramen en deuren
- Gevelrenovatie met crepi
- Dak- en gevelisolatie
- Totaalrenovaties
- Hulp bij premie-aanvragen

BELANGRIJKE REGELS:
- MAX 40 woorden per antwoord
- Geen onnodige vragen - alleen wat écht helpt
- Wees direct en eerlijk
- Bij offerte-aanvraag: vraag naam (voor- en achternaam) + telefoon
- Weet je iets niet? Zeg: "Daar kan ik u beter telefonisch over adviseren: +32 489 96 00 01"
- Praat als Kimberly, een échte medewerker`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    // Get or create session ID from request
    let sessionId = body.sessionId;
    
    if (!sessionId) {
      // Create a new session
      const { data: session, error: sessionError } = await supabase
        .from('chat_sessions')
        .insert({
          email: 'anonymous@yannova.be',
          name: 'Website Bezoeker',
          status: 'active',
        })
        .select()
        .single();

      if (sessionError) {
        console.error('Error creating session:', sessionError);
      } else {
        sessionId = session.id;
      }
    }

    // Save user message to database
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && sessionId) {
      await supabase.from('chat_messages').insert({
        session_id: sessionId,
        text: lastMessage.content,
        sender: 'user',
      });
    }

    const xaiApiKey = process.env.XAI_API_KEY;
    const googleApiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    // Try Grok AI first
    if (xaiApiKey) {
      try {
        const grokResponse = await fetch('https://api.x.ai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${xaiApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'grok-4-latest',
            messages: [
              { role: 'system', content: systemPrompt },
              ...messages,
            ],
            stream: true,
            temperature: 0.7,
          }),
        });

        if (grokResponse.ok) {
          // Save AI response to database (we'll need to handle streaming)
          // For now, just return the stream
          return new Response(grokResponse.body, {
            headers: {
              'Content-Type': 'text/event-stream',
              'Cache-Control': 'no-cache',
              'Connection': 'keep-alive',
              'X-Session-Id': sessionId || '',
            },
          });
        } else {
          const errorData = await grokResponse.json();
          console.error('Grok AI error:', errorData);
          console.log('Falling back to Google Gemini...');
        }
      } catch (grokError) {
        console.log('Grok failed, falling back to Google Gemini...');
      }
    }

    // Fallback to Google Gemini
    if (googleApiKey) {
      const result = await streamText({
        model: google('gemini-flash-latest'),
        system: systemPrompt,
        messages,
        async onFinish({ text }) {
          // Save AI response to database after streaming completes
          if (sessionId) {
            await supabase.from('chat_messages').insert({
              session_id: sessionId,
              text,
              sender: 'ai',
            });
          }
        },
      });

      const response = result.toDataStreamResponse();
      
      // Add session ID to response headers
      if (sessionId) {
        response.headers.set('X-Session-Id', sessionId);
      }
      
      return response;
    }

    // Last resort fallback response
    const lastUserMessage = messages[messages.length - 1];
    const userMessage = lastUserMessage?.content?.toLowerCase() || '';
    
    let response = '';
    
    if (userMessage.includes('prijs') || userMessage.includes('kost')) {
      response = 'De prijs hangt af van verschillende factoren zoals materiaal, afmetingen en type glas. Voor een exacte offerte op maat kunnen we het beste even langskomen voor een gratis opmeting. Mag ik uw contactgegevens om een afspraak in te plannen?';
    } else if (userMessage.includes('ramen') || userMessage.includes('deuren')) {
      response = 'Wij zijn specialist in PVC en aluminium ramen en deuren met HR++ en drievoudig glas. We bieden 30 jaar garantie en gratis opmeting binnen 24 uur. In welke regio woont u?';
    } else if (userMessage.includes('offerte') || userMessage.includes('afspraak')) {
      response = 'Graag! Voor een gratis offerte en opmeting kunnen we snel langskomen. Wat is uw telefoonnummer of email, dan nemen we contact op?';
    } else if (userMessage.includes('garantie')) {
      response = 'Wij bieden 30 jaar garantie op alle profielen en 10 jaar op de plaatsing. Heeft u interesse in een vrijblijvende offerte?';
    } else {
      response = 'Bedankt voor uw vraag! Voor gedetailleerd advies op maat kunt u ons het beste bellen op +32 489 96 00 01 of een offerte aanvragen via ons contactformulier. Waarmee kunnen we u verder helpen?';
    }

    // Save fallback response to database
    if (sessionId) {
      await supabase.from('chat_messages').insert({
        session_id: sessionId,
        text: response,
        sender: 'ai',
      });
    }

    // Return as streaming response format
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ choices: [{ delta: { content: response } }] })}\n\n`));
        controller.enqueue(encoder.encode('data: [DONE]\n\n'));
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'X-Session-Id': sessionId || '',
      },
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: String(error) }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
