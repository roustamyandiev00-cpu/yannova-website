import { db } from '@/lib/firebase';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';

const DEFAULT_AUTO_REPLIES = {
  enabled: true,
  aiEnabled: true,
  businessHoursOnly: true,
  offlineMessage: 'Bedankt voor uw bericht! We zijn momenteel niet bereikbaar. We nemen tijdens onze openingsuren (maandag tot vrijdag van 8u tot 17u) contact met u op. Voor dringende vragen kunt u ons bellen op 03/334 50 53.',
  responses: {
    offerte: 'Bedankt voor uw interesse in een offerte! We nemen binnen 24 uur contact met u op om een afspraak te maken voor een gratis opmeting.',
    prijs: 'Onze prijzen zijn maatwerk afhankelijk van uw specifieke situatie. We maken graag een vrijblijvende offerte na een gratis opmeting ter plaatse.',
    ramen: 'Wij plaatsen PVC en aluminium ramen van topkwaliteit met HR++ beglazing. Alle ramen worden op maat gemaakt en zijn beschikbaar in diverse kleuren en stijlen.',
    deuren: 'Onze deuren zijn beschikbaar in PVC, aluminium en hout. We bieden zowel voordeuren als achterdeuren aan, allemaal met inbraakwerende sloten.',
    gevel: 'Voor gevelrenovatie bieden we crepi, isolatie en volledige gevelbekleding. Dit verbetert zowel het uiterlijk als de energieprestaties van uw woning.',
    isolatie: 'Wij isoleren daken, gevels en vloeren. Goede isolatie bespaart u direct op energiekosten en verhoogt het wooncomfort.',
    garantie: 'We geven 10 jaar garantie op onze werkzaamheden en 30 jaar op de profielen van onze ramen. U krijgt ook altijd een uitgebreide service na plaatsing.',
    afspraak: 'U kunt een afspraak maken via onze website, telefonisch op 03/334 50 53, of via WhatsApp. We zijn beschikbaar van maandag tot vrijdag van 8u tot 17u.',
    plaatsing: 'Onze ervaren vakmensen plaatsen uw ramen en deuren met precisie. We werken netjes, snel en zorgen voor een perfecte afwerking.',
    onderhoud: 'Onze producten zijn onderhoudsarm. Af en toe schoonmaken met een zachte zeepoplossing is voldoende om ze jarenlang mooi te houden.',
    kleuren: 'We bieden ramen en deuren aan in diverse kleuren, inclusief houtlook. Alle RAL-kleuren zijn mogelijk voor een perfecte match met uw woning.',
    isolatieglas: 'Onze ramen zijn standaard voorzien van HR++ beglazing voor optimale isolatie. Triple glas is ook mogelijk voor nog betere energieprestaties.',
    inbraak: 'Onze ramen en deuren zijn voorzien van inbraakwerende beslag en sloten. Veiligheid staat voorop, zonder in te boeten aan esthetiek.',
    renovatie: 'Een gevelrenovatie met nieuwe ramen en isolatie verhoogt de waarde van uw woning en bespaart direct op energiekosten.',
    subsidie: 'Er zijn verschillende subsidies beschikbaar voor energiebesparende maatregelen. We informeren u graag over de mogelijkheden.',
  },
};

export async function seedChatAutomationConfig() {
  try {
    const configRef = doc(collection(db, 'chatAutomation'), 'default');
    await setDoc(configRef, {
      ...DEFAULT_AUTO_REPLIES,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    console.log('✅ Chat automation configuration seeded successfully!');
    return { success: true, message: 'Chat automation config created' };
  } catch (error) {
    console.error('Error seeding chat automation:', error);
    return { error: 'Failed to seed chat automation config' };
  }
}

// Admin settings template
export async function seedAdminSettings() {
  try {
    const settingsRef = doc(collection(db, 'adminSettings'), 'chat');
    await setDoc(settingsRef, {
      chatEnabled: true,
      autoReplyEnabled: true,
      emailNotifications: true,
      notificationEmail: 'info@yannova.be',
      businessHours: {
        start: 8,
        end: 17,
        days: [1, 2, 3, 4, 5], // Monday-Friday
      },
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    console.log('✅ Admin settings seeded successfully!');
    return { success: true, message: 'Admin settings created' };
  } catch (error) {
    console.error('Error seeding admin settings:', error);
    return { error: 'Failed to seed admin settings' };
  }
}

// Combined seed function
export async function initializeFirebaseData() {
  console.log('🌱 Initializing Firebase data...');
  
  const results = await Promise.all([
    seedChatAutomationConfig(),
    seedAdminSettings(),
  ]);
  
  const allSuccess = results.every(r => r.success);
  
  if (allSuccess) {
    console.log('✅ All Firebase data initialized successfully!');
    return { success: true, message: 'Firebase data initialized' };
  } else {
    console.error('❌ Some seeding operations failed');
    return { error: 'Partial initialization failure' };
  }
}
