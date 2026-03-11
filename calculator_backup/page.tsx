'use client';

import { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle, Home, Layers, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';

const diensten = [
  {
    id: 'ramen',
    titel: 'Ramen & Deuren',
    icoon: Home,
    basisPrijs: 850,
    prijsPerMeter: 450,
    opties: [
      { id: 'pvc', label: 'PVC', factor: 1.0 },
      { id: 'aluminium', label: 'Aluminium', factor: 1.4 },
      { id: 'dubbel-glas', label: 'Dubbel glas (HR+)', factor: 1.0 },
      { id: 'triple-glas', label: 'Triple glas (HR++)', factor: 1.25 },
    ]
  },
  {
    id: 'gevel',
    titel: 'Gevelrenovatie',
    icoon: Layers,
    basisPrijs: 1200,
    prijsPerMeter: 65,
    opties: [
      { id: 'crepi', label: 'Crepi', factor: 1.0 },
      { id: 'steenstrips', label: 'Steenstrips', factor: 1.3 },
      { id: 'gevelisolatie', label: 'Met isolatie', factor: 1.8 },
    ]
  },
  {
    id: 'isolatie',
    titel: 'Isolatie',
    icoon: ShieldCheck,
    basisPrijs: 600,
    prijsPerMeter: 35,
    opties: [
      { id: 'dakisolatie', label: 'Dakisolatie', factor: 1.0 },
      { id: 'gevelisolatie', label: 'Gevelisolatie', factor: 0.9 },
      { id: 'vloerisolatie', label: 'Vloerisolatie', factor: 0.8 },
    ]
  }
];

export default function CalculatorPage() {
  const [stap, setStap] = useState(1);
  const [selectedDienst, setSelectedDienst] = useState<string>('');
  const [selectedOptie, setSelectedOptie] = useState<string>('');
  const [oppervlakte, setOppervlakte] = useState<number>(10);
  const [resultaat, setResultaat] = useState<{ min: number; max: number } | null>(null);

  const berekenPrijs = () => {
    const dienst = diensten.find(d => d.id === selectedDienst);
    const optie = dienst?.opties.find(o => o.id === selectedOptie);
    
    if (!dienst || !optie) return;

    const basis = dienst.basisPrijs + (dienst.prijsPerMeter * oppervlakte);
    const totaal = basis * optie.factor;
    
    setResultaat({
      min: Math.round(totaal * 0.85),
      max: Math.round(totaal * 1.15)
    });
    setStap(4);
  };

  const huidigeDienst = diensten.find(d => d.id === selectedDienst);

  return (
    <div className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                <Calculator className="h-8 w-8 text-secondary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Offerte Calculator
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Krijg direct een indicatie van de kosten voor uw renovatieproject. 
              Vul uw gegevens in voor een vrijblijvende schatting.
            </p>
          </div>
        </FadeIn>

        {/* Progress */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  stap >= num ? 'bg-secondary text-white' : 'bg-white/10 text-gray-400'
                }`}>
                  {stap > num ? <CheckCircle className="h-5 w-5" /> : num}
                </div>
                {num < 4 && (
                  <div className={`h-1 w-16 sm:w-24 mx-2 ${
                    stap > num ? 'bg-secondary' : 'bg-white/10'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>Dienst</span>
            <span>Materiaal</span>
            <span>Oppervlakte</span>
            <span>Resultaat</span>
          </div>
        </div>

        {/* Content */}
        <FadeIn delay={0.2}>
          <div className="max-w-2xl mx-auto">
            {/* Stap 1: Kies dienst */}
            {stap === 1 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-center mb-6">Welke dienst heeft u nodig?</h2>
                {diensten.map((dienst) => {
                  const Icon = dienst.icoon;
                  return (
                    <button
                      key={dienst.id}
                      onClick={() => { setSelectedDienst(dienst.id); setStap(2); }}
                      className="w-full p-6 rounded-2xl border border-border bg-card hover:border-secondary hover:shadow-lg transition-all text-left flex items-center gap-4"
                    >
                      <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                        <Icon className="h-7 w-7 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{dienst.titel}</h3>
                        <p className="text-sm text-muted-foreground">
                          Vanaf €{dienst.basisPrijs.toLocaleString()}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </button>
                  );
                })}
              </div>
            )}

            {/* Stap 2: Kies optie */}
            {stap === 2 && huidigeDienst && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-center mb-6">Kies uw materiaal/type</h2>
                {huidigeDienst.opties.map((optie) => (
                  <button
                    key={optie.id}
                    onClick={() => { setSelectedOptie(optie.id); setStap(3); }}
                    className="w-full p-6 rounded-2xl border border-border bg-card hover:border-secondary hover:shadow-lg transition-all text-left flex items-center justify-between"
                  >
                    <span className="font-bold text-lg">{optie.label}</span>
                    <span className="text-sm text-secondary font-semibold">
                      {optie.factor === 1.0 ? 'Standaard' : optie.factor > 1 ? `+${Math.round((optie.factor - 1) * 100)}%` : `-${Math.round((1 - optie.factor) * 100)}%`}
                    </span>
                  </button>
                ))}
                <button
                  onClick={() => setStap(1)}
                  className="w-full py-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← Terug
                </button>
              </div>
            )}

            {/* Stap 3: Oppervlakte */}
            {stap === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center mb-6">Hoe groot is het project?</h2>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <label className="block text-sm font-medium mb-4">
                    Oppervlakte: <span className="text-secondary font-bold text-xl">{oppervlakte} m²</span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="200"
                    value={oppervlakte}
                    onChange={(e) => setOppervlakte(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-secondary"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>5 m²</span>
                    <span>200 m²</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setStap(2)}
                    className="flex-1 py-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ← Terug
                  </button>
                  <button
                    onClick={berekenPrijs}
                    className="flex-1 bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2"
                  >
                    Bereken prijs <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Stap 4: Resultaat */}
            {stap === 4 && resultaat && (
              <div className="space-y-6">
                <div className="bg-card border border-secondary/30 rounded-2xl p-8 text-center">
                  <h2 className="text-2xl font-bold mb-2">Geschatte investering</h2>
                  <p className="text-muted-foreground mb-6">Dit is een indicatie inclusief plaatsing</p>
                  <div className="text-4xl sm:text-5xl font-bold text-secondary mb-2">
                    €{resultaat.min.toLocaleString()} - €{resultaat.max.toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground">excl. BTW</p>
                </div>

                <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    Wat is hierin inbegrepen?
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Gratis opmeting ter plaatse</li>
                    <li>✓ Materialen en plaatsing</li>
                    <li>✓ 30 jaar garantie</li>
                    <li>✓ Afvoer oude materialen</li>
                    <li>✓ Oplevering en nazorg</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="w-full bg-secondary text-white py-4 rounded-xl font-bold hover:bg-secondary/80 transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <Calculator className="h-5 w-5" />
                    Vraag exacte offerte aan
                  </Link>
                  <button
                    onClick={() => { setStap(1); setResultaat(null); setSelectedDienst(''); setSelectedOptie(''); setOppervlakte(10); }}
                    className="w-full py-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ← Nieuwe berekening
                  </button>
                </div>
              </div>
            )}
          </div>
        </FadeIn>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground mt-12 max-w-xl mx-auto">
          * Dit is een indicatie gebaseerd op standaard situaties. De exacte prijs hangt af van 
          specifieke wensen, bereikbaarheid, en actuele materiaalprijzen. Vraag een vrijblijvende 
          offerte voor een nauwkeurige prijsopgave.
        </p>
      </div>
    </div>
  );
}
