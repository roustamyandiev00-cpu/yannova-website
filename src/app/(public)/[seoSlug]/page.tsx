import { notFound, permanentRedirect } from "next/navigation";
import { getLocalSeoPageBySlug, getLocalSeoPageSlugs } from "@/lib/data/local-seo";

interface Props {
  params: Promise<{ seoSlug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getLocalSeoPageSlugs().map((seoSlug) => ({ seoSlug }));
}

export default async function LocalSeoPage({ params }: Props) {
  const { seoSlug } = await params;
  const page = getLocalSeoPageBySlug(seoSlug);

  if (!page) {
    notFound();
  }

  // Permanently redirect (308) to the new nested path structure (e.g., /renovatie/zoersel)
  permanentRedirect(page.path);
}
