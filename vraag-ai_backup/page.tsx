import { Metadata } from "next";
import Link from "next/link";
import { AIChatShell } from "@/components/AIChatShell";

export const metadata: Metadata = {
  title: "Vraag Yannova AI | Advies over Ramen, Deuren & Premies",
  description: "Stel uw vraag over ramen, deuren, gevelisolatie, renovatiepremies en meer. Direct advies van Yannova AI.",
};

const exampleQuestions = [
  "Welke premies kan ik krijgen voor nieuwe ramen?",
  "Hoeveel bespaar ik met HR++ beglazing?",
  "PVC of aluminium ramen: wat past bij mij?",
  "Wat kost een nieuwe voordeur inclusief plaatsing?",
  "Kan ik mijn EPC verbeteren met gevelisolatie?",
  "Hoe lang duurt een totaalrenovatie?",
  "Wat is het verschil tussen crepi en steenstrips?",
  "Doen jullie ook projecten in Antwerpen stad?",
];

export default function VraagAIPage() {
  return (
    <div className="min-h-screen bg-[#0a0c10]">
      <section className="border-b border-white/10 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Vraag advies over ramen, deuren, premies en renovatie</h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl">
            Onze AI-assistent helpt u met vragen over materialen, prijzen, premies en meer.
            Direct antwoord, 24/7 beschikbaar.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-xl font-semibold text-white mb-4">Veelgestelde vragen</h2>
              <div className="space-y-3">
                {exampleQuestions.map((question) => (
                  <div
                    key={question}
                    className="w-full text-left px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
                  >
                    {question}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Snelle links</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Link href="/premie-gids" className="px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-300 hover:text-white text-center transition-colors">
                    Premies
                  </Link>
                  <Link href="/ramen" className="px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-300 hover:text-white text-center transition-colors">
                    Ramen
                  </Link>
                  <Link href="/diensten/ramen-deuren" className="px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-300 hover:text-white text-center transition-colors">
                    Deuren
                  </Link>
                  <Link href="/contact" className="px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-300 hover:text-white text-center transition-colors">
                    Contact
                  </Link>
                  <Link href="/contact" className="col-span-2 px-3 py-2.5 bg-secondary hover:bg-secondary/90 rounded-lg text-sm font-semibold text-white text-center transition-colors">
                    Offerte aanvragen
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <AIChatShell />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-xl font-semibold text-white mb-6">Gerelateerde pagina&apos;s</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/ramen" className="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors">
              <h3 className="font-semibold text-white group-hover:text-secondary">Ramen</h3>
              <p className="mt-1 text-sm text-gray-400">PVC en aluminium ramen</p>
            </Link>
            <Link href="/diensten/ramen-deuren" className="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors">
              <h3 className="font-semibold text-white group-hover:text-secondary">Deuren</h3>
              <p className="mt-1 text-sm text-gray-400">Voordeuren en schuifdeuren</p>
            </Link>
            <Link href="/diensten/gevelrenovatie" className="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors">
              <h3 className="font-semibold text-white group-hover:text-secondary">Gevelisolatie</h3>
              <p className="mt-1 text-sm text-gray-400">Isolatie met crepi-afwerking</p>
            </Link>
            <Link href="/premie-gids" className="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors">
              <h3 className="font-semibold text-white group-hover:text-secondary">Premies</h3>
              <p className="mt-1 text-sm text-gray-400">Overzicht renovatiepremies</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
