
import { Container } from "@/components/Container";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Template Demo - Alle Section-Elemente",
  description: "Demo-Seite für alle verfügbaren Section-Elemente und Vorlagen",
};

export default function TemplateDemo() {
  return (
    <div className="template-demo">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-gray-900 text-white">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              🎨 Template Demo Seite
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Alle verfügbaren Section-Elemente und Vorlagen im Überblick
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              ← Zurück zur Hauptseite
            </Link>
          </div>
        </Container>
      </section>

      <Container className="py-12">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            📋 Alle verfügbaren Section-Elemente
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Diese Demo-Seite zeigt alle verfügbaren Template-Elemente und Section-Komponenten, 
            die für die Erstellung von Unterseiten verwendet werden können.
          </p>
        </div>

        {/* Section 1: Hero Section */}
        <section className="py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. Hero Section</h3>
          <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden">
            <Image 
              src="/img/flux/hero-kontakt1.webp" 
              alt="Hero Section Beispiel" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/50 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h4 className="text-2xl sm:text-3xl font-bold mb-2">Hero Section</h4>
                <p className="text-lg">Mobile-First Design mit Overlay-Text</p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Verwendung:</strong> Für alle Dienstleistungsseiten als Haupt-Bereich mit großem Bild und Overlay-Text.
            </p>
          </div>
        </section>

        {/* Section 2: Service Grid */}
        <section className="py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. Service Grid (3x2 Layout)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/img/flux/fassadenreinigung-prozess.webp"
                  alt="Fassadenreinigung"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Fassadenreinigung
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Professionelle Reinigung aller Fassadenarten mit modernster Technik.
                </p>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/img/flux/dachreinigung-prozess1.webp"
                  alt="Dachreinigung"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Dachreinigung
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Gründliche Reinigung für langfristigen Schutz Ihres Daches.
                </p>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/img/flux/industriereinigung.png"
                  alt="Industriereinigung"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Industriereinigung
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Spezialisierte Reinigung für Industrieanlagen und Großräume.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Verwendung:</strong> Für Dienstleistungsübersichten mit 3-6 Services in Grid-Layout.
            </p>
          </div>
        </section>

        {/* Section 2b: Service Grid Template 1 */}
        <section className="py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2b. Service Grid Template 1 (3x2 Layout)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src="/Komfort Gebäudeservice24 GmbH/Bilder/Fassaden-Reingung.png" alt="Professionelle Fassadenreinigung" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Fassadenreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Wir sorgen dafür, dass Ihre Fassade richtig wieder strahlt.
                  Entfernung von Algen und Schmutz ebenso effektiv wie professionell.
                </p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src="/Komfort Gebäudeservice24 GmbH/Bilder/Büro-Reinigung.png" alt="Professionelle Fensterreinigung" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Fensterreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Sie brauchen einen klaren Durchblick? Unsere Experten übernehmen gern
                  die professionelle Reinigung von Fenstern und Glasflächen in bester Qualität.
                </p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src="/Komfort Gebäudeservice24 GmbH/Bilder/Reinigung.png" alt="Hygienische Sanitärreinigung" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Sanitärreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Durch die hygienische Reinigung der sanitären Anlagen erreichen diese
                  immer einen optimalen und sauberen Zustand für alle.
                </p>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src="/Komfort Gebäudeservice24 GmbH/Bilder/Treppenhausreinigung.png" alt="Professionelle Bodenreinigung" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Bodenreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Egal welcher Bodenbelag, wir haben stets passende Reinigungsmittel
                  und kennen die richtige Reinigungstechnik für gepflegten Boden.
                </p>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src="/Komfort Gebäudeservice24 GmbH/Bilder/Haus.png" alt="Zuverlässiger Hausmeisterservice" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Hausmeisterservice
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Mit dem Hausmeisterservice ist alles geregelt. Kleine Reparaturen,
                  Energieabrechnung und gepflegte Instandhaltung.
                </p>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src="/Komfort Gebäudeservice24 GmbH/Bilder/Reinigung (1).png" alt="Professionelle Teppichreinigung" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Teppichreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Wir übernehmen die Tiefenreinigung sämtlicher Bodenbeläge -
                  materialschonend und hygienisch. Teppiche wie neu.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Verwendung:</strong> Für Dienstleistungsübersichten mit 3-6 Services in Grid-Layout.
            </p>
          </div>
        </section>
{/* Section 2c: Service Grid Template from Markdown */}
        <section className="py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2c. Service Grid Template from Markdown (3x2 Layout)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1: Fassadenreinigung */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/img/flux/fassadenreinigung.png"
                  alt="Professionelle Fassadenreinigung"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Fassadenreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Wir sorgen dafür, dass Ihre Fassade richtig wieder strahlt.
                  Entfernung von Algen und Schmutz ebenso effektiv wie professionell.
                </p>
              </div>
            </div>

            {/* Service Card 2: Fensterreinigung */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/img/flux/fensterreinigung.png"
                  alt="Professionelle Fensterreinigung"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Fensterreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Sie brauchen einen klaren Durchblick? Unsere Experten übernehmen gern
                  die professionelle Reinigung von Fenstern und Glasflächen in bester Qualität.
                </p>
              </div>
            </div>

            {/* Service Card 3: Sanitärreinigung */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/img/flux/sanitaerreinigung.png"
                  alt="Hygienische Sanitärreinigung"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Sanitärreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Durch die hygienische Reinigung der sanitären Anlagen erreichen diese
                  immer einen optimalen und sauberen Zustand für alle.
                </p>
              </div>
            </div>

            {/* Service Card 4: Bodenreinigung */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/img/flux/bodenreinigung.png"
                  alt="Professionelle Bodenreinigung"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Bodenreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Egal welcher Bodenbelag, wir haben stets passende Reinigungsmittel
                  und kennen die richtige Reinigungstechnik für gepflegten Boden.
                </p>
              </div>
            </div>

            {/* Service Card 5: Hausmeisterservice */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/img/flux/hausmeisterservice.png"
                  alt="Zuverlässiger Hausmeisterservice"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Hausmeisterservice
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Mit dem Hausmeisterservice ist alles geregelt. Kleine Reparaturen,
                  Energieabrechnung und gepflegte Instandhaltung.
                </p>
              </div>
            </div>

            {/* Service Card 6: Teppichreinigung */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/img/flux/teppichreinigung.png"
                  alt="Professionelle Teppichreinigung"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Teppichreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Wir übernehmen die Tiefenreinigung sämtlicher Bodenbeläge -
                  materialschonend und hygienisch. Teppiche wie neu.
                </p>
              </div>
            </div>
          </div>
        </section>
{/* Section 2c: Service Grid Template 3 */}
        <section className="py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2c. Service Grid Template 3 (3x2 Layout)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src="/Komfort Gebäudeservice24 GmbH/Bilder/Fassaden-Reingung.png" alt="Professionelle Fassadenreinigung" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Fassadenreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Wir sorgen dafür, dass Ihre Fassade richtig wieder strahlt.
                  Entfernung von Algen und Schmutz ebenso effektiv wie professionell.
                </p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src="/Komfort Gebäudeservice24 GmbH/Bilder/Büro-Reinigung.png" alt="Professionelle Fensterreinigung" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Fensterreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Sie brauchen einen klaren Durchblick? Unsere Experten übernehmen gern
                  die professionelle Reinigung von Fenstern und Glasflächen in bester Qualität.
                </p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src="/Komfort Gebäudeservice24 GmbH/Bilder/Reinigung.png" alt="Hygienische Sanitärreinigung" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Sanitärreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Durch die hygienische Reinigung der sanitären Anlagen erreichen diese
                  immer einen optimalen und sauberen Zustand für alle.
                </p>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src="/Komfort Gebäudeservice24 GmbH/Bilder/Treppenhausreinigung.png" alt="Professionelle Bodenreinigung" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Bodenreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Egal welcher Bodenbelag, wir haben stets passende Reinigungsmittel
                  und kennen die richtige Reinigungstechnik für gepflegten Boden.
                </p>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src="/Komfort Gebäudeservice24 GmbH/Bilder/Haus.png" alt="Zuverlässiger Hausmeisterservice" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Hausmeisterservice
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Mit dem Hausmeisterservice ist alles geregelt. Kleine Reparaturen,
                  Energieabrechnung und gepflegte Instandhaltung.
                </p>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src="/Komfort Gebäudeservice24 GmbH/Bilder/Reinigung (1).png" alt="Professionelle Teppichreinigung" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Teppichreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Wir übernehmen die Tiefenreinigung sämtlicher Bodenbeläge -
                  materialschonend und hygienisch. Teppiche wie neu.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Verwendung:</strong> Für Dienstleistungsübersichten mit 3-6 Services in Grid-Layout.
            </p>
          </div>
        </section>
        {/* Section 2c: Service Grid Template 2 */}
        <section className="py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2c. Service Grid Template 2 (3x2 Layout)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src="/Komfort Gebäudeservice24 GmbH/Bilder/Fassaden-Reingung.png" alt="Professionelle Fassadenreinigung" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Fassadenreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Wir sorgen dafür, dass Ihre Fassade richtig wieder strahlt.
                  Entfernung von Algen und Schmutz ebenso effektiv wie professionell.
                </p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src="/Komfort Gebäudeservice24 GmbH/Bilder/Büro-Reinigung.png" alt="Professionelle Fensterreinigung" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Fensterreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Sie brauchen einen klaren Durchblick? Unsere Experten übernehmen gern
                  die professionelle Reinigung von Fenstern und Glasflächen in bester Qualität.
                </p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src="/Komfort Gebäudeservice24 GmbH/Bilder/Reinigung.png" alt="Hygienische Sanitärreinigung" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Sanitärreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Durch die hygienische Reinigung der sanitären Anlagen erreichen diese
                  immer einen optimalen und sauberen Zustand für alle.
                </p>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src="/Komfort Gebäudeservice24 GmbH/Bilder/Treppenhausreinigung.png" alt="Professionelle Bodenreinigung" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Bodenreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Egal welcher Bodenbelag, wir haben stets passende Reinigungsmittel
                  und kennen die richtige Reinigungstechnik für gepflegten Boden.
                </p>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src="/Komfort Gebäudeservice24 GmbH/Bilder/Haus.png" alt="Zuverlässiger Hausmeisterservice" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Hausmeisterservice
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Mit dem Hausmeisterservice ist alles geregelt. Kleine Reparaturen,
                  Energieabrechnung und gepflegte Instandhaltung.
                </p>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src="/Komfort Gebäudeservice24 GmbH/Bilder/Reinigung (1).png" alt="Professionelle Teppichreinigung" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  Teppichreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Wir übernehmen die Tiefenreinigung sämtlicher Bodenbeläge -
                  materialschonend und hygienisch. Teppiche wie neu.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Verwendung:</strong> Für Dienstleistungsübersichten mit 3-6 Services in Grid-Layout.
            </p>
          </div>
        </section>

        {/* Section 3: Problem vs Solution */}
        <section className="py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. Problem vs Lösung</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
              <h4 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                Typische Probleme
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Unzuverlässige Termine</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Versteckte Kosten</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Schlechte Erreichbarkeit</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
              <h4 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Unsere Lösungen
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Pünktlichkeit & Zuverlässigkeit</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Transparente Kostenstruktur</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Persönliche Erreichbarkeit</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Verwendung:</strong> Für Probleme und Lösungen mit dramatischer Gegenüberstellung.
            </p>
          </div>
        </section>

        {/* Section 4: Benefits */}
        <section className="py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. Benefits Section</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-600">
              <div className="text-4xl mb-4">👥</div>
              <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Festangestellte Mitarbeiter</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Ausschließlich festangestellte und sozialversicherte Reinigungskräfte mit tariflichem Lohn.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-600">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Vollversichert</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Versicherungsschutz in Höhe von bis zu 3.000.000 € je Schadensfall.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-600">
              <div className="text-4xl mb-4">🏅</div>
              <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">ISO-zertifizierte Partner</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Unser Partner für Reinigungsmittel ist ISO zertifiziert.
              </p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Verwendung:</strong> Für Vorteile und Unterschiede mit visuellen Icons.
            </p>
          </div>
        </section>

        {/* Section 5: Testimonials */}
        <section className="py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl mr-2">★★★★★</div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "Solar Komfort reinigt seit 3 Jahren unsere Büroräume in Darmstadt. Immer pünktlich, gründlich und freundlich."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">A</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Andreas Müller</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Geschäftsführer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl mr-2">★★★★★</div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "Hervorragende Fassadenreinigung in Darmstadt! Das Ergebnis war beeindruckend."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">B</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Bettina Klein</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Facility Managerin</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl mr-2">★★★★★</div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "Zuverlässige Objektbetreuung in Darmstadt seit Jahren. Probleme werden schnell gelöst."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3"></div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
