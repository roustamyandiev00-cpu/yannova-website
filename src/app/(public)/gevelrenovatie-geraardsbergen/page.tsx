import { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Gevelrenovatie Geraardsbergen | Crepi & Gevelisolatie | Yannova',
  description:
    'Gevelrenovatie in Geraardsbergen? Yannova verzorgt gevelherstel, buitenisolatie en crepi-afwerking. ✓ EPC-verbetering ✓ Premies Mijn VerbouwPremie ✓ 15+ jaar ervaring. Actief in Geraardsbergen, Ninove, Ronse en Zottegem.',
  keywords: [
    'gevelrenovatie geraardsbergen',
    'gevelwerken geraardsbergen',
    'crepi geraardsbergen',
    'gevelisolatie geraardsbergen',
    'buitengevel renoveren geraardsbergen',
    'gevel isoleren geraardsbergen',
    'gevelherstel geraardsbergen',
    'epc verbeteren geraardsbergen',
    'gevelbepleistering geraardsbergen',
    'buitenisolatie geraardsbergen',
    'aannemer geraardsbergen',
    'renovatie geraardsbergen',
    'gevelrenovatie vlaamse ardennen',
    'gevelrenovatie ninove',
    'gevelrenovatie ronse',
  ],
  alternates: {
    canonical: 'https://www.yannova.be/gevelrenovatie-geraardsbergen',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gevelrenovatie Geraardsbergen',
  serviceType: 'Gevelrenovatie',
  description:
    'Professionele gevelrenovatie, gevelisolatie en crepi-afwerking in Geraardsbergen en omgeving door Yannova. Inclusief EPC-verbetering en premie-advies.',
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
  url: 'https://www.yannova.be/gevelrenovatie-geraardsbergen',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat kost gevelrenovatie in Geraardsbergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een volledige gevelrenovatie met 10 cm EPS-isolatie en siliconenharspleister (crepi) rekent u gemiddeld €80–€150 per m². De exacte prijs hangt af van de oppervlakte, het type afwerking en de staat van de gevel. Yannova geeft u een gratis offerte na een plaatsbezoek in Geraardsbergen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heb ik een vergunning nodig voor gevelrenovatie in Geraardsbergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wanneer u de gevel isoleert via een ETICS-systeem (buitenisolatie met crepi), wijzigt dit het uitzicht van de woning. In Geraardsbergen is hiervoor doorgaans een omgevingsvergunning of melding vereist. Yannova begeleidt u in dit administratief proces.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik premies krijgen voor gevelisolatie in Geraardsbergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Via Mijn VerbouwPremie kunt u als eigenaar in Geraardsbergen een subsidie aanvragen voor buitengevelisolatie. Yannova zorgt voor alle EPB-attesten en de nodige documenten voor uw premie-aanvraag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoelang duurt een gevelrenovatie in Geraardsbergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een standaard woning in Geraardsbergen rekent u op 1 tot 2 weken, inclusief voorbereidende werken en droogtijd. Bij grotere projecten of extra details kan dit oplopen tot 3 weken afhankelijk van het weer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt Yannova ook in omliggende gemeenten van Geraardsbergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Naast Geraardsbergen werken wij ook in Ninove, Ronse, Zottegem, Brakel, Lierde, Herzele en Aalst. Ons werkgebied beslaat de volledige Vlaamse Ardennen.',
      },
    },
  ],
};

