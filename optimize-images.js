const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Create optimized directory if it doesn't exist
const optimizedDir = path.join(__dirname, 'nextly-template', 'public', 'img', 'optimized');
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

async function optimizeImage(inputPath, outputPath) {
  try {
    const ext = path.extname(inputPath).toLowerCase();

    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const optimizedPath = outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

      // Skip if already exists
      if (fs.existsSync(optimizedPath)) {
        console.log(`Skipped (already exists): ${optimizedPath}`);
        return null;
      }

      await sharp(inputPath)
        .webp({
          quality: 90,  // Gute Qualität mit besserer Kompression
          effort: 6
        })
        .toFile(optimizedPath);

      console.log(`Optimized: ${inputPath} -> ${optimizedPath}`);
      return optimizedPath;
    }
    return null;
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
    return null;
  }
}

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  let optimizedCount = 0;
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      optimizedCount += await processDirectory(fullPath);
    } else if (['.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase())) {
      const relativePath = path.relative(process.cwd(), fullPath);
      const outputPath = path.join(
        path.dirname(fullPath).replace('public/img', 'public/img/optimized'),
        path.basename(file)
      );
      
      // Create output directory if it doesn't exist
      const outputDir = path.dirname(outputPath);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      const optimizedPath = await optimizeImage(fullPath, outputPath);
      if (optimizedPath) optimizedCount++;
    }
  }
  
  return optimizedCount;
}

async function main() {
  console.log('Starting image optimization...');
  const imgDir = path.join(__dirname, 'nextly-template', 'public', 'img');
  const count = await processDirectory(imgDir);
  console.log(`\nOptimization complete! Processed ${count} images.`);
  console.log('Optimized images are saved in the nextly-template/public/img/optimized directory.');
  console.log('\nNext steps:');
  console.log('1. Review the optimized images');
  console.log('2. Update image paths in your components to use the optimized versions');
  console.log('3. Consider setting up an automated build process to optimize new images');
}

main().catch(console.error);
