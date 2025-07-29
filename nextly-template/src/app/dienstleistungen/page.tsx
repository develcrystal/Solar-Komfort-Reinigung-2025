"use client";

import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';
import { ImageSlider } from '@/components/ImageSlider';
import { CtaSection } from '@/components/CtaSection';

export default function Dienstleistungen() {
  // Bildslider für Dachreinigung
  const dachreinigungImages = [
    { 
      src: "/img/flux/quer_Vorher-Nachher Dachreinigung.webp", 
      alt: "Dachreinigung vorher nachher Vergleich - Professionelle Dachsanierung" 
    },
    { 
      src: "/img/flux/dach-reinigung-prozess1.webp", 
      alt: "Dachreinigung Prozess - Schritt 1" 
    },
    { 
      src: "/img/flux/dach-reinigung-prozess2.webp", 
      alt: "Dachreinigung Prozess - Schritt 2" 
    },
    { 
      src: "/img/flux/dach-reinigung-prozess3.webp", 
      alt: "Dachreinigung Prozess - Schritt 3" 
    }
  ];

  // Bildslider für Dachbeschichtung
  const dachbeschichtungImages = [
    { 
      src: "/img/flux/dachbeschichtung-prozess.webp", 
      alt: "Dachbeschichtung Prozess - Langfristiger Schutz für Ihr Dach" 
    },
    { 
      src: "/img/flux/dach-beschichtung-prozess2.webp", 
      alt: "Dachbeschichtung Grundierung - Schritt 2" 
    },
    { 
      src: "/img/flux/dach-beschichtung-prozess3.webp", 
      alt: "Dachbeschichtung Zweifache Beschichtung - Schritt 3" 
    }
  ];

  // Bildslider für Fassadenreinigung
  const fassadenreinigungImages = [
    { 
      src: "/img/flux/fassadenreinigung-vorher-nachher.webp", 
      alt: "Fassadenreinigung vorher nachher - Professionelle Gebäudereinigung" 
    },
    { 
      src: "/img/flux/fassadenreinigung-prozess.webp", 
      alt: "Fassadenreinigung Prozess - Professionelle Gebäudereinigung" 
    },
    { 
      src: "/img/flux/fassadenreinigung-prozess1.webp", 
      alt: "Fassadenreinigung Prozess - Detailansicht" 
    }
  ];

  // Bildslider für Solaranlagenreinigung
  const solarreinigungImages = [
    { 
      src: "/img/flux/solaranlagenreinigung-vorher-nachher.webp", 
      alt: "Solaranlagenreinigung vorher nachher - Effiziente Photovoltaik durch professionelle Reinigung" 
    },
    { 
      src: "/img/flux/solaranlagenreinigung-prozess.jpg", 
      alt: "Solaranlagenreinigung Prozess - Professionelle Reinigung" 
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Header Section mit großer Überschrift und vollbreitem Hintergrundbild */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/flux/dachbeschichtung-prozess.webp"
            alt="Dienstleistungen - Solar Komfort"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        </div>
        
        <Container className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase text-white drop-shadow-lg">UNSERE DIENSTLEISTUNGEN</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-100 drop-shadow-md">
                Die Solar Komfort GmbH bietet Ihnen professionelle Dienstleistungen rund um Ihr Dach und Ihre Fassade. 
                Mit unserer langjährigen Erfahrung und modernen Techniken sorgen wir für nachhaltige Ergebnisse, 
                die nicht nur die Optik verbessern, sondern auch den Wert Ihrer Immobilie steigern.
              </p>
            </div>
          </div>
        </Container>
      </div>
      
      <Container>
        {/* Dachreinigung - Bild links, Text rechts */}
        <Section id="dachreinigung">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative">
                <ImageSlider
                  images={dachreinigungImages}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-xl"
                  autoPlay={true}
                  interval={6000}
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-6">
                  <Image 
                    src="/img/flux/icon-dachreinigung.webp"
                    alt="Dachreinigung Icon"
                    width={60}
                    height={60}
                    className="mr-4"
                  />
                  <h2 className="text-4xl font-bold uppercase tracking-wide">DACHREINIGUNG</h2>
                </div>
                <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                  Professionelle Reinigung Ihres Daches für langfristigen Schutz und Werterhalt. Wir entfernen Moos, Flechten und Algen schonend und nachhaltig. Durch den Selbstreinigungseffekt bleibt Ihr Dach länger sauber und geschützt.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <h3 className="text-2xl font-semibold mb-4">Warum sinnvoll?</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Eine Dachreinigung entfernt Algen, Moose und Schimmel, die sich über die Jahre ansammeln und schützt die Integrität Ihres Daches.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <h3 className="text-2xl font-semibold mb-4">Arbeitsweise</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Wir verwenden Arbeitsbühnen und schonende Reinigungslösungen, die organische Verschmutzungen nachhaltig entfernen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Dachbeschichtung - Text links, Bild rechts */}
        <Section id="dachbeschichtung">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row-reverse">
              <div className="md:w-1/2 relative">
                <ImageSlider
                  images={dachbeschichtungImages}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-xl"
                  autoPlay={true}
                  interval={7000}
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-6">
                  <Image 
                    src="/img/flux/icon-dachbeschichtung.webp"
                    alt="Dachbeschichtung Icon"
                    width={60}
                    height={60}
                    className="mr-4"
                  />
                  <h2 className="text-4xl font-bold uppercase tracking-wide">DACHBESCHICHTUNG</h2>
                </div>
                <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                  Unsere Dachbeschichtung schützt Ihr Dach vor Witterungseinflüssen und verlängert dessen Lebensdauer. Die Beschichtung ist UV-beständig und verhindert das Wachstum von Moos und Algen.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <h3 className="text-2xl font-semibold mb-4">Vorteile</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Eine professionelle Dachbeschichtung schützt vor Witterungseinflüssen, verlängert die Lebensdauer und spart langfristig Kosten.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <h3 className="text-2xl font-semibold mb-4">Imprägnierung</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Natürliche Inhaltsstoffe auf Harzbasis bieten zusätzlichen Schutz vor Moos und Algen für mehrere Jahre.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Fassadenreinigung - Bild links, Text rechts */}
        <Section id="fassadenreinigung">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative">
                <ImageSlider
                  images={fassadenreinigungImages}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-xl"
                  autoPlay={true}
                  interval={6500}
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-6">
                  <Image 
                    src="/img/flux/icon-fassadenreinigung.webp"
                    alt="Fassadenreinigung Icon"
                    width={60}
                    height={60}
                    className="mr-4"
                  />
                  <h2 className="text-4xl font-bold uppercase tracking-wide">FASSADENREINIGUNG</h2>
                </div>
                <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                  Die Fassadenreinigung entfernt Schmutz, Algen und Pilze von Ihrem Gebäude. Unsere schonende Methode schont die Bausubstanz und sorgt für ein gepflegtes Erscheinungsbild.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <h3 className="text-2xl font-semibold mb-4">Niederdruckreinigung</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Schonend für Ihre Fassade ohne Schäden am Mauerwerk. Unsere Reinigungsmittel dringen tief in die Poren ein.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <h3 className="text-2xl font-semibold mb-4">Langfristiger Schutz</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Optional bieten wir eine Imprägnierung an, die wasserabweisend wirkt und vor Frostschäden schützt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Solaranlagenreinigung - Text links, Bild rechts */}
        <Section id="solaranlagenreinigung">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row-reverse">
              <div className="md:w-1/2 relative">
                <ImageSlider
                  images={solarreinigungImages}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-xl"
                  autoPlay={true}
                  interval={7000}
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-6">
                  <Image 
                    src="/img/flux/icon-solarreinigung.webp"
                    alt="Solaranlagenreinigung Icon"
                    width={60}
                    height={60}
                    className="mr-4"
                  />
                  <h2 className="text-4xl font-bold uppercase tracking-wide">SOLARANLAGENREINIGUNG</h2>
                </div>
                <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                  Verschmutzungen auf Solaranlagen reduzieren den Ertrag erheblich. Unsere professionelle Reinigung steigert die Effizienz und verlängert die Lebensdauer Ihrer Photovoltaikanlage.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <h3 className="text-2xl font-semibold mb-4">Ertragsoptimierung</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Durch regelmäßige Reinigung kann der Ertrag Ihrer Solaranlage um bis zu 30% gesteigert werden.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                    <h3 className="text-2xl font-semibold mb-4">Schonende Reinigung</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Wir verwenden spezielles demineralisiertes Wasser und schonende Bürsten, die Ihre Module nicht beschädigen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Container>
      
      {/* CTA Section - Vollbreites Bild mit Text-Overlay */}
      <CtaSection 
        backgroundImage="/img/flux/dachbeschichtung-prozess.webp"
        backgroundAlt="Kontaktieren Sie uns für ein Angebot zur Dachbeschichtung"
        title="Bereit für eine langlebige Dachbeschichtung mit Nano-Effekt?"
        description="Kontaktieren Sie uns noch heute für eine unverbindliche Beratung zu unseren professionellen Dienstleistungen."
      />
    </div>
  );
}