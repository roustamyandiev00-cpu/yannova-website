/**
 * SEO Component - Helper voor het genereren van metadata per pagina
 * 
 * Gebruik in page.tsx:
 * export const metadata = generatePageMetadata({
 *   title: "Ramen Antwerpen",
 *   description: "...",
 *   keywords: ["ramen antwerpen", ...],
 * });
 */

import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  noIndex = false,
}: SEOProps): Metadata {
  const baseUrl = 'https://www.yannova.be';
  const fullTitle = title.includes('Yannova') ? title : `${title} | Yannova`;
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const ogImage = image || `${baseUrl}/og-image.jpg`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      'ramen antwerpen',
      'deuren antwerpen',
      'renovatie antwerpen',
    ],
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      type,
      locale: 'nl_BE',
      siteName: 'Yannova Bouw',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };

  return metadata;
}

/**
 * Helper voor lokale SEO pagina&apos;s (werkgebied)
 */
export function generateLocalPageMetadata({
  city,
  service = 'Ramen & Deuren',
  description,
  keywords = [],
}: {
  city: string;
  service?: string;
  description?: string;
  keywords?: string[];
}): Metadata {
  const title = `${service} ${city}`;
  const defaultDescription = 
    `${service} in ${city}. Gratis opmeting en offerte binnen 24 uur. ` +
    `Specialist in PVC en aluminium ramen, deuren en renovatie. ` +
    `Actief in ${city} en omgeving.`;

  return generatePageMetadata({
    title,
    description: description || defaultDescription,
    keywords: [
      `${service.toLowerCase()} ${city.toLowerCase()}`,
      `${service.toLowerCase()} plaatsen ${city.toLowerCase()}`,
      `renovatie ${city.toLowerCase()}`,
      ...keywords,
    ],
    url: `/werkgebied/${city.toLowerCase()}`,
  });
}

/**
 * Helper voor blog posts
 */
export function generateBlogMetadata({
  title,
  description,
  slug,
  publishedTime,
  modifiedTime,
  keywords = [],
  image,
}: {
  title: string;
  description: string;
  slug: string;
  publishedTime: string;
  modifiedTime?: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  return generatePageMetadata({
    title,
    description,
    keywords: [...keywords, 'blog', 'advies', 'tips'],
    url: `/blog/${slug}`,
    type: 'article',
    publishedTime,
    modifiedTime,
    image,
  });
}

export default generatePageMetadata;

/**
 * Helper voor FAQ Schema (structured data)
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Helper voor Breadcrumb Schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  const baseUrl = 'https://www.yannova.be';
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

/**
 * Alias voor backwards compatibility
 */
export const generateSEO = generatePageMetadata;
