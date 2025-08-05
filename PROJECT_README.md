# Solar-Komfort Reinigung - Projekt Dokumentation

## 🎯 Projekt Übersicht

**Ziel:** Anpassung des Nextly Templates für Komfort Gebäudeservice24 GmbH - spezialisiert auf Solaranlagen- und Gebäudereinigung

**Status:** Template deployed, RAG-System aktiv, lokale Entwicklung läuft
**Aktueller Stand:** Bereit für Kundenänderungen und Domain-Migration

---

## 📂 Absolute Projektpfade

### Hauptprojektordner
```
F:\108Coding\solar-komfort\
├── nextly-template\              # Haupttemplate (Next.js/React)
├── backup-20250315-002433\       # Template Backup
├── github-version\               # GitHub Repository Version
├── vercel-backup\                # Vercel Deployment Backup
├── ReinigungKostenRechner\       # Kostenrechner Tool
├── SEA\                          # Search Engine Advertising
├── leads\                        # Lead Management
├── Module\                       # Wiederverwendbare Module
├── Blogartikel\                  # Blog Content
└── Bilder\                       # Bildressourcen
```

### RAG-System Ordner
```
F:\108Coding\solar-komfort-reinigung-rag\
├── project_scanner.py            # Projektstruktur Scanner
├── rag_system.py                 # Intelligente Beratung
├── project_manager.py            # Claude CLI Integration
├── task_automation.py            # Task Automation
├── quick_rag_test.py             # PDF/Dokument Suche
├── project_scan_results.json     # Scan-Ergebnisse
└── README.md                     # Projekt Dokumentation
```

### Marketing Assets & Kundenanweisungen
```
J:\.shortcut-targets-by-id\1nMrbtIquQDn76hkciXPOMk4lQ8oO6YTW\Marketing Romain\Reinigung\
├── Komfort Gebäudeservice24 GmbH\
│   ├── Die Hauptbereiche der Hompage.pdf     # 🎯 HAUPTANWEISUNGEN
│   ├── Firmengestaltung Reinigung.docx       # 🎨 DESIGN GUIDELINES
│   ├── Logo\
│   │   ├── Mit Hintergrund Logo Komfort Gebäudeservice24 GmbH.png
│   │   └── Ohne Hintergrund Logo Komfort Gebäudeservice24 GmbH.png
│   ├── Models\
│   │   ├── 1. Model Reinigung Komfort Gebäudeservice24 GmbH.png
│   │   └── 1. Model Fassade Streichen Komfort Gebäudeservice24 GmbH.png
│   └── Bilder\                               # 40+ Service-Bilder
│       ├── Dachreinigung.png
│       ├── Büroreinigung.png
│       ├── Industriereinigung.png
│       ├── Fassaden-Reinigung.png
│       └── [weitere Service-Bilder...]
├── Flyer Reinigung Solar Komfort GmbH.pdf    # 📄 MARKETING CONTENT
├── Reinigung.docx                            # 📋 SERVICE BESCHREIBUNGEN
├── screencapture-solar-komfort-de-discovery-reinigung-2025-05-08-09_49_21.pdf
├── elementor-reinigung\                       # WordPress Elementor Version
├── flux bilder\                               # AI-generierte Bilder
└── neujuniprojekt\                           # Neueste Projektversion
```

---

## 🚀 Aktueller Deployment Status

### Live Deployment
- **Production URL:** https://nextly-template-develcrystal-develcrystals-projects.vercel.app
- **Platform:** Vercel
- **Branch:** main
- **Status:** ✅ Live und funktional

### Lokale Entwicklung
- **Dev Server:** http://localhost:3002 (AKTIV)
- **Port:** 3002 (3000 und 3001 bereits belegt)
- **Status:** ✅ Ready in 22.4s
- **Template:** Nextly Template (Next.js 14.2.28)

---

## 🛠️ Technische Spezifikationen

### Frontend Stack
```json
{
  "framework": "Next.js 14.2.28",
  "react": "18.x",
  "typescript": "5.x",
  "styling": "Tailwind CSS 3.4.1",
  "ui_components": "@headlessui/react, @radix-ui",
  "forms": "react-hook-form 7.51.4",
  "themes": "next-themes 0.3.0",
  "email": "nodemailer 6.10.0"
}
```

### Entwicklungstools
```
- Python: C:\Program Files\Inkscape\bin\python.exe (3.12.9)
- Node.js: npm/yarn für Package Management
- Claude CLI: @anthropic-ai/claude-code@1.0.61
- Desktop Commander: MCP File Operations
- Git: Versionskontrolle
```

### Projektstruktur Template
```
F:\108Coding\solar-komfort\nextly-template\
├── public\                       # Statische Assets
├── src\
│   ├── app\                     # Next.js App Router
│   ├── components\              # React Komponenten
│   └── styles\                  # CSS/Styling
├── .next\                       # Build Output
├── node_modules\                # Dependencies
├── package.json                 # Project Configuration
├── tailwind.config.ts           # Tailwind Configuration
├── next.config.js               # Next.js Configuration
└── tsconfig.json               # TypeScript Configuration
```

---

## 🤖 RAG-System Integration

### Verfügbare Tools
1. **Project Scanner** (`project_scanner.py`)
   - Scannt alle Projektordner rekursiv
   - Erstellt JSON-Datenbank aller Assets
   - Kategorisiert Dateitypen automatisch

