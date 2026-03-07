"use client";

import Link from "next/link";
import { ArrowRight, Phone, MessageCircle, Star, Clock, Shield, Home, Wrench } from "lucide-react";
import { company } from "@/lib/company";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center overflow-hidden pt-20">
      {/* Background Image with Better Visibility */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center" />
        {/* Dark overlay gradient for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/75 to-black/60" />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/80" />
        {/* Subtle accent glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-secondary/15 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-xl">
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 shadow-2xl whitespace-nowrap">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 shrink-0" />
                <span className="text-white font-bold text-base">4.9</span>
                <span className="text-gray-100 font-medium">Google</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 shadow-2xl whitespace-nowrap">
                <Clock className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-white font-medium">Offerte binnen 24u</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 shadow-2xl whitespace-nowrap">
                <Shield className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-white font-medium">15+ jaar ervaring</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight drop-shadow-2xl">
              <span className="block text-white mb-2">Ramen & deuren in</span>
              <span className="block bg-linear-to-r from-secondary via-orange-400 to-secondary bg-clip-text text-transparent mb-2 drop-shadow-lg">
                Zoersel
              </span>
              <span className="block text-white mb-4">en regio Antwerpen</span>
              <span className="block text-2xl sm:text-3xl lg:text-3xl font-medium text-gray-100 mt-6">
                Levering & plaatsing door vakmensen
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-100 leading-relaxed max-w-2xl drop-shadow-lg">
              Gratis opmeting in Zoersel, Antwerpen en Mechelen. Ontvang een duidelijke offerte binnen 24 uur.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-secondary to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-elegant glow-hover transition-all duration-300 hover:scale-105"
              >
                Gratis offerte aanvragen
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="flex gap-3">
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-6 py-4 text-base font-medium text-white shadow-elegant"
                >
                  <Phone className="h-5 w-5 text-secondary" />
                  Bel nu
                </a>
                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-6 py-4 text-base font-medium text-white shadow-elegant"
                >
                  <MessageCircle className="h-5 w-5 text-secondary" />
                  WhatsApp
                </a>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-400">Antwoord binnen 1 uur tijdens kantooruren</p>
          </div>

          <div className="hidden lg:block">
            <div className="grid gap-5">
              <div className="flex items-start gap-5 p-7 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br from-secondary/30 to-secondary/10 text-secondary shrink-0">
                  <Home className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xl mb-2">Eén aanspreekpunt</h3>
                  <p className="text-sm text-gray-100 leading-relaxed">Uw projectleider van A tot Z. Geen onderaannemers.</p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-7 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br from-secondary/30 to-secondary/10 text-secondary shrink-0">
                  <Clock className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xl mb-2">Strakke planning</h3>
                  <p className="text-sm text-gray-100 leading-relaxed">Duidelijke timing, stipte afspraken. We doen wat we beloven.</p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-7 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br from-secondary/30 to-secondary/10 text-secondary shrink-0">
                  <Wrench className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xl mb-2">Nette werf</h3>
                  <p className="text-sm text-gray-100 leading-relaxed">Schoon materiaal, beschermd interieur. We ruimen zelf op.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-xl border-t border-white/10 py-4 shadow-2xl overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
            <span className="text-gray-300 font-medium">Werkgebied:</span>
            {company.areas.slice(0, 5).map((area, index) => (
              <div key={area} className="flex items-center gap-4">
                <span className="text-white font-medium">{area}</span>
                {index < Math.min(company.areas.length, 5) - 1 ? <span className="text-gray-400">•</span> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
