import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateSEO } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { CheckCircle, Phone, Mail, MapPin, ChevronRight, Euro, ShieldCheck } from 'lucide-react';
import { company } from '@/lib/company';

const stadData: Record<string, { name: string }> = {
  antwerpen: { name: "Antwerpen" },
  berchem: { name: "Berchem" },
  brasschaat: { name: "Brasschaat" },
  schoten: { name: "Schoten" },
  deurne: { name: "Deurne" },
  merksem: { name: "Merksem" },
  wilrijk: { name: "Wilrijk" },
  mortsel: { name: "Mortsel" },
  wijnegem: { name: "Wijnegem" },
  schilde: { name: "Schilde" },
  zoersel: { name: "Zoersel" },
};

export async function generateStaticParams() {
  return Object.keys(stadData).map((stad) => ({ stad }));
}

export async function generateMetadata({ params }: { params: Promise<{ stad: string }> }): Promise<Metadata> {
  const { stad } = await params;
  const data = stadData[stad];
  if (!data) return {};
  return generateSEO({
    title: `Gevelisolatie ${data.name} | Buitenmuurisolatie & Crepi | Yannova`,
    description: `Gevelisolatie in ${data.name}? Yannova isoleert uw buitenmuren met ETICS-systemen en crepi. Verlaag uw EPC en bespaar op energie. Gratis offerte!`,
    path: `/gevelisolatie/${stad}`,
    keywords: [
      `gevelisolatie ${data.name}`,
      `buitenmuurisolatie ${data.name}`,
      `ETICS ${data.name}`,
      `gevelisolatie prijs ${data.name}`,
      `isolatie buitenmuur ${data.name}`,
      `energierenovatie ${data.name}`,
    ],
  });
}

export default async function GevelisolatieStadPage({ params }: { params: Promise<{ stad: string }> }) {
  const { stad } = await params;
  const data = stadData[stad];
  if (!data) notFound();

  const { name: cityName } = data;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.yannova.be/" },
    { name: "Gevelisolatie", url: "https://www.yannova.be/gevelisolatie-crepi" },
    { name: `Gevelisolatie ${cityName}`, url: `https://www.yannova.be/gevelisolatie/${stad}` },
  ]);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Yannova Gevelisolatie",
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
                Gevelisolatie in <span className="text-secondary">{cityName}</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
                Wilt u uw woning in {cityName} beter isoleren en uw energiefactuur verlagen? Yannova plaatst
                buitengevelisolatie (ETICS) met crepi of steenstrips. Professioneel, EPB-conform en met premieondersteuning.
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

            {/* SECTIE 1: SYSTEMEN */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Gevelisolatiesystemen voor woningen in {cityName}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Buitengevelisolatie is de meest effectieve manier om warmteverlies via de buitenmuren te stoppen.
                In {cityName} werken wij met bewezen ETICS-systemen (External Thermal Insulation Composite Systems)
                die voldoen aan alle Vlaamse EPB-eisen.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-secondary flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> EPS Isolatieplaten
                  </h3>
                  <p className="text-gray-600">
                    Geëxpandeerd polystyreen (EPS) is de meest gebruikte isolatie voor gevels in {cityName}.
                    Licht, vochtbestendig en uitstekende thermische waarden (lambda 0,031–0,038 W/mK).
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-secondary flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Minerale Wol
                  </h3>
                  <p className="text-gray-600">
                    Dampopen en brandwerend. Ideaal voor woningen in {cityName} die extra brandveiligheid vereisen
                    of waar vochtbeheersing cruciaal is.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-secondary flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Afwerking met Crepi
                  </h3>
                  <p className="text-gray-600">
                    Na de isolatielaag wordt een wapeningslaag en crepi aangebracht. Strak, waterdicht en
                    verkrijgbaar in alle kleuren en texturen voor uw woning in {cityName}.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-secondary flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Afwerking met Steenstrips
                  </h3>
                  <p className="text-gray-600">
                    Wilt u de baksteenlook behouden? Steenstrips worden over de isolatielaag verlijmd voor
                    een authentiek resultaat met moderne isolatiewaarden.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTIE 2: VOORDELEN */}
            <section className="bg-gray-100 -mx-6 px-6 py-12 rounded-none md:rounded-2xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Voordelen van gevelisolatie in {cityName}
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Tot 30% minder energieverbruik</h4>
                    <p className="text-gray-600 text-sm mt-1">Buitenmuurisolatie vermindert warmteverlies drastisch en verlaagt uw stookkosten in {cityName} significant.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Betere EPC-score</h4>
                    <p className="text-gray-600 text-sm mt-1">Een hogere EPC-waarde verhoogt de verkoopwaarde van uw woning in {cityName} en is verplicht bij verhuur.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Geen verlies van binnenruimte</h4>
                    <p className="text-gray-600 text-sm mt-1">Buitenisolatie tast de binnenruimte van uw woning in {cityName} niet aan, in tegenstelling tot binnenmuuisolatie.</p>
                  </div>
                </li>
              </ul>
            </section>

            {/* SECTIE 3: PRIJS & PREMIES */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Prijs gevelisolatie {cityName} & premies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                De kostprijs van gevelisolatie in {cityName} varieert naargelang het isolatiemateriaal, de dikte en de
                afwerking. Een volledig ETICS-systeem (isolatie + crepi) kost gemiddeld €80–€150 per m².
                Dankzij de Mijn VerbouwPremie kunt u een aanzienlijk deel recupereren.
              </p>
              <div className="bg-blue-50 border-l-4 border-secondary p-6 rounded-r-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Euro className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-bold text-gray-900">Mijn VerbouwPremie — gevelisolatie {cityName}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Woningeigenaars in {cityName} die hun buitenmuren isoleren met min. Rd 3 m²K/W komen in aanmerking
                  voor de Vlaamse Mijn VerbouwPremie. Wij leveren alle vereiste attesten en facturen zodat uw
                  premieaanvraag vlot verloopt. Vraag ook naar de Mijn VerbouwLening voor een voordelig rentetarief.
                </p>
              </div>
            </section>

            {/* INTERNE LINKS */}
            <section className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Meer informatie</h2>
              <div className="flex flex-wrap gap-4">
                <Link href={`/crepi/${stad}`} className="inline-block bg-white text-secondary font-semibold border border-gray-200 shadow-sm px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                  Crepi {cityName}
                </Link>
                <Link href={`/gevelrenovatie/${stad}`} className="inline-block bg-white text-secondary font-semibold border border-gray-200 shadow-sm px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                  Gevelrenovatie {cityName}
                </Link>
                <Link href={`/ramen/${stad}`} className="inline-block bg-white text-secondary font-semibold border border-gray-200 shadow-sm px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors">
                  Ramen {cityName}
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
                Gevel isoleren in {cityName}?
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-sm">
                Vraag een gratis plaatsbezoek aan. Wij komen opmeten in {cityName} en bezorgen u een
                heldere offerte voor gevelisolatie, crepi of een complete gevelrenovatie.
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
