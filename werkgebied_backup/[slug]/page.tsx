import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";
import { generateFAQSchema } from "@/lib/faq-schema";
import { company } from "@/lib/company";

interface Props {
  params: Promise<{ slug: string }>;
}

import { werkgebieden } from '@/lib/data/werkgebieden';

export async function generateStaticParams() {
  return Object.keys(werkgebieden).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const gebied = werkgebieden[slug];
  
  if (!gebied) {
    return { title: "Werkgebied niet gevonden" };
  }

  const canonicalUrl = `https://www.yannova.be/werkgebied/${slug}`;

  // Speciale metadata voor Antwerpen
  if (slug === "antwerpen") {
    return {
      title: "Ramen & Deuren in Antwerpen Stad en Alle Deelgemeenten | Yannova",
      description:
        "Actief in heel Antwerpen: Centrum, Berchem, Deurne, Merksem, Wilrijk, Ekeren, Hoboken en Borgerhout. Ramen, deuren en gevelrenovatie. Gratis opmeting en offerte binnen 24 uur.",
      keywords: [
        "ramen antwerpen",
        "deuren antwerpen",
        "ramen antwerpen stad",
        "ramen berchem",
        "ramen deurne",
        "ramen merksem",
        "ramen wilrijk",
        "ramen ekeren",
        "ramen hoboken",
        "ramen borgerhout",
        "renovatie antwerpen",
        "gevelrenovatie antwerpen",
      ],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: "Ramen & Deuren in Antwerpen Stad en Alle Deelgemeenten | Yannova",
        description:
          "Yannova plaatst ramen en deuren in heel Antwerpen: van centrum tot alle deelgemeenten.",
        url: canonicalUrl,
        type: "website",
        locale: "nl_BE",
        siteName: "Yannova Bouw",
      },
      twitter: {
        card: "summary_large_image",
        title: "Ramen & Deuren in Antwerpen | Yannova",
        description:
          "Ramen, deuren en renovatie in heel Antwerpen en alle deelgemeenten.",
      },
    };
  }

  // Metadata voor andere gemeenten
  return {
    title: `Ramen & Deuren ${gebied.name} | Gratis Offerte | Yannova`,
    description: `Specialist in ramen, deuren en gevelrenovatie in ${gebied.name}. Gratis opmeting, offerte binnen 24 uur, 10 jaar garantie. Actief in heel ${gebied.name} en omgeving.`,
    keywords: [
      `ramen ${gebied.name.toLowerCase()}`,
      `deuren ${gebied.name.toLowerCase()}`,
      `ramen plaatsen ${gebied.name.toLowerCase()}`,
      `pvc ramen ${gebied.name.toLowerCase()}`,
      `aluminium ramen ${gebied.name.toLowerCase()}`,
      `gevelrenovatie ${gebied.name.toLowerCase()}`,
      `renovatie ${gebied.name.toLowerCase()}`,
      `aannemer ${gebied.name.toLowerCase()}`,
      `renovatiebedrijf ${gebied.name.toLowerCase()}`,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `Ramen & Deuren ${gebied.name} | Yannova`,
      description: `Specialist in ramen, deuren en renovatie in ${gebied.name}. Gratis offerte binnen 24 uur.`,
      url: canonicalUrl,
      type: "website",
      locale: "nl_BE",
      siteName: "Yannova Bouw",
    },
    twitter: {
      card: "summary_large_image",
      title: `Ramen & Deuren ${gebied.name} | Yannova`,
      description: `Ramen, deuren en renovatie in ${gebied.name}.`,
    },
  };
}

