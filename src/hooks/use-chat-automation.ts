'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  getDocs,
  Timestamp 
} from 'firebase/firestore';
import { generateText } from 'ai';
import { google } from '@ai-sdk/google';

interface AutoReplyConfig {
  id: string;
  enabled: boolean;
  responses: Record<string, string>;
  aiEnabled: boolean;
  offlineMessage: string;
  businessHoursOnly: boolean;
}

const DEFAULT_RESPONSES = {
  'offerte': 'Bedankt voor uw interesse in een offerte! We nemen binnen 24 uur contact met u op om een afspraak te maken voor een gratis opmeting.',
  'prijs': 'Onze prijzen zijn maatwerk afhankelijk van uw specifieke situatie. We maken graag een vrijblijvende offerte na een gratis opmeting ter plaatse.',
  'ramen': 'Wij plaatsen PVC en aluminium ramen van topkwaliteit met HR++ beglazing. Alle ramen worden op maat gemaakt en zijn beschikbaar in diverse kleuren en stijlen.',
  'deuren': 'Onze deuren zijn beschikbaar in PVC, aluminium en hout. We bieden zowel voordeuren als achterdeuren aan, allemaal met inbraakwerende sloten.',
  'gevel': 'Voor gevelrenovatie bieden we crepi, isolatie en volledige gevelbekleding. Dit verbetert zowel het uiterlijk als de energieprestaties van uw woning.',
  'isolatie': 'Wij isoleren daken, gevels en vloeren. Goede isolatie bespaart u direct op energiekosten en verhoogt het wooncomfort.',
  'garantie': 'We geven 10 jaar garantie op onze werkzaamheden en 30 jaar op de profielen van onze ramen. U krijgt ook altijd een uitgebreide service na plaatsing.',
  'afspraak': 'U kunt een afspraak maken via onze website, telefonisch op 03/334 50 53, of via WhatsApp. We zijn beschikbaar van maandag tot vrijdag van 8u tot 17u.',
};

export function useChatAutomation(sessionId: string | null, userEmail: string) {
  const [config, setConfig] = useState<AutoReplyConfig | null>(null);
  const [isBusinessHours, setIsBusinessHours] = useState(true);

  // Check business hours (8am - 5pm, Mon-Fri, Belgium time)
  useEffect(() => {
    const checkHours = () => {
      const now = new Date();
      const belgiumTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Brussels' }));
      const hour = belgiumTime.getHours();
      const day = belgiumTime.getDay();
      
      // Monday-Friday, 8am-5pm
      const isHours = day >= 1 && day <= 5 && hour >= 8 && hour < 17;
      setIsBusinessHours(isHours);
    };

    checkHours();
    const interval = setInterval(checkHours, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  // Load config from Firestore
  useEffect(() => {
    const loadConfig = async () => {
      const configRef = collection(db, 'chatAutomation');
      const snapshot = await getDocs(configRef);
      if (!snapshot.empty) {
        const doc = snapshot.docs[0];
        setConfig({
          id: doc.id,
          ...doc.data() as Omit<AutoReplyConfig, 'id'>,
        });
      }
    };
    loadConfig();
  }, []);

  const sendAutoReply = async (messageText: string) => {
    if (!config?.enabled || !sessionId) return;

    // Check if outside business hours
    if (config.businessHoursOnly && !isBusinessHours) {
      await sendOfflineMessage();
      return;
    }

    // Check for keyword matches
    const lowerMessage = messageText.toLowerCase();
    let replyText = '';

    for (const [keyword, response] of Object.entries(config.responses || DEFAULT_RESPONSES)) {
      if (lowerMessage.includes(keyword)) {
        replyText = response;
        break;
      }
    }

    // If no keyword match and AI is enabled, generate AI response
    if (!replyText && config.aiEnabled) {
      replyText = await generateAiResponse(messageText);
    }

    if (replyText) {
      const messagesRef = collection(db, 'chatMessages');
      await addDoc(messagesRef, {
        sessionId,
        text: replyText,
        sender: 'admin',
        email: 'bot@yannova.be',
        timestamp: Timestamp.now(),
        autoReply: true,
      });
    }
  };

  const sendOfflineMessage = async () => {
    if (!sessionId) return;

    const messagesRef = collection(db, 'chatMessages');
    await addDoc(messagesRef, {
      sessionId,
      text: config?.offlineMessage || 'Bedankt voor uw bericht! We zijn momenteel niet bereikbaar. We nemen tijdens onze openingsuren (ma-vrij 8u-17u) contact met u op. Voor dringende vragen kunt u ons bellen op 03/334 50 53.',
      sender: 'admin',
      email: 'bot@yannova.be',
      timestamp: Timestamp.now(),
      autoReply: true,
      offline: true,
    });
  };

  const generateAiResponse = async (userMessage: string): Promise<string> => {
    try {
      const { text } = await generateText({
        model: google('gemini-2.0-flash-001'),
        prompt: `Je bent een behulpzame chatbot voor Yannova Bouw, een bouwbedrijf in Zoersel gespecialiseerd in ramen, deuren, gevelrenovatie en isolatie.

Gebruikersvraag: "${userMessage}"

Geef een kort, professioneel antwoord in het Nederlands. Maximaal 2-3 zinnen. Wees vriendelijk en nodig uit om contact op te nemen voor een vrijblijvende offerte.

Belangrijke info:
- Werkgebied: Zoersel, Antwerpen, Mechelen
- 15+ jaar ervaring
- Gratis opmeting en offerte
- 03/334 50 53 / info@yannova.be

Als je het antwoord niet weet, verwijs dan naar het contactformulier of telefoonnummer.`,
      });

      return text;
    } catch (error) {
      console.error('AI generation error:', error);
      return 'Bedankt voor uw vraag! Een van onze medewerkers neemt zo spoedig mogelijk contact met u op. U kunt ons ook direct bellen op 03/334 50 53.';
    }
  };

  return {
    sendAutoReply,
    isBusinessHours,
    config,
  };
}
