import { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Gevelrenovatie Antwerpen | Crepi & Gevelisolatie | Yannova',
  description:
    'Gevelrenovatie in Antwerpen? Yannova verzorgt gevelherstel, buitenisolatie en crepi-afwerking. ✓ EPC-verbetering ✓ Premies via Mijn VerbouwPremie ✓ 15+ jaar ervaring. Bel +32 489 96 00 01.',
  keywords: [
    'gevelrenovatie antwerpen',
    'gevelwerken antwerpen',
    'crepi antwerpen',
    'gevelisolatie antwerpen',
    'buitengevel renoveren antwerpen',
    'gevel isoleren antwerpen',
    'gevelherstel antwerpen',
    'epc verbeteren antwerpen',
    'gevelbepleistering antwerpen',
    'buitenisolatie antwerpen',
  ],
  alternates: {
    canonical: 'https://www.yannova.be/gevelrenovatie-antwerpen',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gevelrenovatie Antwerpen',
  serviceType: 'Gevelrenovatie',
  description:
    'Professionele gevelrenovatie, gevelisolatie en crepi-afwerking in Antwerpen door Yannova. Inclusief EPC-verbetering en premie-advies.',
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
  url: 'https://www.yannova.be/gevelrenovatie-antwerpen',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat kost gevelrenovatie in Antwerpen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een volledige gevelrenovatie met 10 cm EPS-isolatie en siliconenharspleister (crepi) rekent u gemiddeld €80–€150 per m². De exacte prijs hangt af van de oppervlakte, het type afwerking en de staat van de gevel. Yannova bezorgt u een gratis offerte na een plaatsbezoek.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is er een vergunning nodig voor gevelrenovatie in Antwerpen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wanneer u de gevel isoleert (ETICS-systeem) wijzigt dit het uitzicht van de woning. In Antwerpen is hiervoor doorgaans een omgevingsvergunning of melding vereist. Yannova begeleid u in dit proces en werkt voor u de aanvraag uit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik premies krijgen voor gevelisolatie in Antwerpen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Via Mijn VerbouwPremie kunt u een subsidie aanvragen voor buitengevelisolatie. In Antwerpen gelden ook stedelijke energiepremies. Yannova zorgt voor alle attesten en EPB-conformiteit voor uw aanvraag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoelang duurt een gevelrenovatie in Antwerpen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een standaard rijhuis of halfopen bebouwing rekent u op 1 tot 2 weken, inclusief voorbereidende werken en droogtijd. Bij grotere projecten of complexe details (erkers, balkons) kan dit oplopen tot 3 weken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen crepi en steenstrips?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Crepi (siliconenharspleister) geeft een strakke, moderne afwerking in elke kleur en is zelfreinigend. Steenstrips imiteren metselwerk en geven een traditioneel uiterlijk. Beide worden aangebracht op een isolatieschil. Yannova adviseert welke optie best past bij uw woning en de buurt.',
      },
    },
  ],
};

