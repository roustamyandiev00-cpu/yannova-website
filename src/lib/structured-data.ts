// Structured Data for SEO (Schema.org)
// LocalBusiness, Service, FAQPage schemas

export interface LocalBusinessData {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressRegion: string;
    addressCountry: string;
  };
  geo: {
    latitude: string;
    longitude: string;
  };
  openingHours: string[];
  priceRange: string;
  image: string;
  areaServed: string[];
}

// Werkgebied: Zoersel + 20-30km straal, Antwerpen + 20-30km straal
const serviceAreas = [
  "Zoersel",
  "Antwerpen", 
  "Mechelen",
  "Westmalle",
  "Brasschaat",
  "Schoten",
  "Sint-Antelinks",
  "Malle",
  "Zandhoven",
  "Herenthout",
  "Heist-op-den-Berg",
  "Bonheiden",
  "Wijnegem",
  "Wommelgem",
  "Borsbeek",
  "Ranst",
  "Grobbendonk",
  "Herentals",
  "Lille",
  "Nijlen",
];

export const localBusinessData: LocalBusinessData = {
  name: "Yannova Bouw",
  description: "Lokale aannemer gespecialiseerd in ramen, deuren, gevelrenovatie en totaalrenovatie in Zoersel en regio Antwerpen. Werkgebied: 20-30 km rond Zoersel en Antwerpen.",
  url: "https://www.yannova.be",
  telephone: "+3231234567",
  email: "info@yannova.be",
  address: {
    streetAddress: "Dorpstraat 1",
    addressLocality: "Zoersel",
    postalCode: "2980",
    addressRegion: "Antwerpen",
    addressCountry: "BE",
  },
  geo: {
    latitude: "51.2625",
    longitude: "4.6472",
  },
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-12:00"],
  priceRange: "€€",
  image: "https://www.yannova.be/images/yannova-og.jpg",
  areaServed: serviceAreas,
};

export function generateLocalBusinessSchema(data: LocalBusinessData = localBusinessData) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${data.url}/#organization`,
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.telephone,
    email: data.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      postalCode: data.address.postalCode,
      addressRegion: data.address.addressRegion,
      addressCountry: data.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: data.geo.latitude,
      longitude: data.geo.longitude,
    },
    openingHoursSpecification: data.openingHours.map((hours) => {
      const [days, time] = hours.split(" ");
      const [opens, closes] = time.split("-");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: days === "Mo-Fr" 
          ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] 
          : ["Saturday"],
        opens,
        closes,
      };
    }),
    priceRange: data.priceRange,
    image: data.image,
    areaServed: data.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    sameAs: [
      "https://www.facebook.com/yannova",
      "https://www.instagram.com/yannova",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
    },
  };
}

export interface ServiceData {
  name: string;
  description: string;
  url: string;
  provider: string;
  areaServed: string[];
  offers?: {
    price: string;
    priceCurrency: string;
  };
}

export const services: ServiceData[] = [
  {
    name: "Ramen & Deuren",
    description: "PVC en aluminium ramen en deuren met HR++ beglazing. Gratis opmeting, premie-advies en professionele plaatsing.",
    url: "https://www.yannova.be/diensten/ramen-deuren",
    provider: "Yannova Bouw",
    areaServed: ["Zoersel", "Antwerpen", "Mechelen"],
    offers: {
      price: "0",
      priceCurrency: "EUR",
    },
  },
  {
    name: "Gevelrenovatie & Crepi",
    description: "Gevelisolatie met crepi-afwerking. EPC-verbetering, vochtbestrijding en 10 jaar garantie.",
    url: "https://www.yannova.be/diensten/gevelrenovatie",
    provider: "Yannova Bouw",
    areaServed: ["Zoersel", "Antwerpen", "Mechelen"],
  },
  {
    name: "Totaalrenovatie",
    description: "Volledige renovatie met één aanspreekpunt. Van ramen en isolatie tot badkamer en keuken.",
    url: "https://www.yannova.be/diensten/renovatie",
    provider: "Yannova Bouw",
    areaServed: ["Zoersel", "Antwerpen", "Mechelen"],
  },
  {
    name: "Isolatiewerken",
    description: "Dak- en gevelisolatie voor een lager E-peil en lagere energiefactuur.",
    url: "https://www.yannova.be/diensten/isolatie",
    provider: "Yannova Bouw",
    areaServed: ["Zoersel", "Antwerpen", "Mechelen"],
  },
];

export function generateServiceSchema(service: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "LocalBusiness",
      name: service.provider,
      "@id": "https://www.yannova.be/#organization",
    },
    areaServed: service.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    ...(service.offers && {
      offers: {
        "@type": "Offer",
        price: service.offers.price,
        priceCurrency: service.offers.priceCurrency,
      },
    }),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
