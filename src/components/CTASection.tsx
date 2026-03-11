"use client";
import Link from 'next/link';
import { ArrowRight, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import { company } from '@/lib/company';
import { FadeIn } from './animations/FadeIn';
import { gtmTrackPhone, gtmTrackWhatsApp } from '@/components/GoogleTagManager';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  showSecondaryButton?: boolean;
  showFeatures?: boolean;
  variant?: 'default' | 'gradient' | 'minimal';
}

export function CTASection({
  title = 'Klaar om te starten?',
  subtitle = 'Uw Project Begint Hier',
  description = 'Vraag een gratis offerte aan en ontdek wat wij voor uw woning kunnen betekenen. Binnen 24 uur ontvangt u een duidelijke offerte op maat.',
  primaryButtonText = 'Gratis offerte aanvragen',
  primaryButtonHref = '/contact',
  showSecondaryButton = true,
  showFeatures = true,
  variant = 'default',
}: CTASectionProps) {
  const features = [
    'Gratis opmeting en advies',
    'Offerte binnen 24 uur',
    'Vakmanschap gegarandeerd',
    'Transparante prijzen',
  ];

  if (variant === 'minimal') {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              {description}
            </p>
            <Link
              href={primaryButtonHref}
              className="inline-flex items-center gap-2 rounded-xl bg-secondary px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-secondary/90 transition-all hover:scale-105"
            >
              {primaryButtonText}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    );
  }

  if (variant === 'gradient') {
    return (
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden bg-linear-to-br from-secondary via-secondary/90 to-orange-600 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
            
            <FadeIn>
              <div className="relative z-10">
                <span className="inline-block text-white/80 text-sm font-semibold tracking-wider uppercase mb-4">
                  {subtitle}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {title}
                </h2>
                <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                  {description}
                </p>
                
                {showFeatures && (
                  <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                    {features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                      >
                        <CheckCircle2 className="h-4 w-4 text-white" />
                        <span className="text-white text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href={primaryButtonHref}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-secondary shadow-xl hover:bg-gray-50 transition-all hover:scale-105"
                  >
                    {primaryButtonText}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  {showSecondaryButton && (
                    <a
                      href={company.phoneHref}
                      onClick={() => gtmTrackPhone()}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 transition-all"
                    >
                      <Phone className="h-5 w-5" />
                      {company.phoneDisplay}
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-secondary text-sm font-semibold tracking-wider uppercase">
                {subtitle}
              </span>
              <h2 className="text-4xl font-bold text-foreground mt-3 mb-4">
                {title}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {description}
              </p>
            </div>

            {showFeatures && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-card p-4 rounded-xl border border-border"
                  >
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-sm font-medium text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={primaryButtonHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-secondary/90 transition-all hover:scale-105"
              >
                {primaryButtonText}
                <ArrowRight className="h-5 w-5" />
              </Link>
              {showSecondaryButton && (
                <div className="flex gap-3 justify-center">
                  <a
                    href={company.phoneHref}
                    onClick={() => gtmTrackPhone()}
                    className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-4 text-base font-medium text-foreground hover:bg-muted transition-all"
                  >
                    <Phone className="h-5 w-5 text-secondary" />
                    Bel ons
                  </a>
                  <a
                    href={company.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => gtmTrackWhatsApp()}
                    className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-4 text-base font-medium text-foreground hover:bg-muted transition-all"
                  >
                    <MessageCircle className="h-5 w-5 text-secondary" />
                    WhatsApp
                  </a>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
