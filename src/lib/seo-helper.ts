import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { company } from '@/lib/company';
import { logger } from '@/lib/logger';

const isBuildProcess =
    process.env.NEXT_PHASE === 'phase-production-build' ||
    process.env.npm_lifecycle_event === 'build';

// Get the base URL for the site, environment-aware
const getBaseUrl = (): string => {
    // In production, use NEXT_PUBLIC_SITE_URL
    if (process.env.NEXT_PUBLIC_SITE_URL) {
        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL.trim();
        return siteUrl.startsWith('http') ? siteUrl : `https://${siteUrl}`;
    }
    
    // In Vercel preview deployments, use VERCEL_URL
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }
    
    // SEO-safe fallback (also used in local previews when no env vars are set)
    return 'https://www.yannova.be';
};

// Default SEO metadata for key pages (local + service-specific)
const defaultSeoData: Record<string, Metadata> = {
    '/': {
        title: 'Ramen & Deuren in Geraardsbergen en de Vlaamse Ardennen | Yannova',
        description: 'Ramen, deuren, gevelisolatie en renovatie in Geraardsbergen, Ninove, Zottegem, Ronse en omgeving. Gratis opmeting en offerte binnen 24 uur.',
        keywords: ['ramen geraardsbergen', 'deuren geraardsbergen', 'ramen ninove', 'ramen zottegem', 'ramen ronse', 'ramen brakel', 'ramen aalst', 'gevelrenovatie geraardsbergen', 'totaalrenovatie geraardsbergen'],
    },
    '/diensten': {
        title: 'Diensten in Geraardsbergen & Omgeving | Ramen, Deuren en Renovatie',
        description: 'Ontdek onze diensten in Geraardsbergen en de Vlaamse Ardennen: ramen en deuren, gevelrenovatie, isolatie en totaalrenovatie.',
        keywords: ['diensten geraardsbergen', 'ramen en deuren geraardsbergen', 'gevelrenovatie geraardsbergen', 'isolatie geraardsbergen', 'totaalrenovatie geraardsbergen', 'aannemer geraardsbergen'],
    },
    '/diensten/ramen-deuren': {
        title: 'Ramen & Deuren in Geraardsbergen & Vlaamse Ardennen | Yannova',
        description: 'PVC en aluminium ramen en deuren met HR++ of drievoudig glas. Plaatsing in Geraardsbergen, Ninove, Zottegem, Ronse en Brakel.',
        keywords: ['ramen plaatsen geraardsbergen', 'deuren plaatsen geraardsbergen', 'ramen ninove', 'ramen zottegem', 'ramen ronse', 'ramen brakel', 'aluminium ramen geraardsbergen', 'pvc ramen geraardsbergen'],
    },
    '/diensten/gevelrenovatie': {
        title: 'Gevelrenovatie Geraardsbergen & Omgeving | Crepi en Isolatie',
        description: 'Gevelrenovatie en crepi met isolatie in Geraardsbergen en omliggende steden in de Vlaamse Ardennen. Verbeter uw EPC en bescherm uw gevel duurzaam.',
        keywords: ['gevelrenovatie geraardsbergen', 'crepi geraardsbergen', 'gevelisolatie geraardsbergen', 'epc verbeteren geraardsbergen', 'vochtbestrijding geraardsbergen'],
    },
    '/diensten/isolatie': {
        title: 'Isolatiewerken Geraardsbergen | Dakisolatie, Spouwmuurisolatie & Vloerisolatie',
        description: 'Yannova voert isolatiewerken uit in Geraardsbergen en regio Vlaamse Ardennen: dakisolatie, spouwmuurisolatie, buitengevelisolatie en vloerisolatie met helder advies over EPC en premies.',
        keywords: ['isolatiewerken geraardsbergen', 'isolatiebedrijf geraardsbergen', 'dakisolatie geraardsbergen', 'spouwmuurisolatie geraardsbergen', 'muurisolatie geraardsbergen', 'vloerisolatie geraardsbergen', 'zolderisolatie geraardsbergen', 'isolatie offerte geraardsbergen', 'epc verbeteren geraardsbergen'],
    },
    '/diensten/renovatie': {
        title: 'Totaalrenovatie Geraardsbergen | Renovatie van A tot Z',
        description: 'Totaalrenovatie met één aanspreekpunt in Geraardsbergen en de Vlaamse Ardennen. Van planning tot afwerking met een vaste ploeg.',
        keywords: ['totaalrenovatie geraardsbergen', 'renovatie aannemer geraardsbergen', 'verbouwing geraardsbergen', 'woningrenovatie geraardsbergen'],
    },
    '/projecten': {
        title: 'Projecten in Geraardsbergen & Omgeving | Realisaties Yannova',
        description: 'Bekijk onze realisaties van ramen, deuren, gevelrenovatie en renovatie in Geraardsbergen en de omliggende regio.',
        keywords: ['projecten geraardsbergen', 'realisaties geraardsbergen', 'ramen projecten geraardsbergen', 'renovatie voorbeelden geraardsbergen'],
    },
    '/premie-gids': {
        title: 'Premie Gids 2026 | Renovatiepremies Geraardsbergen & Oost-Vlaanderen',
        description: 'Overzicht van Mijn VerbouwPremie en renovatiepremies voor projecten in Geraardsbergen en de Vlaamse Ardennen.',
        keywords: ['renovatiepremies geraardsbergen', 'mijn verbouwpremie geraardsbergen', 'isolatiepremie geraardsbergen', 'premie aanvragen geraardsbergen'],
    },
    '/contact': {
        title: 'Contact | Gratis Offerte Ramen & Renovatie – Yannova Geraardsbergen',
        description: `Vraag een gratis offerte aan voor ramen, deuren of renovatie in Geraardsbergen en omgeving. Bel ${company.phoneDisplay} of stuur ons via WhatsApp.`,
        keywords: ['contact geraardsbergen', 'offerte ramen geraardsbergen', 'offerte renovatie geraardsbergen', 'gratis opmeting geraardsbergen'],
    },
    '/over-ons': {
        title: 'Over Yannova | Aannemer actief in Geraardsbergen en omgeving',
        description: 'Yannova Bouw is een ervaren aannemer gevestigd in Geraardsbergen. Specialist in ramen, deuren, isolatie en renovatie in de Vlaamse Ardennen.',
        keywords: ['over yannova', 'aannemer geraardsbergen', 'bouwbedrijf geraardsbergen', 'renovatiebedrijf geraardsbergen'],
    },
    '/advies': {
        title: 'Advies & Premies in Geraardsbergen | Yannova',
        description: 'Praktisch advies over renovatiepremies, energiebesparing en rendabele renovaties in Geraardsbergen en de Vlaamse Ardennen.',
        keywords: ['premie advies geraardsbergen', 'renovatie advies geraardsbergen', 'energiebesparing geraardsbergen', 'mijn verbouwpremie advies'],
    },
    '/werkgebied/geraardsbergen': {
        title: 'Werkgebied Geraardsbergen | Ramen, Deuren en Renovatie',
        description: 'Yannova is gevestigd in Geraardsbergen en actief in de volledige Vlaamse Ardennen en Denderstreek voor ramen, deuren, gevelisolatie en totaalrenovatie.',
        keywords: ['werkgebied geraardsbergen', 'ramen geraardsbergen', 'deuren geraardsbergen', 'renovatie geraardsbergen'],
    },
};

