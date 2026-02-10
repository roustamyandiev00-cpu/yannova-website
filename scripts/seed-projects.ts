import { PrismaClient } from '@prisma/client';
import projectsData from '../src/data/projects.json';

const prisma = new PrismaClient();

async function main() {

  console.log('Bezig met seeden van projecten...');

  for (const imageUrl of projectsData) {
    // Try to derive a title from the filename
    const filename = imageUrl.split('/').pop()?.split('.')[0] ?? '';
    const title = filename
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    await prisma.project.create({
      data: {
        title: title || 'Nieuw Project',
        description: `Realisatie van een project: ${title}. Hoogwaardige afwerking door Yannova Bouw.`,
        category: 'Totaalrenovatie',
        imageUrl,
      },
    });
  }

  console.log('Seeding voltooid!');
}

main()
  .catch((e) => {

    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
