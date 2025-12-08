const fs = require('fs');
const path = require('path');

const renameMap = {
  'hochdruckreiniger-pflasterstein-Digen_image_1764788258614.webp': 'pflaster-hochdruck.webp',
  'flux-2-pro_b_Pflasterfläche_mit_M.webp': 'pflaster-moos-vorher.webp',
  'hunyuan-image-3.0_a__Pflasteroberfläche_.webp': 'pflaster-sauber.webp',
  'gpt-image-1_b__Glänzende_versiegel.webp': 'pflaster-versiegelt-1.webp',
  'a__Glänzende_versiegel.webp': 'pflaster-versiegelt-2.webp',
  'hunyuan-image-3.0_a_Gepflegtes_Außen___M.webp': 'pflaster-gepflegt.webp',
  'gemini-3-pro-image-preview-4k (nano-banana-pro)_b__Modernes_Einfamilie.webp': 'einfamilienhaus-modern.webp',
  'b__Moderner_Gehweg_nac.webp': 'gehweg-modern.webp',
  'gemini-3-pro-image-preview-2k (nano-banana-pro)_a_Premium_Wohnhaus_mit.webp': 'wohnhaus-premium-1.webp',
  'seedream-4-high-res-fal_b_Premium_Wohnhaus_mit.webp': 'wohnhaus-premium-2.webp',
  'b__Modernes_Einfamilie.webp': 'einfamilienhaus-modern-2.webp',
  'gemini-3-pro-image-preview-2k (nano-banana-pro)_a_stelle_sicher_dass_d.webp': 'wohnhaus-gepflegt.webp',
  'corridor uni.jpeg': 'uni-korridor.webp',
  'schulgebaude_innenhof.jpeg': 'schulgebaeude-innenhof.webp',
  'classrom.jpeg': 'klassenzimmer-sauber.webp',
  'classrom2.jpeg': 'klassenzimmer-2.webp',
  'uni_classroom.jpeg': 'universitaet-klassenzimmer.webp'
};

const fluxDir = 'public/img/flux';

console.log('📋 Dateiumbenennung - Flux Bilder\n');

Object.entries(renameMap).forEach(([oldName, newName]) => {
  const oldPath = path.join(fluxDir, oldName);
  const newPath = path.join(fluxDir, newName);
  
  if (fs.existsSync(oldPath)) {
    try {
      fs.renameSync(oldPath, newPath);
      console.log('✅ ' + oldName + ' → ' + newName);
    } catch (error) {
      console.log('❌ Fehler: ' + oldName + ' - ' + error.message);
    }
  } else {
    console.log('⚠️  Datei nicht gefunden: ' + oldName);
  }
});

console.log('\n✨ Umbenennungen abgeschlossen!');
