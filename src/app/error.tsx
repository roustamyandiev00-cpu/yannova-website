 'use client';
 
 import { useEffect } from 'react';
 
 export default function Error({
   error,
   reset,
 }: {
   error: Error;
   reset: () => void;
 }) {
   useEffect(() => {
     console.error(error);
   }, [error]);
 
   return (
     <div className="min-h-screen flex items-center justify-center bg-background p-6">
       <div className="max-w-md w-full rounded-lg border border-white/10 bg-card p-6 shadow">
         <h2 className="text-xl font-semibold text-foreground mb-2">
           Er is iets misgegaan
         </h2>
         <p className="text-sm text-muted-foreground mb-4">
           De pagina kon niet correct geladen worden. Probeer het opnieuw.
         </p>
         <button
           className="inline-flex items-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
           onClick={() => reset()}
         >
           Opnieuw proberen
         </button>
       </div>
     </div>
   );
 }
