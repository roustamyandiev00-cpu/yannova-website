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

// Werkgebied: Zoersel + 30km straal, Antwerpen + 30km straal - alle belangrijke gemeenten
const serviceAreas = [
  // Primaire zone (0-10km van Zoersel)
  "Zoersel", "Schilde", "Brasschaat", "Schoten", "Wijnegem", "Wommelgem",
  "Ranst", "Brecht", "Malle", "Westmalle", "Oelegem", "Zandhoven",
  "Massenhoven", "Hove", "Kontich", "Mortsel", "Edegem", "Boechout",
  
  // Antwerpen en districten
  "Antwerpen", "Wilrijk", "Berchem", "Deurne", "Borgerhout", "Merksem",
  "Ekeren", "Hoboken", "Berendrecht", "Zandvliet",
  
  // Noordelijke rand (10-20km)
  "Kapellen", "Stabroek", "Essen", "Kalmthout", "Wuustwezel",
  
  // Zuidelijke zone (10-25km)
  "Lint", "Aartselaar", "Boom", "Rumst", "Niel", "Hemiksem",
  
  // Mechelen en omgeving (20-30km)
  "Mechelen", "Bonheiden", "Putte", "Berlaar", "Lier", "Nijlen",
  "Duffel", "Sint-Katelijne-Waver", "Walem",
  
  // Kempen (15-30km)
  "Heist-op-den-Berg", "Grobbendonk", "Herentals", "Vorselaar", "Olen",
  "Westerlo", "Turnhout", "Oud-Turnhout", "Beerse", "Vosselaar",
  "Lille", "Kasterlee", "Geel", "Mol", "Balen", "Dessel", "Retie"
];

export const localBusinessData: LocalBusinessData = {
  name: "Yannova Bouw",
  description: "Specialist in ramen plaatsen, deuren plaatsen, gevelrenovatie en totaalrenovatie in Zoersel, Antwerpen en omgeving. PVC & aluminium ramen met HR++ en drievoudig glas. Gratis opmeting binnen 30km. 15+ jaar ervaring. Premie-advies Mijn VerbouwPremie.",
  url: "https://www.yannova.be",
  telephone: "+32489960001",
  email: "info@yannova.be",
  address: {
    streetAddress: "Zoersel",
    addressLocality: "Zoersel",
    postalCode: "2980",
    addressRegion: "Antwerpen",
    addressCountry: "BE",
  },
  geo: {
    latitude: "51.2625",
    longitude: "4.6472",
  },
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-13:00"],
  priceRange: "€€-€€€",
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
    name: "Ramen & Deuren Plaatsen",
    description: "PVC en aluminium ramen en deuren plaatsen met HR++ of drievoudig glas. Energiezuinige ramen voor maximale isolatie. Gratis opmeting in Zoersel, Antwerpen, Schilde, Brasschaat en omgeving. Premie-advies Mijn VerbouwPremie inbegrepen. 30 jaar garantie.",
    url: "https://www.yannova.be/diensten/ramen-deuren",
    provider: "Yannova Bouw",
    areaServed: serviceAreas,
    offers: {
      price: "0",
      priceCurrency: "EUR",
    },
  },
  {
    name: "Gevelrenovatie & Crepi",
    description: "Professionele gevelisolatie met crepi-afwerking. EPC-verbetering gemiddeld 2-3 labels. Vochtbestrijding en drooglegging. 10 jaar garantie op afwerking. Ideaal voor woningen in Zoersel, Antwerpen en regio.",
    url: "https://www.yannova.be/diensten/gevelrenovatie",
    provider: "Yannova Bouw",
    areaServed: serviceAreas,
  },
  {
    name: "Totaalrenovatie & Verbouwing",
    description: "Volledige renovatie met één aanspreekpunt. Van ramen en gevelisolatie tot badkamer, keuken en binnenafwerking. Vast projectteam, geen onderaannemers. Duidelijke planning en transparante communicatie.",
    url: "https://www.yannova.be/diensten/renovatie",
    provider: "Yannova Bouw",
    areaServed: serviceAreas,
  },
  {
    name: "Gevelisolatie & Isolatiewerken",
    description: "Dak- en gevelisolatie voor een lager E-peil en lagere energiefactuur. EPC-verbetering voor hogere woningwaarde. Premies mogelijk via Mijn VerbouwPremie.",
    url: "https://www.yannova.be/diensten/isolatie",
    provider: "Yannova Bouw",
    areaServed: serviceAreas,
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
