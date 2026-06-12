import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { generateFAQSchema } from "@/lib/faq-schema";
import { generateArticleSchema } from "@/lib/article-schema";
import Link from "next/link";
import { Calendar, CheckCircle2, AlertCircle } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";

export const metadata: Metadata = generateSEO({
  title: "Renovatie Premies 2026: Mijn VerbouwPremie Gids | Yannova",
  description: "Complete gids renovatiepremies Vlaanderen 2026. Mijn VerbouwPremie tot €6.000 voor ramen, isolatie, crepi. Voorwaarden, aanvraag en tips.",
  path: "/blog/renovatie-premies-2026-mijn-verbouwpremie",
  keywords: [
    "renovatie premies 2026",
    "mijn verbouwpremie",
    "renovatiepremies vlaanderen",
    "premie ramen",
    "premie isolatie",
    "gevelisolatie premie",
  ],
});

const faqs = [
  {
    question: "Hoeveel premie krijg ik voor ramen?",
    answer: "Voor energiezuinige ramen: €40/m² (max €3.200) bij Uw ≤ 1,1 W/m²K. Met betere isolatie (Uw ≤ 0,8): €80/m² (max €3.200).",
  },
  {
    question: "Wat zijn de voorwaarden voor premie?",
    answer: "Ramen moeten HR++ of beter zijn. Isolatie moet minimaal R-waarde 3,5 hebben. Werken moeten door erkende bedrijven uitgevoerd worden.",
  },
  {
    question: "Kan ik meerdere premies combineren?",
    answer: "Ja! U kunt premies voor ramen, isolatie en crepi combineren. Het totaal maximum hangt af van uw energiecontract.",
  },
  {
    question: "Hoe lang duurt de premie-aanvraag?",
    answer: "Aanvraag indienen takes 2-4 weken. Goedkeuring duurt meestal 4-8 weken. Uitbetaling na afronding en controle.",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Renovatie premies 2026", url: "/blog/renovatie-premies-2026-mijn-verbouwpremie" },
]);

const faqSchema = generateFAQSchema(faqs);

const articleSchema = generateArticleSchema({
  headline: "Renovatie Premies 2026: Mijn VerbouwPremie Gids",
  description: "Complete gids over alle renovatiepremies in Vlaanderen 2026",
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
  authorName: "Yannova",
  path: "/blog/renovatie-premies-2026-mijn-verbouwpremie",
});

