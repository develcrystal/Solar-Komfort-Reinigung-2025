const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, 'public', 'img', 'flux');

// Images to convert with target names and sizes
const conversions = [
  // Fassadenreinigung Process Images
  {
    input: 'Prozess-Bild (Hochdruckreiniger in Aktion.png',
    output: 'fassaden-prozess1.webp',
    width: 1920,
    height: 1080
  },
  {
    input: 'Prozess-Bild (Hochdruckreiniger in Aktion1763902661588-019ab0ca-8d67-7336-9094-596eb4b374b4.png',
    output: 'fassaden-prozess2.webp',
    width: 1920,
    height: 1080
  },
  {
    input: 'Prozess-Bild (Hochdruckreiniger in Aktion1763902681825-019ab0ca-8d67-7ad8-bd00-ef34503375f5.png',
    output: 'fassaden-prozess3.webp',
    width: 1920,
    height: 1080
  },

  // Fassadenreinigung Results
  {
    input: 'Ergebnis-Bild (Saubere Fassade1763902899170-019ab0ce-1910-7cbf-8a6c-f8f78497bf2d.png',
    output: 'fassaden-ergebnis1.webp',
    width: 1920,
    height: 1080
  },
  {
    input: 'Ergebnis-Bild (Saubere Fassade1763902917893-019ab0ce-1910-740d-8fcd-e04b3d7385fc.png',
    output: 'fassaden-ergebnis2.webp',
    width: 1920,
    height: 1080
  },
  {
    input: 'Ergebnis-Bild (Saubere Fassade1763902989146-019ab0ce-cf89-7490-bdb2-9aa8d007c9a3.png',
    output: 'fassaden-ergebnis3.webp',
    width: 1920,
    height: 1080
  },

  // Fassadenreinigung Before/After
  {
    input: 'Fassade_VorherNAcher1763903060190-019ab0cf-fea2-7ce7-86c0-0aae3cdd6b72.png',
    output: 'fassaden-vornachher1.webp',
    width: 1200,
    height: 800
  },
  {
    input: 'Fassade_VorherNachher-Split (Optional aber besser1763903028269-019ab0d0-12f3-7473-9b66-0b577eae7f57.png',
    output: 'fassaden-vornachher2.webp',
    width: 1200,
    height: 800
  },
  {
    input: 'gemini-3-pro-image-preview (nano-banana-pro)_a_Split_image_showing_.png',
    output: 'fassaden-vornachher3.webp',
    width: 1200,
    height: 800
  },

  // Banner & Hero Images
  {
    input: 'banner_fassadenreinigung1763904047117-019ab0df-6290-7f41-9178-6baaecf8ec59.png',
    output: 'banner-fassadenreinigung.webp',
    width: 1920,
    height: 600
  },
  {
    input: 'fassdenreinigung1763901822492-019ab0bd-7628-7629-888d-d6a33721295d.png',
    output: 'fassadenreinigung-hero.webp',
    width: 1920,
    height: 1080
  },
  {
    input: 'b_A_man_in_blue_work_c.png',
    output: 'team-arbeit-action.webp',
    width: 1920,
    height: 1080
  },

  // Team Photos
  {
    input: 'team_in_action_1763904653140-019ab0e8-a432-757b-99e6-5a5612a2ae67.png',
    output: 'team-vor-ort.webp',
    width: 1920,
    height: 1080
  },
  {
    input: 'Team Group Photo1763904784387-019ab0ea-a724-7ade-851b-935896baa86b.png',
    output: 'team-gruppenfoto-neu.webp',
    width: 1920,
    height: 1080
  },

  // Firmenfahrzeuge
  {
    input: 'firmenfahrzeug-solar-komfort1.png',
    output: 'firmenfahrzeug1.webp',
    width: 1920,
    height: 1080
  },
  {
    input: 'firmenfahrzeug-solar-komfort2.jpeg',
    output: 'firmenfahrzeug2.webp',
    width: 1920,
    height: 1080
  },
  {
    input: 'firmenfahrzeug-solar-komfort3.png',
    output: 'firmenfahrzeug3.webp',
    width: 1920,
    height: 1080
  }
];

async function optimizeImage(inputFile, outputFile, width, height) {
  const inputPath = path.join(imageDir, inputFile);
  const outputPath = path.join(imageDir, outputFile);

  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  SKIP: ${inputFile} (nicht gefunden)`);
    return null;
  }

  const inputStats = fs.statSync(inputPath);
  const inputSize = inputStats.size;

  await sharp(inputPath)
    .resize(width, height, {
      fit: 'cover',
      position: 'center'
    })
    .webp({ quality: 85 })
    .toFile(outputPath);

  const outputStats = fs.statSync(outputPath);
  const outputSize = outputStats.size;
  const saved = inputSize - outputSize;
  const savedPercent = ((saved / inputSize) * 100).toFixed(1);

  return {
    input: inputFile,
    output: outputFile,
    inputSize,
    outputSize,
    saved,
    savedPercent
  };
}

async function main() {
  console.log('🚀 Starting image optimization...\n');

  let totalInputSize = 0;
  let totalOutputSize = 0;
  const results = [];

  for (const conversion of conversions) {
    const result = await optimizeImage(
      conversion.input,
      conversion.output,
      conversion.width,
      conversion.height
    );

    if (result) {
      results.push(result);
      totalInputSize += result.inputSize;
      totalOutputSize += result.outputSize;

      console.log(`✅ ${result.output}`);
      console.log(`   ${(result.inputSize / 1024).toFixed(1)} KB → ${(result.outputSize / 1024).toFixed(1)} KB (${result.savedPercent}% gespart)\n`);
    }
  }

  const totalSaved = totalInputSize - totalOutputSize;
  const totalSavedPercent = ((totalSaved / totalInputSize) * 100).toFixed(1);

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📊 OPTIMIZATION SUMMARY');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`Files converted: ${results.length}`);
  console.log(`Total input size: ${(totalInputSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total output size: ${(totalOutputSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB (${totalSavedPercent}%)`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  console.log('✅ Optimization complete!');
  console.log('\n💡 Next steps:');
  console.log('   1. Check the new WebP files in public/img/flux/');
  console.log('   2. Update code references to use new filenames');
  console.log('   3. Delete original PNG/JPEG files');
  console.log('   4. Run: npm run build');
}

main().catch(console.error);
