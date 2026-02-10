import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

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
                        <div className="flex space-x-6">
                            <Link href="#" className="text-gray-400 hover:text-secondary">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-6 w-6" aria-hidden="true" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-secondary">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-6 w-6" aria-hidden="true" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-secondary">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-6 w-6" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Diensten</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/diensten" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Ramen & Deuren
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/diensten" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Gevelrenovatie & Crepi
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/diensten" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Isolatiewerken
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/diensten" className="text-sm leading-6 text-gray-300 hover:text-white">
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
                                            Over Ons
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/projecten" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Projecten
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/advies" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Advies & Premies
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
                                        <span>Regio Zoersel, Antwerpen, Mechelen</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm leading-6 text-gray-300">
                                        <Phone className="h-5 w-5 text-secondary shrink-0" />
                                        <a href="tel:+32489960001" className="hover:text-white">+32 489 96 00 01</a>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm leading-6 text-gray-300">
                                        <Mail className="h-5 w-5 text-secondary shrink-0" />
                                        <a href="mailto:info@yannova.be" className="hover:text-white">info@yannova.be</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-400">
                        &copy; {new Date().getFullYear()} Yannova Bouw. Alle rechten voorbehouden.
                    </p>
                </div>
            </div>
        </footer>
    );
}
