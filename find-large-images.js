const fs = require('fs');
const path = require('path');

function findLargeImages(dir, maxSize = 200 * 1024) { // 200KB in bytes
  const largeImages = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      largeImages.push(...findLargeImages(filePath, maxSize));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext)) {
        const size = stat.size;
        if (size > maxSize) {
          largeImages.push({
            path: filePath,
            size: size,
            sizeKB: Math.round(size / 1024)
          });
        }
      }
    }
  }

  return largeImages;
}

const imgDir = path.join(__dirname, 'public', 'img');
const largeImages = findLargeImages(imgDir);

console.log('Large images found (>200KB):');
largeImages.sort((a, b) => b.size - a.size).forEach(img => {
  console.log(`${img.sizeKB} KB - ${img.path}`);
});

console.log(`\nTotal large images: ${largeImages.length}`);