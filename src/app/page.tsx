import { Hero } from "@/components/Hero";
import { Specializations } from "@/components/Specializations";
import { FAQSection } from "@/components/FAQSection";
import { ArrowRight } from "lucide-react";

export const dynamic = 'force-dynamic';
export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata() {
  return {
    title: 'Ramen & Deuren Plaatsen Zoersel, Antwerpen | Yannova - Gratis Offerte 24u',
    description: 'Specialist ramen en deuren in Zoersel, Antwerpen, Schilde, Brasschaat. PVC & aluminium ramen, gevelrenovatie, totaalrenovatie. 15+ jaar ervaring. Gratis opmeting & offerte binnen 24u. Premie-advies. ✓ HR++ & drievoudig glas ✓ EPC-verbetering ✓ 30 jaar garantie',
    keywords: [
      // Primaire keywords - hoog volume
      'ramen plaatsen Zoersel', 'deuren plaatsen Zoersel', 'ramen Antwerpen', 'deuren Antwerpen',
      'PVC ramen Zoersel', 'aluminium ramen Antwerpen', 'ramen Schilde', 'ramen Brasschaat',
      
      // Long-tail keywords - hoge conversie
      'ramen plaatsen prijs Antwerpen', 'nieuwe ramen kosten Zoersel', 'ramen vervangen Antwerpen',
      'energiezuinige ramen Zoersel', 'drievoudig glas plaatsen', 'HR++ ramen Antwerpen',
      
      // Gevelrenovatie keywords
      'gevelrenovatie Zoersel', 'gevelisolatie Antwerpen', 'crepi Zoersel', 'gevel isoleren Antwerpen',
      'EPC verbetering Zoersel', 'gevelwerken Antwerpen', 'buitenmuur isoleren',
      
      // Totaalrenovatie keywords
      'totaalrenovatie Zoersel', 'renovatie Antwerpen', 'verbouwing Zoersel', 'aannemer Antwerpen',
      'renovatiebedrijf Zoersel', 'huis renoveren Antwerpen', 'totaalrenovatie prijs',
      
      // Lokale keywords - alle gemeenten
      'ramen Schoten', 'ramen Wijnegem', 'ramen Ranst', 'ramen Brecht', 'ramen Malle',
      'ramen Westmalle', 'ramen Kontich', 'ramen Mortsel', 'ramen Edegem', 'ramen Hove',
      'ramen Mechelen', 'ramen Lier', 'ramen Wilrijk', 'ramen Berchem', 'ramen Deurne',
      
      // Service keywords
      'gratis opmeting ramen', 'offerte ramen 24 uur', 'ramen op maat', 'deuren op maat',
      'schrijnwerk Zoersel', 'schrijnwerkerij Antwerpen', 'raamplaatsing', 'deurplaatsing',
      
      // Premie keywords
      'premies ramen Vlaanderen', 'renovatiepremie Antwerpen', 'mijn verbouwpremie',
      'subsidies energiezuinige ramen', 'premie gevelisolatie', 'premie-advies renovatie'
    ].join(', '),
    openGraph: {
      title: 'Ramen & Deuren Plaatsen Zoersel, Antwerpen | Yannova',
      description: 'Specialist ramen, deuren & renovatie in Zoersel en regio Antwerpen. Gratis offerte binnen 24u. 15+ jaar ervaring. PVC & aluminium ramen met HR++ of drievoudig glas.',
      type: 'website',
      locale: 'nl_BE',
      siteName: 'Yannova Bouw',
    },
    alternates: {
      canonical: 'https://yannova.be',
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
    <div className="flex flex-col min-h-screen bg-linear-to-b from-[#0a0c10] via-[#0d1117] to-[#0a0c10]">
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
