import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { company } from "@/lib/company";

export function Footer() {
  return (
    <footer className="bg-background text-white border-t border-white/5" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white hover:text-secondary transition-colors">
              Yannova<span className="text-secondary">.</span>
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Uw specialist voor ramen, deuren en totaalrenovatie in Zoersel, Antwerpen en Mechelen.
              Meer dan 15 jaar ervaring en vakmanschap.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-200 hover:bg-white/10 transition-colors"
              >
                <Phone className="h-4 w-4 text-secondary" />
                {company.phoneDisplay}
              </a>
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-200 hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-secondary" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Diensten</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/diensten/ramen-deuren" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Ramen & Deuren
                    </Link>
                  </li>
                  <li>
                    <Link href="/diensten/gevelrenovatie" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Gevelrenovatie & Crepi
                    </Link>
                  </li>
                  <li>
                    <Link href="/diensten/isolatie" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Isolatiewerken
                    </Link>
                  </li>
                  <li>
                    <Link href="/diensten/renovatie" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Totaalrenovatie
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Bedrijf</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/over-ons" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Over ons
                    </Link>
                  </li>
                  <li>
                    <Link href="/projecten" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Projecten
                    </Link>
                  </li>
                  <li>
                    <Link href="/premie-gids" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Premie gids
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-start gap-3 text-sm leading-6 text-gray-300">
                    <MapPin className="h-5 w-5 text-secondary shrink-0" />
                    <span>Regio {company.areas.join(", ")}</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm leading-6 text-gray-300">
                    <Phone className="h-5 w-5 text-secondary shrink-0" />
                    <a href={company.phoneHref} className="hover:text-white">
                      {company.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-sm leading-6 text-gray-300">
                    <Mail className="h-5 w-5 text-secondary shrink-0" />
                    <a href={`mailto:${company.email}`} className="hover:text-white">
                      {company.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} {company.name}. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
