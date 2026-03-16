"use client";

import Link from "next/link";
import { ArrowRight, Home, DoorOpen, Building2, Hammer } from "lucide-react";

const services = [
  {
    title: "Ramen",
    description: "PVC en aluminium ramen met HR++ beglazing. Energiezuinig, inbraakwerend, onderhoudsvrij.",
    href: "/ramen",
    icon: Home,
    highlight: "Meest gekozen",
    gradient: "from-orange-500/20 to-amber-500/5",
    iconBg: "from-orange-500 to-amber-500",
  },
  {
    title: "Deuren",
    description: "Voordeuren, schuifdeuren, draaideuren. Aluminium en PVC profielen op maat.",
    href: "/deuren",
    icon: DoorOpen,
    gradient: "from-orange-500/10 to-transparent",
    iconBg: "from-orange-500 to-orange-600",
  },
  {
    title: "Gevelisolatie & Crepi",
    description: "Isolatie met sierpleister afgewerkt. EPC-verbetering, 10 jaar garantie.",
    href: "/gevelisolatie-crepi",
    icon: Building2,
    gradient: "from-orange-500/10 to-transparent",
    iconBg: "from-orange-500 to-orange-600",
  },
  {
    title: "Renovatie",
    description: "Totaalrenovatie met één aanspreekpunt. Van ontwerp tot oplevering.",
    href: "/renovatie",
    icon: Hammer,
    gradient: "from-orange-500/10 to-transparent",
    iconBg: "from-orange-500 to-orange-600",
  },
];

export function ServicesGrid() {
  return (
    <section className="relative py-24 bg-[#0a0c10] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-orange-400 mb-3">
            Wat wij doen
          </span>
          <h2 className="text-4xl font-bold text-white">
            Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">diensten</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Gespecialiseerd in ramen, deuren en renovatie. Gratis opmeting, duidelijke offerte, nette plaatsing.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-6 overflow-hidden transition-all duration-300 hover:border-orange-500/40 hover:bg-white/6 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10"
            >
              {/* Card inner gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Highlight badge */}
              {service.highlight && (
                <span className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-amber-500 px-2.5 py-0.5 text-[10px] font-bold text-white rounded-full tracking-wide shadow-lg shadow-orange-500/30">
                  {service.highlight}
                </span>
              )}

              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.iconBg} text-white mb-5 shadow-lg shadow-orange-500/20 transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon className="h-5 w-5" />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-200">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-orange-400 group-hover:text-orange-300 transition-colors duration-200">
                  Meer info
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom links */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/premies"
            className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 group-hover:scale-125 transition-transform" />
            Bekijk alle beschikbare premies
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <span className="hidden sm:block w-px h-4 bg-white/10" />
          <Link
            href="/producten"
            className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors duration-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 group-hover:scale-125 transition-transform" />
            Ontdek ook rolluiken, horren en garagepoorten
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
