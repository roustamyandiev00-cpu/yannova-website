import { getSeoMetadata } from '@/lib/seo-helper';

export async function generateMetadata() {
    return getSeoMetadata('/advies');
}

export default function AdvicePage() {
    return (
        <div className="py-24 sm:py-32 bg-background">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                        Advies & Premies
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Wij helpen u niet alleen met bouwen, maar ook met besparen. Ontdek alles over de huidige energiepremies.
                    </p>
                </div>
                <div className="mt-16 bg-card border border-border rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-foreground">Mijn VerbouwPremie</h2>
                    <p className="mt-4 text-muted-foreground">
                        Sinds 2022 zijn de energiepremies en renovatiepremies samengevoegd tot de Mijn VerbouwPremie.
                        Afhankelijk van uw inkomen en het type werkzaamheden kunt u tot wel 50% van uw factuur terugkrijgen.
                    </p>
                    <div className="mt-8">
                        <a href="https://www.vlaanderen.be/mijn-verbouwpremie" target="_blank" rel="noopener noreferrer" className="text-secondary font-semibold hover:underline">
                            Lees meer op de website van Vlaanderen &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
