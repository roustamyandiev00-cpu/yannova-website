/**
 * Enhanced AI Chatbot with Google AI
 * Provides intelligent responses for customer inquiries
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import { 
  COMPANY_INFO, 
  WERKGEBIED, 
  DIENSTEN, 
  GARANTIES, 
  PROCES, 
  PREMIES, 
  FAQ, 
  USP,
  MERKEN,
  PVC_VS_ALUMINIUM,
  BEGLAZING,
  KLEUREN,
  ADVIES_PER_SITUATIE,
} from './chatbot-knowledge';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY || '');

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: Date;
}

export interface LeadQualification {
  score: number; // 0-100
  quality: 'hot' | 'warm' | 'cold' | 'info-seeker';
  signals: {
    hasTimeline: boolean;
    hasBudget: boolean;
    hasLocation: boolean;
    hasSpecificNeeds: boolean;
    isComparison: boolean;
    isReadyToBuy: boolean;
  };
  nextQuestion?: string;
  recommendation: string;
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
  companyName: COMPANY_INFO.name,
  services: [
    'Ramen & Deuren (PVC, Aluminium, HR++ beglazing)',
    'Gevelrenovatie & Gevelisolatie met Crepi',
    'Totaalrenovatie (badkamer, keuken, volledige woning)',
    'Isolatiewerken (dak, gevel, vloer)',
    'Dakwerken & Zolderinrichting',
    'Steenstrips & Gevelbekleding',
  ],
  location: `${COMPANY_INFO.location.base}, actief in ${COMPANY_INFO.location.region}`,
  contactInfo: {
    phone: COMPANY_INFO.contact.phone,
    email: COMPANY_INFO.contact.email,
  },
};

/**
 * Generate system prompt with company context
 */
