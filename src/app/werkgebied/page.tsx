import { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { generateSEO } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";

export const metadata: Metadata = generateSEO({
  title: "Werkgebied - Actief in Antwerpen en Omgeving",
  description: "Yannova is actief in Antwerpen en alle randgemeenten: Berchem, Deurne, Merksem, Wilrijk, Brasschaat, Schoten, Wijnegem, Mortsel, Edegem, Kontich en meer. Bekijk waar wij werken.",
  path: "/werkgebied",
  keywords: [
    "werkgebied yannova",
    "waar actief",
    "antwerpen en omgeving",
    "regio antwerpen",
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Werkgebied", url: "/werkgebied" },
]);

const werkgebieden = [
  {
    name: "Antwerpen",
    slug: "antwerpen",
    description: "Heel Antwerpen stad en alle deelgemeenten",
    priority: true,
  },
  {
    name: "Berchem",
    slug: "berchem",
    description: "Specialist in Berchem en omgeving",
  },
  {
    name: "Deurne",
    slug: "deurne",
    description: "Actief in heel Deurne",
  },
  {
    name: "Merksem",
    slug: "merksem",
    description: "Ramen en deuren in Merksem",
  },
  {
    name: "Wilrijk",
    slug: "wilrijk",
    description: "Service in Wilrijk en omstreken",
  },
  {
    name: "Brasschaat",
    slug: "brasschaat",
    description: "Actief in Brasschaat",
  },
  {
    name: "Schoten",
    slug: "schoten",
    description: "Ramen en deuren in Schoten",
  },
  {
    name: "Wijnegem",
    slug: "wijnegem",
    description: "Service in Wijnegem",
  },
  {
    name: "Mortsel",
    slug: "mortsel",
    description: "Actief in Mortsel",
  },
  {
    name: "Edegem",
    slug: "edegem",
    description: "Ramen en deuren in Edegem",
  },
  {
    name: "Kontich",
    slug: "kontich",
    description: "Service in Kontich",
  },
  {
    name: "Zoersel",
    slug: "zoersel",
    description: "Onze thuisbasis",
  },
  {
    name: "Mechelen",
    slug: "mechelen",
    description: "Actief in Mechelen en omgeving",
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
                Vanuit Zoersel bedienen we heel Antwerpen en omgeving. Bekijk hieronder waar we actief zijn
                voor ramen, deuren en renovatiewerken.
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
                    Door onze centrale ligging in Zoersel zijn we snel ter plaatse in heel de regio
                    Antwerpen. Gratis opmeting meestal binnen 48 uur.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Lokale kennis</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We kennen de regio en hebben ervaring met verschillende woningtypes in elke
                    gemeente. Van klassieke rijwoningen tot moderne nieuwbouw.
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
