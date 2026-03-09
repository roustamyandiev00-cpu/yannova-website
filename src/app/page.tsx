import { Hero } from "@/components/Hero";
import { Specializations } from "@/components/Specializations";
import { FAQSection } from "@/components/FAQSection";
import { Testimonials } from "@/components/Testimonials";
import { ArrowRight } from "lucide-react";
import { generateFAQSchema } from "@/lib/faq-schema";

export const dynamic = 'force-dynamic';
export const revalidate = 60; // Revalidate every 60 seconds

// Homepage FAQ voor structured data
const homepageFAQs = [
  {
    question: "Wat zijn de kosten voor nieuwe ramen in Antwerpen?",
    answer: "De prijs voor nieuwe ramen hangt af van het type, de grootte en het materiaal. Gemiddeld betaal je tussen €300 en €800 per m². Wij bieden een gratis opmeting en offerte binnen 24 uur.",
  },
  {
    question: "In welke regio's is Yannova actief?",
    answer: "Wij zijn actief in Antwerpen stad en alle randgemeenten: Berchem, Deurne, Merksem, Wilrijk, Brasschaat, Schoten, Wijnegem, Schilde, Ranst, Mortsel en omgeving.",
  },
  {
    question: "Welke diensten biedt Yannova aan?",
    answer: "Wij zijn gespecialiseerd in het plaatsen van ramen en deuren, gevelrenovatie met isolatie en crepi, isolatiewerken en totaalrenovaties. Van kleine aanpassingen tot complete woningrenovaties.",
  },
  {
    question: "Hoe snel kan ik een offerte krijgen?",
    answer: "Na uw aanvraag nemen wij binnen 24 uur contact op voor een gratis plaatsbezoek. Direct na de opmeting ontvangt u een duidelijke offerte zonder verborgen kosten.",
  },
];

const faqSchema = generateFAQSchema(homepageFAQs);

export async function generateMetadata() {
  return {
    title: 'Ramen & Deuren Plaatsen Antwerpen | Gevelrenovatie & Crepi | Yannova',
    description: 'Specialist in ramen, deuren en gevelrenovatie in Antwerpen en omgeving. Gratis opmeting en offerte binnen 24u. 15+ jaar ervaring. PVC & aluminium ramen, crepi, isolatie.',
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="flex flex-col min-h-screen">
      <Hero />
      <Specializations />
      
      {/* SEO Content Section - Waarom Yannova */}
      <section className="py-20 bg-gradient-to-b from-background to-background/95">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Waarom kiezen voor Yannova in Antwerpen?
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                Yannova is uw betrouwbare partner voor <a href="/diensten/ramen-deuren" className="text-secondary hover:underline">ramen en deuren</a> en <a href="/diensten/renovatie" className="text-secondary hover:underline">renovatie</a> in Antwerpen en omgeving. 
                Met meer dan 15 jaar ervaring in de bouwsector helpen wij particulieren en bedrijven met hoogwaardige 
                renovatieprojecten. Of u nu op zoek bent naar <strong>energiezuinige ramen in Antwerpen stad</strong>, 
                <a href="/diensten/gevelrenovatie" className="text-secondary hover:underline">gevelisolatie in Berchem</a>, of een <strong>totaalrenovatie in Deurne</strong> - wij staan voor u klaar.
              </p>
              
              <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                Onze Diensten in Antwerpen en Omgeving
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Wij zijn gespecialiseerd in diverse renovatiewerken en bieden een totaalpakket aan:
              </p>
              <ul className="text-gray-300 space-y-3 mb-6">
                <li>
                  <strong>Ramen en Deuren Plaatsen:</strong> PVC en aluminium ramen met HR++ of drievoudig glas voor 
                  maximale isolatie. Ideaal voor woningen in Antwerpen, Merksem, Wilrijk, Brasschaat en Schoten.
                </li>
                <li>
                  <strong>Gevelrenovatie en Crepi:</strong> Professionele gevelisolatie met crepi-afwerking voor een 
                  energiezuinige woning. Actief in heel Antwerpen en randgemeenten zoals Wijnegem, Mortsel en Edegem.
                </li>
                <li>
                  <strong>Isolatiewerken:</strong> Dak- en gevelisolatie voor een lager E-peil en lagere energiefactuur. 
                  Premies mogelijk via Mijn VerbouwPremie.
                </li>
                <li>
                  <strong>Totaalrenovatie:</strong> Van A tot Z begeleiding bij uw renovatieproject. Eén aanspreekpunt 
                  voor ramen, deuren, gevel, isolatie en afwerking.
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                Werkgebied: Antwerpen Stad en 30km Rondom
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Wij zijn actief in <strong>Antwerpen stad</strong> en alle randgemeenten binnen een straal van 30 kilometer. 
                Dit omvat onder andere: <strong>Berchem, Deurne, Merksem, Wilrijk, Borgerhout, Hoboken, Brasschaat, 
                Schoten, Wijnegem, Schilde, Ranst, Mortsel, Edegem, Kontich, Hove, Boechout, Lint, Aartselaar, 
                Boom, Rumst, Mechelen, Lier</strong> en vele andere gemeenten in de regio Antwerpen.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                Gratis Opmeting en Offerte binnen 24 Uur
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Bij Yannova werken we transparant en zonder verrassingen. Na uw aanvraag komen wij <strong>gratis bij u langs 
                voor een opmeting</strong> in Antwerpen of omgeving. Binnen 24 uur ontvangt u een <strong>duidelijke offerte 
                zonder verborgen kosten</strong>. Wij adviseren u ook over mogelijke premies via Mijn VerbouwPremie, zodat 
                u maximaal kunt besparen op uw renovatie.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                Kwaliteit en Garantie
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Alle werken worden uitgevoerd door ervaren vakmensen met oog voor detail. Wij werken uitsluitend met 
                <strong> hoogwaardige materialen van A-merken</strong> en bieden <strong>tot 30 jaar garantie op ramen en deuren</strong>. 
                Voor gevelwerken en isolatie hanteren wij een garantie van 10 jaar. Uw tevredenheid staat bij ons centraal, 
                daarom blijven wij betrokken tot het project volledig naar wens is afgerond.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
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
    </>
  );
}
