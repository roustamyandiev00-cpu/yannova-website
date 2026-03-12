import { LocalSeoHubPage } from "@/components/LocalSeoHubPage";
import { getLocalSeoHubSeoInput } from "@/lib/data/local-seo";
import { generateSEO } from "@/lib/seo";

const seo = getLocalSeoHubSeoInput("renovatie");

export const metadata = seo ? generateSEO(seo) : undefined;

export default function RenovatieHubPage() {
  return <LocalSeoHubPage serviceSlug="renovatie" />;
}
