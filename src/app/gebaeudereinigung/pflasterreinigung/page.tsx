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
                imageSrc: "/img/kundenbilder/Reinigung.webp",
                imageAlt: "Professionelle Hochdruckreinigung von Pflastersteinen",
                color: "bg-blue-600"
              },
              {
                title: "Entfernung von Moos und Unkraut",
                description: "Umweltfreundliche Beseitigung von Bewuchs für saubere Fugen und Oberflächen.",
                imageSrc: "/img/kundenbilder/Grundreinigung.webp",
                imageAlt: "Moos- und Unkrautentfernung für saubere Pflasterflächen",
                color: "bg-green-600"
              },
              {
                title: "Reinigung von Gehwegen und Einfahrten",
                description: "Gründliche Pflege von Verkehrsflächen für Sicherheit und Ästhetik.",
                imageSrc: "/img/kundenbilder/Industriereinigung.webp",
                imageAlt: "Saubere und sichere Gehwege nach professioneller Reinigung",
                color: "bg-yellow-600"
              },
              {
                title: "Steinversiegelung auf Wunsch",
                description: "Schutzimprägnierung für langanhaltende Sauberkeit und Witterungsbeständigkeit.",
                imageSrc: "/img/kundenbilder/Büro-Reinigung.webp",
                imageAlt: "Versiegelte Pflasterflächen mit Langzeitschutz",
                color: "bg-purple-600"
              },
              {
                title: "Umweltschonende Verfahren",
                description: "Nachhaltige Reinigungsmethoden ohne schädliche Chemikalien.",
                imageSrc: "/img/kundenbilder/Krankenhausreinigung.webp",
                imageAlt: "Umweltfreundliche Reinigungsmethoden für Pflasterbeläge",
                color: "bg-red-600"
              },
              {
                title: "Versiegelung und Imprägnierung",
                description: "Langanhaltender Schutz gegen Witterung, Schmutz und erneuten Bewuchs.",
                imageSrc: "/img/kundenbilder/Büro-Reinigung (1).webp",
                imageAlt: "Lange haltende Versiegelung und Imprägnierschutz",
                color: "bg-indigo-600"
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
                imageSrc: "/img/kundenbilder/Reinigung.webp",
                imageAlt: "Gepflegtes und sauberes Außenerscheinungsbild",
                color: "bg-green-600"
              },
              {
                title: "Rutschsicherheit wird erhöht",
                description: "Saubere Oberflächen reduzieren das Risiko von Stürzen.",
                imageSrc: "/img/kundenbilder/Industriereinigung.webp",
                imageAlt: "Sichere und rutschfeste Pflasterflächen",
                color: "bg-green-600"
              },
              {
                title: "Werterhaltung der Immobilie",
                description: "Regelmäßige Pflege verlängert die Lebensdauer Ihrer Flächen.",
                imageSrc: "/img/kundenbilder/Grundreinigung.webp",
                imageAlt: "Langlebige und gepflegte Außenflächen",
                color: "bg-green-600"
              },
              {
                title: "Schnelle und effiziente Arbeitsweise",
                description: "Professionelle Technik für minimale Störung und schnelle Ergebnisse.",
                imageSrc: "/img/kundenbilder/Büro-Reinigung.webp",
                imageAlt: "Effiziente Reinigungsarbeiten mit modernen Methoden",
                color: "bg-green-600"
              },
              {
                title: "Faire und transparente Preise",
                description: "Klare Kosten ohne versteckte Gebühren.",
                imageSrc: "/img/kundenbilder/Büro-Reinigung (1).webp",
                imageAlt: "Transparente Preisgestaltung für Pflasterreinigung",
                color: "bg-green-600"
              },
              {
                title: "Professioneller Service",
                description: "Zuverlässig, diskret und mit kompetenter Beratung bei allen Fragen.",
                imageSrc: "/img/kundenbilder/Krankenhausreinigung.webp",
                imageAlt: "Professioneller Service und zuverlässige Beratung",
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