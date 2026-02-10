import { prisma } from '@/lib/prisma';
import { Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { markLeadAsRead } from '@/lib/actions';

export const dynamic = 'force-dynamic';

export default async function LeadsPage() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-foreground">Aanvragen & Berichten</h1>
        <span className="inline-flex items-center rounded-md bg-secondary/20 px-2 py-1 text-xs font-medium text-secondary ring-1 ring-inset ring-secondary/20">
            {leads.length} berichten
        </span>
      </div>

      <div className="bg-card shadow-sm ring-1 ring-white/10 rounded-xl overflow-hidden">
        {leads.length === 0 ? (
            <div className="p-10 text-center text-gray-400">
                Nog geen berichten ontvangen.
            </div>
        ) : (
            <ul role="list" className="divide-y divide-white/10">
            {leads.map((lead) => (
                <li key={lead.id} className={`relative flex gap-x-6 p-6 hover:bg-white/5 transition-colors ${!lead.read ? 'bg-secondary/10' : ''}`}>
                    <div className="flex-none">
                        {lead.source === 'chatbot' ? (
                            <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                                <MessageSquare className="h-5 w-5" />
                            </div>
                        ) : (
                            <div className="h-10 w-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
                                <Mail className="h-5 w-5" />
                            </div>
                        )}
                    </div>
                
                <div className="flex-auto">
                    <div className="flex items-baseline justify-between gap-x-4">
                        <p className="text-sm font-semibold leading-6 text-foreground">
                            {lead.name || lead.email || 'Anoniem'}
                            {lead.source === 'chatbot' && <span className="ml-2 text-[10px] text-gray-400 uppercase tracking-wider border border-white/10 rounded px-1">Chatbot</span>}
                        </p>
                        <p className="flex-none text-xs text-gray-400">
                            <time dateTime={lead.createdAt.toISOString()}>
                                {new Date(lead.createdAt).toLocaleDateString('nl-BE', { 
                                    day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' 
                                })}
                            </time>
                        </p>
                    </div>
                    <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-300">
                        {lead.message}
                    </p>
                    <div className="mt-2 flex items-center gap-4 text-xs text-gray-400">
                        {lead.email && (
                            <a href={`mailto:${lead.email}`} className="hover:text-secondary hover:underline">
                                {lead.email}
                            </a>
                        )}
                        {/* Future: Mark as read button form */}
                         {!lead.read && (
                            <form action={markLeadAsRead.bind(null, lead.id)}>
                                <button type="submit" className="flex items-center gap-1 text-secondary hover:text-secondary/80 font-medium">
                                    <CheckCircle className="h-3 w-3" /> Markeer als gelezen
                                </button>
                            </form>
                         )}
                    </div>
                </div>
                </li>
            ))}
            </ul>
        )}
      </div>
    </main>
  );
}
