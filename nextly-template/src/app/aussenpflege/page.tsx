import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { CtaSection } from '@/components/CtaSection';

export default function Aussenpflege() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <SectionTitle
            preTitle="Unser Service"
            title="Außenpflege & saisonale Dienste"
          >
            Ganzjährige Außenpflege und saisonale Dienstleistungen für Ihr Objekt.
          </SectionTitle>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Unsere Leistungen</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Gehwege und Eingangsbereiche</li>
                <li>• Herbstlaub und Frühjahrsputz</li>
                <li>• Parkplatz-Pflege</li>
                <li>• Saisonale Dekoration</li>
                <li>• Wartung der Außenanlagen</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ihre Vorteile</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>✓ Ganzjährig gepflegtes Objekt</li>
                <li>✓ Saisonale Anpassung</li>
                <li>✓ Professionelle Ausstattung</li>
                <li>✓ Regelmäßige Kontrollen</li>
                <li>✓ Flexible Leistungspakete</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <CtaSection
        backgroundImage="/img/flux/team-beratung1.webp"
        backgroundAlt="Kontaktieren Sie uns für Außenpflege"
        title="Bereit für ganzjährige Außenpflege?"
        description="Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin."
        buttonText="Jetzt Beratung anfordern"
        buttonLink="/kontakt"
      />
    </>
  );
}