import { db } from '@/lib/firebase';
import { collection, query, where, orderBy, limit, getDocs, Timestamp } from 'firebase/firestore';
import nodemailer from 'nodemailer';

interface ChatSession {
  id: string;
  email: string;
  status: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export async function checkAndSendChatNotifications() {
  try {
    // Get active sessions with unread messages
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    
    const sessionsRef = collection(db, 'chatSessions');
    const q = query(
      sessionsRef,
      where('status', '==', 'active'),
      where('updatedAt', '>=', Timestamp.fromDate(fiveMinutesAgo)),
      orderBy('updatedAt', 'desc'),
      limit(10)
    );

    const snapshot = await getDocs(q);
    
    for (const doc of snapshot.docs) {
      const session = doc.data() as ChatSession;
      
      // Check for unread user messages
      const messagesRef = collection(db, 'chatMessages');
      const messagesQuery = query(
        messagesRef,
        where('sessionId', '==', doc.id),
        where('sender', '==', 'user'),
        where('read', '==', false),
        orderBy('timestamp', 'desc'),
        limit(1)
      );
      
      const messagesSnapshot = await getDocs(messagesQuery);
      
      if (!messagesSnapshot.empty) {
        // Send email notification
        await sendChatNotificationEmail(session.email, doc.id);
      }
    }
    
    return { success: true };
  } catch (error) {
    console.error('Chat notification error:', error);
    return { success: false, error };
  }
}

async function sendChatNotificationEmail(userEmail: string, sessionId: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const adminEmail = process.env.ADMIN_EMAIL || 'info@yannova.be';
  
  await transporter.sendMail({
    from: `"Yannova Chat" <${process.env.SMTP_USER}>`,
    to: adminEmail,
    subject: `Nieuw chat bericht van ${userEmail}`,
    html: `
      <h2>Nieuw chat bericht ontvangen</h2>
      <p><strong>Van:</strong> ${userEmail}</p>
      <p><strong>Sessie ID:</strong> ${sessionId}</p>
      <p><strong>Tijd:</strong> ${new Date().toLocaleString('nl-BE')}</p>
      <p>
        <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/chat" 
           style="background-color: #FF6B35; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 10px;">
          Bekijk in Admin
        </a>
      </p>
    `,
  });
}
