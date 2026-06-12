"use client";

import { CheckCircle2, Award, Clock, Shield, Users, Zap, Home, TrendingUp } from "lucide-react";
import { PricingSection } from "./PricingSection";
import Image from "next/image";
import Link from "next/link";

interface EnhancedServiceContentProps {
  service: "ramen" | "deuren" | "crepi" | "gevelisolatie" | "gevelrenovatie" | "renovatie" | "totaalrenovatie";
  city: string;
  citySlug: string;
}

const serviceContent = {
  gevelrenovatie: {
    materials: {
      title: "Gevelrenovatie methoden",
      items: [
        {
          name: "Gevelisolatie + Crepi",
          price: "€120-180/m²",
          features: ["EPS isolatie 12-14cm", "Siliconenharspleister", "Zelfreinigend", "30+ jaar duurzaam"],
          bestFor: "Meeste woningen, beste isolatie"
        },
        {
          name: "Steenstrips met isolatie",
          price: "€150-220/m²",
          features: ["Origineel uiterlijk", "Echte steen voorgevel", "Uitstekende isolatie", "Premium look"],
          bestFor: "Villa's, architecturale waarde"
        }
      ]
    },
    process: {
      title: "Gevelrenovatie stappen",
      steps: [
        {
          title: "Inspectie en voorbereiding",
          description: "Gevel inspecteren, schade beoordelen en nodig herstelwerk identificeren",
          duration: "1 dag"
        },
        {
          title: "Ondergrond voorbereiding",
          description: "Gevel reinigen, scheuren repareren en primer aanbrengen",
          duration: "1-2 dagen"
        },
        {
          title: "Isolatie plaatsen",
          description: "EPS of minerale wol isolatieplaten verlijmen, verduvelen en voegen afdichten",
          duration: "2-3 dagen"
        },
        {
          title: "Wapeningslaag",
          description: "Basislaag met glasvezelweefsel voor sterkte en barst preventie",
          duration: "1 dag"
        },
        {
          title: "Eindafwerking",
          description: "Crepi of steenstrips aanbrengen in gewenste kleur en structuur",
          duration: "2-3 dagen"
        }
      ]
    },
    benefits: {
      title: "Gevelrenovatie voordelen",
      stats: [
        { icon: TrendingUp, value: "40%", label: "Energiebesparing" },
        { icon: Home, value: "A-label", label: "EPC verbetering" },
        { icon: Zap, value: "€6.000", label: "Maximale premie" },
        { icon: Clock, value: "30 jaar", label: "Garantie afwerking" }
      ]
    }
  },
  ramen: {
    materials: {
      title: "PVC vs Aluminium ramen in",
      items: [
        {
          name: "PVC ramen",
          price: "€400-600/m²",
          features: ["Uitstekende isolatie", "Onderhoudsvriendelijk", "Kosteneffectief", "Lange levensduur"],
          bestFor: "Meeste woningen, renovaties"
        },
        {
          name: "Aluminium ramen",  
          price: "€600-800/m²",
          features: ["Slanke profielen", "Moderne uitstraling", "Zeer sterk", "Duurzaam"],
          bestFor: "Moderne architectuur, grote vlakken"
        }
      ]
    },
    process: {
      title: "Hoe we ramen plaatsen",
      steps: [
        {
          title: "Opmeting en advies",
          description: "Gratis bezoek ter plaatse om afmetingen op te meten en materialen te bespreken",
          duration: "1-2 uur"
        },
        {
          title: "Productie op maat",
          description: "Ramen worden in onze werkplaats op maat gemaakt volgens uw specificaties",
          duration: "2-3 weken"
        },
        {
          title: "Demontage oude ramen",
          description: "Vakkundige demontage van bestaande ramen inclusief opruimen",
          duration: "Halve dag"
        },
        {
          title: "Plaatsing nieuwe ramen",
          description: "Luchtdichte montage met afwerking van binnenkant en buitenkant",
          duration: "1-2 dagen"
        }
      ]
    },
    benefits: {
      title: "Waarom nieuwe ramen laten plaatsen",
      stats: [
        { icon: TrendingUp, value: "30%", label: "Minder energiekosten" },
        { icon: Shield, value: "-35dB", label: "Geluidsreductie" },
        { icon: Home, value: "15%", label: "Waardestijging woning" },
        { icon: Clock, value: "30 jaar", label: "Levensduur" }
      ]
    }
  },
  deuren: {
    materials: {
      title: "Voordeur materialen vergelijking",
      items: [
        {
          name: "PVC deuren",
          price: "€800-1.500/stuk",
          features: ["Goede isolatie", "Weinig onderhoud", "Kosteneffectief", "Breed kleurenaanbod"],
          bestFor: "Budget-bewuste keuze, gezinswoningen"
        },
        {
          name: "Aluminium deuren",
          price: "€1.200-2.500/stuk",
          features: ["Premium uitstraling", "Maximale veiligheid", "Slanke profielen", "Duurzaam"],
          bestFor: "Moderne woningen, maximale veiligheid"
        }
      ]
    },
    process: {
      title: "Deurplaatsing proces",
      steps: [
        {
          title: "Opmeting en selectie",
          description: "Afmetingen opnemen en deurtype bespreken (voordeur, achterdeur, schuifdeur)",
          duration: "1 uur"
        },
        {
          title: "Maatwerk productie",
          description: "Deur wordt op maat gemaakt inclusief kozijn en beslag",
          duration: "3-4 weken"
        },
        {
          title: "Demontage en plaatsing",
          description: "Oude deur verwijderen en nieuwe deur vakkundig monteren",
          duration: "1 dag"
        },
        {
          title: "Afwerking en test",
          description: "Afwerking aanbrengen en alle functies testen (slot, beslag, isolatie)",
          duration: "2-3 uur"
        }
      ]
    },
    benefits: {
      title: "Voordelen nieuwe buitendeur",
      stats: [
        { icon: Shield, value: "RC2", label: "Inbraakbeveiliging" },
        { icon: Zap, value: "25%", label: "Betere isolatie" },
        { icon: Award, value: "4.8/5", label: "Klanttevredenheid" },
        { icon: Clock, value: "25 jaar", label: "Garantie periode" }
      ]
    }
  },
  crepi: {
    materials: {
      title: "Crepi types en toepassingen",
      items: [
        {
          name: "Siliconenharspleister",
          price: "€25-35/m²",
          features: ["Zelfreinigend", "Waterafstotend", "Elastisch", "UV-bestendig"],
          bestFor: "Hoogwaardige afwerking, weinig onderhoud"
        },
        {
          name: "Minerale pleister", 
          price: "€20-30/m²",
          features: ["Natuurlijk materiaal", "Ademend", "Brandwerend", "Duurzaam"],
          bestFor: "Historische panden, natuurlijke uitstraling"
        }
      ]
    },
    process: {
      title: "Crepi aanbrengen stap voor stap",
      steps: [
        {
          title: "Voorbereiding gevel",
          description: "Gevel reinigen, scheuren herstellen en primer aanbrengen waar nodig",
          duration: "1-2 dagen"
        },
        {
          title: "Isolatie aanbrengen",  
          description: "EPS of minerale wol isolatieplaten verlijmen en verduvelen",
          duration: "1-3 dagen"
        },
        {
          title: "Wapeningslaag",
          description: "Basislaag met glasvezelweefsel voor sterkte en barst preventie", 
          duration: "1 dag"
        },
        {
          title: "Eindafwerking crepi",
          description: "Decoratieve toplaag in gewenste kleur en structuur aanbrengen",
          duration: "1-2 dagen"
        }
      ]
    },
    benefits: {
      title: "Waarom kiezen voor crepi gevel",
      stats: [
        { icon: TrendingUp, value: "40%", label: "Energiebesparing" },
        { icon: Shield, value: "10 jaar", label: "Garantie afwerking" },
        { icon: Home, value: "20%", label: "Waardestijging" },
        { icon: Zap, value: "€6.000", label: "Max. premie" }
      ]
    }
  },
  gevelisolatie: {
    materials: {
      title: "Isolatiematerialen vergelijking",
      items: [
        {
          name: "EPS isolatie",
          price: "€15-25/m²",
          features: ["Goede isolatiewaarde", "Lichtgewicht", "Kosteneffectief", "Eenvoudig te verwerken"],
          bestFor: "Meeste toepassingen, budget-vriendelijk"
        },
        {
          name: "Minerale wol",
          price: "€25-35/m²", 
          features: ["Brandwerend", "Ademend", "Geluiddempend", "Duurzaam"],
          bestFor: "Brandveiligheid, akoestische isolatie"
        }
      ]
    },
    process: {
      title: "Gevelisolatie proces",
      steps: [
        {
          title: "Energieaudit",
          description: "Huidige energieprestatie meten en isolatiemogelijkheden bepalen",
          duration: "2-3 uur"
        },
        {
          title: "Gevelvoorbereiding",
          description: "Gevel reinigen, reparaties uitvoeren en primer aanbrengen",
          duration: "1 dag"
        },
        {
          title: "Isolatie plaatsen",
          description: "Isolatieplaten verlijmen, verduvelen en kieren afdichten", 
          duration: "2-3 dagen"
        },
        {
          title: "Afwerking aanbrengen",
          description: "Wapeningslaag en decoratieve eindafwerking (crepi of steenstrips)",
          duration: "2-3 dagen"
        }
      ]
    },
    benefits: {
      title: "Gevelisolatie voordelen",
      stats: [
        { icon: TrendingUp, value: "50%", label: "Energiebesparing" },
        { icon: Home, value: "A-label", label: "EPC verbetering" },
        { icon: Zap, value: "€6.000", label: "Mijn VerbouwPremie" },
        { icon: Clock, value: "20 jaar", label: "Garantie isolatie" }
      ]
    }
  },
  renovatie: {
    materials: {
      title: "Renovatie pakketten",
      items: [
        {
          name: "Buitenschil renovatie",
          price: "€300-600/m²",
          features: ["Gevel + ramen + dak", "Energetische verbetering", "Gecoördineerde aanpak", "Premie-optimalisatie"],
          bestFor: "Energetische upgrade, buitenkant vernieuwen"
        },
        {
          name: "Totaalrenovatie",
          price: "€800-1.500/m²",
          features: ["Binnen + buiten", "Technieken vernieuwen", "Moderne comfort", "Complete transformatie"],  
          bestFor: "Volledige woning vernieuwen"
        }
      ]
    },
    process: {
      title: "Renovatie projectverloop",
      steps: [
        {
          title: "Intake en analyse",
          description: "Woning bezoeken, wensen bespreken en technische staat beoordelen",
          duration: "2-4 uur"
        },
        {
          title: "Ontwerp en planning",
          description: "Renovatieplan opstellen met timing, materialen en budgettering",
          duration: "1-2 weken"
        },
        {
          title: "Vergunningen en premies",
          description: "Nodige vergunningen aanvragen en premie-dossiers voorbereiden",
          duration: "2-8 weken"  
        },
        {
          title: "Uitvoering project",
          description: "Gefaseerde uitvoering met vaste projectleider en kwaliteitscontrole",
          duration: "4-16 weken"
        }
      ]
    },
    benefits: {
      title: "Renovatie voordelen",
      stats: [
        { icon: TrendingUp, value: "60%", label: "Energiebesparing mogelijk" },
        { icon: Home, value: "25%", label: "Waardestijging" },
        { icon: Users, value: "1", label: "Vaste projectleider" },
        { icon: Award, value: "Premium", label: "Kwaliteitsgarantie" }
      ]
    }
  },
  totaalrenovatie: {
    materials: {
      title: "Totaalrenovatie niveaus", 
      items: [
        {
          name: "Basis totaalrenovatie",
          price: "€800-1.200/m²",
          features: ["Essentiele vernieuwing", "Standaard materialen", "Energetische verbetering", "Functionele indeling"],
          bestFor: "Budget-bewuste volledige vernieuwing"
        },
        {
          name: "Premium totaalrenovatie", 
          price: "€1.200-1.800/m²",
          features: ["Hoogwaardige materialen", "Custom oplossingen", "Smart home integratie", "Design focus"],
          bestFor: "Luxueuze transformatie, toekomstbestendig"
        }
      ]
    },
    process: {
      title: "Totaalrenovatie fasen",
      steps: [
        {
          title: "Masterplan ontwikkeling",
          description: "Complete analyse, wensen inventariseren en masterplan opstellen",
          duration: "2-4 weken"
        },
        {
          title: "Vergunningen en engineering",
          description: "Bouwvergunning, stabiliteitsplannen en technische studies",
          duration: "6-12 weken"
        },
        {
          title: "Ruwbouw en technieken", 
          description: "Structurele werken, elektra, sanitair, verwarming en ventilatie",
          duration: "8-16 weken"
        },
        {
          title: "Afwerking en oplevering",
          description: "Binnenafwerking, keuken, badkamers en finale controles",
          duration: "6-12 weken"
        }
      ]
    },
    benefits: {
      title: "Totaalrenovatie resultaat",
      stats: [
        { icon: Home, value: "A++", label: "Energie label" },
        { icon: TrendingUp, value: "40%", label: "Waardestijging" },
        { icon: Users, value: "Dedicated", label: "Project team" },
        { icon: Award, value: "Turnkey", label: "Totaaloplossing" }
      ]
    }
  }
};