export default async function WerkgebiedPage({ params }: Props) {
  const { slug } = await params;
  const gebied = werkgebieden[slug];

  if (!gebied) {
    return (
      <div className="min-h-screen bg-[#0a0c10] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">Werkgebied niet gevonden</h1>
          <Link href="/" className="mt-4 inline-flex items-center text-secondary hover:text-white">
            <ArrowRight className="h-4 w-4 mr-2" />
            Terug naar home
          </Link>
        </div>
      </div>
    );
  }

  // Structured data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Werkgebied", url: "/werkgebied" },
    { name: gebied.name, url: `/werkgebied/${slug}` },
  ]);

  const locationFAQs = [
    {
      question: `Wat kost het plaatsen van ramen in ${gebied.name}?`,
      answer: `De prijs voor nieuwe ramen in ${gebied.name} hangt af van het type, de grootte en het materiaal. Gemiddeld betaal je tussen €300 en €800 per m². Wij bieden een gratis opmeting en offerte binnen 24 uur.`,
    },
    {
      question: `Hoe snel kunnen jullie in ${gebied.name} starten?`,
      answer: `Na de gratis opmeting ontvangt u binnen 24 uur een offerte. Bij akkoord kunnen we meestal binnen 2-4 weken starten, afhankelijk van de planning en levertijden.`,
    },
    {
      question: `Bieden jullie garantie in ${gebied.name}?`,
      answer: `Ja, wij bieden 10 jaar garantie op alle ramen en deuren die we plaatsen in ${gebied.name}. Dit geldt voor zowel het materiaal als de plaatsing.`,
    },
  ];

  const faqSchema = generateFAQSchema(locationFAQs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-[#0a0c10]">
      {/* Hero */}
      <section className="py-20 border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-secondary">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium">{gebied.distance} van Zoersel</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Ramen & Deuren in <span className="text-secondary">{gebied.name}</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed">
              {gebied.description}
            </p>
            {gebied.neighborhoods && (
              <div className="mt-6">
                <p className="text-sm text-gray-400 mb-2">Ook actief in:</p>
                <div className="flex flex-wrap gap-2">
                  {gebied.neighborhoods.map((neighborhood) => (
                    <span key={neighborhood} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                      {neighborhood}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/offerte"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-base font-semibold text-white hover:bg-secondary/90 transition-colors"
              >
                Gratis offerte aanvragen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={company.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-base font-medium text-white hover:bg-white/5 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Bel {company.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white">Waarom Yannova in {gebied.name}?</h2>
              <ul className="mt-6 space-y-4">
                {gebied.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Onze diensten in {gebied.name}</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/ramen" className="flex items-center gap-2 text-gray-300 hover:text-secondary transition-colors">
                    <ArrowRight className="h-4 w-4" />
                    Ramen plaatsen
                  </Link>
                </li>
                <li>
                  <Link href="/deuren" className="flex items-center gap-2 text-gray-300 hover:text-secondary transition-colors">
                    <ArrowRight className="h-4 w-4" />
                    Deuren vervangen
                  </Link>
                </li>
                <li>
                  <Link href="/gevelisolatie-crepi" className="flex items-center gap-2 text-gray-300 hover:text-secondary transition-colors">
                    <ArrowRight className="h-4 w-4" />
                    Gevelisolatie & crepi
                  </Link>
                </li>
                <li>
                  <Link href="/renovatie" className="flex items-center gap-2 text-gray-300 hover:text-secondary transition-colors">
                    <ArrowRight className="h-4 w-4" />
                    Totaalrenovatie
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other areas */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6">Andere werkgebieden</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {Object.entries(werkgebieden)
              .filter(([key]) => key !== slug)
              .map(([key, area]) => (
                <Link
                  key={key}
                  href={`/werkgebied/${key}`}
                  className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="font-semibold text-white">{area.name}</div>
                  <div className="text-sm text-gray-400">{area.distance}</div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white">Project in {gebied.name}?</h2>
          <p className="mt-3 text-gray-400">Vraag een gratis offerte aan.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/offerte"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-white hover:bg-secondary/90 transition-colors"
            >
              Gratis offerte
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-base font-medium text-white hover:bg-white/5 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Veelgestelde vragen over {gebied.name}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {locationFAQs.map((faq, index) => (
              <details key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <summary className="text-lg font-semibold text-white cursor-pointer">
                  {faq.question}
                </summary>
                <p className="mt-4 text-gray-400 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
