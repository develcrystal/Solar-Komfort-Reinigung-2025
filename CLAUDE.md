# Global Section Spacing Rules

## Standard Section Spacing
Verwende diese CSS-Klassen für alle Sections site-wide:

- `.section` - Standard-Abstand: `py-16 sm:py-20 md:py-24 lg:py-28`
- `.section-sm` - Kleinere Sections: `py-12 md:py-16 lg:py-20` 
- `.section-lg` - Größere Sections: `py-20 md:py-28 lg:py-32`
- `.section-xl` - Extra große Sections: `py-24 md:py-32 lg:py-40`

## Margin-Klassen
- `.section-mt` - Nur oberer Abstand: `mt-16 sm:mt-20 md:mt-24 lg:mt-28`
- `.section-mb` - Nur unterer Abstand: `mb-16 md:mb-24 lg:mb-28`

## Inline Tailwind Alternative
Falls CSS-Klassen nicht möglich: `py-16 sm:py-20 md:py-24 lg:py-28`

**WICHTIG:** Diese Abstände müssen auf ALLEN Unterseiten konsistent verwendet werden!

---

# Header-Hintergrund Fix - 13.09.2025

## Problem & Root Cause Analysis
- **Problem**: Header/Navbar hatte transparenten Hintergrund statt weißem Hintergrund
- **Root Cause**: Hydration Mismatch zwischen Server und Client
  - Server: `className="w-full"`
  - Client: `className="w-full bg-white dark:bg-trueGray-900"`
- **Zusätzliches Problem**: `.-mt-20 { margin-top: -5rem; }` CSS-Regel verursachte Layout-Konflikte

## Lösung implementiert ✅
1. **Statische CSS-Klasse**: `.navbar-container` in globals.css mit `!important`
2. **Hydration-Safe**: Beide Server/Client verwenden identische className
3. **CSS-Override**: `.-mt-20 { margin-top: 0 !important; }` hinzugefügt
4. **Hero-Dimensionierung**: `h-screen` beibehalten, `-mt-20` entfernt

## Technische Details
- **Navbar**: `<div className="navbar-container">` mit statischer CSS
- **Hero**: `h-screen min-h-[600px]` für volle Bildschirmhöhe
- **Dark Mode**: CSS media query für automatische Dark Mode Unterstützung

## Resultat ✅
- Weißer Header-Hintergrund funktioniert korrekt
- Keine Hydration-Mismatch Warnings mehr
- Hero-Section in korrekter Größe
- Layout identisch mit Referenz-Website

---

# Mega-Menu Wiederherstellung - 12.09.2025

## Problem & Lösung
- **Problem**: Ursprüngliches komplexes Mega-Menü wurde durch vereinfachte Version ersetzt
- **Lösung**: Selektive Git-Wiederherstellung nur der Navbar.tsx aus stabiler Version

## Wiederherstellungsschritte
1. `git restore --source=c4db4f8 src/components/Navbar.tsx` - Originale Navbar wiederhergestellt
2. Layout.tsx Import von `MegaNavbar` zurück auf `Navbar` geändert
3. Temporäre Dateien (`MegaNavbar.tsx`, `SimpleNavbar.tsx`) gelöscht

## Resultat ✅
- Komplettes Mega-Menü mit allen Dropdowns funktioniert wieder
- Alle neuen Service-Strukturen und Seiten blieben erhalten
- Keine useState-Rendering-Loops mehr
- Identisch mit Vercel-Produktionsversion

---

# TemplateDemo Page Updates

This file summarizes the changes made to the `TemplateDemo` page in `nextly-template/src/app/template-demo/page.tsx`.

- Integrated the content of `section_template_1_service_grid.md` as a new section.
- Converted the HTML from the markdown file to JSX.
- Used the Next.js `<Image>` component for image optimization.
- Adjusted image paths to point to the `/img/flux/` directory.

---

# Dark Mode Header Fix - 18.09.2025

## Problem & Root Cause Analysis
- **Problem**: Header/Navbar wechselt nicht farblich korrekt im Dark Mode; bleibt transparent oder falsche Farbe, Logo passt nicht.
- **Root Cause**: CSS-Regel in globals.css nutzte @media prefers-color-scheme: dark (systembasiert), nicht kompatibel mit next-themes' class-based 'dark'-Klasse. Logo war statisch, kein dynamisches src.

## Lösung implementiert ✅
1. **CSS-Update**: Ersetzt media query durch `@apply bg-white dark:bg-trueGray-900 w-full;` in .navbar-container für Tailwind class-based Dark Mode.
2. **Logo-Dynamik**: In Navbar.tsx useTheme importiert und src dynamisch: `theme === 'dark' ? '/img/inverted_komfort-logo-cropped.png' : '/img/komfort-logo-cropped.png'`.
3. **Syntax-Fix**: Entfernt extra schließende Klammer in globals.css nach apply_diff.