export default function GevelrenovatieGeraardsbergenPage() {
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
              Geraardsbergen &amp; Vlaamse Ardennen — gratis gevelscan aan huis
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gevelrenovatie in Geraardsbergen
            </h1>
            <p className="text-xl mb-4 text-orange-100">
              Van gevelherstel tot volledige buitenisolatie met crepi. Yannova geeft uw woning
              in Geraardsbergen een frisse uitstraling en een beter EPC-label — met
              premie-advies inbegrepen.
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
                href={`${company.whatsappHref}?text=Hallo%20Yannova%2C%20ik%20wil%20graag%20een%20offerte%20voor%20gevelrenovatie%20in%20Geraardsbergen`}
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
              { icon: '🏡', title: 'Kennis van de regio', sub: 'Specialist in Vlaamse Ardennen woningtypes' },
              { icon: '⚡', title: 'EPC +2 labels', sub: 'Gemiddeld resultaat na isolatie' },
              { icon: '💶', title: 'Premies aanvragen', sub: 'Wij verzorgen de volledige aanvraag' },
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
            <h2 className="text-3xl font-bold text-center mb-4">
              Gevelwerken in Geraardsbergen en omgeving
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Woningen in Geraardsbergen en de Vlaamse Ardennen hebben vaak een oudere
              buitenschil die toe is aan renovatie. Wij passen onze aanpak aan op de
              bestaande staat, het woningtype en uw budget.
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
                    'Past bij oudere Vlaamse woningtypes',
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

        {/* Geraardsbergen context */}
        <section className="py-16 px-4 bg-orange-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Gevelrenovatie in de Vlaamse Ardennen
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  Geraardsbergen en de omliggende gemeenten zoals Ninove, Ronse, Zottegem
                  en Brakel tellen veel oudere woningen met een verouderde buitenschil.
                  Precies die woningen halen het meeste rendement uit gevelisolatie met
                  crepi: lagere energiefactuur, beter comfort en een hogere woningwaarde.
                </p>
                <p className="text-gray-700 mb-4">
                  Yannova werkt met kennis van de lokale woningtypes — van klassieke
                  rijwoningen in het centrum tot halfopen bebouwing in de landelijke
                  deelgemeenten. We stemmen de afwerking af op de omgeving en adviseren
                  over kleur, structuur en isolatiedikte.
                </p>
                <p className="text-gray-700">
                  Ons werkgebied omvat heel Geraardsbergen met deelgemeenten zoals
                  Viane, Schendelbeke, Grimminge, Moerbeke, Overboelare en Idegem,
                  en strekt zich uit naar Ninove, Ronse, Zottegem, Brakel en Lierde.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border">
                <h3 className="font-bold text-lg mb-4">Typische woningtypes in de regio</h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  {[
                    'Baksteengevel — isolatie met crepi of steenstrips',
                    'Bepleisterde gevel — vernieuwing en herstel',
                    'Rijwoning centrum — volledige ETICS-aanpak',
                    'Halfopen bebouwing — gevelrenovatie op maat',
                    'Landelijke woning — isolatie en kleuradvies',
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
                  text: 'Onze woning in Geraardsbergen volledig gerenoveerd met isolatie en crepi. Het resultaat is schitterend en de verwarmingskosten zijn merkbaar gedaald.',
                  name: 'Familie Vermeersch, Geraardsbergen',
                },
                {
                  text: 'Snel ter plaatse, duidelijke offerte en perfecte afwerking. De gevel ziet er prachtig uit. Zeker een aanrader voor iedereen in de regio!',
                  name: 'Peter & An, Ninove',
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
            <h2 className="text-2xl font-bold mb-6">Meer diensten in Geraardsbergen en omgeving</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: '/gevelrenovatie/geraardsbergen', label: 'Gevelrenovatie Geraardsbergen' },
                { href: '/crepi/geraardsbergen', label: 'Crepi Geraardsbergen' },
                { href: '/gevelisolatie/geraardsbergen', label: 'Gevelisolatie Geraardsbergen' },
                { href: '/ramen-deuren-geraardsbergen', label: 'Ramen & Deuren Geraardsbergen' },
                { href: '/renovatie-geraardsbergen', label: 'Renovatie Geraardsbergen' },
                { href: '/werkgebied/geraardsbergen', label: 'Werkgebied Geraardsbergen' },
                { href: '/gevelrenovatie/ninove', label: 'Gevelrenovatie Ninove' },
                { href: '/gevelrenovatie/ronse', label: 'Gevelrenovatie Ronse' },
                { href: '/gevelrenovatie/zottegem', label: 'Gevelrenovatie Zottegem' },
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
            <h2 className="text-3xl font-bold mb-4">
              Klaar voor een mooiere, warmere gevel in Geraardsbergen?
            </h2>
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
                href={`${company.whatsappHref}?text=Hallo%20Yannova%2C%20ik%20wil%20graag%20een%20offerte%20voor%20gevelrenovatie%20in%20Geraardsbergen`}
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
