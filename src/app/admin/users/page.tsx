import { prisma } from '@/lib/prisma';
import { UserPlus, Shield, Clock, CheckCircle, XCircle } from 'lucide-react';
import { toggleUserStatus } from '@/lib/actions';

export const dynamic = 'force-dynamic';

export default async function UsersPage() {
    const users = await prisma.user.findMany({
        orderBy: { createdAt: 'desc' },
        include: {
            _count: {
                select: { activities: true },
            },
        },
    });

    const stats = {
        total: users.length,
        active: users.filter(u => u.active).length,
        inactive: users.filter(u => !u.active).length,
    };

    return (
        <main>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-foreground">Gebruikers Beheer</h1>
                <button className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary/80">
                    <UserPlus className="h-4 w-4" /> Nieuwe Gebruiker
                </button>
            </div>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-3 mb-8">
                <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                    <p className="text-sm font-medium text-gray-400">Totaal Gebruikers</p>
                    <p className="text-3xl font-bold text-white">{stats.total}</p>
                </div>
                <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                    <p className="text-sm font-medium text-gray-400">Actief</p>
                    <p className="text-3xl font-bold text-green-400">{stats.active}</p>
                </div>
                <div className="rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                    <p className="text-sm font-medium text-gray-400">Inactief</p>
                    <p className="text-3xl font-bold text-red-400">{stats.inactive}</p>
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-card shadow-sm ring-1 ring-white/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-white/10">
                        <thead className="bg-white/5">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Gebruiker
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Rol
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Laatste Login
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Activiteiten
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    Acties
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                                                <span className="text-secondary font-semibold">
                                                    {user.name?.charAt(0).toUpperCase() || user.email.charAt(0).toUpperCase()}
                                                </span>
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-foreground">
                                                    {user.name || 'Geen naam'}
                                                </div>
                                                <div className="text-sm text-gray-400">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <Shield className="h-4 w-4 text-secondary" />
                                            <span className="inline-flex items-center rounded-full bg-secondary/20 px-2 py-1 text-xs font-medium text-secondary capitalize">
                                                {user.role.replace('_', ' ')}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {user.active ? (
                                            <span className="inline-flex items-center gap-1 rounded-full bg-green-500/20 px-2 py-1 text-xs font-medium text-green-400">
                                                <CheckCircle className="h-3 w-3" />
                                                Actief
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 rounded-full bg-red-500/20 px-2 py-1 text-xs font-medium text-red-400">
                                                <XCircle className="h-3 w-3" />
                                                Inactief
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                        {user.lastLogin ? (
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-3 w-3" />
                                                {new Date(user.lastLogin).toLocaleDateString('nl-BE', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric',
                                                })}
                                            </div>
                                        ) : (
                                            <span className="text-gray-500">Nooit</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                        {user._count.activities} acties
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <form action={toggleUserStatus.bind(null, user.id)}>
                                            <button
                                                type="submit"
                                                className={`text-xs font-medium ${user.active
                                                        ? 'text-red-400 hover:text-red-300'
                                                        : 'text-green-400 hover:text-green-300'
                                                    }`}
                                            >
                                                {user.active ? 'Deactiveren' : 'Activeren'}
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-6 rounded-xl bg-card p-6 shadow-sm ring-1 ring-white/10">
                <h2 className="text-lg font-semibold text-foreground mb-4">Recente Activiteit</h2>
                <div className="text-sm text-gray-400">
                    Activiteiten log wordt binnenkort toegevoegd...
                </div>
            </div>
        </main>
    );
}
