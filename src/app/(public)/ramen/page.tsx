import { generateSEO } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { ArrowRight, Phone, CheckCircle2, Star, MessageCircle, Shield, Clock } from 'lucide-react';
import { company } from '@/lib/company';
import { generateFAQSchema, commonFAQs } from "@/lib/faq-schema";

export const dynamic = 'force-dynamic';

export const metadata = generateSEO({
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
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-base font-semibold text-white hover:bg-secondary/90 transition-colors"
              >
                Gratis offerte aanvragen
                <ArrowRight className="h-4 w-4" />
              </a>
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

      {/* Uitgebreide SEO Content Sectie */}
      <section className="py-20 bg-linear-to-b from-background to-background/95 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg prose-invert">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ramen Plaatsen in Antwerpen: Complete Gids
            </h2>
            
            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              PVC of Aluminium Ramen: Wat is de Beste Keuze?
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Bij het kiezen van nieuwe ramen in Antwerpen staat u voor een belangrijke beslissing: <strong>PVC of aluminium ramen</strong>? 
              Beide materialen hebben hun voordelen. <strong>PVC ramen</strong> zijn zeer isolerend, onderhoudsarm en betaalbaar. 
              Ze zijn ideaal voor woningen in Antwerpen, Berchem, Deurne en Merksem waar energiebesparing prioriteit heeft.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Aluminium ramen</strong> daarentegen bieden een strakke, moderne uitstraling met smalle profielen en 
              maximale lichtinval. Ze zijn zeer duurzaam en geschikt voor grote raampartijen. In Wilrijk, Brasschaat en 
              Schoten zien we steeds meer vraag naar aluminium ramen vanwege hun eigentijdse design en lange levensduur.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              HR++ en Drievoudig Glas: Maximale Isolatie
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              De beglazing is cruciaal voor de isolatiewaarde van uw ramen. <strong>HR++ beglazing</strong> (hoog rendement) 
              is de standaard voor energiezuinige ramen in België. Met een U-waarde van ongeveer 1.1 W/m²K bespaart u tot 
              30% op verwarmingskosten vergeleken met oude enkelglas ramen.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Voor nog betere isolatie adviseren wij <strong>drievoudig glas</strong> met een U-waarde tot 0.6 W/m²K. 
              Dit is vooral interessant voor nieuwbouwprojecten en renovaties in Antwerpen waar u streeft naar een 
              laag E-peil. Drievoudig glas vermindert ook buitenlawaai aanzienlijk - ideaal voor woningen aan drukke 
              straten in Antwerpen stad, Wijnegem of Mortsel.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Premies voor Ramen in Vlaanderen en Antwerpen
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Bij het plaatsen van nieuwe ramen in Antwerpen kunt u in aanmerking komen voor verschillende premies via 
              <strong> Mijn VerbouwPremie</strong>. De Vlaamse renovatiepremie ondersteunt energiebesparende maatregelen 
              zoals het vervangen van oude ramen door HR++ of drievoudig glas.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              De hoogte van de premie hangt af van uw inkomen en de energetische verbetering. Wij helpen u graag bij het 
              aanvragen van premies en zorgen dat alle documenten correct zijn. Voor woningen in Antwerpen, Berchem, 
              Deurne, Merksem en andere gemeenten kunnen de premies oplopen tot enkele duizenden euro&apos;s.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Wat Kosten Nieuwe Ramen in Antwerpen?
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              De prijs voor nieuwe ramen hangt af van verschillende factoren: materiaal (PVC of aluminium), type beglazing 
              (HR++ of drievoudig), afmetingen, kleur en eventuele extra opties zoals inbraakwerend glas of geïntegreerde 
              zonwering.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Gemiddeld betaalt u voor <strong>PVC ramen met HR++ beglazing</strong> tussen €300 en €500 per m². Voor 
              <strong> aluminium ramen</strong> ligt de prijs tussen €500 en €800 per m². Drievoudig glas kost ongeveer 
              €100 tot €150 extra per m². Wij bieden altijd een gratis opmeting en offerte zonder verplichtingen voor 
              projecten in Antwerpen en omgeving.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Onze Werkwijze: Van Offerte tot Plaatsing
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Bij Yannova werken we volgens een duidelijk stappenplan. Na uw aanvraag komen wij <strong>gratis bij u langs 
              voor een opmeting</strong> in Antwerpen, Berchem, Deurne, Merksem, Wilrijk of een andere gemeente in de regio. 
              Tijdens dit bezoek bespreken we uw wensen, nemen we nauwkeurige maten en adviseren we over de beste opties.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Binnen 24 uur ontvangt u een <strong>gedetailleerde offerte</strong> met alle specificaties en prijzen. 
              Geen verborgen kosten, geen verrassingen. Als u akkoord gaat, plannen we de productie en plaatsing in 
              overleg met u. De levertijd bedraagt gemiddeld 4 tot 6 weken.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Op de afgesproken dag komen onze vakmensen de ramen professioneel plaatsen. Wij zorgen voor een nette 
              afwerking, ruimen alles op en nemen de oude ramen mee voor recycling. U geniet direct van uw nieuwe, 
              energiezuinige ramen!
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Waarom Klanten Kiezen voor Yannova
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Met meer dan 15 jaar ervaring in de bouwsector zijn wij een betrouwbare partner voor ramen in Antwerpen 
              en omgeving. Onze klanten waarderen onze <strong>transparante communicatie, vakmanschap en persoonlijke 
              aanpak</strong>. We werken uitsluitend met A-merk materialen en bieden uitgebreide garanties.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Of u nu woont in Antwerpen stad, Berchem, Deurne, Merksem, Wilrijk, Brasschaat, Schoten, Wijnegem, 
              Schilde, Ranst, Mortsel, Edegem, Kontich of een andere gemeente in de regio - wij staan voor u klaar 
              met deskundig advies en professionele uitvoering. Vraag vandaag nog uw gratis offerte aan!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white">Klaar voor nieuwe ramen?</h2>
          <p className="mt-3 text-gray-400">Vraag een gratis offerte aan of neem contact op voor advies.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-white hover:bg-secondary/90 transition-colors"
            >
              Gratis offerte
              <ArrowRight className="h-4 w-4" />
            </a>
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
            <a href="/ramen/antwerpen" className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors">
              Ramen Antwerpen
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/ramen/zoersel" className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors">
              Ramen Zoersel
              <ArrowRight className="h-4 w-4" />
            </a>
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
