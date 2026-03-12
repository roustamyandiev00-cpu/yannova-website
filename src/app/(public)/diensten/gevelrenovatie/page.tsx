import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { PaintBucket, Layers, Sun, Activity, Phone, MessageCircle, CheckCircle2, Shield, Clock, Award } from "lucide-react";
import { generateSEO } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";
import { generateFAQSchema, commonFAQs } from "@/lib/faq-schema";
import { company } from "@/lib/company";
import { ServiceSeoSection } from "@/components/ServiceSeoSection";

export const metadata = generateSEO({
  title: "Gevelrenovatie & Crepi Antwerpen | Hoogwaardige Gevelisolatie",
  description: "Professionele gevelrenovatie met isolatie en crepi (siliconenharspleister). Verhoog uw woningwaarde en verlaag uw energiefactuur. Ontdek onze totaaloplossing voor uw exterieur.",
  path: "/diensten/gevelrenovatie",
  keywords: [
    "gevelrenovatie antwerpen",
    "crepi antwerpen",
    "gevelisolatie EPS",
    "siliconenharspleister",
    "steenstrips met isolatie",
    "gevel renoveren",
    "buitenmuurisolatie",
    "EPC waarde verbeteren",
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Diensten", url: "/diensten" },
  { name: "Gevelrenovatie", url: "/diensten/gevelrenovatie" },
]);

const faqSchema = generateFAQSchema(commonFAQs.gevelisolatie);

export default function FacadePage() {
  const benefits = [
    {
      title: "Optimale Isolatie",
      description: "Creëer een doorlopende thermische schil met hoogwaardige EPS-platen en verlaag uw EPC-waarde.",
      icon: Layers,
    },
    {
      title: "Onderhoudsvriendelijk",
      description: "Onze siliconenharspleister is waterafstotend en resistent tegen algen, mossen en vervuiling.",
      icon: PaintBucket,
    },
    {
      title: "Totaalrenovatie",
      description: "Wij coördineren gevel-, raam- en dakwerken voor een naadloze afwerking en planning.",
      icon: Sun,
    },
    {
      title: "Woningwaarde",
      description: "Een esthetisch vernieuwde en energiezuinige woning is direct meer waard op de vastgoedmarkt.",
      icon: Activity,
    },
  ];

  const services = [
    {
      title: "Gevelisolatie (EWI)",
      description: "Wij maken uw woning 'future-proof' door het aanbrengen van een continue isolatielaag. Dit elimineert koudebruggen en zorgt voor een stabiel binnenklimaat.",
      features: ["Hoogwaardige EPS-isolatieplaten", "Naadloze aansluiting op ramen en dak", "Directe besparing op energiekosten"]
    },
    {
      title: "Siliconenharspleister (Crepi)",
      description: "De meest duurzame vorm van crepi. Dankzij de elastische eigenschappen en waterafstotende toplaag blijft uw gevel jarenlang barstvrij en schoon.",
      features: ["Zelfreinigend effect door regen", "Verkrijgbaar in honderden kleuren", "Bestand tegen extreme weersomstandigheden"]
    },
    {
      title: "Steenstrips & Design",
      description: "Combineer de look van traditioneel metselwerk met de voordelen van moderne isolatie. Ideaal voor een robuuste uitstraling zonder ruimteverlies.",
      features: ["Niet van echt metselwerk te onderscheiden", "Vorstbestendig en slagvast", "Onderhoudsarm en tijdloos"]
    },
    {
      title: "Detailafwerking & Herstel",
      description: "Vakmanschap zit in de details. Wij zorgen voor perfecte aansluitingen rond dorpels, lateien en hoeken voor een strak eindresultaat.",
      features: ["Correcte afwatering bij vensterbanken", "Verstevigde hoekprofielen", "Professioneel voeg- en herstelwerk"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Plaatsbezoek & advies",
      description: "We komen langs om uw gevel te inspecteren, meten op te nemen en uw wensen te bespreken. U krijgt direct advies over de beste aanpak."
    },
    {
      step: "2",
      title: "Offerte op maat",
      description: "Op basis van het plaatsbezoek stellen we een gedetailleerde offerte op met materialen, planning en prijs. Alles helder en transparant."
    },
    {
      step: "3",
      title: "Voorbereiding",
      description: "We regelen alle benodigde materialen en stellen een planning op. Indien nodig vragen we vergunningen aan en coördineren met andere partijen."
    },
    {
      step: "4",
      title: "Uitvoering",
      description: "Ons ervaren team start met de voorbereidende werken, plaatst de isolatie en brengt de afwerking aan. We werken netjes en efficiënt."
    },
    {
      step: "5",
      title: "Oplevering",
      description: "Na afronding controleren we samen het resultaat. U krijgt onderhoudsadvies en alle garantiedocumenten."
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Siliconen-Specialist",
      description: "Wij gebruiken enkel hoogwaardige siliconenharspleister voor een blijvend schoon resultaat."
    },
    {
      icon: Award,
      title: "Totaaloplossing",
      description: "Eén partner voor gevel, ramen en dak. Dit garandeert een vlottere planning en perfecte details."
    },
    {
      icon: Clock,
      title: "EPC-Expertise",
      description: "Wij adviseren u over de juiste isolatiedikte om uw woning maximaal energiezuinig te maken."
    },
    {
      icon: CheckCircle2,
      title: "Garantie op Werk",
      description: "U krijgt volledige garantie op zowel de materialen als de vakkundige uitvoering."
    }
  ];

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
      <div className="bg-background min-h-screen">
      <section className="relative h-[56vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop"
            alt="Gevelrenovatie en crepi"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Gevelrenovatie & crepi</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Geef uw woning een nieuwe uitstraling en verbeter tegelijk de energieprestatie.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Eén investering, <span className="text-secondary">dubbel resultaat.</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                Met gevelrenovatie combineert u esthetiek met energiebesparing. We analyseren eerst de bestaande
                gevel en adviseren de juiste opbouw voor uw situatie. U kunt meer lezen over onze{" "}
                <Link href="/diensten/isolatie" className="text-secondary hover:underline">
                  isolatie
                </Link>{" "}
                en{" "}
                <Link href="/crepi-gevel" className="text-secondary hover:underline">
                  crepi
                </Link>{" "}
                diensten.
              </p>
              <p>
                Daarna verzorgen we uitvoering en afwerking tot in detail, inclusief correcte aansluitingen rond ramen,
                deuren en dakranden.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg">
                Vraag geveladvies
              </Link>
              <a href={company.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors">
                <Phone className="h-4 w-4" />
                Bel direct
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((item) => (
              <div key={item.title} className="group">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 w-14 h-14 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <item.icon className="text-secondary h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-muted/20 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Uw gevel vernieuwen?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We maken graag een voorstel dat technisch klopt en visueel bij uw woning past.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-white hover:bg-secondary/90 transition-colors">
              Plan een gesprek
            </Link>
            <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <ServiceSeoSection serviceSlug="gevelrenovatie" title="Gevelrenovatie" />

      <section className="py-20 px-6 container mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-4 text-center text-foreground">
            Onze <span className="text-secondary">gevelrenovatie diensten</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Van isolatie tot afwerking - wij verzorgen het volledige traject voor een duurzame en mooie gevel.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 mt-16">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <div className="h-full">
                <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4 text-center text-foreground">
              Hoe werkt <span className="text-secondary">gevelrenovatie?</span>
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Van eerste contact tot oplevering - zo verloopt uw gevelrenovatie stap voor stap.
            </p>
          </FadeIn>

          <div className="max-w-4xl mx-auto mt-16">
            {process.map((item, index) => (
              <FadeIn key={item.step} delay={index * 0.1}>
                <div className="flex gap-8 mb-12 last:mb-0 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-xl group-hover:bg-secondary group-hover:text-white transition-colors">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-4 text-center text-foreground">
            Waarom kiezen voor <span className="text-secondary">{company.name}?</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Wij combineren vakmanschap met persoonlijke service voor het beste resultaat.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {whyChooseUs.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <div className="text-center group">
                <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-5 mx-auto group-hover:bg-secondary/20 transition-colors">
                  <item.icon className="text-secondary h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Veelgestelde vragen over <span className="text-secondary">gevelrenovatie</span>
              </h2>
            </FadeIn>

            <div className="space-y-8 mt-12">
              <FadeIn delay={0.1}>
                <div className="border-l-4 border-secondary pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Wat is het verschil tussen minerale crepi en siliconenharspleister?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Siliconenharspleister (onze standaard) is elastischer en waterafstotend, wat de kans op barsten en vervuiling (zoals algen) aanzienlijk verkleint. 
                    Minerale crepi is minder flexibel maar heeft een hogere dampopenheid. Voor de meeste woningen is siliconenharspleister de beste keuze 
                    vanwege de duurzaamheid en het zelfreinigende effect.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="border-l-4 border-secondary pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Hoe moet ik mijn crepi gevel onderhouden?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dankzij de siliconen toplaag is de gevel grotendeels zelfreinigend: vuil spoelt weg met de regen. 
                    Wij adviseren om de gevel jaarlijks even af te spoelen met een tuinslang (lage druk) om stof te verwijderen. 
                    Gebruik nooit een hogedrukreiniger, dit kan de structuur van de pleister beschadigen.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="border-l-4 border-secondary pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Kan crepi gecombineerd worden met andere materialen?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Absoluut. Voor een moderne look combineren we crepi vaak met steenstrips, houtaccenten of zwarte aluminium details 
                    rond de ramen. Wij kunnen dit als totaalpakket aanbieden, zodat alle aansluitingen technisch perfect zijn uitgevoerd.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="border-l-4 border-secondary pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Hoeveel bespaar ik met gevelisolatie?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Een niet-geïsoleerde buitenmuur is verantwoordelijk voor zo&apos;n 25% tot 30% van het warmteverlies. 
                    Met 10 cm EPS-isolatie kunt u uw energiefactuur met honderden euro&apos;s per jaar verlagen en uw 
                    comfort (geen tocht of koude muren) direct verbeteren.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="border-l-4 border-secondary pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Zijn er premies voor gevelrenovatie in 2026?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ja, via de Mijn VerbouwPremie van de Vlaamse overheid kunt u aanzienlijke bedragen terugkrijgen voor 
                    buitenmuurisolatie en afwerking. Wij helpen u bij het verzamelen van de juiste documentatie en 
                    attesten voor een vlotte aanvraag.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="border-l-4 border-secondary pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Moet ik het huis uit tijdens de werken?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nee, u kunt gewoon blijven wonen tijdens de gevelrenovatie. We werken van buitenaf en zorgen dat ramen 
                    en deuren dagelijks bruikbaar blijven. Wel kan er tijdelijk wat stof en lawaai zijn. We houden u op de 
                    hoogte van de planning zodat u weet wanneer we aan welke gevel werken.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/10 border-y border-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Klaar voor een nieuwe gevel?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Vraag vrijblijvend advies aan en ontdek wat gevelrenovatie voor uw woning kan betekenen. 
              We komen graag langs voor een persoonlijk gesprek.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center rounded-lg bg-secondary px-8 py-4 text-base font-semibold text-white hover:bg-secondary/90 transition-colors shadow-lg">
                Gratis adviesgesprek aanvragen
              </Link>
              <a href={company.phoneHref} className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-base font-medium text-white hover:bg-white/5 transition-colors">
                <Phone className="h-5 w-5" />
                {company.phoneDisplay}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Bestaande FAQ sectie blijft behouden - voeg alleen schema toe */}
    </div>
    </>
  );
}
