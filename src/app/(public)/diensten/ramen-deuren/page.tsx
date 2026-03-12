import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { CheckCircle2, ShieldCheck, Thermometer, Wind, Phone, MessageCircle, Shield, Clock, Award } from "lucide-react";
import { generateSEO } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";
import { generateFAQSchema, commonFAQs } from "@/lib/faq-schema";
import { company } from "@/lib/company";
import { ServiceSeoSection } from "@/components/ServiceSeoSection";

export const metadata = generateSEO({
  title: "Ramen & Deuren plaatsen in Antwerpen - PVC en Aluminium",
  description: "Professionele plaatsing van PVC en aluminium ramen & deuren met hoogrendementsbeglazing. Gratis opmeting, 10 jaar garantie en vakkundige montage in Antwerpen en omgeving.",
  path: "/diensten/ramen-deuren",
  keywords: [
    "ramen deuren plaatsen",
    "pvc ramen antwerpen",
    "aluminium ramen antwerpen",
    "schuiframen",
    "hoogrendementsbeglazing",
    "ramen op maat",
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Diensten", url: "/diensten" },
  { name: "Ramen & Deuren", url: "/diensten/ramen-deuren" },
]);

const faqSchema = generateFAQSchema(commonFAQs.ramen);

export default function WindowsDoorsPage() {
  const benefits = [
    {
      title: "Superieure Isolatie",
      description: "Profielen met tot wel 7 isolatiekamers en triple glas (HR+++) voor een minimale energiefactuur.",
      icon: Thermometer,
    },
    {
      title: "Inbraakveilig",
      description: "Standaard voorzien van SKG-gecertificeerd beslag en meerdere sterke sluitpunten.",
      icon: ShieldCheck,
    },
    {
      title: "Akoestisch Comfort",
      description: "Optimale geluidsdemping door meerkamerprofielen en hoogwaardige EPDM-dichtingen.",
      icon: Wind,
    },
    {
      title: "Perfecte Aansluiting",
      description: "Naadloze integratie met uw (nieuwe) gevelisolatie voor een 100% luchtdicht resultaat.",
      icon: CheckCircle2,
    },
  ];

  const services = [
    {
      title: "PVC Ramen & Deuren",
      description: "De perfecte balans tussen prijs en isolatie. Onze 6- of 7-kamer profielen bieden de beste thermische prestaties in de markt.",
      features: ["U-waardes die voldoen aan passiefhuisnormen", "Verkrijgbaar in strakke staal-look of houtnerf", "Onderhoudsarm en 100% recyclebaar"]
    },
    {
      title: "Aluminium Ramen & Deuren",
      description: "Voor een modern, minimalistisch design met slanke profielen. Onze aluminium systemen zijn thermisch onderbroken en uiterst vormvast.",
      features: ["Grote glaspartijen zonder extra dikke profielen", "Poederlak in elke denkbare RAL-kleur", "Extreem lange levensduur (50+ jaar)"]
    },
    {
      title: "Schuiframen & Vouwwanden",
      description: "Creëer een vloeiende overgang tussen binnen en buiten. Wij plaatsen hef-schuifsystemen die zelfs bij grote afmetingen vederlicht bedienbaar zijn.",
      features: ["Drempelloze 'flat threshold' opties", "Inbraakwerendheid klasse RC2", "Zonwerende of geluidswerende beglazing"]
    },
    {
      title: "Montage & Gevelintegratie",
      description: "De kwaliteit van een raam valt of staat met de plaatsing. Wij zorgen voor een technisch correcte aansluiting op uw isolatieschil.",
      features: ["Luchtdichte montage volgens de regels van de kunst", "Coördinatie met gevelwerken (crepi/steenstrips)", "Nette binnenafwerking met vensterbanken"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "A-merken",
      description: "Wij werken met gerenommeerde fabrikanten voor topkwaliteit"
    },
    {
      icon: Award,
      title: "10 jaar garantie",
      description: "Volledige garantie op profielen, beglazing en plaatsing"
    },
    {
      icon: Clock,
      title: "Snelle levering",
      description: "Korte levertijden en flexibele planning"
    },
    {
      icon: CheckCircle2,
      title: "Eigen montage",
      description: "Vakkundige plaatsing door eigen ervaren vakmensen"
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
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
            alt="Ramen en deuren"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Ramen & deuren op maat</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Professionele plaatsing in PVC of aluminium met oog voor isolatie, veiligheid en afwerking.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              PVC of aluminium? <span className="text-secondary">Wij adviseren wat past bij uw woning.</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                We starten met een opmeting en een technisch advies op maat. Daarna ontvangt u een duidelijke offerte,
                zonder verborgen kosten. U kunt meer lezen over{" "}
                <Link href="/blog/pvc-of-aluminium-ramen" className="text-secondary hover:underline">
                  PVC of aluminium ramen
                </Link>{" "}
                en onze{" "}
                <Link href="/ramen-deuren" className="text-secondary hover:underline">
                  lokale pagina&apos;s voor ramen en deuren
                </Link>.
              </p>
              <p>
                Onze plaatsing gebeurt door eigen vakmensen, met correcte aansluiting en nette afwerking binnen en buiten.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg">
                Vraag uw offerte
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
          <h2 className="text-3xl font-bold mb-6 text-foreground">Klaar voor nieuwe ramen en deuren?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Vraag vrijblijvend advies of een concrete prijsinschatting voor uw project.
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

      <ServiceSeoSection serviceSlug="ramen-deuren" title="Ramen en deuren" />

      <section className="py-20 px-6 container mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-4 text-center text-foreground">
            Onze <span className="text-secondary">ramen & deuren diensten</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Van opmeting tot plaatsing - alles voor uw nieuwe ramen en deuren.
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
              Kwaliteit, service en vakmanschap voor uw ramen en deuren.
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
            <h2 className="text-3xl font-bold mb-6 text-foreground">Nieuwe ramen of deuren nodig?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Vraag een gratis offerte aan en ontdek wat wij voor u kunnen betekenen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center rounded-lg bg-secondary px-8 py-4 text-base font-semibold text-white hover:bg-secondary/90 transition-colors shadow-lg">
                Gratis offerte aanvragen
              </Link>
              <a href={company.phoneHref} className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-base font-medium text-white hover:bg-white/5 transition-colors">
                <Phone className="h-5 w-5" />
                {company.phoneDisplay}
              </a>
            </div>
          </FadeIn>
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
