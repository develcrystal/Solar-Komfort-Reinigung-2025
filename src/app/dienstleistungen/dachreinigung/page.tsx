import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { CtaSection } from '@/components/CtaSection';
import { SharedDienstleistungenHeader } from '@/components/SharedDienstleistungenHeader';
import { ExtendedProcessSteps } from '@/components/ExtendedProcessSteps';

export default function Dachreinigung() {
  // 6-Schritte Komplett-Prozess für Dachreinigung
  const dachreinigungProcessSteps = [
    {
      step: 1,
      title: "Kostenlose Vor-Ort-Analyse",
      description: "Unser Experte begutachtet Ihr Dach, prüft den Zustand der Ziegel und erstellt eine detaillierte Analyse. Wir dokumentieren Verschmutzungsgrad und mögliche Schäden.",
      imageSrc: "/img/flux/dach-reinigung-prozess1.webp",
      imageAlt: "Dachanalyse und Begutachtung vor Ort",
      bgColor: "bg-blue-600"
    },
    {
      step: 2,
      title: "Professionelle Dachreinigung",
      description: "Gründliche Entfernung von Moos, Flechten, Algen und Verschmutzungen mit schonenden Niederdruckverfahren. Wir arbeiten ohne aggressive Chemikalien.",
      imageSrc: "/img/flux/dach-reinigung-prozess2.webp",
      imageAlt: "Professionelle Dachreinigung im Gange",
      bgColor: "bg-green-600"
    },
    {
      step: 3,
      title: "Grundierung & Vorbereitung",
      description: "Nach der Reinigung wird das Dach vollständig getrocknet und eine spezielle Grundierung aufgetragen. Diese sorgt für optimale Haftung der Beschichtung.",
      imageSrc: "/img/flux/dach-beschichtung-prozess2.webp",
      imageAlt: "Grundierung des Daches vor Beschichtung",
      bgColor: "bg-orange-600"
    },
    {
      step: 4,
      title: "Nano-Beschichtung auftragen",
      description: "Aufbringung der hochwertigen Nano-Beschichtung in zwei Schichten. Diese schützt vor UV-Strahlung, Witterung und verhindert Neubefall von Moos und Algen.",
      imageSrc: "/img/flux/dach-beschichtung-prozess3.webp",
      imageAlt: "Aufbringung der Nano-Beschichtung",
      bgColor: "bg-purple-600"
    },
    {
      step: 5,
      title: "Dachrinnenreinigung",
      description: "Gründliche Reinigung der Dachrinnen und Fallrohre. Entfernung von Laub, Schmutz und Verstopfungen für optimalen Wasserabfluss.",
      imageSrc: "/img/flux/dach-reinigung-prozess5.webp",
      imageAlt: "Dachrinnenreinigung und Wartung",
      bgColor: "bg-yellow-600"
    },
    {
      step: 6,
      title: "Qualitätskontrolle & Garantie",
      description: "Abschließende Qualitätsprüfung, Dokumentation der Arbeiten und Übergabe mit umfassender Garantie. Wir räumen alles sauber auf und bieten Nachservice.",
      imageSrc: "/img/flux/dach-reinigung-prozess6.jpg",
      imageAlt: "Qualitätskontrolle und Projektübergabe",
      bgColor: "bg-red-600"
    }
  ];

  return (
    <>
      {/* Hero-Bereich */}
      <SharedDienstleistungenHeader
        title="DACHREINIGUNG & BESCHICHTUNG"
        description="Professionelle Dachreinigung und Beschichtung für ein gepflegtes Erscheinungsbild und längere Haltbarkeit Ihres Daches."
        imageSrc="/img/flux/dachreinigung-vorher-nachher.webp"
        imageAlt="Dachreinigung Vorher/Nachher - Beeindruckende Transformation durch professionelle Dachreinigung"
      />

      {/* Service-Details */}
      <div className="bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <SectionTitle
            preTitle="Unser Service"
            title="Professionelle Dachreinigung"
          >
            Von der gründlichen Reinigung bis zur schützenden Beschichtung - wir sorgen für langanhaltende Sauberkeit und Werterhaltung Ihres Daches.
          </SectionTitle>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Unsere Leistungen
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 flex-grow">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Gründliche Dachreinigung mit Hochdrucktechnik
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Entfernung von Moos, Algen und Verschmutzungen
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Nano-Beschichtung für langfristigen Schutz
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Dachrinnenreinigung inklusive
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Kostenlose Vorab-Inspektion
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ihre Vorteile
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 flex-grow">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Werterhaltung der Immobilie
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Langfristiger Schutz vor Witterung
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Verlängerte Lebensdauer des Daches
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Professionelle Beratung inklusive
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Faire und transparente Preise
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* 6-Stufen Komplett-Service für Dachreinigung */}
      <div className="bg-white dark:bg-gray-800">
        <ExtendedProcessSteps 
          steps={dachreinigungProcessSteps}
          title="Unser 6-Stufen Dachreinigung-Service"
          subtitle="Von der Analyse bis zur Nano-Beschichtung - so arbeiten wir für maximale Werterhaltung Ihres Daches"
        />
      </div>

      {/* Call-to-Action */}
      <CtaSection
        backgroundImage="/img/kundenbilder/Dachreinigung.png"
        backgroundAlt="Kontaktieren Sie uns für professionelle Dachreinigung"
        title="Bereit für ein sauberes Dach?"
        description="Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin für Ihre Dachreinigung."
        buttonText="Jetzt Beratung anfordern"
        buttonLink="/kontakt"
      />
    </>
  );
}