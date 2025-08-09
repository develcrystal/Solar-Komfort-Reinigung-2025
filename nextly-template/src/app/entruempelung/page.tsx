import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { CtaSection } from '@/components/CtaSection';

export default function Entruempelung() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <SectionTitle
            preTitle="Unser Service"
            title="Entrümpelung & Haushaltsauflösungen"
          >
            Professionelle Entrümpelung und komplette Haushaltsauflösungen.
          </SectionTitle>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Unsere Leistungen</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Komplette Wohnungsräumung</li>
                <li>• Keller- und Dachboden-Entrümpelung</li>
                <li>• Entsorgung und Recycling</li>
                <li>• Verwertbare Gegenstände aussortieren</li>
                <li>• Besenreine Übergabe</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ihre Vorteile</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>✓ Stressfreie Abwicklung</li>
                <li>✓ Umweltgerechte Entsorgung</li>
                <li>✓ Faire Preisgestaltung</li>
                <li>✓ Schnelle Termine</li>
                <li>✓ Komplettservice</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <CtaSection
        backgroundImage="/img/flux/team-beratung1.webp"
        backgroundAlt="Kontaktieren Sie uns für Entrümpelung"
        title="Bereit für eine stressfreie Entrümpelung?"
        description="Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin."
        buttonText="Jetzt Beratung anfordern"
        buttonLink="/kontakt"
      />
    </>
  );
}