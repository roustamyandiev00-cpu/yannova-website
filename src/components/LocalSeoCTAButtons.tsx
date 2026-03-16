"use client";

import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { company } from "@/lib/company";
import { trackPhoneClick, trackWhatsAppClick, trackCtaClick } from "@/lib/analytics";
import { gtmTrackPhone, gtmTrackWhatsApp } from "@/components/GoogleTagManager";

/** Hero CTA buttons op lokale SEO landingspagina's */
export function LocalSeoHeroCTAs() {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
      <Link
        href="/offerte"
        onClick={() => trackCtaClick("offerte_aanvragen", "local_seo_hero")}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-base font-semibold text-white hover:bg-secondary/90 transition-colors"
      >
        Offerte aanvragen
        <ArrowRight className="h-4 w-4" />
      </Link>
      <Link
        href="/contact"
        onClick={() => trackCtaClick("contact_opnemen", "local_seo_hero")}
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-base font-medium text-white hover:bg-white/5 transition-colors"
      >
        Contact opnemen
      </Link>
      <a
        href={company.phoneHref}
        onClick={() => { trackPhoneClick("local_seo_hero"); gtmTrackPhone(); }}
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-base font-medium text-white hover:bg-white/5 transition-colors"
      >
        <Phone className="h-4 w-4" />
        {company.phoneDisplay}
      </a>
    </div>
  );
}

/** Sidebar callout CTA buttons op lokale SEO landingspagina's */
export function LocalSeoSidebarCTAs() {
  return (
    <div className="mt-6 flex flex-col gap-3">
      <Link
        href="/offerte"
        onClick={() => trackCtaClick("offerte_aanvragen", "local_seo_sidebar")}
        className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#0a0c10] hover:bg-white/90 transition-colors"
      >
        Vraag uw offerte
      </Link>
      <a
        href={company.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => { trackWhatsAppClick("local_seo_sidebar"); gtmTrackWhatsApp(); }}
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}
