#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const sourceDir = 'f:\\108Coding\\solar-komfort-reinigung-rag\\Komfort Gebäudeservice24 GmbH\\Models';
const targetDir = './public/img/models';

const models = [
  { src: '1. Model Reinigung Komfort Gebäudeservice24 GmbH.png', dst: 'model-reinigung.png' },
  { src: '1. Model Fassade Streichen Komfort Gebäudeservice24 GmbH.png', dst: 'model-fassade.png' }
];

// Create target directory
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`✓ Created directory: ${targetDir}`);
}

// Copy PNG files
models.forEach(model => {
  const srcPath = path.join(sourceDir, model.src);
  const dstPath = path.join(targetDir, model.dst);

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, dstPath);
    const stats = fs.statSync(dstPath);
    console.log(`✓ Copied: ${model.src.substring(0, 50)}... → ${model.dst} (${Math.round(stats.size / 1024)}KB)`);

    // Try to convert to WebP using ImageMagick if available
    const webpPath = dstPath.replace('.png', '.webp');
    exec(`magick "${dstPath}" -quality 85 "${webpPath}"`, (err) => {
      if (!err) {
        const webpStats = fs.statSync(webpPath);
        console.log(`  ✓ Optimized to WebP: ${model.dst.replace('.png', '.webp')} (${Math.round(webpStats.size / 1024)}KB)`);
      } else {
        console.log(`  ⚠ WebP conversion not available, keeping PNG`);
      }
    });
  } else {
    console.log(`✗ Not found: ${srcPath}`);
  }
});

console.log('\n✅ Model files copied!');
