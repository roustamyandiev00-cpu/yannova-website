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
  },
  {
    title: "Deuren",
    description: "Voordeuren, schuifdeuren, draaideuren. Aluminium en PVC profielen op maat.",
    href: "/deuren",
    icon: DoorOpen,
  },
  {
    title: "Gevelisolatie & Crepi",
    description: "Isolatie met sierpleister afgewerkt. EPC-verbetering, 10 jaar garantie.",
    href: "/gevelisolatie-crepi",
    icon: Building2,
  },
  {
    title: "Renovatie",
    description: "Totaalrenovatie met één aanspreekpunt. Van ontwerp tot oplevering.",
    href: "/renovatie",
    icon: Hammer,
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 bg-[#0a0c10] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Onze diensten</h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Gespecialiseerd in ramen, deuren en renovatie. Gratis opmeting, duidelijke offerte, nette plaatsing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative bg-transparent hover:bg-[#1a1d24]/50 rounded-lg p-6 transition-all"
            >
              {service.highlight && (
                <span className="absolute -top-2.5 right-4 bg-secondary px-2.5 py-1 text-xs font-semibold text-white rounded-full">
                  {service.highlight}
                </span>
              )}
              
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-white mb-4 transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-lg font-semibold text-white group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-4 flex items-center text-sm font-medium text-secondary group-hover:text-white transition-colors">
                Meer info
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* Premies link */}
        <div className="mt-10 text-center">
          <Link
            href="/premies"
            className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors font-medium"
          >
            Bekijk alle beschikbare premies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
