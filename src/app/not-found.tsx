"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center text-center px-6 py-24 bg-background">
            <h1 className="text-9xl font-bold tracking-tight text-secondary/20">404</h1>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl text-glow">
                Pagina niet gevonden
            </h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground max-w-md">
                Oeps, het lijkt erop dat de pagina die u zoekt is verhuisd of niet meer bestaat.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                    href="/"
                    className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary hover:bg-secondary/90 hover:scale-105 transition-all flex items-center gap-2"
                >
                    <ArrowLeft className="w-4 h-4" /> Terug naar Home
                </Link>
            </div>
        </div>
    );
}
