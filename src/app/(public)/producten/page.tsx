import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { generateSEO } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";
import { ProductCatalogSection } from "@/components/ProductCatalogSection";

export const metadata: Metadata = generateSEO({
  title: "Producten | Ramen, Deuren, Rolluiken & Garagepoorten",
  description:
    "Ontdek het bredere productgamma van Yannova: ramen, deuren, schuifsystemen, rolluiken, zonwering en garagepoorten.",
  path: "/producten",
  keywords: [
    "producten ramen deuren",
    "rolluiken",
    "garagepoorten",
    "schuifsystemen",
    "zonwering",
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Producten", url: "/producten" },
]);

export default function ProductenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-[#0a0c10]">
        <section className="border-b border-white/10 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Producten die Yannova kan leveren en plaatsen
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-gray-300">
                Naast de diensten die al op de site stonden, kunnen we ook een ruimer gamma tonen op
                basis van het assortiment van onze leverancier. Denk aan schuifsystemen, rolluiken,
                screens en garagepoorten naast ramen en deuren.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-base font-semibold text-white hover:bg-secondary/90 transition-colors"
                >
                  Vraag productadvies
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/offerte"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-base font-medium text-white hover:bg-white/5 transition-colors"
                >
                  Offerte aanvragen
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ProductCatalogSection />

        <section className="py-16">
          <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-2">
            <div className="editorial-pane">
              <h2 className="text-2xl font-bold text-white">Belangrijk voor de website</h2>
              <ul className="mt-6 space-y-3">
                {[
                  "We tonen dit gamma als eigen Yannova-aanbod, niet als kopie van de leverancierssite.",
                  "Productcopy moet herschreven worden in eigen woorden voor SEO en duidelijkheid.",
                  "Leveranciersfoto's of technische fiches gebruik je alleen met expliciete toestemming.",
                  "Elke productgroep linkt best door naar contact, offerte en relevante dienstpagina&apos;s.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="editorial-callout px-6 py-8">
              <h2 className="text-2xl font-bold text-white">Volgende uitbouw</h2>
              <p className="mt-4 text-gray-200">
                Zodra het gamma op hoofdniveau zichtbaar is, kunnen we voor de best presterende
                productgroepen ook lokale pagina&apos;s maken zoals `rolluiken-zoersel` of
                `garagepoorten-antwerpen`.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/ramen-deuren"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#0a0c10] hover:bg-white/90 transition-colors"
                >
                  Naar ramen & deuren
                </Link>
                <Link
                  href="/renovatie"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Naar renovatie
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
