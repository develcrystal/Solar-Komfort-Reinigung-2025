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