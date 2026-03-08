import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

const werkgebieden: Record<string, { name: string; description: string; distance: string; features: string[] }> = {
  zoersel: {
    name: "Zoersel",
    description: "Onze thuisbasis. Vanuit Zoersel bedienen we de volledige regio met ramen, deuren en renovatiewerken.",
    distance: "0 km",
    features: [
      "Gratis opmeting aan huis",
      "Same-day service mogelijk",
      "Lokale kennis en ervaring",
      "Referenties in de buurt",
    ],
  },
  antwerpen: {
    name: "Antwerpen",
    description: "Actief in heel Antwerpen stad en omliggende gemeenten. 20-30 minuten rijden vanuit ons atelier.",
    distance: "20-30 km",
    features: [
      "Dekking heel Antwerpen",
      "Stadsprojecten welkom",
      "Appartementen en huizen",
      "Erkend voor Vlaamse premies",
    ],
  },
  mechelen: {
    name: "Mechelen",
    description: "Mechelen en omgeving behoren tot ons werkgebied. Korte aanrijtijd, lokale service.",
    distance: "15-25 km",
    features: [
      "Mechelen stad en rand",
      "Snel ter plaatse",
      "Vaste ploeg",
      "Premie-advies beschikbaar",
    ],
  },
};

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

  if (slug === "antwerpen") {
    return {
      title: "Ramen & Deuren in Antwerpen stad en rond Antwerpen | Yannova",
      description:
        "Actief in Antwerpen stad en rond Antwerpen: Berchem, Deurne, Merksem, Wilrijk, Ekeren, Brasschaat, Schoten en Wijnegem. Gratis opmeting en offerte binnen 24 uur.",
      keywords: [
        "ramen antwerpen stad",
        "deuren antwerpen stad",
        "ramen berchem",
        "ramen deurne",
        "ramen merksem",
        "ramen wilrijk",
        "ramen ekeren",
        "ramen brasschaat",
        "ramen schoten",
        "ramen wijnegem",
        "renovatie antwerpen",
      ],
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: "Ramen & Deuren in Antwerpen stad en rond Antwerpen | Yannova",
        description:
          "Yannova plaatst ramen en deuren en voert renovaties uit in Antwerpen stad en de rand rond Antwerpen.",
        url: canonicalUrl,
        type: "website",
        locale: "nl_BE",
        siteName: "Yannova Bouw",
      },
      twitter: {
        card: "summary_large_image",
        title: "Ramen & Deuren in Antwerpen stad en rond Antwerpen | Yannova",
        description:
          "Ramen, deuren, gevelisolatie en renovatie in Antwerpen stad en randgemeenten rond Antwerpen.",
      },
    };
  }

  return {
    title: `Ramen & Deuren ${gebied.name} | Yannova Bouw`,
    description: `Ramen, deuren en renovatie in ${gebied.name} en omgeving. Gratis opmeting, duidelijke offerte, professionele plaatsing. Actief in heel regio Antwerpen.`,
    keywords: [
      `ramen ${gebied.name}`,
      `deuren ${gebied.name}`,
      `renovatie ${gebied.name}`,
      `aannemer ${gebied.name}`,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `Ramen & Deuren ${gebied.name} | Yannova Bouw`,
      description: `Ramen, deuren en renovatie in ${gebied.name} en omgeving.`,
      url: canonicalUrl,
      type: "website",
      locale: "nl_BE",
      siteName: "Yannova Bouw",
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

  return (
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
              Ramen & deuren in <span className="text-secondary">{gebied.name}</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed">
              {gebied.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/offerte"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-base font-semibold text-white hover:bg-secondary/90 transition-colors"
              >
                Gratis offerte aanvragen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+3231234567"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-base font-medium text-white hover:bg-white/5 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Bel 03 123 45 67
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
              href="https://wa.me/3231234567"
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
    </div>
  );
}