export async function getSeoMetadata(path: string): Promise<Metadata> {
    try {
        const seoPage = await prisma.seoPage.findFirst({
            where: { path },
        });

        // Use database data if available, otherwise use defaults
        const defaults = defaultSeoData[path] || {};
        const defaultTitle = (defaults.title as string) || 'Yannova Bouw | Ramen, Deuren & Renovatie Geraardsbergen';
        const defaultDescription = (defaults.description as string) || 'Yannova plaatst ramen en deuren en voert renovaties uit in Geraardsbergen en de Vlaamse Ardennen.';

        if (!seoPage) {
            return {
                title: defaultTitle,
                description: defaultDescription,
                keywords: (defaults.keywords as string[]) || [],
                alternates: {
                    canonical: `${getBaseUrl()}${path}`,
                },
                openGraph: {
                    title: defaultTitle,
                    description: defaultDescription,
                    url: `${getBaseUrl()}${path}`,
                    type: 'website',
                    locale: 'nl_BE',
                    siteName: 'Yannova Bouw',
                },
                twitter: {
                    card: 'summary_large_image',
                    title: defaultTitle,
                    description: defaultDescription,
                },
            };
        }

        return {
            title: seoPage.title || defaultTitle,
            description: seoPage.description || defaultDescription,
            keywords: seoPage.keywords ? seoPage.keywords.split(',').map((k: string) => k.trim()) : (defaults.keywords as string[]) || [],
            alternates: {
                canonical: seoPage.canonicalUrl || `${getBaseUrl()}${path}`,
            },
            openGraph: {
                title: seoPage.ogTitle || seoPage.title || defaultTitle,
                description: seoPage.ogDescription || seoPage.description || defaultDescription,
                url: `${getBaseUrl()}${path}`,
                images: seoPage.ogImage ? [{ url: seoPage.ogImage }] : [],
                type: 'website',
                locale: 'nl_BE',
                siteName: 'Yannova Bouw',
            },
            twitter: {
                card: 'summary_large_image',
                title: seoPage.ogTitle || seoPage.title || defaultTitle,
                description: seoPage.ogDescription || seoPage.description || defaultDescription,
                images: seoPage.ogImage ? [seoPage.ogImage] : [],
            },
            robots: {
                index: !seoPage.noindex,
                follow: !seoPage.nofollow,
            },
        };
    } catch (error) {
        if (!isBuildProcess) {
            logger.error('Error fetching SEO metadata', error);
        }
        // Return defaults on error
        const defaults = defaultSeoData[path] || {};
        return {
            ...defaults,
            alternates: {
                canonical: `${getBaseUrl()}${path}`,
            },
        };
    }
}
