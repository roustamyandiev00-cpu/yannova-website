import { Metadata } from 'next';
import { ChatArchiveDashboard } from '@/components/admin/ChatArchiveDashboard';

export const metadata: Metadata = {
  title: 'Chat Archief | Yannova Admin',
  description: 'Gearchiveerde chat gesprekken bekijken en analyseren',
};

export default function ChatArchivePage() {
  return (
    <main>
      <h1 className="mb-6 text-2xl font-bold">Chat Archief</h1>
      <ChatArchiveDashboard />
    </main>
  );
}
