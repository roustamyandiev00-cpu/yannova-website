import { LocalSeoHubPage } from "@/components/LocalSeoHubPage";
import { getLocalSeoHubSeoInput } from "@/lib/data/local-seo";
import { generateSEO } from "@/lib/seo";

const seo = getLocalSeoHubSeoInput("ramen-deuren");

export const metadata = seo ? generateSEO(seo) : undefined;

export default function RamenDeurenHubPage() {
  return <LocalSeoHubPage serviceSlug="ramen-deuren" />;
}
