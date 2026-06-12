"use client";

import { useState } from "react";
import { Calculator, CheckCircle2, Euro, Info, Phone } from "lucide-react";
import Link from "next/link";

interface PricingSectionProps {
  service: "ramen" | "deuren" | "crepi" | "gevelisolatie" | "gevelrenovatie" | "renovatie" | "totaalrenovatie";
  city: string;
}

const pricingData = {
  gevelrenovatie: {
    title: "Gevelrenovatie prijzen",
    basePrice: "vanaf €120 per m²",
    factors: [
      "Gevelisolatie zonder crepi: €80-120/m²",
      "Met crepi afwerking: €120-180/m²",
      "Steenstrips optie: €150-220/m²",
      "Isolatiedikte (8-16cm)",
      "Ondergrond en herstelwerk",
      "Aantal hoeken en details"
    ],
    includes: [
      "Gratis gevelinspectie",
      "Gevelisolatie (EPS of mineraal)",
      "Afwerking (crepi of steenstrips)",
      "Detailafwerking rond ramen",
      "Kleurkeuze en structuur",
      "10 jaar garantie op afwerking"
    ],
    savings: "Tot 40% besparing op verwarmingskosten",
    premies: "Mijn VerbouwPremie tot €6.000 mogelijk"
  },
  ramen: {
    title: "Nieuwe ramen prijzen",
    basePrice: "vanaf €400 per m²",
    factors: [
      "PVC ramen: €400-600/m²",
      "Aluminium ramen: €600-800/m²",
      "Beglazing: HR++ of triple glas",
      "Afmetingen en vorm",
      "Aantal openingen",
      "Bestaande situatie"
    ],
    includes: [
      "Gratis opmeting aan huis",
      "Demontage oude ramen",
      "Nieuwe ramen incl. HR++ glas", 
      "Luchtdichte montage",
      "Afwerking rond kozijnen",
      "10 jaar garantie op profielen"
    ],
    savings: "Tot 30% besparing op energiekosten",
    premies: "Mijn VerbouwPremie tot €3.200 mogelijk"
  },
  deuren: {
    title: "Nieuwe deuren prijzen",
    basePrice: "vanaf €800 per stuk",
    factors: [
      "PVC deuren: €800-1.500/stuk",
      "Aluminium deuren: €1.200-2.500/stuk",
      "Voordeur of achterdeur",
      "Inbraakveiligheid (RC2/RC3)",
      "Design en afwerking",
      "Automatische sluitingen"
    ],
    includes: [
      "Gratis opmeting en advies",
      "Demontage oude deur",
      "Nieuwe deur met kozijn",
      "Veiligheidsbeslag en cilinder",
      "Professionele montage",
      "10 jaar garantie"
    ],
    savings: "Betere isolatie en veiligheid",
    premies: "Mogelijk recht op renovatiepremies"
  },
  crepi: {
    title: "Crepi gevel prijzen", 
    basePrice: "vanaf €80 per m²",
    factors: [
      "Crepi zonder isolatie: €80-120/m²",
      "Crepi met isolatie: €120-180/m²",
      "Isolatiedikte (8-16cm)",
      "Ondergrond en herstelwerk",
      "Aantal hoeken en details",
      "Stellingwerk en toegankelijkheid"
    ],
    includes: [
      "Gratis opmeting en offerte",
      "Gevelisolatie (EPS of mineraal)",
      "Siliconenharspleister (crepi)",
      "Detailafwerking rond ramen",
      "Kleurkeuze uit 200+ tinten",
      "10 jaar garantie op afwerking"
    ],
    savings: "Tot 40% besparing op verwarmingskosten",
    premies: "Mijn VerbouwPremie tot €6.000 mogelijk"
  },
  gevelisolatie: {
    title: "Gevelisolatie prijzen",
    basePrice: "vanaf €60 per m²",
    factors: [
      "EPS isolatie: €60-90/m²",
      "Minerale wol: €80-120/m²",
      "Isolatiedikte (8-20cm)",
      "Afwerking (crepi/steenstrips)",
      "Complexiteit van de gevel",
      "Premie-eisen en certificering"
    ],
    includes: [
      "Energieaudit en advies",
      "Hoogwaardige isolatieplaten",
      "Luchtdichte verwerking",
      "Kwaliteitscontrole",
      "EPB-attest voor premies",
      "20 jaar garantie op isolatie"
    ],
    savings: "Tot 50% besparing op verwarmingskosten",
    premies: "Mijn VerbouwPremie tot €6.000"
  },
  renovatie: {
    title: "Renovatie prijzen",
    basePrice: "op maat berekend",
    factors: [
      "Buitenschil renovatie: €300-600/m²",
      "Totaalrenovatie: €800-1.500/m²",
      "Omvang van het project",
      "Kwaliteit van materialen",
      "Complexiteit van werken",
      "Tijdelijk bewoonbaar houden"
    ],
    includes: [
      "Gratis projectanalyse",
      "Eén vaste projectleider", 
      "Gecoördineerde planning",
      "Kwaliteitscontrole",
      "Garantie op alle werken",
      "Ondersteuning bij premies"
    ],
    savings: "Waardevermeerdering tot 20%",
    premies: "Combinatie van verschillende premies mogelijk"
  },
  totaalrenovatie: {
    title: "Totaalrenovatie prijzen",
    basePrice: "€800-1.500 per m²",
    factors: [
      "Basisrenovatie: €800-1.200/m²",
      "Premium renovatie: €1.200-1.500/m²",
      "Structurele aanpassingen",
      "Technieken (elektra, sanitair)",
      "Afwerkingsniveau",
      "Energetische maatregelen"
    ],
    includes: [
      "Volledige projectbegeleiding",
      "Alle bouw- en installatiewerken",
      "Coördinatie alle vakmannen",
      "Kwaliteitsborging",
      "Garantie op totaalproject",
      "Complete premie-ondersteuning"
    ],
    savings: "Maximale energiebesparing en comfort",
    premies: "Alle beschikbare premies optimaal benutten"
  }
};

