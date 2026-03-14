import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { Umbrella, Home, Zap, Euro, Phone, MessageCircle, CheckCircle2, Shield, Clock, Award, Layers, ArrowRight } from "lucide-react";
import { getSeoMetadata } from "@/lib/seo-helper";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";
import { generateFAQSchema, commonFAQs } from "@/lib/faq-schema";
import { company } from "@/lib/company";

export async function generateMetadata() {
  return getSeoMetadata("/diensten/isolatie");
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Diensten", url: "/diensten" },
  { name: "Isolatie", url: "/diensten/isolatie" },
]);

const faqSchema = generateFAQSchema(commonFAQs.isolatie);

export default function InsulationPage() {
  const benefits = [
    {
      title: "Dak- en zolderisolatie",
      description: "Een van de snelste manieren om warmteverlies aan te pakken en uw woning merkbaar comfortabeler te maken.",
      icon: Umbrella,
    },
    {
      title: "Spouw- en muurisolatie",
      description: "Interessant voor woningen waar de buitenmuren nog veel warmte laten ontsnappen.",
      icon: Home,
    },
    {
      title: "Sterkere buitenschil",
      description: "Combineer isolatie slim met ramen of gevelwerken voor een beter totaalresultaat.",
      icon: Layers,
    },
    {
      title: "Lagere energiefactuur",
      description: "Goede isolatie helpt rechtstreeks bij EPC, comfort en structurele besparing.",
      icon: Zap,
    },
    {
      title: "Premiebegeleiding",
      description: "We helpen u praktisch vooruit met de juiste info voor premies en volgende stappen.",
      icon: Euro,
    },
  ];

  const services = [
    {
      title: "Dak- en zolderisolatie",
      description: "Warmte stijgt. Daarom is dakisolatie vaak de eerste logische stap bij woningen met een verouderde buitenschil. We bekijken of isolatie via het dak, de zoldervloer of een combinatie het meeste rendement oplevert.",
      features: ["Geschikt voor hellende en platte daken", "Opbouw afgestemd op bestaande dakstructuur", "Sterke eerste stap voor EPC en comfort"]
    },
    {
      title: "Spouwmuurisolatie",
      description: "Bij woningen met een bruikbare spouw kan muurisolatie een snelle en efficiënte oplossing zijn. Het is een interessante ingreep wanneer u zonder zware breekwerken warmteverlies via de gevel wilt beperken.",
      features: ["Beperkte ingreep met snelle uitvoering", "Minder tocht en koudestraling langs buitenmuren", "Interessant bij bestaande woningen in Antwerpen en rand"]
    },
    {
      title: "Buitengevelisolatie",
      description: "Wilt u tegelijk isoleren en de uitstraling van uw woning vernieuwen? Dan is buitengevelisolatie vaak de sterkste keuze. We stemmen dit af op crepi, steenstrips of andere gevelafwerking.",
      features: ["Logische combinatie met gevelrenovatie", "Afstemming met ramen, dorpels en dakdetails", "Sterke upgrade voor comfort, look en woningwaarde"]
    },
    {
      title: "Vloer- en kelderisolatie",
      description: "Koude vloeren voelen niet alleen onaangenaam aan, ze zorgen ook voor onnodig warmteverlies. Wij bekijken of isolatie via vloer, kelderplafond of kruipruimte in uw situatie de juiste aanpak is.",
      features: ["Meer comfort in leefruimtes", "Geschikt voor bestaande woningen", "Vochtbestendige oplossingen waar nodig"]
    }
  ];

  const situations = [
    {
      title: "U betaalt te veel voor verwarming",
      description: "Een hoge energiefactuur is vaak een signaal dat de buitenschil nog te veel warmte verliest via dak, muren of vloer.",
    },
    {
      title: "U voelt tocht of koude zones",
      description: "Koude vloeren, trekkende ruimtes en temperatuurschommelingen wijzen vaak op een woning die technisch niet goed afgesloten is.",
    },
    {
      title: "U plant toch al renovatiewerken",
      description: "Wie isolatie combineert met ramen, gevelrenovatie of een bredere renovatiefase vermijdt dubbel werk en wint in planning.",
    },
    {
      title: "U wilt uw EPC verbeteren",
      description: "Gerichte isolatiewerken maken een woning aantrekkelijker, comfortabeler en vaak ook sterker op lange termijn.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Plaatsbezoek en analyse",
      description: "We bekijken waar uw woning warmte verliest en welke isolatieopbouw technisch het meest logisch is.",
    },
    {
      step: "2",
      title: "Advies en offerte",
      description: "U krijgt een duidelijke offerte met prioriteiten, mogelijke combinaties en aandachtspunten voor premies en planning.",
    },
    {
      step: "3",
      title: "Uitvoering met oog voor detail",
      description: "We voeren de isolatiewerken netjes uit en houden rekening met aansluitingen op gevel, ramen, vloer en dak.",
    },
    {
      step: "4",
      title: "Oplevering en volgende stappen",
      description: "Na afloop overlopen we het resultaat en adviseren we, indien relevant, welke logische volgende fase nog interessant is.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Technisch advies",
      description: "Geen standaardverhaal, maar advies dat vertrekt van uw woning en de staat van de buitenschil."
    },
    {
      icon: Award,
      title: "Slim combineren",
      description: "We bekijken isolatie in samenhang met gevelrenovatie, ramen en bredere renovatiewerken."
    },
    {
      icon: Clock,
      title: "Duidelijke planning",
      description: "U weet vooraf welke werken zinvol zijn, hoe we ze aanpakken en waar de prioriteiten liggen."
    },
    {
      icon: CheckCircle2,
      title: "Lokale aanpak",
      description: "Actief in Zoersel, Antwerpen en omliggende gemeenten met focus op renovaties die echt renderen."
    }
  ];

  const relatedLinks = [
    {
      href: "/diensten/gevelrenovatie",
      title: "Gevelrenovatie en buitengevelisolatie",
      description: "Interessant wanneer isolatie best gecombineerd wordt met een nieuwe gevelafwerking.",
    },
    {
      href: "/premie-gids",
      title: "Premie-gids voor renovatie en isolatie",
      description: "Praktische info om premies en voorwaarden sneller in kaart te brengen.",
    },
    {
      href: "/blog/energie-renovatie-premie-belgie",
      title: "Welke werken leveren het meeste op?",
      description: "Lees hoe u buitenschil, comfort en budget slimmer op elkaar afstemt.",
    },
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
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2670&auto=format&fit=crop"
            alt="Isolatiewerken in Antwerpen voor dak, vloer en gevel"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Isolatiewerken in Antwerpen voor dak, muur en vloer
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Minder warmteverlies, meer wooncomfort en een sterkere buitenschil voor woningen in Zoersel, Antwerpen en omgeving.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Slim isoleren, <span className="text-secondary">zonder losse ingrepen.</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                Isolatie is vaak de snelste weg naar een lagere energiefactuur, maar alleen als u de juiste zone aanpakt. Daarom bekijken we niet alleen het materiaal, maar de volledige woning: dak, buitenmuren, vloer, ramen en aansluitingen.
              </p>
              <p>
                Yannova voert isolatiewerken uit in Zoersel, Antwerpen en omliggende gemeenten. We adviseren wanneer dakisolatie, spouwmuurisolatie, buitengevelisolatie of vloerisolatie het meeste effect geeft en wanneer een combinatie met <Link href="/diensten/gevelrenovatie" className="text-secondary hover:underline">gevelrenovatie</Link> of <Link href="/diensten/ramen-deuren" className="text-secondary hover:underline">nieuwe ramen</Link> slimmer is.
              </p>
              <p>
                Wie ook premies of een betere EPC-score wil meenemen, kan zich vooraf verdiepen in onze <Link href="/premie-gids" className="text-secondary hover:underline">premie-gids</Link>. Tijdens het traject helpen we u praktisch vooruit met duidelijke keuzes en een realistische offerte.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg">
                Vraag isolatieadvies
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
          <h2 className="text-3xl font-bold mb-6 text-foreground">Isolatieproject plannen in Antwerpen of regio Zoersel?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We maken een voorstel op maat van uw woning, uw budget en de volgorde van werken die het meeste rendement oplevert.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-white hover:bg-secondary/90 transition-colors">
              Contacteer ons
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
            Onze <span className="text-secondary">isolatiediensten</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Van dak tot vloer bekijken we welke aanpak technisch klopt voor uw woning en uw renovatieplannen.
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
              Wanneer loont <span className="text-secondary">isoleren</span> het meest?
            </h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              De beste isolatie-ingreep is niet altijd de grootste ingreep. Vaak zit de winst in de juiste volgorde en de juiste combinatie van werken.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {situations.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.08}>
                <div className="h-full rounded-3xl border border-white/10 bg-background/70 p-6">
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-4 text-center text-foreground">
            Onze <span className="text-secondary">aanpak</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Een goede isolatie-offerte vertrekt van analyse, niet van nattevingerwerk. Daarom werken we stap voor stap.
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {process.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.1}>
              <div className="h-full rounded-3xl border border-white/10 bg-muted/10 p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4 text-center text-foreground">
              Waarom kiezen voor <span className="text-secondary">{company.name}?</span>
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Niet alleen voor isolatiemateriaal, maar voor een aanpak die technisch klopt en logisch aansluit op uw renovatie.
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
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-4 text-center text-foreground">
            Verdiep u verder in <span className="text-secondary">isolatie en renovatie</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Deze pagina werkt het best samen met inhoud over gevel, premies en de slimste renovatievolgorde.
          </p>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-3">
          {relatedLinks.map((item, index) => (
            <FadeIn key={item.href} delay={index * 0.08}>
              <Link
                href={item.href}
                className="group block h-full rounded-3xl border border-white/10 bg-muted/10 p-6 transition-colors hover:border-secondary/40 hover:bg-secondary/5"
              >
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-secondary">
                  Meer lezen
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/20 border-y border-white/5">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-foreground">
              Veelgestelde vragen over <span className="text-secondary">isolatiewerken</span>
            </h2>
            <p className="mt-4 text-center text-muted-foreground">
              Een paar praktische vragen die vaak terugkomen bij eigenaars in Antwerpen en regio Zoersel.
            </p>
          </FadeIn>

          <div className="mt-12 space-y-4">
            {commonFAQs.isolatie.map((faq, index) => (
              <FadeIn key={faq.question} delay={index * 0.06}>
                <div className="rounded-2xl border border-white/10 bg-background/80 p-6">
                  <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/10 border-y border-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Klaar om te isoleren?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Vraag vrijblijvend advies en ontdek welke isolatiewerken voor uw woning in Antwerpen of regio Zoersel het meeste effect geven.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center rounded-lg bg-secondary px-8 py-4 text-base font-semibold text-white hover:bg-secondary/90 transition-colors shadow-lg">
                Gratis isolatieadvies
              </Link>
              <a href={company.phoneHref} className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-base font-medium text-white hover:bg-white/5 transition-colors">
                <Phone className="h-5 w-5" />
                {company.phoneDisplay}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
      </div>
    </>
  );
}
