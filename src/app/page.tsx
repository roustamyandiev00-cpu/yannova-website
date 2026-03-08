import { Hero } from "@/components/Hero";
import { Specializations } from "@/components/Specializations";
import { FAQSection } from "@/components/FAQSection";
import { ArrowRight } from "lucide-react";

export const dynamic = 'force-dynamic';
export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata() {
  return {
    title: 'Ramen & Deuren in Antwerpen Stad en rond Antwerpen | Yannova',
    description: 'Ramen, deuren, gevelisolatie en renovatie in Antwerpen stad en rond Antwerpen: Berchem, Deurne, Merksem, Wilrijk, Brasschaat, Schoten en Wijnegem. Gratis opmeting en offerte binnen 24 uur.',
    keywords: [
      'ramen antwerpen',
      'deuren antwerpen',
      'ramen antwerpen stad',
      'deuren antwerpen stad',
      'ramen berchem',
      'ramen deurne',
      'ramen merksem',
      'ramen wilrijk',
      'ramen brasschaat',
      'ramen schoten',
      'ramen wijnegem',
      'ramen schilde',
      'ramen ranst',
      'ramen mortsel',
      'aluminium ramen antwerpen',
      'pvc ramen antwerpen',
      'gevelrenovatie antwerpen',
      'gevelisolatie antwerpen',
      'totaalrenovatie antwerpen',
      'renovatiebedrijf antwerpen',
      'aannemer antwerpen',
      'offerte ramen antwerpen',
      'gratis opmeting antwerpen',
      'mijn verbouwpremie antwerpen'
    ].join(', '),
    openGraph: {
      title: 'Ramen & Deuren in Antwerpen Stad en rond Antwerpen | Yannova',
      description: 'Specialist in ramen, deuren en renovatie in Antwerpen stad, Berchem, Deurne, Merksem, Wilrijk en randgemeenten rond Antwerpen.',
      type: 'website',
      locale: 'nl_BE',
      siteName: 'Yannova Bouw',
      url: 'https://www.yannova.be',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Ramen & Deuren in Antwerpen Stad en rond Antwerpen | Yannova',
      description: 'Actief in Antwerpen stad en rond Antwerpen voor ramen, deuren, gevelisolatie en renovatie.',
    },
    alternates: {
      canonical: 'https://www.yannova.be',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Specializations />
      <FAQSection />
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-secondary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">Klaar voor uw project?</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Vraag een gratis offerte aan of neem contact op voor persoonlijk advies.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/offerte"
              className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-secondary to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-elegant glow-hover transition-all duration-300 hover:scale-105"
            >
              Gratis offerte aanvragen
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/vraag-ai"
              className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-8 py-4 text-base font-medium text-white shadow-elegant"
            >
              Vraag Yannova AI
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
