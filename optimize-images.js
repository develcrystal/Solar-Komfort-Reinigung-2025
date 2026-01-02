const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Konfiguration
const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const IMG_DIR = path.join(PUBLIC_DIR, 'img');
const BACKUP_DIR_NAME = `img_backup_${new Date().toISOString().replace(/[:.]/g, '-')}`;
const BACKUP_DIR = path.join(PUBLIC_DIR, BACKUP_DIR_NAME);

/**
 * Dynamisch alle Bilddateien finden, sichern und optimieren.
 */

// Hilfsfunktion: Rekursives Sammeln von Bilddateien
function collectImages(dir) {
  let results = [];
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      // Ignoriere Backup-Ordner, falls er im Scan-Pfad liegt
      if (fullPath.includes(BACKUP_DIR_NAME)) continue;

      if (entry.isDirectory()) {
        results.push(...collectImages(fullPath));
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        // Unterstützte Formate
        if (['.webp', '.png', '.jpg', '.jpeg'].includes(ext)) {
          results.push(fullPath);
        }
      }
    }
  } catch (err) {
    console.warn(`Warnung beim Lesen von ${dir}: ${err.message}`);
  }
  return results;
}

async function optimizeImage(filePath) {
  try {
    const relativePath = path.relative(IMG_DIR, filePath);
    const backupPath = path.join(BACKUP_DIR, relativePath);
    const backupDir = path.dirname(backupPath);

    // 1. Backup sicherstellen
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    // Kopiere Original ins Backup (nur wenn noch nicht vorhanden, um Originalzustand zu wahren)
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(filePath, backupPath);
    }

    // 2. Optimierung vorbereiten
    // Wir lesen vom Backup (Quelle) und schreiben in die Original-Location (Ziel)
    // Damit umgehen wir den "Input same as Output"-Fehler von sharp
    const inputPath = backupPath;
    const outputPath = filePath.replace(/\.(png|jpe?g)$/i, '.webp'); // Erzwinge .webp

    const currentStats = fs.statSync(inputPath);
    const currentSizeKB = Math.round(currentStats.size / 1024);

    // Zielgröße definieren (WebP/AVIF: 80KB, andere: 100KB als Basis)
    const isWebp = path.extname(outputPath).toLowerCase() === '.webp';
    const targetSizeKB = isWebp ? 80 : 100;

    console.log(`\n📸 Verarbeite: ${relativePath}`);
    console.log(`   Original (${currentSizeKB} KB) gesichert nach: .../${BACKUP_DIR_NAME}/${relativePath}`);

    // 3. Optimieren
    await sharp(inputPath)
      .webp({
        quality: 75,
        effort: 6,
        smartSubsample: true
      })
      .toFile(outputPath);

    // 4. Alte Datei löschen, falls Erweiterung geändert wurde (z.B. png -> webp)
    if (filePath !== outputPath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`   🗑️  Alte Datei gelöscht (Format konvertiert): ${path.basename(filePath)}`);
    }

    // 5. Statistik berechnen
    const newStats = fs.statSync(outputPath);
    const newSizeKB = Math.round(newStats.size / 1024);
    const savedKB = currentSizeKB - newSizeKB;
    const savedPercent = currentSizeKB > 0 ? Math.round((savedKB / currentSizeKB) * 100) : 0;

    console.log(`   ✅ Optimiert auf: ${newSizeKB} KB`);

    if (savedKB > 0) {
      console.log(`   💰 Gespart: ${savedKB} KB (${savedPercent}%)`);
    } else {
      console.log(`   ℹ️  Keine Einsparung (Bild war bereits optimiert/klein)`);
    }

    return { initial: currentSizeKB, final: newSizeKB };

  } catch (error) {
    console.error(`❌ Fehler bei ${path.basename(filePath)}:`, error.message);
    return { initial: 0, final: 0 };
  }
}

async function main() {
  console.log('🚀 Starte sichere Bildoptimierung (mit Backup)');
  console.log(`📂 Bilder-Quelle: ${IMG_DIR}`);
  console.log(`📦 Backup-Ziel:   ${BACKUP_DIR}`);
  console.log('==============================================\n');

  // Backup-Verzeichnis erstellen
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
  }

  // Bilder sammeln
  const allImages = collectImages(IMG_DIR);
  console.log(`� Gefunden: ${allImages.length} Bild-Dateien`);

  let totalInitialKB = 0;
  let totalFinalKB = 0;

  for (const imgPath of allImages) {
    const result = await optimizeImage(imgPath);
    totalInitialKB += result.initial;
    totalFinalKB += result.final;
  }

  const totalSavedKB = totalInitialKB - totalFinalKB;
  const totalSavedPercent = totalInitialKB > 0 ? Math.round((totalSavedKB / totalInitialKB) * 100) : 0;

  console.log('\n📈 GESAMT-Statistik:');
  console.log('=====================');
  console.log(`Vorher:  ${totalInitialKB} KB`);
  console.log(`Nachher: ${totalFinalKB} KB`);
  console.log(`Gespart: ${totalSavedKB} KB (${totalSavedPercent}%)`);
  console.log('\n✅ Optimierung abgeschlossen!');
  console.log(`ℹ️  Backups befinden sich in: ${BACKUP_DIR}`);
}

main().catch(console.error);
