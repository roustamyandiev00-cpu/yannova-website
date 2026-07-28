#!/usr/bin/env node
/**
 * Google Search Console Indexing Script
 * Vraagt Google om alle prioritaire Yannova pagina's te indexeren
 * 
 * Gebruik: node scripts/request-indexing.mjs
 * 
 * Vereiste: GOOGLE_GENERATIVE_AI_API_KEY in .env.local
 */

const BASE_URL = 'https://www.yannova.be'

// Alle prioritaire pagina's om te indexeren (meest belangrijk eerst)
const PRIORITY_URLS = [
  // Homepage
  `${BASE_URL}/`,
  
  // Geraardsbergen prioritaire landingspagina's
  `${BASE_URL}/ramen-deuren-geraardsbergen`,
  `${BASE_URL}/gevelrenovatie-geraardsbergen`,
  `${BASE_URL}/renovatie-geraardsbergen`,
  `${BASE_URL}/crepi-geraardsbergen`,

  // Lokale pagina's Geraardsbergen
  `${BASE_URL}/ramen/geraardsbergen`,
  `${BASE_URL}/deuren/geraardsbergen`,
  `${BASE_URL}/gevelrenovatie/geraardsbergen`,
  `${BASE_URL}/crepi/geraardsbergen`,
  `${BASE_URL}/renovatie/geraardsbergen`,
  `${BASE_URL}/totaalrenovatie/geraardsbergen`,
  `${BASE_URL}/gevelisolatie/geraardsbergen`,

  // Ninove
  `${BASE_URL}/ramen/ninove`,
  `${BASE_URL}/deuren/ninove`,
  `${BASE_URL}/gevelrenovatie/ninove`,
  `${BASE_URL}/crepi/ninove`,
  `${BASE_URL}/renovatie/ninove`,
  `${BASE_URL}/totaalrenovatie/ninove`,

  // Ronse
  `${BASE_URL}/ramen/ronse`,
  `${BASE_URL}/gevelrenovatie/ronse`,
  `${BASE_URL}/renovatie/ronse`,

  // Kerndiensten
  `${BASE_URL}/ramen`,
  `${BASE_URL}/deuren`,
  `${BASE_URL}/gevelrenovatie`,
  `${BASE_URL}/crepi`,
  `${BASE_URL}/renovatie`,
  `${BASE_URL}/totaalrenovatie`,
  `${BASE_URL}/contact`,
  `${BASE_URL}/offerte`,
  `${BASE_URL}/werkgebied/geraardsbergen`,
  `${BASE_URL}/werkgebied/ninove`,
  `${BASE_URL}/werkgebied/zottegem`,
]

async function checkUrls() {
  console.log('🔍 Yannova - Google SEO Indexering Status Checker')
  console.log('='.repeat(55))
  console.log(`📋 Controleer ${PRIORITY_URLS.length} prioritaire pagina's...\n`)

  let live = 0
  let notFound = 0
  let errors = 0

  for (const url of PRIORITY_URLS) {
    try {
      const response = await fetch(url, { 
        method: 'HEAD',
        redirect: 'follow',
        signal: AbortSignal.timeout(10000)
      })
      
      if (response.status === 200) {
        console.log(`✅ ${response.status} OK   → ${url}`)
        live++
      } else if (response.status === 404) {
        console.log(`❌ ${response.status} 404  → ${url}`)
        notFound++
      } else {
        console.log(`⚠️  ${response.status}      → ${url}`)
        errors++
      }
    } catch (e) {
      console.log(`💥 ERROR     → ${url} (${e.message})`)
      errors++
    }

    // Kleine vertraging om niet te veel requests tegelijk te sturen
    await new Promise(r => setTimeout(r, 100))
  }

  console.log('\n' + '='.repeat(55))
  console.log(`📊 RESULTAAT:`)
  console.log(`   ✅ Live (200 OK):     ${live}/${PRIORITY_URLS.length}`)
  console.log(`   ❌ Niet gevonden:     ${notFound}`)
  console.log(`   ⚠️  Andere status:    ${errors}`)
  console.log('='.repeat(55))

  if (live === PRIORITY_URLS.length) {
    console.log('\n🎉 PERFECT! Alle pagina\'s zijn LIVE!')
    console.log('👉 Volgende stap: Dien de sitemap in via Google Search Console:')
    console.log(`   https://search.google.com/search-console`)
    console.log(`   Sitemap URL: ${BASE_URL}/sitemap.xml`)
  } else {
    console.log(`\n⚠️  ${notFound + errors} pagina's zijn nog niet bereikbaar.`)
    console.log('Controleer of de laatste Vercel deployment klaar is.')
  }
}

checkUrls().catch(console.error)
