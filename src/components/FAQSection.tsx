"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./animations/FadeIn";

const faqs = [
  {
    question: "Hoeveel kosten nieuwe ramen en deuren?",
    answer: "De prijs hangt af van verschillende factoren: materiaal (PVC of aluminium), afmetingen, glaskeuze (dubbel of triple), en de hoeveelheid. Gemiddeld ligt de prijs voor PVC ramen tussen €450-€650 per m², aluminium tussen €650-€950 per m². Vraag een gratis offerte voor een exacte prijsopgave op maat van uw project."
  },
  {
    question: "Welke garantie krijg ik op jullie werken?",
    answer: "Wij bieden 30 jaar garantie op al onze materialen en uitvoering. Dit omvat zowel de producten (ramen, deuren, crepi) als de plaatsing. Bij gevelisolatie geven we zelfs 30 jaar garantie op de isolatiewaarde. U ontvangt een garantiecertificaat na oplevering."
  },
  {
    question: "Kan ik premies aanvragen voor renovatiewerken?",
    answer: "Ja, zeker! Via Mijn VerbouwPremie kunt u tot €5.000 premie ontvangen voor isolatiewerken en €3.500 voor ramen en deuren. Het bedrag hangt af van uw inkomen en het type werk. Wij helpen u gratis bij het aanvragen van premies en zorgen dat alle documenten correct worden ingediend."
  },
  {
    question: "Hoelang duurt een gemiddeld renovatieproject?",
    answer: "Dit varieert per project: ramen en deuren plaatsen duurt gemiddeld 1-2 dagen, gevelrenovatie 5-10 dagen, en een totaalrenovatie 4-8 weken. Vooraf maken we een gedetailleerde planning zodat u precies weet wat er wanneer gebeurt. Wij zorgen dat uw woning bewoonbaar blijft tijdens de werken."
  },
  {
    question: "Werken jullie ook in mijn regio?",
    answer: "Wij zijn gevestigd in Zoersel en werken in de hele provincie Antwerpen en regio Mechelen. Dit omvat onder andere Zoersel, Halle, Sint-Antonius, Putte, Mechelen, Antwerpen, en alle omliggende gemeenten. Neem contact op om te verifiëren of wij in uw specifieke regio actief zijn."
  },
  {
    question: "Moet ik zelf voor de afbraak zorgen?",
    answer: "Nee, dat is niet nodig. Wij nemen het volledige project uit handen: van afbraak en verwijderen van oude materialen tot en met de afwerking en opruiming. Oude ramen, deuren en afval nemen wij mee en worden milieuvriendelijk verwerkt. U hoeft zich nergens zorgen over te maken."
  },
  {
    question: "Wat is het verschil tussen PVC en aluminium ramen?",
    answer: "PVC is isolatieverend, onderhoudsvrij en prijsvriendelijk. Aluminium is slanker van profiel, heeft een modernere uitstraling en is extra sterk. Voor energiezuinigheid zijn beide materialen uitstekend als u kiest voor HR++ of HR+++ glas. Wij adviseren u graag welk materiaal het beste past bij uw woning en budget."
  },
  {
    question: "Hoe snel kan ik een offerte verwachten?",
    answer: "Na uw aanvraag nemen wij binnen 24 uur telefonisch of via email contact op. Voor een exacte offerte komen wij gratis bij u langs om alles op te meten en te bespreken. Binnen 48 uur na dit bezoek ontvangt u een gedetailleerde, vrijblijvende offerte."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { 
  question: string; 
  answer: string; 
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <button
        onClick={onClick}
        className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
      >
        <span className="font-semibold text-foreground">{question}</span>
        <ChevronDown 
          className={`h-5 w-5 text-secondary transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                  <HelpCircle className="h-7 w-7 text-secondary" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Veelgestelde Vragen
              </h2>
              <p className="text-muted-foreground">
                Alles wat u wilt weten over onze diensten en werkwijze
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
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
