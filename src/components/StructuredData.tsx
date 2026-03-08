import { company } from '@/lib/company';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.yannova.be/#organization',
    name: company.name,
    image: 'https://www.yannova.be/logo.png',
    url: 'https://www.yannova.be',
    telephone: company.phone,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Zoersel',
      addressRegion: 'Antwerpen',
      addressCountry: 'BE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.2667,
      longitude: 4.7167,
    },
    areaServed: company.areas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
    },
    sameAs: [
      'https://www.facebook.com/yannova',
      'https://www.instagram.com/yannova',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ service }: { service: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service,
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      telephone: company.phone,
      email: company.email,
    },
    areaServed: company.areas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
