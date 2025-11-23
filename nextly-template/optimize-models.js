#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const modelsToOptimize = [
  {
    input: './public/img/models/model-reinigung.png',
    output: './public/img/models/model-reinigung.webp',
    targetSize: 300 // KB
  },
  {
    input: './public/img/models/model-fassade.png',
    output: './public/img/models/model-fassade.webp',
    targetSize: 150 // KB
  }
];

async function optimizeModels() {
  for (const model of modelsToOptimize) {
    if (!fs.existsSync(model.input)) {
      console.log(`✗ Not found: ${model.input}`);
      continue;
    }

    try {
      const stats = fs.statSync(model.input);
      const originalSize = stats.size / 1024;

      // Convert to WebP with quality optimization
      await sharp(model.input)
        .webp({ quality: 80 })
        .toFile(model.output);

      const newStats = fs.statSync(model.output);
      const newSize = newStats.size / 1024;
      const saved = Math.round(((originalSize - newSize) / originalSize) * 100);

      console.log(`✓ Optimized: ${path.basename(model.input)}`);
      console.log(`  Original: ${originalSize.toFixed(1)} KB → Optimized: ${newSize.toFixed(1)} KB (${saved}% smaller)`);
    } catch (error) {
      console.log(`✗ Error optimizing ${model.input}: ${error.message}`);
    }
  }

  console.log('\n✅ Model optimization complete!');
}

optimizeModels().catch(console.error);