export function PricingSection({ service, city }: PricingSectionProps) {
  const [showDetails, setShowDetails] = useState(false);
  const data = pricingData[service];

  return (
    <div className="border-t border-white/10 py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Euro className="h-8 w-8 text-secondary" />
              <h2 className="text-3xl font-bold text-white">{data.title} in {city}</h2>
            </div>
            
            <div className="editorial-pane mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-secondary">{data.basePrice}</div>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <Info className="h-4 w-4" />
                  {showDetails ? 'Minder details' : 'Meer details'}
                </button>
              </div>
              
              <p className="text-lg text-gray-300 mb-6">
                De prijs voor {service} in {city} hangt af van verschillende factoren. 
                Hieronder vindt u een realistische prijsindicatie inclusief alle werken.
              </p>

              {showDetails && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Wat bepaalt de prijs?</h3>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {data.factors.map((factor, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-300">{factor}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Wat is inbegrepen?</h3>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {data.includes.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="editorial-callout px-4 py-4">
                      <div className="text-sm font-medium text-secondary mb-2">Energiebesparing</div>
                      <div className="text-white font-semibold">{data.savings}</div>
                    </div>
                    <div className="editorial-callout px-4 py-4">
                      <div className="text-sm font-medium text-secondary mb-2">Premies</div>
                      <div className="text-white font-semibold">{data.premies}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="editorial-pane">
              <h3 className="text-xl font-semibold text-white mb-4">Waarom kiezen voor Yannova in {city}?</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium text-white">Transparante prijzen</div>
                    <div className="text-sm text-gray-300 mt-1">Geen verborgen kosten, duidelijke offerte</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium text-white">Lokale expertise</div>
                    <div className="text-sm text-gray-300 mt-1">15+ jaar ervaring in {city} en omgeving</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium text-white">Kwaliteitsgarantie</div>
                    <div className="text-sm text-gray-300 mt-1">10 jaar garantie op alle werken</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium text-white">Premie-ondersteuning</div>
                    <div className="text-sm text-gray-300 mt-1">Hulp bij aanvraag Mijn VerbouwPremie</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="editorial-callout px-6 py-8">
              <div className="flex items-center gap-3 mb-4">
                <Calculator className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-semibold text-white">Gratis prijsberekening</h3>
              </div>
              <p className="text-gray-200 mb-6">
                Krijg binnen 24u een exacte prijsofferte voor uw {service} project in {city}.
              </p>
              <div className="space-y-3">
                <Link 
                  href="/offerte"
                  className="block w-full bg-secondary hover:bg-secondary/90 text-dark font-semibold py-3 px-6 rounded-xl text-center transition-colors"
                >
                  Gratis offerte aanvragen
                </Link>
                <a
                  href="tel:+32489960001"
                  className="flex items-center justify-center gap-3 w-full border border-white/20 hover:border-white/40 text-white font-medium py-3 px-6 rounded-xl transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +32 489 96 00 01
                </a>
              </div>
              <p className="text-xs text-gray-400 mt-4 text-center">
                Gratis opmeting • Offerte binnen 24u • Geen verplichtingen
              </p>
            </div>

            <div className="editorial-pane">
              <h4 className="text-lg font-semibold text-white mb-4">Stap voor stap proces</h4>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <div className="text-white font-medium">Gratis opmeting</div>
                    <div className="text-sm text-gray-300">Bezoek ter plaatse in {city}</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <div className="text-white font-medium">Offerte op maat</div>
                    <div className="text-sm text-gray-300">Binnen 24u in uw mailbox</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <div className="text-white font-medium">Planning & uitvoering</div>
                    <div className="text-sm text-gray-300">Vakkundige realisatie</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="editorial-pane">
              <h4 className="text-lg font-semibold text-white mb-3">Premies in {city}</h4>
              <p className="text-sm text-gray-300 mb-4">
                Bewoners van {city} kunnen profiteren van verschillende renovatiepremies:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Mijn VerbouwPremie</span>
                  <span className="text-white font-medium">Tot €6.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Energiepremie</span>
                  <span className="text-white font-medium">€15-25/m²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Lokale premies</span>
                  <span className="text-white font-medium">Variabel</span>
                </div>
              </div>
              <Link 
                href="/premie-gids"
                className="inline-flex items-center gap-2 text-sm text-secondary hover:underline mt-4"
              >
                Premie-gids bekijken
                <Calculator className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}