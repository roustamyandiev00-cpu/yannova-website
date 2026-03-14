import Link from 'next/link';
import { Testimonials } from "@/components/Testimonials";
import { GoogleReviews } from "@/components/GoogleReviews";
import { generateSEO } from "@/lib/seo";
import { generateReviewSchema } from "@/lib/structured-data";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

export const metadata = generateSEO({
  title: "Reviews & Ervaringen - Wat Klanten Zeggen",
  description: "Lees wat onze klanten zeggen over Yannova. Meer dan 50 vijf-sterren reviews voor ramen, deuren, gevelrenovatie en totaalrenovaties in Antwerpen.",
  path: "/reviews",
  keywords: [
    "yannova reviews",
    "yannova ervaringen",
    "klantbeoordelingen yannova",
    "renovatie antwerpen reviews",
  ],
});

export default function ReviewsPage() {
  const reviewSchemas = generateReviewSchema(
    testimonials
      .filter((t) => t.date)
      .map((t) => ({
        author: t.name,
        rating: t.rating,
        reviewBody: t.text,
        datePublished: t.date!,
      }))
  );

  return (
    <div className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchemas) }}
      />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
            <Star className="h-4 w-4 text-secondary fill-secondary" />
            <span className="text-secondary text-sm font-medium">4.9/5 Gemiddelde Score</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-glow">
            Wat onze klanten zeggen
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Ontdek waarom meer dan 500 tevreden klanten voor Yannova kozen voor hun renovatieproject.
          </p>
        </div>

        {/* Google Reviews Widget */}
        <div className="max-w-md mx-auto mb-20">
          <GoogleReviews />
        </div>

        {/* All Testimonials */}
        <Testimonials showAll={true} />

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white/5 rounded-2xl p-12 border border-white/10 backdrop-blur-md max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Word ook een tevreden klant
            </h2>
            <p className="text-muted-foreground mb-8">
              Vraag een gratis offerte aan en ervaar zelf ons vakmanschap en service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/offerte"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary hover:bg-secondary/90 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Gratis offerte aanvragen
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-8 py-4 text-base font-semibold text-foreground border border-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
