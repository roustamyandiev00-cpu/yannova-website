import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { generateSEO } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";

export const metadata: Metadata = generateSEO({
  title: "Blog - Tips over Ramen, Deuren en Renovatie | Yannova",
  description: "Ontdek onze artikelen over ramen, deuren, renovatie, premies en prijzen. Expert advies voor uw renovatieproject.",
  path: "/blog",
  keywords: ["renovatie tips", "ramen prijzen", "premies vlaanderen", "renovatie advies"],
});

const blogPosts = [
  {
    slug: "wat-kosten-nieuwe-ramen",
    title: "Wat kosten nieuwe ramen in 2026?",
    excerpt: "Ontdek de prijzen voor PVC en aluminium ramen en waar de prijs van afhangt.",
    date: "2026-03-08",
    readTime: "5 min",
    category: "Prijzen",
  },
  {
    slug: "premies-ramen-deuren-2026",
    title: "Premies voor ramen en deuren in 2026",
    excerpt: "Overzicht van alle beschikbare premies in Vlaanderen voor nieuwe ramen en deuren.",
    date: "2026-03-08",
    readTime: "7 min",
    category: "Premies",
  },
  {
    slug: "pvc-of-aluminium-ramen",
    title: "PVC of aluminium ramen: wat is beter?",
    excerpt: "Vergelijk de voor- en nadelen van PVC en aluminium ramen voor uw woning.",
    date: "2026-03-08",
    readTime: "6 min",
    category: "Tips",
  },
];

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
            ]),
          ),
        }}
      />
      <div className="min-h-screen bg-[#0a0c10]">
      <section className="py-20 border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Blog & <span className="text-secondary">Renovatie Tips</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed">
              Expert advies over ramen, deuren, renovatie en premies. Alles wat je moet weten voor je renovatieproject.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-center gap-2 text-sm text-secondary mb-3">
                  <span>{post.category}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString("nl-BE")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-secondary font-medium">
                  Lees meer
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
