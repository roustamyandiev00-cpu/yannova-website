import { Hero } from "@/components/Hero";
import { prisma } from "@/lib/prisma";
import { ServiceCard } from "@/components/ServiceCard";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { FAQSection } from "@/components/FAQSection";
import { Home, Layers, Hammer, ShieldCheck, CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { getSeoMetadata } from "@/lib/seo-helper";

export async function generateMetadata() {
  return getSeoMetadata('/');
}

export default async function HomePage() {
  const services = [
    {
      title: "Ramen & Deuren",
      description: "Hoogwaardige PVC en Aluminium ramen en deuren. Energiezuinig, veilig en stijlvol voor uw woning.",
      link: "/diensten/ramen-deuren",
      icon: <Home className="h-6 w-6" />,
    },
    {
      title: "Gevelrenovatie & Crepi",
      description: "Geef uw woning een nieuwe uitstraling en betere isolatie met onze professionele gevelwerken en crepi.",
      link: "/diensten/gevelrenovatie",
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: "Totaalrenovatie",
      description: "Van badkamer tot zolder: wij verzorgen uw volledige renovatieproject van A tot Z met één aanspreekpunt.",
      link: "/diensten/renovatie",
      icon: <Hammer className="h-6 w-6" />,
    },
    {
      title: "Isolatiewerken",
      description: "Verlaag uw energiefactuur en verhoog uw wooncomfort met onze isolatie-oplossingen voor dak en gevel.",
      link: "/diensten/isolatie",
      icon: <ShieldCheck className="h-6 w-6" />,
    },
  ];

  /* Why Choose Us features */
  const features = [
    { name: "Lokale Experts", description: "Gevestigd in Zoersel, actief in heel provincie Antwerpen.", icon: CheckCircle },
    { name: "Persoonlijke Aanpak", description: "Eén aanspreekpunt voor al uw vragen en projectopvolging.", icon: CheckCircle },
    { name: "Kwaliteitsgarantie", description: "30 jaar garantie op al onze materialen en uitvoering.", icon: CheckCircle },
    { name: "Premie Advies", description: "Gratis hulp bij het aanvragen van uw renovatiepremies.", icon: CheckCircle },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      <Stats />

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-background relative overflow-hidden" id="diensten">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Onze Diensten
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-400">
                Wij bieden een compleet pakket aan diensten voor uw woning, altijd met focus op kwaliteit en duurzaamheid.
              </p>
            </div>
          </FadeIn>

          <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-4">
              {services.map((service, idx) => (
                <ServiceCard key={service.title} {...service} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white/5 py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 mix-blend-soft-light"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl lg:text-center">
            <FadeIn>
              <h2 className="text-base font-semibold leading-7 text-secondary">Waarom Yannova?</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-glow">
                Alles wat u nodig heeft voor een zorgeloze renovatie
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Kiezen voor Yannova is kiezen voor gemoedsrust. Wij nemen de stress van uw schouders en leveren een perfect afgewerkt resultaat.
              </p>
            </FadeIn>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature, featureIdx) => (
                <FadeIn key={feature.name} delay={0.1 * featureIdx} className="relative pl-20">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 shadow-lg ring-1 ring-secondary/20 shadow-secondary/10 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-7 w-7 text-secondary" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
                </FadeIn>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Testimonials testimonials={await prisma.testimonial.findMany({
        where: { approved: true },
        take: 3,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          name: true,
          company: true,
          text: true,
          rating: true
        }
      })} />

      <FAQSection />

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10 opacity-30 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent -z-10" />

        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <FadeIn direction="right">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-glow">
                  Klaar voor uw droomproject?
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                  Neem vandaag nog contact op voor een vrijblijvende offerte of een adviesgesprek aan huis. Wij helpen u graag verder met uw renovatieplannen.
                </p>
                <div className="mt-6 flex max-w-md gap-x-4">
                  <a href="/contact" className="flex-none rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-secondary/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-all transform hover:scale-105">
                    Contacteer ons
                  </a>
                  <a href="/advies" className="flex-none rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all transform hover:scale-105 backdrop-blur-sm">
                    Vraag advies
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <div className="flex flex-col items-start glass p-6 rounded-xl hover:glass-hover transition-colors shadow-2xl">
                  <div className="rounded-md bg-secondary/20 p-2 ring-1 ring-secondary/40">
                    <ShieldCheck className="h-6 w-6 text-secondary" />
                  </div>
                  <dt className="mt-4 font-semibold text-white">Premie Advies</dt>
                  <dd className="mt-2 leading-7 text-gray-300">Wij begeleiden u bij het aanvragen van renovatie- en energiepremies.</dd>
                </div>
                <div className="flex flex-col items-start glass p-6 rounded-xl hover:glass-hover transition-colors shadow-2xl">
                  <div className="rounded-md bg-secondary/20 p-2 ring-1 ring-secondary/40">
                    <CheckCircle className="h-6 w-6 text-secondary" />
                  </div>
                  <dt className="mt-4 font-semibold text-white">30 Jaar Garantie</dt>
                  <dd className="mt-2 leading-7 text-gray-300">Geniet van gemoedsrust met onze uitgebreide garantie op werken en materialen.</dd>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
