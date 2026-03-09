import { company } from "./company";

export interface Review {
  author: string;
  rating: number;
  date: string;
  text: string;
}

export function generateReviewSchema(reviews: Review[]) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yannova.be";

  const aggregateRating = {
    "@type": "AggregateRating",
    ratingValue: (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1),
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  };

  const reviewSchemas = reviews.map((review) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    datePublished: review.date,
    reviewBody: review.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    image: `${baseUrl}/logo.png`,
    aggregateRating,
    review: reviewSchemas,
  };
}
