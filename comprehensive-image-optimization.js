#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Comprehensive list of ALL images that need optimization
const imagesToOptimize = [
  // CRITICAL: Large PNG files (flux directory)
  {
    input: 'public/img/flux/b_A_man_in_blue_work_c.png',
    output: 'public/img/flux/b_A_man_in_blue_work_c.webp',
    targetSize: 800,
    quality: 85
  },
  {
    input: 'public/img/flux/banner_fassadenreinigung1763904047117-019ab0df-6290-7f41-9178-6baaecf8ec59.png',
    output: 'public/img/flux/banner-fassadenreinigung-alt.webp',
    targetSize: 200,
    quality: 85
  },
  {
    input: 'public/img/flux/Fassade_VorherNAcher1763903060190-019ab0cf-fea2-7ce7-86c0-0aae3cdd6b72.png',
    output: 'public/img/flux/fassaden-vornachher-alt1.webp',
    targetSize: 200,
    quality: 85
  },
  {
    input: 'public/img/flux/Fassade_VorherNachher-Split (Optional aber besser1763903028269-019ab0d0-12f3-7473-9b66-0b577eae7f57.png',
    output: 'public/img/flux/fassaden-vornachher-alt2.webp',
    targetSize: 200,
    quality: 85
  },
  {
    input: 'public/img/flux/fassdenreinigung1763901822492-019ab0bd-7628-7629-888d-d6a33721295d.png',
    output: 'public/img/flux/fassaden-vornachher-alt3.webp',
    targetSize: 200,
    quality: 85
  },
  {
    input: 'public/img/flux/firmenfahrzeug-solar-komfort1.png',
    output: 'public/img/flux/firmenfahrzeug-solar-komfort1.webp',
    targetSize: 200,
    quality: 85
  },
  {
    input: 'public/img/flux/firmenfahrzeug-solar-komfort3.png',
    output: 'public/img/flux/firmenfahrzeug-solar-komfort3.webp',
    targetSize: 200,
    quality: 85
  },
  {
    input: 'public/img/flux/Prozess-Bild (Hochdruckreiniger in Aktion.png',
    output: 'public/img/flux/fassaden-prozess1-alt.webp',
    targetSize: 200,
    quality: 85
  },
  {
    input: 'public/img/flux/Prozess-Bild (Hochdruckreiniger in Aktion1763902661588-019ab0ca-8d67-7336-9094-596eb4b374b4.png',
    output: 'public/img/flux/fassaden-prozess2-alt.webp',
    targetSize: 200,
    quality: 85
  },
  {
    input: 'public/img/flux/Prozess-Bild (Hochdruckreiniger in Aktion1763902681825-019ab0ca-8d67-7ad8-bd00-ef34503375f5.png',
    output: 'public/img/flux/fassaden-prozess3-alt.webp',
    targetSize: 200,
    quality: 85
  },
  // Team und Vorher-Nachher Bilder
  {
    input: 'public/img/flux/gemini-3-pro-image-preview (nano-banana-pro)_a_Split_image_showing_.png',
    output: 'public/img/flux/fassaden-vornachher-split.webp',
    targetSize: 200,
    quality: 85
  },
  {
    input: 'public/img/flux/Team Group Photo1763904784387-019ab0ea-a724-7ade-851b-935896baa86b.png',
    output: 'public/img/flux/team-gruppenfoto.webp',
    targetSize: 300,
    quality: 85
  },
  {
    input: 'public/img/flux/team_in_action_1763904653140-019ab0e8-a432-757b-99e6-5a5612a2ae67.png',
    output: 'public/img/flux/team-in-action.webp',
    targetSize: 300,
    quality: 85
  },
  {
    input: 'public/img/flux/Ergebnis-Bild (Saubere Fassade1763902899170-019ab0ce-1910-7cbf-8a6c-f8f78497bf2d.png',
    output: 'public/img/flux/fassaden-ergebnis1-alt.webp',
    targetSize: 150,
    quality: 85
  },
  {
    input: 'public/img/flux/Ergebnis-Bild (Saubere Fassade1763902917893-019ab0ce-1910-740d-8fcd-e04b3d7385fc.png',
    output: 'public/img/flux/fassaden-ergebnis2-alt.webp',
    targetSize: 150,
    quality: 85
  },
  {
    input: 'public/img/flux/Ergebnis-Bild (Saubere Fassade1763902989146-019ab0ce-cf89-7490-bdb2-9aa8d007c9a3.png',
    output: 'public/img/flux/fassaden-ergebnis3-alt.webp',
    targetSize: 150,
    quality: 85
  },
  // JPEG files
  {
    input: 'public/img/flux/firmenfahrzeug-solar-komfort2.jpeg',
    output: 'public/img/flux/firmenfahrzeug-solar-komfort2.webp',
    targetSize: 200,
    quality: 85
  },
  {
    input: 'public/img/new/hero-roof.jpg',
    output: 'public/img/new/hero-roof.webp',
    targetSize: 300,
    quality: 85
  },
  // Testimonials
  {
    input: 'public/img/testimonials/customer-1.jpg',
    output: 'public/img/testimonials/customer-1.webp',
    targetSize: 100,
    quality: 85
  },
  {
    input: 'public/img/testimonials/customer-2.jpg',
    output: 'public/img/testimonials/customer-2.webp',
    targetSize: 100,
    quality: 85
  },
  {
    input: 'public/img/testimonials/customer-3.jpg',
    output: 'public/img/testimonials/customer-3.webp',
    targetSize: 100,
    quality: 85
  },
  {
    input: 'public/img/testimonials/customer-4.jpg',
    output: 'public/img/testimonials/customer-4.webp',
    targetSize: 100,
    quality: 85
  },
  // CRITICAL: Model images (extremely large)
  {
    input: 'public/img/models/model-reinigung.png',
    output: 'public/img/models/model-reinigung.webp',
    targetSize: 1500,
    quality: 85
  },
  {
    input: 'public/img/models/model-fassade.png',
    output: 'public/img/models/model-fassade.webp',
    targetSize: 500,
    quality: 85
  }
];

