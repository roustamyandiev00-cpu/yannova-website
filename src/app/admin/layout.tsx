import Link from 'next/link';
import { signOut } from '@/auth';
import { Home, Layers, LogOut, FileText, Star, BarChart3, Image as ImageIcon, Settings, Users, Search, MessageCircle, Archive } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-background">
      <div className="w-full flex-none md:w-64 bg-card border-r border-white/10">
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
          <Link
            className="mb-2 flex h-20 items-end justify-start rounded-md bg-secondary p-4 md:h-40"
            href="/"
          >
            <div className="w-32 text-white md:w-40 text-2xl font-bold">
              Yannova Admin
            </div>
          </Link>
          <div className="flex grow flex-row space-x-2 overflow-x-auto pb-2 md:flex-col md:space-x-0 md:space-y-2 md:overflow-y-auto md:pb-0">
            <Link
              href="/admin"
              className="flex h-[48px] grow shrink-0 items-center justify-center gap-2 rounded-md bg-white/5 p-3 text-sm font-medium hover:bg-secondary/20 hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3 text-foreground"
            >
              <Home className="w-6" />
              <p className="hidden md:block">Dashboard</p>
            </Link>
            <Link
              href="/admin/projects"
              className="flex h-[48px] grow shrink-0 items-center justify-center gap-2 rounded-md bg-white/5 p-3 text-sm font-medium hover:bg-secondary/20 hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3 text-foreground"
            >
              <Layers className="w-6" />
              <p className="hidden md:block">Projecten</p>
            </Link>
            <Link
              href="/admin/leads"
              className="flex h-[48px] grow shrink-0 items-center justify-center gap-2 rounded-md bg-white/5 p-3 text-sm font-medium hover:bg-secondary/20 hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3 text-foreground"
            >
              <FileText className="w-6" />
              <p className="hidden md:block">Aanvragen</p>
            </Link>
            <Link
              href="/admin/chat"
              className="flex h-[48px] grow shrink-0 items-center justify-center gap-2 rounded-md bg-white/5 p-3 text-sm font-medium hover:bg-secondary/20 hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3 text-foreground"
            >
              <MessageCircle className="w-6" />
              <p className="hidden md:block">Live Chat</p>
            </Link>
            <Link
              href="/admin/chat-archief"
              className="flex h-[48px] grow shrink-0 items-center justify-center gap-2 rounded-md bg-white/5 p-3 text-sm font-medium hover:bg-secondary/20 hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3 text-foreground"
            >
              <Archive className="w-6" />
              <p className="hidden md:block">Chat Archief</p>
            </Link>
            <Link
              href="/admin/testimonials"
              className="flex h-[48px] grow shrink-0 items-center justify-center gap-2 rounded-md bg-white/5 p-3 text-sm font-medium hover:bg-secondary/20 hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3 text-foreground"
            >
              <Star className="w-6" />
              <p className="hidden md:block">Testimonials</p>
            </Link>
            <Link
              href="/admin/analytics"
              className="flex h-[48px] grow shrink-0 items-center justify-center gap-2 rounded-md bg-white/5 p-3 text-sm font-medium hover:bg-secondary/20 hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3 text-foreground"
            >
              <BarChart3 className="w-6" />
              <p className="hidden md:block">Analytics</p>
            </Link>
            <Link
              href="/admin/seo"
              className="flex h-[48px] grow shrink-0 items-center justify-center gap-2 rounded-md bg-white/5 p-3 text-sm font-medium hover:bg-secondary/20 hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3 text-foreground"
            >
              <Search className="w-6" />
              <p className="hidden md:block">SEO</p>
            </Link>
            <Link
              href="/admin/media"
              className="flex h-[48px] grow shrink-0 items-center justify-center gap-2 rounded-md bg-white/5 p-3 text-sm font-medium hover:bg-secondary/20 hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3 text-foreground"
            >
              <ImageIcon className="w-6" aria-hidden="true" />
              <p className="hidden md:block">Media</p>
            </Link>
            <Link
              href="/admin/users"
              className="flex h-[48px] grow shrink-0 items-center justify-center gap-2 rounded-md bg-white/5 p-3 text-sm font-medium hover:bg-secondary/20 hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3 text-foreground"
            >
              <Users className="w-6" />
              <p className="hidden md:block">Gebruikers</p>
            </Link>
            <Link
              href="/admin/settings"
              className="flex h-[48px] grow shrink-0 items-center justify-center gap-2 rounded-md bg-white/5 p-3 text-sm font-medium hover:bg-secondary/20 hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3 text-foreground"
            >
              <Settings className="w-6" />
              <p className="hidden md:block">Instellingen</p>
            </Link>

            <div className="hidden h-auto w-full grow rounded-md bg-white/5 md:block"></div>

            <form
              action={async () => {
                'use server';
                await signOut();
              }}
            >
              <button className="flex h-[48px] w-full grow shrink-0 items-center justify-center gap-2 rounded-md bg-white/5 p-3 text-sm font-medium hover:bg-red-500/20 hover:text-red-400 md:flex-none md:justify-start md:p-2 md:px-3 text-red-400">
                <LogOut className="w-6" />
                <p className="hidden md:block">Uitloggen</p>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
