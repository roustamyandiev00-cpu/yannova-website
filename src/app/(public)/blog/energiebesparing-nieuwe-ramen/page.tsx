import { Metadata } from 'next';
import { generateBlogMetadata, generateBreadcrumbSchema } from '@/components/SEO';
import Link from 'next/link';
import { ArrowRight, TrendingDown, Euro, Thermometer } from 'lucide-react';

export const metadata: Metadata = generateBlogMetadata({
  title: "Energiebesparing met Nieuwe Ramen: Hoeveel Bespaar Je?",
  description: "Ontdek hoeveel energie en geld je bespaart met nieuwe ramen. HR++ glas bespaart tot 50% energie. Bereken je besparing en terugverdientijd.",
  slug: "energiebesparing-nieuwe-ramen",
  publishedTime: "2026-03-09",
  keywords: ["energiebesparing ramen", "besparing nieuwe ramen", "hr++ glas besparing", "terugverdientijd ramen"],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Energiebesparing nieuwe ramen", url: "/blog/energiebesparing-nieuwe-ramen" },
]);

export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-gray-900">
        <article className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-secondary hover:underline mb-8">
              ← Terug naar blog
            </Link>
            
            <header className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Energiebesparing met Nieuwe Ramen: Hoeveel Bespaar Je?
              </h1>
              <p className="text-xl text-gray-300">
                Nieuwe ramen met HR++ glas kunnen tot 50% energie besparen. Ontdek hoeveel je bespaart en wanneer je investering terugverdiend is.
              </p>
              <div className="flex items-center gap-4 mt-6 text-gray-400 text-sm">
                <time>9 maart 2026</time>
                <span>•</span>
                <span>5 min leestijd</span>
              </div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <TrendingDown className="h-6 w-6 text-secondary" />
                  Snel Overzicht: Besparing per Type Glas
                </h2>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Enkel glas → HR++ glas:</span>
                    <span className="font-semibold text-secondary">50% besparing</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dubbel glas → HR++ glas:</span>
                    <span className="font-semibold text-secondary">25% besparing</span>
                  </div>
                  <div className="flex justify-between">
                    <span>HR++ glas → Drievoudig glas:</span>
                    <span className="font-semibold text-secondary">15% extra besparing</span>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                Waarom Besparen Nieuwe Ramen Energie?
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Oude ramen zijn verantwoordelijk voor 20-30% van het warmteverlies in een woning. 
                Door te investeren in nieuwe ramen met HR++ of drievoudig glas, verminder je dit 
                warmteverlies drastisch. Dit betekent dat je verwarming minder hard hoeft te werken 
                en je energierekening significant daalt.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                <Euro className="h-8 w-8 text-secondary" />
                Concrete Besparingen in Euro&apos;s
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Voor een gemiddelde rijwoning met 12 ramen (ca. 20m² glas):
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Van Enkel naar HR++ Glas</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Jaarlijkse besparing: <span className="text-secondary font-semibold">€800 - €1.200</span></li>
                  <li>• Investering: €8.000 - €12.000</li>
                  <li>• Terugverdientijd: <span className="text-secondary font-semibold">8-12 jaar</span></li>
                  <li>• Met premie (€3.500): <span className="text-secondary font-semibold">5-8 jaar</span></li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Van Dubbel naar HR++ Glas</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Jaarlijkse besparing: <span className="text-secondary font-semibold">€400 - €600</span></li>
                  <li>• Investering: €8.000 - €12.000</li>
                  <li>• Terugverdientijd: <span className="text-secondary font-semibold">15-20 jaar</span></li>
                  <li>• Met premie (€3.500): <span className="text-secondary font-semibold">10-15 jaar</span></li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                <Thermometer className="h-8 w-8 text-secondary" />
                Extra Voordelen Naast Besparing
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">✓</span>
                  <span><strong>Meer comfort:</strong> Geen koude tocht meer bij ramen, gelijkmatigere temperatuur</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">✓</span>
                  <span><strong>Minder condensatie:</strong> HR++ glas voorkomt condens en schimmelvorming</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">✓</span>
                  <span><strong>Betere geluidisolatie:</strong> Tot 50% minder geluidsoverlast van buiten</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">✓</span>
                  <span><strong>Hogere woningwaarde:</strong> Beter EPC-label verhoogt verkoopwaarde</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary mt-1">✓</span>
                  <span><strong>Minder onderhoud:</strong> Nieuwe ramen hoeven 20-30 jaar niet vervangen</span>
                </li>
              </ul>

              <div className="bg-linear-to-r from-secondary/10 to-primary/10 border border-secondary/20 rounded-2xl p-8 mt-12">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Bereken Uw Besparing
                </h3>
                <p className="text-gray-300 mb-6">
                  Wilt u weten hoeveel u precies kunt besparen met nieuwe ramen? 
                  Vraag een gratis opmeting aan en we berekenen uw exacte besparing en terugverdientijd.
                </p>
                <Link
                  href="/offerte"
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Gratis Offerte Aanvragen
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                Tips voor Maximale Besparing
              </h2>
              <ol className="space-y-4 text-gray-300">
                <li>
                  <strong className="text-white">1. Kies HR++ of drievoudig glas</strong><br />
                  Dit is verplicht voor premies en geeft de beste isolatiewaarde.
                </li>
                <li>
                  <strong className="text-white">2. Vervang alle ramen tegelijk</strong><br />
                  Zo voorkom je koudebruggen en maximaliseer je de besparing.
                </li>
                <li>
                  <strong className="text-white">3. Vraag premies aan</strong><br />
                  Tot €3.500 subsidie via Mijn VerbouwPremie verkort de terugverdientijd aanzienlijk.
                </li>
                <li>
                  <strong className="text-white">4. Combineer met andere isolatie</strong><br />
                  Gevelisolatie of dakisolatie versterkt het effect van nieuwe ramen.
                </li>
              </ol>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Gerelateerde Artikelen</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/wat-kosten-nieuwe-ramen" className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
                  <h4 className="font-semibold text-white mb-2">Wat kosten nieuwe ramen?</h4>
                  <p className="text-sm text-gray-400">Prijzen voor PVC en aluminium ramen in 2026</p>
                </Link>
                <Link href="/blog/premies-ramen-deuren-2026" className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
                  <h4 className="font-semibold text-white mb-2">Premies voor ramen 2026</h4>
                  <p className="text-sm text-gray-400">Tot €3.500 subsidie voor nieuwe ramen</p>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
