import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { PaintBucket, Layers, Sun, Activity, Phone, MessageCircle } from "lucide-react";
import { getSeoMetadata } from "@/lib/seo-helper";
import { company } from "@/lib/company";

export async function generateMetadata() {
  return getSeoMetadata("/diensten/gevelrenovatie");
}

export default function FacadePage() {
  const benefits = [
    {
      title: "Isolatie en bescherming",
      description: "Bescherm uw woning beter tegen vocht, temperatuurwissels en slijtage.",
      icon: Layers,
    },
    {
      title: "Nieuwe uitstraling",
      description: "Moderne afwerking in crepi of steenstrips, afgestemd op uw woning.",
      icon: PaintBucket,
    },
    {
      title: "Lagere energiefactuur",
      description: "Goede gevelisolatie helpt uw warmteverlies structureel te beperken.",
      icon: Sun,
    },
    {
      title: "Meer woningwaarde",
      description: "Een verzorgde en geïsoleerde gevel verhoogt comfort en marktwaarde.",
      icon: Activity,
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="relative h-[56vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2670&auto=format&fit=crop"
            alt="Gevelrenovatie en crepi"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
        </div>
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Gevelrenovatie & crepi</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Geef uw woning een nieuwe uitstraling en verbeter tegelijk de energieprestatie.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-6 container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Eén investering, <span className="text-secondary">dubbel resultaat.</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                Met gevelrenovatie combineert u esthetiek met energiebesparing. We analyseren eerst de bestaande
                gevel en adviseren de juiste opbouw voor uw situatie.
              </p>
              <p>
                Daarna verzorgen we uitvoering en afwerking tot in detail, inclusief correcte aansluitingen rond ramen,
                deuren en dakranden.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg">
                Vraag geveladvies
              </Link>
              <a href={company.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors">
                <Phone className="h-4 w-4" />
                Bel direct
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((item) => (
              <div key={item.title} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-secondary/50 transition-all duration-300 group">
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

      <section className="py-16 bg-muted/20 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Uw gevel vernieuwen?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We maken graag een voorstel dat technisch klopt en visueel bij uw woning past.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-white hover:bg-secondary/90 transition-colors">
              Plan een gesprek
            </Link>
            <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
