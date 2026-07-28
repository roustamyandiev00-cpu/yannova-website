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
  const fullTitle = path === '' || title.includes('Yannova') ? title : `${title} | Yannova`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : [
      'ramen geraardsbergen',
      'deuren geraardsbergen',
      'renovatie geraardsbergen',
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
  geraardsbergen: [
    'ramen geraardsbergen',
    'deuren geraardsbergen',
    'renovatie geraardsbergen',
    'gevelrenovatie geraardsbergen',
    'crepi geraardsbergen',
  ],
  ninove: [
    'ramen ninove',
    'deuren ninove',
    'renovatie ninove',
  ],
  zottegem: [
    'ramen zottegem',
    'deuren zottegem',
    'renovatie zottegem',
  ],
  ronse: [
    'ramen ronse',
    'deuren ronse',
    'renovatie ronse',
  ],
  brakel: [
    'ramen brakel',
    'deuren brakel',
    'renovatie brakel',
  ],
  lierde: [
    'ramen lierde',
    'deuren lierde',
    'renovatie lierde',
  ],
  herzele: [
    'ramen herzele',
    'deuren herzele',
    'renovatie herzele',
  ],
  aalst: [
    'ramen aalst',
    'deuren aalst',
    'renovatie aalst',
  ],
};
