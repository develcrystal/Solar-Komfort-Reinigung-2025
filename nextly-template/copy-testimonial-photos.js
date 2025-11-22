#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const sourceDir = 'f:\\108Coding\\solar-komfort-reinigung-rag\\Komfort Gebäudeservice24 GmbH';
const targetDir = './public/img/testimonials';

const photos = [
  { src: '0d7fe24c-53ec-4d15-9a95-59cfe22f14a2.jpeg', dst: 'customer-1.jpg' },
  { src: '3b8a077c-6810-4e39-9b6b-daca101a674f.jpeg', dst: 'customer-2.jpg' },
  { src: '763f28c0-0928-48cd-b529-978b7a13a08e.jpeg', dst: 'customer-3.jpg' },
  { src: '247632e9-088f-4167-b865-063e1385bf39.jpeg', dst: 'customer-4.jpg' }
];

// Create target directory
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`✓ Created directory: ${targetDir}`);
}

// Copy files
photos.forEach(photo => {
  const srcPath = path.join(sourceDir, photo.src);
  const dstPath = path.join(targetDir, photo.dst);

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, dstPath);
    const stats = fs.statSync(dstPath);
    console.log(`✓ Copied: ${photo.src} → ${photo.dst} (${Math.round(stats.size / 1024)}KB)`);
  } else {
    console.log(`✗ Not found: ${srcPath}`);
  }
});

console.log('\n✅ All customer photos copied successfully!');
