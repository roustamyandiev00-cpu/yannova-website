"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const specializations = [
  {
    title: "Ramen & Deuren Plaatsen",
    description: "Specialist in PVC en aluminium ramen met HR++ of drievoudig beglazing voor maximale energie-efficiëntie. Wij plaatsen ramen en deuren op maat in Zoersel, Antwerpen, Schilde, Brasschaat en omgeving. Gratis opmeting, professioneel advies over het juiste profiel en glassysteem, en nette plaatsing inclusief volledige afwerking. Gemiddeld 30-40% energiebesparing na plaatsing van nieuwe energiezuinige ramen.",
    features: [
      "Gratis opmeting in Zoersel, Antwerpen en 30km omgeving",
      "HR++ en drievoudig glas voor optimale isolatie",
      "Inclusief volledige afwerking en premie-advies Mijn VerbouwPremie"
    ],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop",
    link: "/diensten/ramen-deuren",
  },
  {
    title: "Gevelrenovatie & Crepi",
    description: "Professionele gevelisolatie met hoogwaardige crepi-afwerking voor een energiezuinige woning. Wij verbeteren uw EPC-label met gemiddeld 2 tot 3 labels door isolatie van de buitenmuur. Volledige gevelrenovatie in kleur naar keuze, inclusief herstel van scheuren, vochtproblemen en drooglegging indien nodig. Ideaal voor woningen in Zoersel, Antwerpen en omliggende gemeenten.",
    features: [
      "EPC-verbetering gemiddeld 2-3 labels voor hogere woningwaarde",
      "Professionele drooglegging bij vochtproblemen",
      "10 jaar garantie op crepi-afwerking en isolatiewerken"
    ],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop",
    link: "/diensten/gevelrenovatie",
  },
  {
    title: "Totaalrenovatie & Verbouwing",
    description: "Volledige renovatie van uw woning met één aanspreekpunt van A tot Z. Van nieuwe ramen en gevelisolatie tot badkamer, keuken en binnenafwerking. Wij begeleiden uw totaalrenovatie in Zoersel, Antwerpen en regio met een vast projectteam, duidelijke planning en transparante communicatie. Geen onderaannemers, alles uit eigen hand voor gegarandeerde kwaliteit.",
    features: [
      "Eén vaste projectleider van start tot oplevering",
      "Eigen ploeg vakmensen, geen onderaannemers",
      "Duidelijke offerte vooraf, geen verrassingen achteraf"
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    link: "/diensten/renovatie",
  }
]

export function Specializations() {
  return (
    <section className="py-20 sm:py-28 bg-linear-to-b from-background via-background to-[#0d1117] relative overflow-hidden" id="diensten">
      {/* Background decorative elements */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at top, rgba(255, 107, 0, 0.08), transparent 60%)",
        }}
      />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <span className="text-secondary font-semibold tracking-wide uppercase text-sm">Onze Diensten</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Ramen plaatsen, gevelrenovatie en totaalrenovatie in{" "}
              <span className="bg-linear-to-r from-secondary via-orange-400 to-secondary bg-clip-text text-transparent">
                Zoersel, Antwerpen en omgeving
              </span>
            </h2>
            <p className="text-lg leading-8 text-gray-300">
              Meer dan 200 projecten gerealiseerd in Zoersel, Schilde, Brasschaat, Antwerpen en regio. 
              Gratis opmeting, duidelijke offerte binnen 24u, professionele plaatsing door eigen vakmensen.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-20 lg:space-y-32">
          {specializations.map((spec, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={spec.title} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
                {/* Image Section */}
                <FadeIn 
                  direction={isEven ? "right" : "left"} 
                  className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-elegant-lg group">
                    <Image
                      src={spec.image}
                      alt={spec.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </FadeIn>

                {/* Text Section */}
                <FadeIn 
                  direction={isEven ? "left" : "right"} 
                  delay={0.2}
                  className={`flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                    {spec.title}
                  </h3>
                  <p className="text-base text-gray-300 mb-6 leading-relaxed">
                    {spec.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {spec.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-gray-200 text-sm sm:text-base leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <Link
                      href={spec.link}
                      className="inline-flex items-center gap-2 text-base font-semibold text-white bg-linear-to-r from-secondary/20 to-secondary/10 px-6 py-3 rounded-xl hover:from-secondary hover:to-orange-600 transition-all duration-300 group shadow-elegant hover:scale-105"
                    >
                      Meer info
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
