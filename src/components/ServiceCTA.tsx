'use client';

import { Phone, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { company } from '@/lib/company';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/google-ads';
import { gtmTrackPhone, gtmTrackWhatsApp } from '@/components/GoogleTagManager';

interface ServiceCTAProps {
  title: string;
  description: string;
  primaryCTA?: string;
  primaryCTALink?: string;
  showTrustSignals?: boolean;
  variant?: 'default' | 'secondary';
}

export function ServiceCTA({
  title,
  description,
  primaryCTA = 'Gratis offerte aanvragen',
  primaryCTALink = '/contact',
  showTrustSignals = true,
  variant = 'default',
}: ServiceCTAProps) {
  const handlePhoneClick = () => {
    trackPhoneClick();
    gtmTrackPhone();
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    gtmTrackWhatsApp();
  };

  const bgClass = variant === 'secondary' 
    ? 'bg-secondary/10 border-secondary/20' 
    : 'bg-white/5 border-white/10';

  return (
    <section className={`py-16 border-y ${bgClass}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Trust Signals */}
          {showTrustSignals && (
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                <span>Reactie binnen 24u</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                <span>Gratis opmeting</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                <span>10 jaar garantie</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                <span>500+ tevreden klanten</span>
              </div>
            </div>
          )}

          {/* Main CTA */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={primaryCTALink}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-secondary hover:bg-secondary/90 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{primaryCTA}</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a
                href={company.phoneHref}
                onClick={handlePhoneClick}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-8 py-4 text-base font-semibold text-foreground border border-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="h-5 w-5" />
                <span className="hidden sm:inline">{company.phoneDisplay}</span>
                <span className="sm:hidden">Bel nu</span>
              </a>
            </div>

            {/* WhatsApp Alternative */}
            <div className="mt-6">
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Of stuur een WhatsApp bericht</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
