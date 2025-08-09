# Solar-Komfort Reinigung - Website Neugestaltung

## Übersicht
Neugestaltung der alten Vorlage zur modernen, responsiven Live-Website für **Komfort Gebäudeservice24 GmbH**. 
Das Projekt enthält auch ein RAG-System als Hilfstool für die Entwicklung.

## Projektstruktur

### Hauptprojekt
- **Arbeitsverzeichnis:** `F:\108Coding\solar-komfort-reinigung-rag\nextly-template`
- **Next.js 14** Website mit App Router und Tailwind CSS
- **Mobile First** Design mit responsiven Komponenten
- **Deutsche** Inhalte für Gebäudereinigungsdienstleistungen

### Marketing Material (Referenz)
- **Quelle:** `J:\.shortcut-targets-by-id\1nMrbtIquQDn76hkciXPOMk4lQ8oO6YTW\Marketing Romain\Reinigung`
- **Design Guidelines:** Firmengestaltung Reinigung.docx
- **Logos:** Mit/ohne Hintergrund für Komfort Gebäudeservice24 GmbH

### RAG-System (Hilfstool)
1. **project_scanner.py** - Scannt alle relevanten Projektordner
2. **rag_system.py** - RAG-Engine für intelligente Beratung
3. **project_manager.py** - Claude CLI Integration
4. **task_automation.py** - Task Automation

## Aktuelle Features
- [x] **22 Unterseiten** vollständig implementiert
- [x] **Mobile First Hero-Bereiche** für alle Gebäudereinigung-Seiten (13/13)
- [x] **Responsive Navigation** mit Dropdown-Menüs
- [x] **Thematische Hero-Bilder** (inkl. externe Pflaster-Bilder)
- [x] **Touch-optimierte Buttons** (min-h-[44px])
- [x] **SEO-Optimierung** mit Metadata für alle Seiten
- [ ] Hero-Bereiche für Gebäudeservice-Seiten (0/5)
- [ ] Hero-Bereiche für Facility Management-Seiten (0/3) 
- [ ] Hero-Bereich für Galerie-Seite (0/1)

## Sitemap Status
```
✅ Hauptnavigation (5/5)
├── / (Homepage)
├── /kontakt
├── /kostenrechner  
├── /ueber-uns
└── /referenzen (+galerie)

✅ Gebäudereinigung (13/13 mit Hero)
├── /dachreinigung ✅ /fassadenreinigung ✅ /pflasterreinigung
├── /bueroeinigung ✅ /baubeschlussreinigung ✅ /grundreinigung
├── /haushaltsreinigung ✅ /industriereinigung ✅ /treppenhausreinigung
├── /krankenausreinigung ✅ /hotellerie-gastronomie ✅ /fensterreinigung
└── /schulreinigung

🔄 Gebäudeservice (5/5 - Hero pending)
├── /hausmeisterservice /gartenpflege /entruempelung  
└── /winterdienst /aussenpflege

🔄 Facility Management (3/3 - Hero pending)
├── /angebot /unternehmen
└── /kontakt-facility

🔄 Zusätzlich (1/1 - Hero pending)
└── /galerie
```

## Technische Details

### Mobile First Design
- **Breakpoints:** sm: (640px+) → md: (768px+) → lg: (1024px+) → xl: (1280px+)
- **Hero-Höhen:** h-[50vh] sm:h-[55vh] md:h-[60vh] (kompakter als Startseite)
- **Touch-Targets:** Mindestens 44px für mobile Bedienbarkeit
- **Progressive Enhancement:** Basis mobile → schrittweise Desktop

### Entwicklungsserver
```bash
cd nextly-template
npm run dev  # Läuft auf http://localhost:3003
```

## Status
✅ **Gebäudereinigung:** 13/13 Seiten mit Mobile First Hero-Bereichen
🔄 **Gebäudeservice:** 5/5 Seiten erstellt, Hero-Bereiche folgen  
🔄 **Facility Management:** 3/3 Seiten erstellt, Hero-Bereiche folgen
🔄 **Galerie:** 1/1 Seite erstellt, Hero-Bereich folgt
