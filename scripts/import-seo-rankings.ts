/**
 * Script om SEO rankings te importeren
 * 
 * Gebruik:
 * npx tsx scripts/import-seo-rankings.ts
 */

import { prisma } from '../src/lib/prisma';

const seoRankings = [
  {
    keyword: 'gevelrenovatie antwerpen',
    position: 3,
    previousPosition: 7,
    url: '/diensten/gevelrenovatie',
    searchVolume: 880,
    difficulty: 45
  },
  {
    keyword: 'ramen plaatsen antwerpen',
    position: 5,
    previousPosition: 8,
    url: '/diensten/ramen',
    searchVolume: 720,
    difficulty: 52
  },
  {
    keyword: 'renovatiebedrijf antwerpen',
    position: 2,
    previousPosition: 4,
    url: '/renovatiebedrijf-antwerpen',
    searchVolume: 590,
    difficulty: 48
  },
  {
    keyword: 'crepi isolatie',
    position: 4,
    previousPosition: 6,
    url: '/diensten/gevelisolatie-crepi',
    searchVolume: 480,
    difficulty: 38
  },
  {
    keyword: 'totaalrenovatie antwerpen',
    position: 6,
    previousPosition: 9,
    url: '/diensten/totaalrenovatie',
    searchVolume: 390,
    difficulty: 55
  },
  {
    keyword: 'pvc ramen antwerpen',
    position: 7,
    previousPosition: 12,
    url: '/diensten/ramen',
    searchVolume: 320,
    difficulty: 42
  },
  {
    keyword: 'gevelisolatie prijs',
    position: 8,
    previousPosition: 11,
    url: '/diensten/gevelisolatie-crepi',
    searchVolume: 290,
    difficulty: 35
  },
  {
    keyword: 'renovatie premies vlaanderen',
    position: 4,
    previousPosition: 5,
    url: '/premies',
    searchVolume: 1200,
    difficulty: 62
  },
  {
    keyword: 'aluminium ramen antwerpen',
    position: 9,
    previousPosition: 15,
    url: '/diensten/ramen',
    searchVolume: 260,
    difficulty: 44
  },
  {
    keyword: 'gevelrenovatie prijs',
    position: 5,
    previousPosition: 8,
    url: '/diensten/gevelrenovatie',
    searchVolume: 410,
    difficulty: 40
  }
];

async function importSeoRankings() {
  console.log('🔍 Starting SEO rankings import...\n');

  try {
    let improved = 0;
    let declined = 0;
    let totalPositionGain = 0;

    for (const ranking of seoRankings) {
      await prisma.seoRanking.create({
        data: {
          keyword: ranking.keyword,
          position: ranking.position,
          previousPosition: ranking.previousPosition,
          url: ranking.url,
          searchEngine: 'google',
          location: 'Belgium',
          device: 'desktop',
          searchVolume: ranking.searchVolume,
          difficulty: ranking.difficulty,
          period: new Date()
        }
      });

      const change = ranking.previousPosition - ranking.position;
      if (change > 0) {
        improved++;
        totalPositionGain += change;
        console.log(`  ✓ ${ranking.keyword} - Positie ${ranking.position} (↑${change})`);
      } else if (change < 0) {
        declined++;
        console.log(`  ✓ ${ranking.keyword} - Positie ${ranking.position} (↓${Math.abs(change)})`);
      } else {
        console.log(`  ✓ ${ranking.keyword} - Positie ${ranking.position} (=)`);
      }
    }

    console.log('\n✅ Import completed successfully!');
    console.log(`\n📊 Summary:`);
    console.log(`   Total keywords: ${seoRankings.length}`);
    console.log(`   Improved: ${improved} keywords`);
    console.log(`   Declined: ${declined} keywords`);
    console.log(`   Average position gain: ${(totalPositionGain / improved).toFixed(1)} positions`);
    console.log(`   Top ranking: "${seoRankings.sort((a, b) => a.position - b.position)[0].keyword}" at position ${seoRankings.sort((a, b) => a.position - b.position)[0].position}`);

  } catch (error) {
    console.error('❌ Error importing rankings:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the import
importSeoRankings();
