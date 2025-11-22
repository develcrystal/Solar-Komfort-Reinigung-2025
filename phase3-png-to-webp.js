const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertPngToWebp(pngPath, quality = 75) {
  try {
    const webpPath = pngPath.replace('.png', '.webp');
    
    console.log(`\n🔄 Converting: ${path.basename(pngPath)}`);
    
    if (!fs.existsSync(pngPath)) {
      console.log(`❌ File not found: ${pngPath}`);
      return 0;
    }
    
    const pngStats = fs.statSync(pngPath);
    const pngSizeKB = Math.round(pngStats.size / 1024);
    console.log(`   PNG: ${pngSizeKB} KB`);
    
    // Convert to WebP with optimization
    await sharp(pngPath)
      .resize(1920, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ 
        quality: quality,
        effort: 6,
        smartSubsample: true
      })
      .toFile(webpPath);
    
    const webpStats = fs.statSync(webpPath);
    const webpSizeKB = Math.round(webpStats.size / 1024);
    const savedKB = pngSizeKB - webpSizeKB;
    const savedPercent = Math.round((savedKB / pngSizeKB) * 100);
    
    console.log(`   WebP: ${webpSizeKB} KB`);
    console.log(`   Saved: ${savedKB} KB (${savedPercent}%)`);
    
    return savedKB;
    
  } catch (error) {
    console.error(`❌ Error converting ${pngPath}:`, error.message);
    return 0;
  }
}

async function main() {
  console.log('🚀 Phase 3: PNG → WebP Conversion');
  console.log('===================================\n');
  
  // Find all PNG files > 50KB
  const pngFiles = [];
  
  function findPngFiles(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        findPngFiles(filePath);
      } else if (file.toLowerCase().endsWith('.png') && stat.size > 50 * 1024) {
        pngFiles.push(filePath);
      }
    }
  }
  
  findPngFiles('public/img');
  
  console.log(`📊 Found ${pngFiles.length} PNG files > 50KB\n`);
  
  let totalSavedKB = 0;
  let initialTotalKB = 0;
  
  // Calculate initial size
  for (const pngPath of pngFiles) {
    if (fs.existsSync(pngPath)) {
      const stats = fs.statSync(pngPath);
      initialTotalKB += Math.round(stats.size / 1024);
    }
  }
  
  console.log(`📊 Initial PNG total size: ${initialTotalKB} KB (${Math.round(initialTotalKB/1024)} MB)\n`);
  
  // Convert each PNG
  for (const pngPath of pngFiles) {
    const saved = await convertPngToWebp(pngPath);
    totalSavedKB += saved;
  }
  
  console.log('\n📈 Phase 3 Results:');
  console.log('==================');
  console.log(`PNG Before: ${initialTotalKB} KB`);
  console.log(`WebP After: ${initialTotalKB - totalSavedKB} KB`);
  console.log(`Total Saved: ${totalSavedKB} KB (${Math.round((totalSavedKB / initialTotalKB) * 100)}%)`);
  console.log('\n✅ PNG → WebP conversion complete!');
  console.log('📝 Next: Update image references in code and remove PNG files');
}

main().catch(console.error);
