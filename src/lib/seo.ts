import { Metadata } from 'next';

const baseUrl = 'https://www.yannova.be';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noindex?: boolean;
}

export function generateSEO({
  title,
  description,
  path = '',
  keywords = [],
  image = '/og-image.jpg',
  noindex = false,
}: SEOProps): Metadata {
  const url = `${baseUrl}${path}`;
  const fullTitle = path === '' ? title : `${title} | Yannova`;

  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      'ramen antwerpen',
      'deuren antwerpen',
      'renovatie antwerpen',
      'yannova',
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: 'website',
      locale: 'nl_BE',
      siteName: 'Yannova Bouw',
      images: [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${baseUrl}${image}`],
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}

// Lokale SEO keywords per gebied
export const locationKeywords = {
  antwerpen: [
    'ramen antwerpen',
    'deuren antwerpen',
    'renovatie antwerpen',
    'gevelrenovatie antwerpen',
    'ramen antwerpen stad',
  ],
  berchem: [
    'ramen berchem',
    'deuren berchem',
    'renovatie berchem',
  ],
  deurne: [
    'ramen deurne',
    'deuren deurne',
    'renovatie deurne',
  ],
  merksem: [
    'ramen merksem',
    'deuren merksem',
    'renovatie merksem',
  ],
  wilrijk: [
    'ramen wilrijk',
    'deuren wilrijk',
    'renovatie wilrijk',
  ],
  mechelen: [
    'ramen mechelen',
    'deuren mechelen',
    'renovatie mechelen',
  ],
  zoersel: [
    'ramen zoersel',
    'deuren zoersel',
    'renovatie zoersel',
  ],
};
