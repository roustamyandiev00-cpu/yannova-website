import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateSEO } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { CheckCircle, Phone, Mail, MapPin, ChevronRight, Euro, ShieldCheck } from 'lucide-react';
import { company } from '@/lib/company';

const stadData: Record<string, { name: string; description: string }> = {
  antwerpen: { name: "Antwerpen", description: "de grootste stad van België" },
  berchem: { name: "Berchem", description: "een levendige gemeente in de Antwerpse agglomeratie" },
  brasschaat: { name: "Brasschaat", description: "een groene gemeente ten noorden van Antwerpen" },
  schoten: { name: "Schoten", description: "een residentiële gemeente in de provincie Antwerpen" },
  deurne: { name: "Deurne", description: "een district van de stad Antwerpen" },
  merksem: { name: "Merksem", description: "een district van de stad Antwerpen" },
  wilrijk: { name: "Wilrijk", description: "een district ten zuiden van Antwerpen" },
  mortsel: { name: "Mortsel", description: "een gemeente in de Antwerpse rand" },
  wijnegem: { name: "Wijnegem", description: "een gemeente in de provincie Antwerpen" },
  schilde: { name: "Schilde", description: "een gemeente in de Antwerpse Kempen" },
  zoersel: { name: "Zoersel", description: "een gemeente in de Antwerpse Kempen" },
};

export async function generateStaticParams() {
  return Object.keys(stadData).map((stad) => ({ stad }));
}

export async function generateMetadata({ params }: { params: Promise<{ stad: string }> }): Promise<Metadata> {
  const { stad } = await params;
  const data = stadData[stad];
  if (!data) return {};
  return generateSEO({
    title: `Crepi ${data.name} | Gevelbepleistering & Gevelisolatie | Yannova`,
    description: `Crepi in ${data.name}? Yannova is specialist in gevelbepleistering, crepi en gevelisolatie. Vernieuw uw gevel en bespaar op energie. Gratis offerte!`,
    path: `/crepi/${stad}`,
    keywords: [
      `crepi ${data.name}`,
      `gevelbepleistering ${data.name}`,
      `gevelisolatie ${data.name}`,
      `crepi prijs ${data.name}`,
      `gevel renovatie ${data.name}`,
      `spuitpleister ${data.name}`,
    ],
  });
}

