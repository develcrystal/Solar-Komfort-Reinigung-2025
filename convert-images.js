#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Alle zu konvertierenden Bilder (PNG/JPEG → WebP)
const imagesToConvert = [
  {
    input: 'F:\\108Coding\\solar-komfort-reinigung-rag\\Komfort Gebäudeservice24 GmbH\\_a_erstelle_auder_tabel.png',
    output: 'public/img/flux/problem-loesung-tabelle.webp',
    targetSize: 200,
    quality: 85
  }
];

async function convertImage(inputPath, outputPath, targetSizeKB, quality) {
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

async function convertAllImages() {
  console.log('\n🚀 Starte Batch-Konvertierung (PNG/JPEG → WebP)...\n');
  console.log(`📊 Insgesamt ${imagesToConvert.length} Datei(en) zu konvertieren\n`);

  let successCount = 0;
  let failCount = 0;

  for (const image of imagesToConvert) {
    const success = await convertImage(image.input, image.output, image.targetSize, image.quality);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
  }

  console.log(`\n${'='.repeat(70)}`);
  console.log(`✅ Erfolgreich konvertiert: ${successCount}/${imagesToConvert.length}`);
  if (failCount > 0) {
    console.log(`❌ Fehler: ${failCount}`);
  }
  console.log(`${'='.repeat(70)}\n`);
}

convertAllImages().catch(console.error);