function getSystemPrompt(context: ChatContext = DEFAULT_CONTEXT): string {
  const werkgebiedList = [...WERKGEBIED.primary, ...WERKGEBIED.secondary].join(', ');
  
  return `Je bent een vriendelijke en professionele klantenservice assistent voor ${context.companyName}, een renovatiebedrijf gevestigd in ${context.location}.

BEDRIJFSINFORMATIE:
- Bedrijfsnaam: ${context.companyName}
- Hoofdlocatie: ${COMPANY_INFO.location.base}
- Werkgebied: ${werkgebiedList}
- Diensten: ${context.services.join(', ')}
- Contact: ${context.contactInfo.email}, ${context.contactInfo.phone}
- Website: ${COMPANY_INFO.contact.website}

BELANGRIJKE USP's:
${USP.map(usp => `- ${usp}`).join('\n')}

MERKEN EN PROFIELEN:

PVC PROFIELEN:
1. Aluplast (Middensegment):
   - ${MERKEN.pvc.aluplast.beschrijving}
   - Voordelen: ${MERKEN.pvc.aluplast.voordelen.join(', ')}
   - Isolatie: ${MERKEN.pvc.aluplast.isolatiewaarde}
   - Garantie: ${MERKEN.pvc.aluplast.garantie}

2. Salamander (Premium):
   - ${MERKEN.pvc.salamander.beschrijving}
   - Voordelen: ${MERKEN.pvc.salamander.voordelen.join(', ')}
   - Isolatie: ${MERKEN.pvc.salamander.isolatiewaarde}
   - Garantie: ${MERKEN.pvc.salamander.garantie}

ALUMINIUM PROFIELEN:
1. Schüco (Premium):
   - ${MERKEN.aluminium.schuco.beschrijving}
   - Voordelen: ${MERKEN.aluminium.schuco.voordelen.join(', ')}
   - Isolatie: ${MERKEN.aluminium.schuco.isolatiewaarde}
   - Garantie: ${MERKEN.aluminium.schuco.garantie}

2. Reynaers (Premium):
   - ${MERKEN.aluminium.reynaers.beschrijving}
   - Voordelen: ${MERKEN.aluminium.reynaers.voordelen.join(', ')}
   - Isolatie: ${MERKEN.aluminium.reynaers.isolatiewaarde}
   - Garantie: ${MERKEN.aluminium.reynaers.garantie}

3. Aluprof (Middensegment):
   - ${MERKEN.aluminium.aluprof.beschrijving}
   - Voordelen: ${MERKEN.aluminium.aluprof.voordelen.join(', ')}
   - Isolatie: ${MERKEN.aluminium.aluprof.isolatiewaarde}
   - Garantie: ${MERKEN.aluminium.aluprof.garantie}

PVC VS ALUMINIUM:
PVC: ${PVC_VS_ALUMINIUM.pvc.voordelen.join(', ')} | Prijs: ${PVC_VS_ALUMINIUM.pvc.prijsrange}
Aluminium: ${PVC_VS_ALUMINIUM.aluminium.voordelen.join(', ')} | Prijs: ${PVC_VS_ALUMINIUM.aluminium.prijsrange}

BEGLAZING OPTIES:
- HR++ glas: ${BEGLAZING.hrPlusPlus.uWaarde}, energiebesparing tot 30%
- Drievoudig glas: ${BEGLAZING.drievoudig.uWaarde}, energiebesparing tot 50%
- Geluidwerend glas: Tot 45 dB reductie
- Veiligheidsglas: Inbraakwerend, gelaagd glas

KLEUREN:
PVC: ${KLEUREN.pvc.standaard.join(', ')}, houtdecors mogelijk
Aluminium: Alle RAL-kleuren, populair zijn ${KLEUREN.aluminium.populair.join(', ')}

ADVIES PER SITUATIE:
- Nieuwbouw: ${ADVIES_PER_SITUATIE.nieuwbouw.aanbeveling}
- Klassieke renovatie: ${ADVIES_PER_SITUATIE.renovatie_klassiek.aanbeveling}
- Moderne renovatie: ${ADVIES_PER_SITUATIE.renovatie_modern.aanbeveling}
- Budget-bewust: ${ADVIES_PER_SITUATIE.budget_bewust.aanbeveling}
- Premium: ${ADVIES_PER_SITUATIE.premium.aanbeveling}
- Grote glaspartijen: ${ADVIES_PER_SITUATIE.grote_glaspartijen.aanbeveling}

PRIJSINDICATIES:
- Ramen & Deuren: ${DIENSTEN.ramenDeuren.priceRange} (${DIENSTEN.ramenDeuren.priceNote})
- Gevelisolatie: ${DIENSTEN.gevelrenovatie.priceRange} (${DIENSTEN.gevelrenovatie.priceNote})
- Totaalrenovatie: ${DIENSTEN.renovatie.priceRange} (${DIENSTEN.renovatie.priceNote})

GARANTIES:
- Ramen: ${GARANTIES.ramen}
- Deuren: ${GARANTIES.deuren}

PROCES:
1. ${PROCES.stap1.title}: ${PROCES.stap1.description} (${PROCES.stap1.duur})
2. ${PROCES.stap2.title}: ${PROCES.stap2.description} (${PROCES.stap2.duur})
3. ${PROCES.stap3.title}: ${PROCES.stap3.description} (${PROCES.stap3.duur})

JOUW ROL:
- Beantwoord vragen over merken, profielen, beglazing en materialen
- Geef advies op maat afhankelijk van de situatie van de klant
- Leg verschillen uit tussen PVC en aluminium
- Adviseer het juiste merk en profiel per situatie
- Wees vriendelijk, professioneel en behulpzaam
- Gebruik Nederlandse taal (België)
- Benadruk ALTIJD gratis opmeting en offerte binnen 24 uur

RICHTLIJNEN:
- Houd antwoorden kort en to-the-point (max 3-4 zinnen)
- Gebruik een warme, persoonlijke toon
- Bij vragen over merken, geef concrete informatie uit de kennisbank
- Voor exacte prijzen, leg uit dat dit afhangt van het project en bied een gratis offerte aan
- Gebruik geen markdown formatting in antwoorden
- Bij vragen over "wat is beter", vraag naar de situatie en geef passend advies

VOORBEELDEN:
Vraag: "Wat is het verschil tussen Schüco en Aluplast?"
Antwoord: "Schüco is een premium aluminium merk met slanke profielen en moderne uitstraling, ideaal voor grote glaspartijen. Aluplast is een hoogwaardig PVC merk met uitstekende isolatie en betere prijs-kwaliteit. Schüco is duurder maar sterker, Aluplast is budgetvriendelijker en warmer. Wat voor type woning heeft u?"

Vraag: "Welk profiel raad je aan voor mijn nieuwbouw?"
Antwoord: "Voor nieuwbouw adviseer ik aluminium zoals Schüco of Reynaers met HR++ of drievoudig glas. Dit geeft een moderne uitstraling, slanke profielen en maximale lichtinval. We komen graag gratis langs om uw wensen te bespreken en een offerte te maken."

Vraag: "Is PVC of aluminium beter?"
Antwoord: "Dat hangt af van uw wensen. PVC (zoals Aluplast) is goedkoper, heeft betere isolatie en is onderhoudsarm. Aluminium (zoals Schüco) heeft slankere profielen, meer lichtinval en een moderne uitstraling. Voor welk type woning is het?"`;
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
  intent: 'quote' | 'info' | 'contact' | 'complaint' | 'location' | 'product' | 'general';
  confidence: number;
} {
  const lowerMessage = message.toLowerCase();
  
  // Product/merk vragen
  if (
    lowerMessage.includes('schuco') ||
    lowerMessage.includes('schüco') ||
    lowerMessage.includes('aluplast') ||
    lowerMessage.includes('salamander') ||
    lowerMessage.includes('reynaers') ||
    lowerMessage.includes('aluprof') ||
    lowerMessage.includes('profiel') ||
    lowerMessage.includes('merk') ||
    lowerMessage.includes('pvc of aluminium') ||
    lowerMessage.includes('aluminium of pvc') ||
    lowerMessage.includes('verschil tussen') ||
    lowerMessage.includes('welk profiel') ||
    lowerMessage.includes('welk merk') ||
    lowerMessage.includes('hr++') ||
    lowerMessage.includes('drievoudig') ||
    lowerMessage.includes('triple') ||
    lowerMessage.includes('beglazing') ||
    lowerMessage.includes('isolatie')
  ) {
    return { intent: 'product', confidence: 0.9 };
  }
  
  // Quote request
  if (
    lowerMessage.includes('prijs') ||
    lowerMessage.includes('kost') ||
    lowerMessage.includes('offerte') ||
    lowerMessage.includes('budget') ||
    lowerMessage.includes('tarief')
  ) {
    return { intent: 'quote', confidence: 0.9 };
  }
  
  // Location/werkgebied request
  if (
    lowerMessage.includes('werkgebied') ||
    lowerMessage.includes('werken jullie') ||
    lowerMessage.includes('komen jullie') ||
    lowerMessage.includes('actief in') ||
    lowerMessage.includes('berchem') ||
    lowerMessage.includes('deurne') ||
    lowerMessage.includes('merksem') ||
    lowerMessage.includes('wilrijk') ||
    lowerMessage.includes('brasschaat') ||
    lowerMessage.includes('schoten') ||
    lowerMessage.includes('wijnegem') ||
    lowerMessage.includes('mortsel') ||
    lowerMessage.includes('edegem') ||
    lowerMessage.includes('kontich') ||
    lowerMessage.includes('antwerpen') ||
    lowerMessage.includes('mechelen') ||
    lowerMessage.includes('zoersel')
  ) {
    return { intent: 'location', confidence: 0.9 };
  }
  
  // Contact request
  if (
    lowerMessage.includes('contact') ||
    lowerMessage.includes('bellen') ||
    lowerMessage.includes('afspraak') ||
    lowerMessage.includes('bezoek') ||
    lowerMessage.includes('opmeting')
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
    lowerMessage.includes('info') ||
    lowerMessage.includes('welke') ||
    lowerMessage.includes('waarom')
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
    product: [
      'Wat raad je aan voor mijn situatie?',
      'Wat is het verschil?',
      'Welk merk is beter?',
    ],
    quote: [
      'Ja, graag een offerte',
      'Wat heb je nodig voor een offerte?',
      'Kan ik eerst meer info?',
    ],
    location: [
      'Ja, ik woon in [gemeente]',
      'Komen jullie ook in mijn buurt?',
      'Wat is jullie werkgebied?',
    ],
    info: [
      'Vertel me meer',
      'Wat zijn de opties?',
      'Hoe lang duurt het?',
    ],
    contact: [
      'Ja, graag contact',
      'Wanneer kunnen jullie langskomen?',
      'Gratis opmeting aanvragen',
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

/**
 * Qualify lead based on conversation
 */
export function qualifyLead(messages: ChatMessage[]): LeadQualification {
  const conversationText = messages.map(m => m.content.toLowerCase()).join(' ');
  
  const signals = {
    hasTimeline: /wanneer|snel|dringend|binnenkort|volgende maand|dit jaar|planning/.test(conversationText),
    hasBudget: /budget|prijs|kost|betalen|financier|lening/.test(conversationText),
    hasLocation: /antwerpen|berchem|deurne|merksem|wilrijk|brasschaat|schoten|wijnegem|mortsel|edegem|kontich|zoersel|mechelen/.test(conversationText),
    hasSpecificNeeds: /ramen|deuren|renovatie|gevel|isolatie|badkamer|keuken/.test(conversationText),
    isComparison: /vergelijk|verschil|beter|alternatief|andere|concurrent/.test(conversationText),
    isReadyToBuy: /offerte|opmeting|afspraak|langskomen|bezoek|contact|bellen/.test(conversationText),
  };
  
  // Calculate lead score
  let score = 0;
  if (signals.hasTimeline) score += 25;
  if (signals.hasBudget) score += 15;
  if (signals.hasLocation) score += 20;
  if (signals.hasSpecificNeeds) score += 15;
  if (signals.isReadyToBuy) score += 25;
  
  // Determine quality
  let quality: LeadQualification['quality'];
  if (score >= 70 && signals.isReadyToBuy) {
    quality = 'hot';
  } else if (score >= 50) {
    quality = 'warm';
  } else if (signals.isComparison && !signals.isReadyToBuy) {
    quality = 'info-seeker';
  } else {
    quality = 'cold';
  }
  
  // Generate next proactive question
  let nextQuestion = '';
  let recommendation = '';
  
  if (quality === 'hot') {
    if (!signals.hasLocation) {
      nextQuestion = 'In welke gemeente woont u? Dan kan ik direct een gratis opmeting inplannen.';
    } else {
      nextQuestion = 'Zal ik een gratis opmeting inplannen? Wanneer komt het u het beste uit?';
    }
    recommendation = 'HOT LEAD - Push voor afspraak';
  } else if (quality === 'warm') {
    if (!signals.hasTimeline) {
      nextQuestion = 'Wanneer wilt u dit project graag realiseren? Zo kan ik u beter adviseren.';
    } else if (!signals.hasLocation) {
      nextQuestion = 'In welke gemeente is het project? Dan kan ik u vertellen over onze ervaring daar.';
    } else {
      nextQuestion = 'Wilt u dat ik een vrijblijvende offerte maak? De opmeting is gratis.';
    }
    recommendation = 'WARM LEAD - Kwalificeer verder';
  } else if (quality === 'info-seeker') {
    nextQuestion = 'Bent u al concreet aan het oriënteren, of verzamelt u eerst informatie?';
    recommendation = 'INFO SEEKER - Educate en nurture';
  } else {
    if (!signals.hasSpecificNeeds) {
      nextQuestion = 'Waar kan ik u precies mee helpen? Gaat het om ramen, deuren of een renovatie?';
    } else if (!signals.hasLocation) {
      nextQuestion = 'In welke regio woont u? We zijn actief in heel Antwerpen en omgeving.';
    } else {
      nextQuestion = 'Heeft u al een idee wanneer u dit wilt laten uitvoeren?';
    }
    recommendation = 'COLD LEAD - Kwalificeer en warm maken';
  }
  
  return {
    score,
    quality,
    signals,
    nextQuestion,
    recommendation,
  };
}

/**
 * Generate proactive follow-up question based on lead qualification
 */
export function generateProactiveQuestion(
  messages: ChatMessage[],
  lastResponse: string
): string | null {
  const qualification = qualifyLead(messages);
  
  // Don't ask proactive questions too early (wait for at least 2 exchanges)
  if (messages.length < 3) return null;
  
  // Don't ask if we just asked for contact info
  if (lastResponse.includes('contactgegevens') || lastResponse.includes('telefoonnummer')) {
    return null;
  }
  
  // Return the next qualifying question
  return qualification.nextQuestion || null;
}

/**
 * Analyze conversation sentiment and urgency
 */
export function analyzeConversation(messages: ChatMessage[]): {
  sentiment: 'positive' | 'neutral' | 'negative';
  urgency: 'high' | 'medium' | 'low';
  topics: string[];
} {
  const conversationText = messages.map(m => m.content.toLowerCase()).join(' ');
  
  // Sentiment analysis
  const positiveWords = ['graag', 'goed', 'perfect', 'uitstekend', 'mooi', 'ja', 'bedankt'];
  const negativeWords = ['niet', 'geen', 'slecht', 'duur', 'te lang', 'probleem'];
  
  const positiveCount = positiveWords.filter(w => conversationText.includes(w)).length;
  const negativeCount = negativeWords.filter(w => conversationText.includes(w)).length;
  
  let sentiment: 'positive' | 'neutral' | 'negative';
  if (positiveCount > negativeCount + 1) sentiment = 'positive';
  else if (negativeCount > positiveCount + 1) sentiment = 'negative';
  else sentiment = 'neutral';
  
  // Urgency analysis
  const urgentWords = ['dringend', 'snel', 'spoed', 'vandaag', 'morgen', 'deze week'];
  const hasUrgency = urgentWords.some(w => conversationText.includes(w));
  
  let urgency: 'high' | 'medium' | 'low';
  if (hasUrgency) urgency = 'high';
  else if (conversationText.includes('binnenkort') || conversationText.includes('volgende maand')) urgency = 'medium';
  else urgency = 'low';
  
  // Topic extraction
  const topics: string[] = [];
  if (/ramen/.test(conversationText)) topics.push('ramen');
  if (/deuren/.test(conversationText)) topics.push('deuren');
  if (/gevel|crepi|isolatie/.test(conversationText)) topics.push('gevelrenovatie');
  if (/renovatie|badkamer|keuken/.test(conversationText)) topics.push('renovatie');
  if (/prijs|kost|budget/.test(conversationText)) topics.push('prijzen');
  if (/schuco|aluplast|salamander|reynaers/.test(conversationText)) topics.push('merken');
  
  return { sentiment, urgency, topics };
}
