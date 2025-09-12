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
                image: '/img/flux/step1-beratung.webp'
              },
              {
                id: 2,
                title: 'Dachanalyse & Angebot',
                description: 'Detaillierte Analyse des Dachs und Erstellung eines unverbindlichen Angebots.',
                image: '/img/flux/step2-analyse.webp'
              },
              {
                id: 3,
                title: 'Vorbereitung & Reinigung',
                description: 'Gründliche Reinigung und Vorbereitung der Dachfläche für die Beschichtung.',
                image: '/img/flux/step3-reinigung.webp'
              },
              {
                id: 4,
                title: 'Ausbesserung & Reparatur',
                description: 'Fachgerechte Ausbesserung von Schäden und Rissen im Dach.',
                image: '/img/flux/step4-reparatur.webp'
              },
              {
                id: 5,
                title: 'Beschichtungsauftrag',
                description: 'Auftrag der speziellen Dachbeschichtung in mehreren Schichten.',
                image: '/img/flux/step5-beschichtung.webp'
              },
              {
                id: 6,
                title: 'Qualitätskontrolle & Übergabe',
                description: 'Abschließende Kontrolle und Übergabe der fertiggestellten Dachbeschichtung.',
                image: '/img/flux/step6-fertig.webp'
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
      </Container>
    </div>
  );
}
