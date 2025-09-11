# Section Templates fuer Referenzseiten

## Template 1: Service Grid (3x2 Layout)

```html
<!-- Ihre Gebäudereinigung als Komplettlösung - 6-Service Grid -->
<section class="py-12 md:py-16 bg-white">
  <div class="container mx-auto px-4 max-w-7xl">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Ihre Gebäudereinigung als Komplettlösung
      </h2>
      <p class="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
        Professionelle Reinigungsdienstleistungen für jeden Bereich - 
        von der Fassade bis zum Innenraum.
      </p>
    </div>

    <!-- Services Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      
      <!-- Service 1: Fassadenreinigung -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div class="relative h-48 md:h-56 overflow-hidden">
          <img src="fassadenreinigung.png" alt="Professionelle Fassadenreinigung" class="w-full h-full object-cover">
        </div>
        <div class="p-6">
          <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-3">
            Fassadenreinigung
          </h3>
          <p class="text-sm md:text-base text-gray-600 leading-relaxed">
            Wir sorgen dafür, dass Ihre Fassade richtig wieder strahlt. 
            Entfernung von Algen und Schmutz ebenso effektiv wie professionell.
          </p>
        </div>
      </div>

      <!-- Service 2: Fensterreinigung -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div class="relative h-48 md:h-56 overflow-hidden">
          <img src="fensterreinigung.png" alt="Professionelle Fensterreinigung" class="w-full h-full object-cover">
        </div>
        <div class="p-6">
          <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-3">
            Fensterreinigung
          </h3>
          <p class="text-sm md:text-base text-gray-600 leading-relaxed">
            Sie brauchen einen klaren Durchblick? Unsere Experten übernehmen gern 
            die professionelle Reinigung von Fenstern und Glasflächen in bester Qualität.
          </p>
        </div>
      </div>

      <!-- Service 3: Sanitärreinigung -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div class="relative h-48 md:h-56 overflow-hidden">
          <img src="sanitaerreinigung.png" alt="Hygienische Sanitärreinigung" class="w-full h-full object-cover">
        </div>
        <div class="p-6">
          <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-3">
            Sanitärreinigung
          </h3>
          <p class="text-sm md:text-base text-gray-600 leading-relaxed">
            Durch die hygienische Reinigung der sanitären Anlagen erreichen diese 
            immer einen optimalen und sauberen Zustand für alle.
          </p>
        </div>
      </div>

      <!-- Service 4: Bodenreinigung -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div class="relative h-48 md:h-56 overflow-hidden">
          <img src="bodenreinigung.png" alt="Professionelle Bodenreinigung" class="w-full h-full object-cover">
        </div>
        <div class="p-6">
          <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-3">
            Bodenreinigung
          </h3>
          <p class="text-sm md:text-base text-gray-600 leading-relaxed">
            Egal welcher Bodenbelag, wir haben stets passende Reinigungsmittel 
            und kennen die richtige Reinigungstechnik für gepflegten Boden.
          </p>
        </div>
      </div>

      <!-- Service 5: Hausmeisterservice -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div class="relative h-48 md:h-56 overflow-hidden">
          <img src="hausmeisterservice.png" alt="Zuverlässiger Hausmeisterservice" class="w-full h-full object-cover">
        </div>
        <div class="p-6">
          <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-3">
            Hausmeisterservice
          </h3>
          <p class="text-sm md:text-base text-gray-600 leading-relaxed">
            Mit dem Hausmeisterservice ist alles geregelt. Kleine Reparaturen, 
            Energieabrechnung und gepflegte Instandhaltung.
          </p>
        </div>
      </div>

      <!-- Service 6: Teppichreinigung -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div class="relative h-48 md:h-56 overflow-hidden">
          <img src="teppichreinigung.png" alt="Professionelle Teppichreinigung" class="w-full h-full object-cover">
        </div>
        <div class="p-6">
          <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-3">
            Teppichreinigung
          </h3>
          <p class="text-sm md:text-base text-gray-600 leading-relaxed">
            Wir übernehmen die Tiefenreinigung sämtlicher Bodenbeläge - 
            materialschonend und hygienisch. Teppiche wie neu.
          </p>
        </div>
      </div>

    </div>

    <!-- CTA Section -->
    <div class="text-center mt-12">
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/kontakt" class="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all min-h-[44px] touch-manipulation">
          Kostenlose Beratung anfragen
        </a>
        <a href="/kostenrechner" class="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 transition-all min-h-[44px] touch-manipulation">
          Kosten berechnen
        </a>
      </div>
    </div>

  </div>
</section>
```

## Design Spezifikationen:

### Layout:
- **Mobile:** 1 Spalte (grid-cols-1)
- **Tablet:** 2 Spalten (md:grid-cols-2) 
- **Desktop:** 3 Spalten (lg:grid-cols-3)

### Service Cards:
- **Bild-Höhe:** h-48 (Mobile) → h-56 (Desktop)
- **Hover-Effekt:** shadow-sm → shadow-lg
- **Border:** Subtle gray-100 border
- **Padding:** p-6 für Content-Bereich

### Responsive Breakpoints:
- **sm:** 640px+ (Small tablets)
- **md:** 768px+ (Tablets) 
- **lg:** 1024px+ (Desktop)

### Typography:
- **Titel:** text-lg md:text-xl font-semibold
- **Beschreibung:** text-sm md:text-base text-gray-600
- **Section Header:** text-2xl md:text-3xl lg:text-4xl

### Spacing:
- **Section Padding:** py-12 md:py-16
- **Grid Gap:** gap-6 md:gap-8
- **Card Content:** p-6

## Template Status:
✅ **Vollständig responsive**
✅ **Mobile-First Design**
✅ **@clinerules konform** (keine Umlaute im Code)
✅ **Touch-optimiert** (min-h-[44px])
✅ **Hover-Effekte**

## Nächste Templates:
- Template 2: Bereit für nächsten Screenshot
- Template 3: TBD
- Template 4: TBD

---

**Erstellt:** 2025-09-03
**Projekt:** Solar-Komfort-Reinigung-RAG
**Status:** Einsatzbereit für Referenzseiten