export default function RenovatiePremiesBlogPost() {
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
              <span>10 min leestijd</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Renovatie Premies 2026: Mijn VerbouwPremie Gids
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Renovatiewerken kunnen duur zijn, maar de Vlaamse overheid biedt aantrekkelijke premies 
                om eigenaren te helpen. In deze gids vindt u alles over Mijn VerbouwPremie en andere subsidies in 2026.
              </p>

              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 mb-8 flex gap-4">
                <AlertCircle className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Goed nieuws voor 2026</h3>
                  <p className="text-gray-200">
                    De premies zijn aangepast voor 2026 en bieden betere dekking voor isolatie en energiebesparende maatregelen.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Mijn VerbouwPremie 2026</h2>

              <p className="text-gray-300 mb-6">
                De Mijn VerbouwPremie is DE meest populaire premie voor huiseigenaren die hun woning willen energiezuinig maken.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">Premie per Maatregel</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Ramen vervangen</h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <div className="text-secondary font-semibold mb-2">Standaard (Uw ≤ 1,1)</div>
                      <div className="text-2xl font-bold text-white">€40/m²</div>
                      <div className="text-sm text-gray-400">Maximum €3.200</div>
                    </div>
                    <div>
                      <div className="text-secondary font-semibold mb-2">Premium (Uw ≤ 0,8)</div>
                      <div className="text-2xl font-bold text-white">€80/m²</div>
                      <div className="text-sm text-gray-400">Maximum €3.200</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Gevelisolatie + Crepi</h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <div className="text-secondary font-semibold mb-2">Standaard (R ≥ 3,5)</div>
                      <div className="text-2xl font-bold text-white">€40/m²</div>
                      <div className="text-sm text-gray-400">Maximum €6.000</div>
                    </div>
                    <div>
                      <div className="text-secondary font-semibold mb-2">Premium (R ≥ 5,0)</div>
                      <div className="text-2xl font-bold text-white">€80/m²</div>
                      <div className="text-sm text-gray-400">Maximum €6.000</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Verwarmingsinstallatie vervangen</h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <div className="text-secondary font-semibold mb-2">Warmtepomp</div>
                      <div className="text-2xl font-bold text-white">€2.000</div>
                      <div className="text-sm text-gray-400">Vast bedrag</div>
                    </div>
                    <div>
                      <div className="text-secondary font-semibold mb-2">Hybride systeem</div>
                      <div className="text-2xl font-bold text-white">€1.500</div>
                      <div className="text-sm text-gray-400">Vast bedrag</div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Voorwaarden Premie</h2>

              <h3 className="text-xl font-semibold text-white mb-3">Voor alle maatregelen gelden:</h3>

              <div className="space-y-3 mb-8 text-gray-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <strong>Erkende aannemer:</strong> Werken moeten door erkende bedrijf gedaan worden
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <strong>Minimale vereisten:</strong> Materialen moeten minimale isolatiewaarden halen
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <strong>Offertes:</strong> Minstens 1 onafhankelijk offerte nodig
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <strong>Facturatie:</strong> Factuur op naam eigenaar of partner
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <strong>Attest:</strong> Erkende bedrijf geeft energiekundig attest
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Stappenplan Premie Aanvragen</h2>

              <div className="space-y-6 mb-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-lg font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Voorbereiding</h3>
                    <p className="text-gray-300">Verzamel offertes van erkende bedrijven (minstens 1). Check materialen voldoen aan normen.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-lg font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Aanvraag indienen</h3>
                    <p className="text-gray-300">Dien aanvraag in vóór aanvang werken op <strong>mijnverbouwpremie.vlaanderen.be</strong></p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-lg font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Wachten op goedkeuring</h3>
                    <p className="text-gray-300">Behandeling duurt 4-8 weken. U ontvangt een goedkeuringscode.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-lg font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Werken uitvoeren</h3>
                    <p className="text-gray-300">Laat werken uitvoeren door erkende bedrijf. Behoud alle facturen en attesten.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-lg font-bold">5</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Premie uitbetaald</h3>
                    <p className="text-gray-300">Na controle wordt premie overgemaakt naar uw bankrekening.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Voorbeeld: Gezinswoning</h2>

              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Totaalproject: Ramen + Isolatie + Crepi</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <div className="text-sm text-gray-400">Ramen (45m²)</div>
                      <div className="text-lg font-semibold text-white">45m² × €40 = €1.800</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Gevelisolatie (240m²)</div>
                      <div className="text-lg font-semibold text-white">240m² × €60 = €6.000 (max)</div>
                    </div>
                  </div>
                  <div className="border-t border-white/20 pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-white">Totale premie</span>
                      <span className="text-2xl font-bold text-secondary">€7.800</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">Dit scheelt ongeveer €7.800 op uw renovatiebudget!</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Tips voor Maximale Premie</h2>

              <ul className="space-y-3 mb-8 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <strong>Combineer maatregelen:</strong> Ramen + isolatie + crepi geven meer premie dan losse werken
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <strong>Kies Premium normen:</strong> HR++ ramen geven meer dan standaard. Bespaar meer op energie.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <strong>Werk met erkende bedrijven:</strong> Yannova is erkend bedrijf en helpt met premie-dossier
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <strong>Dien op tijd in:</strong> Aanvraag moet VÓÓr aanvang werken ingediend zijn
                  </div>
                </li>
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
                  Yannova helpt u bij het aanvragen van renovatiepremies en zorgt dat alle papierwerk correct is.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/premie-gids"
                    className="bg-secondary hover:bg-secondary/90 text-dark font-semibold py-3 px-6 rounded-xl text-center transition-colors"
                  >
                    Premie Gids
                  </Link>
                  <Link 
                    href="/offerte"
                    className="border border-white/20 hover:border-white/40 text-white font-medium py-3 px-6 rounded-xl text-center transition-colors"
                  >
                    Offerte aanvragen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}