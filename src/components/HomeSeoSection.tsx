import Link from "next/link";
import { ArrowRight, MapPin, FileText } from "lucide-react";
import { getBlogIndexPosts } from "@/lib/data/blog-posts";
import { getHubCityLinks } from "@/lib/data/local-seo";

export function HomeSeoSection() {
  const featuredCities = [
    ...getHubCityLinks("renovatie").slice(0, 3),
    ...getHubCityLinks("ramen-deuren").slice(0, 2),
    ...getHubCityLinks("gevelrenovatie").slice(0, 1),
  ];
  const featuredPosts = getBlogIndexPosts().slice(0, 6);

  return (
    <section className="section-divider-grid border-y border-white/10 bg-[#0f1115] py-20">
      <div className="container mx-auto grid gap-14 px-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="editorial-pane lg:pr-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-secondary">
            <MapPin className="h-4 w-4" />
            Populaire lokale pagina&apos;s
          </div>
          <h2 className="text-3xl font-bold text-white">Veelgezochte diensten per gemeente</h2>
          <p className="mt-4 max-w-2xl text-gray-300">
            Deze pagina&apos;s zijn gericht opgebouwd rond de sterkste combinatie van dienst + stad
            in de regio rond Zoersel en Antwerpen.
          </p>
          <div className="mt-8 grid gap-x-6 gap-y-1 sm:grid-cols-2">
            {featuredCities.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="editorial-link text-sm text-gray-300 hover:text-white"
              >
                <div className="font-semibold text-white">{link.label}</div>
                <div className="mt-1 text-xs text-gray-400">{link.description}</div>
              </Link>
            ))}
          </div>
          <Link href="/renovatie" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline">
            Bekijk alle lokale renovatiepagina&apos;s
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="editorial-pane lg:border-l lg:border-white/10 lg:pl-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-secondary">
            <FileText className="h-4 w-4" />
            SEO content & advies
          </div>
          <h2 className="text-3xl font-bold text-white">Recente gidsen en prijsartikels</h2>
          <p className="mt-4 max-w-2xl text-gray-300">
            Deze artikels ondersteunen de lokale SEO-structuur met extra zoekintentie rond prijs,
            premies en renovatieadvies.
          </p>
          <div className="mt-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="editorial-link"
              >
                <div className="text-xs font-medium text-secondary">{post.category}</div>
                <div className="mt-1 text-lg font-semibold text-white">{post.title}</div>
                <div className="mt-1 text-sm text-gray-400">{post.excerpt}</div>
              </Link>
            ))}
          </div>
          <Link href="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline">
            Bekijk alle artikels
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
