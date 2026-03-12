import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { CheckCircle, Phone, Mail, MapPin, Clock, Award, ChevronRight, Euro, ShieldCheck } from 'lucide-react';
import { company } from '@/lib/company';

const cityName = "Schoten";

export const metadata: Metadata = generateSEO({
  title: `Gevelrenovatie ${cityName} | Gevelwerken, Crepi & Isolatie | Yannova`,
  description: `Gevelrenovatie ${cityName}? Yannova is dé vakman voor gevelisolatie, crepi, steenstrips en hout. A-tot-Z begeleiding, duurzame materialen. Vraag een offerte!`,
  path: `/gevelrenovatie/${cityName.toLowerCase()}`,
  keywords: [`gevelrenovatie ${cityName}`, `totaalrenovatie ${cityName}`, `crepi ${cityName}`, `gevelisolatie ${cityName}`, `gevelbepleistering ${cityName}`, `uitvoeren gevelrenovatie ${cityName}`],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://www.yannova.be/" },
  { name: "Diensten", url: "https://www.yannova.be/diensten" },
  { name: "Gevelrenovatie", url: "https://www.yannova.be/diensten/gevelrenovatie" },
  { name: `Gevelrenovatie ${cityName}`, url: `https://www.yannova.be/gevelrenovatie/${cityName.toLowerCase()}` },
]);

// Organization & Local Business Schema (Combined for optimal Rich Snippets)
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
  "priceRange": "€€",
  "founder": {
    "@type": "Person",
    "name": "Arbi Yannova"
  }
};

