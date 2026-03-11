import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { generateSEO } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";
import { generateArticleSchema } from "@/lib/article-schema";

export const metadata: Metadata = generateSEO({
  title: "Wat kosten nieuwe ramen in 2026? Prijzen PVC en Aluminium",
  description: "Ontdek de prijzen voor nieuwe ramen in 2026. PVC ramen vanaf €400/m², aluminium vanaf €600/m². Inclusief plaatsing en BTW.",
  path: "/blog/wat-kosten-nieuwe-ramen",
  keywords: ["ramen prijzen", "wat kosten ramen", "pvc ramen prijs", "aluminium ramen prijs"],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Wat kosten nieuwe ramen", url: "/blog/wat-kosten-nieuwe-ramen" },
]);

const articleSchema = generateArticleSchema({
  headline: "Wat kosten nieuwe ramen in 2026?",
  description: "Ontdek de prijzen voor PVC en aluminium ramen en waar de prijs van afhangt.",
  datePublished: "2026-03-08",
  dateModified: "2026-03-08",
  authorName: "Yannova",
  path: "/blog/wat-kosten-nieuwe-ramen",
});

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="min-h-screen bg-[#0a0c10]">
        <article className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-secondary hover:underline mb-8">
              ← Terug naar blog
            </Link>
            
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Calendar className="h-4 w-4" />
              <time dateTime="2026-03-08">8 maart 2026</time>
              <span>•</span>
              <span>5 min leestijd</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Wat kosten nieuwe ramen in 2026?
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Nieuwe ramen zijn een belangrijke investering. In deze gids leggen we uit wat je kunt verwachten 
                qua prijzen voor PVC en aluminium ramen in 2026.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Gemiddelde prijzen per m²</h2>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">PVC Ramen</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Standaard PVC met HR++ glas: <strong className="text-white">€400 - €600/m²</strong></li>
                  <li>• Premium PVC met drievoudig glas: <strong className="text-white">€600 - €800/m²</strong></li>
                  <li>• Inclusief plaatsing en BTW</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Aluminium Ramen</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Standaard aluminium met HR++ glas: <strong className="text-white">€600 - €900/m²</strong></li>
                  <li>• Premium aluminium met drievoudig glas: <strong className="text-white">€900 - €1.200/m²</strong></li>
                  <li>• Inclusief plaatsing en BTW</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Waar hangt de prijs van af?</h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                De uiteindelijke prijs van je nieuwe ramen wordt bepaald door verschillende factoren:
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">1. Materiaal</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                PVC is goedkoper dan aluminium, maar aluminium biedt slankere profielen en een modernere uitstraling.
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">2. Type beglazing</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                HR++ glas is standaard, maar drievoudig glas isoleert beter en kost €100-€200/m² meer.
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">3. Afmetingen en vorm</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Grote ramen of speciale vormen (rond, driehoek) zijn duurder dan standaard rechthoekige ramen.
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">4. Extra opties</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Inbraakwerend glas, zonwering, speciale kleuren of afwerkingen verhogen de prijs.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Voorbeeld: Volledige woning</h2>
              
              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 mb-8">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Voor een gemiddelde rijwoning met 15m² ramen (6-8 ramen):
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• PVC met HR++ glas: <strong className="text-white">€6.000 - €9.000</strong></li>
                  <li>• Aluminium met HR++ glas: <strong className="text-white">€9.000 - €13.500</strong></li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Premies en subsidies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Vergeet niet dat je premies kunt aanvragen! In Vlaanderen kun je tot €3.500 premie krijgen 
                voor energiebesparende renovaties zoals nieuwe ramen.
              </p>
              <Link href="/blog/premies-ramen-deuren-2026" className="inline-flex items-center gap-2 text-secondary hover:underline">
                Lees meer over premies
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8 mt-12">
                <h3 className="text-2xl font-bold text-white mb-4">Gratis offerte aanvragen?</h3>
                <p className="text-gray-300 mb-6">
                  Wil je weten wat nieuwe ramen voor jouw woning kosten? Vraag een gratis offerte aan.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-white hover:bg-secondary/90 transition-colors">
                  Gratis offerte
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
