import { Metadata } from 'next';
import { generateSEO, generateBreadcrumbSchema, generateFAQSchema } from '@/components/SEO';
import { ChevronDown } from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: "Veelgestelde Vragen over Ramen, Deuren en Renovatie | Yannova",
  description: "Antwoorden op veelgestelde vragen over ramen, deuren, renovatie, prijzen, premies en plaatsing in Antwerpen en omgeving.",
  path: "/veelgestelde-vragen",
  keywords: ["faq ramen", "vragen deuren", "renovatie vragen", "prijzen ramen", "premies antwerpen"],
});

const faqs = [
  {
    question: "Wat kosten nieuwe ramen in Antwerpen?",
    answer: "De prijs voor nieuwe ramen hangt af van het materiaal en de afmetingen. PVC ramen kosten gemiddeld €400-600 per m², aluminium ramen €600-900 per m². Dit is inclusief plaatsing en BTW. Voor een exacte offerte doen we graag een gratis opmeting bij u thuis."
  },
  {
    question: "Hoe lang duurt het plaatsen van nieuwe ramen?",
    answer: "Voor een gemiddelde woning (8-12 ramen) duurt de plaatsing 1 tot 2 dagen. We werken met een vaste ploeg en plannen de werkzaamheden zo dat u minimaal overlast heeft. De oude ramen worden verwijderd en direct vervangen door de nieuwe."
  },
  {
    question: "Welke premies kan ik krijgen voor nieuwe ramen?",
    answer: "In Vlaanderen kunt u via Mijn VerbouwPremie tot €3.500 subsidie krijgen voor energiebesparende renovaties zoals nieuwe ramen met HR++ of drievoudig glas. We helpen u graag met het aanvragen van de premie en geven advies over de voorwaarden."
  },
  {
    question: "PVC of aluminium ramen: wat is beter?",
    answer: "Beide materialen hebben voordelen. PVC ramen zijn goedkoper, onderhoudsvriendelijk en hebben goede isolatiewaarden. Aluminium ramen zijn duurzamer, strakker in design en geschikt voor grote glaspartijen. We adviseren u graag welk materiaal het beste past bij uw woning en budget."
  },
  {
    question: "Hoe lang is de garantie op ramen en deuren?",
    answer: "We geven 10 jaar garantie op PVC en aluminium ramen en deuren. Dit omvat zowel het materiaal als de plaatsing. Voor het glas geldt een fabrieksgarantie van 10 jaar op de isolerende werking."
  },
  {
    question: "Moet ik zelf de oude ramen verwijderen?",
    answer: "Nee, wij verzorgen het volledige proces. We verwijderen de oude ramen, voeren ze af volgens de regelgeving, plaatsen de nieuwe ramen en ruimen alles netjes op. U hoeft zich nergens zorgen over te maken."
  },
  {
    question: "Werken jullie ook in mijn gemeente?",
    answer: "We zijn actief in heel Antwerpen en omgeving: Antwerpen stad, Berchem, Deurne, Merksem, Wilrijk, Brasschaat, Schoten, Wijnegem, Mortsel, Edegem, Kontich, Zoersel en Mechelen. Neem contact op om te checken of we in uw gemeente werken."
  },
  {
    question: "Hoe snel kan ik een offerte krijgen?",
    answer: "Na uw aanvraag nemen we binnen 24 uur contact op om een gratis opmeting in te plannen. Na de opmeting ontvangt u binnen 2-3 werkdagen een gedetailleerde offerte met alle specificaties en prijzen."
  },
  {
    question: "Wat is HR++ glas en waarom is het belangrijk?",
    answer: "HR++ glas is hoogrendement isolatieglas met een speciale coating die warmte binnenhoudt. Het bespaart tot 50% energie vergeleken met enkel glas en tot 25% vergeleken met standaard dubbel glas. HR++ glas is verplicht voor renovatiepremies."
  },
  {
    question: "Kan ik ook alleen deuren laten plaatsen?",
    answer: "Ja, we plaatsen ook alleen deuren: voordeuren, achterdeuren, schuifdeuren en garagedeuren. Zowel in PVC als aluminium, met of zonder glas. Ook hier gelten dezelfde garanties en service als bij ramen."
  },
  {
    question: "Wat kost een gevelrenovatie in Antwerpen?",
    answer: "Een gevelrenovatie met isolatie en crepi kost gemiddeld €80-150 per m², afhankelijk van de staat van de gevel en het type isolatie. Voor een rijwoning (ca. 100m² gevel) rekent u op €8.000-15.000. We maken graag een offerte op maat."
  },
  {
    question: "Hoe lang duurt een totaalrenovatie?",
    answer: "Een totaalrenovatie duurt gemiddeld 3-6 maanden, afhankelijk van de omvang. We maken vooraf een gedetailleerde planning en houden u op de hoogte van de voortgang. U heeft één vast aanspreekpunt gedurende het hele project."
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Veelgestelde Vragen", url: "/veelgestelde-vragen" },
]);

const faqSchema = generateFAQSchema(faqs);

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, faqSchema]) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        {/* Hero Section */}
        <section className="py-20 border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Veelgestelde <span className="text-secondary">Vragen</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 leading-relaxed">
                Antwoorden op de meest gestelde vragen over ramen, deuren, renovatie, prijzen en premies in Antwerpen en omgeving.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown className="h-5 w-5 text-secondary flex-shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Staat uw vraag er niet bij?
              </h2>
              <p className="text-gray-300 mb-6">
                Neem gerust contact met ons op. We helpen u graag verder!
              </p>
              <a
                href="/contact"
                className="inline-block bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Neem Contact Op
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
