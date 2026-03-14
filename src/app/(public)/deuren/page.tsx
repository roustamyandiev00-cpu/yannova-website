import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, MessageCircle, Star, Shield, Clock } from "lucide-react";
import { company } from "@/lib/company";
import { generateSEO } from "@/lib/seo";
import { generateFAQSchema, commonFAQs } from "@/lib/faq-schema";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";

export const metadata: Metadata = generateSEO({
  title: "Deuren plaatsen Zoersel & Antwerpen | PVC & Aluminium | Yannova",
  description: "Professionele plaatsing van PVC en aluminium deuren in Zoersel, Antwerpen en omgeving. Voordeur, achterdeur, schuifdeuren. Gratis opmeting, offerte binnen 24u.",
  path: "/deuren",
  keywords: [
    "deuren zoersel",
    "deuren plaatsen zoersel",
    "deuren plaatsen antwerpen",
    "pvc deuren",
    "aluminium deuren",
    "voordeur antwerpen",
    "schuifdeuren",
    "deuren antwerpen",
  ],
});

const features = [
  "Voordeur, achterdeur, schuifdeuren",
  "PVC en aluminium",
  "Inbraakwerend beslag (RC2/RC3)",
  "Alle RAL-kleuren mogelijk",
  "10 jaar garantie",
  "Gratis opmeting in de regio",
];

const benefits = [
  {
    title: "Veiligheid",
    description: "Inbraakwerend beslag RC2/RC3 standaard inbegrepen.",
    value: "RC2+",
  },
  {
    title: "Isolatie",
    description: "U-waarde tot 0.8 W/m²K voor maximale energiebesparing.",
    value: "A+",
  },
  {
    title: "Garantie",
    description: "10 jaar garantie op profielen en beslag.",
    value: "10jr",
  },
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
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm text-gray-400">4.9 Google score • 200+ projecten</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Deuren plaatsen in <span className="text-secondary">Zoersel en Antwerpen</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed">
              PVC en aluminium deuren met inbraakwerend beslag. Specialist in Zoersel, Antwerpen en omgeving. Gratis opmeting, duidelijke offerte binnen 24 uur.
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
              <h2 className="text-3xl font-bold text-white">Waarom kiezen voor nieuwe deuren?</h2>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Nieuwe deuren verbeteren de veiligheid, isolatie en uitstraling van uw woning. Een moderne voordeur
                verhoogt ook de waarde van uw woning en geeft een sterke eerste indruk.
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

      {/* SEO Content Sectie */}
      <section className="py-20 bg-linear-to-b from-background to-background/95 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg prose-invert">
            <h2 className="text-3xl font-bold text-white mb-6">
              Deuren Plaatsen in Antwerpen: Complete Gids
            </h2>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              PVC of Aluminium Deuren: Wat is de Beste Keuze?
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Bij het kiezen van nieuwe deuren in Antwerpen staat u voor een belangrijke keuze: <strong>PVC of aluminium</strong>?
              <strong> PVC deuren</strong> zijn uitstekend isolerend, onderhoudsarm en betaalbaar. Ze zijn ideaal voor voor- en achterdeuren
              in Zoersel, Antwerpen, Berchem en Deurne waar isolatie en prijs-kwaliteit centraal staan.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>Aluminium deuren</strong> bieden een strakke, moderne uitstraling met smalle profielen en zijn uiterst duurzaam.
              Ze zijn perfect voor grote schuifdeuren en moderne woningen in Brasschaat, Schoten en Wilrijk. Aluminium is ook
              de beste keuze voor wie een premium uitstraling wil combineren met maximale veiligheid.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Soorten Deuren: Voordeur, Achterdeur en Schuifdeuren
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Yannova plaatst alle types deuren in Antwerpen en omgeving. De <strong>voordeur</strong> is het visitekaartje van uw woning.
              Wij bieden een ruim assortiment in PVC en aluminium, met inbraakwerend beslag en isolerende panelen. Beschikbaar in
              elke RAL-kleur en met diverse glasopties.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>Schuifdeuren</strong> zijn ideaal voor een naadloze verbinding tussen binnen en buiten. Onze aluminium schuifsystemen
              bieden maximale lichtinval en een strakke esthetiek. Ze zijn verkrijgbaar als hefschuifdeur (HST) of als minimale
              schuifdeur voor een ultramodern resultaat.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Voor <strong>achterdeuren</strong> adviseren wij deuren met een goede isolatiewaarde en inbraakwerend beslag.
              Combineer uw achterdeur met een terrasschuifdeur voor een optimale verbinding met uw tuin.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Inbraakbeveiliging: Veiligheidsklassen en Beslag
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Veiligheid is een topprioriteit bij nieuwe deuren. Wij werken met deuren in <strong>veiligheidsklasse RC2 en RC3</strong>,
              wat betekent dat ze bestand zijn tegen inbraakpogingen gedurende respectievelijk 3 en 5 minuten. Dit is de standaard
              die verzekeraars in België aanbevelen.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Ons aanbod omvat meerpuntssluitingen, anti-inbraakbeslag en veiligheidsglas. Voor woningen in Antwerpen stad,
              Berchem en Deurne adviseren wij altijd minimaal RC2 voor de voordeur. Combineer dit met een videodeurbel of
              slim slot voor maximale beveiliging.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Premies voor Deuren in Vlaanderen
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Bij het plaatsen van energiezuinige deuren in Antwerpen kunt u in aanmerking komen voor de
              <strong> Mijn VerbouwPremie</strong>. Deuren met een goede isolatiewaarde (U-waarde ≤ 1,5 W/m²K) komen in aanmerking
              voor een premie. De hoogte hangt af van uw inkomen en de energetische verbetering.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Wij helpen u bij het aanvragen van premies en zorgen dat alle technische attesten correct zijn.
              Voor woningen in Zoersel, Antwerpen, Brasschaat, Schoten en omgeving kunnen de premies oplopen tot
              enkele honderden euro&apos;s per deur.
            </p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">
              Onze Werkwijze: Van Opmeting tot Plaatsing
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Na uw aanvraag komen wij <strong>gratis bij u langs voor een opmeting</strong> in Zoersel, Antwerpen of een andere
              gemeente in de regio. Wij bespreken uw wensen, nemen nauwkeurige maten en adviseren over het beste type deur
              voor uw situatie.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Binnen 24 uur ontvangt u een <strong>gedetailleerde offerte</strong>. Na akkoord plannen we de productie en plaatsing.
              De plaatsing van een voordeur duurt gemiddeld een halve dag. Wij zorgen voor een nette afwerking en nemen de
              oude deur mee voor recycling.
            </p>
          </div>
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
            <Link href="/deuren/brasschaat" className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors">
              Deuren Brasschaat
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/deuren/schoten" className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors">
              Deuren Schoten
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/deuren/wijnegem" className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors">
              Deuren Wijnegem
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/deuren/schilde" className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-6 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors">
              Deuren Schilde
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
