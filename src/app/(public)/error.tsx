 'use client';
 
 import { useEffect } from 'react';
 import Link from 'next/link';
 import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
 
 export default function Error({
   error,
   reset,
 }: {
   error: Error & { digest?: string };
   reset: () => void;
 }) {
   useEffect(() => {
     // Log error to error reporting service
     console.error('Error boundary caught:', error);
   }, [error]);
 
   return (
     <div className="min-h-screen flex items-center justify-center bg-background p-6">
       <div className="max-w-md w-full rounded-2xl border border-white/10 bg-card p-8 shadow-elegant text-center">
         <div className="flex justify-center mb-6">
           <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
             <AlertTriangle className="h-8 w-8 text-red-400" />
           </div>
         </div>
         
         <h2 className="text-2xl font-bold text-foreground mb-3">
           Er is iets misgegaan
         </h2>
         
         <p className="text-sm text-muted-foreground mb-6">
           De pagina kon niet correct geladen worden. Probeer het opnieuw of ga terug naar de homepage.
         </p>
         
         {process.env.NODE_ENV === 'development' && error.message && (
           <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-left">
             <p className="text-xs text-red-400 font-mono break-all">{error.message}</p>
           </div>
         )}
         
         <div className="flex flex-col sm:flex-row gap-3">
           <button
             onClick={reset}
             className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary/80 transition-colors"
           >
             <RefreshCw className="h-4 w-4" />
             Opnieuw proberen
           </button>
           <Link
             href="/"
             className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors"
           >
             <Home className="h-4 w-4" />
             Naar homepage
           </Link>
         </div>
       </div>
     </div>
   );
 }
