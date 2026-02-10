"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-background">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 -z-10 h-full w-full object-cover bg-gradient-to-r from-background via-background/90 to-transparent">
                {/* Using a high-quality renovation image from Unsplash */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <FadeIn delay={0.1}>
                        <div className="hidden sm:mb-10 sm:flex">
                            <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-300 ring-1 ring-white/10 hover:ring-secondary/50 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10">
                                Ontdek onze nieuwe premiegids.{' '}
                                <Link href="/premie-gids" className="font-semibold text-secondary hover:text-secondary-foreground">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    Lees meer <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-balance">
                            Uw specialist voor <span className="text-secondary text-glow">ramen, deuren</span> en renovatie
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            Yannova Bouw is uw betrouwbare aannemer voor ramen en deuren, gevelisolatie, crepi en totaalrenovatie in Zoersel, Antwerpen, Mechelen en omgeving. Met meer dan 15 jaar ervaring leveren wij vakmanschap waar u op kunt rekenen.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Link
                                href="/contact"
                                className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-all flex items-center gap-2 group"
                            >
                                Gratis Offerte Aanvragen
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link href="/projecten" className="text-sm font-semibold leading-6 text-foreground hover:text-secondary transition-colors group flex items-center gap-1">
                                Bekijk onze projecten <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.5}>
                        <div className="mt-10 grid grid-cols-1 gap-y-4 sm:grid-cols-2 text-sm leading-6 text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-secondary" />
                                <span>15+ Jaar Ervaring</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-secondary" />
                                <span>Gratis Opmeting & Advies</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-secondary" />
                                <span>Eén Aanspreekpunt</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-secondary" />
                                <span>Hulp bij Premie-aanvraag</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
