import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { notFound } from "next/navigation";
import {
  AppWindow,
  ArrowRight,
  CheckCircle2,
  DoorOpen,
  PanelsTopLeft,
  Shield,
  Sparkles,
  SunMedium,
  Warehouse,
} from "lucide-react";
import { generateSEO } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";
import { getProductCatalogItem, productCatalog, type ProductCatalogItem } from "@/lib/data/product-catalog";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

const iconMap: Record<ProductCatalogItem["icon"], ComponentType<{ className?: string }>> = {
  window: AppWindow,
  door: DoorOpen,
  panels: PanelsTopLeft,
  sun: SunMedium,
  garage: Warehouse,
  shield: Shield,
  sparkles: Sparkles,
};

export function generateStaticParams() {
  return productCatalog.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getProductCatalogItem(slug);

  if (!item) {
    return { title: "Product niet gevonden" };
  }

  return generateSEO({
    title: item.metaTitle,
    description: item.metaDescription,
    path: `/producten/${item.slug}`,
    keywords: item.keywords,
  });
}

export default async function ProductCategoryPage({ params }: Props) {
  const { slug } = await params;
  const item = getProductCatalogItem(slug);

  if (!item) {
    notFound();
  }

  const Icon = iconMap[item.icon];
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Producten", url: "/producten" },
    { name: item.shortName, url: `/producten/${item.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-[#0a0c10]">
        <section className="border-b border-white/10 py-20">
          <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-secondary">
                <Icon className="h-4 w-4" />
                {item.categoryLabel}
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">{item.heroTitle}</h1>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-gray-300">
                {item.heroDescription}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={item.primaryCtaHref}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-base font-semibold text-white hover:bg-secondary/90 transition-colors"
                >
                  {item.primaryCtaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/offerte"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-base font-medium text-white hover:bg-white/5 transition-colors"
                >
                  Offerte aanvragen
                </Link>
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="relative overflow-hidden rounded-[2rem] bg-white/5">
                <div className="relative aspect-[16/11] sm:aspect-[3/2] lg:aspect-[4/5]">
                  <Image
                    src={item.coverImage.src}
                    alt={item.coverImage.alt}
                    fill
                    sizes="(min-width: 1024px) 38vw, 92vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
                    Referentiebeeld uit het gamma
                  </div>
                  <div className="mt-2 text-xl font-semibold text-white">{item.coverImage.label}</div>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {item.gallery.slice(0, 4).map((image) => (
                  <span
                    key={image.src}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-200"
                  >
                    {image.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              {item.intro.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="editorial-callout px-6 py-8">
              <h2 className="text-xl font-semibold text-white">Leveranciersgamma, vertaald naar Yannova</h2>
              <p className="mt-4 leading-relaxed text-gray-200">{item.supplierNote}</p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-16">
          <div className="container mx-auto grid gap-6 px-6 md:grid-cols-3">
            {item.benefits.map((benefit) => (
              <div key={benefit} className="editorial-slat pr-4">
                <CheckCircle2 className="h-6 w-6 text-secondary" />
                <p className="mt-4 text-base leading-relaxed text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-16">
          <div className="container mx-auto px-6">
            <div className="editorial-pane">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-bold text-white">Types en uitvoeringen uit het gamma</h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-300">
                  Deze beelden tonen representatieve types, profielen en accessoires binnen het
                  assortiment waarop Yannova zich kan baseren voor advies en plaatsing.
                </p>
              </div>
              <div className="mt-8 grid gap-x-8 gap-y-6 lg:grid-cols-2">
                {item.gallery.map((image) => (
                  <div key={image.src} className="editorial-link flex items-center gap-4 pl-0 pr-4">
                    <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-[1.25rem] bg-white/5 sm:h-28 sm:w-40">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 18vw, 32vw"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-[0.16em] text-secondary">
                        Typebeeld
                      </div>
                      <div className="mt-2 text-lg font-semibold text-white">{image.label}</div>
                      <p className="mt-2 text-sm leading-relaxed text-gray-400">{image.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-16">
          <div className="container mx-auto grid gap-6 px-6 lg:grid-cols-2">
            <div className="editorial-pane pr-4">
              <h2 className="text-2xl font-bold text-white">Wat hieronder valt</h2>
              <ul className="mt-6 space-y-3">
                {item.productTypes.map((entry) => (
                  <li key={entry} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="editorial-pane pr-4">
              <h2 className="text-2xl font-bold text-white">Interessant voor</h2>
              <ul className="mt-6 space-y-3">
                {item.idealFor.map((entry) => (
                  <li key={entry} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-16">
          <div className="container mx-auto px-6">
            <div className="editorial-pane">
              <h2 className="text-2xl font-bold text-white">Relevante volgende stappen</h2>
              <div className="mt-6 grid gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
                {item.secondaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="editorial-link text-sm text-gray-300 hover:text-white"
                  >
                    <div className="font-semibold text-white">{link.label}</div>
                    <div className="mt-1 text-xs text-gray-400">{link.href}</div>
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="editorial-link text-sm text-gray-300 hover:text-white"
                >
                  <div className="font-semibold text-white">Contact</div>
                  <div className="mt-1 text-xs text-gray-400">Bespreek welke systemen passen bij uw project</div>
                </Link>
                <Link
                  href="/producten"
                  className="editorial-link text-sm text-gray-300 hover:text-white"
                >
                  <div className="font-semibold text-white">Alle producten</div>
                  <div className="mt-1 text-xs text-gray-400">Terug naar het productoverzicht</div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
