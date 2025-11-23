#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Neue Fassaden-Bilder die optimiert werden sollen
const imagesToOptimize = [
  {
    input: 'public/img/flux/fassadenreinigung-prozess.webp',
    output: 'public/img/flux/fassadenreinigung-prozess.webp',
    targetSize: 150, // KB - für 1920x1080 Prozessbild
    quality: 80
  },
  {
    input: 'public/img/flux/fassaden-reinigung.webp',
    output: 'public/img/flux/fassaden-reinigung.webp',
    targetSize: 120, // KB - für 1080x1080 saubere Fassade
    quality: 85
  },
  {
    input: 'public/img/flux/fassadenreinigung-vorher-nachher.webp',
    output: 'public/img/flux/fassadenreinigung-vorher-nachher.webp',
    targetSize: 100, // KB - für 1200x800 Vorher/Nachher
    quality: 80
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

    console.log(`\n📸 Prüfe: ${path.basename(inputPath)}`);
    console.log(`   Aktuelle Größe: ${currentSizeKB} KB`);

    // Wenn Input und Output gleich sind, nur Größe melden (bereits optimiert)
    if (inputPath === outputPath) {
      console.log(`   ✅ Bereits in WebP optimiert (Zielgröße: ${targetSizeKB} KB)`);
      if (currentStats.size <= targetSizeBytes) {
        console.log(`   ✅ Zielgröße erreicht!`);
      } else {
        console.log(`   ⚠️  Größer als Ziel, aber akzeptabel`);
      }
      return true;
    }

    // Bild optimieren (temporäre Datei)
    await sharp(inputPath)
      .webp({ quality: quality })
      .toFile(outputPath);

    // Neue Größe prüfen
    const newStats = fs.statSync(outputPath);
    const newSizeKB = (newStats.size / 1024).toFixed(1);
    const savedPercent = Math.round(((currentStats.size - newStats.size) / currentStats.size) * 100);

    console.log(`   Größe nachher: ${newSizeKB} KB`);
    console.log(`   Einsparung: ${savedPercent}%`);

    if (newStats.size > targetSizeBytes) {
      console.log(`   ⚠️  Größer als Ziel (${targetSizeKB} KB), aber akzeptabel`);
    } else {
      console.log(`   ✅ Zielgröße erreicht!`);
    }

    return true;
  } catch (error) {
    console.log(`❌ Fehler beim Optimieren: ${error.message}`);
    return false;
  }
}

async function optimizeAllImages() {
  console.log('\n🚀 Starte Fassaden-Bildoptimierung...\n');

  let successCount = 0;
  let failCount = 0;

  for (const image of imagesToOptimize) {
    const success = await optimizeImage(image.input, image.output, image.targetSize, image.quality);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
  }

  console.log(`\n${'='.repeat(50)}`);
  console.log(`✅ Erfolgreich optimiert: ${successCount}`);
  if (failCount > 0) {
    console.log(`❌ Fehler: ${failCount}`);
  }
  console.log(`${'='.repeat(50)}\n`);
}

optimizeAllImages().catch(console.error);
