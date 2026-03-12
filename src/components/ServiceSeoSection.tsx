import Link from "next/link";
import { ArrowRight, FileText, MapPin } from "lucide-react";
import { getRelatedBlogPosts } from "@/lib/data/blog-posts";
import { getHubCityLinks, type LocalSeoService } from "@/lib/data/local-seo";

interface ServiceSeoSectionProps {
  serviceSlug: LocalSeoService["slug"];
  title: string;
}

export function ServiceSeoSection({ serviceSlug, title }: ServiceSeoSectionProps) {
  const cityLinks = getHubCityLinks(serviceSlug).slice(0, 6);
  const blogLinks = getRelatedBlogPosts({ serviceSlug, limit: 3 });

  return (
    <section className="section-divider-grid border-y border-white/10 bg-[#0f1115] py-16">
      <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        <div className="editorial-pane lg:pr-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-secondary">
            <MapPin className="h-4 w-4" />
            Lokale landingspagina&apos;s
          </div>
          <h2 className="text-2xl font-bold text-white">{title} in prioriteitsgemeenten</h2>
          <p className="mt-3 text-gray-300">
            Versterk deze servicepagina met directe links naar de belangrijkste stadspagina&apos;s.
            Zo begrijpt Google beter waar Yannova lokaal sterk op wil ranken.
          </p>
          <div className="mt-6 grid gap-x-6 gap-y-1 sm:grid-cols-2">
            {cityLinks.map((link) => (
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
        </div>

        <div className="editorial-pane lg:border-l lg:border-white/10 lg:pl-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-secondary">
            <FileText className="h-4 w-4" />
            Relevante artikels
          </div>
          <h2 className="text-2xl font-bold text-white">Ondersteunende content voor deze dienst</h2>
          <p className="mt-3 text-gray-300">
            Prijsartikels en adviespagina&apos;s helpen zowel bezoekers als zoekmachines om deze
            service inhoudelijk beter te plaatsen.
          </p>
          <div className="mt-6">
            {blogLinks.map((post) => (
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
            Meer artikels bekijken
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
