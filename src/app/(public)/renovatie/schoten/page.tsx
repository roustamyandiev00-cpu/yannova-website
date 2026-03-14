import Link from 'next/link';
import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { CheckCircle, Phone, Mail, MapPin, Clock, Award, ChevronRight, Euro, ShieldCheck, Home } from 'lucide-react';
import { company } from '@/lib/company';

const cityName = "Schoten";
const serviceName = "Renovatie";

export const metadata: Metadata = generateSEO({
  title: "Renovatie Schoten | Totaalrenovatie & Gevelwerken | Yannova",
  description: "Renovatie in Schoten? Yannova is dé specialist voor een zorgeloze verbouwing van A tot Z. Transparante kosten, 15+ jaar ervaring en 1 vast aanspreekpunt. Vraag een offerte!",
  path: "/renovatie/schoten",
  keywords: ["renovatie Schoten","renovatiewerken Schoten","aannemer Schoten","verbouwen Schoten","renovatiebedrijf Schoten"],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://www.yannova.be/" },
  { name: "Diensten", url: "https://www.yannova.be/diensten" },
  { name: "Renovatie", url: "https://www.yannova.be/renovatie" },
  { name: "Renovatie Schoten", url: `https://www.yannova.be/renovatie/schoten` },
]);

// Organization & Local Business Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Yannova Renovatie",
  "image": "https://www.yannova.be/images/logo.png",
  "@id": "https://www.yannova.be/#organization",
  "url": "https://www.yannova.be",
  "telephone": company.phone,
  "email": company.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": company.address,
    "addressLocality": company.city,
    "postalCode": company.zip,
    "addressCountry": "BE"
  },
  "areaServed": {
    "@type": "City",
    "name": cityName
  },
  "priceRange": "€€€",
  "founder": {
    "@type": "Person",
    "name": "Arbi Yannova"
  }
};

