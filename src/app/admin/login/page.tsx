'use client';

import { useActionState } from 'react';
import { authenticate } from '@/lib/actions';
import { ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [errorMessage, dispatch, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6 md:p-10">
      <div className="w-full max-w-sm overflow-hidden rounded-lg bg-card border border-white/10 p-6 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-foreground">Admin Login</h1>
          <p className="text-sm text-muted-foreground">Log in om projecten te beheren</p>
        </div>
        
        <form action={dispatch} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="email">
              Email
            </label>
            <input
              className="block w-full rounded-md border border-white/10 bg-white/5 py-2 px-3 text-base sm:text-sm text-white placeholder:text-gray-500 focus:border-secondary focus:ring-secondary"
              id="email"
              type="email"
              name="email"
              placeholder="admin@yannova.be"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="password">
              Wachtwoord
            </label>
            <input
              className="block w-full rounded-md border border-white/10 bg-white/5 py-2 px-3 text-base sm:text-sm text-white placeholder:text-gray-500 focus:border-secondary focus:ring-secondary"
              id="password"
              type="password"
              name="password"
              placeholder="******"
              required
              minLength={6}
            />
          </div>
          
          <div className="flex items-center space-x-1" aria-live="polite" aria-atomic="true">
            {errorMessage && (
              <p className="text-sm text-red-400">{errorMessage}</p>
            )}
          </div>

          <button
            className="flex w-full justify-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:opacity-50 transition-colors"
            aria-disabled={isPending}
            type="submit"
          >
            Inloggen <ArrowRight className="ml-auto h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
