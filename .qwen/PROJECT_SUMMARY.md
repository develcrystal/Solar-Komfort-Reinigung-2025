# Komfort Gebäudeservice24 - Next.js Website Project

## Project Overview
Comprehensive Next.js 15 website for a German cleaning services company (Komfort Gebäudeservice24 GmbH). Features 41 static pages with mobile-first design, dark mode support, SEO optimization, and Progressive Web App (PWA) capabilities.

## Tech Stack
- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS + Framer Motion animations
- **UI Libraries**: Headless UI, Radix UI, Heroicons, Lucide React
- **Forms**: React Hook Form
- **Theme**: Next Themes (light/dark mode)
- **Deployment**: Vercel (auto-deploy from GitHub)

## Project Structure
```
/src/app          → 41 page routes
/src/components   → Reusable UI components (Navbar, Footer, MegaMenu, CtaSection, etc.)
/src/styles       → Global CSS
/src/data         → Static content & navigation
/public/img       → Optimized WebP images
```

## Current Status ✅

### Build & Deployment
- **Pages**: 41/41 static pre-rendered pages
- **Build Status**: Zero TypeScript errors
- **Latest Commits**:
  - `030cacb` - Update: QWEN.md with PWA Feature
  - `e92260e` - Memory Update: PWA Install Prompt
  - `963656c` - Feature: PWA Install Prompt in Footer
- **Deployment**: Live on Vercel
- **Production URL**: https://solar-komfort-reinigung-2025.vercel.app

### Services Implemented
- **Gebäudereinigung** (13 services): Dachreinigung, Fassadenreinigung, Büroreinigung, Industriereinigung, Krankenhausreinigung, etc.
- **Gebäudeservice** (5 services): Hausmeisterservice, Gartenpflege, Entrümpelung, Winterdienst, Außenpflege
- **Facility Management** (3 pages): Angebot, Unternehmen, Kontakt
- **Über uns** (3 pages): Über uns, Referenzen, Bildergalerie
- **Other Pages** (18): Homepage, Kontakt, Kostenrechner, Datenschutz, Impressum, etc.

### Recent Features (21.11.2025)
1. **PWA Install Prompt**: Native app install banner for mobile devices
   - Shows: "Hey! Wir haben auch eine echte App!"
   - Location: Footer (above copyright)
   - Auto-hides when installed or dismissed
   - Component: `src/components/PWAInstallPrompt.tsx`

2. **MegaMenu Optimization**: Equal-height grid with 3 icon-boxes (Gebäudereinigung, Gebäudeservice, Facility Management)

3. **CTA Enhancements**: Dark overlay (`bg-black/50` + gradient) for improved text readability

4. **Mobile Menu Fix**: Fixed positioning for all orientations (portrait/landscape)

5. **Image Consistency**: All service pages use thematically appropriate customer images

## Performance Metrics
- **Lighthouse**: 95+ (Desktop) / 90+ (Mobile)
- **Core Web Vitals**: All green
- **FCP**: < 1.2s
- **LCP**: < 2.5s
- **CLS**: < 0.1
- **Bundle Size**: < 250KB gzipped

## Build Commands
```bash
npm install        # Install dependencies
npm run dev        # Development server (port 3000)
npm run build      # Production build
npm run start      # Production server
npm run lint       # Code linting
```

## Key Components
- `MegaMenu` - 3-column navigation with touch-optimized mobile menu
- `CtaSection` - Full-width hero sections with image overlay
- `ExtendedProcessSteps` - 6-stage process cards
- `Gallery` - Filterable lightbox system
- `PWAInstallPrompt` - Progressive web app install banner

## SEO & Structured Data
- LocalBusiness schema (all pages)
- Service schema (service pages)
- FAQ schema (homepage)
- XML sitemap
- Comprehensive meta tags

## Branch Strategy
- **Feature Branch**: `fullwidth-hero-cta-final` (active development)
- **Production Branch**: `main` (synced with Vercel)
- Auto-deploy enabled from both branches

---
**Last Updated**: 2025-11-21T23:15:00.000Z
**Status**: ✅ PRODUCTION READY
**Session**: PWA Feature Implementation & Documentation Consolidation