export default function RenovatieSchotenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <div className="min-h-screen bg-gray-50 text-gray-900">
        {/* HERO SECTION */}
        <section className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/images/hero/renovation-hero.jpg')] bg-cover bg-center opacity-20 mixing-blend-overlay"></div>
          </div>
          <div className="container relative z-10 mx-auto px-6">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-secondary mb-4">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Schoten en omgeving</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                Renovatie in <span className="text-secondary">Schoten</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Bent u op zoek naar een betrouwbare aannemer voor een renovatie in Schoten? 
                Wij nemen uw volledige verbouwing in handen: van afbraak tot de finale lik verf. 
                Geniet van transparante prijzen, één aanspreekpunt en vakkundige uitvoering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/offerte" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-lg shadow-lg hover:bg-secondary/90 transition-all text-lg">
                  Vraag een vrijblijvende offerte
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <a href={company.phoneHref} className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 font-bold rounded-lg hover:bg-white/20 transition-all text-lg">
                  <Phone className="w-5 h-5" />
                  Bel {company.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* SECTIE 1: INHOUD & DIENSTEN */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Alles voor uw renovatieproject in Schoten
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Een renovatie vraagt om een strakke coördinatie. Bij Yannova werken specialisten 
                uit verschillende vakgebieden nauw samen. Hierdoor verloopt uw verbouwing in Schoten vlot en zonder 
                onnodige vertragingen. Onze kerndiensten omvatten onder meer:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-secondary flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Ruwbouw & Afbraak
                  </h3>
                  <p className="text-gray-600">
                    Muren uitbreken, poutrels steken of ruimtes herindelen. We creëren de basis voor uw droomwoning.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-secondary flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Gevelrenovatie
                  </h3>
                  <p className="text-gray-600">
                    Crepi, spuitkurk of steenstrips met de gepaste isolatie om uw EPC-waarde direct te verlagen.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-secondary flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Ramen & Deuren
                  </h3>
                  <p className="text-gray-600">
                    Vervanging van oud schrijnwerk door hoogisolerende PVC of aluminium ramen met HR++ glas.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-secondary flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Interieurafwerking
                  </h3>
                  <p className="text-gray-600">
                    Vloeren, pleisterwerken, gyproc plaatsen, keukens, en de afwerking van uw droombadkamer.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTIE 2: VOORDELEN */}
            <section className="bg-gray-100 -mx-6 px-6 py-12 rounded-none md:rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Uw voordelen bij Yannova in Schoten
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                Wij geloven dat een renovatie geen nachtmerrie hoeft te zijn. Door te kiezen voor 
                Yannova ervaart u rust, zekerheid en vakmanschap.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">A-tot-Z Begeleiding (1 Aanspreekpunt)</h4>
                    <p className="text-gray-600 text-sm mt-1">U heeft één vaste projectleider voor uw werf in Schoten. Dat betekent duidelijke communicatie en snelle beslissingen.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Kosten & Budget in controle</h4>
                    <p className="text-gray-600 text-sm mt-1">Onze offertes zijn uiterst gedetailleerd. We bewaken samen met u het budget en stellen transparante oplossingen voor.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Lokale premie-expertise</h4>
                    <p className="text-gray-600 text-sm mt-1">Ontdek uw recht op verbouwpremies of renovatiesubsidies in Schoten. Wij leveren de correcte attesten af.</p>
                  </div>
                </li>
              </ul>
            </section>

            {/* SECTIE 3: LOKAAL INFO & PREMIES */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Renoveren in Schoten: Lokale regelgeving en subsidies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Voor grote renovatiewerken aan de buitenschil van uw woning of constructieve werken, heeft u in Schoten 
                soms een omgevingsvergunning of meldingsplicht nodig. Onze medewerkers assisteren u bij deze stedenbouwkundige formaliteiten. 
                Tegelijk is een renovatie ook hét moment om energetisch te upgraden en subsidies te innen.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-secondary p-6 rounded-r-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Euro className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-bold text-gray-900">Vlaamse Mijn VerbouwPremie in Schoten</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Wist u dat een groot deel van uw investeringen (zoals dakisolatie, hoogrendementsglas en gevelisolatie) in aanmerking komt 
                  voor de Mijn VerbouwPremie? Voor inwoners van Schoten kan een renovatieproject tot tienduizenden euro&apos;s voordeliger uitvallen 
                  door de juiste premies te benutten. Wij zorgen dat u alle juiste facturen en EPB-gerelateerde bijlages ontvangt!
                </p>
              </div>
            </section>
            
            {/* SECTIE 4: INTERNE LINKS */}
            <section className="border-t border-gray-200 pt-12">
               <h2 className="text-2xl font-bold mb-6 text-gray-900">Verder lezen & Diensten</h2>
               <div className="flex flex-wrap gap-4">
                 <Link href="/diensten/gevelrenovatie" className="inline-block bg-white text-secondary font-semibold border border-gray-200 shadow-sm px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                   Gevelrenovatie & Crepi
                 </Link>
                 <Link href="/diensten/ramen-en-deuren" className="inline-block bg-white text-secondary font-semibold border border-gray-200 shadow-sm px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                   Ramen & Deuren in Schoten
                 </Link>
                 <Link href="/projecten" className="inline-block bg-white text-secondary font-semibold border border-gray-200 shadow-sm px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                   Bekijk onze realisaties
                 </Link>
               </div>
            </section>

          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-gray-900 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Droomt u van een vernieuwde woning in Schoten?
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-sm">
                Vraag een vrijblijvend plaatsbezoek aan. Wij komen ter plekke in Schoten om uw wensen te bespreken, 
                de woning op te meten en met gericht advies te komen. Zo bouwen we samen aan een vlekkeloze verbouwing.
              </p>
              
              <div className="space-y-4">
                <Link
                  href="/offerte"
                  className="w-full flex justify-center items-center gap-2 p-4 bg-secondary font-bold text-white rounded-lg hover:bg-secondary/90 transition-colors shadow-lg"
                >
                  Contacteer ons & Offerte
                </Link>
                
                <a
                  href={company.phoneHref}
                  className="w-full flex items-center justify-center gap-3 p-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">{company.phoneDisplay}</span>
                </a>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-secondary/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Lokaal Verankerd</div>
                    <div className="text-sm text-gray-400">Uw aannemer in Schoten.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
