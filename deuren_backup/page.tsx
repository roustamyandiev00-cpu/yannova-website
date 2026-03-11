import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { company } from "@/lib/company";
import { generateSEO } from "@/lib/seo";
import { generateFAQSchema, commonFAQs } from "@/lib/faq-schema";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";

export const metadata: Metadata = generateSEO({
  title: "Deuren plaatsen | PVC & Aluminium Deuren | Yannova",
  description: "Professionele plaatsing van PVC en aluminium deuren. Voordeur, achterdeur, schuifdeuren. Gratis opmeting, offerte binnen 24u.",
  path: "/deuren",
  keywords: [
    "deuren plaatsen",
    "pvc deuren",
    "aluminium deuren",
    "voordeur",
    "schuifdeuren",
    "deuren antwerpen",
  ],
});

const features = [
  "Voordeur, achterdeur, schuifdeuren",
  "PVC en aluminium",
  "Inbraakwerend beslag",
  "10 jaar garantie",
];

export default function DeurenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Deuren", url: "/deuren" },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(commonFAQs.deuren)),
        }}
      />
      <div className="min-h-screen bg-[#0a0c10]">
      <section className="py-20 border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Deuren plaatsen in <span className="text-secondary">Antwerpen en omgeving</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed">
              PVC en aluminium deuren met inbraakwerend beslag. Gratis opmeting, duidelijke offerte binnen 24 uur.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-base font-semibold text-white hover:bg-secondary/90 transition-colors">
                Gratis offerte aanvragen
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

      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-6">Onze deuren diensten</h2>
          <ul className="space-y-3 max-w-2xl">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Deuren per regio</h2>
          <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
            Bekijk onze diensten voor deuren in uw regio
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/deuren/antwerpen" className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors">
              Deuren Antwerpen
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/deuren/zoersel" className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors">
              Deuren Zoersel
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white">Nieuwe deuren nodig?</h2>
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

      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Veelgestelde vragen over deuren</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {commonFAQs.deuren.map((faq, index) => (
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
