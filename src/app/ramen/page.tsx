import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, MessageCircle, Star, Shield, Clock } from "lucide-react";
import { company } from "@/lib/company";
import { generateSEO } from "@/lib/seo";
import { generateFAQSchema, commonFAQs } from "@/lib/faq-schema";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";

export const metadata: Metadata = generateSEO({
  title: "Ramen plaatsen in Antwerpen en rond Antwerpen | Yannova",
  description: "PVC en aluminium ramen met HR++ of drievoudig glas. Actief in Antwerpen stad en randgemeenten rond Antwerpen. Gratis opmeting, offerte binnen 24 uur en 30 jaar garantie.",
  path: "/ramen",
  keywords: [
    "ramen plaatsen antwerpen",
    "ramen antwerpen stad",
    "pvc ramen antwerpen",
    "aluminium ramen antwerpen",
    "ramen berchem",
    "ramen deurne",
    "ramen merksem",
    "ramen wilrijk",
    "ramen brasschaat",
    "ramen schoten",
    "ramen wijnegem",
    "hr++ beglazing",
    "drievoudig glas",
  ],
});

const features = [
  "HR++ en drievoudig beglazing",
  "PVC en aluminium profielen",
  "Inbraakwerend en energiezuinig",
  "Alle RAL-kleuren mogelijk",
  "30 jaar garantie op profielen",
  "Gratis opmeting in de regio",
];

const benefits = [
  {
    title: "Energiebesparing",
    description: "Tot 30% besparing op verwarmingskosten met HR++ beglazing.",
    value: "30%",
  },
  {
    title: "Geluidsisolatie",
    description: "Aanzienlijke vermindering van buitenlawaai.",
    value: "-35dB",
  },
  {
    title: "Garantie",
    description: "30 jaar garantie op profielen en 10 jaar op beglazing.",
    value: "30jr",
  },
];

// Structured data voor SEO
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Ramen", url: "/ramen" },
]);

const faqSchema = generateFAQSchema(commonFAQs.ramen);

export default function RamenPage() {
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
      <section className="py-20 border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm text-gray-400">4.9 Google score • 200+ projecten</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Ramen in <span className="text-secondary">Zoersel</span> en regio Antwerpen
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed">
              PVC en aluminium ramen met HR++ beglazing. Gratis opmeting, duidelijke offerte binnen 24 uur,
              professionele plaatsing door vakmensen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
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

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-secondary">{benefit.value}</div>
                <h3 className="mt-2 text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white">Waarom kiezen voor nieuwe ramen?</h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Nieuwe ramen verbeteren niet alleen het comfort van uw woning, maar verlagen ook uw energiefactuur
                en verhogen de waarde van uw woning. Wij adviseren u over de beste opties voor uw situatie.
              </p>
              <ul className="mt-6 space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Inbegrepen in elke offerte</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <Shield className="h-5 w-5 text-secondary" />
                  Gratis opmeting aan huis
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Clock className="h-5 w-5 text-secondary" />
                  Duidelijke offerte binnen 24 uur
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  Premie-advies en hulp bij aanvragen
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  Professionele plaatsing en afwerking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white">Klaar voor nieuwe ramen?</h2>
          <p className="mt-3 text-gray-400">Vraag een gratis offerte aan of neem contact op voor advies.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
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

      {/* Lokale pagina's voor SEO */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Ramen per regio</h2>
          <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
            Bekijk onze diensten voor ramen in uw regio
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link href="/ramen/antwerpen" className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors">
              Ramen Antwerpen
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/ramen/zoersel" className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors">
              Ramen Zoersel
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ sectie voor SEO */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Veelgestelde vragen</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {commonFAQs.ramen.map((faq, index) => (
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
