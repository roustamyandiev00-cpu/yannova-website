import { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Crepi Geraardsbergen | Gevelbepleistering & Isolatie | Yannova',
  description:
    'Crepi gevel in Geraardsbergen? Yannova is specialist in siliconenharspleister, gevelisolatie en gevelbepleistering. ✓ Zelfreinigend ✓ EPC-verbetering ✓ Actief in Geraardsbergen, Ninove, Ronse en Zottegem.',
  keywords: [
    'crepi geraardsbergen',
    'crepi gevel geraardsbergen',
    'gevelbepleistering geraardsbergen',
    'sierpleister geraardsbergen',
    'gevelisolatie geraardsbergen',
    'crepi afwerking geraardsbergen',
    'buitengevel geraardsbergen',
    'crepi ninove',
    'crepi ronse',
    'crepi vlaamse ardennen',
    'gevelafwerking geraardsbergen',
  ],
  alternates: {
    canonical: 'https://www.yannova.be/crepi-geraardsbergen',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Crepi Geraardsbergen',
  serviceType: 'Crepi gevelafwerking',
  description:
    'Professionele crepi gevelafwerking met isolatie in Geraardsbergen en omgeving door Yannova. Siliconenharspleister, kleuradvies en vakkundige uitvoering.',
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
  url: 'https://www.yannova.be/crepi-geraardsbergen',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat kost crepi in Geraardsbergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De prijs voor crepi in Geraardsbergen hangt af van de oppervlakte, de gewenste structuur en of er isolatie onder aangebracht wordt. Gemiddeld rekent u €60–€120 per m² voor crepi alleen, of €80–€150 per m² inclusief EPS-isolatie. Yannova geeft u na een gratis plaatsbezoek een offerte op maat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt crepi aanbrengen in Geraardsbergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een standaard woning in Geraardsbergen duurt de volledige uitvoering (inclusief isolatie, hechtlaag en afwerking) doorgaans 1 tot 2 weken. De droogtijd en weersomstandigheden spelen daarin een rol.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik premies krijgen voor crepi met isolatie in Geraardsbergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Wanneer crepi gecombineerd wordt met EPS-buitenisolatie (ETICS-systeem), kunt u via Mijn VerbouwPremie een subsidie aanvragen. Yannova bezorgt alle EPB-attesten en begeleidt u in de premie-aanvraag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke kleuren en structuren zijn beschikbaar voor crepi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yannova biedt siliconenharspleister aan in honderden kleuren (RAL en NCS) en verschillende structuren (fijn, medium, gekrasst). We geven ook kleuradvies op maat van uw woning en de omgeving in Geraardsbergen.',
      },
    },
  ],
};

