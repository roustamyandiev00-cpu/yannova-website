"use client";

import { Phone } from "lucide-react";
import { company } from "@/lib/company";

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-secondary p-3 sm:hidden">
      <a href={company.phoneHref} className="flex items-center justify-center gap-2 text-white font-bold">
        <Phone className="h-5 w-5" />
        Bel direct: {company.phoneDisplay}
      </a>
    </div>
  );
}
