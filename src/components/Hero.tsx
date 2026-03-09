"use client";

import Link from "next/link";
import { ArrowRight, Phone, MessageCircle, Star, Clock, Shield } from "lucide-react";
import { company } from "@/lib/company";
import { useEffect, useState } from "react";
import { gtmTrackPhone, gtmTrackWhatsApp } from "@/components/GoogleTagManager";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center overflow-hidden pt-20">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 -z-10">
        {/* Facade renovation - Belgian/European style house */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2400&auto=format&fit=crop')",
            transform: `translateY(${scrollY * 0.5}px) scale(1.1)`
          }}
        />
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="flex justify-center items-center text-center">
          <div className="max-w-5xl">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-fade-in">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 shadow-2xl whitespace-nowrap hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 shrink-0" />
                <span className="text-white font-bold text-sm">4.9</span>
                <span className="text-gray-100 font-medium text-sm">Google</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 shadow-2xl whitespace-nowrap hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <Clock className="h-4 w-4 text-secondary shrink-0" />
                <span className="text-white font-medium text-sm">Offerte binnen 24u</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 shadow-2xl whitespace-nowrap hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <Shield className="h-4 w-4 text-secondary shrink-0" />
                <span className="text-white font-medium text-sm">15+ jaar ervaring</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] drop-shadow-2xl animate-slide-up mb-6">
              <span className="block text-white mb-2">Ramen & deuren plaatsen in</span>
              <span className="block bg-linear-to-r from-secondary via-orange-400 to-secondary bg-clip-text text-transparent drop-shadow-lg animate-gradient-x">
                Zoersel, Antwerpen & omgeving
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-100 mb-6 drop-shadow-lg">
              PVC & aluminium ramen | Gevelrenovatie | Totaalrenovatie
            </p>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow-lg animate-fade-in-delay">
              Gratis opmeting in Zoersel, Antwerpen en Mechelen. Ontvang een duidelijke offerte binnen 24 uur.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-secondary to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-elegant glow-hover transition-all duration-300 hover:scale-105"
              >
                Gratis offerte aanvragen
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="flex gap-3">
                <a
                  href={company.phoneHref}
                  onClick={() => gtmTrackPhone()}
                  className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-5 py-4 text-sm font-medium text-white shadow-elegant"
                >
                  <Phone className="h-4 w-4 text-secondary" />
                  Bel nu
                </a>
                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => gtmTrackWhatsApp()}
                  className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-5 py-4 text-sm font-medium text-white shadow-elegant"
                >
                  <MessageCircle className="h-4 w-4 text-secondary" />
                  WhatsApp
                </a>
              </div>
            </div>

            <p className="text-sm text-gray-400">Antwoord binnen 1 uur tijdens kantooruren</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-xl py-4 sm:py-6 shadow-2xl overflow-hidden border-t border-white/10">
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll-right">
            {/* Duplicate the brands multiple times for seamless infinite scroll */}
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-center gap-x-4 sm:gap-x-8 px-2 sm:px-4 shrink-0">
                <span className="text-white/90 font-semibold text-xl sm:text-2xl lg:text-3xl">Schüco</span>
                <span className="text-gray-400 text-lg sm:text-xl lg:text-2xl">•</span>
                <span className="text-white/90 font-semibold text-xl sm:text-2xl lg:text-3xl">Aluplast</span>
                <span className="text-gray-400 text-lg sm:text-xl lg:text-2xl">•</span>
                <span className="text-white/90 font-semibold text-xl sm:text-2xl lg:text-3xl">Salamander</span>
                <span className="text-gray-400 text-lg sm:text-xl lg:text-2xl">•</span>
                <span className="text-white/90 font-semibold text-xl sm:text-2xl lg:text-3xl">Reynaers</span>
                <span className="text-gray-400 text-lg sm:text-xl lg:text-2xl">•</span>
                <span className="text-white/90 font-semibold text-xl sm:text-2xl lg:text-3xl">Deceuninck</span>
                <span className="text-gray-400 text-lg sm:text-xl lg:text-2xl">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
