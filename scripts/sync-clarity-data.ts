/**
 * Script om Microsoft Clarity data te syncen naar Analytics Dashboard
 * 
 * Gebruik:
 * npx tsx scripts/sync-clarity-data.ts [days]
 * 
 * Voorbeelden:
 * npx tsx scripts/sync-clarity-data.ts        # Sync vandaag
 * npx tsx scripts/sync-clarity-data.ts 7      # Sync laatste 7 dagen
 * npx tsx scripts/sync-clarity-data.ts 30     # Sync laatste 30 dagen
 */

import { syncClarityToAnalytics, syncClarityHistorical } from '../src/lib/clarity-sync';

async function main() {
  const days = process.argv[2] ? parseInt(process.argv[2]) : 1;

  console.log('🔄 Microsoft Clarity Data Sync\n');

  if (days === 1) {
    console.log('Syncing today\'s data...\n');
    try {
      const result = await syncClarityToAnalytics();
      console.log('\n✅ Sync completed!');
      console.log(result);
    } catch (error) {
      console.error('\n❌ Sync failed:', error);
      process.exit(1);
    }
  } else {
    console.log(`Syncing last ${days} days...\n`);
    try {
      const results = await syncClarityHistorical(days);
      console.log(`\n✅ Sync completed!`);
      console.log(`   Successfully synced: ${results.length} days`);
      console.log(`   Failed: ${days - results.length} days`);
    } catch (error) {
      console.error('\n❌ Sync failed:', error);
      process.exit(1);
    }
  }
}

main();
