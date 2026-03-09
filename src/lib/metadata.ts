import { Metadata } from 'next';

const siteConfig = {
  name: 'Yannova',
  description: 'Ramen, deuren en renovatie in Antwerpen stad en randgemeenten. Gratis opmeting en offerte binnen 24 uur.',
  url: 'https://www.yannova.be',
  ogImage: 'https://www.yannova.be/og-image.jpg',
  links: {
    facebook: 'https://www.facebook.com/yannova',
    instagram: 'https://www.instagram.com/yannova',
  },
};

export function generateMetadata({
  title,
  description,
  image,
  url,
  keywords,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const metadataTitle = title 
    ? `${title} | Yannova` 
    : 'Ramen, Deuren & Renovatie in Antwerpen (Stad + Rand) | Yannova';
  
  const metadataDescription = description || siteConfig.description;
  const metadataImage = image || siteConfig.ogImage;
  const metadataUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;

  return {
    metadataBase: new URL(siteConfig.url),
    title: metadataTitle,
    description: metadataDescription,
    keywords: keywords || [
      'ramen antwerpen',
      'deuren antwerpen',
      'gevelrenovatie antwerpen',
      'totaalrenovatie antwerpen',
      'renovatiebedrijf antwerpen',
    ],
    authors: [{ name: 'Yannova' }],
    creator: 'Yannova',
    publisher: 'Yannova',
    alternates: {
      canonical: metadataUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'nl_BE',
      url: metadataUrl,
      title: metadataTitle,
      description: metadataDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metadataImage,
          width: 1200,
          height: 630,
          alt: metadataTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadataTitle,
      description: metadataDescription,
      images: [metadataImage],
      creator: '@yannova',
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
    other: {
      'geo.region': 'BE-VAN',
      'geo.placename': 'Antwerpen',
      'geo.position': '51.2194;4.4025',
      'ICBM': '51.2194, 4.4025',
    },
  };
}

export { siteConfig };
