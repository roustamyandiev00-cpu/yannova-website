import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

export default async function StatusPage() {
  const session = await auth();
  
  if (!session?.user) {
    redirect('/admin/login');
  }

  let dbStatus = 'Unknown';
  let dbError = null;
  let userCount = 0;

  try {
    await prisma.$queryRaw`SELECT 1`;
    userCount = await prisma.user.count();
    dbStatus = 'Connected';
  } catch (error) {
    dbStatus = 'Error';
    dbError = error instanceof Error ? error.message : 'Unknown error';
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">System Status</h1>
      
      <div className="space-y-4">
        {/* Authentication Status */}
        <div className="bg-card p-6 rounded-lg border border-white/10">
          <h2 className="text-lg font-semibold mb-4">Authentication</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Status:</span>
              <span className="text-green-400 font-semibold">✓ Authenticated</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">User:</span>
              <span className="text-white">{session.user.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Role:</span>
              <span className="text-white">{(session.user as any).role || 'N/A'}</span>
            </div>
          </div>
        </div>

        {/* Database Status */}
        <div className="bg-card p-6 rounded-lg border border-white/10">
          <h2 className="text-lg font-semibold mb-4">Database</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Status:</span>
              <span className={dbStatus === 'Connected' ? 'text-green-400 font-semibold' : 'text-red-400 font-semibold'}>
                {dbStatus === 'Connected' ? '✓ Connected' : '✗ Error'}
              </span>
            </div>
            {dbStatus === 'Connected' && (
              <div className="flex justify-between">
                <span className="text-gray-400">Total Users:</span>
                <span className="text-white">{userCount}</span>
              </div>
            )}
            {dbError && (
              <div className="mt-2 p-3 bg-red-500/10 border border-red-500/20 rounded text-red-400 text-sm">
                {dbError}
              </div>
            )}
          </div>
        </div>

        {/* Environment */}
        <div className="bg-card p-6 rounded-lg border border-white/10">
          <h2 className="text-lg font-semibold mb-4">Environment</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Node Environment:</span>
              <span className="text-white">{process.env.NODE_ENV}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Next.js Version:</span>
              <span className="text-white">16.1.6</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
