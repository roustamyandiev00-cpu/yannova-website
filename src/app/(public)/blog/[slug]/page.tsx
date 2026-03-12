import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { generateBlogMetadata } from "@/components/SEO";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";
import { generateArticleSchema } from "@/lib/article-schema";
import { getBlogPostBySlug, getDynamicBlogPosts, getRelatedBlogPosts } from "@/lib/data/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getDynamicBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post || !post.dynamic) {
    return { title: "Blogartikel niet gevonden" };
  }

  return generateBlogMetadata({
    title: post.title,
    description: post.description,
    slug: post.slug,
    publishedTime: post.date,
    keywords: post.keywords,
  });
}

export default async function DynamicBlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post || !post.dynamic || !post.sections || !post.intro) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  const articleSchema = generateArticleSchema({
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    authorName: "Yannova",
    path: `/blog/${post.slug}`,
  });

  const relatedPosts = post.relatedSlugs
    ?.map((relatedSlug) => getBlogPostBySlug(relatedSlug))
    .filter((relatedPost): relatedPost is NonNullable<typeof relatedPost> => Boolean(relatedPost))
    .slice(0, 3) ?? getRelatedBlogPosts({ currentSlug: post.slug, serviceSlug: post.serviceTags[0], limit: 3 });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-[#0a0c10]">
        <article className="py-20">
          <div className="container mx-auto max-w-4xl px-6">
            <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-secondary hover:underline">
              ← Terug naar blog
            </Link>

            <header className="mb-12">
              <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-secondary">
                {post.category}
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">{post.title}</h1>
              <p className="mt-6 text-xl leading-relaxed text-gray-300">{post.intro}</p>
              <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("nl-BE")}</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
              {post.keyPoints && post.keyPoints.length > 0 && (
                <div className="mb-10 rounded-2xl border border-secondary/20 bg-secondary/10 p-6">
                  <h2 className="mb-4 text-2xl font-bold text-white">Snel overzicht</h2>
                  <ul className="space-y-2 text-gray-300">
                    {post.keyPoints.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {post.sections.map((section) => (
                <section key={section.title} className="mb-10">
                  <h2 className="mb-5 text-3xl font-bold text-white">{section.title}</h2>
                  <div className="space-y-5">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="leading-relaxed text-gray-300">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-6 space-y-3 rounded-xl border border-white/10 bg-white/5 p-6 text-gray-300">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-1 text-secondary">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <div className="mt-12 rounded-2xl border border-secondary/20 bg-gradient-to-r from-secondary/10 to-orange-500/10 p-8">
                <h3 className="text-2xl font-bold text-white">{post.ctaTitle ?? "Project bespreken?"}</h3>
                <p className="mt-4 text-gray-300">
                  {post.ctaText ?? "Bespreek uw renovatieproject met Yannova en ontvang een duidelijke offerte."}
                </p>
                <Link
                  href="/offerte"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-white hover:bg-secondary/90 transition-colors"
                >
                  Gratis offerte aanvragen
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {relatedPosts.length > 0 && (
              <div className="mt-12 border-t border-white/10 pt-8">
                <h3 className="mb-4 text-xl font-semibold text-white">Gerelateerde artikels</h3>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors"
                    >
                      <h4 className="font-semibold text-white">{relatedPost.title}</h4>
                      <p className="mt-2 text-sm text-gray-400">{relatedPost.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </>
  );
}
