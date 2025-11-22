#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const REPLACEMENTS = [
  { old: 'HK Komfort Facility & Gebäudeservice GmbH', new: 'Clean Komfort Gebäudeservice24 GmbH' },
  { old: 'HK Komfort', new: 'Clean Komfort Gebäudeservice24' }
];

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (!filePath.includes('node_modules') && !filePath.includes('.next') && !filePath.includes('.git')) {
        walkDir(filePath, callback);
      }
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.md')) {
      callback(filePath);
    }
  });
}

let processed = 0;
let updated = 0;

walkDir('./src', (filePath) => {
  processed++;
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  REPLACEMENTS.forEach(({ old, new: newValue }) => {
    content = content.split(old).join(newValue);
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    updated++;
    console.log(`✓ Updated: ${filePath}`);
  }
});

console.log(`\n📊 Stats:`);
console.log(`   Processed: ${processed} files`);
console.log(`   Updated: ${updated} files`);
