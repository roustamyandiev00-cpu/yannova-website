'use client'

import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2, Shield, Award } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema";
import { company } from "@/lib/company";
import { trackPhoneClick, trackWhatsAppClick, trackEmailClick } from "@/lib/analytics";
import { gtmTrackPhone, gtmTrackWhatsApp, gtmTrackEmail } from "@/components/GoogleTagManager";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Contact", url: "/contact" },
]);

export default function ContactPage() {
  const handlePhoneClick = () => {
    trackPhoneClick('contact_page');
    gtmTrackPhone();
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('contact_page');
    gtmTrackWhatsApp();
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-glow">
            Neem contact met ons op
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Heeft u vragen of wenst u een vrijblijvende offerte? Ons team staat klaar om u te helpen met uw renovatieproject.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mx-auto mt-12 max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="editorial-slat flex items-center gap-3 justify-center p-4">
            <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
            <span className="text-sm font-medium text-foreground">Reactie binnen 24u</span>
          </div>
          <div className="editorial-slat flex items-center gap-3 justify-center p-4">
            <Shield className="h-6 w-6 text-secondary shrink-0" />
            <span className="text-sm font-medium text-foreground">Vrijblijvende offerte</span>
          </div>
          <div className="editorial-slat flex items-center gap-3 justify-center p-4">
            <Award className="h-6 w-6 text-secondary shrink-0" />
            <span className="text-sm font-medium text-foreground">Vakmanschap gegarandeerd</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Information - Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Details Card */}
            <div className="editorial-pane pr-4">
              <h3 className="text-2xl font-bold tracking-tight text-foreground mb-6">Contactgegevens</h3>
              <dl className="space-y-6 text-base leading-7 text-muted-foreground">
                <div className="flex gap-x-4 items-start group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors shrink-0">
                    <MapPin className="h-5 w-5 text-secondary" aria-hidden="true" />
                  </div>
                  <dd>
                    <span className="font-semibold text-foreground block">{company.name}</span>
                    <span className="text-sm">Regio {company.areas.slice(0, 3).join(", ")}</span>
                  </dd>
                </div>
                <div className="flex gap-x-4 items-center group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors shrink-0">
                    <Phone className="h-5 w-5 text-secondary" aria-hidden="true" />
                  </div>
                  <dd>
                    <a 
                      className="hover:text-secondary transition-colors font-semibold" 
                      href={company.phoneHref}
                      onClick={handlePhoneClick}
                    >
                      {company.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4 items-center group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors shrink-0">
                    <Mail className="h-5 w-5 text-secondary" aria-hidden="true" />
                  </div>
                  <dd>
                    <a
                      className="hover:text-secondary transition-colors font-semibold break-all"
                      href={`mailto:${company.email}`}
                      onClick={() => { trackEmailClick('contact_page'); gtmTrackEmail(); }}
                    >
                      {company.email}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4 items-start group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors shrink-0">
                    <Clock className="h-5 w-5 text-secondary" aria-hidden="true" />
                  </div>
                  <dd>
                    <span className="font-semibold text-foreground block">Bereikbaarheid</span>
                    <span className="text-sm">Ma-Vr: 8:00 - 18:00</span><br />
                    <span className="text-sm">Za: 9:00 - 14:00</span>
                  </dd>
                </div>
              </dl>
            </div>

            {/* WhatsApp Quick Contact */}
            <div className="editorial-callout px-6 py-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-lg font-semibold text-foreground">Direct contact via WhatsApp</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Voor snelle vragen kunt u ons ook bereiken via WhatsApp
              </p>
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-green-600 hover:bg-green-700 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" />
                Start WhatsApp chat
              </a>
            </div>
          </div>

          {/* Contact Form - Right Column */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mx-auto mt-20 max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground text-center mb-12">
            Veelgestelde vragen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="editorial-slat pr-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">Hoe snel krijg ik een reactie?</h3>
              <p className="text-sm text-muted-foreground">
                We streven ernaar om binnen 24 uur te reageren op alle aanvragen. Spoedgevallen worden met voorrang behandeld.
              </p>
            </div>
            <div className="editorial-slat pr-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">Is een offerte gratis?</h3>
              <p className="text-sm text-muted-foreground">
                Ja, alle offertes zijn volledig vrijblijvend en kosteloos. We komen graag bij u langs voor een gratis plaatsbezoek.
              </p>
            </div>
            <div className="editorial-slat pr-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">In welke regio&apos;s zijn jullie actief?</h3>
              <p className="text-sm text-muted-foreground">
                We zijn actief in {company.areas.join(", ")} en omstreken. Neem contact op voor andere locaties.
              </p>
            </div>
            <div className="editorial-slat pr-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">Welke diensten bieden jullie aan?</h3>
              <p className="text-sm text-muted-foreground">
                Van gevelrenovatie tot ramen en deuren, isolatie en volledige renovaties. Bekijk onze diensten pagina voor meer info.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
