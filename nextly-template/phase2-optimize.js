const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Top 15 Bilder >2MB für Phase 2
const largeImages = [
  'public/img/kundenbilder/Pflaster-stein-Reinigung (6).png',
  'public/img/flux/kunden-dachreinigung-schritt-3.webp',
  'public/img/kundenbilder/Kunden Bilder Reinigung Beschichtung (3).webp',
  'public/img/flux/kunden-dachreinigung-vorher-nachher-2.webp',
  'public/img/kundenbilder/Pflaster-stein-Reinigung.png',
  'public/img/new/benefit-roof-cleaning.webp',
  'public/img/kundenbilder/Dachreinigung Resultat!.png',
  'public/img/new/benefit-roof-coating.webp',
  'public/img/flux/team-bei-der-arbeit1741879901018.png',
  'public/img/flux/kunden-dachreinigung-1.webp',
  'public/img/flux/kunden-dachreinigung-schritt-1.webp',
  'public/img/kundenbilder/Kunden Bilder Reinigung Beschichtung (1).webp',
  'public/img/flux/kunden-dachreinigung-vorher-nachher-1.webp',
  'public/img/flux/kunden-dachreinigung-vorher-nachher-3.webp',
  'public/img/kundenbilder/Kunden Bilder Reinigung Beschichtung (5).webp'
];

async function optimizeLargeImage(inputPath, targetSizeKB = 150) {
  try {
    const isPng = inputPath.toLowerCase().endsWith('.png');
    const outputPath = isPng ? inputPath.replace('.png', '.webp') : inputPath.replace('.webp', '-optimized.webp');
    
    console.log(`\n📸 Optimizing: ${path.basename(inputPath)}`);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`❌ File not found: ${inputPath}`);
      return 0;
    }
    
    const inputStats = fs.statSync(inputPath);
    const inputSizeKB = Math.round(inputStats.size / 1024);
    console.log(`   Input: ${inputSizeKB} KB`);
    
    // Progressive quality reduction for better compression
    let quality = 75;
    let finalSizeKB = inputSizeKB;
    
    while (quality >= 50 && finalSizeKB > targetSizeKB) {
      const tempPath = outputPath.replace('.webp', `-temp-${quality}.webp`);
      
      await sharp(inputPath)
        .resize(1920, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ 
          quality: quality,
          effort: 6,
          smartSubsample: true
        })
        .toFile(tempPath);
      
      const tempStats = fs.statSync(tempPath);
      finalSizeKB = Math.round(tempStats.size / 1024);
      
      // Clean up temp file
      fs.unlinkSync(tempPath);
      
      quality -= 5;
    }
    
    // Final optimization with best quality
    const finalQuality = Math.max(quality + 5, 50);
    await sharp(inputPath)
      .resize(1920, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ 
        quality: finalQuality,
        effort: 6,
        smartSubsample: true
      })
      .toFile(outputPath);
    
    const outputStats = fs.statSync(outputPath);
    const outputSizeKB = Math.round(outputStats.size / 1024);
    const savedKB = inputSizeKB - outputSizeKB;
    const savedPercent = Math.round((savedKB / inputSizeKB) * 100);
    
    console.log(`   Output: ${outputSizeKB} KB (${finalQuality}% quality)`);
    console.log(`   Saved: ${savedKB} KB (${savedPercent}%)`);
    
    // If PNG was converted to WebP, update the original reference
    if (isPng) {
      console.log(`   🔄 Converted PNG → WebP`);
      // Note: We'll handle file replacement separately to avoid conflicts
    }
    
    return savedKB;
    
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    return 0;
  }
}

async function main() {
  console.log('🚀 Phase 2: Large Image Optimization (>2MB)');
  console.log('============================================\n');
  
  let totalSavedKB = 0;
  let initialTotalKB = 0;
  
  // Calculate initial size
  for (const imagePath of largeImages) {
    if (fs.existsSync(imagePath)) {
      const stats = fs.statSync(imagePath);
      initialTotalKB += Math.round(stats.size / 1024);
    }
  }
  
  console.log(`📊 Initial total size: ${initialTotalKB} KB (${Math.round(initialTotalKB/1024)} MB)\n`);
  
  // Optimize each image
  for (const imagePath of largeImages) {
    const saved = await optimizeLargeImage(imagePath);
    totalSavedKB += saved;
  }
  
  console.log('\n📈 Phase 2 Results:');
  console.log('==================');
  console.log(`Before: ${initialTotalKB} KB`);
  console.log(`Est. After: ${initialTotalKB - totalSavedKB} KB`);
  console.log(`Est. Saved: ${totalSavedKB} KB (${Math.round((totalSavedKB / initialTotalKB) * 100)}%)`);
  console.log('\n✅ Phase 2 optimization complete!');
  console.log('📝 Next: Manual file replacement to avoid conflicts');
}

main().catch(console.error);