## Technische Details
- **Theme-Provider**: In layout.tsx mit suppressHydrationWarning für reibungslosen Client-Server-Übergang.
- **DarkSwitch**: Funktioniert client-seitig, toggelt Theme korrekt.
- **Kompatibilität**: Synchron mit systembasiertem prefers-color-scheme, aber manuelles Togglen priorisiert.

## Resultat ✅
- Header-Hintergrund wechselt zu trueGray-900 in Dark Mode.
- Logo wechselt zu invertiertem Version in Dark Mode.
- Keine Hydration-Mismatch oder Syntax-Fehler.
- Voll funktionaler Dark Mode für Header, konsistent mit Referenz.

---

# Content-Expansion & Bildoptimierung - 21.09.2025

## Thin Content Audit & Transformation

### Problem-Analyse
- **Content-Audit** aller 35 Seiten identifizierte 7 THIN CONTENT Seiten mit nur 87-100 Zeilen
- **Industriereinigung** als Gold Standard (267 Zeilen) mit technischer Tiefe und Compliance
- **SEO-Impact**: Thin Content Seiten schädigen Rankings und Conversion-Rates
- **Business-Impact**: Fehlende fachliche Tiefe schmälert Premium-Positionierung

## Implementierte Lösung ✅

### 1. TOP 3 Thin Content Transformationen
- **Krankenhausreinigung**: 88 → 329 Zeilen (+374%)
  - RKI-Richtlinien, VAH-Zertifizierung, KRINKO-Empfehlungen
  - 4-Stufen-Hygieneverfahren, 50 Mio. Euro Berufshaftpflicht
- **Büroreinigung**: 100 → 329 Zeilen (+329%)
  - Corporate Services, COVID-Hygienemaßnahmen, DSGVO-Compliance
  - IT-Equipment-Reinigung, SLA 99,5%, 24h-Störungs-Hotline
- **Hotellerie & Gastronomie**: 87 → 329 Zeilen (+378%)
  - HACCP-System, EU-Verordnung 852/2004, IFS/BRC Standards
  - Hospitality Excellence, Gäste-Zufriedenheits-Garantie

### 2. GarantieSection Komponente
- **Eigenständige Komponente** aus Industriereinigung extrahiert
- **Wiederverwendbar** für alle Service-Seiten
- **Trust-Building Elements**: 5000+ Kunden, 100% Termintreue, 24h Reaktionszeit
- **Dark Mode Support** und responsive Design

### 3. Bildoptimierungs-Revolution
- **75+ WebP-Bilder** optimiert mit Sharp (quality: 90, effort: 6)
- **Script-Fehler behoben**: Skip-Logik für bereits existierende WebP-Dateien
- **Lokalisierung komplett**: 12 externe URLs → lokale Pfade migriert
- **Next.js Config optimiert**: Externe Domains entfernt, WebP/AVIF Support hinzugefügt

## Content-Template Systematik
**Einheitliche Struktur** nach Industriereinigung-Standard:
1. **Hero-Section**: Vollbreites Bild mit technischen Details
2. **6+ Service-Cards**: Icons und fachspezifische Beschreibungen
3. **4-Stufen-Verfahren**: Compliance-Heavy mit Standards/Zertifizierungen
4. **Compliance-Section**: Branchenspezifische Vorschriften und Garantien
5. **GarantieSection**: Eigenständiger Trust-Building Bereich
6. **RelatedServices**: SEO-optimierte interne Verlinkung
7. **CTA-Section**: Conversion-optimierter Abschluss

## Performance-Impact ✅
- **SEO-Boost**: Von THIN CONTENT zu fachlicher Autorität
- **Technische Tiefe**: Compliance-Standards erhöhen Expertise-Wahrnehmung
- **Premium-Positionierung**: Detaillierte Verfahren rechtfertigen höhere Preise
- **Lokale Performance**: Keine externen Dependencies mehr

## Business-Value
- **Fachliche Autorität**: RKI, VAH, HACCP, DSGVO-Compliance demonstriert
- **Zielgruppenspezifisch**: Medizin, Corporate, Hospitality maßgeschneidert
- **Conversion-Optimierung**: Garantien und Versicherungsdetails als USPs
- **Skalierbare Template**: Weitere THIN CONTENT Seiten nach gleichem Muster erweiterbar

## Nächste Schritte (Prioritätsliste)
1. **Grundreinigung** (87 → 329 Zeilen): Bauschluss-Details, Umzug-Services
2. **Fensterreinigung** (87 → 329 Zeilen): Höhenarbeits-Zertifizierung, Glasarten-Expertise
3. **Haushaltsreinigung** (87 → 329 Zeilen): Private Services, Diskretion-Garantie
4. **Treppenhausreinigung** (88 → 329 Zeilen): Mehrfamilienhaus-Spezifikationen