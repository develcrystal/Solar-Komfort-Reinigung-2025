const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Bilder, die optimiert werden sollen (Homepage Service Grid)
const imagesToOptimize = [
  {
    input: 'public/img/flux/Fassaden-Reinigung.webp',
    output: 'public/img/flux/Fassaden-Reinigung.webp',
    targetSize: 80 // KB
  },
  {
    input: 'public/img/flux/Büro-Reinigung.webp',
    output: 'public/img/flux/Büro-Reinigung.webp',
    targetSize: 70 // KB
  },
  {
    input: 'public/img/kundenbilder/Krankenhausreinigung (1).webp',
    output: 'public/img/kundenbilder/Krankenhausreinigung (1).webp',
    targetSize: 75 // KB
  },
  {
    input: 'public/img/flux/Grundreinigung.webp',
    output: 'public/img/flux/Grundreinigung.webp',
    targetSize: 80 // KB
  },
  {
    input: 'public/img/kundenbilder/Haus.png',
    output: 'public/img/kundenbilder/Haus.webp',
    targetSize: 60 // KB
  },
  {
    input: 'public/img/flux/Pflaster-stein-Reinigung.webp',
    output: 'public/img/flux/Pflaster-stein-Reinigung.webp',
    targetSize: 85 // KB
  }
];

async function optimizeImage(inputPath, outputPath, targetSizeKB) {
  try {
    const targetSizeBytes = targetSizeKB * 1024;
    
    // Prüfen ob Datei existiert
    if (!fs.existsSync(inputPath)) {
      console.log(`❌ Datei nicht gefunden: ${inputPath}`);
      return;
    }
    
    // Aktuelle Größe prüfen
    const currentStats = fs.statSync(inputPath);
    const currentSizeKB = Math.round(currentStats.size / 1024);
    
    console.log(`\n📸 Optimiere: ${path.basename(inputPath)}`);
    console.log(`   Aktuelle Größe: ${currentSizeKB} KB`);
    console.log(`   Zielgröße: ${targetSizeKB} KB`);
    
    // Bild optimieren
    await sharp(inputPath)
      .webp({ 
        quality: 75,
        effort: 6,
        smartSubsample: true
      })
      .toFile(outputPath);
    
    // Neue Größe prüfen
    const newStats = fs.statSync(outputPath);
    const newSizeKB = Math.round(newStats.size / 1024);
    const savedKB = currentSizeKB - newSizeKB;
    const savedPercent = Math.round((savedKB / currentSizeKB) * 100);
    
    console.log(`   ✅ Neue Größe: ${newSizeKB} KB`);
    console.log(`   💰 Gespart: ${savedKB} KB (${savedPercent}%)`);
    
  } catch (error) {
    console.error(`❌ Fehler bei ${inputPath}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Starte Bildoptimierung - Phase 1');
  console.log('=====================================\n');
  
  let totalSavedKB = 0;
  let initialTotalKB = 0;
  
  for (const image of imagesToOptimize) {
    if (fs.existsSync(image.input)) {
      const stats = fs.statSync(image.input);
      initialTotalKB += Math.round(stats.size / 1024);
    }
  }
  
  console.log(`📊 Ausgangsgröße: ${initialTotalKB} KB\n`);
  
  for (const image of imagesToOptimize) {
    await optimizeImage(image.input, image.output, image.targetSize);
  }
  
  // Finale Statistik
  let finalTotalKB = 0;
  for (const image of imagesToOptimize) {
    if (fs.existsSync(image.output)) {
      const stats = fs.statSync(image.output);
      finalTotalKB += Math.round(stats.size / 1024);
    }
  }
  
  totalSavedKB = initialTotalKB - finalTotalKB;
  
  console.log('\n📈 Optimierungsergebnisse:');
  console.log('==========================');
  console.log(`Vorher: ${initialTotalKB} KB`);
  console.log(`Nachher: ${finalTotalKB} KB`);
  console.log(`Gespart: ${totalSavedKB} KB (${Math.round((totalSavedKB / initialTotalKB) * 100)}%)`);
  console.log('\n✅ Phase 1 abgeschlossen!');
}

main().catch(console.error);
