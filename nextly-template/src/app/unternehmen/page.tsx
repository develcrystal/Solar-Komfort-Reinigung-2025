import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { CtaSection } from '@/components/CtaSection';
import Image from 'next/image';
import Link from 'next/link';

export default function Unternehmen() {
  return (
    <>
      {/* Hero-Bereich - Mobile First */}
      <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] min-h-[350px] sm:min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/flux/team-bei-der-arbeitwebp.webp"
            alt="Unser Unternehmen - Professionelle Arbeitsqualität"
            fill
            className="object-cover brightness-[0.8]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/50"></div>
        </div>
        
        <Container className="relative z-10 h-full flex items-center">
          <div className="max-w-2xl sm:max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white uppercase mb-3 sm:mb-4 md:mb-6 drop-shadow-lg">
              UNSER UNTERNEHMEN
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-4 sm:mb-6 md:mb-8 drop-shadow-md">
              Erfahren Sie mehr über die Komfort Gebäudeservice24 GmbH und unsere Expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/kontakt" className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all min-h-[44px] touch-manipulation">
                Kostenlos beraten lassen
              </Link>
              <Link href="/kostenrechner" className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 transition-all min-h-[44px] touch-manipulation">
                Kosten berechnen
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <SectionTitle
            preTitle="Facility Management"
            title="Unser Unternehmen"
          >
            Erfahren Sie mehr über die Komfort Gebäudeservice24 GmbH und unsere Expertise.
          </SectionTitle>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Über uns</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Tochterfirma der Solar Komfort GmbH</li>
                <li>• Über 5.000 zufriedene Kunden</li>
                <li>• Langjährige Branchenerfahrung</li>
                <li>• Qualifizierte Fachkräfte</li>
                <li>• Modernste Technik und Verfahren</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Unsere Werte</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>✓ Qualität und Zuverlässigkeit</li>
                <li>✓ Transparenz und Ehrlichkeit</li>
                <li>✓ Umweltbewusstsein</li>
                <li>✓ Kundenorientierung</li>
                <li>✓ Kontinuierliche Weiterbildung</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <CtaSection
        backgroundImage="/img/flux/team-beratung1.webp"
        backgroundAlt="Kontaktieren Sie uns"
        title="Lernen Sie uns kennen!"
        description="Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin."
        buttonText="Jetzt Beratung anfordern"
        buttonLink="/kontakt"
      />
    </>
  );
}