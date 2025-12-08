import { Metadata } from 'next'
import { Breadcrumb } from '@/components/Breadcrumb'
import { RelatedServices } from '@/components/RelatedServices'
import { CtaSection } from '@/components/CtaSection'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/SectionTitle'
import { ServiceHeader } from '@/components/ServiceHeader'
import { ServiceShowcase } from '@/components/ServiceShowcase'
import Image from 'next/image'

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

      {/* SECTION 1: Leistungen - Service Grid Layout (kompakte 3x2 Karten) */}
      <div className="bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
              Unsere Leistungen
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professionelle Reinigungsdienste speziell für Schulen und Bildungseinrichtungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Tägliche Klassenzimmerreinigung",
                description: "Gründliche Reinigung der Klassenzimmer und Lernräume für ein sauberes Lernumfeld.",
                imageSrc: "/img/kundenbilder/Büro-Reinigung.webp",
                imageAlt: "Professionelle Klassenzimmerreinigung - saubere Lernumgebung"
              },
              {
                title: "Hygienereinigung von Sanitärbereichen",
                description: "Desinfektion und Reinigung von Toiletten und Waschräumen nach höchsten Hygienestandards.",
                imageSrc: "/img/kundenbilder/Krankenhausreinigung.webp",
                imageAlt: "Hygienereinigung von Schul-Sanitäranlagen nach höchsten Standards"
              },
              {
                title: "Flächenreinigung in Korridoren & Pausenräumen",
                description: "Sichere und gründliche Reinigung der Verkehrswege und Gemeinschaftsräume.",
                imageSrc: "/img/kundenbilder/Reinigung.webp",
                imageAlt: "Gründliche Flächenreinigung in Schulkorridoren und Pausenräumen"
              },
              {
                title: "Spezialreinigung von Sporthallen & Werkstätten",
                description: "Professionelle Reinigung sportlicher und technischer Räume mit speziellen Mitteln.",
                imageSrc: "/img/kundenbilder/Industriereinigung.webp",
                imageAlt: "Spezialreinigung von Sporthallen und Werkstätten"
              },
              {
                title: "Professionelle Müllentsorgung & Abfallmanagement",
                description: "Effiziente Entsorgung und Recyclingkonzepte für schulische Abfälle.",
                imageSrc: "/img/kundenbilder/Grundreinigung.webp",
                imageAlt: "Professionelles Abfallmanagement und Müllentsorgung für Schulen"
              },
              {
                title: "Fenster- und Glasreinigung",
                description: "Kristallklare Sicht durch saubere Fenster und Glastüren in Schulgebäuden.",
                imageSrc: "/img/kundenbilder/Büro-Reinigung (1).webp",
                imageAlt: "Professionelle Fenster- und Glasreinigung in Schulgebäuden"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* SECTION 2: Vorteile - 2-Column Alternating Layout mit Bildern (ANDERES Template!) */}
      <div className="bg-gray-50 dark:bg-gray-800 py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
              Ihre Vorteile
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Warum unsere Schulreinigung die richtige Wahl für Ihre Einrichtung ist.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-20">
            {[
              {
                title: "Hygienisch einwandfreie Lernumgebung",
                description: "Saubere Räume reduzieren Krankheitsrisiken und fördern die Konzentration der Schüler. Eine sichere und saubere Umgebung ist essentiell für erfolgreiche Schulen.",
                imageSrc: "/img/kundenbilder/schulklasse-sauber.webp",
                imageAlt: "Sauberes Klassenzimmer mit aufgeräumten Schulbänken"
              },
              {
                title: "Geprüfte und geschulte Reinigungskräfte",
                description: "Unser Team ist speziell für schulische Umgebungen geschult und zertifiziert. Jeder Mitarbeiter durchläuft regelmäßige Weiterbildungen.",
                imageSrc: "/img/flux/team-gruppenfoto-neu.webp",
                imageAlt: "Professionell geschulte Reinigungskräfte"
              },
              {
                title: "Flexible Reinigungszeiten außerhalb der Schulzeiten",
                description: "Reinigung passend zu Ihrem Stundenplan, ohne Unterrichtsstörung. Wir arbeiten vor oder nach der Schulzeit für optimale Effizienz.",
                imageSrc: "/img/flux/team-vor-ort.webp",
                imageAlt: "Flexible On-Site Reinigung"
              },
              {
                title: "Zertifizierte Reinigungsmittel und -verfahren",
                description: "Umweltfreundliche und kindersichere Produkte für maximale Sicherheit. Alle Reinigungsmittel sind gemäß Schulstandards geprüft.",
                imageSrc: "/img/flux/professionelle-ausruestung3.webp",
                imageAlt: "Professionelle Reinigungsausrüstung"
              },
              {
                title: "Individuell angepasste Reinigungskonzepte",
                description: "Maßgeschneiderte Pläne für Ihre spezifischen Bedürfnisse und Anforderungen. Wir beraten Sie persönlich zur besten Lösung.",
                imageSrc: "/img/flux/team-beratung-neu.webp",
                imageAlt: "Individuelle Beratung für Schulen"
              },
              {
                title: "Regelmäßige Qualitätskontrollen",
                description: "Kontinuierliche Überprüfung der Reinigungsqualität für gleichbleibend hohe Standards. Ihre Zufriedenheit ist unser Qualitätsmerkmal.",
                imageSrc: "/img/flux/team-bei-arbeit-neu.webp",
                imageAlt: "Qualitätskontrolle durch professionelle Überwachung"
              }
            ].map((item, index) => (
              <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center ${index % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
                <div className={`relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <section className="bg-gray-50 dark:bg-gray-800">
        <ServiceShowcase
          title="Unser Reinigungsprozess für Schulen"
          subtitle="Ein systematischer Ansatz, der Sauberkeit und Effizienz garantiert – Schritt für Schritt abgestimmt auf den Schulumgang."
          mode="process"
          className="bg-gray-50 dark:bg-gray-800"
          items={[
            {
              step: 1,
              title: "Gründliche Reinigung",
              description: "Professionelle Tiefenreinigung aller Schulräume mit speziellen Verfahren für Klassenzimmer, Flure und Gemeinschaftsbereiche.",
              imageSrc: "/img/kundenbilder/Reinigung.webp",
              imageAlt: "Gründliche Schulreinigung - Vorbereitung und Umsetzung",
              color: "bg-blue-600"
            },
            {
              step: 2,
              title: "Hygiene-Desinfektion",
              description: "Intensive Desinfektion von Sanitärbereichen, Türgriffen und Oberflächen nach höchsten Hygienestandards für sichere Lernumgebungen.",
              imageSrc: "/img/kundenbilder/Krankenhausreinigung.webp",
              imageAlt: "Hygiene-Desinfektion in Schulen - Sanitärbereich und Oberflächendesinfizierung",
              color: "bg-green-600"
            },
            {
              step: 3,
              title: "Qualitätskontrolle",
              description: "Regelmäßige Qualitätschecks und Dokumentation für kontinuierliche Verbesserung basierend auf Feedback von Schulpersonal.",
              imageSrc: "/img/kundenbilder/Grundreinigung.webp",
              imageAlt: "Qualitätskontrolle der Schulreinigung - Inspektionsprozess",
              color: "bg-purple-600"
            }
          ]}
        />
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