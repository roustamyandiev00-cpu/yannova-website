"use client";

import Link from "next/link";
import { ArrowRight, Phone, MessageCircle, Star, Clock, Shield, Home, Wrench } from "lucide-react";
import { company } from "@/lib/company";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center bg-[#0a0c10]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-linear-to-r from-[#0a0c10] via-[#0a0c10]/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex items-center gap-1.5 bg-white/5 rounded-full px-3 py-1.5 text-sm">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-white font-medium">4.9</span>
                <span className="text-gray-400">Google</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-400">
                <Clock className="h-4 w-4 text-secondary" />
                <span>Offerte binnen 24u</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-400">
                <Shield className="h-4 w-4 text-secondary" />
                <span>15+ jaar ervaring</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Ramen & deuren in <span className="text-secondary">Zoersel</span> en regio Antwerpen
              <span className="block text-2xl sm:text-3xl lg:text-3xl font-normal text-gray-300 mt-2">
                Levering & plaatsing door vakmensen
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Gratis opmeting in Zoersel, Antwerpen en Mechelen. Ontvang een duidelijke offerte binnen 24 uur.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-secondary/90 transition-colors"
              >
                Gratis offerte aanvragen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="flex gap-3">
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Bel nu
                </a>
                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-500">Antwoord binnen 1 uur tijdens kantooruren</p>

            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="text-sm text-gray-400">Projecten</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-sm text-gray-400">Jaar ervaring</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-white">30</div>
                  <div className="text-sm text-gray-400">Jaar garantie</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-secondary">Gratis</div>
                  <div className="text-sm text-gray-400">Opmeting</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="grid gap-4">
              <div className="flex items-start gap-4 bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary shrink-0">
                  <Home className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Eén aanspreekpunt</h3>
                  <p className="mt-1 text-sm text-gray-400">Uw projectleider van A tot Z. Geen onderaannemers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Strakke planning</h3>
                  <p className="mt-1 text-sm text-gray-400">Duidelijke timing, stipte afspraken. We doen wat we beloven.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary shrink-0">
                  <Wrench className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Nette werf</h3>
                  <p className="mt-1 text-sm text-gray-400">Schoon materiaal, beschermd interieur. We ruimen zelf op.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-[#0a0c10]/90 backdrop-blur-sm border-t border-white/10 py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
            <span className="text-gray-500">Werkgebied:</span>
            {company.areas.map((area, index) => (
              <div key={area} className="flex items-center gap-4">
                <span className="text-gray-300">{area}</span>
                {index < company.areas.length - 1 ? <span className="text-gray-600">•</span> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
