import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';

export async function getSeoMetadata(path: string): Promise<Metadata> {
    try {
        const seoPage = await prisma.seoPage.findFirst({
            where: { path },
        });

        if (!seoPage) {
            return {};
        }

        return {
            title: seoPage.title,
            description: seoPage.description,
            keywords: seoPage.keywords ? seoPage.keywords.split(',').map((k: string) => k.trim()) : [],
            alternates: {
                canonical: seoPage.canonicalUrl || `https://www.yannova.be${path}`,
            },
            openGraph: {
                title: seoPage.ogTitle || seoPage.title,
                description: seoPage.ogDescription || seoPage.description,
                url: `https://www.yannova.be${path}`,
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
        console.error('Error fetching SEO metadata:', error);
        return {};
    }
}
