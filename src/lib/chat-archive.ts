import { db } from '@/lib/firebase';
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy,
  setDoc,
  deleteDoc,
  writeBatch,
  Timestamp 
} from 'firebase/firestore';

interface ArchivedSession {
  id: string;
  email: string;
  status: 'archived';
  createdAt: Timestamp;
  updatedAt: Timestamp;
  archivedAt: Timestamp;
  archivedBy: string;
  messageCount: number;
  tags?: string[];
  notes?: string;
  rating?: number;
  leadConverted?: boolean;
}

export async function archiveChatSession(
  sessionId: string, 
  adminEmail: string,
  options?: {
    tags?: string[];
    notes?: string;
    rating?: number;
    leadConverted?: boolean;
  }
) {
  try {
    // Get session data
    const sessionRef = doc(db, 'chatSessions', sessionId);
    const sessionSnap = await getDoc(sessionRef);
    
    if (!sessionSnap.exists()) {
      return { error: 'Session not found' };
    }

    const sessionData = sessionSnap.data();

    // Get all messages for this session
    const messagesRef = collection(db, 'chatMessages');
    const messagesQuery = query(
      messagesRef,
      where('sessionId', '==', sessionId)
    );
    const messagesSnap = await getDocs(messagesQuery);
    
    const messages = messagesSnap.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Create archived session
    const archivedData: ArchivedSession = {
      id: sessionId,
      email: sessionData.email,
      status: 'archived',
      createdAt: sessionData.createdAt,
      updatedAt: sessionData.updatedAt,
      archivedAt: Timestamp.now(),
      archivedBy: adminEmail,
      messageCount: messages.length,
      tags: options?.tags || [],
      notes: options?.notes || '',
      rating: options?.rating,
      leadConverted: options?.leadConverted || false,
    };

    // Save to archived collection with messages as subcollection
    const batch = writeBatch(db);
    
    // Archive main session data
    const archivedRef = doc(db, 'chatArchived', sessionId);
    batch.set(archivedRef, archivedData);

    // Archive messages as subcollection
    messages.forEach(msg => {
      const archivedMsgRef = doc(db, 'chatArchived', sessionId, 'messages', msg.id);
      batch.set(archivedMsgRef, msg);
    });

    // Delete original data
    batch.delete(sessionRef);
    messagesSnap.docs.forEach(msgDoc => {
      batch.delete(doc(db, 'chatMessages', msgDoc.id));
    });

    await batch.commit();

    return { 
      success: true, 
      message: 'Session archived successfully',
      archivedId: sessionId,
    };
  } catch (error) {
    console.error('Archive error:', error);
    return { error: 'Failed to archive session' };
  }
}

export async function getArchivedSessions(
  filters?: {
    startDate?: Date;
    endDate?: Date;
    tags?: string[];
    leadConverted?: boolean;
    searchEmail?: string;
  }
) {
  try {
    const archivedRef = collection(db, 'chatArchived');
    let archivedQuery = query(archivedRef, orderBy('archivedAt', 'desc'));

    const snapshot = await getDocs(archivedQuery);
    let sessions = snapshot.docs.map(doc => doc.data() as ArchivedSession);

    // Apply filters
    if (filters) {
      if (filters.startDate) {
        sessions = sessions.filter(s => 
          s.archivedAt.toDate() >= filters.startDate!
        );
      }
      if (filters.endDate) {
        sessions = sessions.filter(s => 
          s.archivedAt.toDate() <= filters.endDate!
        );
      }
      if (filters.tags && filters.tags.length > 0) {
        sessions = sessions.filter(s => 
          filters.tags!.some(tag => s.tags?.includes(tag))
        );
      }
      if (filters.leadConverted !== undefined) {
        sessions = sessions.filter(s => 
          s.leadConverted === filters.leadConverted
        );
      }
      if (filters.searchEmail) {
        sessions = sessions.filter(s => 
          s.email.toLowerCase().includes(filters.searchEmail!.toLowerCase())
        );
      }
    }

    return { success: true, sessions };
  } catch (error) {
    console.error('Get archived error:', error);
    return { error: 'Failed to fetch archived sessions' };
  }
}

export async function restoreArchivedSession(sessionId: string) {
  try {
    const archivedRef = doc(db, 'chatArchived', sessionId);
    const archivedSnap = await getDoc(archivedRef);

    if (!archivedSnap.exists()) {
      return { error: 'Archived session not found' };
    }

    const archivedData = archivedSnap.data() as ArchivedSession;

    // Get archived messages
    const messagesRef = collection(db, 'chatArchived', sessionId, 'messages');
    const messagesSnap = await getDocs(messagesRef);

    const batch = writeBatch(db);

    // Restore session
    const sessionRef = doc(db, 'chatSessions', sessionId);
    batch.set(sessionRef, {
      email: archivedData.email,
      status: 'active',
      createdAt: archivedData.createdAt,
      updatedAt: Timestamp.now(),
    });

    // Restore messages
    messagesSnap.docs.forEach(msgDoc => {
      const msgData = msgDoc.data();
      const msgRef = doc(db, 'chatMessages', msgDoc.id);
      batch.set(msgRef, msgData);
    });

    // Delete archived data
    batch.delete(archivedRef);
    messagesSnap.docs.forEach(msgDoc => {
      batch.delete(doc(db, 'chatArchived', sessionId, 'messages', msgDoc.id));
    });

    await batch.commit();

    return { success: true, message: 'Session restored' };
  } catch (error) {
    console.error('Restore error:', error);
    return { error: 'Failed to restore session' };
  }
}

export async function getChatStatistics(period: 'day' | 'week' | 'month' | 'year' = 'month') {
  try {
    const now = new Date();
    const startDate = new Date();
    
    switch (period) {
      case 'day':
        startDate.setDate(now.getDate() - 1);
        break;
      case 'week':
        startDate.setDate(now.getDate() - 7);
        break;
      case 'month':
        startDate.setMonth(now.getMonth() - 1);
        break;
      case 'year':
        startDate.setFullYear(now.getFullYear() - 1);
        break;
    }

    // Get active sessions
    const sessionsRef = collection(db, 'chatSessions');
    const sessionsSnap = await getDocs(sessionsRef);
    const activeSessions = sessionsSnap.docs.length;

    // Get archived sessions in period
    const archivedRef = collection(db, 'chatArchived');
    const archivedSnap = await getDocs(archivedRef);
    const archivedSessions = archivedSnap.docs.filter(
      doc => doc.data().archivedAt.toDate() >= startDate
    ).length;

    // Calculate stats
    const totalSessions = activeSessions + archivedSessions;
    
    // Average messages per session
    let totalMessages = 0;
    archivedSnap.docs.forEach(doc => {
      totalMessages += doc.data().messageCount || 0;
    });
    const avgMessages = archivedSessions > 0 ? Math.round(totalMessages / archivedSessions) : 0;

    // Conversion rate
    const convertedLeads = archivedSnap.docs.filter(
      doc => doc.data().leadConverted === true
    ).length;
    const conversionRate = archivedSessions > 0 
      ? Math.round((convertedLeads / archivedSessions) * 100) 
      : 0;

    return {
      success: true,
      stats: {
        totalSessions,
        activeSessions,
        archivedSessions,
        avgMessagesPerSession: avgMessages,
        conversionRate,
        period,
      }
    };
  } catch (error) {
    console.error('Stats error:', error);
    return { error: 'Failed to calculate statistics' };
  }
}
