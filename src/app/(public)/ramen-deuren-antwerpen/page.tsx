import { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Ramen en Deuren Plaatsen Antwerpen | PVC & Aluminium | Yannova',
  description:
    'Ramen en deuren laten plaatsen in Antwerpen? Yannova is specialist in PVC en aluminium ramen met HR++ glas. ✓ Gratis opmeting ✓ Offerte binnen 24u ✓ 15+ jaar ervaring. Bel +32 489 96 00 01.',
  keywords: [
    'ramen plaatsen antwerpen',
    'deuren antwerpen',
    'pvc ramen antwerpen',
    'aluminium ramen antwerpen',
    'nieuwe ramen antwerpen',
    'ramen vervangen antwerpen',
    'raamplaatsing antwerpen',
    'hr++ glas antwerpen',
    'triple glas antwerpen',
    'schrijnwerker antwerpen',
  ],
  alternates: {
    canonical: 'https://www.yannova.be/ramen-deuren-antwerpen',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ramen en Deuren Plaatsen Antwerpen',
  serviceType: 'Ramen en Deuren',
  description:
    'PVC en aluminium ramen en deuren plaatsen in Antwerpen door Yannova. Specialist in hoogrendementsglas, gratis opmeting en vakkundige montage.',
  areaServed: {
    '@type': 'City',
    name: 'Antwerpen',
  },
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.yannova.be/#organization',
    name: company.name,
    telephone: company.phoneHref.replace('tel:', ''),
    email: company.email,
  },
  url: 'https://www.yannova.be/ramen-deuren-antwerpen',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    description: 'Gratis opmeting en offerte',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat kost het plaatsen van nieuwe ramen in Antwerpen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De prijs hangt af van het type raam (PVC of aluminium), het aantal en de afmetingen. Na een gratis opmeting ontvangt u een duidelijke offerte op maat. Gemiddeld rekent u €400–€900 per raam inclusief plaatsing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk glas raden jullie aan voor stadswoningen in Antwerpen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor stadswoningen in Antwerpen raden we triple glas (HR+++) aan. Dit combineert maximale thermische isolatie met een betere geluidsdemping — ideaal voor drukke straten en appartementen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt de plaatsing van ramen in Antwerpen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een gemiddelde woning werken we 1 tot 2 dagen. Na opmeting en productie (4–6 weken) plannen we de installatie in één aaneengesloten periode zodat u zo weinig mogelijk overlast heeft.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik premies krijgen voor nieuwe ramen in Antwerpen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Via Mijn VerbouwPremie kunt u in Antwerpen een subsidie aanvragen voor energiezuinige ramen met HR++ of HR+++ glas. Yannova bezorgt u alle attesten en helpt met de aanvraag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is er een vergunning nodig voor nieuwe ramen in Antwerpen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij vervanging van ramen in dezelfde opening en stijl is er doorgaans geen vergunning nodig. Wijzigt het uiterlijk van de gevel, dan is een melding of omgevingsvergunning vereist. Wij adviseren u graag.',
      },
    },
  ],
};

export default function RamenDeurenAntwerpenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="bg-linear-to-br from-blue-700 to-blue-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/10 rounded-full px-4 py-1 text-sm font-medium mb-4">
              Antwerpen &amp; omgeving — gratis opmeting thuis
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ramen en Deuren Plaatsen in Antwerpen
            </h1>
            <p className="text-xl mb-4 text-blue-100">
              Specialist in PVC en aluminium ramen met HR++ en triple glas. Van stadswoning tot
              appartement — vakkundige montage met offerte binnen 24u.
            </p>
            <ul className="flex flex-wrap justify-center gap-3 text-sm mb-8 text-blue-100">
              <li>✓ 15+ jaar ervaring</li>
              <li>✓ Gratis opmeting aan huis</li>
              <li>✓ Premie-advies inbegrepen</li>
              <li>✓ 30 jaar garantie op profielen</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={company.phoneHref}
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
              >
                📞 {company.phoneDisplay}
              </a>
              <a
                href={`${company.whatsappHref}?text=Hallo%20Yannova%2C%20ik%20wil%20graag%20een%20offerte%20voor%20ramen%20en%20deuren%20in%20Antwerpen`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition shadow-lg"
              >
                💬 WhatsApp Offerte
              </a>
            </div>
          </div>
        </section>

        {/* USPs */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
            {[
              { icon: '🏙️', title: 'Stadsspecialist', sub: 'Ervaring in alle Antwerpse wijken' },
              { icon: '🔇', title: 'Triple Glas', sub: 'Beter geluid én thermisch comfort' },
              { icon: '💶', title: 'Premie-advies', sub: 'Mijn VerbouwPremie inbegrepen' },
              { icon: '⚡', title: 'Offerte 24u', sub: 'Snelle reactie, vlotte planning' },
            ].map((item) => (
              <div key={item.title} className="text-center p-4">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Diensten */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Ramen en deuren voor Antwerpse woningen
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Van rijhuis in Berchem tot appartement in het stadscentrum — wij kennen de
              uitdagingen van stedelijk bouwen en stemmen elk project af op uw situatie.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'PVC Ramen',
                  points: [
                    'Standaard HR++ beglazing',
                    'Onderhoudsarm en duurzaam',
                    'Tot 7 kamers diep profiel',
                    'Breed kleurenaanbod in folie',
                  ],
                },
                {
                  title: 'Aluminium Ramen',
                  points: [
                    'Slanke profielen, veel licht',
                    'Ideaal voor minimalistische interieurs',
                    'Triple glas standaard optie',
                    'Thermisch onderbroken profiel',
                  ],
                },
                {
                  title: 'Voordeuren & Achterdeuren',
                  points: [
                    'Drievoudige sluiting inbraakveilig',
                    'Thermisch en akoestisch geïsoleerd',
                    'Honderden RAL-kleuren',
                    'Op maat voor elk type pand',
                  ],
                },
                {
                  title: 'Schuif- en Vouwdeuren',
                  points: [
                    'Maximale doorgang tuin/terras',
                    'Luchtdichte montage',
                    'Geschikt voor nieuw en oud',
                    'Soepel schuifsysteem met garantie',
                  ],
                },
              ].map((service) => (
                <div key={service.title} className="border rounded-xl p-6 hover:shadow-md transition">
                  <h3 className="text-xl font-bold mb-4 text-blue-700">{service.title}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {service.points.map((p) => (
                      <li key={p}>✓ {p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Antwerpen-specifieke context */}
        <section className="py-16 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Waarom Antwerpse woningen andere aandacht vragen
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  Stadswoningen, rijhuizen en appartementen in Antwerpen stellen andere eisen aan
                  ramen en deuren. Straatlawaai, beperkte bereikbaarheid voor monteurs en
                  strikte bouwnormen in bepaalde wijken maken vakkennis en planning cruciaal.
                </p>
                <p className="text-gray-700">
                  Yannova werkt regelmatig in Antwerpen, Berchem, Deurne, Borgerhout, Wilrijk,
                  Merksem en Ekeren. We kennen de specifieke regels per district en stemmen de
                  planning af op uw leefritme.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border">
                <h3 className="font-bold text-lg mb-4">Werkgebied Antwerpen</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  {['Antwerpen-centrum', 'Berchem', 'Deurne', 'Borgerhout', 'Wilrijk', 'Merksem', 'Ekeren', 'Hoboken', 'Berendrecht'].map((w) => (
                    <li key={w}>📍 {w}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Wat klanten zeggen</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { text: 'Nieuwe ramen geplaatst in ons rijhuis in Berchem. Netjes, snel en het geluidsverschil is enorm. Aanrader!', name: 'Tom J., Berchem' },
                { text: 'Vakkundige plaatsing in ons appartement in het centrum. Het triple glas is een wereld van verschil voor de nachtrust.', name: 'Myriam K., Antwerpen' },
              ].map((r) => (
                <div key={r.name} className="border rounded-xl p-6 bg-gray-50">
                  <div className="text-yellow-400 mb-2 text-lg">★★★★★</div>
                  <p className="text-gray-700 mb-4 italic">&quot;{r.text}&quot;</p>
                  <p className="font-semibold text-sm">— {r.name}</p>
                </div>
              ))}
            </div>
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
            <h2 className="text-2xl font-bold mb-6">Meer over onze diensten in Antwerpen</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: '/ramen/antwerpen', label: 'Ramen Antwerpen' },
                { href: '/deuren/antwerpen', label: 'Deuren Antwerpen' },
                { href: '/gevelrenovatie-antwerpen', label: 'Gevelrenovatie Antwerpen' },
                { href: '/crepi-isolatie-antwerpen', label: 'Crepi & Isolatie Antwerpen' },
                { href: '/renovatiebedrijf-antwerpen', label: 'Renovatiebedrijf Antwerpen' },
                { href: '/gevelisolatie/antwerpen', label: 'Gevelisolatie Antwerpen' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block p-3 border rounded-lg hover:border-blue-500 hover:text-blue-700 transition text-sm font-medium"
                >
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-700 text-white py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Klaar voor nieuwe ramen in Antwerpen?</h2>
            <p className="text-blue-100 text-lg mb-8">
              Gratis opmeting thuis · Offerte binnen 24u · Premie-advies inbegrepen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={company.phoneHref}
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                📞 {company.phoneDisplay}
              </a>
              <a
                href={`${company.whatsappHref}?text=Hallo%20Yannova%2C%20ik%20wil%20graag%20een%20offerte%20voor%20ramen%20in%20Antwerpen`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition"
              >
                💬 WhatsApp
              </a>
              <Link
                href="/offerte"
                className="bg-white/10 border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition"
              >
                Offerte aanvragen
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
