# CSS-Optimierungsplan

## Analyse-Ergebnisse

### Identifizierte CSS-Dateien
1. `src/app/globals.css` (482 Zeilen)
2. `src/styles/sectionSpacing.module.css` (58 Zeilen)

### Gefundene Probleme

#### 1. **Übermäßige Verwendung von `!important`**
- 20+ Vorkommen in `globals.css`
- Verletzt Best Practices für CSS-Spezifität
- Erschwert Wartbarkeit und Overrides

#### 2. **Keine CSS Custom Properties (Design Tokens)**
- Hardcodierte Werte für Farben, Spacing, Typografie
- Keine zentrale Theming-Möglichkeit
- Schwierig, konsistente Änderungen vorzunehmen

#### 3. **Keine BEM-Namenskonvention**
- Klassennamen wie `.hover-tile`, `.main-content` sind nicht BEM-konform
- Keine klare Strukturierung von Komponenten

#### 4. **Inkonsistente Media Queries**
- Mix aus `min-width` und `max-width`
- Nicht strikt mobile-first
- Keine konsistenten Breakpoints

#### 5. **Fehlende moderne CSS-Features**
- Keine Verwendung von `clamp()` für fluid typography
- Keine `min()`, `max()` für responsive Werte
- Keine logischen Eigenschaften (`inline`, `block`)
- Keine Container Queries
- Keine CSS Containment für Performance

#### 6. **Performance-Probleme**
- Teure Selektoren wie `[class*="grid-cols-2"]:not(.navbar-container *)>div`
- Keine CSS Containment
- Redundante Regeln

#### 7. **Accessibility-Probleme**
- Keine Berücksichtigung von `prefers-reduced-motion`
- Keine `focus-visible` Styles
- Keine High-Contrast-Mode Unterstützung

#### 8. **Redundante Regeln**
- Wiederholte `word-wrap`, `overflow-wrap` Deklarationen
- Duplizierte Media Query Blöcke

## Optimierungsstrategie

### Phase 1: Design Tokens & Custom Properties
- CSS Custom Properties für Farben, Spacing, Typografie
- Zentrale Design-System-Definition
- Dark Mode Support durch Custom Properties

### Phase 2: BEM-Namenskonvention
- Umbenennung bestehender Klassen zu BEM
- Strukturierung: `.block__element--modifier`

### Phase 3: Mobile-First Responsive Design
- Konsistente Breakpoints
- Fluid typography mit `clamp()`
- Logische Eigenschaften statt physischer

### Phase 4: Performance-Optimierung
- Entfernung von `!important`
- CSS Containment
- Optimierung von Selektoren
- Reduzierung redundanter Regeln

### Phase 5: Accessibility
- `prefers-reduced-motion` für Animationen
- `focus-visible` für Fokus-Styles
- High-Contrast-Mode Unterstützung

### Phase 6: Moderne CSS-Features
- Container Queries wo sinnvoll
- `:is()`, `:where()` für sauberere Selektoren
- `aspect-ratio` für Bilder

## Erwartete Verbesserungen

- **Dateigröße**: Reduktion um ~30-40%
- **Performance**: Schnellere Rendering-Zeiten durch CSS Containment
- **Wartbarkeit**: Bessere Struktur durch BEM und Design Tokens
- **Accessibility**: Verbesserte Unterstützung für alle Nutzer
- **Responsive Design**: Konsistentes Verhalten über alle Breakpoints
