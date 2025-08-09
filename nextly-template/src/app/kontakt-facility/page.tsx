import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { CtaSection } from '@/components/CtaSection';

export default function KontaktFacility() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <SectionTitle
            preTitle="Facility Management"
            title="Kontakt für Facility Management"
          >
            Ihr direkter Draht zu unseren Facility Management-Experten.
          </SectionTitle>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Facility Management Team</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Spezialisierte Ansprechpartner</li>
                <li>• Individuelle Beratung</li>
                <li>• Maßgeschneiderte Lösungen</li>
                <li>• Schnelle Reaktionszeiten</li>
                <li>• Langfristige Partnerschaften</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Kontaktmöglichkeiten</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>✓ Telefonische Beratung</li>
                <li>✓ E-Mail Support</li>
                <li>✓ Vor-Ort-Termine</li>
                <li>✓ 24h-Notfallkontakt</li>
                <li>✓ Online-Formulare</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <CtaSection
        backgroundImage="/img/flux/team-beratung1.webp"
        backgroundAlt="Kontaktieren Sie unser Facility Management Team"
        title="Bereit für professionelle Betreuung?"
        description="Kontaktieren Sie noch heute unser Facility Management-Team."
        buttonText="Jetzt Kontakt aufnehmen"
        buttonLink="/kontakt"
      />
    </>
  );
}