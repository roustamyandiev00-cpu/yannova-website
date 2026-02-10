import { getSeoMetadata } from "@/lib/seo-helper";

export async function generateMetadata() {
    return getSeoMetadata('/diensten');
}

import { FadeIn } from "@/components/animations/FadeIn";
import { ServiceCard } from "@/components/ServiceCard";
import { Home, Layers, Hammer, ShieldCheck, Sun, Umbrella } from "lucide-react";
import Image from "next/image";

export default function DienstenPage() {
    const services = [
        {
            title: "Ramen & Deuren",
            description: "Hoogrendementsbeglazing in PVC of Aluminium profielen. Veilig, stijlvol en energiezuinig.",
            link: "/diensten/ramen-deuren",
            icon: <Home className="h-8 w-8" />,
        },
        {
            title: "Gevelrenovatie",
            description: "Crepi of steenstrips met isolatie. Geef uw woning een nieuwe look én een lagere energiefactuur.",
            link: "/diensten/gevelrenovatie",
            icon: <Layers className="h-8 w-8" />,
        },
        {
            title: "Totaalrenovatie",
            description: "Van badkamer tot zolder: wij nemen uw volledige verbouwing in handen van A tot Z.",
            link: "/diensten/renovatie",
            icon: <Hammer className="h-8 w-8" />,
        },
        {
            title: "Dakwerken & Isolatie",
            description: "Isolatie van hellende en platte daken. De snelste weg naar een energiezuinige woning.",
            link: "/diensten/isolatie",
            icon: <ShieldCheck className="h-8 w-8" />,
        },
        {
            title: "Zonnepanelen",
            description: "Wek uw eigen groene stroom op en word onafhankelijk van stijgende energieprijzen.",
            link: "/diensten/zonnepanelen", // Future page
            icon: <Sun className="h-8 w-8" />,
        },
        {
            title: "Vochtbestrijding",
            description: "Definitieve oplossingen voor opstijgend vocht, schimmels en condensatie.",
            link: "/diensten/vochtbestrijding", // Future page
            icon: <Umbrella className="h-8 w-8" />,
        }
    ];

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop"
                        alt="Onze Diensten"
                        fill
                        className="object-cover brightness-[0.4]"
                        priority
                    />
                </div>
                <div className="container mx-auto px-6 text-center">
                    <FadeIn>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-glow">
                            Onze Expertise
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            Een compleet aanbod voor elke renovatie, uitgevoerd met passie en vakmanschap.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <div className="py-24 sm:py-32 container mx-auto px-6 lg:px-8">
                <FadeIn>
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            Waarmee kunnen we u helpen?
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-muted-foreground">
                            Ontdek onze gespecialiseerde diensten. Klik door voor meer informatie over onze werkwijze en de mogelijkheden.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                    {services.map((service, idx) => (
                        <ServiceCard key={service.title} {...service} index={idx} />
                    ))}
                </div>
            </div>

            {/* CTA Bottom */}
            <section className="bg-secondary/10 py-16 border-t border-secondary/20">
                <div className="container mx-auto px-6 text-center">
                    <FadeIn>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Staat uw project er niet tussen?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                            Wij leveren ook maatwerk. Neem contact op om uw specifieke wensen te bespreken.
                        </p>
                        <a href="/contact" className="inline-block rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-secondary/90 transition-all hover:scale-105">
                            Contacteer ons
                        </a>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
