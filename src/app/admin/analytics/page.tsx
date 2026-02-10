import { prisma } from '@/lib/prisma';
import { TrendingUp, Users, Eye, MousePointerClick } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AnalyticsPage() {
    // Get page views from the last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const pageViews = await prisma.pageView.findMany({
        where: {
            createdAt: {
                gte: thirtyDaysAgo,
            },
        },
        orderBy: {
            createdAt: 'desc',
        },
    });

    // Get today's views
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayViews = pageViews.filter(view => new Date(view.createdAt) >= today);

    // Get this week's views
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const weekViews = pageViews.filter(view => new Date(view.createdAt) >= weekAgo);

    // Calculate popular pages
    const pageStats = pageViews.reduce((acc, view) => {
        acc[view.path] = (acc[view.path] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const popularPages = Object.entries(pageStats)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10)
        .map(([path, views]) => ({ path, views }));

    // Get project views
    const projects = await prisma.project.findMany({
        select: {
            id: true,
            title: true,
            views: true,
        },
        orderBy: {
            views: 'desc',
        },
        take: 5,
    });

    // Get leads stats
    const totalLeads = await prisma.lead.count();
    const unreadLeads = await prisma.lead.count({
        where: { read: false },
    });

    return (
        <main>
            <h1 className="mb-8 text-2xl font-bold text-foreground">Analytics Dashboard</h1>

            {/* Stats Overview */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                    <div className="flex items-center gap-x-4">
                        <div className="rounded-lg p-2 bg-blue-500">
                            <Eye className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <p className="text-sm font-medium leading-6 text-gray-400">Vandaag</p>
                            <p className="text-3xl font-bold tracking-tight text-white">{todayViews.length}</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                    <div className="flex items-center gap-x-4">
                        <div className="rounded-lg p-2 bg-green-500">
                            <TrendingUp className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <p className="text-sm font-medium leading-6 text-gray-400">Deze Week</p>
                            <p className="text-3xl font-bold tracking-tight text-white">{weekViews.length}</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                    <div className="flex items-center gap-x-4">
                        <div className="rounded-lg p-2 bg-purple-500">
                            <Users className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <p className="text-sm font-medium leading-6 text-gray-400">Totale Leads</p>
                            <p className="text-3xl font-bold tracking-tight text-white">{totalLeads}</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                    <div className="flex items-center gap-x-4">
                        <div className="rounded-lg p-2 bg-orange-500">
                            <MousePointerClick className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <p className="text-sm font-medium leading-6 text-gray-400">Ongelezen</p>
                            <p className="text-3xl font-bold tracking-tight text-white">{unreadLeads}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popular Pages & Projects */}
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Popular Pages */}
                <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                    <h2 className="text-lg font-semibold text-foreground mb-4">Populairste Pagina&apos;s</h2>
                    {popularPages.length === 0 ? (
                        <p className="text-gray-400 text-sm">Nog geen data beschikbaar.</p>
                    ) : (
                        <div className="space-y-3">
                            {popularPages.map((page, index) => (
                                <div key={page.path} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/20 text-sm font-semibold text-secondary">
                                            {index + 1}
                                        </span>
                                        <span className="text-sm text-gray-300 truncate max-w-[300px]">
                                            {page.path}
                                        </span>
                                    </div>
                                    <span className="text-sm font-semibold text-white">{page.views} views</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Popular Projects */}
                <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                    <h2 className="text-lg font-semibold text-foreground mb-4">Meest Bekeken Projecten</h2>
                    {projects.length === 0 ? (
                        <p className="text-gray-400 text-sm">Nog geen projecten.</p>
                    ) : (
                        <div className="space-y-3">
                            {projects.map((project, index) => (
                                <div key={project.id} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/20 text-sm font-semibold text-secondary">
                                            {index + 1}
                                        </span>
                                        <span className="text-sm text-gray-300 truncate max-w-[300px]">
                                            {project.title}
                                        </span>
                                    </div>
                                    <span className="text-sm font-semibold text-white">{project.views} views</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-6 rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                <h2 className="text-lg font-semibold text-foreground mb-4">Recente Activiteit</h2>
                {pageViews.length === 0 ? (
                    <p className="text-gray-400 text-sm">Nog geen activiteit.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-white/10">
                            <thead>
                                <tr>
                                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        Pagina
                                    </th>
                                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        Referrer
                                    </th>
                                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        Tijd
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {pageViews.slice(0, 20).map((view) => (
                                    <tr key={view.id} className="hover:bg-white/5">
                                        <td className="px-3 py-3 text-sm text-gray-300 truncate max-w-xs">
                                            {view.path}
                                        </td>
                                        <td className="px-3 py-3 text-sm text-gray-400 truncate max-w-xs">
                                            {view.referrer || '-'}
                                        </td>
                                        <td className="px-3 py-3 text-sm text-gray-400 whitespace-nowrap">
                                            {new Date(view.createdAt).toLocaleString('nl-BE', {
                                                day: 'numeric',
                                                month: 'short',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </main>
    );
}
