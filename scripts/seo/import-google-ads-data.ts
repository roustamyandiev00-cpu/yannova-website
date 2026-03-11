/**
 * Script om Google Ads data te importeren
 * 
 * Gebruik:
 * 1. Export je Google Ads data naar CSV
 * 2. Converteer naar JSON formaat (zie voorbeeld hieronder)
 * 3. Run: npx tsx scripts/import-google-ads-data.ts
 */

import { prisma } from '../src/lib/prisma';

// Voorbeeld data - vervang dit met je eigen data
const sampleData = {
  keywords: [
    {
      keyword: 'gevelrenovatie antwerpen',
      matchType: 'phrase',
      impressions: 1500,
      clicks: 45,
      conversions: 3,
      cost: 67.50,
      campaign: 'Gevelrenovatie 2024',
      adGroup: 'Antwerpen',
      period: new Date('2024-03-01')
    },
    {
      keyword: 'ramen plaatsen antwerpen',
      matchType: 'phrase',
      impressions: 2200,
      clicks: 67,
      conversions: 5,
      cost: 89.30,
      campaign: 'Ramen & Deuren 2024',
      adGroup: 'Antwerpen',
      period: new Date('2024-03-01')
    },
    {
      keyword: 'crepi isolatie',
      matchType: 'broad',
      impressions: 980,
      clicks: 28,
      conversions: 2,
      cost: 45.20,
      campaign: 'Gevelrenovatie 2024',
      adGroup: 'Isolatie',
      period: new Date('2024-03-01')
    },
    {
      keyword: 'totaalrenovatie antwerpen',
      matchType: 'exact',
      impressions: 1800,
      clicks: 52,
      conversions: 4,
      cost: 78.90,
      campaign: 'Totaalrenovatie 2024',
      adGroup: 'Antwerpen',
      period: new Date('2024-03-01')
    }
  ],
  campaigns: [
    {
      name: 'Gevelrenovatie 2024',
      budget: 500,
      spent: 234.50,
      impressions: 5600,
      clicks: 156,
      conversions: 12,
      status: 'active',
      startDate: new Date('2024-01-01'),
      period: new Date('2024-03-01')
    },
    {
      name: 'Ramen & Deuren 2024',
      budget: 400,
      spent: 189.30,
      impressions: 4200,
      clicks: 123,
      conversions: 9,
      status: 'active',
      startDate: new Date('2024-01-01'),
      period: new Date('2024-03-01')
    }
  ]
};

async function importGoogleAdsData() {
  console.log('🚀 Starting Google Ads data import...\n');

  try {
    // Import keywords
    console.log('📊 Importing keywords...');
    for (const kw of sampleData.keywords) {
      // Calculate metrics
      const ctr = kw.impressions > 0 ? (kw.clicks / kw.impressions) * 100 : 0;
      const conversionRate = kw.clicks > 0 ? (kw.conversions / kw.clicks) * 100 : 0;
      const cpc = kw.clicks > 0 ? kw.cost / kw.clicks : 0;

      await prisma.googleAdsKeyword.create({
        data: {
          keyword: kw.keyword,
          matchType: kw.matchType,
          impressions: kw.impressions,
          clicks: kw.clicks,
          conversions: kw.conversions,
          cost: kw.cost,
          ctr,
          cpc,
          conversionRate,
          campaign: kw.campaign,
          adGroup: kw.adGroup,
          period: kw.period,
          status: 'active'
        }
      });

      console.log(`  ✓ ${kw.keyword} - ${kw.conversions} conversies`);
    }

    // Import campaigns
    console.log('\n📈 Importing campaigns...');
    for (const camp of sampleData.campaigns) {
      const ctr = camp.impressions > 0 ? (camp.clicks / camp.impressions) * 100 : 0;
      const conversionRate = camp.clicks > 0 ? (camp.conversions / camp.clicks) * 100 : 0;

      await prisma.googleAdsCampaign.create({
        data: {
          name: camp.name,
          budget: camp.budget,
          spent: camp.spent,
          impressions: camp.impressions,
          clicks: camp.clicks,
          conversions: camp.conversions,
          ctr,
          conversionRate,
          status: camp.status,
          startDate: camp.startDate,
          period: camp.period
        }
      });

      console.log(`  ✓ ${camp.name} - €${camp.spent} spent`);
    }

    console.log('\n✅ Import completed successfully!');
    console.log(`\n📊 Summary:`);
    console.log(`   Keywords imported: ${sampleData.keywords.length}`);
    console.log(`   Campaigns imported: ${sampleData.campaigns.length}`);
    console.log(`   Total conversions: ${sampleData.keywords.reduce((sum, kw) => sum + kw.conversions, 0)}`);
    console.log(`   Total cost: €${sampleData.keywords.reduce((sum, kw) => sum + kw.cost, 0).toFixed(2)}`);

  } catch (error) {
    console.error('❌ Error importing data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the import
importGoogleAdsData();
