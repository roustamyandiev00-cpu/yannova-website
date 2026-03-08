"use client";

import Link from "next/link";
import { ArrowLeft, Home, Search, Phone } from "lucide-react";
import { company } from "@/lib/company";

const popularPages = [
    { name: "Ramen & Deuren", href: "/diensten/ramen-deuren" },
    { name: "Gevelrenovatie", href: "/diensten/gevelrenovatie" },
    { name: "Projecten", href: "/projecten" },
    { name: "Contact", href: "/contact" },
];

export default function NotFound() {
    return (
        <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center text-center px-6 py-24 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
            
            <div className="max-w-2xl mx-auto">
                <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Search className="h-10 w-10 text-secondary" />
                    </div>
                </div>
                
                <h1 className="text-8xl sm:text-9xl font-bold tracking-tight text-secondary/20 mb-4">404</h1>
                
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                    Pagina niet gevonden
                </h2>
                
                <p className="text-base sm:text-lg leading-7 text-muted-foreground max-w-md mx-auto mb-8">
                    Oeps! De pagina die u zoekt bestaat niet of is verplaatst. Geen zorgen, we helpen u graag verder.
                </p>

                {/* Popular pages */}
                <div className="mb-10">
                    <p className="text-sm text-muted-foreground mb-4">Populaire pagina's:</p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {popularPages.map((page) => (
                            <Link
                                key={page.href}
                                href={page.href}
                                className="inline-flex items-center gap-2 rounded-lg glass glass-hover px-4 py-2 text-sm font-medium text-white shadow-elegant transition-all hover:scale-105"
                            >
                                {page.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-secondary/90 hover:scale-105 transition-all"
                    >
                        <Home className="w-4 h-4" />
                        Terug naar Home
                    </Link>
                    <a
                        href={company.phoneHref}
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition-all"
                    >
                        <Phone className="w-4 h-4" />
                        Bel ons
                    </a>
                </div>
            </div>
        </div>
    );
}
