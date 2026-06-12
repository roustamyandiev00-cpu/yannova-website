import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { generateFAQSchema } from "@/lib/faq-schema";
import { generateArticleSchema } from "@/lib/article-schema";
import Link from "next/link";
import { Calendar, CheckCircle2 } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";

export const metadata: Metadata = generateSEO({
  title: "Crepi Gevel Prijs 2026: Hoeveel Kost Gevelbepleistering? | Yannova",
  description: "Crepi prijs per m² in 2026. Siliconenharspleister €25-35/m², met isolatie €120-180/m². Alle factoren, voorbeelden en premies. Gratis offerte.",
  path: "/blog/crepi-prijs-hoeveel-kost-gevelbepleistering",
  keywords: [
    "crepi prijs",
    "hoeveel kost crepi",
    "crepi gevel prijs per m2",
    "gevelbepleistering kosten",
    "crepi aanbrengen prijs",
    "siliconenharspleister prijs",
  ],
});

const faqs = [
  {
    question: "Hoeveel kost crepi per m² in 2026?",
    answer: "Crepi zonder isolatie kost €25-35/m². Met gevelisolatie erbij betaalt u €120-180/m² totaal. Dit is inclusief materiaal en arbeidskosten.",
  },
  {
    question: "Wat is beter: minerale crepi of siliconen crepi?",
    answer: "Siliconenharspleister (siliconen crepi) is beter: zelfreinigend, waterafstotend en elastischer. Minerale crepi is goedkoper maar vereist meer onderhoud.",
  },
  {
    question: "Kan ik premie krijgen voor crepi?",
    answer: "Ja, via Mijn VerbouwPremie tot €6.000 als u tegelijk gevelisolatie aanbrengt.",
  },
  {
    question: "Hoe lang duurt crepi aanbrengen?",
    answer: "Afhankelijk van omvang en voorbereiding: 1-3 weken inclusief voorbereiding, isolatie en eindafwerking.",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Crepi prijs 2026", url: "/blog/crepi-prijs-hoeveel-kost-gevelbepleistering" },
]);

const faqSchema = generateFAQSchema(faqs);

const articleSchema = generateArticleSchema({
  headline: "Crepi Gevel Prijs 2026: Hoeveel Kost Gevelbepleistering?",
  description: "Complete gids met actuele crepi prijzen per m², voorbeelden en premies",
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
  authorName: "Yannova",
  path: "/blog/crepi-prijs-hoeveel-kost-gevelbepleistering",
});

export default function CrepiPrijsBlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="min-h-screen bg-[#0a0c10]">
        <article className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-secondary hover:underline mb-8">
              ← Terug naar blog
            </Link>
            
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Calendar className="h-4 w-4" />
              <time dateTime="2026-06-12">12 juni 2026</time>
              <span>•</span>
              <span>7 min leestijd</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Crepi Gevel Prijs 2026: Hoeveel Kost Gevelbepleistering?
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Crepi is een populaire manier om uw gevel te vernieuwen. De prijzen variëren sterk 
                afhankelijk van het type crepi, isolatie en complexiteit. Hier vindt u alle actuele prijzen.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Crepi Prijzen 2026</h2>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Crepi Alleen (geen isolatie)</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-2xl font-bold text-secondary mb-2">€25-35/m²</div>
                    <p className="text-gray-300">Alleen afwerking</p>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      Voor bestaande gevel
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      Kosteneffectief
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      Moderne uitstraling
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Crepi met Gevelisolatie</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-2xl font-bold text-secondary mb-2">€120-180/m²</div>
                    <p className="text-gray-300">Met EPS isolatie</p>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      40% energiebesparing
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      Premie tot €6.000
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      EPC-label verbetering
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Kostenbreakdown</h2>

              <h3 className="text-xl font-semibold text-white mb-3">Wat bepaalt de crepi prijs?</h3>
              <ul className="space-y-2 mb-6 text-gray-300">
                <li>• <strong>Type crepi:</strong> Siliconen (€25-35/m²) vs mineraal (€18-25/m²)</li>
                <li>• <strong>Isolatiedikte:</strong> 8cm (€30-40/m²) vs 16cm (€50-70/m²)</li>
                <li>• <strong>Ondergrondvoorbereiding:</strong> Kleine reparaties tot volledige herstel</li>
                <li>• <strong>Kleurkeuze:</strong> Standaardkleuren vs custom kleuren</li>
                <li>• <strong>Stellingwerk:</strong> Nodig voor hogere gebouwen</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Voorbeeldprijzen</h2>

              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Gezinswoning 200m² gevel</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Crepi alleen: 200m² × €30</span>
                    <span className="font-semibold text-white">€6.000</span>
                  </div>
                  <div className="flex justify-between text-green-400">
                    <span>Met gevelisolatie: 200m² × €150</span>
                    <span className="font-semibold">€30.000</span>
                  </div>
                  <div className="border-t border-white/20 pt-2 mt-2 flex justify-between">
                    <span className="font-semibold">Na Mijn VerbouwPremie (€6.000)</span>
                    <span className="font-bold text-secondary text-lg">€24.000</span>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Siliconen vs Minerale Crepi</h2>

              <div className="grid gap-6 lg:grid-cols-2 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Siliconenharspleister</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      Zelfreinigend
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      Waterafstotend
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      Elastisch
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      15+ jaar garantie
                    </li>
                  </ul>
                  <div className="mt-4 text-secondary font-semibold">€25-35/m²</div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Minerale Pleister</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      Goedkoper
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      Natuurlijk materiaal
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      Ademend
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      Meer onderhoud nodig
                    </li>
                  </ul>
                  <div className="mt-4 text-secondary font-semibold">€18-25/m²</div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Energiebesparing & ROI</h2>

              <div className="grid gap-6 sm:grid-cols-3 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">40%</div>
                  <div className="text-sm text-gray-300">Energiebesparing met isolatie</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">€800/jaar</div>
                  <div className="text-sm text-gray-300">Gemiddelde bespaaring</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">3-5 jaar</div>
                  <div className="text-sm text-gray-300">Terugverdientijd met premie</div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Premies & Subsidies</h2>

              <h3 className="text-xl font-semibold text-white mb-3">Mijn VerbouwPremie</h3>
              <ul className="space-y-2 mb-6 text-gray-300">
                <li>• <strong>Gevelisolatie + crepi:</strong> €40-80/m² (max €6.000)</li>
                <li>• <strong>Lokale premies:</strong> Aanvullende €10-50/m² per gemeente</li>
                <li>• <strong>Energieprijs:</strong> Afhankelijk van EPC-verbetering</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Veelgestelde Vragen</h2>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="cursor-pointer font-semibold text-white mb-3 group-open:text-secondary">
                      {faq.question}
                    </summary>
                    <p className="text-gray-300 pl-4 border-l-2 border-white/10">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>

              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 mt-12">
                <p className="text-gray-200 mb-6">
                  Benieuwd wat crepi uw gevel gaat kosten? Yannova komt gratis langs voor inspectie en offerte.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/offerte"
                    className="bg-secondary hover:bg-secondary/90 text-dark font-semibold py-3 px-6 rounded-xl text-center transition-colors"
                  >
                    Gratis offerte aanvragen
                  </Link>
                  <a
                    href="tel:+32489960001"
                    className="border border-white/20 hover:border-white/40 text-white font-medium py-3 px-6 rounded-xl text-center transition-colors"
                  >
                    +32 489 96 00 01
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}