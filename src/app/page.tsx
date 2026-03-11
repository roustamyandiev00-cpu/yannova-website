import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Specializations } from "@/components/Specializations";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { generateFAQSchema } from "@/lib/faq-schema";

export const dynamic = 'force-dynamic';

const homepageFAQs = [
  {
    question: "Wat zijn de kosten voor nieuwe ramen in Antwerpen?",
    answer: "De prijs voor nieuwe ramen hangt af van het type, de grootte en het materiaal. Gemiddeld betaal je tussen €300 en €800 per m². Wij bieden een gratis opmeting en offerte binnen 24 uur.",
  },
  {
    question: "In welke regio's is Yannova actief?",
    answer: "Wij zijn actief in Antwerpen stad en alle randgemeenten: Berchem, Deurne, Merksem, Wilrijk, Brasschaat, Schoten, Wijnegem, Schilde, Ranst, Mortsel en omgeving.",
  },
  {
    question: "Hoe lang duurt de plaatsing van nieuwe ramen?",
    answer: "De plaatsing van nieuwe ramen duurt gemiddeld 1 tot 2 dagen, afhankelijk van het aantal ramen en de complexiteit van het project.",
  },
  {
    question: "Bieden jullie garantie op jullie werk?",
    answer: "Ja, wij bieden 10 jaar garantie op al ons werk en de geplaatste materialen. Daarnaast krijg je ook de fabrieksgarantie op de ramen en deuren.",
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
      <ServicesGrid />
      <Specializations />
      <FAQSection faqs={homepageFAQs} />
      <CTASection />
    </>
  );
}
