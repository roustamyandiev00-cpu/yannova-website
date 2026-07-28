import { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Ramen en Deuren Geraardsbergen | PVC & Aluminium | Yannova',
  description:
    'Nieuwe ramen en deuren in Geraardsbergen? Yannova plaatst PVC en aluminium ramen met HR++ of triple glas. ✓ Gratis opmeting ✓ Offerte binnen 24u ✓ Actief in Geraardsbergen, Ninove, Ronse en Zottegem.',
  keywords: [
    'ramen geraardsbergen',
    'deuren geraardsbergen',
    'ramen plaatsen geraardsbergen',
    'pvc ramen geraardsbergen',
    'aluminium ramen geraardsbergen',
    'ramen vervangen geraardsbergen',
    'buitenschrijnwerk geraardsbergen',
    'triple glas geraardsbergen',
    'voordeur geraardsbergen',
    'ramen ninove',
    'ramen ronse',
    'schrijnwerk vlaamse ardennen',
  ],
  alternates: {
    canonical: 'https://www.yannova.be/ramen-deuren-geraardsbergen',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ramen en Deuren Geraardsbergen',
  serviceType: 'Ramen en deuren plaatsen',
  description:
    'Plaatsing van PVC en aluminium ramen en deuren in Geraardsbergen en omgeving door Yannova. HR++ en triple glas, luchtdichte montage, inbraakveilig beslag.',
  areaServed: [
    { '@type': 'City', name: 'Geraardsbergen' },
    { '@type': 'City', name: 'Ninove' },
    { '@type': 'City', name: 'Ronse' },
    { '@type': 'City', name: 'Zottegem' },
    { '@type': 'City', name: 'Brakel' },
    { '@type': 'City', name: 'Lierde' },
  ],
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.yannova.be/#organization',
    name: company.name,
    telephone: company.phoneHref.replace('tel:', ''),
    email: company.email,
  },
  url: 'https://www.yannova.be/ramen-deuren-geraardsbergen',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat kost het plaatsen van ramen in Geraardsbergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De prijs voor nieuwe ramen in Geraardsbergen hangt af van het type (PVC of aluminium), de afmetingen en het glas (HR++ of triple). Gemiddeld rekent u €300 tot €800 per m². Yannova geeft na een gratis opmeting een duidelijke offerte op maat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel kunnen jullie ramen plaatsen in Geraardsbergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na de gratis opmeting ontvangt u binnen 24 uur een offerte. Bij akkoord kunnen we doorgaans binnen 2 tot 4 weken starten met de plaatsing, afhankelijk van de productietermijn van uw ramen op maat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik premies krijgen voor nieuwe ramen in Geraardsbergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Via Mijn VerbouwPremie (Vlaanderen) kunt u subsidies aanvragen voor de plaatsing van hoogrendementsglas. Yannova bezorgt alle benodigde attesten en helpt u met de aanvraag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke soorten ramen plaatst Yannova in Geraardsbergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij plaatsen PVC-ramen (kostenefficiënt, uitstekende isolatie), aluminium ramen (strak design, duurzaam) en combinaties. Standaard met HR++ glas, optioneel triple (HR+++) voor maximale isolatie. Alle profielen tot 7 kamers beschikbaar.',
      },
    },
  ],
};

export default function RamenDeurenGeraardsbergenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="bg-linear-to-br from-orange-600 to-orange-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/10 rounded-full px-4 py-1 text-sm font-medium mb-4">
              Geraardsbergen &amp; Vlaamse Ardennen — gratis opmeting aan huis
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ramen en deuren in Geraardsbergen
            </h1>
            <p className="text-xl mb-4 text-orange-100">
              Nieuwe ramen of deuren in Geraardsbergen? Yannova plaatst PVC en aluminium
              ramen met HR++ of triple glas. Verlaag uw energiefactuur en verhoog uw comfort.
            </p>
            <ul className="flex flex-wrap justify-center gap-3 text-sm mb-8 text-orange-100">
              <li>✓ PVC & aluminium ramen op maat</li>
              <li>✓ HR++ en triple glas</li>
              <li>✓ Premies Mijn VerbouwPremie</li>
              <li>✓ 10 jaar garantie</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={company.phoneHref} className="bg-white text-orange-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
                📞 {company.phoneDisplay}
              </a>
              <a
                href={`${company.whatsappHref}?text=Hallo%20Yannova%2C%20ik%20wil%20graag%20een%20offerte%20voor%20ramen%20en%20deuren%20in%20Geraardsbergen`}
                target="_blank" rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition shadow-lg"
              >
                💬 WhatsApp Offerte
              </a>
            </div>
          </div>
        </section>

        {/* Producten */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Ons aanbod in Geraardsbergen
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'PVC Ramen', points: ['Kostenefficiënt en onderhoudsvriendelijk', 'Uitstekende thermische isolatie', 'Beschikbaar in alle kleuren en RAL', 'Tot 7 kamers profielen'] },
                { title: 'Aluminium Ramen', points: ['Strak en modern design', 'Duurzaam en zeer stabiel', 'Smalle profielen, maximaal licht', 'Ideaal voor grote openingen'] },
                { title: 'Voordeuren & Achterdeuren', points: ['Inbraakveilig met driepuntssluiting', 'PVC en aluminium op maat', 'Thermisch en akoestisch geïsoleerd', 'Keuze uit honderden designs'] },
                { title: 'Schuifdeuren & Vouwdeuren', points: ['Maximale opening naar tuin of terras', 'Aluminium of PVC systemen', 'Inbouwrails en zachte sluiting', 'Inbraakwerend beslag'] },
              ].map((s) => (
                <div key={s.title} className="border rounded-xl p-6 hover:shadow-md transition">
                  <h3 className="text-xl font-bold mb-4 text-orange-700">{s.title}</h3>
                  <ul className="space-y-2 text-gray-700">{s.points.map((p) => <li key={p}>✓ {p}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Context */}
        <section className="py-16 px-4 bg-orange-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ramen vervangen in Geraardsbergen</h2>
            <p className="text-gray-700 mb-4">
              Veel woningen in Geraardsbergen en de Vlaamse Ardennen hebben nog enkelvoudig
              of dubbel glas uit de jaren &apos;80 en &apos;90. Door te upgraden naar HR++ of triple glas
              daalt uw energiefactuur direct en verbetert uw EPC-score aanzienlijk.
            </p>
            <p className="text-gray-700 mb-4">
              Yannova doet een gratis opmeting bij u thuis in Geraardsbergen, Ninove, Ronse,
              Zottegem of Brakel. We adviseren over het beste materiaal voor uw woningtype
              en bezorgen u een heldere offerte zonder verrassingen.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde vragen</h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq) => (
                <div key={faq.name} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-2">{faq.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interne links */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Meer in Geraardsbergen en omgeving</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: '/gevelrenovatie-geraardsbergen', label: 'Gevelrenovatie Geraardsbergen' },
                { href: '/renovatie-geraardsbergen', label: 'Renovatie Geraardsbergen' },
                { href: '/crepi-geraardsbergen', label: 'Crepi Geraardsbergen' },
                { href: '/ramen/ninove', label: 'Ramen Ninove' },
                { href: '/ramen/ronse', label: 'Ramen Ronse' },
                { href: '/werkgebied/geraardsbergen', label: 'Werkgebied Geraardsbergen' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block p-3 border rounded-lg hover:border-orange-500 hover:text-orange-700 transition text-sm font-medium">
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange-700 text-white py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Nieuwe ramen in Geraardsbergen?</h2>
            <p className="text-orange-100 text-lg mb-8">Gratis opmeting · Offerte binnen 24u · 10 jaar garantie</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={company.phoneHref} className="bg-white text-orange-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">
                📞 {company.phoneDisplay}
              </a>
              <a
                href={`${company.whatsappHref}?text=Hallo%20Yannova%2C%20ik%20wil%20graag%20een%20offerte%20voor%20ramen%20en%20deuren%20in%20Geraardsbergen`}
                target="_blank" rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition"
              >
                💬 WhatsApp
              </a>
              <Link href="/offerte" className="bg-white/10 border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition">
                Offerte aanvragen
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
