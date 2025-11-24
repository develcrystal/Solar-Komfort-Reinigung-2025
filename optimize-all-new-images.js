#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Neue Bilder die optimiert werden sollen (Nov 23 - Neu generiert)
const imagesToOptimize = [
  // Team & Vehicle Images
  {
    input: 'public/img/flux/Team Group Photo1763904784387-019ab0ea-a724-7ade-851b-935896baa86b.png',
    output: 'public/img/flux/team-gruppenfoto-new1.webp',
    targetSize: 200, // KB - Team photo, larger
    quality: 85
  },
  {
    input: 'public/img/flux/team_in_action_1763904653140-019ab0e8-a432-757b-99e6-5a5612a2ae67.png',
    output: 'public/img/flux/team-in-action.webp',
    targetSize: 180, // KB - Team in action
    quality: 85
  },
  // Referenz Images - Einfamilienhaus
  {
    input: 'public/img/flux/referenz-einfamilienhaus4.webp',
    output: 'public/img/flux/referenz-einfamilienhaus4.webp',
    targetSize: 120, // KB
    quality: 85
  },
  {
    input: 'public/img/flux/referenz-einfamilienhaus5.webp',
    output: 'public/img/flux/referenz-einfamilienhaus5.webp',
    targetSize: 120, // KB
    quality: 85
  },
  // Referenz Images - Gewerbeobjekt
  {
    input: 'public/img/flux/referenz-gewerbeobjekt1.webp',
    output: 'public/img/flux/referenz-gewerbeobjekt1.webp',
    targetSize: 100, // KB
    quality: 85
  },
  {
    input: 'public/img/flux/referenz-gewerbeobjekt2.webp',
    output: 'public/img/flux/referenz-gewerbeobjekt2.webp',
    targetSize: 120, // KB
    quality: 85
  },
  {
    input: 'public/img/flux/referenz-gewerbeobjekt3.webp',
    output: 'public/img/flux/referenz-gewerbeobjekt3.webp',
    targetSize: 120, // KB
    quality: 85
  },
  // Referenz Images - Mehrfamilienhaus
  {
    input: 'public/img/flux/referenz-mehrfamilienhaus1.webp',
    output: 'public/img/flux/referenz-mehrfamilienhaus1.webp',
    targetSize: 120, // KB
    quality: 85
  },
  {
    input: 'public/img/flux/referenz-mehrfamilienhaus2.webp',
    output: 'public/img/flux/referenz-mehrfamilienhaus2.webp',
    targetSize: 120, // KB
    quality: 85
  },
  {
    input: 'public/img/flux/referenz-mehrfamilienhaus3.webp',
    output: 'public/img/flux/referenz-mehrfamilienhaus3.webp',
    targetSize: 150, // KB - Larger image
    quality: 85
  },
  {
    input: 'public/img/flux/referenz-mehrfamilienhaus4.webp',
    output: 'public/img/flux/referenz-mehrfamilienhaus4.webp',
    targetSize: 130, // KB
    quality: 85
  },
  {
    input: 'public/img/flux/referenz-mehrfamilienhaus5.webp',
    output: 'public/img/flux/referenz-mehrfamilienhaus5.webp',
    targetSize: 200, // KB - Largest image
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

    console.log(`\n📸 Optimiere: ${path.basename(inputPath)}`);
    console.log(`   Aktuelle Größe: ${currentSizeKB} KB`);

    // Wenn Input und Output gleich sind, nur Größe melden (bereits optimiert)
    if (inputPath === outputPath) {
      console.log(`   ✅ Bereits optimiert (Zielgröße: ${targetSizeKB} KB)`);
      if (currentStats.size <= targetSizeBytes) {
        console.log(`   ✅ Zielgröße erreicht!`);
      } else {
        console.log(`   ⚠️  Größer als Ziel, aber akzeptabel`);
      }
      return true;
    }

    // Bild optimieren (PNG → WebP oder re-optimize WebP)
    const isInputWebP = inputPath.toLowerCase().endsWith('.webp');

    if (isInputWebP) {
      // WebP zu WebP - einfach re-encode
      await sharp(inputPath)
        .webp({ quality: quality })
        .toFile(outputPath);
    } else {
      // PNG zu WebP - mit Conversion
      await sharp(inputPath)
        .webp({ quality: quality })
        .toFile(outputPath);
    }

    // Neue Größe prüfen
    const newStats = fs.statSync(outputPath);
    const newSizeKB = (newStats.size / 1024).toFixed(1);
    const savedPercent = Math.round(((currentStats.size - newStats.size) / currentStats.size) * 100);

    console.log(`   ➜ Neue Größe: ${newSizeKB} KB`);
    console.log(`   💾 Einsparung: ${savedPercent}%`);

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
  console.log('\n🚀 Starte Optimierung aller neuen Images...\n');

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

  console.log(`\n${'='.repeat(60)}`);
  console.log(`✅ Erfolgreich optimiert: ${successCount}`);
  if (failCount > 0) {
    console.log(`❌ Fehler: ${failCount}`);
  }
  console.log(`${'='.repeat(60)}\n`);
}

optimizeAllImages().catch(console.error);
