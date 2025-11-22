const sharp = require('sharp');
const fs = require('fs');

async function optimizeSingleImage(inputPath, outputPath, quality = 75) {
  try {
    console.log(`Optimizing: ${inputPath}`);
    
    const inputStats = fs.statSync(inputPath);
    const inputSizeKB = Math.round(inputStats.size / 1024);
    console.log(`Input size: ${inputSizeKB} KB`);
    
    await sharp(inputPath)
      .webp({ 
        quality: quality,
        effort: 6
      })
      .toFile(outputPath);
    
    const outputStats = fs.statSync(outputPath);
    const outputSizeKB = Math.round(outputStats.size / 1024);
    const savedKB = inputSizeKB - outputSizeKB;
    const savedPercent = Math.round((savedKB / inputSizeKB) * 100);
    
    console.log(`Output size: ${outputSizeKB} KB`);
    console.log(`Saved: ${savedKB} KB (${savedPercent}%)`);
    console.log('✅ Success!\n');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// Optimiere die kritischen Homepage-Bilder
const images = [
  {
    input: 'public/img/flux/fassaden-reinigung.webp',
    output: 'public/img/flux/fassaden-reinigung.webp',
    quality: 75
  },
  {
    input: 'public/img/kundenbilder/Büro-Reinigung.webp',
    output: 'public/img/kundenbilder/Büro-Reinigung.webp',
    quality: 75
  },
  {
    input: 'public/img/kundenbilder/Grundreinigung.webp',
    output: 'public/img/kundenbilder/Grundreinigung.webp',
    quality: 75
  },
  {
    input: 'public/img/kundenbilder/Pflaster-stein-Reinigung.webp',
    output: 'public/img/kundenbilder/Pflaster-stein-Reinigung.webp',
    quality: 75
  }
];

async function main() {
  console.log('🚀 Optimizing critical homepage images...\n');
  
  for (const image of images) {
    if (fs.existsSync(image.input)) {
      // Erstelle temporäre Datei
      const tempOutput = image.input.replace('.webp', '-temp.webp');
      await optimizeSingleImage(image.input, tempOutput, image.quality);
      
      // Ersetze Original
      fs.copyFileSync(tempOutput, image.input);
      fs.unlinkSync(tempOutput);
      console.log(`✅ Replaced: ${image.input}`);
    } else {
      console.log(`❌ File not found: ${image.input}`);
    }
  }
}

main().catch(console.error);
