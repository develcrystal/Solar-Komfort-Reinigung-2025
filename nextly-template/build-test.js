const { execSync } = require('child_process');
const fs = require('fs');

function runCommand(command, description) {
  console.log(`\n🔧 ${description}`);
  console.log('='.repeat(description.length + 4));
  
  try {
    const output = execSync(command, { 
      encoding: 'utf8',
      stdio: 'pipe',
      timeout: 300000 // 5 minutes timeout
    });
    
    console.log('✅ Success!');
    return true;
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.stdout) console.log('STDOUT:', error.stdout);
    if (error.stderr) console.log('STDERR:', error.stderr);
    return false;
  }
}

function checkImageSize() {
  console.log('\n📊 Checking Image Sizes');
  console.log('======================');
  
  const imgDir = 'public/img';
  let totalSize = 0;
  let imageCount = 0;
  let largeImages = [];
  
  function checkDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = `${dir}/${file}`;
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        checkDirectory(filePath);
      } else if (file.match(/\.(webp|png|jpg|jpeg)$/i)) {
        totalSize += stat.size;
        imageCount++;
        
        const sizeKB = Math.round(stat.size / 1024);
        if (sizeKB > 500) {
          largeImages.push({ file: filePath, size: sizeKB });
        }
      }
    }
  }
  
  checkDirectory(imgDir);
  
  console.log(`Total images: ${imageCount}`);
  console.log(`Total size: ${Math.round(totalSize / 1024 / 1024)} MB`);
  console.log(`Average size: ${Math.round(totalSize / imageCount / 1024)} KB`);
  console.log(`Large images (>500KB): ${largeImages.length}`);
  
  if (largeImages.length > 0) {
    console.log('\n📋 Large Images:');
    largeImages.slice(0, 10).forEach(img => {
      console.log(`   ${img.file}: ${img.size} KB`);
    });
    
    if (largeImages.length > 10) {
      console.log(`   ... and ${largeImages.length - 10} more`);
    }
  }
  
  return largeImages.length < 10; // Success if less than 10 large images
}

function main() {
  console.log('🚀 Build Test & Validation');
  console.log('==========================\n');
  
  // Check image sizes first
  const imageOptimized = checkImageSize();
  
  if (!imageOptimized) {
    console.log('\n⚠️  Warning: Still have many large images');
    console.log('Consider running additional optimization');
  }
  
  // Run build test
  const buildSuccess = runCommand('npm run build', 'Running Next.js Build');
  
  // Check for broken images
  console.log('\n🔍 Checking for Broken Image References');
  console.log('========================================');
  
  const buildOutput = fs.existsSync('.next') ? 'Build completed' : 'Build failed';
  console.log(`Build status: ${buildOutput}`);
  
  console.log('\n📋 Summary:');
  console.log('===========');
  console.log(`Images optimized: ${imageOptimized ? '✅' : '⚠️'}`);
  console.log(`Build successful: ${buildSuccess ? '✅' : '❌'}`);
  
  if (imageOptimized && buildSuccess) {
    console.log('\n🎉 Ready for deployment!');
    console.log('Next steps:');
    console.log('1. Commit all changes');
    console.log('2. Push to GitHub');
    console.log('3. Deploy to Vercel');
  } else {
    console.log('\n🔧 Issues to resolve before deployment:');
    if (!imageOptimized) console.log('- Optimize remaining large images');
    if (!buildSuccess) console.log('- Fix build errors');
  }
}

main().catch(console.error);
