import { getSeoMetadata } from '@/lib/seo-helper';

export async function generateMetadata() {
    return getSeoMetadata('/diensten/isolatie');
}

import { FadeIn } from "@/components/animations/FadeIn";
import { Umbrella, Home, Zap, Euro } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function InsulationPage() {
    const benefits = [
        {
            title: "Dakisolatie",
            description: "Warmte stijgt. De meeste energie gaat verloren via het dak. Een goede isolatie verdient zichzelf snel terug.",
            icon: Umbrella,
        },
        {
            title: "Muurisolatie",
            description: "Combineer isolatie met gevelrenovatie voor een superieur resultaat en een aangenaam binnenklimaat.",
            icon: Home,
        },
        {
            title: "Energieprestatie",
            description: "Verbeter uw EPC-score aanzienlijk, wat verplicht is bij verkoop of verhuur en de waarde verhoogt.",
            icon: Zap,
        },
        {
            title: "Premies & Subsidies",
            description: "Wij helpen u de weg te vinden in het landschap van renovatie- en isolatiepremies.",
            icon: Euro,
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2670&auto=format&fit=crop"
                        alt="Dakisolatie"
                        fill
                        className="object-cover brightness-[0.4]"
                        priority
                    />
                </div>
                <div className="container mx-auto px-6 text-center">
                    <FadeIn>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-glow">
                            Isolatiewerken
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            Investeer in comfort en bespaar direct op uw maandelijkse energiekosten.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-6 container mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold mb-6 text-foreground">
                            Warm in de winter, <span className="text-secondary">koel in de zomer.</span>
                        </h2>
                        <div className="space-y-6 text-muted-foreground text-lg">
                            <p>
                                Isoleren is de slimste investering die u kunt doen. Het verhoogt niet alleen uw wooncomfort, maar is ook goed voor de portemonnee en het milieu.
                            </p>
                            <p>
                                Yannova is expert in zowel <strong>hellende als platte daken</strong>, spouwmuren en gevelisolatie. Wij werken enkel met hoogwaardige materialen zoals PIR, minerale wol of ecologische alternatieven, afhankelijk van uw situatie.
                            </p>
                        </div>
                        <div className="mt-8 flex gap-4">
                            <Link href="/contact" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:scale-105">
                                Bereken uw besparing
                            </Link>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {benefits.map((item, idx) => (
                            <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-secondary/50 transition-all duration-300 group">
                                <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <item.icon className="text-secondary h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
