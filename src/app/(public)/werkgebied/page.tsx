import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { generateSEO } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";

export const metadata: Metadata = generateSEO({
  title: "Werkgebied - Actief in Geraardsbergen en de Vlaamse Ardennen",
  description: "Yannova is gevestigd in Geraardsbergen en actief in de gehele regio Vlaamse Ardennen & Denderstreek (Ninove, Ronse, Zottegem, Brakel, Lierde, Herzele, Aalst, Galmaarden, Oudenaarde). Bekijk waar wij werken.",
  path: "/werkgebied",
  keywords: [
    "werkgebied yannova",
    "waar actief",
    "geraardsbergen en omgeving",
    "vlaamse ardennen",
    "denderstreek",
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Werkgebied", url: "/werkgebied" },
]);

const werkgebieden = [
  // Geraardsbergen en Vlaamse Ardennen & Denderstreek
  {
    name: "Geraardsbergen",
    slug: "geraardsbergen",
    description: "Onze thuisbasis",
    priority: true,
  },
  {
    name: "Ninove",
    slug: "ninove",
    description: "Actief in Ninove en deelgemeenten",
    priority: true,
  },
  {
    name: "Zottegem",
    slug: "zottegem",
    description: "Service in Zottegem en omgeving",
    priority: true,
  },
  {
    name: "Ronse",
    slug: "ronse",
    description: "Ramen en deuren in Ronse",
    priority: true,
  },
  {
    name: "Brakel",
    slug: "brakel",
    description: "Actief in Brakel en omgeving",
  },
  {
    name: "Lierde",
    slug: "lierde",
    description: "Ramen en renovaties in Lierde",
  },
  {
    name: "Herzele",
    slug: "herzele",
    description: "Service in Herzele en deelgemeenten",
  },
  {
    name: "Aalst",
    slug: "aalst",
    description: "Actief in Aalst en omgeving",
  },
  {
    name: "Galmaarden",
    slug: "galmaarden",
    description: "Ramen en isolatiewerken in Galmaarden",
  },
  {
    name: "Oudenaarde",
    slug: "oudenaarde",
    description: "Totaalrenovatie in Oudenaarde",
  },
];

export default function WerkgebiedOverviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-[#0a0c10]">
        {/* Hero */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4 text-secondary">
                <MapPin className="h-6 w-6" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Ons <span className="text-secondary">Werkgebied</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 leading-relaxed">
                Vanuit Geraardsbergen bedienen we de Vlaamse Ardennen (Geraardsbergen, Ninove, Ronse, Zottegem) 
                en de regio Antwerpen. Bekijk hieronder waar we actief zijn.
              </p>
            </div>
          </div>
        </section>

        {/* Werkgebieden Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {werkgebieden.map((gebied) => (
                <Link
                  key={gebied.slug}
                  href={`/werkgebied/${gebied.slug}`}
                  className={`group p-6 rounded-xl border transition-all hover:scale-[1.02] ${
                    gebied.priority
                      ? "bg-secondary/10 border-secondary/30 hover:bg-secondary/20"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                        {gebied.name}
                      </h3>
                      <p className="text-sm text-gray-400">{gebied.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-secondary group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Waarom kiezen voor lokale service?
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Snelle service</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Door onze ligging in Geraardsbergen zijn we snel ter plaatse in de Vlaamse Ardennen en hebben goede bereikbaarheid naar Antwerpen. Gratis opmeting meestal binnen 48 uur.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Lokale kennis</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We kennen de Vlaamse Ardennen en de regio Antwerpen en hebben ervaring met verschillende 
                    woningtypes in elke gemeente. Van klassieke rijwoningen tot moderne nieuwbouw.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Referenties</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    In bijna elke gemeente hebben we al projecten gerealiseerd. Vraag gerust naar
                    referenties in uw buurt.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Nazorg</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Ook na plaatsing blijven we beschikbaar voor vragen of kleine aanpassingen.
                    Lokale service betekent bereikbare service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-white/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-white">Staat uw gemeente er niet bij?</h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
              Neem gerust contact op. We kijken graag of we ook in uw regio kunnen werken.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-white hover:bg-secondary/90 transition-colors"
              >
                Neem contact op
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
