import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { CtaSection } from '@/components/CtaSection';

export default function Unternehmen() {
  return (
    <>
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