export default function GevelrenovatieCityPage() {
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
            {/* Achtergrondafbeelding voor de sfeer */}
            <div className="absolute inset-0 bg-[url('/images/hero/renovation-hero.jpg')] bg-cover bg-center opacity-20 mixing-blend-overlay"></div>
          </div>
          <div className="container relative z-10 mx-auto px-6">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-secondary mb-4">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wider">{cityName} en Provincie Antwerpen</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                Gevelrenovatie & Gevelisolatie in <span className="text-secondary">{cityName}</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Bent u op zoek naar een betrouwbare aannemer voor gevelrenovatie in {cityName}? 
                Wij transformeren uw gevel met hoogwaardige crepi, steenstrips, spuitkurk of hout.  
                Bespaar op uw energiefactuur dankzij onze professionele gevelisolatie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/offerte" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-lg shadow-lg hover:bg-secondary/90 transition-all text-lg">
                  Vraag een vrijblijvende offerte
                  <ChevronRight className="w-5 h-5" />
                </a>
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
            
            {/* SECTIE 1: MATERIALEN & DIENSTEN */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Onze expertises: Soorten gevelrenovaties in {cityName}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Een gevel bepaalt niet alleen het uitzicht van uw woning in {cityName}, maar beschermt ook tegen weersinvloeden en koude. 
                Als ervaren gevelexpert bieden we diverse duurzame afwerkingsmaterialen:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-secondary flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Bepleistering & Crepi
                  </h3>
                  <p className="text-gray-600">
                    Gevelbepleistering (crepi) is de meest gekozen vorm van gevelbekleding in {cityName}. Het is strak, waterafstotend, overschilderbaar in alle kleuren en perfect te combineren met buitengevelisolatie.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-secondary flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Steenstrips
                  </h3>
                  <p className="text-gray-600">
                    Wilt u de authentieke look van bakstenen behouden maar profiteren van moderne isolatiewaarden? Steenstrips worden rechtstreeks over de isolatielaag verlijmd met een prachtig resultaat.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-secondary flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Spuitkurk
                  </h3>
                  <p className="text-gray-600">
                    Een milieuvriendelijk en ademend alternatief dat vaak gebruikt wordt voor renovaties in {cityName}. Het is akoestisch isolerend, elastisch (geen tot weinig kans op scheuren) en vergt weinig onderhoud.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-secondary flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Hout & Andere
                  </h3>
                  <p className="text-gray-600">
                    Gevelbekleding in Thermowood, padoek of composiet donneert een unieke, warme uitstraling. Wij plaatsen houten gevels eveneens steevast met de nodige isolatielagen voor optimaal wooncomfort.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTIE 2: VOORDELEN & WAAROM YANNOVA */}
            <section className="bg-gray-100 -mx-6 px-6 py-12 rounded-none md:rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Voordelen van samenwerken met Yannova
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                Voor grote renovatiewerken kiest u beter direct voor betrouwbaar vakmanschap. Of het nu gaat om een specifieke 
                gevelrenovatie of een complete <a href="/diensten/renovatie" className="text-secondary hover:underline">totaalrenovatie in {cityName}</a>, 
                ons bouwteam neemt alles in handen van A tot Z. Onze speerpunten:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Vakmanschap & Precisie</h4>
                    <p className="text-gray-600 text-sm mt-1">Onze specialisten werken met de grootste zorg, letten op details en leveren enkel kwalitatief hoogstaande afwerkingen op. Van raamaansluiting tot plint.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Duurzame Materialen</h4>
                    <p className="text-gray-600 text-sm mt-1">Wij gebruiken 100% kwaliteitsproducten (EPB-conform) wat zorgt voor een lange levensduur en maximale thermische isolatiewaarde voor de woningen in {cityName}.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">A-tot-Z Begeleiding</h4>
                    <p className="text-gray-600 text-sm mt-1">Van eerste plaatsbezoek in {cityName} tot materiaalkeuze, planning van de werken én hulp bij het aanvragen van uw Vlaamse renovatiepremie: wij regelen het.</p>
                  </div>
                </li>
              </ul>
            </section>

            {/* SECTIE 3: LOKALE INFO & PREMIES */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Lokale informatie: Premies voor woningen in {cityName}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Veel woningen in {cityName} kunnen vandaag flink verbeterd worden met extra gevelisolatie. Oudere woningen kennen 
                vaak veel warmteverlies, waardoor energie onnodig via de buitenmuren verdwijnt. Een renovatie met isolatieplaten en strakke gevelbekleding 
                geeft de woning een waardevermeerdering én verlaagt de maandelijkse kosten.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-secondary p-6 rounded-r-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Euro className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-bold text-gray-900">Mijn VerbouwPremie {cityName}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm mb-4">
                  Bewoners in {cityName} die investeren in het isoleren van hun buitenmuren (minstens Rd-waarde van 3 m²K/W) kunnen 
                  een deel van die kosten recupereren via de Vlaamse Mijn VerbouwPremie (en eventueel Mijn VerbouwLening). Wist u dat u ook voor het vernieuwen van <a href="/diensten/ramen-en-deuren" className="text-secondary hover:underline">ramen en deuren</a> in aanmerking komt voor dergelijke subsidies?
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  <strong>Wij helpen u!</strong> Elke factuur en document die wij voor u opmaken, bevat precies die noodzakelijke informatie die de gemeente {cityName} en de Vlaamse overheid van u verwachten.
                </p>
              </div>
            </section>

            {/* LINKS NAAR ANDERE DIENSTEN */}
            <section className="border-t border-gray-200 pt-12">
               <h2 className="text-2xl font-bold mb-6 text-gray-900">Verder lezen & Interne diensten</h2>
               <div className="flex flex-wrap gap-4">
                 <a href="/diensten/renovatie" className="inline-block bg-white text-secondary font-semibold border border-gray-200 shadow-sm px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                   Totaalrenovatie {cityName}
                 </a>
                 <a href="/diensten/ramen-en-deuren" className="inline-block bg-white text-secondary font-semibold border border-gray-200 shadow-sm px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                   Ramen & Deuren in {cityName}
                 </a>
                 <a href="/diensten/gevelrenovatie" className="inline-block bg-white text-secondary font-semibold border border-gray-200 shadow-sm px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                   Meer over Gevelisolatie & Crepi
                 </a>
                 <a href="/diensten/dakrenovatie" className="inline-block bg-white text-secondary font-semibold border border-gray-200 shadow-sm px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                   Dakrenovatie expertise
                 </a>
               </div>
            </section>

          </div>

          {/* SIDEBAR (Sticky CTA) */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-gray-900 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Klaar voor een nieuwe gevel in {cityName}?
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-sm">
                Vraag vandaag nog een plaatsbezoek aan en ontvang een gratis, gedetailleerde en vrijblijvende offerte. 
                Ook voor advies over isolatie-oplossingen, steenstrips of de Mijn VerbouwPremie helpen onze experten u graag verder.
              </p>
              
              <div className="space-y-4">
                <a
                  href="/offerte"
                  className="w-full flex justify-center items-center gap-2 p-4 bg-secondary font-bold text-white rounded-lg hover:bg-secondary/90 transition-colors shadow-lg"
                >
                  Contacteer ons & Offerte
                </a>
                
                <a
                  href={company.phoneHref}
                  className="w-full flex items-center justify-center gap-3 p-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">{company.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="w-full flex items-center justify-center gap-3 p-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="font-semibold">{company.email}</span>
                </a>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-secondary/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Werkgebied</div>
                    <div className="text-sm text-gray-400">Actief in {cityName} en heel de provincie.</div>
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
