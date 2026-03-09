import { company } from "./company";

interface ProductSchemaProps {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export function generateProductSchema(props: ProductSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yannova.be";
  
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: props.name,
    description: props.description,
    image: props.image || `${baseUrl}/og-image.jpg`,
    brand: {
      "@type": "Brand",
      name: props.brand || company.name,
    },
  };

  if (props.offers) {
    schema.offers = {
      "@type": "Offer",
      url: baseUrl,
      priceCurrency: props.offers.priceCurrency || "EUR",
      price: props.offers.price,
      availability: props.offers.availability || "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: company.name,
      },
    };
  }

  if (props.aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: props.aggregateRating.ratingValue,
      reviewCount: props.aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return schema;
}

// Voorgedefinieerde producten
export const products = {
  pvcRamen: {
    name: "PVC Ramen met HR++ Beglazing",
    description: "Energiezuinige PVC ramen met hoogrendementsbeglazing. 30 jaar garantie op profielen.",
    offers: {
      price: "400",
      priceCurrency: "EUR",
    },
    aggregateRating: {
      ratingValue: 4.8,
      reviewCount: 150,
    },
  },
  aluminiumRamen: {
    name: "Aluminium Ramen met HR++ Beglazing",
    description: "Moderne aluminium ramen met slanke profielen. Thermisch onderbroken voor optimale isolatie.",
    offers: {
      price: "600",
      priceCurrency: "EUR",
    },
    aggregateRating: {
      ratingValue: 4.9,
      reviewCount: 120,
    },
  },
  pvcDeuren: {
    name: "PVC Deuren met Inbraakwerend Beslag",
    description: "Veilige PVC deuren met meerpuntsluiting en RC2 certificering.",
    offers: {
      price: "1500",
      priceCurrency: "EUR",
    },
    aggregateRating: {
      ratingValue: 4.7,
      reviewCount: 80,
    },
  },
};
