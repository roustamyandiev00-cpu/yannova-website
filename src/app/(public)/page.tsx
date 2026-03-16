import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Specializations } from "@/components/Specializations";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { HomeSeoSection } from "@/components/HomeSeoSection";
import { HomeTextSection } from "@/components/HomeTextSection";
import { PartnerBrands } from "@/components/PartnerBrands";
import { ProductCatalogSection } from "@/components/ProductCatalogSection";
import { generateFAQSchema } from "@/lib/faq-schema";

export const dynamic = 'force-dynamic';

const homepageFAQs = [
  {
    question: "Wat zijn de voordelen van siliconenharspleister (crepi)?",
    answer: "Siliconenharspleister is elastischer en waterafstotend dan minerale crepi. Hierdoor is het beter bestand tegen barsten, algen en vervuiling. Bovendien heeft het een zelfreinigend effect bij regen, waardoor uw gevel jarenlang schoon blijft.",
  },
  {
    question: "Kan ik gevelrenovatie combineren met nieuwe ramen?",
    answer: "Ja, dit is zelfs sterk aanbevolen. Door beide werken te combineren, kunnen we de ramen perfect luchtdicht aansluiten op de nieuwe isolatieschil. Dit voorkomt koudebruggen en garandeert een technisch superieur resultaat.",
  },
  {
    question: "In welke regio's is Yannova actief?",
    answer: "Wij zijn actief in heel de regio Antwerpen en de Kempen, met een focus op Zoersel, Schilde, Brasschaat, Wijnegem en Antwerpen-stad.",
  },
  {
    question: "Helpen jullie bij de aanvraag van premies?",
    answer: "Absoluut. Wij bezorgen u de nodige technische attesten en documentatie voor de Mijn VerbouwPremie en adviseren u over de huidige voorwaarden voor gevelisolatie en hoogrendementsglas.",
  },
];

const faqSchema = generateFAQSchema(homepageFAQs);

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <PartnerBrands />
      <ServicesGrid />
      <Specializations />
      <ProductCatalogSection compact />
      <HomeSeoSection />
      <HomeTextSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
