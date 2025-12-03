import { Metadata } from 'next'
import { Breadcrumb } from '@/components/Breadcrumb'
import { RelatedServices } from '@/components/RelatedServices'
import { CtaSection } from '@/components/CtaSection'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/SectionTitle'
import { ServiceHeader } from '@/components/ServiceHeader'
import ServiceLeistungenGrid from '@/components/ServiceLeistungenGrid'

export const metadata: Metadata = {
  title: 'Schulreinigung - Komfort Gebäudeservice24 GmbH',
  description: 'Professionelle Schulreinigung für saubere und hygienische Lernumgebungen. Zuverlässige Reinigungsdienste für Schulen und Bildungseinrichtungen. Kontaktieren Sie uns für ein individuelles Angebot.',
  keywords: 'Schulreinigung, Reinigung Schulen, Hygienereinigung Bildung, Komfort Gebäudeservice',
  openGraph: {
    title: 'Schulreinigung - Saubere Lernumgebungen | Komfort Gebäudeservice24',
    description: 'Professionelle Reinigung für Schulen – hygienisch und kindgerecht. Fordern Sie jetzt Ihr Angebot an!',
    images: ['/img/kundenbilder/Reinigung.webp'],
    type: 'website',
    locale: 'de_DE',
    siteName: 'Komfort Gebäudeservice24 GmbH',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schulreinigung - Komfort Gebäudeservice24',
    description: 'Saubere Schulen für gesundes Lernen. Professionelle Reinigungsdienste.',
    images: ['/img/kundenbilder/Reinigung.webp'],
  },
}

