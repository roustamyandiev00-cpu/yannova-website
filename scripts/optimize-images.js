#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts RenovatieProject images to WebP format for better performance
 * 
 * Usage: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const INPUT_DIR = path.join(process.cwd(), 'RenovatieProject');
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'images', 'renovatie');

const SUPPORTED_FORMATS = ['.png', '.jpg', '.jpeg'];
const QUALITY = 85;
const SIZES = [
  { width: 640, suffix: '-sm' },
  { width: 1024, suffix: '-md' },
  { width: 1920, suffix: '-lg' },
];

async function ensureDir(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function optimizeImage(inputPath, filename) {
  const ext = path.extname(filename).toLowerCase();
  
  if (!SUPPORTED_FORMATS.includes(ext)) {
    console.log(`⏭️  Skipping ${filename} (unsupported format)`);
    return;
  }

  const baseName = path.basename(filename, ext);
  console.log(`🖼️  Processing ${filename}...`);

  try {
    // Generate multiple sizes
    for (const size of SIZES) {
      const outputFilename = `${baseName}${size.suffix}.webp`;
      const outputPath = path.join(OUTPUT_DIR, outputFilename);

      await sharp(inputPath)
        .resize(size.width, null, {
          withoutEnlargement: true,
          fit: 'inside',
        })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      console.log(`   ✅ Created ${outputFilename} (${size.width}px)`);
    }

    // Also create AVIF for modern browsers
    const avifPath = path.join(OUTPUT_DIR, `${baseName}.avif`);
    await sharp(inputPath)
      .resize(1920, null, {
        withoutEnlargement: true,
        fit: 'inside',
      })
      .avif({ quality: QUALITY })
      .toFile(avifPath);

    console.log(`   ✅ Created ${baseName}.avif`);

  } catch (error) {
    console.error(`   ❌ Error processing ${filename}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');

  // Ensure output directory exists
  await ensureDir(OUTPUT_DIR);

  // Read all files from input directory
  const files = await fs.readdir(INPUT_DIR);
  
  console.log(`📁 Found ${files.length} files in ${INPUT_DIR}\n`);

  // Process each image
  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const stat = await fs.stat(inputPath);
    
    if (stat.isFile()) {
      await optimizeImage(inputPath, file);
    }
  }

  console.log('\n✨ Image optimization complete!');
  console.log(`📂 Optimized images saved to: ${OUTPUT_DIR}`);
  console.log('\n💡 Next steps:');
  console.log('   1. Update your components to use OptimizedImage component');
  console.log('   2. Replace image paths to use /images/renovatie/');
  console.log('   3. Test the images on your website');
}

main().catch(console.error);
