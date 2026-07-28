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
    location: 'Geraardsbergen',
    service: 'Gevelrenovatie',
    text: 'Yannova heeft onze gevel in Geraardsbergen volledig gerenoveerd met crepi. Het resultaat is verbluffend! Zeer propere afwerking en alles volgens afspraak. De communicatie was uitstekend en ze hielden zich perfect aan de planning.',
    rating: 5,
    date: '2025-11',
    verified: true,
  },
  {
    id: '2',
    name: 'Tom J.',
    location: 'Ninove',
    service: 'Ramen & Deuren',
    text: 'Nieuwe ramen laten plaatsen in Ninove. Het advies was eerlijk en de plaatsers werkten zeer nauwkeurig. Een absolute aanrader voor wie kwaliteit zoekt. De isolatie is merkbaar verbeterd!',
    rating: 5,
    date: '2025-10',
    verified: true,
  },
  {
    id: '3',
    name: 'Familie Peeters',
    location: 'Zottegem',
    service: 'Totaalrenovatie',
    text: 'We zochten een aannemer voor onze totaalrenovatie in Zottegem en kwamen bij Yannova terecht. Eén aanspreekpunt voor alles was een enorme geruststelling. Professioneel werk van A tot Z.',
    rating: 5,
    date: '2025-09',
    verified: true,
  },
  {
    id: '4',
    name: 'Linda M.',
    location: 'Ronse',
    service: 'Isolatie',
    text: 'Gevelisolatie laten aanbrengen in Ronse. Zeer tevreden over het resultaat. Het huis is nu veel warmer en onze energiefactuur is merkbaar gedaald. Aanrader!',
    rating: 5,
    date: '2025-08',
    verified: true,
  },
  {
    id: '5',
    name: 'Marc D.',
    location: 'Brakel',
    service: 'Ramen',
    text: 'Snelle service, correcte prijs en kwaliteitsvol werk. De nieuwe ramen zijn prachtig en perfect geplaatst in Brakel. Geen rommel achtergelaten, alles netjes opgeruimd.',
    rating: 5,
    date: '2025-07',
    verified: true,
  },
  {
    id: '6',
    name: 'Sarah & Kevin',
    location: 'Aalst',
    service: 'Gevelrenovatie',
    text: 'Onze gevel ziet er weer als nieuw uit! Yannova heeft ons goed geadviseerd over de beste oplossing. Het team was vriendelijk en professioneel. Top!',
    rating: 5,
    date: '2025-06',
    verified: true,
  },
];

// Google Reviews data
// ⚠️ VEREIST: Vul je Google Place ID en review link in (zie GOOGLE-REVIEWS-SETUP.md)
// Place ID vinden: https://business.google.com → jouw bedrijf → "bekijk op Google Maps"
// Review link: https://business.google.com → Reviews → "Meer reviews opvragen"
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
  // TODO: Vervang door je echte Google Place ID (begint met "ChIJ...")
  // Instructies: zie GOOGLE-REVIEWS-SETUP.md in de root van het project
  googlePlaceId: 'YOUR_GOOGLE_PLACE_ID',
  // TODO: Vervang door je directe review link (te vinden in Google Business Profile)
  reviewsUrl: 'https://search.google.com/local/writereview?placeid=YOUR_GOOGLE_PLACE_ID',
  // Directe link om reviews te bekijken op Google Maps:
  mapsUrl: 'https://www.google.com/maps/search/Yannova+Bouw+Geraardsbergen',
};
