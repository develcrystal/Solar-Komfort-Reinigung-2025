const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Finde alle Bilder >500KB
async function findLargeImages() {
  const largeImages = [];
  
  function findImages(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        findImages(filePath);
      } else if (file.endsWith('.webp') && stat.size > 500 * 1024) {
        largeImages.push({
          path: filePath,
          size: stat.size,
          sizeKB: Math.round(stat.size / 1024)
        });
      }
    }
  }
  
  findImages('public/img');
  return largeImages.sort((a, b) => b.size - a.size);
}

async function optimizeLargeImage(imagePath) {
  try {
    const tempPath = imagePath.replace('.webp', '-final.webp');
    
    console.log(`\n📸 Optimizing: ${path.basename(imagePath)} (${Math.round(fs.statSync(imagePath).size / 1024)} KB)`);
    
    // Aggressive optimization for remaining large images
    await sharp(imagePath)
      .resize(1600, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ 
        quality: 65,  // Lower quality for large images
        effort: 6,
        smartSubsample: true,
        method: 6     // Maximum compression
      })
      .toFile(tempPath);
    
    const tempStats = fs.statSync(tempPath);
    const tempSizeKB = Math.round(tempStats.size / 1024);
    
    console.log(`   Result: ${tempSizeKB} KB`);
    
    // Replace original
    fs.unlinkSync(imagePath);
    fs.renameSync(tempPath, imagePath);
    
    console.log(`   ✅ Replaced original`);
    
    return tempSizeKB;
    
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    return 0;
  }
}

async function main() {
  console.log('🚀 Final Large Image Optimization');
  console.log('==================================\n');
  
  const largeImages = await findLargeImages();
  
  console.log(`📊 Found ${largeImages.length} large images (>500KB):`);
  largeImages.slice(0, 10).forEach(img => {
    console.log(`   ${img.path}: ${img.sizeKB} KB`);
  });
  
  if (largeImages.length > 10) {
    console.log(`   ... and ${largeImages.length - 10} more`);
  }
  
  let totalSavedKB = 0;
  let initialTotalKB = largeImages.reduce((sum, img) => sum + img.sizeKB, 0);
  
  console.log(`\n📊 Initial total: ${initialTotalKB} KB`);
  
  // Optimize all large images
  for (const image of largeImages) {
    const newSize = await optimizeLargeImage(image.path);
    const savedKB = image.sizeKB - newSize;
    totalSavedKB += savedKB;
  }
  
  console.log('\n📈 Final Results:');
  console.log('================');
  console.log(`Before: ${initialTotalKB} KB`);
  console.log(`After: ${initialTotalKB - totalSavedKB} KB`);
  console.log(`Saved: ${totalSavedKB} KB (${Math.round((totalSavedKB / initialTotalKB) * 100)}%)`);
  console.log('\n✅ Final optimization complete!');
}

main().catch(console.error);
