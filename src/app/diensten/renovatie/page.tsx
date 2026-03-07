import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { Hammer, Ruler, Lightbulb, Clock, Phone, MessageCircle, CheckCircle2, Shield, Award } from "lucide-react";
import { getSeoMetadata } from "@/lib/seo-helper";
import { company } from "@/lib/company";

export async function generateMetadata() {
  return getSeoMetadata("/diensten/renovatie");
}

export default function RenovationPage() {
  const benefits = [
    {
      title: "Totaalcoördinatie",
      description: "Van afbraak tot afwerking met één duidelijke projectverantwoordelijke.",
      icon: Hammer,
    },
    {
      title: "Budgetcontrole",
      description: "Transparante offertes en afspraken zonder onaangename verrassingen.",
      icon: Ruler,
    },
    {
      title: "Slim ontwerp",
      description: "Praktische keuzes voor indeling, licht en materiaalgebruik.",
      icon: Lightbulb,
    },
    {
      title: "Strakke planning",
      description: "Heldere timing en goede opvolging tijdens alle fases van de werken.",
      icon: Clock,
    },
  ];

  const services = [
    {
      title: "Badkamerrenovatie",
      description: "Van klassiek tot modern - wij realiseren uw droombadkamer. Inclusief loodgieterij, tegelwerk, sanitair en verlichting.",
      features: ["Volledige coördinatie", "Keuze uit topmerken", "Waterdichte afwerking"]
    },
    {
      title: "Keukenrenovatie",
      description: "Nieuwe keuken plaatsen of bestaande renoveren. Wij zorgen voor elektriciteit, loodgieterij en afwerking rond uw keukenkasten.",
      features: ["Aansluiting toestellen", "Tegelwerk of andere wandafwerking", "Verlichting en stopcontacten"]
    },
    {
      title: "Volledige woningrenovatie",
      description: "Van ruwbouw tot sleutel-op-de-deur. Wij coördineren alle disciplines en zorgen voor een vlot verloop van begin tot eind.",
      features: ["Eén aanspreekpunt", "Alle disciplines onder één dak", "Duidelijke planning en opvolging"]
    },
    {
      title: "Dakwerken & zolderinrichting",
      description: "Dak vernieuwen, isoleren of zolder omvormen tot leefruimte. Wij verzorgen dakbedekking, isolatie, ramen en afwerking.",
      features: ["Platte en hellende daken", "Dakvensters en velux", "Volledige zolderafwerking"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Eén aanspreekpunt",
      description: "Alle disciplines gecoördineerd door één ervaren projectleider"
    },
    {
      icon: Award,
      title: "Transparante prijzen",
      description: "Duidelijke offerte zonder verborgen kosten"
    },
    {
      icon: Clock,
      title: "Realistische planning",
      description: "Haalbare deadlines die we ook effectief nakomen"
    },
    {
      icon: CheckCircle2,
      title: "Kwaliteitsgarantie",
      description: "Garantie op alle uitgevoerde werken en materialen"
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="relative h-[56vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1574359411659-15573a21bc2c?q=80&w=2670&auto=format&fit=crop"
            alt="Totaalrenovatie"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Totaalrenovatie</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Van badkamer tot volledige woningrenovatie, met duidelijke planning en professionele uitvoering.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Zorgeloos verbouwen met <span className="text-secondary">één partner.</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                Renovaties vragen opvolging, timing en technische kennis. Wij nemen die coördinatie op zodat u een
                duidelijk traject krijgt van start tot oplevering.
              </p>
              <p>
                U krijgt vaste contactpunten, duidelijke beslismomenten en een team dat kwaliteit en netheid bewaakt
                tijdens de volledige uitvoering.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg">
                Bespreek uw project
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
          <h2 className="text-3xl font-bold mb-6 text-foreground">Klaar om uw renovatie te starten?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Plan een vrijblijvend gesprek en ontvang een realistisch voorstel voor uw woning.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-white hover:bg-secondary/90 transition-colors">
              Vraag een afspraak
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
            Onze <span className="text-secondary">renovatiediensten</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Van kleine aanpassingen tot volledige transformaties - wij regelen het voor u.
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
              Zorgeloos renoveren met een betrouwbare partner aan uw zijde.
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
            <h2 className="text-3xl font-bold mb-6 text-foreground">Start uw renovatieproject</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Bespreek uw plannen met ons en ontvang een helder voorstel op maat van uw wensen en budget.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center rounded-lg bg-secondary px-8 py-4 text-base font-semibold text-white hover:bg-secondary/90 transition-colors shadow-lg">
                Plan een gesprek
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
