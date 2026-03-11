import Link from "next/link";
import { ArrowRight, Calculator, Home, Wallet, CheckCircle } from "lucide-react";
import { getSeoMetadata } from '@/lib/seo-helper';

export async function generateMetadata() {
    return getSeoMetadata('/premie-gids');
}

const premies = [
    {
        titel: "Gevelisolatie",
        maxPremie: "€5.000",
        percentage: "30%",
        voorwaarden: [
            "Minimum R-waarde van 3,5 m²K/W",
            "Uitvoering door erkende aannemer",
            "EPC-verbetering van minimum 20 punten"
        ],
        icoon: Home
    },
    {
        titel: "Ramen en Deuren",
        maxPremie: "€3.500",
        percentage: "25%",
        voorwaarden: [
            "U-waarde ramen ≤1,1 W/m²K",
            "U-waarde deuren ≤1,5 W/m²K",
            "Vervanging van minimum 3 ramen"
        ],
        icoon: CheckCircle
    },
    {
        titel: "Dakisolatie",
        maxPremie: "€4.000",
        percentage: "35%",
        voorwaarden: [
            "Minimum R-waarde van 6,0 m²K/W",
            "Isolatie van minimum 50m²",
            "Professionele dampscherm installatie"
        ],
        icoon: Home
    }
];

const inkomensCategorieen = [
    {
        label: "Laag inkomen",
        range: "Tot €35.000 bruto gezinsinkomen",
        bonus: "+50% extra premie",
        kleur: "bg-green-500"
    },
    {
        label: "Midden inkomen",
        range: "€35.000 - €65.000 bruto gezinsinkomen",
        bonus: "Standaard premie",
        kleur: "bg-secondary"
    },
    {
        label: "Hoog inkomen",
        range: "Boven €65.000 bruto gezinsinkomen",
        bonus: "-30% minder premie",
        kleur: "bg-orange-500"
    }
];

export default function PremieGidsPage() {
    return (
        <div className="py-24 sm:py-32 bg-background">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                        Mijn VerbouwPremie 2026
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Ontdek hoeveel premie u kunt krijgen voor uw renovatie.
                        Tot <span className="font-bold text-secondary">€5.000</span> premie mogelijk.
                    </p>
                </div>

                {/* Inkomenscategorieën */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-center mb-8">Kies uw inkomenscategorie</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {inkomensCategorieen.map((cat, idx) => (
                            <div key={idx} className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className={`w-12 h-12 rounded-full ${cat.kleur} flex items-center justify-center mb-4`}>
                                    <Wallet className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{cat.label}</h3>
                                <p className="text-sm text-muted-foreground mb-2">{cat.range}</p>
                                <p className="text-sm font-semibold text-secondary">{cat.bonus}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Premie Overzicht */}
                <div className="mt-20">
                    <h2 className="text-2xl font-bold text-center mb-8">Premie-overzicht per categorie</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {premies.map((premie, idx) => {
                            const Icon = premie.icoon;
                            return (
                                <div key={idx} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                                            <Icon className="h-5 w-5 text-secondary" />
                                        </div>
                                        <h3 className="text-xl font-bold">{premie.titel}</h3>
                                    </div>

                                    <div className="mb-4">
                                        <p className="text-3xl font-bold text-secondary">{premie.maxPremie}</p>
                                        <p className="text-sm text-muted-foreground">maximum premie</p>
                                    </div>

                                    <div className="mb-4">
                                        <p className="text-sm font-semibold">Premiepercentage</p>
                                        <p className="text-lg font-bold">{premie.percentage}</p>
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold mb-2">Voorwaarden:</p>
                                        <ul className="text-sm text-muted-foreground space-y-1">
                                            {premie.voorwaarden.map((v, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                                    <span>{v}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Totaalrenovatie Pakket */}
                <div className="mt-16 rounded-2xl bg-linear-to-br from-secondary/20 to-secondary/5 p-8 border border-secondary/20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Combineer voor maximale premie</h3>
                            <p className="text-muted-foreground">
                                Combineer meerdere werken in één aanvraag voor het hoogste totaalbedrag.
                            </p>
                            <ul className="mt-4 space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span>Gevelisolatie + ramen = meer EPC-punten</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span>Dakisolatie inclusief bij totaalproject</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span>Wij helpen met de premie-aanvraag</span>
                                </li>
                            </ul>
                        </div>
                        <Link
                            href="/contact"
                            className="rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary/80 transition-all flex items-center gap-2 whitespace-nowrap"
                        >
                            <Calculator className="h-4 w-4" />
                            Bereken uw premie
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-muted-foreground mb-6">
                        Wilt u weten hoeveel premie u precies kunt krijgen?
                        Vraag een gratis offerte aan en wij berekenen het voor u.
                    </p>
                    <Link
                        href="/contact"
                        className="rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary/80 transition-all inline-flex items-center gap-2"
                    >
                        Vraag advies aan onze experts <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
