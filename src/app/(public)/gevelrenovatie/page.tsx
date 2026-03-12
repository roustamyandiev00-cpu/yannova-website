import { LocalSeoHubPage } from "@/components/LocalSeoHubPage";
import { getLocalSeoHubSeoInput } from "@/lib/data/local-seo";
import { generateSEO } from "@/lib/seo";

const seo = getLocalSeoHubSeoInput("gevelrenovatie");

export const metadata = seo ? generateSEO(seo) : undefined;

export default function GevelrenovatieHubPage() {
  return <LocalSeoHubPage serviceSlug="gevelrenovatie" />;
}