export function EnhancedServiceContent({ service, city, citySlug }: EnhancedServiceContentProps) {
  const content = serviceContent[service];

  return (
    <>
      {/* Materials Comparison Section */}
      <div className="border-t border-white/10 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8">
            {content.materials.title} {city}
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {content.materials.items.map((material, index) => (
              <div key={index} className="editorial-pane">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{material.name}</h3>
                  <div className="text-lg font-bold text-secondary">{material.price}</div>
                </div>
                <div className="space-y-3 mb-6">
                  {material.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="text-sm text-gray-400">Beste keuze voor:</div>
                  <div className="text-white font-medium mt-1">{material.bestFor}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Timeline Section */}
      <div className="border-t border-white/10 py-16 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8">{content.process.title} in {city}</h2>
          <div className="max-w-4xl">
            <div className="space-y-8">
              {content.process.steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-lg font-bold">
                      {index + 1}
                    </div>
                    {index < content.process.steps.length - 1 && (
                      <div className="w-px bg-white/10 h-16 mx-auto mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      <span className="text-sm text-secondary font-medium px-3 py-1 bg-secondary/10 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Stats Section */}
      <div className="border-t border-white/10 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8">{content.benefits.title} in {city}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.benefits.stats.map((stat, index) => (
              <div key={index} className="editorial-callout px-6 py-8 text-center">
                <stat.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <PricingSection service={service} city={city} />

      {/* Case Study Section */}
      <div className="border-t border-white/10 py-16 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8">Recent project in {city}</h2>
          <div className="editorial-pane max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
              <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
                <Image
                  src={`/images/projects/${service}-project-${citySlug}.jpg`}
                  alt={`${service} project in ${city}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  onError={(e) => {
                    // Fallback to a default image
                    e.currentTarget.src = `/images/renovatie/${service === 'ramen' ? 'replacing_windows_no_people.png' : 
                      service === 'crepi' ? 'fresh_plastering_skim.png' :
                      service === 'gevelisolatie' ? 'interior_renovation_sliding_doors.png' :
                      'renovation_works_example.png'}`;
                  }}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service === 'ramen' ? 'Volledige raamvervanging gezinswoning' :
                   service === 'deuren' ? 'Nieuwe voordeur met extra beveiliging' :
                   service === 'crepi' ? 'Crepi met gevelisolatie' :
                   service === 'gevelisolatie' ? 'Energetische gevelrenovatie' :
                   service === 'renovatie' ? 'Buitenschil renovatie' :
                   'Complete woning transformatie'}
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    {service === 'ramen' ? `Een gezin in ${city} koos voor volledige raamvervanging. Alle 18 ramen werden vervangen door HR++ beglazing in PVC profielen.` :
                     service === 'deuren' ? `Voordeur vervanging in ${city} met focus op veiligheid en isolatie. RC2 beveiliging met moderne uitstraling.` :
                     service === 'crepi' ? `Gevelrenovatie met 12cm EPS isolatie en siliconenharspleister afwerking. Volledig conform premie-eisen.` :
                     service === 'gevelisolatie' ? `Complete gevelisolatie met 14cm minerale wol en crepi afwerking. EPC-label verbeterd van F naar B.` :
                     service === 'renovatie' ? `Integrale buitenschil renovatie: gevel, ramen en dak in één project. Energiebesparing van 55%.` :
                     `Complete transformatie van jaren '80 woning. Van energielabel E naar A+ in 4 maanden tijd.`}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <div className="text-sm text-gray-400">Project omvang</div>
                      <div className="text-white font-medium">
                        {service === 'ramen' ? '180 m² raamoppervlak' :
                         service === 'deuren' ? '2 deuren + kozijnen' :
                         service === 'crepi' ? '240 m² geveloppervlak' :
                         service === 'gevelisolatie' ? '280 m² isolatie' :
                         service === 'renovatie' ? '350 m² buitenschil' :
                         'Volledige woning 220 m²'}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Uitvoeringstijd</div>
                      <div className="text-white font-medium">
                        {service === 'ramen' ? '3 dagen plaatsing' :
                         service === 'deuren' ? '1 dag per deur' :
                         service === 'crepi' ? '2 weken volledig' :
                         service === 'gevelisolatie' ? '3 weken inclusief afwerking' :
                         service === 'renovatie' ? '8 weken gefaseerd' :
                         '16 weken totaal'}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Energiebesparing</div>
                      <div className="text-white font-medium">
                        {service === 'ramen' ? '25% op verwarming' :
                         service === 'deuren' ? '10% minder warmteverlies' :
                         service === 'crepi' ? '40% energiereductie' :
                         service === 'gevelisolatie' ? '45% besparing' :
                         service === 'renovatie' ? '55% energiereductie' :
                         '65% totale besparing'}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Klant tevredenheid</div>
                      <div className="text-white font-medium flex items-center gap-1">
                        5/5 sterren
                        <div className="flex gap-0.5 ml-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-secondary rounded-full" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="text-sm text-gray-400 mb-2">Klant testimonial:</div>
                  <blockquote className="text-white italic">
                    "{service === 'ramen' ? 'Onze woning is nu veel stiller en warmer. Het verschil is onmiddellijk merkbaar.' :
                      service === 'deuren' ? 'De nieuwe voordeur geeft ons veel meer veiligheidsgevoel en ziet er prachtig uit.' :
                      service === 'crepi' ? 'Onze gevel ziet er als nieuw uit en onze energiefactuur is gehalveerd.' :
                      service === 'gevelisolatie' ? 'We merken het verschil elke dag. Warmer in winter, koeler in zomer.' :
                      service === 'renovatie' ? 'Yannova heeft onze woning compleet getransformeerd. Fantastisch resultaat.' :
                      'Van verouderde woning naar moderne droomhuis. Alles perfect uitgevoerd.'}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Local Expertise Section */}
      <div className="border-t border-white/10 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8">Lokale expertise in {city}</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="editorial-pane">
              <Users className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">15+ jaar ervaring</h3>
              <p className="text-gray-300">
                Al meer dan 15 jaar actief in {city} en omgeving. We kennen de lokale bouwstijlen, 
                veelvoorkomende problemen en de beste oplossingen voor woningen in deze regio.
              </p>
              <div className="mt-4 text-sm text-secondary">
                200+ projecten gerealiseerd in {city}
              </div>
            </div>

            <div className="editorial-pane">
              <Award className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Lokale referenties</h3>
              <p className="text-gray-300">
                Tientallen tevreden klanten in {city} kunnen onze kwaliteit bevestigen. 
                We werken met lokale leveranciers en kennen de gemeentelijke procedures.
              </p>
              <div className="mt-4 text-sm text-secondary">
                4.9/5 sterren gemiddelde beoordeling
              </div>
            </div>

            <div className="editorial-pane">
              <Clock className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Snelle service</h3>
              <p className="text-gray-300">
                Door onze lokale aanwezigheid kunnen we snel ter plaatse komen voor opmeting, 
                onderhoud of noodgevallen. Korte communicatielijnen en persoonlijke service.
              </p>
              <div className="mt-4 text-sm text-secondary">
                Binnen 24u ter plaatse in {city}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}