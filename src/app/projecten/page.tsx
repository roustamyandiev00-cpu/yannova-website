import { ProjectGallery } from "@/components/ProjectGallery";
import { prisma } from "@/lib/prisma";
import { getSeoMetadata } from "@/lib/seo-helper";
import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export async function generateMetadata() {
  return getSeoMetadata('/projecten');
}

export const dynamic = 'force-dynamic';

export default async function ProjectenPage() {
  const projects = await prisma.project.findMany({
    where: {
      published: true,
    },
    select: {
      id: true,
      title: true,
      description: true,
      category: true,
      imageUrl: true,
      location: true,
      material: true,
      year: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  // Haal unieke categorieën op
  const categories = [...new Set(projects.map(p => p.category))];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1486406149905-6c6d4e0dd99e?q=80&w=2670&auto=format&fit=crop"
            alt="Onze Projecten"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Onze <span className="text-secondary">Realisaties</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Van ramen en deuren tot complete gevelrenovaties. Ontdek hoe wij woningen transformeren met vakmanschap en oog voor detail.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0f1115] border-b border-white/5 py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <FadeIn delay={0.1}>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold text-secondary">{projects.length}+</span>
                <span className="text-sm text-gray-400 mt-1">Projecten gerealiseerd</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold text-secondary">15+</span>
                <span className="text-sm text-gray-400 mt-1">Jaar ervaring</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold text-secondary">100%</span>
                <span className="text-sm text-gray-400 mt-1">Tevreden klanten</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold text-secondary">30</span>
                <span className="text-sm text-gray-400 mt-1">Jaar garantie</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          {projects.length > 0 ? (
            <ProjectGallery projects={projects} categories={categories} />
          ) : (
            <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Projecten binnenkort beschikbaar</h3>
                <p className="text-gray-400">
                  We werken eraan om onze recente realisaties hier te tonen. Kom snel terug!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Werkwijze Section */}
      <section className="bg-[#0f1115] border-y border-white/5 py-16 sm:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Hoe Wij Werken
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-400">
                Van eerste gesprek tot oplevering: zo pakken wij uw project aan.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Kennismaking", desc: "Gratis adviesgesprek bij u thuis om uw wensen te bespreken." },
              { step: "02", title: "Offerte", desc: "U ontvangt een gedetailleerde offerte met alle specificaties." },
              { step: "03", title: "Uitvoering", desc: "Ons team voert de werken uit met oog voor detail." },
              { step: "04", title: "Oplevering", desc: "Samen controleren we het resultaat en tevredenheid." },
            ].map((item, idx) => (
              <FadeIn key={item.step} delay={0.1 * idx}>
                <div className="relative">
                  <div className="text-5xl font-bold text-secondary/20 absolute -top-4 left-0">{item.step}</div>
                  <div className="pt-8">
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-secondary/20 to-secondary/5 rounded-3xl p-8 md:p-12 text-center border border-secondary/20">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Uw project wordt onze volgende realisatie
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Geïnspireerd door wat u ziet? Neem contact op voor een vrijblijvende offerte en ontdek wat wij voor uw woning kunnen betekenen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary/80 transition-colors"
                >
                  Vraag een offerte aan
                </a>
                <a
                  href="/advies"
                  className="inline-flex items-center justify-center rounded-lg bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                >
                  Gratis adviesgesprek
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
