#!/usr/bin/env node

/**
 * Script om sitemap te testen en valideren
 * Run: node scripts/test-sitemap.js
 */

const https = require('https');
const http = require('http');

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.yannova.be';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

console.log('🔍 Testing Sitemap...\n');
console.log(`Site URL: ${SITE_URL}`);
console.log(`Sitemap URL: ${SITEMAP_URL}\n`);

// Test sitemap accessibility
function testSitemap(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log('✅ Sitemap is accessible');
          console.log(`   Status: ${res.statusCode}`);
          console.log(`   Content-Type: ${res.headers['content-type']}`);
          
          // Count URLs in sitemap
          const urlMatches = data.match(/<url>/g);
          const urlCount = urlMatches ? urlMatches.length : 0;
          console.log(`   URLs found: ${urlCount}\n`);
          
          // Check for common issues
          if (!data.includes('<?xml')) {
            console.log('⚠️  Warning: Missing XML declaration');
          }
          
          if (!data.includes('<urlset')) {
            console.log('⚠️  Warning: Missing urlset tag');
          }
          
          if (data.includes('localhost')) {
            console.log('⚠️  Warning: Contains localhost URLs');
          }
          
          // Show first few URLs
          console.log('📄 Sample URLs:');
          const urls = data.match(/<loc>(.*?)<\/loc>/g);
          if (urls) {
            urls.slice(0, 10).forEach((url, i) => {
              const cleanUrl = url.replace(/<\/?loc>/g, '');
              console.log(`   ${i + 1}. ${cleanUrl}`);
            });
            if (urls.length > 10) {
              console.log(`   ... and ${urls.length - 10} more`);
            }
          }
          
          resolve(data);
        } else {
          console.log(`❌ Sitemap returned status ${res.statusCode}`);
          reject(new Error(`HTTP ${res.statusCode}`));
        }
      });
    }).on('error', (err) => {
      console.log('❌ Error accessing sitemap:', err.message);
      reject(err);
    });
  });
}

// Test robots.txt
function testRobots(url) {
  return new Promise((resolve, reject) => {
    const robotsUrl = `${url}/robots.txt`;
    const protocol = robotsUrl.startsWith('https') ? https : http;
    
    console.log('\n🤖 Testing robots.txt...');
    console.log(`URL: ${robotsUrl}\n`);
    
    protocol.get(robotsUrl, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log('✅ robots.txt is accessible');
          console.log(`   Status: ${res.statusCode}\n`);
          
          // Check for sitemap reference
          if (data.includes('Sitemap:')) {
            console.log('✅ Sitemap reference found in robots.txt');
            const sitemapMatch = data.match(/Sitemap:\s*(.*)/);
            if (sitemapMatch) {
              console.log(`   ${sitemapMatch[0]}`);
            }
          } else {
            console.log('⚠️  Warning: No sitemap reference in robots.txt');
          }
          
          console.log('\n📄 robots.txt content:');
          console.log(data);
          
          resolve(data);
        } else {
          console.log(`❌ robots.txt returned status ${res.statusCode}`);
          reject(new Error(`HTTP ${res.statusCode}`));
        }
      });
    }).on('error', (err) => {
      console.log('❌ Error accessing robots.txt:', err.message);
      reject(err);
    });
  });
}

// Run tests
async function runTests() {
  try {
    await testSitemap(SITEMAP_URL);
    await testRobots(SITE_URL);
    
    console.log('\n✅ All tests completed!\n');
    console.log('Next steps:');
    console.log('1. Submit sitemap to Google Search Console');
    console.log('2. Submit sitemap to Bing Webmaster Tools');
    console.log('3. Monitor indexation status');
    
  } catch (error) {
    console.log('\n❌ Tests failed:', error.message);
    process.exit(1);
  }
}

runTests();
