# 🔧 BILD-ERSETZUNGS-PLAN
**Datum:** 2026-01-02 17:26  
**Priorität:** HOCH

---

## ❌ OBSOLETE BILDER (MÜSSEN ERSETZT WERDEN)

### 1. `team-gruppenfoto1.webp` (ALTES LOGO)
**Gefunden in 10 Dateien:**
- ✅ `src/app/gebaeudereinigung/schulreinigung/page.tsx` - Zeile 221 (Qualitätskontrolle)
- ⚠️ `src/components/GründerPresentation.tsx` - Zeilen 22, 39
- ⚠️ `src/app/unternehmen/page.tsx` - Zeile 267
- ⚠️ `src/app/ueber-uns/page.tsx` - Zeilen 23, 37
- ⚠️ `src/app/referenzen/galerie/page.tsx` - Zeile 213
- ⚠️ `src/app/page.tsx` - Zeilen 99, 561
- ⚠️ `src/app/kontakt/page.tsx` - Zeile 25

**Ersetzen durch:** `/img/flux/team-gruppenfoto-neu.webp`

### 2. `team-beratung1.webp` (ALTES LOGO)
**Gefunden in 8 Dateien:**
- ⚠️ `src/app/gebaeudereinigung/treppenhausreinigung/page.tsx` - Zeilen 103, 110, 117, 124 (4x GLEICH!)
- ⚠️ `src/app/gebaeudereinigung/dachreinigung/page.tsx` - Zeile 19
- ⚠️ `src/app/referenzen/galerie/page.tsx` - Zeile 223
- ⚠️ `src/app/page.tsx` - Zeile 545
- ⚠️ `src/app/kontakt/page.tsx` - Zeile 78

**Ersetzen durch:** `/img/flux/team-beratung-neu.webp`

---

## 🎯 FIX-STRATEGIE

### Phase 1: Schulreinigung (✅ BEREITS TEILWEISE FIXED)
- [x] Service-Karten korrigiert
- [x] Prozess-Schritte 1-2 korrigiert
- [ ] **Prozess-Schritt 3 "Qualitätskontrolle"** - Bild ersetzen

### Phase 2: Treppenhausreinigung (KRITISCH - 4x GLEICHES BILD!)
- [ ] Prozess-Schritt 1: WEG-Abstimmung → `team-beratung-neu.webp`
- [ ] Prozess-Schritt 2: Lärmschutz → `team-bei-arbeit-neu.webp`
- [ ] Prozess-Schritt 3: Qualitätskontrolle → `firmenfahrzeug-solar-komfort1.webp` oder Dokumentation-Bild
- [ ] Prozess-Schritt 4: Mieter-Feedback → `team-gruppenfoto-neu.webp`

### Phase 3: Globale Ersetzungen
- [ ] Alle `team-gruppenfoto1.webp` → `team-gruppenfoto-neu.webp`
- [ ] Alle `team-beratung1.webp` → `team-beratung-neu.webp`
- [ ] Metadata/OpenGraph Bilder aktualisieren

---

## 📋 VERFÜGBARE NEUE BILDER

### Team-Bilder (NEUES BRANDING):
- ✅ `team-gruppenfoto-neu.webp` (156 KB)
- ✅ `team-bei-arbeit-neu.webp` (259 KB)
- ✅ `team-beratung-neu.webp` (138 KB)
- ✅ `team-vor-ort.webp` (171 KB)

### Firmenfahrzeuge (NEUES BRANDING):
- ✅ `firmenfahrzeug-solar-komfort1.webp` (147 KB)
- ✅ `firmenfahrzeug-solar-komfort2.webp` (1.1 MB) ⚠️ GROSS
- ✅ `firmenfahrzeug-solar-komfort3.webp` (179 KB)
- ✅ `firmenfahrzeug-solar-komfort4.webp` (107 KB)

### Prozess-Bilder:
- ✅ `team-bei-der-arbeit1741879901018.webp` (199 KB)
- ✅ `professionelle-ausruestung1.webp` (169 KB)
- ✅ `professionelle-ausruestung2.webp` (132 KB)
- ✅ `professionelle-ausruestung3.webp` (116 KB)

---

## 🚀 NÄCHSTE SCHRITTE

1. **SOFORT:** Schulreinigung Qualitätskontrolle-Bild ersetzen
2. **KRITISCH:** Treppenhausreinigung - 4 verschiedene Bilder verwenden
3. **GLOBAL:** Alle obsoleten Team-Bilder ersetzen
4. **OPTIMIERUNG:** Große Bilder komprimieren (>500KB)

---

**Status:** IN PROGRESS  
**Fixes Applied:** 4/50+  
**Geschätzter Aufwand:** 1-2 Stunden
