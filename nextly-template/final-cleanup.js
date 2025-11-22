const fs = require('fs');
const path = require('path');

async function cleanupOldImages() {
  console.log('🧹 Final Cleanup: Removing old PNG/JPG files');
  console.log('=============================================\n');
  
  let totalDeletedSize = 0;
  let totalDeletedFiles = 0;
  
  function cleanupDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        cleanupDirectory(filePath);
      } else {
        const ext = path.extname(file).toLowerCase();
        const baseName = path.basename(file, ext);
        
        // Check if WebP version exists
        const webpPath = path.join(dir, baseName + '.webp');
        
        if ((ext === '.png' || ext === '.jpg' || ext === '.jpeg') && fs.existsSync(webpPath)) {
          const fileSizeKB = Math.round(stat.size / 1024);
          
          try {
            fs.unlinkSync(filePath);
            totalDeletedSize += fileSizeKB;
            totalDeletedFiles++;
            console.log(`🗑️ Deleted: ${file} (${fileSizeKB} KB)`);
          } catch (error) {
            console.error(`❌ Could not delete ${file}:`, error.message);
          }
        }
      }
    }
  }
  
  cleanupDirectory('public/img');
  
  console.log('\n📊 Cleanup Results:');
  console.log('==================');
  console.log(`Files deleted: ${totalDeletedFiles}`);
  console.log(`Space saved: ${totalDeletedSize} KB (${Math.round(totalDeletedSize/1024)} MB)`);
  console.log('\n✅ Cleanup complete!');
}

async function generateReport() {
  console.log('\n📊 Final Image Optimization Report');
  console.log('===================================\n');
  
  let totalSize = 0;
  let webpCount = 0;
  let pngCount = 0;
  let jpgCount = 0;
  let largeImages = 0;
  
  function analyzeDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        analyzeDirectory(filePath);
      } else {
        const ext = path.extname(file).toLowerCase();
        
        if (['.webp', '.png', '.jpg', '.jpeg'].includes(ext)) {
          totalSize += stat.size;
          
          if (ext === '.webp') webpCount++;
          else if (ext === '.png') pngCount++;
          else if (ext === '.jpg' || ext === '.jpeg') jpgCount++;
          
          if (stat.size > 500 * 1024) largeImages++;
        }
      }
    }
  }
  
  analyzeDirectory('public/img');
  
  console.log(`📁 Total images: ${webpCount + pngCount + jpgCount}`);
  console.log(`   WebP: ${webpCount}`);
  console.log(`   PNG: ${pngCount}`);
  console.log(`   JPG: ${jpgCount}`);
  console.log(`📊 Total size: ${Math.round(totalSize / 1024 / 1024)} MB`);
  console.log(`📈 Large images (>500KB): ${largeImages}`);
  
  const webpPercent = Math.round((webpCount / (webpCount + pngCount + jpgCount)) * 100);
  console.log(`🎯 WebP adoption: ${webpPercent}%`);
  
  if (largeImages > 10) {
    console.log('\n⚠️  Warning: Still have many large images. Consider further optimization.');
  } else {
    console.log('\n✅ Optimization target achieved!');
  }
}

async function main() {
  await cleanupOldImages();
  await generateReport();
  
  console.log('\n🚀 Next Steps:');
  console.log('===============');
  console.log('1. Update image references in code');
  console.log('2. Run build test: npm run build');
  console.log('3. Test application locally');
  console.log('4. Commit all changes');
  console.log('5. Deploy to Vercel');
}

main().catch(console.error);
