import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, MessageCircle, MapPin } from "lucide-react";
import { company } from "@/lib/company";
import { generateSEO } from "@/lib/seo";
import { generateFAQSchema } from "@/lib/faq-schema";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";

export const metadata: Metadata = generateSEO({
  title: "Ramen plaatsen Antwerpen | PVC & Aluminium Ramen | Yannova",
  description: "Ramen plaatsen in Antwerpen en omgeving. PVC en aluminium ramen met HR++ glas. Gratis opmeting, offerte binnen 24u. Actief in heel Antwerpen stad.",
  path: "/ramen/antwerpen",
  keywords: [
    "ramen antwerpen",
    "ramen plaatsen antwerpen",
    "pvc ramen antwerpen",
    "aluminium ramen antwerpen",
    "ramen antwerpen stad",
    "nieuwe ramen antwerpen",
    "ramen vervangen antwerpen",
  ],
});

const features = [
  "HR++ en drievoudig beglazing",
  "PVC en aluminium profielen",
  "Inbraakwerend en energiezuinig",
  "Alle RAL-kleuren mogelijk",
  "30 jaar garantie op profielen",
  "Gratis opmeting in Antwerpen",
];

const benefits = [
  {
    title: "Energiebesparing",
    description: "Tot 30% besparing op verwarmingskosten met HR++ beglazing.",
    value: "30%",
  },
  {
    title: "Geluidsisolatie",
    description: "Perfect voor drukke Antwerpse straten.",
    value: "-35dB",
  },
  {
    title: "Garantie",
    description: "30 jaar garantie op profielen en 10 jaar op beglazing.",
    value: "30jr",
  },
];

const antwerpFAQs = [
  {
    question: "Wat kost het plaatsen van ramen in Antwerpen?",
    answer: "De prijs hangt af van het type raam, materiaal en afmetingen. Voor een standaard PVC raam met HR++ glas rekent u gemiddeld €400-€800 per m². Wij komen graag langs voor een gratis opmeting en offerte op maat.",
  },
  {
    question: "Hoe lang duurt de plaatsing van nieuwe ramen?",
    answer: "Voor een gemiddelde woning in Antwerpen duurt de plaatsing 1 tot 2 dagen. We plannen de werkzaamheden in overleg en zorgen voor minimale overlast.",
  },
  {
    question: "Zijn er premies beschikbaar in Antwerpen?",
    answer: "Ja, de stad Antwerpen en Vlaanderen bieden verschillende premies voor energiebesparende renovaties. Wij helpen u graag met het aanvragen van de juiste premies.",
  },
  {
    question: "Werken jullie in heel Antwerpen?",
    answer: "Ja, wij zijn actief in heel Antwerpen stad en alle deelgemeenten: Berchem, Deurne, Merksem, Wilrijk, Borgerhout, Hoboken, Ekeren, Berendrecht en meer.",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Ramen", url: "/ramen" },
  { name: "Antwerpen", url: "/ramen/antwerpen" },
]);

const faqSchema = generateFAQSchema(antwerpFAQs);

export default function RamenAntwerpPage() {
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
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-sm text-gray-400">Actief in Antwerpen en omgeving</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Ramen plaatsen in <span className="text-secondary">Antwerpen</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 leading-relaxed">
                Specialist in PVC en aluminium ramen voor Antwerpen stad en alle deelgemeenten. 
                Gratis opmeting, duidelijke offerte binnen 24 uur, professionele plaatsing.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-base font-semibold text-white hover:bg-secondary/90 transition-colors"
                >
                  Gratis offerte Antwerpen
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
                <h2 className="text-3xl font-bold text-white">Ramen in Antwerpen</h2>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  Als lokaal bedrijf kennen we de specifieke uitdagingen van woningen in Antwerpen. 
                  Of het nu gaat om een appartement in het centrum, een rijwoning in Berchem of een 
                  villa in Wilrijk - wij leveren maatwerk voor elke situatie.
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
                  <li>• Hoboken</li>
                  <li>• Ekeren</li>
                  <li>• En alle andere deelgemeenten</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-white/10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Veelgestelde vragen over ramen in Antwerpen</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {antwerpFAQs.map((faq, index) => (
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

        <section className="py-16 border-t border-white/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-white">Nieuwe ramen in Antwerpen?</h2>
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
      </div>
    </>
  );
}
