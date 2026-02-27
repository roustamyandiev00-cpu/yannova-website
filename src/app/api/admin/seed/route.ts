import { NextResponse } from 'next/server';
import { seedChatTestData } from '@/lib/chat-seed';
import { initializeFirebaseData } from '@/lib/firebase-seed';

export async function POST(request: Request) {
  try {
    const { type } = await request.json();
    
    switch (type) {
      case 'chat-test-data':
        const testResult = await seedChatTestData();
        return NextResponse.json(testResult);
        
      case 'firebase-init':
        const initResult = await initializeFirebaseData();
        return NextResponse.json(initResult);
        
      case 'full-setup':
        const [testData, firebaseData] = await Promise.all([
          seedChatTestData(),
          initializeFirebaseData(),
        ]);
        return NextResponse.json({
          success: true,
          testData,
          firebaseData,
        });
        
      default:
        return NextResponse.json(
          { error: 'Invalid seed type' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json(
      { error: 'Failed to seed data' },
      { status: 500 }
    );
  }
}
