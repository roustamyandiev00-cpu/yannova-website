import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalSeoLandingPage } from "@/components/LocalSeoLandingPage";
import { getLocalSeoPageBySlug, getLocalSeoPageSlugs } from "@/lib/data/local-seo";
import { generateSEO } from "@/lib/seo";

interface Props {
  params: Promise<{ seoSlug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getLocalSeoPageSlugs().map((seoSlug) => ({ seoSlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { seoSlug } = await params;
  const page = getLocalSeoPageBySlug(seoSlug);

  if (!page) {
    return {
      title: "Pagina niet gevonden",
    };
  }

  return generateSEO({
    title: page.title,
    description: page.description,
    path: page.path,
    keywords: page.keywords,
  });
}

export default async function LocalSeoPage({ params }: Props) {
  const { seoSlug } = await params;
  const page = getLocalSeoPageBySlug(seoSlug);

  if (!page) {
    notFound();
  }

  return <LocalSeoLandingPage page={page} />;
}
