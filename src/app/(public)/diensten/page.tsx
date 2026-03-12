import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { ServiceCard } from "@/components/ServiceCard";
import { Home, Layers, Hammer, ShieldCheck, Phone, MessageCircle } from "lucide-react";
import { generateSEO } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";
import { company } from "@/lib/company";

export const metadata = generateSEO({
  title: "Onze Diensten - Ramen, Deuren, Gevelrenovatie & Totaalrenovatie",
  description: "Ontdek onze diensten: ramen & deuren, gevelrenovatie met crepi, isolatiewerken en totaalrenovatie in Antwerpen en omgeving. Eén aanspreekpunt voor uw project.",
  path: "/diensten",
  keywords: [
    "renovatiediensten antwerpen",
    "bouwbedrijf antwerpen",
    "ramen deuren antwerpen",
    "gevelrenovatie antwerpen",
    "totaalrenovatie antwerpen",
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Diensten", url: "/diensten" },
]);

export default function DienstenPage() {
  const services = [
    {
      title: "Ramen & Deuren",
      description: "Maatwerk in PVC of aluminium met energiezuinige beglazing en nette plaatsing.",
      link: "/ramen-deuren",
      icon: <Home className="h-8 w-8" />,
    },
    {
      title: "Gevelrenovatie",
      description: "Gevelisolatie met crepi of steenstrips voor meer comfort en een nieuwe uitstraling.",
      link: "/gevelrenovatie",
      icon: <Layers className="h-8 w-8" />,
    },
    {
      title: "Isolatiewerken",
      description: "Dak-, gevel- en vloerisolatie met focus op EPC-verbetering en energiebesparing.",
      link: "/diensten/isolatie",
      icon: <ShieldCheck className="h-8 w-8" />,
    },
    {
      title: "Totaalrenovatie",
      description: "Eén projectleider en één planning voor uw volledige renovatie van A tot Z.",
      link: "/renovatie",
      icon: <Hammer className="h-8 w-8" />,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="bg-background min-h-screen">
      <section className="relative h-[52vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop"
            alt="Onze diensten"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
        </div>
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Onze diensten</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Van ramen en deuren tot isolatie en totaalrenovatie. U krijgt een duidelijke offerte,
              een strakke planning en één aanspreekpunt.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 sm:py-24 container mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Waarmee kunnen we u helpen?</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Kies een dienst voor details over werkwijze, materialen en resultaat.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          {services.map((service, idx) => (
            <ServiceCard key={service.title} {...service} index={idx} />
          ))}
        </div>
      </section>

      <section className="bg-[#0f1115] py-16 border-y border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Project op maat bespreken?</h2>
              <p className="mt-4 text-gray-300">
                Niet elk project past in een standaardcategorie. We bekijken graag uw situatie ter plaatse.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary/90 transition-colors"
                >
                  Vraag vrijblijvend advies
                </Link>
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {company.phoneDisplay}
                </a>
                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
    </>
  );
}
