import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { generateSEO } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";
import { generateArticleSchema } from "@/lib/article-schema";

export const metadata: Metadata = generateSEO({
  title: "Premies voor Ramen en Deuren 2026 | Vlaanderen",
  description: "Overzicht van alle premies voor ramen en deuren in Vlaanderen 2026. Tot €3.500 subsidie voor energiebesparende renovaties.",
  path: "/blog/premies-ramen-deuren-2026",
  keywords: ["premies ramen", "subsidie ramen", "renovatiepremie vlaanderen", "energiepremie"],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Premies ramen en deuren 2026", url: "/blog/premies-ramen-deuren-2026" },
]);

const articleSchema = generateArticleSchema({
  headline: "Premies voor ramen en deuren in 2026",
  description: "Overzicht van alle beschikbare premies in Vlaanderen voor nieuwe ramen en deuren.",
  datePublished: "2026-03-08",
  dateModified: "2026-03-08",
  authorName: "Yannova",
  path: "/blog/premies-ramen-deuren-2026",
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
              <span>7 min leestijd</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Premies voor ramen en deuren in 2026
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Nieuwe ramen en deuren plaatsen? In Vlaanderen kun je verschillende premies aanvragen 
                om je investering terug te verdienen. Hier vind je een volledig overzicht.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Vlaamse Renovatiepremie</h2>
              
              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Tot €3.500 premie</h3>
                <p className="text-gray-300 mb-4">
                  De Vlaamse renovatiepremie ondersteunt energiebesparende renovaties zoals nieuwe ramen en deuren.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span>Basispremie: €1.750 voor ramen en deuren</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span>Verhoogde premie: €3.500 (bij laag inkomen)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span>Geldig voor HR++ of drievoudig glas</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Voorwaarden</h3>
              <ul className="space-y-2 text-gray-300 mb-8">
                <li>• Je woning moet minstens 15 jaar oud zijn</li>
                <li>• De werken moeten uitgevoerd worden door een erkende aannemer</li>
                <li>• Minimale U-waarde van 1,5 W/m²K voor ramen</li>
                <li>• Minimale U-waarde van 2,0 W/m²K voor deuren</li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Gemeentelijke premies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Naast de Vlaamse premie bieden veel gemeenten extra premies aan:
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Antwerpen</h3>
                <p className="text-gray-300">
                  Extra premie tot €1.000 voor energiebesparende renovaties in bepaalde wijken.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Andere gemeenten</h3>
                <p className="text-gray-300 mb-4">
                  Check bij je gemeente of er lokale premies beschikbaar zijn. Veel gemeenten bieden 
                  extra ondersteuning voor renovaties.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">BTW-verlaging</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Voor renovatiewerken aan woningen ouder dan 10 jaar geldt een verlaagd BTW-tarief van 6% 
                in plaats van 21%. Dit scheelt al snel honderden euro&apos;s!
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Hoe aanvragen?</h2>
              <ol className="space-y-4 text-gray-300 mb-8">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">1.</span>
                  <span>Vraag offertes aan bij erkende aannemers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">2.</span>
                  <span>Laat de werken uitvoeren</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">3.</span>
                  <span>Dien je aanvraag in via het online platform van Vlaanderen</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">4.</span>
                  <span>Ontvang je premie binnen 3-6 maanden</span>
                </li>
              </ol>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8 mt-12">
                <h3 className="text-2xl font-bold text-white mb-4">Hulp nodig bij premies?</h3>
                <p className="text-gray-300 mb-6">
                  Wij helpen je graag met het aanvragen van de juiste premies. Neem contact op voor advies.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-white hover:bg-secondary/90 transition-colors">
                  Neem contact op
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
