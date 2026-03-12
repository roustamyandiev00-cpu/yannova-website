import { LocalSeoHubPage } from "@/components/LocalSeoHubPage";
import { getLocalSeoHubSeoInput } from "@/lib/data/local-seo";
import { generateSEO } from "@/lib/seo";

const seo = getLocalSeoHubSeoInput("crepi-gevel");

export const metadata = seo ? generateSEO(seo) : undefined;

export default function CrepiGevelHubPage() {
  return <LocalSeoHubPage serviceSlug="crepi-gevel" />;
}
