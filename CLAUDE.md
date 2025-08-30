# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a German building cleaning services website for "Komfort Gebäudeservice24 GmbH" built with Next.js 14. The project consists of a RAG (Retrieval-Augmented Generation) system and a modern, responsive website template for building cleaning services.

## Development Commands

### Essential Commands
```bash
# Navigate to the main website directory
cd nextly-template

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Update browser compatibility data (recommended when starting work)
npx update-browserslist-db@latest
```

## Architecture Overview

### Project Structure
- **Root**: Contains RAG system components and project management files
- **nextly-template/**: Main Next.js application for the cleaning services website

### Key Components Architecture

#### Layout System
- **App Router**: Uses Next.js 14 App Router with layout.tsx as root layout
- **Global Layout**: Includes Navbar, Footer, PopupWidget, BackToTop, and structured data schemas
- **Theme Support**: Dark/light mode with next-themes provider
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

#### Page Structure
- **Home (/)**: Customer-focused hero with happy family image, services overview, testimonials, and CTAs
  - **Hero Image**: `familie-vor-haus-mit-solaranlagen.webp` (horizontally flipped for optimal text placement)
  - **Customer Statistics**: 5,000+ customers, 10+ years experience, 99% satisfaction
- **Contact (/kontakt)**: Contact form with location information and team presentation  
- **Cost Calculator (/kostenrechner)**: Interactive pricing calculator
- **About Us (/ueber-uns)**: Company information and team details
- **References (/referenzen)**: Customer testimonials and project gallery

#### Complete Sitemap (22+ Unterseiten)
**✅ VOLLSTÄNDIG IMPLEMENTIERT - Alle 22/22 Kundenwünsche + zusätzliche Seiten:**

**Gebäudereinigung (13 Seiten) - ✅ Alle implementiert:**
- `/dachreinigung` - Dachreinigung & Beschichtung ✅ Mit SharedDienstleistungenHeader & 6-Stufen-Prozess
- `/fassadenreinigung` - Fassadenreinigung & Imprägnierung ✅
- `/pflasterreinigung` - Pflaster- & Steinreinigung ✅  
- `/bueroeinigung` - Büroreinigung ✅
- `/baubeschlussreinigung` - Bauabschlussreinigung ✅
- `/grundreinigung` - Grundreinigung ✅
- `/haushaltsreinigung` - Haushaltsreinigung ✅
- `/industriereinigung` - Industriereinigung ✅
- `/treppenhausreinigung` - Treppenhausreinigung ✅
- `/krankenausreinigung` - Krankenhausreinigung ✅
- `/hotellerie-gastronomie` - Hotellerie & Gastronomie ✅
- `/fensterreinigung` - Fenster- & Glasreinigung ✅
- `/schulreinigung` - Schul- & Kindergartenreinigung ✅

**Facility Management (5 Seiten) - ✅ Alle implementiert:**
- `/hausmeisterservice` - Hausmeisterservice ✅
- `/gartenpflege` - Gartenpflege & Außenanlagen ✅
- `/entruempelung` - Entrümpelung & Haushaltsauflösungen ✅
- `/winterdienst` - Winterdienst ✅
- `/aussenpflege` - Außenpflege & saisonale Dienste ✅

**Facility Management Info-Seiten (3 Seiten) - ✅ Implementiert:**
- `/angebot` - Facility Management Angebot ✅
- `/unternehmen` - Unternehmen (Facility Management) ✅  
- `/kontakt-facility` - Kontakt für Facility Management ✅

**Zusätzliche Seiten (1+ Seiten) - ✅ Implementiert:**
- `/galerie` - Bildergalerie ✅
- `/dienstleistungen` - **Zentrale Service-Übersicht** ✅ Exzellent gestaltet mit alternierenden Layouts
- `/dienstleistungen/*` - **Sub-Routing** auch implementiert

**Aktuelle Homepage**: Bereits gut strukturiert mit Familie-vor-Haus Hero, Services-Übersicht, Testimonials, FAQ

#### Component Architecture
- **Container**: Responsive wrapper component for consistent page width
- **SectionTitle**: Standardized section headers with pre-title and description
- **Hero**: Dynamic hero sections with background images and CTAs
- **LeistungenImUberblick**: Service overview cards with alternating layouts
- **Benefits**: Feature highlights with icons and descriptions
- **Testimonials**: Customer review cards in responsive grid
- **ExtendedProcessSteps**: 6-step process visualization with images and colored badges
  - **Process Cards**: Interactive cards with step numbers, images, titles and descriptions
  - **Responsive Grid**: Adaptive layout from 1 column (mobile) to 6 columns (desktop)
  - **Color-Coded Steps**: Each step has customizable background colors for visual distinction
  - **Usage**: Used on `/dienstleistungen` for complete service overview and `/dachreinigung` for roof cleaning process
- **Navbar**: Multi-level navigation with mobile hamburger menu and desktop mega menu
  - **Desktop Mega Menu**: Modern 3-column grid layout for large navigation sections
  - **Minimalist Design**: Clean, left-aligned text with hover effects
  - **Touch-Optimized**: Mobile-first responsive design with proper touch targets
  - **Icon System**: Colorful SVG icons with Two-Tone design (Orange base #F59E0B with white/colored accents)
- **Footer**: Site-wide footer with links and company information

#### Styling Approach
- **Tailwind CSS**: Utility-first CSS framework with mobile-first responsive design
- **Custom Components**: Reusable component library with consistent styling patterns
- **Dark Mode**: Full dark mode support across all components
- **German Content**: All content and UI text in German language

## Content Management

### Image Assets
Images are stored in `public/img/flux/` directory and include:
- **Hero Images**: Customer-focused family and team photos
  - `familie-vor-haus-mit-solaranlagen.webp` - Homepage hero (horizontally flipped)
  - `bueroeinigung-sauber.webp` - Clean modern office space
  - `dachreinigung-vorher-nachher.webp` - Dramatic roof cleaning before/after
  - `fassadenreinigung-prozess.webp` - Professional facade cleaning process
- **Team photos and company branding**
- **Service-related imagery (before/after cleaning photos)**
- **Background images for hero sections**
- **Icons and illustrations**
- **Ideogram-generated high-quality images**: Located in `ideogram-images/` directory

### Structured Data
The website includes comprehensive SEO optimization with:
- LocalBusiness schema for Google Business listings
- Service schema for cleaning service offerings  
- FAQ schema for frequently asked questions
- OpenGraph and Twitter metadata for social sharing

### Contact Integration
- Contact form with email confirmation system
- Nodemailer integration for form submissions
- Location information and business hours display
- Team member profiles with contact details

## Development Guidelines

### Responsive Design - Mobile First
**WICHTIG: Mobile First Prinzip wird strikt befolgt!**

- **Mobile First**: Alles wird zuerst für kleine Bildschirme entwickelt, dann erweitert
- **Progressive Enhancement**: Base mobile → sm: → md: → lg: → xl:
- **Breakpoints**: sm: (640px+) → md: (768px+) → lg: (1024px+) → xl: (1280px+)
- **Touch-Targets**: Mindestens 44px Höhe für mobile Bedienbarkeit
- **Hero-Bereiche**: Kompakte Höhen für Unterseiten (h-[50vh] sm:h-[55vh] md:h-[60vh])

#### Hero-Bereich Design Pattern
```jsx
{/* Mobile First Hero-Bereich */}
<div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] min-h-[350px] sm:min-h-[400px] w-full">
  <div className="absolute inset-0 z-0">
    <Image src="thematisches-bild.webp" fill className="object-cover brightness-[0.8]" />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/50"></div>
  </div>
  <Container className="relative z-10 h-full flex items-center">
    <div className="max-w-2xl sm:max-w-3xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white uppercase mb-3 sm:mb-4 md:mb-6 drop-shadow-lg">
        SERVICE TITEL
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-4 sm:mb-6 md:mb-8 drop-shadow-md">
        Service Beschreibung
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <a href="/kontakt" className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all min-h-[44px] touch-manipulation">
          Kostenlos beraten lassen
        </a>
        <a href="/kostenrechner" className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 transition-all min-h-[44px] touch-manipulation">
          Kosten berechnen
        </a>
      </div>
    </div>
  </Container>
