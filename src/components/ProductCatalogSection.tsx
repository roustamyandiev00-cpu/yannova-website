import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import {
  AppWindow,
  ArrowRight,
  Blinds,
  DoorOpen,
  PanelsTopLeft,
  Shield,
  Sparkles,
  SunMedium,
  Warehouse,
} from "lucide-react";
import { productCatalog, type ProductCatalogItem } from "@/lib/data/product-catalog";

const iconMap: Record<ProductCatalogItem["icon"], ComponentType<{ className?: string }>> = {
  window: AppWindow,
  door: DoorOpen,
  panels: PanelsTopLeft,
  sun: SunMedium,
  garage: Warehouse,
  shield: Shield,
  sparkles: Sparkles,
};

interface ProductCatalogSectionProps {
  compact?: boolean;
}

export function ProductCatalogSection({ compact = false }: ProductCatalogSectionProps) {
  return (
    <section className={compact ? "section-divider-grid border-t border-white/10 py-16" : "section-divider-grid border-y border-white/10 bg-[#0f1115] py-20"}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-secondary">
            <Blinds className="h-4 w-4" />
            Leverbaar via ons gamma
          </div>
          <h2 className="text-3xl font-bold text-white">Meer dan alleen ramen en deuren</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            Yannova kan ook een ruimer productgamma aanbieden op basis van het assortiment van de
            leverancier. We tonen het op onze site als eigen aanbod, met focus op wat relevant is
            voor Belgische renovatie- en plaatsingsprojecten.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productCatalog.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <Link
                key={item.slug}
                href={`/producten/${item.slug}`}
                className="group flex h-full flex-col"
              >
                <div className="relative aspect-[5/3] overflow-hidden rounded-[1.75rem] bg-white/5">
                  <Image
                    src={item.coverImage.src}
                    alt={item.coverImage.alt}
                    fill
                    sizes="(min-width: 1280px) 28vw, (min-width: 768px) 42vw, 92vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/35 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[#0a0c10]/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    <Icon className="h-3.5 w-3.5 text-secondary" />
                    {item.coverImage.label}
                  </div>
                </div>
                <div className="editorial-slat mt-5 flex flex-1 flex-col pr-4">
                  <div className="text-sm font-medium text-secondary">{item.categoryLabel}</div>
                  <h3 className="mt-2 text-2xl font-semibold text-white transition-colors group-hover:text-secondary">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.overview}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-secondary">
                    Bekijk productpagina
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {!compact && (
          <div className="mt-8">
            <Link href="/producten" className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline">
              Naar het volledige productoverzicht
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
