import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, MessageCircle, MapPin } from "lucide-react";
import { company } from "@/lib/company";
import { generateSEO } from "@/lib/seo";
import { generateFAQSchema } from "@/lib/faq-schema";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";

export const metadata: Metadata = generateSEO({
  title: "Deuren plaatsen Antwerpen | PVC & Aluminium Deuren | Yannova",
  description: "Deuren plaatsen in Antwerpen en omgeving. PVC en aluminium deuren, voordeur, achterdeur, schuifdeuren. Gratis opmeting, offerte binnen 24u.",
  path: "/deuren/antwerpen",
  keywords: [
    "deuren antwerpen",
    "deuren plaatsen antwerpen",
    "pvc deuren antwerpen",
    "aluminium deuren antwerpen",
    "voordeur antwerpen",
    "schuifdeuren antwerpen",
  ],
});

const features = [
  "Voordeur, achterdeur, schuifdeuren",
  "PVC en aluminium",
  "Inbraakwerend beslag",
  "Alle RAL-kleuren mogelijk",
  "10 jaar garantie",
  "Gratis opmeting in Antwerpen",
];

const benefits = [
  { title: "Veiligheid", description: "Inbraakwerend beslag en meerpuntsluiting.", value: "RC2" },
  { title: "Isolatie", description: "Energiezuinig met goede afdichting.", value: "A+" },
  { title: "Garantie", description: "10 jaar garantie op deuren en plaatsing.", value: "10jr" },
];

const antwerpFAQs = [
  {
    question: "Wat kost een nieuwe deur in Antwerpen?",
    answer: "De prijs hangt af van het type deur, materiaal en afmetingen. Een standaard voordeur in PVC kost gemiddeld €1.500-€3.000 inclusief plaatsing. Aluminium deuren zijn iets duurder. Wij komen graag langs voor een gratis opmeting en offerte.",
  },
  {
    question: "Hoe lang duurt de plaatsing van een nieuwe deur?",
    answer: "De plaatsing van een deur duurt gemiddeld een halve tot hele dag, afhankelijk van het type deur en de situatie. We plannen de werkzaamheden in overleg.",
  },
  {
    question: "Werken jullie in heel Antwerpen?",
    answer: "Ja, wij zijn actief in heel Antwerpen stad en alle deelgemeenten: Berchem, Deurne, Merksem, Wilrijk, Borgerhout, Hoboken, Ekeren en meer.",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Deuren", url: "/deuren" },
  { name: "Antwerpen", url: "/deuren/antwerpen" },
]);

const faqSchema = generateFAQSchema(antwerpFAQs);

export default function DeurenAntwerpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-[#0a0c10]">
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-sm text-gray-400">Actief in Antwerpen en omgeving</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Deuren plaatsen in <span className="text-secondary">Antwerpen</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 leading-relaxed">
                Specialist in PVC en aluminium deuren voor Antwerpen stad. Voordeur, achterdeur, schuifdeuren. 
                Gratis opmeting, duidelijke offerte binnen 24 uur.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-base font-semibold text-white hover:bg-secondary/90 transition-colors">
                  Gratis offerte Antwerpen
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={company.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-base font-medium text-white hover:bg-white/5 transition-colors">
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
                <h2 className="text-3xl font-bold text-white">Deuren in Antwerpen</h2>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  Als lokaal bedrijf kennen we de specifieke uitdagingen van woningen in Antwerpen. 
                  Wij leveren veilige, energiezuinige deuren met professionele plaatsing.
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
                <h3 className="text-xl font-semibold text-white mb-4">Werkgebied Antwerpen</h3>
                <p className="text-gray-400 mb-4">Wij zijn actief in:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Antwerpen Centrum</li>
                  <li>• Berchem</li>
                  <li>• Deurne</li>
                  <li>• Merksem</li>
                  <li>• Wilrijk</li>
                  <li>• Borgerhout</li>
                  <li>• En alle andere deelgemeenten</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-white/10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Veelgestelde vragen over deuren in Antwerpen</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {antwerpFAQs.map((faq, index) => (
                <details key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <summary className="text-lg font-semibold text-white cursor-pointer">{faq.question}</summary>
                  <p className="mt-4 text-gray-400 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-white/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-white">Nieuwe deur in Antwerpen?</h2>
            <p className="mt-3 text-gray-400">Vraag een gratis offerte aan of neem contact op voor advies.</p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-white hover:bg-secondary/90 transition-colors">
                Gratis offerte
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-base font-medium text-white hover:bg-white/5 transition-colors">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