export default async function CrepiStadPage({ params }: { params: Promise<{ stad: string }> }) {
  const { stad } = await params;
  const data = stadData[stad];
  if (!data) notFound();

  const { name: cityName } = data;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.yannova.be/" },
    { name: "Crepi", url: "https://www.yannova.be/crepi-gevel" },
    { name: `Crepi ${cityName}`, url: `https://www.yannova.be/crepi/${stad}` },
  ]);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Yannova Crepi & Gevelrenovatie",
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
      "addressCountry": "BE",
    },
    "areaServed": { "@type": "City", "name": cityName },
    "priceRange": "€€",
    "founder": { "@type": "Person", "name": "Arbi Yannova" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <div className="min-h-screen bg-gray-50 text-gray-900">
        {/* HERO */}
        <section className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/images/hero/renovation-hero.jpg')] bg-cover bg-center opacity-20"></div>
          </div>
          <div className="container relative z-10 mx-auto px-6">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-secondary mb-4">
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wider">{cityName} en omgeving</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                Crepi in <span className="text-secondary">{cityName}</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Op zoek naar een vakman voor crepi of gevelbepleistering in {cityName}? Yannova vernieuwt uw gevel met
                duurzame materialen, gecombineerd met buitengevelisolatie voor een lagere energiefactuur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/offerte" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-lg shadow-lg hover:bg-secondary/90 transition-all text-lg">
                  Gratis offerte aanvragen
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
          <div className="lg:col-span-2 space-y-16">

            {/* SECTIE 1: WAT IS CREPI */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Wat is crepi en waarom kiezen in {cityName}?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Crepi (gevelbepleistering) is een populaire gevelbekleding in {cityName} en omgeving. Het is een minerale of
                acrylgebonden pleisterlaag die direct op de gevel of op isolatieplaten wordt aangebracht. Het resultaat is
                een strakke, waterdichte en onderhoudsvriendelijke gevel die tientallen jaren meegaat.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-secondary flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Minerale Crepi
                  </h3>
                  <p className="text-gray-600">
                    Dampopen en duurzaam. Ideaal voor oudere woningen in {cityName} die goed moeten kunnen ademen.
                    Verkrijgbaar in talloze texturen en kleuren.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-secondary flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Acryl Crepi
                  </h3>
                  <p className="text-gray-600">
                    Flexibel en scheurbestendig. Perfect voor nieuwbouw of renovaties in {cityName} waar kleine
                    zettingen mogelijk zijn. Uitstekende weerbestendigheid.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-secondary flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Crepi + Isolatie (ETICS)
                  </h3>
                  <p className="text-gray-600">
                    Het meest gevraagde systeem in {cityName}: isolatieplaten (EPS of minerale wol) worden op de gevel
                    gelijmd en verankerd, daarna afgewerkt met crepi. Maximale energiebesparing.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-secondary flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Spuitkurk
                  </h3>
                  <p className="text-gray-600">
                    Een milieuvriendelijk en elastisch alternatief voor klassieke crepi. Akoestisch isolerend,
                    ademend en nauwelijks onderhoud nodig.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTIE 2: VOORDELEN */}
            <section className="bg-gray-100 -mx-6 px-6 py-12 rounded-none md:rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Waarom Yannova voor crepi in {cityName}?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Gratis plaatsbezoek & offerte</h4>
                    <p className="text-gray-600 text-sm mt-1">Wij komen ter plaatse in {cityName}, meten op en bezorgen u een gedetailleerde offerte zonder verplichtingen.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">EPB-conforme materialen</h4>
                    <p className="text-gray-600 text-sm mt-1">Alle isolatiematerialen voldoen aan de Vlaamse EPB-normen, zodat u in aanmerking komt voor de Mijn VerbouwPremie.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">10 jaar garantie op plaatsing</h4>
                    <p className="text-gray-600 text-sm mt-1">U geniet van een uitgebreide garantie op zowel materialen als vakkundige uitvoering van uw crepi in {cityName}.</p>
                  </div>
                </li>
              </ul>
            </section>

            {/* SECTIE 3: PRIJS & PREMIES */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Crepi prijs in {cityName} & beschikbare premies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                De prijs van crepi in {cityName} hangt af van het type systeem, de oppervlakte en de staat van de bestaande gevel.
                Als indicatie: een ETICS-systeem (isolatie + crepi) kost gemiddeld €80–€150 per m². Enkel crepi (zonder isolatie)
                ligt lager, rond €40–€70 per m².
              </p>
              <div className="bg-blue-50 border-l-4 border-secondary p-6 rounded-r-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Euro className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-bold text-gray-900">Mijn VerbouwPremie voor gevelisolatie</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Bewoners in {cityName} die hun buitenmuren isoleren (min. Rd 3 m²K/W) kunnen een deel van de kosten
                  recupereren via de Vlaamse Mijn VerbouwPremie. Wij bezorgen u alle nodige attesten en facturen
                  zodat uw premieaanvraag vlot verloopt.
                </p>
              </div>
            </section>

            {/* INTERNE LINKS */}
            <section className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Meer informatie</h2>
              <div className="flex flex-wrap gap-4">
                <Link href="/gevelrenovatie" className="inline-block bg-white text-secondary font-semibold border border-gray-200 shadow-sm px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                  Gevelrenovatie {cityName}
                </Link>
                <Link href={`/ramen/${stad}`} className="inline-block bg-white text-secondary font-semibold border border-gray-200 shadow-sm px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                  Ramen {cityName}
                </Link>
                <Link href={`/renovatie/${stad}`} className="inline-block bg-white text-secondary font-semibold border border-gray-200 shadow-sm px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                  Renovatie {cityName}
                </Link>
                <Link href="/premie-gids" className="inline-block bg-white text-secondary font-semibold border border-gray-200 shadow-sm px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                  Premiegids 2026
                </Link>
              </div>
            </section>

          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-gray-900 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Nieuwe gevel in {cityName}?
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-sm">
                Vraag vandaag een gratis plaatsbezoek aan. Wij komen opmeten in {cityName} en bezorgen u een
                heldere offerte voor crepi, gevelisolatie of een complete gevelrenovatie.
              </p>
              <div className="space-y-4">
                <Link href="/offerte" className="w-full flex justify-center items-center gap-2 p-4 bg-secondary font-bold text-white rounded-lg hover:bg-secondary/90 transition-colors shadow-lg">
                  Offerte aanvragen
                </Link>
                <a href={company.phoneHref} className="w-full flex items-center justify-center gap-3 p-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg transition-colors">
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">{company.phoneDisplay}</span>
                </a>
                <a href={`mailto:${company.email}`} className="w-full flex items-center justify-center gap-3 p-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg transition-colors">
                  <Mail className="h-5 w-5" />
                  <span className="font-semibold">{company.email}</span>
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Werkgebied</div>
                    <div className="text-sm text-gray-400">Actief in {cityName} en omstreken.</div>
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
