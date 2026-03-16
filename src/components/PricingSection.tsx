"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getPricingInfo, ServiceType } from "@/lib/local-seo-helper";
import { trackCtaClick } from "@/lib/analytics";

interface PricingSectionProps {
  service: ServiceType;
  city: string;
}

export function PricingSection({ service, city }: PricingSectionProps) {
  const pricing = getPricingInfo(service);

  return (
    <section className="py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Wat kost {service} in {city}?
          </h2>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-4xl font-bold text-secondary">{pricing.range}</span>
              <span className="text-xl text-gray-400">{pricing.unit}</span>
            </div>
            <p className="text-gray-400 mb-6">
              Dit is een indicatieve prijs. De exacte prijs hangt af van verschillende factoren.
              Wij maken graag een offerte op maat na een gratis opmeting.
            </p>
            
            <h3 className="text-lg font-semibold text-white mb-4">
              Wat beïnvloedt de prijs?
            </h3>
            <ul className="space-y-3">
              {pricing.factors.map((factor, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-gray-300">{factor}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-secondary/10 to-orange-600/10 border border-secondary/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              Gratis offerte op maat
            </h3>
            <p className="text-gray-300 mb-4">
              Wilt u weten wat {service} precies kost voor uw woning in {city}? 
              Vraag een gratis offerte aan en wij komen langs voor een opmeting.
            </p>
            <Link
              href="/contact"
              onClick={() => trackCtaClick('offerte_aanvragen', 'pricing_section')}
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-white hover:bg-secondary/90 transition-colors"
            >
              Gratis offerte aanvragen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
