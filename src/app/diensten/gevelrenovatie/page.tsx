import { getSeoMetadata } from '@/lib/seo-helper';

export async function generateMetadata() {
    return getSeoMetadata('/diensten/gevelrenovatie');
}

import { FadeIn } from "@/components/animations/FadeIn";
import { PaintBucket, Layers, Sun, Activity } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FacadePage() {
    const benefits = [
        {
            title: "Isolatie & Bescherming",
            description: "Een nieuwe gevelbekleding met isolatie beschermt uw woning tegen vocht en koude, en verhoogt uw wooncomfort.",
            icon: Layers,
        },
        {
            title: "Esthetische Meerwaarde",
            description: "Geef uw woning een compleet nieuwe, moderne uitstraling met crepi of steenstrips in een kleur naar keuze.",
            icon: PaintBucket,
        },
        {
            title: "Energiebesparing",
            description: "Voldoe aan de energienormen en zie uw energiefactuur dalen dankzij hoogwaardige gevelisolatie.",
            icon: Sun,
        },
        {
            title: "Waardevermeerdering",
            description: "Een goed geïsoleerde en afgewerkte gevel verhoogt direct de verkoopwaarde van uw vastgoed.",
            icon: Activity,
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2670&auto=format&fit=crop"
                        alt="Gevelrenovatie Crepi"
                        fill
                        className="object-cover brightness-[0.4]"
                        priority
                    />
                </div>
                <div className="container mx-auto px-6 text-center">
                    <FadeIn>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-glow">
                            Gevelrenovatie & Crepi
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            Transformeer uw woning met een strakke, energiezuinige gevelbekleding.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-6 container mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold mb-6 text-foreground">
                            Een nieuwe look, <span className="text-secondary">een beter klimaat.</span>
                        </h2>
                        <div className="space-y-6 text-muted-foreground text-lg">
                            <p>
                                Gevelrenovatie is meer dan alleen een likje verf. Met <strong>gevelisolatie afgewerkt met crepi (sierpleister)</strong> pakt u twee vliegen in één klap: u wapent uw woning tegen de weergoden én u creëert een moderne, frisse uitstraling.
                            </p>
                            <p>
                                Bij Yannova zijn we gespecialiseerd in diverse afwerkingen, van siliconenharpleister tot steenstrips. Wij zorgen voor een perfecte aansluiting op ramen en deuren en werken elk detail nauwkeurig af.
                            </p>
                        </div>
                        <div className="mt-8 flex gap-4">
                            <Link href="/contact" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:scale-105">
                                Vraag Geveladvies
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
