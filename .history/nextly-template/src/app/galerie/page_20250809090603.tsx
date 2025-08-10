import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { CtaSection } from '@/components/CtaSection';
import Image from 'next/image';

export default function Galerie() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <SectionTitle
            preTitle="Unsere Arbeiten"
            title="Bildergalerie"
          >
            Überzeugen Sie sich von der Qualität unserer Arbeit durch diese Bildergalerie unserer Projekte.
          </SectionTitle>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/img/flux/kunden-dachreinigung-1.jpg"
                  alt="Dachreinigung Projekt 1"
                  width={400}
                  height={300}
                  className="object-cover w-full h-64"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Dachreinigung und Nano-Beschichtung
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/img/flux/kunden-dachreinigung-2.jpg"
                  alt="Dachreinigung Projekt 2"
                  width={400}
                  height={300}
                  className="object-cover w-full h-64"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Weitere Dachreinigung Referenz
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/img/flux/fassadenreinigung-vorher-nachher.webp"
                  alt="Fassadenreinigung Projekt"
                  width={400}
                  height={300}
                  className="object-cover w-full h-64"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Fassadenreinigung Vorher/Nachher
              </p>
            </div>
          </div>
        </Container>
      </div>

      <CtaSection
        backgroundImage="/img/flux/team-beratung1.webp"
        backgroundAlt="Kontaktieren Sie uns"
        title="Beeindruckt von unserer Arbeit?"
        description="Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin."
        buttonText="Jetzt Beratung anfordern"
        buttonLink="/kontakt"
      />
    </>
  );
}