export default function GevelrenovatieAntwerpenPage() {
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
        <section className="bg-linear-to-br from-orange-600 to-orange-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/10 rounded-full px-4 py-1 text-sm font-medium mb-4">
              Antwerpen &amp; omgeving — gratis gevelscan aan huis
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gevelrenovatie in Antwerpen
            </h1>
            <p className="text-xl mb-4 text-orange-100">
              Van gevelherstel tot volledige buitenisolatie met crepi. Yannova verbetert uw EPC
              en geeft uw woning een frisse uitstraling — met premie-advies inbegrepen.
            </p>
            <ul className="flex flex-wrap justify-center gap-3 text-sm mb-8 text-orange-100">
              <li>✓ 15+ jaar ervaring in gevelwerken</li>
              <li>✓ EPC gemiddeld 2–3 labels beter</li>
              <li>✓ Premies Mijn VerbouwPremie</li>
              <li>✓ 10 jaar garantie op afwerking</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={company.phoneHref}
                className="bg-white text-orange-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
              >
                📞 {company.phoneDisplay}
              </a>
              <a
                href={`${company.whatsappHref}?text=Hallo%20Yannova%2C%20ik%20wil%20graag%20een%20offerte%20voor%20gevelrenovatie%20in%20Antwerpen`}
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
              { icon: '🏙️', title: 'Stadservaring', sub: 'Kennis van Antwerpse bouwnormen' },
              { icon: '⚡', title: 'EPC +2 labels', sub: 'Gemiddeld resultaat na isolatie' },
              { icon: '💶', title: 'Premies aanvragen', sub: 'Wij verzorgen de aanvraag' },
              { icon: '🛡️', title: '10 jaar garantie', sub: 'Op crepi-afwerking' },
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
            <h2 className="text-3xl font-bold text-center mb-4">Gevelwerken in Antwerpen</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Elke Antwerpse woning is anders. Of het nu gaat om een klassiek herenhuis in
              Berchem of een naoorlogs rijhuis in Deurne — wij passen onze aanpak aan.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Crepi (Siliconenharspleister)',
                  points: [
                    'Zelfreinigend en UV-bestendig',
                    'Waterafstotend en elastisch',
                    'Honderden kleuren en structuren',
                    '10 jaar garantie',
                  ],
                },
                {
                  title: 'Gevelisolatie (ETICS)',
                  points: [
                    'EPS of minerale wol, 10–20 cm',
                    'Eliminatie van koudebruggen',
                    'EPC 2–3 labels verbetering',
                    'Premies via Mijn VerbouwPremie',
                  ],
                },
                {
                  title: 'Steenstrips',
                  points: [
                    'Look van echt metselwerk',
                    'Op isolatie-onderbouw aangebracht',
                    'Traditioneel Antwerps karakter',
                    'Onderhoudsarm',
                  ],
                },
                {
                  title: 'Gevelherstel & Reiniging',
                  points: [
                    'Herstellen van barsten en scheuren',
                    'Voegen bijwerken of vernieuwen',
                    'Reiniging van vervuilde gevels',
                    'Voorbereiding voor isolatie',
                  ],
                },
              ].map((service) => (
                <div key={service.title} className="border rounded-xl p-6 hover:shadow-md transition">
                  <h3 className="text-xl font-bold mb-4 text-orange-700">{service.title}</h3>
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

        {/* Antwerpen context */}
        <section className="py-16 px-4 bg-orange-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Gevelrenovatie in een stedelijke context
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  In Antwerpen werken we met stadswoningen, rijhuizen, appartementen en
                  investeringspanden. De toegankelijkheid van de gevel, de regels per district
                  en de omgeving van naburige gebouwen vragen specifieke aandacht.
                </p>
                <p className="text-gray-700 mb-4">
                  Voor panden in beschermde stadsgezichten of bepaalde historische wijken
                  gelden strikte richtlijnen over kleur, structuur en uitvoering. Yannova kent
                  deze regels en werkt altijd in overleg met de lokale stedenbouw.
                </p>
                <p className="text-gray-700">
                  Wij werken in Antwerpen-centrum, Berchem, Deurne, Borgerhout, Wilrijk,
                  Merksem, Hoboken, Ekeren en alle omliggende deelgemeenten.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border">
                <h3 className="font-bold text-lg mb-4">Typische Antwerpse gevels</h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  {[
                    'Baksteengevel — herstel en isolatie',
                    'Bepleisterde gevel — vernieuwing crepi',
                    'Naoorlogs rijhuis — volledige ETICS',
                    'Appartement — coördinatie VME',
                    'Herenhuis — beschermd uitzicht',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">✓</span> {item}
                    </li>
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
                {
                  text: 'Onze gevel in Wilrijk volledig gerenoveerd met isolatie en crepi. Het resultaat is schitterend en de energiefactuur is al merkbaar gedaald.',
                  name: 'Familie Peeters, Wilrijk',
                },
                {
                  text: 'Professioneel team, nette afwerking en perfect op tijd. De crepi ziet er prachtig uit. Aanrader voor elk huis in Antwerpen!',
                  name: 'Sarah & Kevin, Berchem',
                },
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
            <h2 className="text-2xl font-bold mb-6">Meer diensten in Antwerpen</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: '/gevelrenovatie/antwerpen', label: 'Gevelrenovatie Antwerpen' },
                { href: '/crepi/antwerpen', label: 'Crepi Antwerpen' },
                { href: '/gevelisolatie/antwerpen', label: 'Gevelisolatie Antwerpen' },
                { href: '/ramen-deuren-antwerpen', label: 'Ramen & Deuren Antwerpen' },
                { href: '/renovatiebedrijf-antwerpen', label: 'Renovatiebedrijf Antwerpen' },
                { href: '/crepi-isolatie-antwerpen', label: 'Crepi Isolatie Antwerpen' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block p-3 border rounded-lg hover:border-orange-500 hover:text-orange-700 transition text-sm font-medium"
                >
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange-700 text-white py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Klaar voor een mooiere, warmere gevel?</h2>
            <p className="text-orange-100 text-lg mb-8">
              Gratis gevelscan · Offerte binnen 24u · Premies aanvragen inbegrepen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={company.phoneHref}
                className="bg-white text-orange-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                📞 {company.phoneDisplay}
              </a>
              <a
                href={`${company.whatsappHref}?text=Hallo%20Yannova%2C%20ik%20wil%20graag%20een%20offerte%20voor%20gevelrenovatie%20in%20Antwerpen`}
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
