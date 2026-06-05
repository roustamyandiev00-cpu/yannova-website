import { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Renovatiebedrijf Antwerpen | Totaalrenovatie & Buitenschil | Yannova',
  description:
    'Op zoek naar een betrouwbaar renovatiebedrijf in Antwerpen? Yannova is specialist in totaalrenovatie, ramen, gevelisolatie en crepi. ✓ Eén aanspreekpunt ✓ 15+ jaar ervaring ✓ Gratis offerte. Bel +32 489 96 00 01.',
  keywords: [
    'renovatiebedrijf antwerpen',
    'renovatie antwerpen',
    'totaalrenovatie antwerpen',
    'verbouwing antwerpen',
    'aannemer antwerpen',
    'bouwbedrijf antwerpen',
    'renovatie woning antwerpen',
    'energetische renovatie antwerpen',
    'buitenschil renovatie antwerpen',
    'renovatie appartement antwerpen',
  ],
  alternates: {
    canonical: 'https://www.yannova.be/renovatiebedrijf-antwerpen',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Renovatiebedrijf Antwerpen — Totaalrenovatie',
  serviceType: 'Totaalrenovatie',
  description:
    'Yannova is een gespecialiseerd renovatiebedrijf in Antwerpen voor buitenschilrenovaties: ramen, gevelisolatie, crepi en totaalprojecten.',
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
  url: 'https://www.yannova.be/renovatiebedrijf-antwerpen',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat maakt Yannova anders als renovatiebedrijf in Antwerpen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yannova werkt met een vast projectteam — geen onderaannemers voor de kernwerken. U heeft één aanspreekpunt van plaatsbezoek tot oplevering. We combineren ramen, gevel en isolatie in één logisch traject zodat planning en budget onder controle blijven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke renovatiewerken voert Yannova uit in Antwerpen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yannova is gespecialiseerd in buitenschilrenovaties: ramen en deuren plaatsen (PVC en aluminium), gevelrenovatie met crepi en isolatie, dakisolatie en totaalrenovaties waarbij al deze werken gecombineerd worden voor maximale energie-efficiëntie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe vraag ik premies aan voor mijn renovatie in Antwerpen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Via Mijn VerbouwPremie (Vlaamse overheid) en de stedelijke energiepremies van Antwerpen kunt u tot duizenden euro\'s terugkrijgen. Yannova zorgt voor alle EPB-attesten, facturen en technische documentatie zodat u zo veel mogelijk premies ontvangt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt Yannova ook in appartementen en VME-projecten in Antwerpen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. We werken regelmatig samen met VME\'s (verenigingen van mede-eigenaars) voor gemeenschappelijke gevelrenovaties en raamvervangingen in appartementsgebouwen in Antwerpen. We verzorgen ook de coördinatie met de syndicus.',
      },
    },
  ],
};

const steps = [
  {
    n: '1',
    title: 'Gratis plaatsbezoek',
    desc: 'Wij komen bij u langs in Antwerpen voor een grondige inspectie van gevel, ramen en isolatienoden.',
  },
  {
    n: '2',
    title: 'Offerte op maat',
    desc: 'U ontvangt binnen 24u een duidelijke offerte met alle werken, materialen, timing en premies.',
  },
  {
    n: '3',
    title: 'Planning & voorbereiding',
    desc: 'We stemmen de startdatum af op uw leefritme en zorgen voor alle vergunningen.',
  },
  {
    n: '4',
    title: 'Uitvoering',
    desc: 'Ons vast team voert de werken uit — netjes, op tijd en met minimale overlast.',
  },
  {
    n: '5',
    title: 'Oplevering & premies',
    desc: 'Na oplevering bezorgen we alle attesten zodat u uw premies snel kunt aanvragen.',
  },
];

