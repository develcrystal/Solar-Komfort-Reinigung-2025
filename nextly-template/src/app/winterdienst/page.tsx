import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { CtaSection } from '@/components/CtaSection';

export default function Winterdienst() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <SectionTitle
            preTitle="Unser Service"
            title="Winterdienst"
          >
            Zuverlässiger Winterdienst für Gehwege, Einfahrten und Parkplätze.
          </SectionTitle>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Unsere Leistungen</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Räumdienst für Gehwege</li>
                <li>• Parkplätze und Einfahrten</li>
                <li>• Streudienst bei Glättegefahr</li>
                <li>• 24h-Bereitschaft im Winter</li>
                <li>• Umweltfreundliche Streumittel</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ihre Vorteile</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>✓ Verkehrssicherheit gewährleistet</li>
                <li>✓ Rechtssicherheit erfüllt</li>
                <li>✓ Pünktlicher Service</li>
                <li>✓ Wetterabhängige Einsätze</li>
                <li>✓ Kostentransparenz</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <CtaSection
        backgroundImage="/img/flux/team-beratung1.webp"
        backgroundAlt="Kontaktieren Sie uns für Winterdienst"
        title="Bereit für einen sicheren Winter?"
        description="Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin."
        buttonText="Jetzt Beratung anfordern"
        buttonLink="/kontakt"
      />
    </>
  );
}