import { Metadata } from 'next'
import Image from 'next/image'
import { Breadcrumb } from '@/components/Breadcrumb'
import { RelatedServices } from '@/components/RelatedServices'
import { CtaSection } from '@/components/CtaSection'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/SectionTitle'

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
      <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] min-h-[350px] sm:min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/kundenbilder/Reinigung.png"
            alt="Schulreinigung - Saubere und hygienische Lernumgebungen"
            fill
            className="object-cover brightness-[0.8]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/50" />
        </div>
        <Container className="relative z-10 h-full flex items-center">
          <div className="max-w-2xl sm:max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white uppercase mb-3 sm:mb-4 md:mb-6 drop-shadow-lg">
              SCHULREINIGUNG
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-4 sm:mb-6 md:mb-8 drop-shadow-md">
              Saubere und hygienische Lernumgebungen für Ihre Schüler – zuverlässig, kindgerecht und nach höchsten Hygienestandards.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="/kontakt"
                className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all min-h-[44px] touch-manipulation"
              >
                Kostenlos beraten lassen
              </a>
              <a
                href="/kostenrechner"
                className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 transition-all min-h-[44px] touch-manipulation"
              >
                Kosten berechnen
              </a>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-white dark:bg-gray-900 py-8 sm:py-12 md:py-16 lg:py-20">
        <Container>
          <SectionTitle preTitle="Unser Service" title="Schulreinigung">
            Saubere und hygienische Lernumgebungen für Ihre Schüler – zuverlässig, kindgerecht und nach höchsten Hygienestandards.
          </SectionTitle>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Unsere Leistungen</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Tägliche Klassenzimmerreinigung</li>
                <li>• Hygienereinigung von Sanitärbereichen</li>
                <li>• Flächenreinigung in Korridoren & Pausenräumen</li>
                <li>• Spezialreinigung von Sporthallen & Werkstätten</li>
                <li>• Professionelle Müllentsorgung & Abfallmanagement</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ihre Vorteile</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>✓ Hygienisch einwandfreie Lernumgebung</li>
                <li>✓ Geprüfte und geschulte Reinigungskräfte</li>
                <li>✓ Flexible Reinigungszeiten außerhalb der Schulzeiten</li>
                <li>✓ Zertifizierte Reinigungsmittel und -verfahren</li>
                <li>• Individuell angepasste Reinigungskonzepte</li>
              </ul>
            </div>
          </div>
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