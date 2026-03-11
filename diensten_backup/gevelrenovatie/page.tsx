import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { PaintBucket, Layers, Sun, Activity, Phone, MessageCircle, CheckCircle2, Shield, Clock, Award } from "lucide-react";
import { generateSEO } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";
import { generateFAQSchema, commonFAQs } from "@/lib/faq-schema";
import { company } from "@/lib/company";

export const metadata = generateSEO({
  title: "Gevelrenovatie & Crepi in Antwerpen - Isolatie en Afwerking",
  description: "Professionele gevelrenovatie met isolatie en crepi afwerking. Energiebesparing, nieuwe uitstraling en premie-advies. Vakkundige uitvoering in Antwerpen en omgeving.",
  path: "/diensten/gevelrenovatie",
  keywords: [
    "gevelrenovatie antwerpen",
    "crepi antwerpen",
    "gevelisolatie",
    "steenstrips",
    "gevel renoveren",
    "buitenisolatie",
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
      title: "Isolatie en bescherming",
      description: "Bescherm uw woning beter tegen vocht, temperatuurwissels en slijtage.",
      icon: Layers,
    },
    {
      title: "Nieuwe uitstraling",
      description: "Moderne afwerking in crepi of steenstrips, afgestemd op uw woning.",
      icon: PaintBucket,
    },
    {
      title: "Lagere energiefactuur",
      description: "Goede gevelisolatie helpt uw warmteverlies structureel te beperken.",
      icon: Sun,
    },
    {
      title: "Meer woningwaarde",
      description: "Een verzorgde en geïsoleerde gevel verhoogt comfort en marktwaarde.",
      icon: Activity,
    },
  ];

  const services = [
    {
      title: "Gevelisolatie",
      description: "Wij plaatsen hoogwaardige isolatieplaten op uw bestaande gevel. Dit vermindert warmteverlies aanzienlijk en zorgt voor een comfortabeler binnenklimaat.",
      features: ["EPS, XPS of minerale wol", "Dikte op maat van uw situatie", "Correcte verankering en lijmwerk"]
    },
    {
      title: "Crepi afwerking",
      description: "Na isolatie brengen we een duurzame crepilaag aan. U kiest uit verschillende structuren en kleuren die perfect bij uw woning passen.",
      features: ["Minerale of kunststof crepi", "Diverse korrelgroottes", "Kleurvast en waterafstotend"]
    },
    {
      title: "Steenstrips",
      description: "Voor een natuurlijke uitstraling kunnen we steenstrips aanbrengen. Deze geven uw gevel een robuuste, tijdloze look met minimaal onderhoud.",
      features: ["Natuursteen of kunststeen", "Diverse formaten en kleuren", "Vorstbestendig en duurzaam"]
    },
    {
      title: "Voegwerk & herstel",
      description: "Beschadigde voegen of scheuren worden vakkundig hersteld voordat we met isolatie en afwerking starten. Zo garanderen we een stabiele ondergrond.",
      features: ["Voegvernieuwing", "Scheurherstellingen", "Vochtbestrijding"]
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
      title: "Vakmanschap",
      description: "Jarenlange ervaring in gevelrenovatie en isolatiewerken"
    },
    {
      icon: Award,
      title: "Kwaliteitsgarantie",
      description: "Wij werken enkel met A-merken en geven garantie op materiaal en uitvoering"
    },
    {
      icon: Clock,
      title: "Stipte planning",
      description: "Duidelijke afspraken en realistische planning die we nakomen"
    },
    {
      icon: CheckCircle2,
      title: "Totaalpakket",
      description: "Van advies tot oplevering, alles uit één hand"
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
                gevel en adviseren de juiste opbouw voor uw situatie. U kunt meer lezen over onze <a href="/diensten/isolatie" className="text-secondary hover:underline">isolatie</a> en <a href="/gevelisolatie-crepi" className="text-secondary hover:underline">crepi</a> diensten.
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
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Hoelang duurt een gevelrenovatie?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    De duur hangt af van de grootte van uw woning en de gekozen afwerking. Een gemiddelde eengezinswoning 
                    kunnen we in 2 tot 3 weken volledig renoveren. Bij grotere projecten of complexe situaties kan dit langer duren. 
                    We maken vooraf een realistische planning die we met u bespreken.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="border-l-4 border-secondary pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Wat kost een gevelrenovatie?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    De prijs varieert afhankelijk van de oppervlakte, isolatiedikte, type afwerking en eventuele herstelwerken. 
                    Gemiddeld rekent u voor een volledige gevelrenovatie met isolatie tussen €80 en €150 per m². 
                    Na een plaatsbezoek geven we u een nauwkeurige offerte op maat.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="border-l-4 border-secondary pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Heb ik een vergunning nodig?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In de meeste gevallen is gevelrenovatie vergunningsvrij, zeker als u de bestaande kleur en uitstraling behoudt. 
                    Bij ingrijpende wijzigingen of beschermde panden kan een vergunning nodig zijn. Wij checken dit voor u en 
                    helpen indien nodig met de aanvraag.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="border-l-4 border-secondary pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Welke isolatiedikte is aan te raden?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Voor optimale energiebesparing adviseren we minimaal 8 tot 10 cm isolatie. Dit hangt af van uw huidige 
                    gevelopbouw en energiedoelstellingen. Dikkere isolatie bespaart meer energie, maar moet wel praktisch 
                    uitvoerbaar zijn rond ramen en dakranden. We bekijken samen wat het beste bij uw situatie past.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="border-l-4 border-secondary pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Kan ik premies krijgen?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ja, voor gevelisolatie zijn er vaak premies beschikbaar via uw gemeente of Vlaanderen. De voorwaarden 
                    en bedragen verschillen per regio en wijzigen regelmatig. We informeren u graag over de actuele 
                    mogelijkheden en helpen waar nodig met de aanvraag.
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
