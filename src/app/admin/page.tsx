import { prisma } from '@/lib/prisma';
import { supabase } from '@/lib/supabase';
import { MessageCircle, Users, Briefcase, FileText, Star, Image as ImageIcon, TrendingUp, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import type { Lead, Project } from '@prisma/client';

// Simple Stat Card Component
interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
  href?: string;
}

function StatCard({ title, value, icon: Icon, color, href }: StatCardProps) {
  const content = (
    <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10 hover:bg-white/5 transition-colors">
      <div className="flex items-center gap-x-4">
        <div className={`rounded-lg p-2 ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <p className="text-sm font-medium leading-6 text-gray-400">{title}</p>
          <p className="text-3xl font-bold tracking-tight text-white">{value}</p>
        </div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}

export default async function AdminDashboard() {
  // Fetch data with error handling
  let projectCount = 0;
  let leadsCount = 0;
  let testimonialCount = 0;
  let mediaCount = 0;
  let pageViewsToday = 0;
  let userCount = 0;
  let activeChatSessions = 0;
  let recentLeads: Lead[] = [];
  let recentProjects: Project[] = [];

  try {
    [projectCount, leadsCount, testimonialCount, mediaCount, pageViewsToday, userCount] =
      await Promise.all([
      prisma.project.count(),
      prisma.lead.count({ where: { read: false } }),
      prisma.testimonial.count({ where: { approved: false } }),
      prisma.mediaFile.count(),
      prisma.pageView.count({
        where: {
          createdAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
          },
        },
      }),
      prisma.user.count(),
      ]);

    // Get recent leads
    recentLeads = await prisma.lead.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
    });

    // Get recent projects
    recentProjects = await prisma.project.findMany({
      take: 3,
      orderBy: { createdAt: 'desc' },
    });
    // Active chat sessions from Supabase
    try {
      const { count } = await supabase
        .from('chat_sessions')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'active');
      activeChatSessions = count || 0;
    } catch (supabaseError) {
      console.error('Chat session count error:', supabaseError);
    }
  } catch (error) {
    console.error('Dashboard data fetch error:', error);
  }

  return (
    <main>
      <h1 className="mb-4 text-xl md:text-2xl font-bold">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <StatCard
          title="Projecten"
          value={projectCount}
          icon={Briefcase}
          color="bg-blue-500"
          href="/admin/projects"
        />
        <StatCard
          title="Live Chats"
          value={activeChatSessions}
          icon={MessageCircle}
          color="bg-pink-500"
          href="/admin/chat"
        />
        <StatCard
          title="Nieuwe Aanvragen"
          value={leadsCount}
          icon={FileText}
          color="bg-orange-500"
          href="/admin/leads"
        />
        <StatCard
          title="Te Beoordelen"
          value={testimonialCount}
          icon={Star}
          color="bg-yellow-500"
          href="/admin/testimonials"
        />
        <StatCard
          title="Media Bestanden"
          value={mediaCount}
          icon={ImageIcon}
          color="bg-purple-500"
          href="/admin/media"
        />
        <StatCard
          title="Gebruikers"
          value={userCount}
          icon={Users}
          color="bg-indigo-500"
          href="/admin/users"
        />
      </div>

      {/* Quick Overview */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Leads */}
        <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Recente Aanvragen</h2>
            <Link
              href="/admin/leads"
              className="text-sm text-secondary hover:text-secondary/80"
            >
              Bekijk alles →
            </Link>
          </div>
          {recentLeads.length === 0 ? (
            <p className="text-gray-400 text-sm">Nog geen aanvragen ontvangen.</p>
          ) : (
            <div className="space-y-3">
              {recentLeads.map((lead) => (
                <div key={lead.id} className="flex items-start justify-between border-b border-white/10 pb-3 last:border-0">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {lead.name || lead.email || 'Anoniem'}
                    </p>
                    <p className="text-xs text-gray-400 line-clamp-1">{lead.message}</p>
                  </div>
                  {!lead.read && (
                    <span className="ml-2 inline-flex h-2 w-2 rounded-full bg-secondary shrink-0 mt-1.5" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Projects */}
        <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Recente Projecten</h2>
            <Link
              href="/admin/projects"
              className="text-sm text-secondary hover:text-secondary/80"
            >
              Bekijk alles →
            </Link>
          </div>
          {recentProjects.length === 0 ? (
            <p className="text-gray-400 text-sm">Nog geen projecten toegevoegd.</p>
          ) : (
            <div className="space-y-3">
              {recentProjects.map((project) => (
                <div key={project.id} className="flex items-center gap-3 border-b border-white/10 pb-3 last:border-0">
                  <div className="h-12 w-12 rounded-lg bg-white/5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{project.title}</p>
                    <p className="text-xs text-gray-400">{project.category}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 rounded-xl bg-linear-to-r from-secondary/20 to-blue-500/20 p-6 ring-1 ring-white/10">
        <h2 className="text-lg font-semibold text-foreground mb-4">Snelle Acties</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/admin/projects/new"
            className="rounded-lg bg-card p-4 text-center hover:bg-white/10 transition-colors ring-1 ring-white/10"
          >
            <Briefcase className="h-6 w-6 mx-auto mb-2 text-secondary" />
            <p className="text-sm font-medium text-foreground">Nieuw Project</p>
          </Link>
          <Link
            href="/admin/testimonials"
            className="rounded-lg bg-card p-4 text-center hover:bg-white/10 transition-colors ring-1 ring-white/10"
          >
            <Star className="h-6 w-6 mx-auto mb-2 text-yellow-400" />
            <p className="text-sm font-medium text-foreground">Testimonials</p>
          </Link>
          <Link
            href="/admin/analytics"
            className="rounded-lg bg-card p-4 text-center hover:bg-white/10 transition-colors ring-1 ring-white/10"
          >
            <TrendingUp className="h-6 w-6 mx-auto mb-2 text-green-400" />
            <p className="text-sm font-medium text-foreground">Analytics</p>
          </Link>
          <Link
            href="/admin/settings"
            className="rounded-lg bg-card p-4 text-center hover:bg-white/10 transition-colors ring-1 ring-white/10"
          >
            <Users className="h-6 w-6 mx-auto mb-2 text-purple-400" />
            <p className="text-sm font-medium text-foreground">Instellingen</p>
          </Link>
        </div>
      </div>

      {/* Analytics Preview */}
      <div className="mt-6 rounded-xl bg-linear-to-r from-green-500/10 to-blue-500/10 p-6 ring-1 ring-white/10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-400" />
            Analytics Overzicht
          </h2>
          <Link
            href="/admin/analytics"
            className="text-sm text-secondary hover:text-secondary/80"
          >
            Volledig dashboard →
          </Link>
        </div>
        <p className="text-sm text-gray-400 mb-4">
          Track je Google Ads performance, SEO rankings, conversies en meer in het nieuwe analytics dashboard.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="bg-card/50 rounded-lg p-4">
            <p className="text-xs text-gray-400 mb-1">Google Ads</p>
            <p className="text-sm text-white">Track zoekwoorden & conversies</p>
          </div>
          <div className="bg-card/50 rounded-lg p-4">
            <p className="text-xs text-gray-400 mb-1">SEO Rankings</p>
            <p className="text-sm text-white">Monitor keyword posities</p>
          </div>
          <div className="bg-card/50 rounded-lg p-4">
            <p className="text-xs text-gray-400 mb-1">Verbeteringen</p>
            <p className="text-sm text-white">Bijhouden wat werkt</p>
          </div>
        </div>
        <p className="mt-4 text-xs text-gray-500">
          Vandaag geregistreerde pageviews: {pageViewsToday}
        </p>
      </div>
    </main>
  );
}
