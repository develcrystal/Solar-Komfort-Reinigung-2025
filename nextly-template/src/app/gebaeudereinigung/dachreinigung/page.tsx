import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { SectionTitle } from '@/components/SectionTitle';
import { CtaSection } from '@/components/CtaSection';
import { ServiceHeader } from '@/components/ServiceHeader';
import { ExtendedProcessSteps } from '@/components/ExtendedProcessSteps';
import { Breadcrumb } from '@/components/Breadcrumb';
import { RelatedServices } from '@/components/RelatedServices';
import ServiceLeistungenGrid from '@/components/ServiceLeistungenGrid';

export default function Dachreinigung() {
  // 6-Schritte Komplett-Prozess für Dachreinigung
  const dachreinigungProcessSteps = [
    {
      step: 1,
      title: "Ausgangszustand dokumentieren",
      description: "Dokumentation des verschmutzten Dachs vor der Reinigung. Das Dach zeigt deutliche Verschmutzung durch Moos, Algen und jahrelange Witterungseinflüsse.",
      imageSrc: "/img/flux/team-beratung1.webp",
      imageAlt: "Team-Beratung",
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
      title: "Feinschliff und Details",
      description: "Nach dem Zwischenergebnis werden schwer zugängliche Stellen und feine Details professionell bearbeitet, um ein perfektes Zwischenresultat zu erreichen.",
      imageSrc: "/img/kundenbilder/Kunden Bilder Reinigung Beschichtung (5).jpg",
      imageAlt: "Kundenprojekt: Feinschliff und Detailarbeit bei der Dachreinigung",
      bgColor: "bg-yellow-600"
    },
    {
      step: 5,
      title: "Solaranlagen-Installation",
      description: "Montage auf gereinigtem und beschichtetem Dach für optimale Stabilität und Langlebigkeit der Anlage.",
      imageSrc: "/img/kundenbilder/Kunden Bilder Reinigung Beschichtung (4).jpg",
      imageAlt: "Kundenprojekt: Solaranlagen-Installation auf gereinigtem und beschichtetem Dach",
      bgColor: "bg-purple-600"
    },
    {
      step: 6,
      title: "Perfektes Endergebnis",
      description: "Makelloses Dach wie neu. Qualität der Reinigung sichtbar.",
      imageSrc: "/img/kundenbilder/Kunden Bilder Reinigung Beschichtung (6).jpg",
      imageAlt: "Kundenprojekt: Perfekt gereinigtes Dach - Endergebnis der professionellen Dachreinigung",
      bgColor: "bg-red-600"
    }
  ];

  return (
    <>
      {/* Hero-Bereich */}
      <ServiceHeader
        title="DACHREINIGUNG & BESCHICHTUNG"
        description="Professionelle Dachreinigung und Beschichtung für ein gepflegtes Erscheinungsbild und längere Haltbarkeit Ihres Daches."
        imageSrc="/img/kundenbilder/Dachreinigung.png"
        imageAlt="Dachreinigung Vorher/Nachher - Beeindruckende Transformation durch professionelle Dachreinigung"
      />

      {/* Service-Details */}
      <div className="bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          {/* Leistungsübersicht Section */}
          <Section id="leistungen" className="py-16">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Unsere Leistungen</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Von der gründlichen Reinigung bis zur schützenden Beschichtung - wir sorgen für langanhaltende Sauberkeit und Werterhaltung Ihres Daches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V3a1 1 0 011-1h8a1 1 0 011 1v1m-10 0h10m-10 0v12a1 1 0 001 1h8a1 1 0 001-1V4m-10 0H5a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V5a1 1 0 00-1-1h-1m-6 0h2m0 0V9m0 0v2m0-2h2m-2 0h2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Hochdruck-Dachreinigung</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Effektive Entfernung von Verschmutzungen, Moos und Algen mit kontrolliertem Druck und professioneller Technik.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2zm0 0l3 3m0 0l3-3m-3 3v10m0 0l3-3m-3 3l3 3m6-9v10m0 0l3-3m-3 3l3 3M3 7h18" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Moos- & Algenentfernung</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Umweltfreundliche Beseitigung von biologischen Verunreinigungen und hartnäckigen Verschmutzungen.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Nano-Beschichtung</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Schutzimprägnierung für langanhaltende Sauberkeit und optimale Witterungsbeständigkeit.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Dachrinnenreinigung</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Gründliche Pflege der Dachrinnen für optimalen Wasserablauf und Schutz vor Wasserschäden.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Kostenlose Inspektion</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Umfassende Begutachtung Ihres Daches vor der Reinigung mit detaillierter Schadensanalyse.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Werterhaltung</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Langfristige Werterhaltung Ihrer Immobilie durch regelmäßige professionelle Dachpflege.
                </p>
              </div>
            </div>
          </Section>
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