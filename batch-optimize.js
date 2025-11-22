const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage(inputPath, quality = 75) {
  try {
    const tempPath = inputPath.replace('.webp', '-temp.webp');
    
    console.log(`\n📸 Optimizing: ${path.basename(inputPath)}`);
    
    const inputStats = fs.statSync(inputPath);
    const inputSizeKB = Math.round(inputStats.size / 1024);
    console.log(`   Input: ${inputSizeKB} KB`);
    
    // Optimiere mit Qualität 75
    await sharp(inputPath)
      .webp({ 
        quality: quality,
        effort: 6,
        smartSubsample: true
      })
      .toFile(tempPath);
    
    const tempStats = fs.statSync(tempPath);
    const tempSizeKB = Math.round(tempStats.size / 1024);
    const savedKB = inputSizeKB - tempSizeKB;
    const savedPercent = Math.round((savedKB / inputSizeKB) * 100);
    
    console.log(`   Output: ${tempSizeKB} KB`);
    console.log(`   Saved: ${savedKB} KB (${savedPercent}%)`);
    
    // Ersetze Original
    fs.unlinkSync(inputPath);
    fs.renameSync(tempPath, inputPath);
    
    console.log(`   ✅ Replaced original`);
    
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
  }
}

// Kritische Bilder für Homepage
const criticalImages = [
  'public/img/kundenbilder/Büro-Reinigung.webp',
  'public/img/kundenbilder/Grundreinigung.webp',
  'public/img/kundenbilder/Pflaster-stein-Reinigung.webp',
  'public/img/kundenbilder/Fassaden-Reinigung.webp',
  'public/img/kundenbilder/Krankenhausreinigung (1).webp',
  'public/img/kundenbilder/Pflaster-stein-Reinigung (6).webp'
];

async function main() {
  console.log('🚀 Batch Image Optimization - Critical Images');
  console.log('============================================\n');
  
  let totalSavedKB = 0;
  let initialTotalKB = 0;
  
  // Berechne Anfangsgröße
  for (const imagePath of criticalImages) {
    if (fs.existsSync(imagePath)) {
      const stats = fs.statSync(imagePath);
      initialTotalKB += Math.round(stats.size / 1024);
    }
  }
  
  console.log(`📊 Initial total size: ${initialTotalKB} KB\n`);
  
  // Optimiere jedes Bild
  for (const imagePath of criticalImages) {
    if (fs.existsSync(imagePath)) {
      await optimizeImage(imagePath, 75);
    } else {
      console.log(`❌ File not found: ${imagePath}`);
    }
  }
  
  // Berechne finale Größe
  let finalTotalKB = 0;
  for (const imagePath of criticalImages) {
    if (fs.existsSync(imagePath)) {
      const stats = fs.statSync(imagePath);
      finalTotalKB += Math.round(stats.size / 1024);
    }
  }
  
  totalSavedKB = initialTotalKB - finalTotalKB;
  
  console.log('\n📈 Optimization Results:');
  console.log('========================');
  console.log(`Before: ${initialTotalKB} KB`);
  console.log(`After: ${finalTotalKB} KB`);
  console.log(`Saved: ${totalSavedKB} KB (${Math.round((totalSavedKB / initialTotalKB) * 100)}%)`);
  console.log('\n✅ Critical images optimization complete!');
}

main().catch(console.error);
