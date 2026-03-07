import { ProjectGallery } from "@/components/ProjectGallery";
import { PhotoGallery } from "@/components/PhotoGallery";
import { prisma } from "@/lib/prisma";
import { getSeoMetadata } from "@/lib/seo-helper";
import { FadeIn } from "@/components/animations/FadeIn";
import { getProjectPhotos } from "@/lib/get-project-photos";
import Image from "next/image";
import { CheckCircle, Award, ArrowRight, Camera, MessageCircle, FileText, Hammer, CheckCircle2 } from "lucide-react";
import Link from "next/link";

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
      featured: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  // Haal foto's op uit de fotos map
  const projectPhotos = getProjectPhotos();

  // Haal unieke categorieën op
  const categories = [...new Set(projects.map(p => p.category))];
  
  // Featured projecten
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section - Cleaner without breadcrumbs */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1486406149905-6c6d4e0dd99e?q=80&w=2670&auto=format&fit=crop"
            alt="Onze Projecten"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-background" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
              <Award className="h-4 w-4 text-secondary" />
              <span className="text-secondary text-sm font-medium">Meer dan {projects.length} tevreden klanten</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Onze <span className="text-secondary">Realisaties</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Van ramen en deuren tot complete gevelrenovaties. Ontdek hoe wij woningen transformeren met vakmanschap en oog voor detail.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Projects - Cleaner cards */}
      {featuredProjects.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="text-secondary text-sm font-semibold tracking-wider uppercase">Uitgelichte Projecten</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
                  Onze Topprojecten
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Een selectie van onze meest trotse realisaties die onze expertise en kwaliteit tonen.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project, idx) => (
                <FadeIn key={project.id} delay={0.1 * idx}>
                  <div className="group relative aspect-3/4 overflow-hidden rounded-3xl bg-gray-100 shadow-2xl hover:shadow-secondary/20 transition-all duration-500">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-secondary text-xs font-bold tracking-wider uppercase">
                          {project.category}
                        </span>
                        {project.location && (
                          <span className="text-gray-300 text-xs">📍 {project.location}</span>
                        )}
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-secondary transition-colors">{project.title}</h3>
                      <p className="text-gray-300 text-sm line-clamp-2 mb-3">{project.description}</p>
                      {project.material && (
                        <span className="text-secondary text-sm font-medium">{project.material}</span>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Photo Gallery Section */}
      {projectPhotos.length > 0 && (
        <section className="py-24 bg-[#0a0b0e]">
          <div className="container mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-5 py-2 mb-4">
                  <Camera className="h-4 w-4 text-secondary" />
                  <span className="text-secondary text-sm font-medium">{projectPhotos.length} foto's</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
                  Project Foto's
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Bekijk onze recente projecten in detail. Klik op een foto voor een grotere weergave.
                </p>
              </div>
            </FadeIn>
            <PhotoGallery photos={projectPhotos} />
          </div>
        </section>
      )}

      {/* Project Gallery */}
      {projects.length > 0 && (
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="text-secondary text-sm font-semibold tracking-wider uppercase">Portfolio</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
                  Alle Projecten
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Bekijk onze volledige portfolio en laat u inspireren door onze realisaties.
                </p>
              </div>
            </FadeIn>
            <ProjectGallery projects={regularProjects.length > 0 ? regularProjects : projects} categories={categories} />
          </div>
        </section>
      )}

      {/* Werkwijze Section - Minimal design */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center mb-20">
              <span className="text-secondary text-sm font-semibold tracking-wider uppercase">Werkwijze</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
                Hoe Wij Werken
              </h2>
              <p className="text-lg text-gray-400">
                Van eerste gesprek tot oplevering: zo pakken wij uw project professioneel aan.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {[
              { 
                step: "01", 
                title: "Kennismaking", 
                desc: "Gratis adviesgesprek bij u thuis om uw wensen en budget te bespreken.",
                icon: MessageCircle
              },
              { 
                step: "02", 
                title: "Offerte", 
                desc: "U ontvangt een gedetailleerde offerte met alle specificaties en prijzen.",
                icon: FileText
              },
              { 
                step: "03", 
                title: "Uitvoering", 
                desc: "Ons ervaren team voert de werken uit met oog voor detail en kwaliteit.",
                icon: Hammer
              },
              { 
                step: "04", 
                title: "Oplevering", 
                desc: "Samen controleren we het resultaat en zorgen voor uw volledige tevredenheid.",
                icon: CheckCircle2
              },
            ].map((item, idx) => (
              <FadeIn key={item.step} delay={0.1 * idx}>
                <div className="relative group text-center">
                  <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary/10 group-hover:bg-secondary/20 transition-all group-hover:scale-110">
                    <item.icon className="w-10 h-10 text-secondary" />
                  </div>
                  <div className="text-6xl font-bold text-secondary/10 absolute top-0 right-0">{item.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Cleaner cards */}
      <section className="py-24 bg-[#0a0b0e]">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-secondary text-sm font-semibold tracking-wider uppercase">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
                Wat Onze Klanten Zeggen
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Lees de ervaringen van tevreden klanten die ons vertrouwden met hun project.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Familie Janssens",
                location: "Zoersel",
                text: "Professioneel werk en uitstekende service. Onze nieuwe ramen en deuren zijn prachtig en perfect geïnstalleerd.",
                rating: 5
              },
              {
                name: "Marc & Linda",
                location: "Antwerpen",
                text: "Van offerte tot oplevering alles perfect geregeld. De gevelrenovatie heeft onze woning volledig getransformeerd.",
                rating: 5
              },
              {
                name: "Peter De Vries",
                location: "Mechelen",
                text: "Vakmanschap van hoge kwaliteit. Het team werkte netjes en efficiënt. Zeer tevreden met het eindresultaat!",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <FadeIn key={idx} delay={0.1 * idx}>
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/[0.07] transition-all">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-secondary text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg mb-8 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <span className="text-secondary font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern gradient without heavy borders */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden bg-linear-to-br from-secondary via-secondary/90 to-secondary/70 rounded-[3rem] p-12 md:p-20 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
            <FadeIn>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Uw Project Wordt Onze<br />Volgende Realisatie
                </h2>
                <p className="text-white/90 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                  Geïnspireerd door wat u ziet? Neem contact op voor een vrijblijvende offerte en ontdek wat wij voor uw woning kunnen betekenen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-secondary shadow-xl hover:bg-gray-50 transition-all hover:scale-105"
                  >
                    Vraag een offerte aan
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/advies"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 transition-all"
                  >
                    Gratis adviesgesprek
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
