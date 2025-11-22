const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Files to update for image references
const filePatterns = [
  'src/**/*.tsx',
  'src/**/*.ts',
  'src/**/*.js',
  'src/**/*.jsx'
];

// Image extensions to replace
const replacements = [
  { from: '.png', to: '.webp' },
  { from: '.jpg', to: '.webp' },
  { from: '.jpeg', to: '.webp' }
];

function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    for (const replacement of replacements) {
      const regex = new RegExp(replacement.from.replace('.', '\\.') + '(?=["\'\\s])', 'g');
      const originalContent = content;
      content = content.replace(regex, replacement.to);
      
      if (content !== originalContent) {
        changed = true;
        const matches = originalContent.match(regex);
        console.log(`   🔄 ${matches.length} ${replacement.from} → ${replacement.to}`);
      }
    }
    
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
    
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🔄 Updating Image References');
  console.log('============================\n');
  
  let totalFilesUpdated = 0;
  let totalReplacements = 0;
  
  for (const pattern of filePatterns) {
    const files = glob.sync(pattern);
    
    for (const file of files) {
      const wasUpdated = updateFile(file);
      if (wasUpdated) {
        totalFilesUpdated++;
        console.log(`✅ Updated: ${file}`);
      }
    }
  }
  
  console.log('\n📊 Update Summary:');
  console.log('==================');
  console.log(`Files updated: ${totalFilesUpdated}`);
  console.log('Extensions replaced: .png, .jpg, .jpeg → .webp');
  console.log('\n✅ Image reference update complete!');
  
  if (totalFilesUpdated > 0) {
    console.log('\n📝 Next steps:');
    console.log('1. Test the application to ensure no broken images');
    console.log('2. Remove old PNG/JPG files if WebP versions work');
    console.log('3. Run build test');
  }
}

main().catch(console.error);
