"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const specializations = [
  {
    title: "Ramen & Deuren",
    description: "PVC en aluminium ramen met HR++ of drievoudig beglazing. We meten gratis op, adviseren het juiste profiel voor uw situatie, en plaatsen netjes inclusief afwerking. Gemiddeld 30% energiebesparing na plaatsing.",
    features: [
      "Gratis opmeting in Zoersel en regio Antwerpen",
      "HR++ en drievoudig beglazing beschikbaar",
      "Inclusief afwerking en premie-advies"
    ],
    image: "https://images.unsplash.com/photo-1506377264883-9cd3ef4e5ee5?q=80&w=1600&auto=format&fit=crop",
    link: "/diensten/ramen-deuren",
  },
  {
    title: "Gevelrenovatie & Crepi",
    description: "Gevelisolatie met crepi-afwerking. We verbeteren uw EPC met gemiddeld 2 labels. Volledige afwerking in kleur naar keuze, inclusief herstellingen van scheuren en vochtproblemen.",
    features: [
      "EPC-verbetering gemiddeld 2 labels",
      "Drooglegging bij vochtproblemen",
      "10 jaar garantie op afwerking"
    ],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    link: "/diensten/gevelrenovatie",
  },
  {
    title: "Totaalrenovatie",
    description: "Volledige renovatie met één aanspreekpunt. Van ramen en isolatie tot badkamer en keuken. U krijgt een vast projectteam, duidelijke planning, en nette werf.",
    features: [
      "Eén projectleider van start tot oplevering",
      "Vaste ploeg, geen onderaannemers",
      "Duidelijke offerte, geen verrassingen"
    ],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1600&auto=format&fit=crop",
    link: "/diensten/renovatie",
  }
];

export function Specializations() {
  return (
    <section className="py-20 sm:py-28 bg-background relative" id="diensten">
      <div className="container mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-24">
            <h2 className="text-secondary font-semibold tracking-wide uppercase text-sm">Onze Diensten</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ramen, deuren en renovatie in Zoersel en omgeving
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Meer dan 200 projecten gerealiseerd. Gratis opmeting, duidelijke offerte, nette plaatsing.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-24 lg:space-y-32">
          {specializations.map((spec, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={spec.title} 
                className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Section */}
                <FadeIn 
                  direction={isEven ? "right" : "left"} 
                  className="w-full lg:w-1/2"
                >
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl bg-secondary/10">
                    <Image
                      src={spec.image}
                      alt={spec.title}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
                  </div>
                </FadeIn>

                {/* Text Section */}
                <FadeIn 
                  direction={isEven ? "left" : "right"} 
                  delay={0.2}
                  className="w-full lg:w-1/2 flex flex-col justify-center"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    {spec.title}
                  </h3>
                  <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                    {spec.description}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {spec.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mr-3" />
                        <span className="text-gray-300 leading-6">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <Link
                      href={spec.link}
                      className="inline-flex items-center text-sm font-semibold text-white bg-secondary/10 px-5 py-3 rounded-md hover:bg-secondary hover:text-white transition-colors border border-secondary/20 hover:border-secondary group"
                    >
                      Bekijk {spec.title.toLowerCase()}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
