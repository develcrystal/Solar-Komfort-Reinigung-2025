import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { CtaSection } from '@/components/CtaSection';
import { ServiceHeader } from '@/components/ServiceHeader';
import ServiceLeistungenGrid from '@/components/ServiceLeistungenGrid';

export default function Pflasterreinigung() {
  return (
    <>
      {/* Header Section: Schmal und blaustichig wie Hausmeisterservice */}
      <ServiceHeader
        title="PFLASTER- & STEINREINIGUNG"
        description="Professionelle Reinigung von Pflastersteinen, Gehwegen und Außenflächen für ein gepflegtes Erscheinungsbild."
        imageSrc="/img/flux/Pflasterreinigung-Vorher1.webp"
        imageAlt="Pflaster- & Steinreinigung - Professionelle Außenflächenreinigung"
      />

      {/* Service-Details */}
      <div className="bg-white dark:bg-gray-900 py-8 sm:py-12 md:py-16 lg:py-20">
        <Container>
          <SectionTitle
            preTitle="Unser Service"
            title="Pflaster- & Steinreinigung"
          >
            Professionelle Reinigung von Pflastersteinen, Gehwegen und Außenflächen für ein gepflegtes Erscheinungsbild.
          </SectionTitle>
          <ServiceLeistungenGrid
            title="Unsere Leistungen"
            subtitle="Professionelle Reinigung und Pflege von Pflaster- und Steinflächen für langlebige Schönheit."
            leistungen={[
              {
                title: "Hochdruckreinigung von Pflastersteinen",
                description: "Effektive Entfernung von Schmutz und Verkrustungen mit kontrolliertem Druck.",
                icon: (
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V3a1 1 0 011-1h8a1 1 0 011 1v1m-10 0h10m-10 0v12a1 1 0 001 1h8a1 1 0 001-1V4m-10 0H5a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V5a1 1 0 00-1-1h-1m-6 0h2m0 0V9m0 0v2m0-2h2m-2 0h2" />
                  </svg>
                ),
                color: "bg-blue-600"
              },
              {
                title: "Entfernung von Moos und Unkraut",
                description: "Umweltfreundliche Beseitigung von Bewuchs für saubere Fugen und Oberflächen.",
                icon: (
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2zm0 0l3 3m0 0l3-3m-3 3v10m0 0l3-3m-3 3l3 3m6-9v10m0 0l3-3m-3 3l3 3M3 7h18" />
                  </svg>
                ),
                color: "bg-green-600"
              },
              {
                title: "Reinigung von Gehwegen und Einfahrten",
                description: "Gründliche Pflege von Verkehrsflächen für Sicherheit und Ästhetik.",
                icon: (
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                color: "bg-yellow-600"
              },
              {
                title: "Steinversiegelung auf Wunsch",
                description: "Schutzimprägnierung für langanhaltende Sauberkeit und Witterungsbeständigkeit.",
                icon: (
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "bg-purple-600"
              },
              {
                title: "Umweltschonende Verfahren",
                description: "Nachhaltige Reinigungsmethoden ohne schädliche Chemikalien.",
                icon: (
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "bg-red-600"
              }
            ]}
          />

          <ServiceLeistungenGrid
            title="Ihre Vorteile"
            subtitle="Warum unsere Pflasterreinigung die ideale Lösung für Ihre Außenflächen ist."
            leistungen={[
              {
                title: "Gepflegtes Außenerscheinungsbild",
                description: "Frische und saubere Flächen heben Ihre Immobilie hervor.",
                icon: (
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "bg-green-600"
              },
              {
                title: "Rutschsicherheit wird erhöht",
                description: "Saubere Oberflächen reduzieren das Risiko von Stürzen.",
                icon: (
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "bg-green-600"
              },
              {
                title: "Werterhaltung der Immobilie",
                description: "Regelmäßige Pflege verlängert die Lebensdauer Ihrer Flächen.",
                icon: (
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "bg-green-600"
              },
              {
                title: "Schnelle und effiziente Arbeitsweise",
                description: "Professionelle Technik für minimale Störung und schnelle Ergebnisse.",
                icon: (
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                color: "bg-green-600"
              },
              {
                title: "Faire und transparente Preise",
                description: "Klare Kosten ohne versteckte Gebühren.",
                icon: (
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "bg-green-600"
              }
            ]}
          />
        </Container>
      </div>

      <CtaSection
        backgroundImage="/img/kundenbilder/Pflaster-stein-Reinigung.webp"
        backgroundAlt="Kontaktieren Sie uns für Pflasterreinigung"
        title="Bereit für saubere Außenflächen?"
        description="Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin."
        buttonText="Jetzt Beratung anfordern"
        buttonLink="/kontakt"
      />
    </>
  );
}