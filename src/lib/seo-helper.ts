import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { company } from '@/lib/company';
import { logger } from '@/lib/logger';

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
        title: 'Ramen & Deuren in Antwerpen Stad en rond Antwerpen | Yannova',
        description: 'Ramen, deuren, gevelisolatie en renovatie in Antwerpen stad en randgemeenten rond Antwerpen. Gratis opmeting en offerte binnen 24 uur.',
        keywords: ['ramen antwerpen', 'deuren antwerpen', 'ramen antwerpen stad', 'ramen berchem', 'ramen deurne', 'ramen merksem', 'ramen wilrijk', 'ramen brasschaat', 'ramen schoten', 'ramen wijnegem', 'gevelrenovatie antwerpen', 'totaalrenovatie antwerpen'],
    },
    '/diensten': {
        title: 'Diensten in Antwerpen & Rand | Ramen, Deuren en Renovatie',
        description: 'Ontdek onze diensten voor Antwerpen stad en rond Antwerpen: ramen en deuren, gevelrenovatie, isolatie en totaalrenovatie.',
        keywords: ['diensten antwerpen', 'ramen en deuren antwerpen', 'gevelrenovatie antwerpen', 'isolatie antwerpen', 'totaalrenovatie antwerpen', 'aannemer antwerpen'],
    },
    '/diensten/ramen-deuren': {
        title: 'Ramen & Deuren in Antwerpen (Stad + Rand) | Yannova',
        description: 'PVC en aluminium ramen en deuren met HR++ of drievoudig glas. Plaatsing in Antwerpen stad en rond Antwerpen, inclusief Berchem, Deurne en Wilrijk.',
        keywords: ['ramen plaatsen antwerpen', 'deuren plaatsen antwerpen', 'ramen berchem', 'ramen deurne', 'ramen merksem', 'ramen wilrijk', 'aluminium ramen antwerpen', 'pvc ramen antwerpen'],
    },
    '/diensten/gevelrenovatie': {
        title: 'Gevelrenovatie Antwerpen & Omgeving | Crepi en Isolatie',
        description: 'Gevelrenovatie en crepi met isolatie in Antwerpen stad en randgemeenten rond Antwerpen. Verbeter uw EPC en bescherm uw gevel duurzaam.',
        keywords: ['gevelrenovatie antwerpen', 'crepi antwerpen', 'gevelisolatie antwerpen', 'epc verbeteren antwerpen', 'vochtbestrijding antwerpen'],
    },
    '/diensten/isolatie': {
        title: 'Isolatiewerken Antwerpen | Dak-, Gevel- en Vloerisolatie',
        description: 'Professionele isolatiewerken in Antwerpen en rond Antwerpen: dakisolatie, gevelisolatie en vloerisolatie met premie-advies.',
        keywords: ['isolatiewerken antwerpen', 'dakisolatie antwerpen', 'gevelisolatie antwerpen', 'vloerisolatie antwerpen', 'epc verbeteren antwerpen'],
    },
    '/diensten/renovatie': {
        title: 'Totaalrenovatie Antwerpen | Renovatie van A tot Z',
        description: 'Totaalrenovatie met één aanspreekpunt in Antwerpen stad en rond Antwerpen. Van planning tot afwerking met een vaste ploeg.',
        keywords: ['totaalrenovatie antwerpen', 'renovatie aannemer antwerpen', 'verbouwing antwerpen', 'woningrenovatie antwerpen'],
    },
    '/projecten': {
        title: 'Projecten in Antwerpen en Rand | Realisaties Yannova',
        description: 'Bekijk onze realisaties van ramen, deuren, gevelrenovatie en renovatie in Antwerpen stad en randgemeenten rond Antwerpen.',
        keywords: ['projecten antwerpen', 'realisaties antwerpen', 'ramen projecten antwerpen', 'renovatie voorbeelden antwerpen'],
    },
    '/premie-gids': {
        title: 'Premie Gids 2026 | Renovatiepremies Antwerpen',
        description: 'Overzicht van Mijn VerbouwPremie en renovatiepremies voor projecten in Antwerpen en de regio rond Antwerpen.',
        keywords: ['renovatiepremies antwerpen', 'mijn verbouwpremie antwerpen', 'isolatiepremie antwerpen', 'premie aanvragen antwerpen'],
    },
    '/contact': {
        title: 'Contact | Gratis Offerte Ramen & Renovatie – Yannova',
        description: `Vraag een gratis offerte aan voor ramen, deuren of renovatie in Antwerpen stad en rond Antwerpen. Bel ${company.phoneDisplay} of stuur ons via WhatsApp.`,
        keywords: ['contact antwerpen', 'offerte ramen antwerpen', 'offerte renovatie antwerpen', 'gratis opmeting antwerpen'],
    },
    '/over-ons': {
        title: 'Over Yannova | Aannemer actief in Antwerpen en omgeving',
        description: 'Yannova Bouw is een ervaren aannemer voor Antwerpen stad en randgemeenten. Specialist in ramen, deuren, isolatie en renovatie.',
        keywords: ['over yannova', 'aannemer antwerpen', 'bouwbedrijf antwerpen', 'renovatiebedrijf antwerpen'],
    },
    '/advies': {
        title: 'Advies & Premies in Antwerpen | Yannova',
        description: 'Praktisch advies over renovatiepremies, energiebesparing en rendabele renovaties in Antwerpen stad en rond Antwerpen.',
        keywords: ['premie advies antwerpen', 'renovatie advies antwerpen', 'energiebesparing antwerpen', 'mijn verbouwpremie advies'],
    },
    '/werkgebied/antwerpen': {
        title: 'Werkgebied Antwerpen | Ramen, Deuren en Renovatie',
        description: 'Yannova is actief in Antwerpen stad en randgemeenten rond Antwerpen voor ramen, deuren, gevelisolatie en totaalrenovatie.',
        keywords: ['werkgebied antwerpen', 'ramen antwerpen stad', 'deuren antwerpen stad', 'renovatie antwerpen en rand'],
    },
};

export async function getSeoMetadata(path: string): Promise<Metadata> {
    try {
        const seoPage = await prisma.seoPage.findFirst({
            where: { path },
        });

        // Use database data if available, otherwise use defaults
        const defaults = defaultSeoData[path] || {};
        const defaultTitle = (defaults.title as string) || 'Yannova Bouw | Ramen, Deuren & Renovatie Antwerpen';
        const defaultDescription = (defaults.description as string) || 'Yannova plaatst ramen en deuren en voert renovaties uit in Antwerpen stad en rond Antwerpen.';

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
        logger.error('Error fetching SEO metadata', error);
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
