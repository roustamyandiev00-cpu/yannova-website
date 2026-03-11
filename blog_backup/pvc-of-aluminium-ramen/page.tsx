import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2, X } from "lucide-react";
import { generateSEO } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";
import { generateArticleSchema } from "@/lib/article-schema";

export const metadata: Metadata = generateSEO({
  title: "PVC of Aluminium Ramen: Wat is Beter? | Vergelijking 2026",
  description: "Vergelijk PVC en aluminium ramen. Ontdek de voor- en nadelen, prijzen en wat het beste past bij jouw woning.",
  path: "/blog/pvc-of-aluminium-ramen",
  keywords: ["pvc ramen", "aluminium ramen", "pvc vs aluminium", "beste ramen"],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "PVC of aluminium ramen", url: "/blog/pvc-of-aluminium-ramen" },
]);

const articleSchema = generateArticleSchema({
  headline: "PVC of aluminium ramen: wat is beter?",
  description: "Vergelijk de voor- en nadelen van PVC en aluminium ramen voor uw woning.",
  datePublished: "2026-03-08",
  dateModified: "2026-03-08",
  authorName: "Yannova",
  path: "/blog/pvc-of-aluminium-ramen",
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
              <span>6 min leestijd</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              PVC of aluminium ramen: wat is beter?
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Twijfel je tussen PVC en aluminium ramen? Beide materialen hebben hun voor- en nadelen. 
                In deze gids helpen we je de juiste keuze maken voor jouw woning.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">PVC Ramen</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Voordelen
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Goedkoper dan aluminium</li>
                    <li>• Uitstekende isolatie</li>
                    <li>• Onderhoudsarm</li>
                    <li>• Lange levensduur (30+ jaar)</li>
                    <li>• Goed geluidsisolerend</li>
                  </ul>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <X className="h-5 w-5 text-red-500" />
                    Nadelen
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Dikkere profielen</li>
                    <li>• Beperkte kleurkeuze</li>
                    <li>• Kan verkleuren in de zon</li>
                    <li>• Minder modern uiterlijk</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-semibold text-white mb-2">Prijs PVC ramen</h3>
                <p className="text-2xl font-bold text-secondary">€400 - €800 per m²</p>
                <p className="text-sm text-gray-400 mt-2">Inclusief plaatsing en BTW</p>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Aluminium Ramen</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Voordelen
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Slanke, moderne profielen</li>
                    <li>• Alle RAL-kleuren mogelijk</li>
                    <li>• Zeer duurzaam</li>
                    <li>• Verkleurt niet</li>
                    <li>• Perfect voor grote ramen</li>
                  </ul>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <X className="h-5 w-5 text-red-500" />
                    Nadelen
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Duurder dan PVC</li>
                    <li>• Koudebruggen mogelijk</li>
                    <li>• Meer onderhoud nodig</li>
                    <li>• Langere levertijd</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-semibold text-white mb-2">Prijs aluminium ramen</h3>
                <p className="text-2xl font-bold text-secondary">€600 - €1.200 per m²</p>
                <p className="text-sm text-gray-400 mt-2">Inclusief plaatsing en BTW</p>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Wat past bij jouw woning?</h2>

              <div className="space-y-6 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Kies PVC als:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Je budget beperkt is</li>
                    <li>• Je maximale isolatie wilt</li>
                    <li>• Je een klassieke woning hebt</li>
                    <li>• Onderhoud minimaal moet zijn</li>
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Kies aluminium als:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Je een moderne uitstraling wilt</li>
                    <li>• Je grote glaspartijen hebt</li>
                    <li>• Je specifieke kleuren wilt</li>
                    <li>• Duurzaamheid prioriteit heeft</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Conclusie</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Er is geen &quot;beste&quot; keuze - het hangt af van je budget, woonstijl en persoonlijke voorkeur. 
                PVC is ideaal voor wie kwaliteit zoekt tegen een betaalbare prijs. Aluminium is perfect 
                voor wie een moderne uitstraling wil en bereid is meer te investeren.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8 mt-12">
                <h3 className="text-2xl font-bold text-white mb-4">Advies nodig?</h3>
                <p className="text-gray-300 mb-6">
                  Twijfel je nog? Wij komen graag langs voor een gratis adviesgesprek en opmeting.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-white hover:bg-secondary/90 transition-colors">
                  Gratis advies
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
