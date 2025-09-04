import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { CtaSection } from '@/components/CtaSection';
import Image from 'next/image';

export default function Fassadenreinigung() {
  return (
    <>
      {/* Hero-Bereich - Mobile First */}
      <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] min-h-[350px] sm:min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/flux/fassadenreinigung-prozess.webp"
            alt="Fassadenreinigung & Impregnierung - Professioneller Arbeiter reinigt Fassade"
            fill
            className="object-cover brightness-[0.8]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/50"></div>
        </div>
        
        <Container className="relative z-10 h-full flex items-center">
          <div className="max-w-2xl sm:max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white uppercase mb-3 sm:mb-4 md:mb-6 drop-shadow-lg">
              FASSADENREINIGUNG & IMPREGNIERUNG
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-4 sm:mb-6 md:mb-8 drop-shadow-md">
              Professionelle Fassadenreinigung und schützende Imprägnierung für langanhaltende Sauberkeit
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="/kontakt" className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all min-h-[44px] touch-manipulation">
                Kostenlos beraten lassen
              </a>
              <a href="/kostenrechner" className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 transition-all min-h-[44px] touch-manipulation">
                Kosten berechnen
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Service-Details */}
      <div className="bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <SectionTitle
            preTitle="Unser Service"
            title="Professionelle Fassadenreinigung"
          >
            Schonende und effektive Reinigung aller Fassadenarten mit modernster Technik und umweltfreundlichen Verfahren.
          </SectionTitle>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Unsere Leistungen
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Schonende Niederdruckreinigung
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Entfernung von Algen, Moos und Schmutz
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Professionelle Imprägnierung
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Alle Fassadenarten (Klinker, Putz, Naturstein)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  Umweltfreundliche Verfahren
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
                  Schutz vor Witterungseinflüssen
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Langanhaltende Sauberkeit
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Professionelle Ausführung
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Transparente Kostenaufstellung
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Prozess-Darstellung mit neuem Bild */}
      <div className="bg-gray-50 dark:bg-gray-800 py-8 sm:py-12 md:py-16 lg:py-20">
        <Container>
          <SectionTitle
            preTitle="Unser Prozess"
            title="Professionelle Fassadenreinigung in Aktion"
          >
            So arbeiten unsere Experten - sicher, effizient und mit modernster Ausrüstung.
          </SectionTitle>
          
          <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/img/flux/fassadenreinigung-prozess.webp"
                alt="Fassadenreinigung Prozess - Arbeiter mit Schutzausrüstung reinigt Gebäudefassade"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Sicherheitsausrüstung
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    Unsere Experten arbeiten mit kompletter Schutzausrüstung - Helm, Sicherheitsgurte und professionelle Arbeitskleidung.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Gerüst & Hebebühne
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    Sichere Arbeitsplätze durch stabile Gerüste oder Hebebühnen für optimalen Zugang zu allen Fassadenbereichen.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Schonende Reinigung
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    Präzise Hochdruckreinigung entfernt Verschmutzungen ohne die Fassadensubstanz zu beschädigen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Call-to-Action */}
      <CtaSection
        backgroundImage="/img/kundenbilder/Fassaden-Reingung.png"
        backgroundAlt="Kontaktieren Sie uns für professionelle Fassadenreinigung"
        title="Bereit für eine saubere Fassade?"
        description="Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin für Ihre Fassadenreinigung."
        buttonText="Jetzt Beratung anfordern"
        buttonLink="/kontakt"
      />
    </>
  );
}