// Generate SEO for all pages using AI
import { generateAiSeo } from '@/lib/actions';
import { prisma } from '@/lib/prisma';

const pages = [
  { path: '/', name: 'Homepage - Renovatiebedrijf Yannova' },
  { path: '/diensten', name: 'Diensten - Ramen, Deuren, Renovatie' },
  { path: '/projecten', name: 'Projecten - Realisaties Portfolio' },
  { path: '/over-ons', name: 'Over Ons - Yannova Bouw Bedrijf' },
  { path: '/advies', name: 'Advies - Renovatiepremies en Tips' },
  { path: '/premie-gids', name: 'Premie Gids - Renovatie Subsidies 2025' },
  { path: '/contact', name: 'Contact - Vrijblijvende Offerte' },
];

async function generateAllSeo() {
  for (const page of pages) {
    console.log(`Generating SEO for ${page.name}...`);
    
    const formData = new FormData();
    formData.append('path', page.path);
    formData.append('pageName', page.name);
    
    const result = await generateAiSeo(undefined, formData);
    
    if (result.success && result.data) {
      // Save to database
      await prisma.seoPage.upsert({
        where: { path: page.path },
        update: {
          title: result.data.title,
          description: result.data.description,
          keywords: result.data.keywords,
          h1: result.data.h1,
          ogTitle: result.data.ogTitle,
          ogDescription: result.data.ogDescription,
        },
        create: {
          path: page.path,
          title: result.data.title,
          description: result.data.description,
          keywords: result.data.keywords,
          h1: result.data.h1,
          ogTitle: result.data.ogTitle,
          ogDescription: result.data.ogDescription,
        },
      });
      console.log(`✓ Saved SEO for ${page.name}`);
    } else {
      console.error(`✗ Failed for ${page.name}:`, result.error);
    }
  }
  console.log('Done!');
}

generateAllSeo();
