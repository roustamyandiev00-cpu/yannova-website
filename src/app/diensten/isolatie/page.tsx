import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { Umbrella, Home, Zap, Euro, Phone, MessageCircle, CheckCircle2, Shield, Clock, Award } from "lucide-react";
import { getSeoMetadata } from "@/lib/seo-helper";
import { company } from "@/lib/company";

export async function generateMetadata() {
  return getSeoMetadata("/diensten/isolatie");
}

export default function InsulationPage() {
  const benefits = [
    {
      title: "Dakisolatie",
      description: "Beperk warmteverlies via het dak en verhoog comfort in alle seizoenen.",
      icon: Umbrella,
    },
    {
      title: "Gevel- en muurisolatie",
      description: "Combineer isolatie met gevelwerken voor maximaal rendement.",
      icon: Home,
    },
    {
      title: "Betere EPC-score",
      description: "Isolatie helpt rechtstreeks bij de energieprestatie van uw woning.",
      icon: Zap,
    },
    {
      title: "Premiebegeleiding",
      description: "Wij helpen met praktische informatie voor premieaanvragen.",
      icon: Euro,
    },
  ];

  const services = [
    {
      title: "Dakisolatie",
      description: "Het dak is verantwoordelijk voor het grootste warmteverlies in uw woning. Wij isoleren zowel hellende daken als platte daken met de juiste materialen en diktes.",
      features: ["Glaswol, steenwol of PUR", "Tussen of op de spanten", "Platte daken met PIR-isolatie"]
    },
    {
      title: "Spouwmuurisolatie",
      description: "Voor woningen met een spouwmuur bieden we inblaasisolatie aan. Een snelle en effectieve methode om warmteverlies te beperken zonder grote ingrepen.",
      features: ["Snelle uitvoering", "Minimale hinder", "Direct resultaat"]
    },
    {
      title: "Buitengevelisolatie",
      description: "Combineer isolatie met een nieuwe gevelafwerking. Ideaal bij renovatie voor maximale isolatiewaarde en een frisse uitstraling.",
      features: ["EPS of minerale wol", "Crepi of steenstrips afwerking", "Tot 12 cm dikte mogelijk"]
    },
    {
      title: "Vloerisolatie",
      description: "Koude vloeren zijn verleden tijd. We isoleren kruipruimtes, kelders en vloeren voor extra comfort en lagere verwarmingskosten.",
      features: ["PUR-schuim of platen", "Ook voor bestaande vloeren", "Vochtbestendige materialen"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Gecertificeerd",
      description: "Erkend isolatiebedrijf met alle nodige certificaten"
    },
    {
      icon: Award,
      title: "Premie-advies",
      description: "We helpen u met premieaanvragen en administratie"
    },
    {
      icon: Clock,
      title: "Snelle uitvoering",
      description: "Efficiënte planning met minimale hinder"
    },
    {
      icon: CheckCircle2,
      title: "Garantie",
      description: "Volledige garantie op materiaal en vakmanschap"
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="relative h-[56vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2670&auto=format&fit=crop"
            alt="Isolatiewerken"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Isolatiewerken</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Investeer in comfort en verlaag structureel uw energiekosten.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Slim isoleren, <span className="text-secondary">duurzaam besparen.</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                Isolatie is vaak de snelste weg naar een lagere energiefactuur. We bekijken uw woning en adviseren
                welke combinatie van werken het meeste effect oplevert.
              </p>
              <p>
                We werken met kwalitatieve materialen en zorgen voor een correcte plaatsing, zodat de prestaties op
                lange termijn behouden blijven.
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
                  <div className="bg-secondary/10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
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
          <h2 className="text-3xl font-bold mb-6 text-foreground">Isolatieproject plannen?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Wij maken een voorstel op maat van uw woning, budget en energiedoelstellingen.
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
            Van dak tot vloer - wij zorgen voor optimale isolatie in uw hele woning.
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
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
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
              Waarom kiezen voor <span className="text-secondary">{company.name}?</span>
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Professionele isolatie met oog voor detail en duurzaam resultaat.
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

      <section className="py-16 bg-secondary/10 border-y border-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Klaar om te isoleren?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Vraag vrijblijvend advies en ontdek hoeveel u kunt besparen met de juiste isolatie.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center rounded-lg bg-secondary px-8 py-4 text-base font-semibold text-white hover:bg-secondary/90 transition-colors shadow-lg">
                Gratis isolatieadvies
              </Link>
              <a href={company.phoneHref} className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-base font-medium text-white hover:bg-white/5 transition-colors">
                <Phone className="h-5 w-5" />
                {company.phone}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