2. **RAG Engine** (`rag_system.py`)
   - Intelligente Projektberatung
   - Kontext-aware Empfehlungen
   - Automatische Kategorisierung von Anfragen

3. **Claude CLI Integration** (`project_manager.py`)
   - Automatisierte Code-Generierung
   - Task-Delegation an Claude
   - Halbautomatische Workflows

4. **Task Automation** (`task_automation.py`)
   - Gemini CLI Integration
   - Automated Content Generation
   - Batch Processing

### Usage Examples
```bash
# RAG-System starten
"C:\Program Files\Inkscape\bin\python.exe" "F:\108Coding\solar-komfort-reinigung-rag\quick_rag_test.py"

# Projekt scannen
"C:\Program Files\Inkscape\bin\python.exe" "F:\108Coding\solar-komfort-reinigung-rag\project_scanner.py"

# Claude CLI verwenden
node "C:\Users\Hill\AppData\Roaming\npm\node_modules\@anthropic-ai\claude-code\cli.js" -p "Analysiere Template"
```

---

## 📋 Kundenanweisungen & Assets

### Zentrale Dokumente (Priorität: HOCH)
1. **Die Hauptbereiche der Hompage.pdf** (2.9 MB)
   - Pfad: `J:\...\Komfort Gebäudeservice24 GmbH\Die Hauptbereiche der Hompage.pdf`
   - Inhalt: Website-Struktur und Seitenaufteilung
   - Status: ✅ Lokalisiert

2. **Firmengestaltung Reinigung.docx** (20 KB)
   - Pfad: `J:\...\Komfort Gebäudeservice24 GmbH\Firmengestaltung Reinigung.docx`
   - Inhalt: Corporate Design Guidelines
   - Status: ✅ Lokalisiert

### Marketing Material
3. **Flyer Reinigung Solar Komfort GmbH.pdf** (6.7 MB)
   - Pfad: `J:\...\Marketing Romain\Reinigung\Flyer Reinigung Solar Komfort GmbH.pdf`
   - Inhalt: Bestehender Marketing Content
   - Status: ✅ Content-ready für Website

4. **Reinigung.docx** (458 KB)
   - Pfad: `J:\...\Marketing Romain\Reinigung\Reinigung.docx`
   - Inhalt: Detaillierte Service-Beschreibungen
   - Status: ✅ Ready für Integration

### Visual Assets
- **Logos:** 2 Versionen (mit/ohne Hintergrund)
- **Service-Bilder:** 40+ professionelle Bilder
- **Model-Bilder:** 2 Personen-Models für Header
- **Kunden-Referenzen:** 6 Before/After Bilder

---

## 🔄 Workflow für Kundenänderungen

### 1. Analyse Phase
```
Screenshot von Kunde → RAG-System → Kategorisierung → Aufwandsschätzung
```

### 2. Implementation Phase
```
Claude CLI → Code Generation → Testing → Review → Deploy
```

### 3. Deployment Phase
```
Local Test → Staging → Customer Review → Domain Migration → Production
```

### Automation Pipeline
1. **Input:** Screenshot/Beschreibung der Änderung
2. **Analysis:** RAG-System kategorisiert und erstellt Plan
3. **Execution:** Claude CLI implementiert Änderungen
4. **Testing:** Automatisierte Tests auf localhost:3002
5. **Deployment:** Vercel automatische Deployment
6. **Domain:** Migration auf Kunden-Domain

---

## 🎯 Nächste Schritte

### Kurzfristig (Today)
- [ ] Lokale Entwicklung testen (http://localhost:3002)
- [ ] Kundenänderungen sammeln und analysieren
- [ ] RAG-System für spezifische Fragen nutzen

### Mittelfristig (Diese Woche)  
- [ ] Template für Reinigungsservice anpassen
- [ ] Marketing-Assets integrieren
- [ ] Corporate Design implementieren
- [ ] Service-Seiten erstellen

### Langfristig (Projekt Completion)
- [ ] Neue Domain konfigurieren
- [ ] SEO-Optimierung
- [ ] Performance-Tests
- [ ] Kunde-Übergabe

---

## 📞 Support & Kontakt

### Entwicklungsumgebung
- **Lokaler Server:** http://localhost:3002
- **Logs:** Console in Dev Tools
- **Fehlerbehandlung:** Hot Reload aktiv

### RAG-System Queries
```python
# Beispiel-Anfragen an RAG-System:
"Wo sind die Kundenanweisungen für Homepage-Struktur?"
"Welche Services sollen featured werden?"
"Zeige mir alle verfügbaren Logos und Bilder"
"Analysiere Kundenänderung: Screenshot XYZ"
```

### Claude CLI Commands
```bash
# Interaktiver Modus
claude

# Print Modus für Automation
claude -p "Analysiere Template für Reinigungsservice"

# Mit spezifischen Einstellungen
claude --model sonnet -p "Erstelle Service-Komponente"
```

---

**Status:** ✅ VOLLSTÄNDIG EINSATZBEREIT
**Letzte Aktualisierung:** 2025-08-05
**Version:** v3.1.0 - RAG-Integration Complete

---

*Dieses Dokument wird automatisch aktualisiert bei Projektänderungen.*
