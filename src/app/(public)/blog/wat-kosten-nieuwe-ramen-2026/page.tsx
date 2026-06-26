import type { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { generateFAQSchema } from "@/lib/faq-schema";
import { generateArticleSchema } from "@/lib/article-schema";
import Link from "next/link";
import { Calendar, CheckCircle2 } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";

export const metadata: Metadata = generateSEO({
  title: "Wat Kosten Nieuwe Ramen in 2026? Complete Prijsoverzicht | Yannova",
  description: "Ontdek de actuele prijzen voor nieuwe ramen in 2026. PVC ramen €400-600/m², aluminium €600-800/m². Inclusief plaatsing, beglazing en premies. Gratis offerte.",
  path: "/blog/wat-kosten-nieuwe-ramen-2026",
  keywords: [
    "wat kosten nieuwe ramen",
    "ramen prijs 2026",
    "nieuwe ramen prijzen",
    "ramen vervangen kosten",
    "pvc ramen prijs",
    "aluminium ramen prijs",
  ],
});

const faqs = [
  {
    question: "Wat kost een nieuw raam gemiddeld in 2026?",
    answer: "Een nieuw PVC raam kost gemiddeld €400-600 per m², inclusief plaatsing. Voor aluminium ramen rekent u €600-800 per m².",
  },
  {
    question: "Zijn er premies beschikbaar voor nieuwe ramen?",
    answer: "Ja, via Mijn VerbouwPremie kunt u tot €3.200 premie krijgen voor energiezuinige ramen.",
  },
  {
    question: "Wat bepaalt de prijs van nieuwe ramen?",
    answer: "Materiaal, afmetingen, type beglazing, aantal openingen en complexiteit van montage.",
  },
  {
    question: "Hoeveel energiebesparing met nieuwe ramen?",
    answer: "Nieuwe ramen kunnen energiekosten met 20-30% verlagen. Gemiddeld €400-600 bespaaring per jaar.",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Wat kosten nieuwe ramen 2026", url: "/blog/wat-kosten-nieuwe-ramen-2026" },
]);

const faqSchema = generateFAQSchema(faqs);

const articleSchema = generateArticleSchema({
  headline: "Wat Kosten Nieuwe Ramen in 2026",
  description: "Complete gids met actuele prijzen voor ramen in 2026",
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
  authorName: "Yannova",
  path: "/blog/wat-kosten-nieuwe-ramen-2026",
});

export default function BlogPost() {
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
              <span>8 min leestijd</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Wat Kosten Nieuwe Ramen in 2026?
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Nieuwe ramen zijn een belangrijke investering. De kosten variëren afhankelijk van 
                materiaal, afmetingen en beglazing. In deze gids vindt u alle actuele prijzen voor 2026.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Ramen Prijsoverzicht 2026</h2>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">PVC Ramen</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-2xl font-bold text-secondary mb-2">€400-600/m²</div>
                    <p className="text-gray-300">5-kamerprofiel met HR++ glas</p>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      Goede isolatie
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      Onderhoudsarm
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      Kosteffectief
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Aluminium Ramen</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-2xl font-bold text-secondary mb-2">€600-800/m²</div>
                    <p className="text-gray-300">Thermisch onderbroken</p>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      Slanke profielen
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      Modern design
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      Zeer duurzaam
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Wat Bepaalt de Prijs?</h2>

              <h3 className="text-xl font-semibold text-white mb-3">Materiaal & Beglazing</h3>
              <ul className="space-y-2 mb-6 text-gray-300">
                <li>• <strong>PVC vs Aluminium:</strong> Grootste factor in prijs</li>
                <li>• <strong>HR++ glas:</strong> Standaard inbegrepen</li>
                <li>• <strong>Triple glas:</strong> +€80-120/m² extra</li>
                <li>• <strong>Geluidswerend:</strong> +€100-150/m² extra</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">Afmetingen & Openingen</h3>
              <ul className="space-y-2 mb-6 text-gray-300">
                <li>• Grotere ramen = goedkoper per m²</li>
                <li>• Speciale vormen: +20-40% extra</li>
                <li>• Per opening (draai/kiep): +€150-250</li>
                <li>• Schuiframen: +€200-400 extra</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Voorbeelden Totale Kosten</h2>

              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Gezinswoning - 15 Ramen PVC</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>15 ramen × 45m²</span>
                    <span className="font-semibold text-white">45m² × €500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Extra openingen (8x)</span>
                    <span className="font-semibold text-white">8 × €200</span>
                  </div>
                  <div className="border-t border-white/20 pt-2 mt-2 flex justify-between">
                    <span className="font-semibold">Totaal</span>
                    <span className="font-bold text-secondary text-lg">€24.100</span>
                  </div>
                  <div className="flex justify-between text-secondary">
                    <span>Na Mijn VerbouwPremie</span>
                    <span className="font-semibold">€20.900</span>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Premies & Subsidies 2026</h2>

              <h3 className="text-xl font-semibold text-white mb-3">Mijn VerbouwPremie</h3>
              <ul className="space-y-2 mb-6 text-gray-300">
                <li>• <strong>Uw ≤ 1,1 W/m²K:</strong> €40/m² (max €3.200)</li>
                <li>• <strong>Uw ≤ 0,8 W/m²K:</strong> €80/m² (max €3.200)</li>
                <li>• Energiepremies: €10-50/m² per gemeente</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Energiebesparing & ROI</h2>

              <div className="grid gap-6 sm:grid-cols-3 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">25%</div>
                  <div className="text-sm text-gray-300">Besparing verwarming</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">€500/jaar</div>
                  <div className="text-sm text-gray-300">Gemiddelde bespaaring</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">8-12 jaar</div>
                  <div className="text-sm text-gray-300">Terugverdientijd PVC</div>
                </div>
              </div>

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

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Gratis Offerte</h2>

              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6">
                <p className="text-gray-200 mb-6">
                  Wilt u weten wat nieuwe ramen voor uw woning kosten? 
                  Yannova komt gratis langs voor opmeting en advies.
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