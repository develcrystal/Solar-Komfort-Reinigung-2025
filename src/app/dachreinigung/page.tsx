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
      title: "Ausgangszustand dokumentieren",
      description: "Dokumentation des verschmutzten Dachs vor der Reinigung. Das Dach zeigt deutliche Verschmutzung durch Moos, Algen und jahrelange Witterungseinflüsse.",
      imageSrc: "/img/kundenbilder/Kunden Bilder Reinigung Beschichtung (1).jpg",
      imageAlt: "Kundenprojekt: Dach vor der Reinigung mit sichtbaren Verschmutzungen",
      bgColor: "bg-blue-600"
    },
    {
      step: 2,
      title: "Schonende Reinigung beginnt",
      description: "Professionelle Reinigung mit schonenden Niederdruckverfahren. Die Verschmutzungen werden systematisch entfernt, ohne die Dachziegel zu beschädigen.",
      imageSrc: "/img/kundenbilder/Kunden Bilder Reinigung Beschichtung (2).jpg",
      imageAlt: "Kundenprojekt: Dachreinigung in Arbeit mit professioneller Technik",
      bgColor: "bg-green-600"
    },
    {
      step: 3,
      title: "Zwischenergebnis sichtbar",
      description: "Deutlicher Fortschritt erkennbar - ein Großteil der Verschmutzungen ist bereits entfernt. Das Dach zeigt wieder seine ursprüngliche Farbe.",
      imageSrc: "/img/kundenbilder/Kunden Bilder Reinigung Beschichtung (3).jpg",
      imageAlt: "Kundenprojekt: Dachreinigung Zwischenergebnis mit deutlicher Verbesserung",
      bgColor: "bg-orange-600"
    },
    {
      step: 4,
      title: "Intensive Reinigung fortgesetzt",
      description: "Intensive Nachbearbeitung hartnäckiger Stellen. Jeder Bereich wird gründlich behandelt, um ein gleichmäßig sauberes Ergebnis zu erzielen.",
      imageSrc: "/img/kundenbilder/Kunden Bilder Reinigung Beschichtung (4).jpg",
      imageAlt: "Kundenprojekt: Intensive Nachbearbeitung der Dachreinigung",
      bgColor: "bg-purple-600"
    },
    {
      step: 5,
      title: "Feinschliff und Details",
      description: "Abschließende Feinarbeiten an schwer zugänglichen Stellen. Jede Ecke und jeder Winkel wird professionell gereinigt.",
      imageSrc: "/img/kundenbilder/Kunden Bilder Reinigung Beschichtung (5).jpg",
      imageAlt: "Kundenprojekt: Feinschliff und Detailarbeit bei der Dachreinigung",
      bgColor: "bg-yellow-600"
    },
    {
      step: 6,
      title: "Perfektes Endergebnis",
      description: "Das finale Ergebnis - ein makelloses, wie neues Dach! Der dramatische Unterschied zeigt die Qualität unserer professionellen Dachreinigung.",
      imageSrc: "/img/kundenbilder/Kunden Bilder Reinigung Beschichtung (6).jpg",
      imageAlt: "Kundenprojekt: Perfekt gereinigtes Dach - Endergebnis der professionellen Dachreinigung",
      bgColor: "bg-red-600"
    }
  ];

  return (
    <>
      {/* Hero-Bereich */}
      <SharedDienstleistungenHeader
        title="DACHREINIGUNG & BESCHICHTUNG"
        description="Professionelle Dachreinigung und Beschichtung für ein gepflegtes Erscheinungsbild und längere Haltbarkeit Ihres Daches."
        imageSrc="/img/kundenbilder/Dachreinigung Resultat!.png"
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
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Unsere Leistungen
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
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
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ihre Vorteile
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
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