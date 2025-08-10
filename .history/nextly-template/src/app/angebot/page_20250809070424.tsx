import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { CtaSection } from '@/components/CtaSection';

export default function Angebot() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <SectionTitle
            preTitle="Facility Management"
            title="Unser Angebot"
          >
            Umfassende Facility Management-Lösungen für Ihre Immobilie aus einer Hand.
          </SectionTitle>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Unsere Leistungen</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Technisches Facility Management</li>
                <li>• Infrastrukturelles Facility Management</li>
                <li>• Kaufmännisches Facility Management</li>
                <li>• Energiemanagement und -optimierung</li>
                <li>• Objektüberwachung und Sicherheit</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ihre Vorteile</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>✓ Komplettlösungen aus einer Hand</li>
                <li>✓ Kostentransparenz und -kontrolle</li>
                <li>✓ Werterhaltung der Immobilie</li>
                <li>✓ Professionelle Betreuung</li>
                <li>✓ 24/7 Bereitschaftsdienst</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <CtaSection
        backgroundImage="/img/flux/team-beratung1.webp"
        backgroundAlt="Kontaktieren Sie uns für Facility Management"
        title="Bereit für professionelles Facility Management?"
        description="Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin."
        buttonText="Jetzt Beratung anfordern"
        buttonLink="/kontakt"
      />
    </>
  );
}