import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Specializations } from "@/components/Specializations";
import { Testimonials } from "@/components/Testimonials";
import { FAQSection } from "@/components/FAQSection";
import { prisma } from "@/lib/prisma";
import { getSeoMetadata } from "@/lib/seo-helper";

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return getSeoMetadata('/');
}

export default async function HomePage() {
  const testimonials = await prisma.testimonial.findMany({
    where: { approved: true },
    take: 3,
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      name: true,
      company: true,
      text: true,
      rating: true
    }
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0c10]">
      <Hero />
      <ServicesGrid />
      <Specializations />
      <Testimonials testimonials={testimonials} />
      <FAQSection />
      
      {/* CTA Section */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white">Klaar voor uw project?</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Vraag een gratis offerte aan of neem contact op voor persoonlijk advies.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/offerte"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-white hover:bg-secondary/90 transition-colors"
            >
              Gratis offerte aanvragen
            </a>
            <a
              href="/vraag-ai"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-base font-medium text-white hover:bg-white/5 transition-colors"
            >
              Vraag Yannova AI
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
