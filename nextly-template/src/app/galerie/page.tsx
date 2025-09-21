import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { CtaSection } from '@/components/CtaSection';
import Image from 'next/image';
import { Gallery } from '@/components/gallery';
import { galleryImages, galleryCategories } from '@/data/galleryImages';

export const metadata = {
  title: 'Bildergalerie - Komfort Gebäudeservice24 GmbH',
  description: 'Entdecken Sie unsere Referenzen und Arbeiten in unserer umfangreichen Bildergalerie. Dachreinigung, Fassadenreinigung und mehr.',
  keywords: ['Galerie', 'Referenzen', 'Bilder', 'Dachreinigung', 'Fassadenreinigung', 'Solaranlagenreinigung', 'Gebäudereinigung'],
};

export default function Galerie() {
  return (
    <>
      {/* Hero-Bereich - Mobile First */}
      <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] min-h-[350px] sm:min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/kundenbilder/Kunden Bilder Reinigung Beschichtung (3).jpg"
            alt="Bildergalerie - Referenzen unserer Arbeit"
            fill
            className="object-cover brightness-[0.8]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/50"></div>
        </div>
        
        <Container className="relative z-10 h-full flex items-center">
          <div className="max-w-2xl sm:max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white uppercase mb-3 sm:mb-4 md:mb-6 drop-shadow-lg">
              BILDGALERIE
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-4 sm:mb-6 md:mb-8 drop-shadow-md">
              Überzeugen Sie sich von der Qualität unserer Arbeit durch diese Bildergalerie unserer Projekte.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="/kontakt" 
                className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all min-h-[44px] touch-manipulation"
                aria-label="Kostenlose Beratung anfordern"
              >
                Kostenlos beraten lassen
              </a>
              <a 
                href="/kostenrechner" 
                className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 transition-all min-h-[44px] touch-manipulation"
                aria-label="Kosten für unsere Dienstleistungen berechnen"
              >
                Kosten berechnen
              </a>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <SectionTitle
            preTitle="Unsere Arbeiten"
            title="Bildergalerie"
          >
            Überzeugen Sie sich von der Qualität unserer Arbeit durch diese Bildergalerie unserer Projekte. 
            Wählen Sie eine Kategorie, um spezifische Arbeiten anzuzeigen.
          </SectionTitle>
          
          <div className="mt-12">
            <Gallery 
              images={galleryImages}
              categories={galleryCategories}
              defaultCategory="Alle"
            />
          </div>
        </Container>
      </div>

      <CtaSection
        backgroundImage="/img/flux/team-beratung1.webp"
        backgroundAlt="Unser Team berät Sie gerne persönlich"
        title="Beeindruckt von unserer Arbeit?"
        description="Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin."
        buttonText="Jetzt Beratung anfordern"
        buttonLink="/kontakt"
      />
    </>
  );
}