export default function Schulreinigung() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Breadcrumb />

      {/* Header Section: Schmal und blaustichig wie Hausmeisterservice */}
      <ServiceHeader
        title="SCHULREINIGUNG"
        description="Saubere und hygienische Lernumgebungen für Ihre Schüler – zuverlässig, kindgerecht und nach höchsten Hygienestandards."
        imageSrc="/img/kundenbilder/Reinigung.webp"
        imageAlt="Schulreinigung - Saubere und hygienische Lernumgebungen"
      />

      <div className="bg-white dark:bg-gray-900 py-8 sm:py-12 md:py-16 lg:py-20">
        <Container>
          <ServiceLeistungenGrid
            title="Unsere Leistungen"
            subtitle="Professionelle Reinigungsdienste speziell für Schulen und Bildungseinrichtungen."
            leistungen={[
              {
                title: "Tägliche Klassenzimmerreinigung",
                description: "Gründliche Reinigung der Klassenzimmer und Lernräume für ein sauberes Lernumfeld.",
                imageSrc: "/img/kundenbilder/Büro-Reinigung.webp",
                imageAlt: "Professionelle Klassenzimmerreinigung - saubere Lernumgebung",
                color: "bg-blue-600"
              },
              {
                title: "Hygienereinigung von Sanitärbereichen",
                description: "Desinfektion und Reinigung von Toiletten und Waschräumen nach höchsten Hygienestandards.",
                imageSrc: "/img/kundenbilder/Krankenhausreinigung.webp",
                imageAlt: "Hygienereinigung von Schul-Sanitäranlagen nach höchsten Standards",
                color: "bg-green-600"
              },
              {
                title: "Flächenreinigung in Korridoren & Pausenräumen",
                description: "Sichere und gründliche Reinigung der Verkehrswege und Gemeinschaftsräume.",
                imageSrc: "/img/kundenbilder/Reinigung.webp",
                imageAlt: "Gründliche Flächenreinigung in Schulkorridoren und Pausenräumen",
                color: "bg-yellow-600"
              },
              {
                title: "Spezialreinigung von Sporthallen & Werkstätten",
                description: "Professionelle Reinigung sportlicher und technischer Räume mit speziellen Mitteln.",
                imageSrc: "/img/kundenbilder/Industriereinigung.webp",
                imageAlt: "Spezialreinigung von Sporthallen und Werkstätten",
                color: "bg-purple-600"
              },
              {
                title: "Professionelle Müllentsorgung & Abfallmanagement",
                description: "Effiziente Entsorgung und Recyclingkonzepte für schulische Abfälle.",
                imageSrc: "/img/kundenbilder/Grundreinigung.webp",
                imageAlt: "Professionelles Abfallmanagement und Müllentsorgung für Schulen",
                color: "bg-red-600"
              },
              {
                title: "Fenster- und Glasreinigung",
                description: "Kristallklare Sicht durch saubere Fenster und Glastüren in Schulgebäuden.",
                imageSrc: "/img/kundenbilder/Büro-Reinigung (1).webp",
                imageAlt: "Professionelle Fenster- und Glasreinigung in Schulgebäuden",
                color: "bg-indigo-600"
              }
            ]}
          />

          <ServiceLeistungenGrid
            title="Ihre Vorteile"
            subtitle="Warum unsere Schulreinigung die richtige Wahl für Ihre Einrichtung ist."
            leistungen={[
              {
                title: "Hygienisch einwandfreie Lernumgebung",
                description: "Saubere Räume reduzieren Krankheitsrisiken und fördern die Konzentration.",
                imageSrc: "/img/kundenbilder/Reinigung.webp",
                imageAlt: "Hygienisch saubere Lernumgebung für Schulen",
                color: "bg-green-600"
              },
              {
                title: "Geprüfte und geschulte Reinigungskräfte",
                description: "Unser Team ist speziell für schulische Umgebungen geschult.",
                imageSrc: "/img/kundenbilder/Büro-Reinigung.webp",
                imageAlt: "Professionell geschulte Reinigungskräfte für Schulen",
                color: "bg-green-600"
              },
              {
                title: "Flexible Reinigungszeiten außerhalb der Schulzeiten",
                description: "Reinigung passend zu Ihrem Stundenplan, ohne Unterrichtsstörung.",
                imageSrc: "/img/kundenbilder/Reinigung.webp",
                imageAlt: "Flexible Schulreinigung außerhalb der Unterrichtszeiten",
                color: "bg-green-600"
              },
              {
                title: "Zertifizierte Reinigungsmittel und -verfahren",
                description: "Umweltfreundliche und kindersichere Produkte für maximale Sicherheit.",
                imageSrc: "/img/kundenbilder/Krankenhausreinigung.webp",
                imageAlt: "Zertifizierte und kindersichere Reinigungsverfahren",
                color: "bg-green-600"
              },
              {
                title: "Individuell angepasste Reinigungskonzepte",
                description: "Maßgeschneiderte Pläne für Ihre spezifischen Bedürfnisse.",
                imageSrc: "/img/kundenbilder/Grundreinigung.webp",
                imageAlt: "Individuelle Reinigungskonzepte für Schulen",
                color: "bg-green-600"
              },
              {
                title: "Regelmäßige Qualitätskontrollen",
                description: "Kontinuierliche Überprüfung der Reinigungsqualität für gleichbleibend hohe Standards.",
                imageSrc: "/img/kundenbilder/Büro-Reinigung.webp",
                imageAlt: "Regelmäßige Qualitätskontrolle der Schulreinigung",
                color: "bg-blue-600"
              }
            ]}
          />

          <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Fenster- und Glasreinigung</h3>
            <p className="text-gray-600 dark:text-gray-300">Kristallklare Sicht durch saubere Fenster und Glastüren in Schulgebäuden für besseres Licht.</p>
          </div>
        </Container>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Unser Reinigungsprozess für Schulen
          </h2>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16">
            Ein systematischer Ansatz, der Sauberkeit und Effizienz garantiert – Schritt für Schritt abgestimmt auf den Schulumgang.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Beratung & Planung</h3>
              <p className="text-gray-600 dark:text-gray-300">Persönliche Vor-Ort-Besichtigung und Erstellung eines individuellen Reinigungsplans.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Tägliche Umsetzung</h3>
              <p className="text-gray-600 dark:text-gray-300">Professionelle Reinigung nach festem Zeitplan mit Fokus auf Hygiene und Sauberkeit.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Kontrolle & Optimierung</h3>
              <p className="text-gray-600 dark:text-gray-300">Regelmäßige Qualitätschecks und Anpassungen basierend auf Feedback von Schulpersonal.</p>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices 
        currentService="schulreinigung" 
        category="gebaeudereinigung"
        maxServices={4}
      />

      <CtaSection
        backgroundImage="/img/kundenbilder/Reinigung.webp"
        backgroundAlt="Kontaktieren Sie uns für Schulreinigung"
        title="Bereit für eine saubere Schule?"
        description="Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin."
        buttonText="Jetzt Beratung anfordern"
        buttonLink="/kontakt"
      />
    </div>
  )
}