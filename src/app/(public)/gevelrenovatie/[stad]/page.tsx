import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalSeoLandingPage } from "@/components/LocalSeoLandingPage";
import { getLocalSeoPageData, priorityCities } from "@/lib/data/local-seo";
import { generateSEO } from "@/lib/seo";

interface Props {
  params: Promise<{ stad: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return priorityCities.map((city) => ({ stad: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { stad } = await params;
  const page = getLocalSeoPageData("gevelrenovatie", stad);

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

export default async function GevelrenovatieStadPage({ params }: Props) {
  const { stad } = await params;
  const page = getLocalSeoPageData("gevelrenovatie", stad);

  if (!page) {
    notFound();
  }

  return <LocalSeoLandingPage page={page} />;
}
