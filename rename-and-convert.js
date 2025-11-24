#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Mapping: alte Dateiname -> neue Dateiname (+ WebP Konvertierung)
const renamingMap = {
  'a_A_man_in_blue_work_c.png': 'hero-kontakt1.webp',
  'gemini-3-pro-image-preview (nano-banana-pro)_a_Three_people_in_blue.png': 'hero-kontakt2.webp',
  'b_Open_office_space_wi.jpeg': 'bueroeinigung-moderne.webp',
  'service_portrait.png': 'team-beratung-neu.webp',
  'team_1763926201524-019ab231-5dbb-7bb6-9998-2b103650ea78.png': 'team-gruppenfoto-neu.webp',
  'team_bei_arbeit1763925254312-019ab222-e820-79e1-b377-1d3dd348da2e.png': 'team-bei-arbeit-neu.webp',
  'team_vor_ort1763925619586-019ab228-80d6-7266-8034-f2ec46c14f9a.png': 'team-vor-ort.webp',
  'gemini-2.5-flash-image-preview (nano-banana)_a_Open_office_space_wi.png': 'bueroeinigung-raum.webp'
};

const fluxDir = path.join(__dirname, 'public', 'img', 'flux');

async function convertAndRename(oldName, newName) {
  const oldPath = path.join(fluxDir, oldName);
  const newPath = path.join(fluxDir, newName);

  if (!fs.existsSync(oldPath)) {
    console.log(`❌ Datei nicht gefunden: ${oldName}`);
    return false;
  }

  try {
    const stats = fs.statSync(oldPath);
    const oldSizeKB = (stats.size / 1024).toFixed(1);

    console.log(`\n🔄 Konvertiere: ${oldName}`);
    console.log(`   Alte Größe: ${oldSizeKB} KB`);

    // Konvertiere zu WebP
    await sharp(oldPath)
      .webp({ quality: 85 })
      .toFile(newPath);

    // Lösche altes Bild
    fs.unlinkSync(oldPath);

    // Neue Größe prüfen
    const newStats = fs.statSync(newPath);
    const newSizeKB = (newStats.size / 1024).toFixed(1);
    const savedPercent = Math.round(((stats.size - newStats.size) / stats.size) * 100);

    console.log(`   ✅ Neuer Name: ${newName}`);
    console.log(`   Neue Größe: ${newSizeKB} KB (Einsparung: ${savedPercent}%)`);

    return true;
  } catch (error) {
    console.log(`❌ Fehler: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('🚀 Starte Umbenennung und WebP-Konvertierung...\n');

  let successCount = 0;
  let failCount = 0;

  for (const [oldName, newName] of Object.entries(renamingMap)) {
    const success = await convertAndRename(oldName, newName);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`✅ Erfolgreich konvertiert: ${successCount}`);
  if (failCount > 0) {
    console.log(`❌ Fehler: ${failCount}`);
  }
  console.log(`${'='.repeat(60)}\n`);
}

main().catch(console.error);
