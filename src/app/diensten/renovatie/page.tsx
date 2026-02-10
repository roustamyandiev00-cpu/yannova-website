import { getSeoMetadata } from '@/lib/seo-helper';

export async function generateMetadata() {
    return getSeoMetadata('/diensten/renovatie');
}

import { FadeIn } from "@/components/animations/FadeIn";
import { Hammer, Ruler, Lightbulb, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function RenovationPage() {
    const benefits = [
        {
            title: "Totaalprojecten",
            description: "Van afbraak tot de laatste lik verf: wij coördineren alles. U heeft slechts één aanspreekpunt.",
            icon: Hammer,
        },
        {
            title: "Budgetbeheersing",
            description: "Duidelijke offertes en transparante communicatie zorgen ervoor dat u niet voor verrassingen komt te staan.",
            icon: Ruler,
        },
        {
            title: "Slimme Oplossingen",
            description: "Wij denken mee over indeling, lichtinval en technieken om het meeste uit uw ruimte te halen.",
            icon: Lightbulb,
        },
        {
            title: "Strakke Planning",
            description: "Wij respecteren de deadlines zodat u zo snel mogelijk kunt genieten van uw vernieuwde woning.",
            icon: Clock,
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="https://images.unsplash.com/photo-1574359411659-15573a21bc2c?q=80&w=2670&auto=format&fit=crop"
                        alt="Totaalrenovatie Interieur"
                        fill
                        className="object-cover brightness-[0.4]"
                        priority
                    />
                </div>
                <div className="container mx-auto px-6 text-center">
                    <FadeIn>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-glow">
                            Totaalrenovatie
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            Van badkamer tot zolder, wij realiseren uw droomwoning van A tot Z.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-6 container mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold mb-6 text-foreground">
                            Zorgeloos <span className="text-secondary">verbouwen.</span>
                        </h2>
                        <div className="space-y-6 text-muted-foreground text-lg">
                            <p>
                                Een renovatie kan stressvol zijn, maar dat hoeft niet. Bij Yannova nemen we de volledige coördinatie op ons. Wij plannen de elektricien, loodgieter, stukadoor en schilder naadloos op elkaar in.
                            </p>
                            <p>
                                Of u nu een verouderde badkamer wilt moderniseren, een zolder wilt ombouwen tot slaapkamer of een complete woningstrip wenst: wij hebben de ervaring en het team om dit tot een goed einde te brengen.
                            </p>
                        </div>
                        <div className="mt-8 flex gap-4">
                            <Link href="/contact" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:scale-105">
                                Besprek uw Project
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
