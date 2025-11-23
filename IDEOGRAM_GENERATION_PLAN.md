# Ideogram.ai Image Generation Plan - Fassadenreinigung Gallery

**Status:** Ready for Image Generation
**Target Location:** `/public/img/flux/` (AI-generated images folder)
**Service:** Fassadenreinigung (Facade Cleaning)

---

## Image 1: Process Shot (Pressure Washer in Action)

**File Name:** `fassadenreinigung-prozess.webp`

**Ideogram.ai Prompt:**
```
A man in blue work clothes standing ON a lift platform or scaffolding IN FRONT OF a light building facade. He holds a pressure washer with both hands spraying water HORIZONTALLY against the wall. Dark dirt stains being washed away. Professional, clean, modern style. --ar 16:9
```

**Dimensions:** 1920x1080 (16:9)

**Gallery Label:** "Professionelle Ausführung"

**Alt Text:** "Professionelle Fassadenreinigung in Aktion - Arbeiter mit Hochdruckreiniger auf Hebebühne reinigt Gebäudefassade"

---

## Image 2: Result Shot (Clean Facade)

**File Name:** `fassadenreinigung-ergebnis.webp`

**Ideogram.ai Prompt:**
```
Front view of a white or light building facade with large glass windows. The surface is perfectly clean and reflecting sunlight. No dirt stains or spots visible. Shot in bright daylight. Shiny, clean, architectural style. --ar 1:1
```

**Dimensions:** 1080x1080 (1:1)

**Gallery Label:** "Sauberes Ergebnis"

**Alt Text:** "Saubere und glänzende Gebäudefassade nach professioneller Reinigung mit großen Glasfenstern"

---

## Image 3: Before/After Comparison

**File Name:** `fassadenreinigung-vorher-nachher.webp`

**Ideogram.ai Prompt:**
```
Image split by vertical white line. LEFT half: white building wall with dark grey streaks, algae and dirt stains. RIGHT half: THE SAME WALL from SAME POSITION but brilliant white and clean. Identical windows and building details. Realistic, clean, transformation style. --ar 3:2
```

**Dimensions:** 1200x800 (3:2)

**Gallery Label:** "Transformation durch Reinigung"

**Alt Text:** "Fassadenreinigung Vorher/Nachher - Links verschmutzte Fassade mit dunklen Flecken und Algen, rechts strahlend weiße, saubere Fassade"

---

## Gallery Update Plan

**Current Code Location:** `src/app/gebaeudereinigung/fassadenreinigung/page.tsx:280-313`

**Changes to Make:**

Replace the current image array:
```typescript
{[
  {
    src: "/img/kundenbilder/Fassaden-Reinigung.webp",
    alt: "Fassadenreinigung Vorher/Nachher...",
    label: "Transformation durch Reinigung"
  },
  {
    src: "/img/kundenbilder/Fassaden-Reingung.webp",
    alt: "Professionelle Fassadenreinigung in Aktion...",
    label: "Professionelle Ausführung"
  },
  {
    src: "/img/kundenbilder/Reinigung (1).webp",
    alt: "Professionelle Fassadenreinigung Team...",
    label: "Professionelles Team"
  }
]}
```

With:
```typescript
{[
  {
    src: "/img/flux/fassadenreinigung-prozess.webp",
    alt: "Professionelle Fassadenreinigung in Aktion - Arbeiter mit Hochdruckreiniger auf Hebebühne reinigt Gebäudefassade",
    label: "Professionelle Ausführung"
  },
  {
    src: "/img/flux/fassadenreinigung-ergebnis.webp",
    alt: "Saubere und glänzende Gebäudefassade nach professioneller Reinigung mit großen Glasfenstern",
    label: "Sauberes Ergebnis"
  },
  {
    src: "/img/flux/fassadenreinigung-vorher-nachher.webp",
    alt: "Fassadenreinigung Vorher/Nachher - Links verschmutzte Fassade mit dunklen Flecken und Algen, rechts strahlend weiße, saubere Fassade",
    label: "Transformation durch Reinigung"
  }
]}
```

---

## Next Steps

1. ✓ Generate Image 1 via Ideogram.ai - Process shot (1920x1080)
2. ✓ Generate Image 2 via Ideogram.ai - Result shot (1080x1080)
3. ✓ Generate Image 3 via Ideogram.ai - Before/After (1200x800)
4. Convert generated images to WebP format if needed
5. Place images in `/public/img/flux/` folder
6. Update gallery code in fassadenreinigung/page.tsx
7. Build and test all 43 pages
8. Verify no broken image links

---

**Generated:** 2025-11-23
**Service:** Fassadenreinigung
**Quality Level:** Professional, service-specific imagery