export default function RenovatiebedrijfAntwerpenPage() {
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
        <section className="bg-linear-to-br from-slate-700 to-slate-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/10 rounded-full px-4 py-1 text-sm font-medium mb-4">
              Renovatiebedrijf actief in Antwerpen &amp; omgeving
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Renovatiebedrijf Antwerpen
            </h1>
            <p className="text-xl mb-4 text-slate-300">
              Specialist in buitenschilrenovaties: ramen, gevelisolatie, crepi en
              totaalprojecten. Eén aanspreekpunt, vaste ploeg, geen verrassingen.
            </p>
            <ul className="flex flex-wrap justify-center gap-3 text-sm mb-8 text-slate-300">
              <li>✓ 15+ jaar ervaring in Antwerpen</li>
              <li>✓ Vast projectteam — geen onderaannemers</li>
              <li>✓ Premie-advies en EPB-attesten inbegrepen</li>
              <li>✓ Offerte binnen 24u</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={company.phoneHref}
                className="bg-white text-slate-800 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
              >
                📞 {company.phoneDisplay}
              </a>
              <a
                href={`${company.whatsappHref}?text=Hallo%20Yannova%2C%20ik%20wil%20graag%20een%20offerte%20voor%20renovatie%20in%20Antwerpen`}
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
              { icon: '👷', title: 'Eigen ploeg', sub: 'Geen onderaannemers, vaste kwaliteit' },
              { icon: '📋', title: 'Eén contact', sub: 'Van offerte tot oplevering' },
              { icon: '💶', title: 'Premies max.', sub: 'Wij verzorgen de aanvraag' },
              { icon: '🏙️', title: 'Antwerpen', sub: 'Kennis van stedelijke context' },
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
            <h2 className="text-3xl font-bold text-center mb-4">Onze renovatiediensten in Antwerpen</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Yannova focust op de buitenschil van uw woning — de werken met de hoogste
              energiewinst en het grootste effect op comfort en waarde.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Ramen & Deuren',
                  points: [
                    'PVC en aluminium, HR++ of triple glas',
                    'Gratis opmeting en premie-advies',
                    '30 jaar garantie op profielen',
                    'Luchtdichte montage',
                  ],
                  link: '/ramen-deuren-antwerpen',
                },
                {
                  title: 'Gevelrenovatie & Crepi',
                  points: [
                    'ETICS buitenisolatie (EPS/minerale wol)',
                    'Siliconenharspleister (crepi)',
                    'EPC gemiddeld 2–3 labels beter',
                    '10 jaar garantie op afwerking',
                  ],
                  link: '/gevelrenovatie-antwerpen',
                },
                {
                  title: 'Gevelisolatie',
                  points: [
                    'Bespaar tot 30% op verwarmingskosten',
                    'Premies via Mijn VerbouwPremie',
                    'EPB-attest voor aanvraag',
                    'Steenstrips of crepi als afwerking',
                  ],
                  link: '/gevelisolatie/antwerpen',
                },
                {
                  title: 'Totaalrenovatie Buitenschil',
                  points: [
                    'Ramen + gevel + dak in één planning',
                    'Gecoördineerde uitvoering',
                    'Vaste projectleider',
                    'Maximale premies via gecombineerde aanpak',
                  ],
                  link: '/totaalrenovatie/antwerpen',
                },
              ].map((service) => (
                <div key={service.title} className="border rounded-xl p-6 hover:shadow-md transition">
                  <h3 className="text-xl font-bold mb-4 text-slate-700">{service.title}</h3>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    {service.points.map((p) => (
                      <li key={p}>✓ {p}</li>
                    ))}
                  </ul>
                  <Link href={service.link} className="text-sm font-medium text-slate-600 hover:text-slate-900 underline">
                    Meer info →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hoe werkt het */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Hoe werkt het?</h2>
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.n} className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                    <p className="text-gray-700">{step.desc}</p>
                  </div>
                </div>
              ))}
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
                  text: 'Totaalrenovatie van onze woning in Antwerpen. Eén aanspreekpunt voor alles was een enorme geruststelling. Professioneel werk van A tot Z.',
                  name: 'Familie Peeters, Antwerpen',
                },
                {
                  text: 'Ramen en gevel samen laten aanpakken. Yannova coördineerde alles perfect en de premies zijn ook netjes aangevraagd. Top bedrijf!',
                  name: 'Marc D., Deurne',
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
            <h2 className="text-2xl font-bold mb-6">Meer over renovatie in Antwerpen</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: '/ramen-deuren-antwerpen', label: 'Ramen & Deuren Antwerpen' },
                { href: '/gevelrenovatie-antwerpen', label: 'Gevelrenovatie Antwerpen' },
                { href: '/crepi-isolatie-antwerpen', label: 'Crepi Isolatie Antwerpen' },
                { href: '/totaalrenovatie/antwerpen', label: 'Totaalrenovatie Antwerpen' },
                { href: '/renovatie/antwerpen', label: 'Renovatie Antwerpen' },
                { href: '/gevelisolatie/antwerpen', label: 'Gevelisolatie Antwerpen' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block p-3 border rounded-lg hover:border-slate-500 hover:text-slate-700 transition text-sm font-medium"
                >
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-800 text-white py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Klaar om uw renovatie te starten in Antwerpen?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Gratis plaatsbezoek · Offerte binnen 24u · Premies maximaal benutten
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={company.phoneHref}
                className="bg-white text-slate-800 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                📞 {company.phoneDisplay}
              </a>
              <a
                href={`${company.whatsappHref}?text=Hallo%20Yannova%2C%20ik%20wil%20graag%20een%20offerte%20voor%20renovatie%20in%20Antwerpen`}
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
