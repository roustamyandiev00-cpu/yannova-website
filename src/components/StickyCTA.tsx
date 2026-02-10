'use client';

import { Phone } from "lucide-react";

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-secondary p-3 sm:hidden">
      <a 
        href="tel:+32489960001" 
        className="flex items-center justify-center gap-2 text-white font-bold"
      >
        <Phone className="h-5 w-5" />
        Bel direct: +32 489 96 00 01
      </a>
    </div>
  );
}
