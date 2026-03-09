import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { company } from "@/lib/company";
import { gtmTrackPhone, gtmTrackWhatsApp, gtmTrackEmail } from "@/components/GoogleTagManager";

export function Footer() {
  return (
    <footer className="bg-linear-to-b from-background to-[#0d1117] text-white border-t border-white/5 relative overflow-hidden" aria-labelledby="footer-heading">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent" />
      
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 relative z-10">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="group text-2xl font-bold tracking-tight transition-all duration-300">
              <span className="text-white group-hover:text-secondary transition-colors duration-300">Yannova</span>
              <span className="text-secondary group-hover:scale-125 inline-block transition-transform duration-300">.</span>
            </Link>
            <p className="text-sm leading-6 text-gray-300 max-w-sm">
              Uw specialist voor ramen, deuren en totaalrenovatie in Zoersel, Antwerpen en Mechelen.
              Meer dan 15 jaar ervaring en vakmanschap.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={company.phoneHref}
                onClick={() => gtmTrackPhone()}
                className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-4 py-2.5 text-sm text-gray-200 shadow-elegant"
              >
                <Phone className="h-4 w-4 text-secondary" />
                {company.phoneDisplay}
              </a>
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtmTrackWhatsApp()}
                className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-4 py-2.5 text-sm text-gray-200 shadow-elegant"
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
                    <a
                      href={company.phoneHref}
                      onClick={() => gtmTrackPhone()}
                      className="hover:text-white"
                    >
                      {company.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-sm leading-6 text-gray-300">
                    <Mail className="h-5 w-5 text-secondary shrink-0" />
                    <a
                      href={`mailto:${company.email}`}
                      onClick={() => gtmTrackEmail()}
                      className="hover:text-white"
                    >
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
