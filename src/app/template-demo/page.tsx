import { Container } from "@/components/Container";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ServiceLeistungenGrid from "@/components/ServiceLeistungenGrid";
import { ProblemLoesungSection } from "@/components/ProblemLoesungSection";
import { Faq } from "@/components/Faq";
import { GarantieSection } from "@/components/GarantieSection";
import { RelatedServices } from "@/components/RelatedServices";
import { IndividuelleLoesungSection } from "@/components/IndividuelleLoesungSection";

export const metadata: Metadata = {
  title: "Template Demo - Alle Section-Elemente",
  description: "Demo-Seite für alle verfügbaren Section-Elemente und Vorlagen",
};

export default function TemplateDemo() {
  return (
    <div className="template-demo">
      {/* Header */}
      <section className="section section-xl bg-gray-900 text-white">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Template Demo Seite
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
            Alle verfügbaren Section-Elemente
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
              src="/img/kundenbilder/Büro-Reinigung.webp"
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
                  src="/img/kundenbilder/Fassaden-Reingung.webp"
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
                  src="/img/kundenbilder/Dachreinigung.webp"
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
                  src="/img/kundenbilder/Industriereinigung.webp"
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

        {/* 6-Schritte-Prozess */}
        <section className="py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            6-Schritte-Prozess zur Dachbeschichtung
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                title: 'Kontakt & Beratung',
                description: 'Unverbindliche Erstberatung und Terminvereinbarung für eine Vor-Ort-Besichtigung.',
                image: '/img/kundenbilder/Büro-Reinigung (1).webp'
              },
              {
                id: 2,
                title: 'Dachanalyse & Angebot',
                description: 'Detaillierte Analyse des Dachs und Erstellung eines unverbindlichen Angebots.',
                image: '/img/kundenbilder/Grundreinigung.webp'
              },
              {
                id: 3,
                title: 'Vorbereitung & Reinigung',
                description: 'Gründliche Reinigung und Vorbereitung der Dachfläche für die Beschichtung.',
                image: '/img/kundenbilder/Reinigung.webp'
              },
              {
                id: 4,
                title: 'Ausbesserung & Reparatur',
                description: 'Fachgerechte Ausbesserung von Schäden und Rissen im Dach.',
                image: '/img/kundenbilder/Entrümpelung.webp'
              },
              {
                id: 5,
                title: 'Beschichtungsauftrag',
                description: 'Auftrag der speziellen Dachbeschichtung in mehreren Schichten.',
                image: '/img/kundenbilder/Dachbeschichtung.webp'
              },
              {
                id: 6,
                title: 'Qualitätskontrolle & Übergabe',
                description: 'Abschließende Kontrolle und Übergabe der fertiggestellten Dachbeschichtung.',
                image: '/img/kundenbilder/Dachreinigung Resultat!.webp'
              }
            ].map((step) => (
              <div 
                key={step.id}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 bg-gray-100 dark:bg-gray-600">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                    {step.id}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Trust Section - Warum uns vertrauen?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Premium Qualität */}
            <div className="text-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Premium Qualität</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Premium Qualität mit modernster Technik und höchsten Standards für langlebige Ergebnisse.
              </p>
            </div>

            {/* 10 Jahre Erfahrung */}
            <div className="text-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">10 Jahre Erfahrung</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                10 Jahre Erfahrung als zuverlässiger Partner für Dachbeschichtung in der Region.
              </p>
            </div>

            {/* 100% Kundenzufriedenheit */}
            <div className="text-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">100% Kundenzufriedenheit</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                100% Kundenzufriedenheit durch persönliche Betreuung und Garantie auf unsere Arbeit.
              </p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Verwendung:</strong> Trust Section zur Stärkung des Vertrauens mit Qualitäts-Siegeln und Erfolgsmetriken.
            </p>
          </div>
        </section>

        {/* Individuelle Lösung Section - Normal */}
        <section className="py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Individuelle Lösung Section - Normal
          </h3>
          <IndividuelleLoesungSection variant="normal" />
        </section>

        {/* Individuelle Lösung Section - Glassmorphism */}
        <section className="py-12 bg-gray-900 dark:bg-gray-900 rounded-2xl shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Individuelle Lösung Section - Glassmorphism
          </h3>
          <IndividuelleLoesungSection variant="glassmorphism" />
        </section>

        {/* Section 7: ServiceLeistungenGrid */}
        <section className="py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">7. ServiceLeistungenGrid</h3>
          <ServiceLeistungenGrid
            title="Unsere Leistungen"
            subtitle="Professionelle Dienstleistungen mit Icon-Karten"
            leistungen={[
              {
                title: "Fassadenreinigung",
                description: "Professionelle Reinigung aller Fassadenarten mit modernster Technik.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2zm0 0l3 3m0 0l3-3m-3 3v10m0 0l3-3m-3 3l3 3m6-9v10m0 0l3-3m-3 3l3 3M3 7h18" />
                  </svg>
                ),
                color: "bg-blue-600"
              },
              {
                title: "Dachreinigung",
                description: "Gründliche Reinigung für langfristigen Schutz Ihres Daches.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "bg-green-600"
              },
              {
                title: "Industriereinigung",
                description: "Spezialisierte Reinigung für Industrieanlagen und Großräume.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                color: "bg-yellow-600"
              },
              {
                title: "Büroreinigung",
                description: "Professionelle Reinigung für ein sauberes und produktives Arbeitsumfeld.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                color: "bg-purple-600"
              },
              {
                title: "Hausmeisterservice",
                description: "Zuverlässige Betreuung und Wartung Ihrer Immobilie.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                color: "bg-red-600"
              },
              {
                title: "Winterdienst",
                description: "Schneeräumung und Streudienst für sichere Wege im Winter.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                  </svg>
                ),
                color: "bg-indigo-600"
              }
            ]}
          />
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Verwendung:</strong> Moderne Icon-Karten für Leistungen und Vorteile auf Service-Seiten.
            </p>
          </div>
        </section>

        {/* Section 8: ProblemLoesungSection */}
        <section className="py-12 bg-gradient-to-b from-red-50 to-green-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">8. ProblemLoesungSection</h3>
          <ProblemLoesungSection />
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Verwendung:</strong> Problem-Lösung-Vergleich für Konversionsstärkung auf der Homepage.
            </p>
          </div>
        </section>

        {/* Section 9: Faq */}
        <section className="py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">9. Faq Section</h3>
          <Faq
            title="Häufige Fragen"
            items={[
              {
                question: "Was ist eine Dachreinigung?",
                answer: "Eine professionelle Dachreinigung entfernt Moos, Algen und Schmutz, um die Lebensdauer zu verlängern."
              },
              {
                question: "Wie oft sollte man das Dach reinigen?",
                answer: "Je nach Witterung und Standort empfehlen wir alle 2-3 Jahre eine Reinigung."
              },
              {
                question: "Ist die Reinigung umweltfreundlich?",
                answer: "Ja, wir verwenden biologisch abbaubare Reiniger und schonende Verfahren."
              }
            ]}
          />
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Verwendung:</strong> FAQ-Abschnitt für SEO und Nutzerfragen auf Service-Seiten.
            </p>
          </div>
        </section>

        {/* Section 10: GarantieSection */}
        <section className="py-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">10. GarantieSection</h3>
          <GarantieSection
            title="Unsere Garantien"
            subtitle="Vertrauen Sie auf unsere verbindlichen Zusagen für Qualität und Zuverlässigkeit."
          />
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Verwendung:</strong> Garantie- und Trust-Building-Abschnitt für Service-Seiten.
            </p>
          </div>
        </section>

        {/* Section 11: RelatedServices */}
        <section className="py-12 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">11. RelatedServices</h3>
          <RelatedServices 
            currentService="dachreinigung" 
            category="gebaeudereinigung"
            maxServices={4}
          />
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Verwendung:</strong> Verwandte Services für interne Verlinkung und SEO auf Unterseiten.
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}