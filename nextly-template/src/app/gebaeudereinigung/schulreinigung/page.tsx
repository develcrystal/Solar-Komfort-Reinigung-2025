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
    images: ['/img/kundenbilder/Reinigung.png'],
    type: 'website',
    locale: 'de_DE',
    siteName: 'Komfort Gebäudeservice24 GmbH',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schulreinigung - Komfort Gebäudeservice24',
    description: 'Saubere Schulen für gesundes Lernen. Professionelle Reinigungsdienste.',
    images: ['/img/kundenbilder/Reinigung.png'],
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
        imageSrc="/img/kundenbilder/Reinigung.png"
        imageAlt="Schulreinigung - Saubere und hygienische Lernumgebungen"
      />

      <div className="bg-white dark:bg-gray-900 py-8 sm:py-12 md:py-16 lg:py-20">
        <Container>
          <SectionTitle preTitle="Unser Service" title="Schulreinigung">
            Saubere und hygienische Lernumgebungen für Ihre Schüler – zuverlässig, kindgerecht und nach höchsten Hygienestandards.
          </SectionTitle>
          <ServiceLeistungenGrid
            title="Unsere Leistungen"
            subtitle="Professionelle Reinigungsdienste speziell für Schulen und Bildungseinrichtungen."
            leistungen={[
              {
                title: "Tägliche Klassenzimmerreinigung",
                description: "Gründliche Reinigung der Klassenzimmer und Lernräume für ein sauberes Lernumfeld.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2zM12 10v6m-3-3h6" />
                  </svg>
                ),
                color: "bg-blue-600"
              },
              {
                title: "Hygienereinigung von Sanitärbereichen",
                description: "Desinfektion und Reinigung von Toiletten und Waschräumen nach höchsten Hygienestandards.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l3-3L7.07 7.07 9 9l-1.07 1.07-1.93-1.93L5 10zm0 4l3-3L7.07 11.07 9 13l-1.07 1.07-1.93-1.93L5 14zm4 0l3-3L11.07 11.07 13 13l-1.07 1.07-1.93-1.93L9 14zm4 0l3-3L15.07 11.07 17 13l-1.07 1.07-1.93-1.93L13 14z" />
                  </svg>
                ),
                color: "bg-green-600"
              },
              {
                title: "Flächenreinigung in Korridoren & Pausenräumen",
                description: "Sichere und gründliche Reinigung der Verkehrswege und Gemeinschaftsräume.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                color: "bg-yellow-600"
              },
              {
                title: "Spezialreinigung von Sporthallen & Werkstätten",
                description: "Professionelle Reinigung sportlicher und technischer Räume mit speziellen Mitteln.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  </svg>
                ),
                color: "bg-purple-600"
              },
              {
                title: "Professionelle Müllentsorgung & Abfallmanagement",
                description: "Effiziente Entsorgung und Recyclingkonzepte für schulische Abfälle.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M3 8h18M3 12h18M3 16h18M3 20h18M3 4l1.5 4.5M7.5 4l1.5 4.5M12 4l1.5 4.5M16.5 4l1.5 4.5M21 4l-1.5 4.5M3 8l1.5 4.5M7.5 8l1.5 4.5M12 8l1.5 4.5M16.5 8l1.5 4.5M21 8l-1.5 4.5M3 12l1.5 4.5M7.5 12l1.5 4.5M12 12l1.5 4.5M16.5 12l1.5 4.5M21 12l-1.5 4.5M3 16l1.5 4.5M7.5 16l1.5 4.5M12 16l1.5 4.5M16.5 16l1.5 4.5M21 16l-1.5 4.5M3 20l1.5 4.5M7.5 20l1.5 4.5M12 20l1.5 4.5M16.5 20l1.5 4.5M21 20l-1.5 4.5" />
                  </svg>
                ),
                color: "bg-red-600"
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
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "bg-green-600"
              },
              {
                title: "Geprüfte und geschulte Reinigungskräfte",
                description: "Unser Team ist speziell für schulische Umgebungen geschult.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                ),
                color: "bg-green-600"
              },
              {
                title: "Flexible Reinigungszeiten außerhalb der Schulzeiten",
                description: "Reinigung passend zu Ihrem Stundenplan, ohne Unterrichtsstörung.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "bg-green-600"
              },
              {
                title: "Zertifizierte Reinigungsmittel und -verfahren",
                description: "Umweltfreundliche und kindersichere Produkte für maximale Sicherheit.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                color: "bg-green-600"
              },
              {
                title: "Individuell angepasste Reinigungskonzepte",
                description: "Maßgeschneiderte Pläne für Ihre spezifischen Bedürfnisse.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                ),
                color: "bg-green-600"
              }
            ]}
          />

          <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Fenster- und Glasreinigung</h3>
            <p className="text-gray-600 dark:text-gray-300">Kristallklare Sicht durch saubere Fenster und Glastüren in Schulgebäuden für besseres Licht.</p>
          </div>
        </Container>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Vorteile unserer Schulreinigung
          </h2>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Mit über 20 Jahren Erfahrung bieten wir maßgeschneiderte Reinigungslösungen, die den speziellen Anforderungen von Schulen gerecht werden.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Kindgerechte Reinigung</h3>
              <p className="text-gray-600 dark:text-gray-300">Sichere, umweltfreundliche Reinigungsmittel, die für Kinder und Jugendliche geeignet sind – ohne schädliche Rückstände.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Hygienestandards</h3>
              <p className="text-gray-600 dark:text-gray-300">Strenge Einhaltung von Schul- und Gesundheitsvorschriften für maximale Hygiene und Infektionsprävention.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Flexibler Zeitplan</h3>
              <p className="text-gray-600 dark:text-gray-300">Reinigung außerhalb der Unterrichtszeiten – nachmittags, abends oder in Ferienzeiten, passend zu Ihrem Schulplan.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Zertifizierte Teams</h3>
              <p className="text-gray-600 dark:text-gray-300">Geschulte Mitarbeiter mit Fokus auf Pädagogik und Hygiene – zuverlässig und diskret im Schulalltag.</p>
            </div>
          </div>
        </div>
      </section>

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
        backgroundImage="/img/kundenbilder/Reinigung.png"
        backgroundAlt="Kontaktieren Sie uns für Schulreinigung"
        title="Bereit für eine saubere Schule?"
        description="Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin."
        buttonText="Jetzt Beratung anfordern"
        buttonLink="/kontakt"
      />
    </div>
  )
}