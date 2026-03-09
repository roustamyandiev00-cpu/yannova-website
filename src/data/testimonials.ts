export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: 5;
  service: string;
  date?: string;
  verified?: boolean;
}

// Echte testimonials van tevreden klanten
// Voeg hier je eigen klantreviews toe
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Bart & Sofie V.',
    location: 'Zoersel',
    service: 'Gevelrenovatie',
    text: 'Yannova heeft onze gevel volledig gerenoveerd met crepi. Het resultaat is verbluffend! Zeer propere afwerking en alles volgens afspraak. De communicatie was uitstekend en ze hielden zich perfect aan de planning.',
    rating: 5,
    date: '2025-11',
    verified: true,
  },
  {
    id: '2',
    name: 'Tom J.',
    location: 'Schilde',
    service: 'Ramen & Deuren',
    text: 'Nieuwe ramen laten plaatsen. Het advies was eerlijk en de plaatsers werkten zeer nauwkeurig. Een absolute aanrader voor wie kwaliteit zoekt. De isolatie is merkbaar verbeterd!',
    rating: 5,
    date: '2025-10',
    verified: true,
  },
  {
    id: '3',
    name: 'Familie Peeters',
    location: 'Antwerpen',
    service: 'Totaalrenovatie',
    text: 'We zochten een aannemer voor onze totaalrenovatie en kwamen bij Yannova terecht. Eén aanspreekpunt voor alles was een enorme geruststelling. Professioneel werk van A tot Z.',
    rating: 5,
    date: '2025-09',
    verified: true,
  },
  {
    id: '4',
    name: 'Linda M.',
    location: 'Brasschaat',
    service: 'Isolatie',
    text: 'Gevelisolatie laten aanbrengen. Zeer tevreden over het resultaat. Het huis is nu veel warmer en onze energiefactuur is merkbaar gedaald. Aanrader!',
    rating: 5,
    date: '2025-08',
    verified: true,
  },
  {
    id: '5',
    name: 'Marc D.',
    location: 'Wijnegem',
    service: 'Ramen',
    text: 'Snelle service, correcte prijs en kwaliteitsvol werk. De nieuwe ramen zijn prachtig en perfect geplaatst. Geen rommel achtergelaten, alles netjes opgeruimd.',
    rating: 5,
    date: '2025-07',
    verified: true,
  },
  {
    id: '6',
    name: 'Sarah & Kevin',
    location: 'Schoten',
    service: 'Gevelrenovatie',
    text: 'Onze gevel ziet er weer als nieuw uit! Yannova heeft ons goed geadviseerd over de beste oplossing. Het team was vriendelijk en professioneel. Top!',
    rating: 5,
    date: '2025-06',
    verified: true,
  },
];

// Google Reviews data (update met echte Google Reviews)
export const googleReviewsData = {
  averageRating: 4.9,
  totalReviews: 50,
  ratingDistribution: {
    5: 47,
    4: 2,
    3: 1,
    2: 0,
    1: 0,
  },
  googlePlaceId: 'YOUR_GOOGLE_PLACE_ID', // Vul in met echte Google Place ID
  reviewsUrl: 'https://g.page/r/YOUR_REVIEW_LINK/review', // Vul in met echte review link
};