export default function CrepiGeraardsbergenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="bg-linear-to-br from-orange-600 to-orange-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/10 rounded-full px-4 py-1 text-sm font-medium mb-4">
              Geraardsbergen &amp; Vlaamse Ardennen — gratis kleuradvies aan huis
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Crepi gevel in Geraardsbergen
            </h1>
            <p className="text-xl mb-4 text-orange-100">
              Kies voor een strakke, moderne gevelafwerking met siliconenharspleister. Yannova
              brengt crepi vakkundig aan in Geraardsbergen — al dan niet in combinatie met
              gevelisolatie voor een beter EPC-label.
            </p>
            <ul className="flex flex-wrap justify-center gap-3 text-sm mb-8 text-orange-100">
              <li>✓ Zelfreinigend en UV-bestendig</li>
              <li>✓ Honderden kleuren en structuren</li>
              <li>✓ Premies bij isolatie inbegrepen</li>
              <li>✓ 10 jaar garantie</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={company.phoneHref} className="bg-white text-orange-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
                📞 {company.phoneDisplay}
              </a>
              <a
                href={`${company.whatsappHref}?text=Hallo%20Yannova%2C%20ik%20wil%20graag%20een%20offerte%20voor%20crepi%20in%20Geraardsbergen`}
                target="_blank" rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition shadow-lg"
              >
                💬 WhatsApp Offerte
              </a>
            </div>
          </div>
        </section>

        {/* Voordelen */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
            {[
              { icon: '🧹', title: 'Zelfreinigend', sub: 'Siliconenharspleister houd zichzelf schoon' },
              { icon: '🎨', title: 'Honderden kleuren', sub: 'Kleuradvies op maat inbegrepen' },
              { icon: '🌡️', title: 'Warmere woning', sub: 'Combineer met EPS-isolatie' },
              { icon: '🛡️', title: '10 jaar garantie', sub: 'Op de crepi-afwerking' },
            ].map((item) => (
              <div key={item.title} className="text-center p-4">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Uitvoering */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Hoe werkt crepi aanbrengen?</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Een correcte uitvoering vraagt de juiste volgorde: voorbereiding van de ondergrond,
              hechtlaag, isolatieplaten (optioneel), wapeningslaag en tot slot de afwerking in
              siliconenharspleister.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Crepi zonder isolatie', points: ['Vernieuwen van bestaande crepi', 'Herstellen van scheuren en beschadigingen', 'Nieuwe kleur en structuur', 'Voorbereiding van de ondergrond'] },
                { title: 'Crepi met EPS-isolatie', points: ['EPS-platen (10–20 cm) op de gevel', 'Wapeningslaag en hechtmortel', 'Siliconenharspleister afwerking', 'Premies via Mijn VerbouwPremie'] },
                { title: 'Kleuradvies', points: ['Kleurstalen op maat van uw woning', 'Advies over trendkleuren en tijdloze keuzes', 'Afstemming op ramen, dakranden en omgeving', 'Digitale visualisatie mogelijk'] },
                { title: 'Detailafwerking', points: ['Nette aansluitingen op ramen en dorpels', 'Afwerking van hoeken en plinten', 'Dilatatievoegen waar nodig', 'Strakke eindresultaten gegarandeerd'] },
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
            <h2 className="text-3xl font-bold mb-6">Crepi in Geraardsbergen en omgeving</h2>
            <p className="text-gray-700 mb-4">
              In Geraardsbergen en de Vlaamse Ardennen zien we veel woningen met een verouderde
              of beschadigde buitenbepleistering. Crepi — siliconenharspleister — is de meest
              duurzame en onderhoudsarme manier om uw gevel te vernieuwen.
            </p>
            <p className="text-gray-700 mb-4">
              Door crepi te combineren met EPS-buitenisolatie verlaagt u tegelijk uw
              energiefactuur en verbetert u uw EPC-score. Yannova adviseert welke aanpak
              het meeste rendement geeft voor uw specifieke woning in Geraardsbergen, Ninove,
              Ronse, Zottegem, Brakel of Lierde.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde vragen over crepi</h2>
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
            <h2 className="text-2xl font-bold mb-6">Meer diensten in Geraardsbergen</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: '/gevelrenovatie-geraardsbergen', label: 'Gevelrenovatie Geraardsbergen' },
                { href: '/renovatie-geraardsbergen', label: 'Renovatie Geraardsbergen' },
                { href: '/ramen-deuren-geraardsbergen', label: 'Ramen & Deuren Geraardsbergen' },
                { href: '/crepi/ninove', label: 'Crepi Ninove' },
                { href: '/crepi/ronse', label: 'Crepi Ronse' },
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
            <h2 className="text-3xl font-bold mb-4">Crepi laten aanbrengen in Geraardsbergen?</h2>
            <p className="text-orange-100 text-lg mb-8">Gratis kleuradvies · Offerte binnen 24u · 10 jaar garantie</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={company.phoneHref} className="bg-white text-orange-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">
                📞 {company.phoneDisplay}
              </a>
              <a
                href={`${company.whatsappHref}?text=Hallo%20Yannova%2C%20ik%20wil%20graag%20een%20offerte%20voor%20crepi%20in%20Geraardsbergen`}
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
