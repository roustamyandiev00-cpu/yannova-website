import { Phone, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { getSeoMetadata } from '@/lib/seo-helper';

export async function generateMetadata() {
    return getSeoMetadata('/contact');
}

export default function ContactPage() {
    return (
        <div className="py-24 sm:py-32 bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-glow">
                        Contacteer Ons
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Heeft u vragen of wenst u een vrijblijvende offerte? Wij staan voor u klaar.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md h-fit">
                        <h3 className="text-2xl font-bold tracking-tight text-foreground mb-6">Contactgegevens</h3>
                        <dl className="space-y-6 text-base leading-7 text-muted-foreground">
                            <div className="flex gap-x-4 items-center group">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                                    <MapPin className="h-5 w-5 text-secondary m-2.5" aria-hidden="true" />
                                </div>
                                <dd>
                                    <span className="font-semibold text-foreground block">Yannova Bouw</span>
                                    Regio Zoersel, Antwerpen
                                </dd>
                            </div>
                            <div className="flex gap-x-4 items-center group">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                                    <Phone className="h-5 w-5 text-secondary" aria-hidden="true" />
                                </div>
                                <dd>
                                    <a className="hover:text-secondary transition-colors font-semibold" href="tel:+32489960001">
                                        +32 489 96 00 01
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4 items-center group">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                                    <Mail className="h-5 w-5 text-secondary" aria-hidden="true" />
                                </div>
                                <dd>
                                    <a className="hover:text-secondary transition-colors font-semibold" href="mailto:info@yannova.be">
                                        info@yannova.be
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