</div>
```

#### Thematische Hero-Bilder
- **Pflasterreinigung**: Externes Solar-Komfort Bild (https://solar-komfort.de/wp-content/...)  
- **Büroreinigung**: buero-reinigung.png
- **Industriereinigung**: industriereinigung.png
- **Fassadenreinigung**: fassadenreinigung-vorher-nachher.webp
- **Dachreinigung**: quer_Vorher-Nachher Dachreinigung.webp
- **Weitere**: Team-, Referenz- und Ausrüstungsbilder je nach Service

### Content Updates
- Service information is centralized in component data arrays
- Testimonials and team information in structured data objects
- Metadata and SEO content defined per-page in metadata.ts files
- German language content throughout - maintain linguistic consistency

### Performance Considerations
- Images optimized with Next.js Image component and Sharp
- Font optimization with Google Fonts integration (Inter)
- Component lazy loading with React intersection observer
- Production builds include automatic code splitting

## Known Issues

### Browser Compatibility Warning
The development server shows a browserslist data warning - run `npx update-browserslist-db@latest` to resolve.

### Metadata Configuration
Next.js warnings about viewport metadata - these are existing deprecation notices that don't affect functionality.

## Business Context

This website serves a German building cleaning company offering:
- Office and commercial cleaning (Unterhaltsreinigung)
- Glass and facade cleaning (Glas & Fassadenreinigung)  
- Industrial cleaning (Industriereinigung)
- Deep cleaning services (Grundreinigung)
- Facility management (Objektbetreuung)

The company is positioned as a subsidiary of "Solar Komfort GmbH" with over 5,000 satisfied customers, emphasizing quality, reliability, and comprehensive service offerings.

## Recent Updates
- **Hero-Text Formatierung**: Korrektur des Zeilenumbruchs in der H1-Überschrift auf der Startseite ("IHRE GEBÄUDEREINIGUNG ALS KOMPLETTLÖSUNG")
- **Layout-Optimierung**: Verbesserung der Spaltensymmetrie auf der Dachreinigungs-Seite durch Hinzufügen von `flex flex-col` und `flex-grow` Klassen
- **Content-Audit**: Durchführung eines Thin-Content-Audits und Erstellung eines strukturierten Content-Plans für alle 22+ Seiten
- **Git-Sicherung**: Vor jeder größeren Änderung wurde ein Git-Commit durchgeführt, um den aktuellen Stand zu sichern