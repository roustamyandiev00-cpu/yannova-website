"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";

const faqs = [
  {
    question: "Hoeveel kosten nieuwe ramen en deuren?",
    answer:
      "De prijs hangt af van materiaal (PVC of aluminium), afmetingen, glaskeuze (dubbel of triple), en aantallen. Gemiddeld ligt de prijs voor PVC ramen tussen €450-€650 per m², aluminium tussen €650-€950 per m². Vraag een gratis offerte voor een exacte prijs op maat van uw project.",
  },
  {
    question: "Welke garantie krijg ik op jullie werken?",
    answer:
      "Wij bieden garantie op materialen en uitvoering volgens de gekozen producten en afspraken in uw offerte. U ontvangt na oplevering duidelijke garantievoorwaarden per onderdeel.",
  },
  {
    question: "Kan ik premies aanvragen voor renovatiewerken?",
    answer:
      "Ja. Via Mijn VerbouwPremie kunt u in veel gevallen ondersteuning krijgen voor isolatiewerken en ramen/deuren. Het bedrag hangt af van inkomen en type werken. Wij helpen u bij de aanvraag en de juiste documenten.",
  },
  {
    question: "Hoelang duurt een gemiddeld renovatieproject?",
    answer:
      "Dit varieert per project: ramen en deuren plaatsen duurt gemiddeld 1-2 dagen, gevelrenovatie 5-10 dagen, en een totaalrenovatie 4-8 weken. Vooraf maken we een duidelijke planning zodat u exact weet wat wanneer gebeurt.",
  },
  {
    question: "Werken jullie ook in mijn regio?",
    answer:
      "Wij zijn gevestigd in Zoersel en werken in de provincie Antwerpen en regio Mechelen. Neem contact op met uw postcode en we bevestigen meteen de beschikbaarheid.",
  },
  {
    question: "Moet ik zelf voor de afbraak zorgen?",
    answer:
      "Nee. Wij nemen het project van afbraak tot afwerking uit handen, inclusief opruiming en correcte verwerking van oude materialen.",
  },
  {
    question: "Wat is het verschil tussen PVC en aluminium ramen?",
    answer:
      "PVC is isolerend, onderhoudsvriendelijk en budgetvriendelijk. Aluminium heeft slankere profielen en een moderne uitstraling met hoge sterkte. Beide zijn energiezuinig met de juiste beglazing. Wij adviseren wat het best past bij uw woning en budget.",
  },
  {
    question: "Hoe snel kan ik een offerte verwachten?",
    answer:
      "Na uw aanvraag nemen we snel contact op. Na opmeting en bespreking ontvangt u een duidelijke, vrijblijvende offerte.",
  },
];

function FAQItem({
  index,
  question,
  answer,
  isOpen,
  onClick,
}: {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  const contentId = `faq-content-${index}`;
  const triggerId = `faq-trigger-${index}`;

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <button
        id={triggerId}
        onClick={onClick}
        className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="font-semibold text-foreground">{question}</span>
        <ChevronDown className={`h-5 w-5 text-secondary transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            role="region"
            aria-labelledby={triggerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 bg-background" aria-labelledby="faq-title">
      <div className="container mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                  <HelpCircle className="h-7 w-7 text-secondary" />
                </div>
              </div>
              <h2 id="faq-title" className="text-3xl sm:text-4xl font-bold mb-4">
                Veelgestelde vragen
              </h2>
              <p className="text-muted-foreground">Alles wat u wilt weten over onze diensten en werkwijze.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  index={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
