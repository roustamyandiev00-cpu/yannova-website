import { getSeoMetadata } from '@/lib/seo-helper';

export async function generateMetadata() {
    return getSeoMetadata('/diensten/ramen-deuren');
}

import { FadeIn } from "@/components/animations/FadeIn";
import { CheckCircle2, ShieldCheck, Thermometer, Wind } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WindowsDoorsPage() {
    const benefits = [
        {
            title: "Superieure Isolatie",
            description: "Verlaag uw energiefactuur aanzienlijk met onze hoogrendementsglas en thermisch onderbroken profielen.",
            icon: Thermometer,
        },
        {
            title: "Inbraakveilig",
            description: "Standaard voorzien van SKG** gekeurd veiligheidsbeslag voor maximale gemoedsrust.",
            icon: ShieldCheck,
        },
        {
            title: "Geluidsdempend",
            description: "Houd storende geluiden buiten met onze akoestische beglazing en perfecte afdichting.",
            icon: Wind,
        },
        {
            title: "Onderhoudsvriendelijk",
            description: "Of u nu kiest voor PVC of Aluminium, onze ramen vereisen minimaal onderhoud en zijn kleurvast.",
            icon: CheckCircle2,
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
                        alt="Moderne ramen en deuren"
                        fill
                        className="object-cover brightness-[0.4]"
                        priority
                    />
                </div>
                <div className="container mx-auto px-6 text-center">
                    <FadeIn>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-glow">
                            Ramen & Deuren
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            De perfecte combinatie van esthetiek, veiligheid en energiezuinigheid voor uw woning.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-6 container mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold mb-6 text-foreground">
                            PVC of Aluminium? <span className="text-secondary">De keuze is aan u.</span>
                        </h2>
                        <div className="space-y-6 text-muted-foreground text-lg">
                            <p>
                                Bij Yannova bieden we enkel topkwaliteit. Of u nu de strakke, moderne look van <strong>aluminium</strong> wenst of de uitstekende isolatiewaarde en warme uitstraling van <strong>PVC</strong>, wij hebben de oplossing.
                            </p>
                            <p>
                                Al onze ramen en deuren worden op maat gemaakt en vakkundig geplaatst door onze eigen experts. Wij zorgen voor een naadloze afwerking, zowel binnen als buiten.
                            </p>
                        </div>
                        <div className="mt-8 flex gap-4">
                            <Link href="/contact" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:scale-105">
                                Gratis Offerte
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

            {/* Gallery / CTA Strip */}
            <section className="py-16 bg-muted/20 border-y border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-foreground">Klaar voor een upgrade?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        Ontdek hoeveel u kunt besparen op uw energiefactuur met onze hoogrendementsbeglazing.
                    </p>
                    <Link href="/contact" className="text-secondary font-bold hover:underline text-lg">
                        Neem contact op voor een vrijblijvend adviesgesprek &rarr;
                    </Link>
                </div>
            </section>
        </div>
    );
}
