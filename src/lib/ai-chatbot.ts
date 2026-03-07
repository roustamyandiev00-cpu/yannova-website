/**
 * Enhanced AI Chatbot with Google AI
 * Provides intelligent responses for customer inquiries
 */

import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY || '');

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: Date;
}

export interface ChatContext {
  companyName: string;
  services: string[];
  location: string;
  contactInfo: {
    phone?: string;
    email?: string;
  };
}

const DEFAULT_CONTEXT: ChatContext = {
  companyName: 'Yannova',
  services: [
    'Totaalrenovatie',
    'Gevelrenovatie & Crepi',
    'Ramen & Deuren (PVC, Aluminium)',
    'Dakwerken',
    'Badkamerrenovatie',
    'Keukenrenovatie',
    'Vloerwerken',
    'Elektriciteit & Sanitair',
  ],
  location: 'Zoersel, Antwerpen',
  contactInfo: {
    phone: '+32 123 45 67 89',
    email: 'info@yannova.be',
  },
};

/**
 * Generate system prompt with company context
 */
function getSystemPrompt(context: ChatContext = DEFAULT_CONTEXT): string {
  return `Je bent een vriendelijke en professionele klantenservice assistent voor ${context.companyName}, een renovatiebedrijf gevestigd in ${context.location}.

BEDRIJFSINFORMATIE:
- Bedrijfsnaam: ${context.companyName}
- Locatie: ${context.location}
- Diensten: ${context.services.join(', ')}
- Contact: ${context.contactInfo.email}${context.contactInfo.phone ? `, ${context.contactInfo.phone}` : ''}

JOUW ROL:
- Beantwoord vragen over renovatiediensten, prijzen, en projecten
- Wees vriendelijk, professioneel en behulpzaam
- Gebruik Nederlandse taal (België)
- Geef concrete informatie over diensten
- Vraag om contactgegevens voor offertes
- Verwijs naar specifieke diensten wanneer relevant

RICHTLIJNEN:
- Houd antwoorden kort en to-the-point (max 3-4 zinnen)
- Gebruik een warme, persoonlijke toon
- Bij technische vragen, geef praktisch advies
- Voor prijzen, leg uit dat dit afhangt van het project en bied een offerte aan
- Moedig klanten aan om contact op te nemen voor meer details
- Gebruik geen markdown formatting in antwoorden

VOORBEELDEN:
Vraag: "Wat kost een badkamerrenovatie?"
Antwoord: "De prijs van een badkamerrenovatie hangt af van de grootte, materialen en gewenste afwerking. Gemiddeld ligt dit tussen €5.000 en €15.000. Ik maak graag een gratis offerte op maat voor u. Kan ik uw contactgegevens noteren?"

Vraag: "Doen jullie ook kleine herstellingen?"
Antwoord: "Ja, we doen zowel grote renovaties als kleinere herstellingswerken. Of het nu gaat om een lekkend dak, een kapotte raam of elektrische problemen - we helpen u graag. Wat voor herstelling heeft u nodig?"`;
}

/**
 * Generate AI response using Google Gemini
 */
export async function generateAIResponse(
  messages: ChatMessage[],
  context?: ChatContext
): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    // Build conversation history
    const systemPrompt = getSystemPrompt(context);
    const conversationHistory = messages
      .map((msg) => `${msg.role === 'user' ? 'Klant' : 'Assistent'}: ${msg.content}`)
      .join('\n');
    
    const prompt = `${systemPrompt}\n\nGESPREKSGESCHIEDENIS:\n${conversationHistory}\n\nGeef een kort, vriendelijk antwoord (max 3-4 zinnen):`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text.trim();
  } catch (error) {
    console.error('AI response generation failed:', error);
    return 'Sorry, ik ondervind momenteel technische problemen. Kan ik u doorverbinden met een van onze medewerkers? U kunt ook direct contact opnemen via info@yannova.be.';
  }
}

/**
 * Detect intent from user message
 */
export function detectIntent(message: string): {
  intent: 'quote' | 'info' | 'contact' | 'complaint' | 'general';
  confidence: number;
} {
  const lowerMessage = message.toLowerCase();
  
  // Quote request
  if (
    lowerMessage.includes('prijs') ||
    lowerMessage.includes('kost') ||
    lowerMessage.includes('offerte') ||
    lowerMessage.includes('budget')
  ) {
    return { intent: 'quote', confidence: 0.9 };
  }
  
  // Contact request
  if (
    lowerMessage.includes('contact') ||
    lowerMessage.includes('bellen') ||
    lowerMessage.includes('afspraak') ||
    lowerMessage.includes('bezoek')
  ) {
    return { intent: 'contact', confidence: 0.85 };
  }
  
  // Complaint
  if (
    lowerMessage.includes('klacht') ||
    lowerMessage.includes('probleem') ||
    lowerMessage.includes('niet tevreden') ||
    lowerMessage.includes('slecht')
  ) {
    return { intent: 'complaint', confidence: 0.8 };
  }
  
  // Info request
  if (
    lowerMessage.includes('wat') ||
    lowerMessage.includes('hoe') ||
    lowerMessage.includes('wanneer') ||
    lowerMessage.includes('info')
  ) {
    return { intent: 'info', confidence: 0.7 };
  }
  
  return { intent: 'general', confidence: 0.5 };
}

/**
 * Generate quick reply suggestions
 */
export function getQuickReplies(intent: string): string[] {
  const replies: Record<string, string[]> = {
    quote: [
      'Ja, graag een offerte',
      'Wat heb je nodig voor een offerte?',
      'Kan ik eerst meer info?',
    ],
    info: [
      'Vertel me meer',
      'Wat zijn de opties?',
      'Hoe lang duurt het?',
    ],
    contact: [
      'Ja, graag contact',
      'Wanneer kunnen jullie langskomen?',
      'Wat zijn de openingsuren?',
    ],
    general: [
      'Ja, graag',
      'Meer informatie',
      'Contact opnemen',
    ],
  };
  
  return replies[intent] || replies.general;
}

/**
 * Check if message requires human intervention
 */
export function requiresHumanIntervention(message: string, intent: string): boolean {
  const lowerMessage = message.toLowerCase();
  
  // Complaints always need human attention
  if (intent === 'complaint') return true;
  
  // Complex technical questions
  if (
    lowerMessage.includes('juridisch') ||
    lowerMessage.includes('verzekering') ||
    lowerMessage.includes('garantie') ||
    lowerMessage.includes('contract')
  ) {
    return true;
  }
  
  // Urgent matters
  if (
    lowerMessage.includes('dringend') ||
    lowerMessage.includes('spoed') ||
    lowerMessage.includes('noodgeval') ||
    lowerMessage.includes('lek')
  ) {
    return true;
  }
  
  return false;
}
