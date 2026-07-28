import { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Renovatie Geraardsbergen | Aannemer & Renovatiebedrijf | Yannova',
  description:
    'Renovatie in Geraardsbergen? Yannova is uw lokale aannemer voor totaalrenovatie, gevelwerken, ramen en deuren. ✓ Gratis offerte ✓ Vaste projectleider ✓ Actief in Geraardsbergen, Ninove, Ronse en Zottegem.',
  keywords: [
    'renovatie geraardsbergen',
    'aannemer geraardsbergen',
    'renovatiebedrijf geraardsbergen',
    'totaalrenovatie geraardsbergen',
    'verbouwing geraardsbergen',
    'woning renoveren geraardsbergen',
    'renovatie vlaamse ardennen',
    'aannemer vlaamse ardennen',
    'renovatie ninove',
    'renovatie ronse',
    'renovatie zottegem',
    'energetische renovatie geraardsbergen',
  ],
  alternates: {
    canonical: 'https://www.yannova.be/renovatie-geraardsbergen',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Renovatie Geraardsbergen',
  serviceType: 'Renovatie',
  description:
    'Professionele renovatie en totaalrenovatie in Geraardsbergen en omgeving door Yannova. Van gevelwerken en ramen tot volledige verbouwing.',
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
  url: 'https://www.yannova.be/renovatie-geraardsbergen',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat kost een renovatie in Geraardsbergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De prijs van een renovatie in Geraardsbergen hangt af van de omvang, de technieken en het afwerkingsniveau. Voor een gedeeltelijke renovatie (gevel + ramen) start u vanaf enkele duizenden euro. Een volledige totaalrenovatie kan oplopen tot tienduizenden euro. Yannova geeft u na een plaatsbezoek een duidelijke offerte op maat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke renovatiewerken voert Yannova uit in Geraardsbergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yannova verzorgt in Geraardsbergen: gevelrenovatie met crepi en isolatie, vervanging van ramen en deuren in PVC of aluminium, totaalrenovaties en energetische verbeteringen voor een beter EPC-label.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik premies krijgen voor renovatie in Geraardsbergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Via Mijn VerbouwPremie (Vlaanderen) kunt u subsidies aanvragen voor isolatie, ramen en andere energiebesparende ingrepen. Yannova helpt u met alle attesten en de aanvraag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt Yannova ook buiten Geraardsbergen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Naast Geraardsbergen werken wij in de volledige Vlaamse Ardennen en Denderstreek: Ninove, Ronse, Zottegem, Brakel, Lierde, Herzele, Galmaarden en Aalst.',
      },
    },
  ],
};

export default function RenovatieGeraardsbergenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="bg-linear-to-br from-orange-600 to-orange-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/10 rounded-full px-4 py-1 text-sm font-medium mb-4">
              Geraardsbergen &amp; Vlaamse Ardennen — gratis plaatsbezoek
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Renovatie in Geraardsbergen
            </h1>
            <p className="text-xl mb-4 text-orange-100">
              Uw vaste aannemer voor renovatie in Geraardsbergen en omgeving. Van gevelwerken
              en ramen tot totaalrenovatie — één partner van start tot oplevering.
            </p>
            <ul className="flex flex-wrap justify-center gap-3 text-sm mb-8 text-orange-100">
              <li>✓ 15+ jaar ervaring</li>
              <li>✓ Vaste projectleider</li>
              <li>✓ Premie-advies inbegrepen</li>
              <li>✓ Offerte binnen 24u</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={company.phoneHref} className="bg-white text-orange-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
                📞 {company.phoneDisplay}
              </a>
              <a
                href={`${company.whatsappHref}?text=Hallo%20Yannova%2C%20ik%20wil%20graag%20een%20offerte%20voor%20renovatie%20in%20Geraardsbergen`}
                target="_blank" rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition shadow-lg"
              >
                💬 WhatsApp Offerte
              </a>
            </div>
          </div>
        </section>

        {/* Diensten */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Onze renovatiediensten in Geraardsbergen</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Yannova werkt als totaalaannemer in Geraardsbergen. Wij coördineren alle werken
              zodat uw renovatie vlot verloopt zonder tijdverlies tussen fases.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Gevelrenovatie & isolatie', points: ['Crepi en steenstrips', 'EPS buitenisolatie', 'Gevelherstel', 'EPC-verbetering'] },
                { title: 'Ramen & deuren', points: ['PVC en aluminium ramen', 'Voordeuren en schuiframen', 'HR++ en triple glas', 'Luchtdichte montage'] },
                { title: 'Totaalrenovatie', points: ['Volledige woning of fasen', 'Technieken en binnenafwerking', 'Strakke coördinatie', 'Één vaste projectleider'] },
                { title: 'Energetische renovatie', points: ['EPC-analyse en advies', 'Subsidies en premies', 'Isolatie buitenschil', 'Ventilatie en technieken'] },
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
            <h2 className="text-3xl font-bold mb-6">Renoveren in Geraardsbergen en de Vlaamse Ardennen</h2>
            <p className="text-gray-700 mb-4">
              Geraardsbergen heeft een divers woningbestand: van klassieke rijwoningen in het
              centrum tot halfopen bebouwing en landelijke huizen in deelgemeenten zoals Viane,
              Schendelbeke, Grimminge en Overboelare. Elk type woning vraagt een andere aanpak.
            </p>
            <p className="text-gray-700 mb-4">
              Yannova werkt in heel Geraardsbergen en de omliggende gemeenten Ninove, Ronse,
              Zottegem, Brakel en Lierde. We kennen de woningtypes, de lokale bouwnormen en de
              premies die in uw gemeente van toepassing zijn.
            </p>
            <p className="text-gray-700">
              Of u nu één specifieke ingreep wil (ramen, gevel) of een volledige renovatie
              overweegt: wij plannen alles logisch op elkaar en zorgen voor een helder
              tijdschema en een transparante offerte.
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
            <h2 className="text-2xl font-bold mb-6">Meer diensten in Geraardsbergen</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: '/gevelrenovatie-geraardsbergen', label: 'Gevelrenovatie Geraardsbergen' },
                { href: '/ramen-deuren-geraardsbergen', label: 'Ramen & Deuren Geraardsbergen' },
                { href: '/crepi-geraardsbergen', label: 'Crepi Geraardsbergen' },
                { href: '/werkgebied/geraardsbergen', label: 'Werkgebied Geraardsbergen' },
                { href: '/renovatie/ninove', label: 'Renovatie Ninove' },
                { href: '/renovatie/ronse', label: 'Renovatie Ronse' },
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
            <h2 className="text-3xl font-bold mb-4">Renovatieproject in Geraardsbergen?</h2>
            <p className="text-orange-100 text-lg mb-8">Gratis plaatsbezoek · Offerte binnen 24u · Vaste projectleider</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={company.phoneHref} className="bg-white text-orange-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">
                📞 {company.phoneDisplay}
              </a>
              <a
                href={`${company.whatsappHref}?text=Hallo%20Yannova%2C%20ik%20wil%20graag%20een%20offerte%20voor%20renovatie%20in%20Geraardsbergen`}
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
