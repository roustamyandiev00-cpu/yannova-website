import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone, MessageCircle, Star } from "lucide-react";
import { company } from "@/lib/company";
import type { LocalSeoPageData } from "@/lib/data/local-seo";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";
import { generateFAQSchema } from "@/lib/faq-schema";
import { getLocalProofProjects } from "@/lib/data/local-proof";
import { testimonials } from "@/data/testimonials";
import { getRelatedBlogPosts } from "@/lib/data/blog-posts";
import { LocalSeoHeroCTAs, LocalSeoSidebarCTAs } from "@/components/LocalSeoCTAButtons";

interface LocalSeoLandingPageProps {
  page: LocalSeoPageData;
}

export function LocalSeoLandingPage({ page }: LocalSeoLandingPageProps) {
  const normalize = (value: string) =>
    value
      .toLowerCase()
      .replace(/&/g, "en")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: page.service.name, url: page.service.hubPath },
    { name: page.city.name, url: page.path },
  ]);

  const faqSchema = generateFAQSchema(page.faqs);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${page.service.name} ${page.city.name}`,
    serviceType: page.service.name,
    description: page.description,
    areaServed: {
      "@type": "City",
      name: page.city.name,
    },
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.yannova.be/#organization",
      name: company.name,
      telephone: company.phoneDisplay,
      email: company.email,
    },
    url: `https://www.yannova.be${page.path}`,
  };

  const localProjects = getLocalProofProjects(page.city.slug, page.service.slug, 2);
  const localReviews = testimonials
    .filter((testimonial) => normalize(testimonial.location) === normalize(page.city.name))
    .concat(
      testimonials.filter((testimonial) =>
        normalize(testimonial.service).includes(normalize(page.service.name)),
      ),
    )
    .filter((testimonial, index, all) => all.findIndex((item) => item.id === testimonial.id) === index)
    .slice(0, 2);
  const relatedPosts = getRelatedBlogPosts({
    serviceSlug: page.service.slug,
    citySlug: page.city.slug,
    limit: 3,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="min-h-screen bg-[#0a0c10]">
        <section className="border-b border-white/10 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-secondary">
                <MapPin className="h-4 w-4" />
                {page.city.name} en omgeving
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">{page.h1}</h1>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-gray-300">
                {page.heroDescription}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <LocalSeoHeroCTAs />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {page.service.benefits.map((benefit) => (
                <div key={benefit} className="editorial-slat pr-4">
                  <CheckCircle2 className="h-6 w-6 text-secondary" />
                  <p className="mt-4 text-base leading-relaxed text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-16">
          <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[1.35fr_0.85fr]">
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {page.service.name} in {page.city.name}
                </h2>
                <div className="mt-5 space-y-5 text-lg leading-relaxed text-gray-300">
                  {page.introParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">
                  Aanpak voor {page.service.name.toLowerCase()} in {page.city.name}
                </h2>
                <div className="mt-5 space-y-5 text-lg leading-relaxed text-gray-300">
                  {page.planningParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">
                  Combineren met andere werken in {page.city.name}
                </h2>
                <div className="mt-5 space-y-5 text-lg leading-relaxed text-gray-300">
                  {page.combinationParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="editorial-pane pr-4">
                <h2 className="text-xl font-semibold text-white">Wat we meenemen in uw project</h2>
                <ul className="mt-6 space-y-3">
                  {page.service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="editorial-pane pr-4">
                <h2 className="text-xl font-semibold text-white">Actief in {page.city.name}</h2>
                <p className="mt-4 leading-relaxed text-gray-300">{page.areaParagraph}</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-400">
                  {page.city.nearby.map((area) => (
                    <li key={area}>• {area}</li>
                  ))}
                </ul>
              </div>

              <div className="editorial-callout px-6 py-8">
                <h2 className="text-xl font-semibold text-white">Direct advies nodig?</h2>
                <p className="mt-4 leading-relaxed text-gray-200">
                  We bekijken graag uw woning in {page.city.name} en bezorgen een duidelijke offerte
                  zonder omwegen.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <LocalSeoSidebarCTAs />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-16">
          <div className="container mx-auto px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="editorial-pane">
                <h2 className="text-2xl font-bold text-white">
                  Andere diensten in {page.city.name}
                </h2>
                <p className="mt-3 text-gray-300">
                  Elke lokale pagina linkt ook door naar gerelateerde werken in dezelfde stad. Zo
                  versterk je de interne SEO-structuur rond dienst + locatie.
                </p>
                <div className="mt-6 grid gap-x-6 gap-y-1 sm:grid-cols-2">
                  {page.sameCityPages.map((link) => (
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

              <div className="editorial-pane">
                <h2 className="text-2xl font-bold text-white">Belangrijke interne links</h2>
                <p className="mt-3 text-gray-300">
                  Deze links moeten op elke lokale SEO-pagina aanwezig zijn, zodat Google de
                  hoofdstructuur van de site meteen begrijpt.
                </p>
                <div className="mt-6 grid gap-x-6 gap-y-1 sm:grid-cols-2">
                  {page.serviceHubLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="editorial-link text-sm text-gray-300 hover:text-white"
                    >
                      <div className="font-semibold text-white">{link.label}</div>
                      <div className="mt-1 text-xs text-gray-400">{link.description}</div>
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="editorial-link text-sm text-gray-300 hover:text-white"
                  >
                    <div className="font-semibold text-white">Contact</div>
                    <div className="mt-1 text-xs text-gray-400">Bespreek uw project met Yannova</div>
                  </Link>
                  <Link
                    href="/offerte"
                    className="editorial-link text-sm text-gray-300 hover:text-white"
                  >
                    <div className="font-semibold text-white">Offerte</div>
                    <div className="mt-1 text-xs text-gray-400">Vraag een vrijblijvende prijsaanvraag</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {(localProjects.length > 0 || localReviews.length > 0 || relatedPosts.length > 0) && (
          <section className="border-t border-white/10 py-16">
            <div className="container mx-auto space-y-10 px-6">
              {localProjects.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    Realisaties in en rond {page.city.name}
                  </h2>
                  <p className="mt-3 max-w-3xl text-lg leading-relaxed text-gray-300">
                    Google verwacht meer dan alleen zoekwoorden. Door lokale projecten te tonen krijgt
                    deze pagina extra geloofwaardigheid voor bezoekers én zoekmachines.
                  </p>
                  <div className="mt-8 grid gap-6 lg:grid-cols-2">
                    {localProjects.map((project) => (
                      <Link
                        key={project.id}
                        href="/projecten"
                        className="editorial-slat group overflow-hidden"
                      >
                        <div className="relative mt-5 h-64 overflow-hidden rounded-[1.75rem]">
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <div className="mb-2 text-sm font-medium text-secondary">
                              {project.cityName}
                            </div>
                            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-300">
                              {project.description}
                            </p>
                          </div>
                        </div>
                        <div className="pt-5 pr-4">
                          <p className="text-sm leading-relaxed text-gray-300">{project.result}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid gap-6 lg:grid-cols-2">
                {localReviews.length > 0 && (
                  <div className="editorial-pane">
                    <h2 className="text-2xl font-bold text-white">
                      Wat klanten zeggen over Yannova
                    </h2>
                    <div className="mt-6 space-y-5">
                      {localReviews.map((review) => (
                        <div key={review.id} className="editorial-slat pr-4">
                          <div className="mb-3 flex items-center gap-1">
                            {[...Array(review.rating)].map((_, index) => (
                              <Star key={`${review.id}-${index}`} className="h-4 w-4 fill-secondary text-secondary" />
                            ))}
                          </div>
                          <p className="leading-relaxed text-gray-300">&quot;{review.text}&quot;</p>
                          <div className="mt-4 text-sm text-gray-400">
                            {review.name} · {review.location}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link href="/reviews" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline">
                      Bekijk alle reviews
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}

                {relatedPosts.length > 0 && (
                  <div className="editorial-pane">
                    <h2 className="text-2xl font-bold text-white">
                      Relevante artikels voor {page.city.name}
                    </h2>
                    <p className="mt-3 text-gray-300">
                      Extra content rond prijs, premies en advies versterkt de lokale SEO-pagina en
                      geeft bezoekers meer redenen om door te klikken.
                    </p>
                    <div className="mt-6 space-y-4">
                      {relatedPosts.map((post) => (
                        <Link
                          key={post.slug}
                          href={`/blog/${post.slug}`}
                          className="editorial-link"
                        >
                          <div className="text-sm font-medium text-secondary">{post.category}</div>
                          <h3 className="mt-2 text-lg font-semibold text-white">{post.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-gray-400">{post.excerpt}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        <section className="border-t border-white/10 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white">
              Veelgestelde vragen over {page.service.name.toLowerCase()} in {page.city.name}
            </h2>
            <div className="mt-8 max-w-4xl space-y-4">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="editorial-slat pr-4">
                  <summary className="cursor-pointer text-lg font-semibold text-white">
                    {faq.question}
                  </summary>
                  <p className="mt-4 leading-relaxed text-gray-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white">
              Ook actief voor {page.service.name.toLowerCase()} in andere gemeenten
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-relaxed text-gray-300">
              Naast {page.city.name} zet Yannova dezelfde structuur in voor andere sterke gemeenten
              rond Zoersel en Antwerpen.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {page.sameServicePages.slice(0, 6).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="editorial-slat pr-4"
                >
                  <div className="text-lg font-semibold text-white">{link.label}</div>
                  <div className="mt-2 text-sm text-gray-400">{link.description}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
