import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';

export const ReinigungsmaterialienSection = () => {
  return (
    <Section className="py-16 bg-white dark:bg-gray-800">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Mitgebrachte Reinigungsmaterialien
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Wir arbeiten mit den besten Reinigungsmitteln und Geräten, die TÜV-geprüft und umweltverträglich sind. Unsere zertifizierten Partner stellen höchste Qualität sicher.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Meyer */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center hover-tile">
            <div className="relative h-32 mb-4">
              <Image
                src="/img/logos/meyer-logo.png" // Annahme: Logo hinzufügen oder Platzhalter
                alt="Meyer Reinigungsmittel"
                fill
                className="object-contain mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Meyer Reinigungsmittel</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Hochwertige, umweltfreundliche Reiniger für alle Oberflächen.
            </p>
          </div>

          {/* CVS */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center hover-tile">
            <div className="relative h-32 mb-4">
              <Image
                src="/img/logos/cvs-logo.png" // Annahme: Logo hinzufügen
                alt="CVS Desinfektionsmittel"
                fill
                className="object-contain mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">CVS Desinfektionsmittel</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Wirksame Desinfektionslösungen für hygienische Reinigung.
            </p>
          </div>

          {/* TÜV */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center hover-tile">
            <div className="relative h-32 mb-4">
              <Image
                src="/img/logos/tuev-logo.png" // Annahme: Logo hinzufügen
                alt="TÜV Zertifizierung"
                fill
                className="object-contain mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">TÜV Zertifizierung</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Alle Materialien und Methoden sind TÜV-geprüft für höchste Sicherheit.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Wir verwenden ausschließlich Produkte, die umweltverträglich und hautschonend sind. Keine aggressiven Chemikalien – nur bewährte Qualität.
          </p>
        </div>
      </Container>
    </Section>
  );
};