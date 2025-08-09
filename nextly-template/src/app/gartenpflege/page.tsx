import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { CtaSection } from '@/components/CtaSection';

export default function Gartenpflege() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <SectionTitle
            preTitle="Unser Service"
            title="Gartenpflege & Außenanlagen"
          >
            Professionelle Pflege von Gärten, Grünanlagen und Außenbereichen.
          </SectionTitle>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Unsere Leistungen</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Rasenpflege und Mähen</li>
                <li>• Heckenschnitt und Baumpflege</li>
                <li>• Blumenbeete und Bepflanzung</li>
                <li>• Unkrautentfernung</li>
                <li>• Saisonale Gartenpflege</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ihre Vorteile</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>✓ Gepflegte Außenanlagen</li>
                <li>✓ Fachkundige Beratung</li>
                <li>✓ Regelmäßige Pflege</li>
                <li>✓ Professionelle Ausrüstung</li>
                <li>✓ Umweltschonende Methoden</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <CtaSection
        backgroundImage="/img/flux/team-beratung1.webp"
        backgroundAlt="Kontaktieren Sie uns für Gartenpflege"
        title="Bereit für gepflegte Außenanlagen?"
        description="Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin."
        buttonText="Jetzt Beratung anfordern"
        buttonLink="/kontakt"
      />
    </>
  );
}