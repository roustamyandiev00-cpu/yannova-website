import { Metadata } from 'next';
import { generateBlogMetadata, generateBreadcrumbSchema } from '@/components/SEO';
import Link from 'next/link';
import { ArrowRight, Euro, Home, TrendingUp } from 'lucide-react';

export const metadata: Metadata = generateBlogMetadata({
  title: "Hoeveel Kost Gevelrenovatie in 2026? Prijzen & Premies",
  description: "Ontdek de prijzen voor gevelrenovatie met isolatie en crepi. Gemiddeld €80-150 per m². Inclusief premies en besparingen. Gratis offerte binnen 24 uur.",
  slug: "hoeveel-kost-gevelrenovatie",
  publishedTime: "2026-03-09",
  keywords: ["gevelrenovatie prijs", "kosten gevelrenovatie", "crepi prijs", "gevelisolatie kosten", "premie gevelrenovatie"],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Hoeveel kost gevelrenovatie", url: "/blog/hoeveel-kost-gevelrenovatie" },
]);

export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <article className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-secondary hover:underline mb-8">
              ← Terug naar blog
            </Link>
            
            <header className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Hoeveel Kost Gevelrenovatie in 2026?
              </h1>
              <p className="text-xl text-gray-300">
                Complete prijsoverzicht voor gevelrenovatie met isolatie en crepi. Inclusief premies en besparingen.
              </p>
              <div className="flex items-center gap-4 mt-6 text-gray-400 text-sm">
                <time>9 maart 2026</time>
                <span>•</span>
                <span>6 min leestijd</span>
              </div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Euro className="h-6 w-6 text-secondary" />
                  Snel Overzicht: Prijzen Gevelrenovatie
                </h2>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Gevelisolatie + crepi:</span>
                    <span className="font-semibold text-secondary">€80-150/m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Alleen crepi (zonder isolatie):</span>
                    <span className="font-semibold text-secondary">€40-70/m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rijwoning (100m² gevel):</span>
                    <span className="font-semibold text-secondary">€8.000-15.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Premie (Mijn VerbouwPremie):</span>
                    <span className="font-semibold text-secondary">Tot €3.500</span>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                Wat Bepaalt de Prijs van Gevelrenovatie?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                De prijs van gevelrenovatie hangt af van verschillende factoren:
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">1. Type Isolatie</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>EPS (piepschuim):</strong> €80-100/m² - Goedkoopste optie, goede isolatiewaarde</li>
                  <li>• <strong>Minerale wol:</strong> €90-120/m² - Brandwerend, goede geluidsisolatie</li>
                  <li>• <strong>PUR/PIR:</strong> €100-150/m² - Beste isolatiewaarde, dunner</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">2. Dikte Isolatie</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>8-10 cm:</strong> Minimaal voor premies, R-waarde 2.5-3.0</li>
                  <li>• <strong>12-14 cm:</strong> Aanbevolen, R-waarde 3.5-4.0</li>
                  <li>• <strong>16+ cm:</strong> Maximale isolatie, R-waarde 4.5+</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">3. Type Crepi</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>Minerale crepi:</strong> Standaard, duurzaam</li>
                  <li>• <strong>Siliconen crepi:</strong> Waterafstotend, zelfr einigend (+€10-15/m²)</li>
                  <li>• <strong>Acryl crepi:</strong> Flexibel, kleurvast (+€5-10/m²)</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                <Home className="h-8 w-8 text-secondary" />
                Prijsvoorbeelden per Woningtype
              </h2>

              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Rijwoning (100m² gevel)</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Gevelisolatie + crepi:</span>
                      <span className="font-semibold">€8.000 - €15.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Min premie:</span>
                      <span className="text-secondary">- €2.000</span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                      <span className="font-semibold">Netto kosten:</span>
                      <span className="font-semibold text-secondary">€6.000 - €13.000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Halfopen Woning (120m² gevel)</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Gevelisolatie + crepi:</span>
                      <span className="font-semibold">€9.600 - €18.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Min premie:</span>
                      <span className="text-secondary">- €2.500</span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                      <span className="font-semibold">Netto kosten:</span>
                      <span className="font-semibold text-secondary">€7.100 - €15.500</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Vrijstaande Woning (150m² gevel)</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Gevelisolatie + crepi:</span>
                      <span className="font-semibold">€12.000 - €22.500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Min premie:</span>
                      <span className="text-secondary">- €3.500</span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                      <span className="font-semibold">Netto kosten:</span>
                      <span className="font-semibold text-secondary">€8.500 - €19.000</span>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-secondary" />
                Besparing en Terugverdientijd
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Gevelisolatie bespaart gemiddeld 20-30% op uw energierekening:
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Voorbeeld Rijwoning</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Investering: €10.000 (na premie)</li>
                  <li>• Jaarlijkse besparing: €600-900</li>
                  <li>• Terugverdientijd: <span className="text-secondary font-semibold">12-17 jaar</span></li>
                  <li>• Extra voordelen: Hoger comfort, minder condensatie, hogere woningwaarde</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                Premies voor Gevelrenovatie 2026
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Via Mijn VerbouwPremie kunt u tot €3.500 subsidie krijgen voor gevelisolatie:
              </p>

              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">✓</span>
                  <span><strong>Basispremie:</strong> €15-25 per m² gevelisolatie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">✓</span>
                  <span><strong>Extra voor lage inkomens:</strong> Tot 50% extra premie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">✓</span>
                  <span><strong>Voorwaarden:</strong> Minimaal R-waarde 2.5, erkende aannemer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">✓</span>
                  <span><strong>Aanvraag:</strong> Binnen 12 maanden na oplevering</span>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 rounded-2xl p-8 mt-12">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Vraag een Gratis Offerte Aan
                </h3>
                <p className="text-gray-300 mb-6">
                  Wilt u weten hoeveel gevelrenovatie precies kost voor uw woning? 
                  Vraag een gratis opmeting aan en ontvang binnen 24 uur een gedetailleerde offerte.
                </p>
                <Link
                  href="/offerte"
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Gratis Offerte Aanvragen
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Gerelateerde Artikelen</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/energiebesparing-nieuwe-ramen" className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
                  <h4 className="font-semibold text-white mb-2">Energiebesparing met nieuwe ramen</h4>
                  <p className="text-sm text-gray-400">Hoeveel bespaar je met HR++ glas?</p>
                </Link>
                <Link href="/blog/premies-ramen-deuren-2026" className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
                  <h4 className="font-semibold text-white mb-2">Premies 2026</h4>
                  <p className="text-sm text-gray-400">Alle renovatiepremies op een rij</p>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
