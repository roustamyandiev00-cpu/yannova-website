import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin, Phone, ExternalLink } from "lucide-react";
import { company } from "@/lib/company";
import {
  getHubCityLinks,
  getLocalSeoService,
  getServiceHubLinks,
  type LocalSeoService,
} from "@/lib/data/local-seo";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";

interface LocalSeoHubPageProps {
  serviceSlug: LocalSeoService["slug"];
}

export function LocalSeoHubPage({ serviceSlug }: LocalSeoHubPageProps) {
  const service = getLocalSeoService(serviceSlug);

  if (!service) {
    return null;
  }

  const cityLinks = getHubCityLinks(serviceSlug);
  const otherServiceLinks = getServiceHubLinks().filter((link) => link.href !== service.hubPath);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: service.name, url: service.hubPath },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-[#0a0c10]">
        <section className="border-b border-white/10 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-secondary">
                <MapPin className="h-4 w-4" />
                Lokale SEO structuur voor Zoersel en regio Antwerpen
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl">{service.hubTitle}</h1>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-gray-300">
                {service.hubDescription}
              </p>
              <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
                <Link
                  href="/offerte"
                  className="group inline-flex items-center gap-2 text-base font-semibold text-secondary hover:text-white transition-colors"
                >
                  Gratis offerte aanvragen
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={service.detailPath}
                  className="group inline-flex items-center gap-2 text-base font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {service.detailLabel}
                  <ExternalLink className="h-4 w-4" />
                </Link>
                <a
                  href={company.phoneHref}
                  className="group inline-flex items-center gap-2 text-base font-medium text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {company.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-secondary" />
                  <p className="text-base leading-relaxed text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {serviceSlug === "ramen-deuren" && (
          <section className="py-16 border-t border-white/10">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Onze uitgebreide mogelijkheden</h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Dankzij onze rechtstreekse samenwerking met vooraanstaande leveranciers, kunnen we u een complete en veelzijdige collectie buitenschrijnwerk bieden. Wij plaatsen systemen van absolute marktleiders.
                </p>
              </div>

              <div className="grid gap-12 lg:grid-cols-2">
                
                {/* PVC Card */}
                <div className="space-y-4 group">
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 mb-6">
                    <Image
                      src="/images/products/pvc-raamprofiel.png"
                      alt="Doorsnede PVC raamprofiel Eko-Okna met kamers"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-screen"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">PVC Ramen & Deuren</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Een ruime keuze aan duurzame systemen en sterk isolerende, warme profielen. Eindeloze ontwerpmogelijkheden (zoals de onzichtbare <strong>V-Perfect</strong> lasnaden) en beschikbaar tot wel 6/7 isolatiekamers. Ideaal voor wie zoekt naar de beste prijs-kwaliteitverhouding.
                  </p>
                  <p className="text-sm font-medium text-secondary">Aanbod van: Schüco, Veka, Rehau, Deceuninck & Eko-Okna</p>
                </div>

                {/* Aluminium Card */}
                <div className="space-y-4 group">
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 mb-6">
                    <Image
                      src="/images/products/aluminium-raamprofiel.png"
                      alt="Doorsnede modern aluminium raamprofiel Reynaers"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-screen"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Aluminium Ramen</h3>
                  <p className="text-gray-400 leading-relaxed">
                    De ultieme systeemoplossingen voor grotere, strakke ramen en deuren. Constructieve duurzaamheid gekoppeld aan functionaliteit en veiligheid in elke RAL kleur. Perfect voor grote schuiframen en minimalistische woningen.
                  </p>
                  <p className="text-sm font-medium text-secondary">Aanbod van: Reynaers Aluminium</p>
                </div>

                {/* Wood Card */}
                <div className="space-y-4 group">
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 mb-6">
                    <Image
                      src="/images/products/houten-raamprofiel.png"
                      alt="Doorsnede massief houten raam"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-screen"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Houten Ramen</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Massieve profielen uit drie of vier lagen hout. Gegarandeerd voor langdurig en probleemloos gebruik dankzij vier weerbestendige vernislagen. Perfect voor wie de authentieke en warme uitstraling van echt hout wil behouden in een hedendaagse vorm.
                  </p>
                </div>

                {/* Doors Card */}
                <div className="space-y-4 group">
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 mb-6">
                    <Image
                      src="/images/products/voordeur.png"
                      alt="Moderne aluminium voordeur geplaatst in gevel"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Deuren & Toebehoren</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Een moderne voordeur is het pronkstuk van uw woning in Antwerpen. Verkrijgbaar in uiterst inbraakveilige panelen met onzichtbare vleugels, slimme beslag-opties, handgrepen op maat en ultieme isolatienormen.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="border-y border-white/10 py-16">
          <div className="container mx-auto grid gap-16 px-6 lg:grid-cols-[1.3fr_0.9fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Waarom deze lokale service-hub?</h2>
              <div className="space-y-4">
                {service.hubIntro.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-relaxed text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="text-lg leading-relaxed text-gray-300 mt-6">
                Elke lokale pagina linkt terug naar deze hub, naar de contactpagina en naar de andere
                hoofdservices. Zo bouwt de site niet zomaar extra URL&apos;s op, maar een duidelijke
                thematische structuur rond {service.name.toLowerCase()}.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">Wat deze hub afdekt</h2>
              <ul className="mt-6 space-y-4">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-gray-300">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-l-2 border-secondary pl-6">
                <p className="text-sm leading-relaxed text-gray-200">{service.focusSentence}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="mb-12 max-w-3xl">
              <h2 className="text-3xl font-bold text-white">Prioritaire stadspagina&apos;s</h2>
              <p className="mt-3 text-lg leading-relaxed text-gray-400">
                Lokaal gericht op Zoersel en de Antwerpse rand.
              </p>
            </div>
            <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {cityLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group block"
                >
                  <h3 className="text-lg font-medium text-white group-hover:text-secondary group-hover:underline transition-all">
                    {link.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-2">{link.description}</p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-secondary opacity-80 group-hover:opacity-100 transition-opacity">
                    Bekijk info
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-16">
          <div className="container mx-auto px-6">
            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="text-2xl font-bold text-white">Andere sub-diensten</h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {otherServiceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex flex-col items-start gap-1"
                    >
                      <div className="font-medium text-gray-200 group-hover:text-white group-hover:underline transition-all">{link.label}</div>
                      <div className="text-xs text-gray-500">{link.description}</div>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">Uw volgende stap</h2>
                <div className="mt-8 flex flex-col items-start gap-4">
                  <Link
                    href="/offerte"
                    className="group inline-flex items-center gap-2 font-medium text-secondary hover:text-white transition-colors"
                  >
                    Vraag een offerte aan
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 font-medium text-gray-400 hover:text-white transition-colors"
                  >
                    Contacteer ons
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
