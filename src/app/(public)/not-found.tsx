'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-secondary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Pagina niet gevonden
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          De pagina die je zoekt bestaat niet of is verplaatst.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-white hover:bg-secondary/90 transition-colors"
          >
            <Home className="h-4 w-4" />
            Naar homepagina
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-6 py-3 text-foreground hover:bg-white/5 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Ga terug
          </button>
        </div>
      </div>
    </div>
  );
}
