import { NextRequest, NextResponse } from 'next/server';
import { generateAIResponse, detectIntent, getQuickReplies, requiresHumanIntervention, ChatMessage } from '@/lib/ai-chatbot';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, userMessage } = body as { 
      messages: ChatMessage[]; 
      userMessage: string;
    };

    if (!userMessage || !messages) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Detect intent
    const { intent, confidence } = detectIntent(userMessage);
    
    // Check if human intervention is needed
    const needsHuman = requiresHumanIntervention(userMessage, intent);
    
    if (needsHuman) {
      return NextResponse.json({
        response: 'Ik begrijp dat dit een belangrijke vraag is. Laat me u doorverbinden met een van onze specialisten die u beter kan helpen. Kan ik uw naam en telefoonnummer noteren?',
        intent,
        confidence,
        needsHuman: true,
        quickReplies: ['Ja, graag contact', 'Liever via email'],
      });
    }

    // Generate AI response
    const aiResponse = await generateAIResponse([
      ...messages,
      { role: 'user', content: userMessage, timestamp: new Date() }
    ]);

    // Get quick reply suggestions
    const quickReplies = getQuickReplies(intent);

    return NextResponse.json({
      response: aiResponse,
      intent,
      confidence,
      needsHuman: false,
      quickReplies,
    });

  } catch (error) {
    console.error('AI chat error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to generate response',
        response: 'Sorry, er ging iets mis. Probeer het opnieuw of neem direct contact met ons op via info@yannova.be.'
      },
      { status: 500 }
    );
  }
}
