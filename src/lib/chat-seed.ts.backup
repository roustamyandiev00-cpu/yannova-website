import { db } from '@/lib/firebase';
import { 
  collection, 
  addDoc, 
  serverTimestamp,
  Timestamp 
} from 'firebase/firestore';

export async function seedChatTestData() {
  const testSessions = [
    {
      email: 'jan@example.com',
      status: 'active',
      message: 'Ik wil graag een offerte voor nieuwe ramen in mijn woning.',
    },
    {
      email: 'maria@test.nl',
      status: 'active',
      message: 'Hoeveel kost een gevelrenovatie voor een rijhuis?',
    },
    {
      email: 'peter.demaeght@gmail.com',
      status: 'active',
      message: 'Wanneer kunnen jullie langskomen voor een opmeting?',
    },
  ];

  const responses = [
    'Bedankt voor uw interesse! We nemen binnen 24 uur contact met u op voor een vrijblijvende offerte.',
    'Dat kan zeker! Wij plaatsen zowel PVC als aluminium ramen met HR++ beglazing. Wanneer past een opmeting?',
    'Onze prijzen zijn maatwerk, maar we maken graag een offerte na een gratis opmeting ter plaatse.',
    'We zijn beschikbaar van maandag tot vrijdag van 8u tot 17u. Welke dag past u het best?',
  ];

  for (const session of testSessions) {
    // Create session
    const sessionsRef = collection(db, 'chatSessions');
    const sessionDoc = await addDoc(sessionsRef, {
      email: session.email,
      status: session.status,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    // Add initial message
    const messagesRef = collection(db, 'chatMessages');
    await addDoc(messagesRef, {
      sessionId: sessionDoc.id,
      text: 'Hallo! 👋 Welkom bij Yannova. Waarmee kan ik u helpen vandaag?',
      sender: 'admin',
      email: 'admin@yannova.be',
      timestamp: serverTimestamp(),
    });

    await addDoc(messagesRef, {
      sessionId: sessionDoc.id,
      text: session.message,
      sender: 'user',
      email: session.email,
      timestamp: serverTimestamp(),
    });

    // Add random admin response
    await addDoc(messagesRef, {
      sessionId: sessionDoc.id,
      text: responses[Math.floor(Math.random() * responses.length)],
      sender: 'admin',
      email: 'admin@yannova.be',
      timestamp: serverTimestamp(),
    });
  }

  console.log('✅ Chat test data seeded successfully!');
  return { success: true, message: 'Test data created' };
}

export async function clearChatTestData() {
  // Note: In production, you would delete from Firestore here
  // For safety, we'll just log this action
  console.log('🧹 Chat test data cleared (implement delete logic if needed)');
  return { success: true, message: 'Test data cleared' };
}
