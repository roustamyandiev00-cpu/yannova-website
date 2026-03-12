import { generateSEO } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/breadcrumb-schema';
import { FadeIn } from "@/components/animations/FadeIn";
import { User, Hammer, Lightbulb } from "lucide-react";
import Image from "next/image";

export const metadata = generateSEO({
  title: "Over Ons - Renovatiebedrijf in Antwerpen",
  description: "Yannova is een ervaren renovatiebedrijf in Antwerpen. Meer dan 15 jaar expertise in ramen, deuren, gevelrenovatie en totaalrenovaties. Vakmanschap en klantgerichtheid staan centraal.",
  path: "/over-ons",
  keywords: [
    "over yannova",
    "renovatiebedrijf antwerpen",
    "aannemer antwerpen",
    "bouwbedrijf antwerpen",
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Over Ons", url: "/over-ons" },
]);

export default function AboutPage() {
    const values = [
        {
            name: "Vakmanschap",
            description: "Met meer dan 15 jaar ervaring garanderen wij een perfecte afwerking tot in de kleinste details.",
            icon: Hammer,
        },
        {
            name: "Innovatie",
            description: "Wij werken met de nieuwste materialen en technieken voor maximale isolatie en duurzaamheid.",
            icon: Lightbulb,
        },
        {
            name: "Klantgericht",
            description: "Uw wens staat centraal. Wij luisteren, adviseren en begeleiden u van start tot oplevering.",
            icon: User,
        },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden py-24 sm:py-32">
                <div className="absolute inset-0 -z-10 opacity-20">
                    {/* Placeholder for team/company image */}
                    <Image
                        src="https://images.unsplash.com/photo-1581094794329-cd1361ddee2d?q=80&w=2127&auto=format&fit=crop"
                        alt="Yannova Team"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-background via-background/80 to-background" />
                </div>

                <div className="container mx-auto px-6 lg:px-8 relative">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <FadeIn>
                            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-glow">
                                Over Yannova
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                Wat begon als een passie voor bouwen, is uitgegroeid tot een toonaangevend renovatiebedrijf in de regio Antwerpen.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </div>

            {/* Story Section */}
            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
                        <div className="lg:pr-8 lg:pt-4">
                            <FadeIn>
                                <div className="lg:max-w-lg">
                                    <h2 className="text-base font-semibold leading-7 text-secondary">Ons Verhaal</h2>
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                        Van kleine klus tot totaalproject
                                    </p>
                                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                        Yannova Bouw is opgericht met één duidelijke missie: kwaliteit leveren zonder compromissen. Waar veel aannemers stoppen, gaan wij verder. Wij geloven dat een renovatie meer is dan alleen stenen stapelen; het gaat om het creëren van een thuis.
                                    </p>
                                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                        Vandaag de dag zijn we trots op ons team van gespecialiseerde vakmensen. Wij geloven in de kracht van een integrale aanpak: <strong>één team, één planning</strong>. Of het nu gaat om het plaatsen van ramen, het isoleren van een gevel of een complete woningrenovatie, wij coördineren alles voor een technisch perfect en zorgeloos resultaat.
                                    </p>

                                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                                        {values.map((value) => (
                                            <div key={value.name} className="relative pl-9">
                                                <dt className="inline font-semibold text-foreground">
                                                    <value.icon className="absolute left-1 top-1 h-5 w-5 text-secondary" aria-hidden="true" />
                                                    {value.name}
                                                </dt>{" "}
                                                <dd className="inline">{value.description}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </FadeIn>
                        </div>
                        <FadeIn delay={0.2} className="relative">
                            <div className="aspect-4/5 overflow-hidden rounded-2xl bg-white/5 shadow-2xl ring-1 ring-white/10 lg:aspect-3/4 relative">
                                {/* Placeholder image */}
                                <Image
                                    src="https://images.unsplash.com/photo-1507208773393-402a1789dcae?q=80&w=2187&auto=format&fit=crop"
                                    alt="Onze vakmensen aan het werk"
                                    fill
                                    className="object-cover transition-transform hover:scale-105 duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CTA Section Small */}
            <section className="bg-white/5 py-16 text-center border-t border-white/5">
                <div className="container mx-auto px-6">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-foreground">Klaar om samen te werken?</h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                            Wij komen graag bij u langs voor een kennismaking en een vrijblijvende opmeting.
                        </p>
                        <div className="mt-8">
                            <a href="/contact" className="inline-block rounded-full bg-secondary px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-secondary/90 transition-all transform hover:scale-105">
                                Maak een afspraak
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
        </>
    );
}
