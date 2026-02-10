// Manual SEO seed data for all pages
import { prisma } from '@/lib/prisma';

const seoData = [
  {
    path: '/',
    title: 'Yannova Bouw | Ramen, Deuren & Renovatie in Zoersel - 30 Jaar Garantie',
    description: 'Uw betrouwbare aannemer voor ramen en deuren, gevelisolatie, crepi en totaalrenovatie in Zoersel, Antwerpen en Mechelen. ✓ 30 jaar garantie ✓ Gratis offerte',
    keywords: 'ramen deuren, renovatie zoersel, gevelrenovatie, crepi, isolatie, totaalrenovatie antwerpen',
    h1: 'Uw Specialist voor Ramen, Deuren en Renovatie',
    ogTitle: 'Yannova Bouw - Renovatie in Zoersel & Antwerpen',
    ogDescription: '30 jaar garantie op ramen, deuren en renovatie. Gratis offerte aanvragen!',
  },
  {
    path: '/diensten',
    title: 'Onze Diensten | Ramen, Deuren, Gevelrenovatie & Renovatie - Yannova',
    description: 'Ontdek onze diensten: PVC en aluminium ramen en deuren, gevelrenovatie met crepi, isolatiewerken en totaalrenovatie in regio Antwerpen.',
    keywords: 'ramen en deuren, pvc ramen, aluminium deuren, gevelrenovatie, crepi, isolatie, renovatie diensten',
    h1: 'Onze Renovatie Diensten',
    ogTitle: 'Diensten - Ramen, Deuren & Renovatie | Yannova',
    ogDescription: 'Specialist in ramen, deuren, gevelwerken en totaalrenovatie. Bekijk onze diensten!',
  },
  {
    path: '/projecten',
    title: 'Realisaties | Renovatie Projecten in Zoersel & Antwerpen - Yannova',
    description: 'Bekijk onze afgeronde renovatieprojecten. Ramen, deuren, gevelrenovatie en totaalrenovaties in Zoersel, Antwerpen en omgeving.',
    keywords: 'renovatie projecten, realisaties, voor en na, ramen plaatsen, gevelrenovatie voorbeelden',
    h1: 'Onze Renovatie Realisaties',
    ogTitle: 'Projecten & Realisaties | Yannova Bouw',
    ogDescription: 'Bekijk onze mooiste renovatieprojecten in regio Antwerpen. Inspiratie voor uw woning!',
  },
  {
    path: '/over-ons',
    title: 'Over Ons | Yannova Bouw - Renovatiebedrijf in Zoersel sinds 2010',
    description: 'Leer Yannova Bouw kennen. Uw lokale renovatiepartner in Zoersel met meer dan 15 jaar ervaring in ramen, deuren en totaalrenovatie.',
    keywords: 'over yannova, renovatiebedrijf zoersel, aannemer antwerpen, wie zijn wij, over ons',
    h1: 'Over Yannova Bouw',
    ogTitle: 'Over Ons | Renovatiebedrijf Yannova Zoersel',
    ogDescription: '15+ jaar ervaring in renovatie. Uw vertrouwde partner in Zoersel en Antwerpen.',
  },
  {
    path: '/advies',
    title: 'Renovatie Advies & Premies | Hulp bij Subsidies - Yannova',
    description: 'Gratis advies over renovatiepremies en subsidies 2025. Wij helpen u bij de premieaanvraag voor ramen, deuren en isolatiewerken.',
    keywords: 'renovatiepremie, renovatie advies, isolatiepremie, ramen premie, subsidie aanvraag',
    h1: 'Renovatie Advies & Premies',
    ogTitle: 'Advies & Premies | Renovatie Subsidies 2025',
    ogDescription: 'Gratis advies over renovatiepremies. Wij helpen u met de premieaanvraag!',
  },
  {
    path: '/premie-gids',
    title: 'Renovatiepremies 2025 | Complete Premie Gids - Yannova',
    description: 'Complete gids renovatiepremies 2025. Alle info over isolatiepremie, ramen en deuren premies, en totaalrenovatie subsidies in Vlaanderen.',
    keywords: 'renovatiepremie 2025, isolatiepremie, premie gids, subsidies renovatie, vlaanderen premie',
    h1: 'Renovatiepremies 2025: Complete Gids',
    ogTitle: 'Renovatiepremies 2025 | Complete Gids',
    ogDescription: 'Alle renovatiepremies op een rij. Isolatie, ramen, totaalrenovatie - wij leggen het uit!',
  },
  {
    path: '/contact',
    title: 'Contact | Vrijblijvende Offerte Aanvragen - Yannova Bouw',
    description: 'Neem contact op met Yannova Bouw voor een gratis offerte. Renovatie in Zoersel, Antwerpen en Mechelen. Bellen, mailen of formulier.',
    keywords: 'contact yannova, offerte aanvragen, renovatie offerte, aannemer zoersel, contactgegevens',
    h1: 'Contact & Offerte Aanvragen',
    ogTitle: 'Contact | Gratis Offerte Aanvragen',
    ogDescription: 'Vrijblijvende offerte aanvragen. Bel 0489 96 00 01 of vul het formulier in.',
  },
];

async function seedSeo() {
  for (const data of seoData) {
    await prisma.seoPage.upsert({
      where: { path: data.path },
      update: data,
      create: data,
    });
    console.log(`✓ SEO voor ${data.path} opgeslagen`);
  }
  console.log('Alle SEO data opgeslagen!');
}

seedSeo();
