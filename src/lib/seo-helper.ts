import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { company } from '@/lib/company';
import { logger } from '@/lib/logger';

// Get the base URL for the site, environment-aware
const getBaseUrl = (): string => {
    // In production, use NEXT_PUBLIC_SITE_URL
    if (process.env.NEXT_PUBLIC_SITE_URL) {
        return process.env.NEXT_PUBLIC_SITE_URL;
    }
    
    // In Vercel preview deployments, use VERCEL_URL
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }
    
    // Fallback to localhost for local development
    return 'http://localhost:3000';
};

// Default SEO metadata for key pages (local + service-specific)
const defaultSeoData: Record<string, Metadata> = {
    '/': {
        title: 'Ramen & Deuren Zoersel | Gratis Opmeting & Offerte – Yannova',
        description: 'PVC en aluminium ramen, deuren, gevelisolatie en renovatie in Zoersel, Antwerpen, Mechelen. 15+ jaar ervaring, gratis opmeting, offerte binnen 24 uur. Vraag nu!',
        keywords: ['ramen zoersel', 'deuren antwerpen', 'gevelisolatie', 'renovatie', 'pvc ramen', 'aluminium deuren', 'yannova'],
    },
    '/diensten': {
        title: 'Onze Diensten | Ramen, Deuren & Renovatie – Yannova Zoersel',
        description: 'Ramen & deuren, gevelrenovatie, totaalrenovatie en isolatiewerken. Gratis opmeting in Zoersel en regio Antwerpen. Ontdek onze diensten.',
        keywords: ['ramen deuren', 'gevelrenovatie', 'totaalrenovatie', 'isolatie', 'aannemer zoersel'],
    },
    '/diensten/ramen-deuren': {
        title: 'Ramen & Deuren Zoersel | PVC & Aluminium – Yannova',
        description: 'HR++ beglazing, PVC en aluminium profielen. Gratis opmeting, premie-advies, 30 jaar garantie. Ramen en deuren in Zoersel en Antwerpen.',
        keywords: ['ramen zoersel', 'pvc ramen', 'aluminium deuren', 'hr++ beglazing', 'ramen plaatsen'],
    },
    '/diensten/gevelrenovatie': {
        title: 'Gevelrenovatie & Crepi Zoersel | Isolatie – Yannova',
        description: 'Gevelisolatie met crepi-afwerking. EPC-verbetering, vochtbestrijding, 10 jaar garantie. Gevelrenovatie in Zoersel en regio Antwerpen.',
        keywords: ['gevelrenovatie', 'crepi', 'gevelisolatie', 'epc verbeteren', 'vochtbestrijding'],
    },
    '/diensten/isolatie': {
        title: 'Isolatiewerken Zoersel | Dak-, Gevel- en Vloerisolatie – Yannova',
        description: 'Isolatiewerken voor dak, gevel en vloer in Zoersel en regio Antwerpen. Verbeter uw EPC en verlaag uw energiefactuur met professioneel advies en uitvoering.',
        keywords: ['isolatiewerken', 'dakisolatie', 'gevelisolatie', 'epc verbeteren', 'isolatie zoersel'],
    },
    '/diensten/renovatie': {
        title: 'Totaalrenovatie Zoersel | Renovatie van A tot Z – Yannova',
        description: 'Totaalrenovatie met één aanspreekpunt: planning, uitvoering en afwerking van uw woning in Zoersel en regio Antwerpen.',
        keywords: ['totaalrenovatie', 'renovatie aannemer', 'renovatie zoersel', 'verbouwing'],
    },
    '/projecten': {
        title: 'Onze Projecten | Realisaties Ramen & Renovatie – Yannova',
        description: 'Bekijk onze gerealiseerde projecten: ramen, deuren, gevelrenovatie in Zoersel, Antwerpen, Mechelen. Vakmanschap met garantie.',
        keywords: ['projecten', 'realisaties', 'ramen projecten', 'renovatie voorbeelden'],
    },
    '/premie-gids': {
        title: 'Premie Gids | Renovatiepremies 2024 – Yannova Zoersel',
        description: 'Overzicht van renovatiepremies in België. MijnVerbouwPremie, Vlaamse isolatiepremies. Wij helpen u aan alle premies.',
        keywords: ['renovatiepremies', 'mijnverbouwpremie', 'isolatiepremie', 'premie aanvragen'],
    },
    '/contact': {
        title: 'Contact | Gratis Offerte Ramen & Renovatie – Yannova',
        description: `Vraag een gratis offerte aan voor ramen, deuren of renovatie. Bel ${company.phoneDisplay} of stuur ons via WhatsApp. Yannova in Zoersel, actief in heel Antwerpen.`,
        keywords: ['contact', 'offerte', 'ramen offerte', 'renovatie offerte'],
    },
    '/over-ons': {
        title: 'Over Yannova | Aannemer Zoersel – 15+ Jaar Ervaring',
        description: 'Yannova Bouw: lokaal aannemersbedrijf in Zoersel. Ramen, deuren, renovatie met vaste ploeg en persoonlijke aanpak.',
        keywords: ['over yannova', 'aannemer zoersel', 'bouwbedrijf', 'renovatiebedrijf'],
    },
};

export async function getSeoMetadata(path: string): Promise<Metadata> {
    try {
        const seoPage = await prisma.seoPage.findFirst({
            where: { path },
        });

        // Use database data if available, otherwise use defaults
        const defaults = defaultSeoData[path] || {};

        if (!seoPage) {
            return {
                ...defaults,
                alternates: {
                    canonical: `${getBaseUrl()}${path}`,
                },
                openGraph: {
                    title: (defaults.title as string) || 'Yannova',
                    description: (defaults.description as string) || '',
                    url: `${getBaseUrl()}${path}`,
                    type: 'website',
                    locale: 'nl_BE',
                },
            };
        }

        return {
            title: seoPage.title || defaults.title,
            description: seoPage.description || defaults.description,
            keywords: seoPage.keywords ? seoPage.keywords.split(',').map((k: string) => k.trim()) : (defaults.keywords as string[]) || [],
            alternates: {
                canonical: seoPage.canonicalUrl || `${getBaseUrl()}${path}`,
            },
            openGraph: {
                title: seoPage.ogTitle || seoPage.title || (defaults.title as string),
                description: seoPage.ogDescription || seoPage.description || (defaults.description as string),
                url: `${getBaseUrl()}${path}`,
                images: seoPage.ogImage ? [{ url: seoPage.ogImage }] : [],
                type: 'website',
                locale: 'nl_BE',
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