async function optimizeImage(inputPath, outputPath, targetSizeKB, quality) {
  try {
    const targetSizeBytes = targetSizeKB * 1024;

    // Prüfen ob Datei existiert
    if (!fs.existsSync(inputPath)) {
      console.log(`❌ Datei nicht gefunden: ${inputPath}`);
      return false;
    }

    // Aktuelle Größe prüfen
    const currentStats = fs.statSync(inputPath);
    const currentSizeKB = (currentStats.size / 1024).toFixed(1);

    console.log(`\n📸 Konvertiere: ${path.basename(inputPath)}`);
    console.log(`   Input-Größe: ${currentSizeKB} KB`);

    // Bild optimieren (PNG/JPEG → WebP)
    await sharp(inputPath)
      .webp({ quality: quality })
      .toFile(outputPath);

    // Neue Größe prüfen
    const newStats = fs.statSync(outputPath);
    const newSizeKB = (newStats.size / 1024).toFixed(1);
    const savedPercent = Math.round(((currentStats.size - newStats.size) / currentStats.size) * 100);

    console.log(`   ➜ WebP-Größe: ${newSizeKB} KB`);
    console.log(`   💾 Einsparung: ${savedPercent}%`);
    console.log(`   📁 Output: ${path.basename(outputPath)}`);

    if (newStats.size > targetSizeBytes) {
      console.log(`   ⚠️  Größer als Ziel (${targetSizeKB} KB), aber akzeptabel`);
    } else {
      console.log(`   ✅ Zielgröße erreicht!`);
    }

    return true;
  } catch (error) {
    console.log(`❌ Fehler beim Konvertieren: ${error.message}`);
    return false;
  }
}

async function optimizeAllImages() {
  console.log('\n🚀 STARTE UMFASSENDE IMAGE OPTIMIZATION...\n');
  console.log(`📊 Insgesamt ${imagesToOptimize.length} Dateien zu konvertieren\n`);
  console.log('=' .repeat(70) + '\n');

  let successCount = 0;
  let failCount = 0;
  let totalSavings = 0;

  for (const image of imagesToOptimize) {
    const success = await optimizeImage(image.input, image.output, image.targetSize, image.quality);
    if (success) {
      successCount++;
      // Berechne Einsparungen
      try {
        const inputStats = fs.statSync(image.input);
        const outputStats = fs.statSync(image.output);
        const savings = inputStats.size - outputStats.size;
        totalSavings += savings;
      } catch (e) {}
    } else {
      failCount++;
    }
  }

  console.log(`\n${'='.repeat(70)}`);
  console.log(`✅ Erfolgreich konvertiert: ${successCount}/${imagesToOptimize.length}`);
  if (failCount > 0) {
    console.log(`❌ Fehler: ${failCount}`);
  }

  const totalSavingsMB = (totalSavings / 1024 / 1024).toFixed(2);
  console.log(`💾 Gesamte Einsparung: ${totalSavingsMB} MB`);
  console.log(`${'='.repeat(70)}\n`);
}

optimizeAllImages().catch(console.error);
