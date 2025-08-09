import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { CtaSection } from '@/components/CtaSection';
import Image from 'next/image';

export default function Fassadenreinigung() {
  return (
    <>
      {/* Hero-Bereich */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/flux/fassadenreinigung-vorher-nachher.webp"
            alt="Fassadenreinigung & Impregnierung - Professionelle Fassadenpflege"
            fill
            className="object-cover brightness-[0.8]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/50"></div>
        </div>
        
        <Container className="relative z-10 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white uppercase mb-4 sm:mb-6 drop-shadow-lg">
              FASSADENREINIGUNG & IMPREGNIERUNG
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 drop-shadow-md">
              Professionelle Fassadenreinigung und schützende Imprägnierung für langanhaltende Sauberkeit
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="/kontakt" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all">
                Kostenlos beraten lassen
              </a>
              <a href="/kostenrechner" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 transition-all">
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

      {/* Call-to-Action */}
      <CtaSection
        backgroundImage="/img/flux/team-beratung1.webp"
        backgroundAlt="Kontaktieren Sie uns für professionelle Fassadenreinigung"
        title="Bereit für eine saubere Fassade?"
        description="Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin für Ihre Fassadenreinigung."
        buttonText="Jetzt Beratung anfordern"
        buttonLink="/kontakt"
      />
    </>
  );
}