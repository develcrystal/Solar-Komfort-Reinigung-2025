const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Function to convert images to WebP format with optimization
async function convertToWebP(inputPath, outputPath, quality = 85) {
  try {
    await sharp(inputPath)
      .webp({ quality, effort: 6 })  // effort 6 is a good balance of speed/compression
      .toFile(outputPath);
    return true;
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error);
    return false;
  }
}

// Function to optimize large images in the flux directory
async function optimizeFluxImages() {
  console.log('Starting optimization of large images in flux directory...');
  
  const fluxDir = path.join(__dirname, 'public', 'img', 'flux');
  const files = fs.readdirSync(fluxDir);
  
  // Images that need optimization (PNG, JPG, JPEG > 200KB)
  const imagesToOptimize = [];
  
  for (const file of files) {
    const filePath = path.join(fluxDir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        const size = stat.size;
        if (size > 200 * 1024) { // >200KB
          imagesToOptimize.push({
            original: filePath,
            name: file,
            size: size
          });
        }
      }
    }
  }
  
  console.log(`Found ${imagesToOptimize.length} images to optimize:\n`);
  
  let optimizedCount = 0;
  let totalCount = imagesToOptimize.length;
  
  for (const img of imagesToOptimize) {
    console.log(`Optimizing: ${img.name}`);
    const sizeMB = Math.round((img.size / 1024 / 1024) * 100) / 100;
    console.log(`  Original size: ${sizeMB} MB`);
    
    const baseName = path.parse(img.name).name;
    const newFileName = baseName + '.webp';
    const newFilePath = path.join(fluxDir, newFileName);
    
    const success = await convertToWebP(img.original, newFilePath);
    
    if (success) {
      // Get new file size
      const newSize = fs.statSync(newFilePath).size;
      const newSizeMB = Math.round((newSize / 1024 / 1024) * 100) / 100;
      const reduction = Math.round(((img.size - newSize) / img.size) * 100);
      
      console.log(`  Optimized size: ${newSizeMB} MB`);
      console.log(`  Reduction: ${reduction}%`);
      
      // Remove the original file
      fs.unlinkSync(img.original);
      console.log(`  Removed original file: ${img.name}`);
      
      optimizedCount++;
    } else {
      console.log(`  Failed to optimize: ${img.name}`);
    }
    
    console.log('---');
  }
  
  console.log(`\nOptimization completed! ${optimizedCount}/${totalCount} images optimized.`);
  
  // Also check for any duplicate names that might have been created
  const allFiles = fs.readdirSync(fluxDir);
  const webpFiles = allFiles.filter(f => path.extname(f).toLowerCase() === '.webp');
  
  // Check for potential duplicates
  const nameCounts = {};
  for (const file of webpFiles) {
    const baseName = path.parse(file).name;
    nameCounts[baseName] = (nameCounts[baseName] || 0) + 1;
  }
  
  const duplicates = Object.keys(nameCounts).filter(name => nameCounts[name] > 1);
  if (duplicates.length > 0) {
    console.log(`\nWarning: Found potential duplicate names:`, duplicates);
  }
}

// Run the optimization
optimizeFluxImages().catch(console.error);