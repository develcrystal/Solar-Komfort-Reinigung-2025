import Image from "next/image";
import { Container } from "@/components/Container";
import { ImageSlider } from "@/components/ImageSlider";

export const Hero = () => {
  const heroImages = [
    { 
      src: "/img/flux/quer_Vorher-Nachher Dachreinigung.webp", 
      alt: "Vorher-Nachher Dachreinigung" 
    },
    { 
      src: "/img/flux/dachbeschichtung-prozess.webp", 
      alt: "Dachbeschichtung Prozess" 
    },
    { 
      src: "/img/flux/fassadenreinigung-vorher-nachher.webp", 
      alt: "Fassadenreinigung vorher nachher" 
    }
  ];

  return (
    <>
      {/* Vollbreiter Hero mit Overlay-Text */}
      <div className="relative h-[80vh] min-h-[600px] w-full">
        {/* Vollbreites Bild mit Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/flux/quer_Vorher-Nachher Dachreinigung.webp"
            alt="Solar Komfort - Dachreinigung und Dachbeschichtung"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        </div>
        
        {/* Hero-Content */}
        <Container className="relative z-10 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-snug tracking-tight text-white lg:leading-tight xl:leading-tight uppercase mb-4 drop-shadow-lg">
              Die Zukunft auf Ihrem Dach
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-100 lg:text-xl xl:text-2xl drop-shadow-md">
              Gründliche Dachreinigung und langlebige Dachbeschichtung mit modernem Nano-Effekt. Wir bieten professionelle Lösungen für Reinigung, Versiegelung und Beschichtung.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row mt-6">
              <a
                href="tel:061511546592"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-bold text-center text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-lg flex items-center"
              >
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06151 15 465 92
              </a>
              <a
                href="mailto:info@solarkomfort.de"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-white font-medium text-lg hover:text-blue-300 transition-colors"
              >
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@solarkomfort.de
              </a>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Dienstleistungen Sektion */}
      <div className="relative bg-white dark:bg-gray-800 py-16">
        {/* Vollbreites Hintergrundbild mit Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/flux/dachbeschichtung-prozess.webp"
            alt="Dachbeschichtung Prozess"
            fill
            className="object-cover opacity-10 dark:opacity-5"
          />
        </div>
        
        <Container className="py-8 relative z-10">
          <div className="flex flex-col justify-center">
            <div className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6 uppercase tracking-wide">
              Unsere Dienstleistungen
            </div>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              <div className="bg-white/90 dark:bg-gray-700/90 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-xl font-bold text-center text-gray-800 dark:text-white mb-3">Dachreinigung</p>
                <p className="text-gray-600 dark:text-gray-300 text-center">Professionelle Reinigung für langfristigen Schutz und Werterhalt Ihres Daches.</p>
              </div>
              
              <div className="bg-white/90 dark:bg-gray-700/90 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-xl font-bold text-center text-gray-800 dark:text-white mb-3">Dachimprägnierung</p>
                <p className="text-gray-600 dark:text-gray-300 text-center">Schutz vor Moos und Algen mit natürlichen Inhaltsstoffen für langanhaltende Wirkung.</p>
              </div>
              
              <div className="bg-white/90 dark:bg-gray-700/90 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <p className="text-xl font-bold text-center text-gray-800 dark:text-white mb-3">Dachbeschichtung</p>
                <p className="text-gray-600 dark:text-gray-300 text-center">UV-beständige Beschichtung für eine längere Lebensdauer und optimalen Schutz.</p>
              </div>
              
              <div className="bg-white/90 dark:bg-gray-700/90 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <p className="text-xl font-bold text-center text-gray-800 dark:text-white mb-3">Dachrinnenreinigung</p>
                <p className="text-gray-600 dark:text-gray-300 text-center">Effektive Reinigung für eine optimale Wasserableitung und Schutz vor Verstopfung.</p>
              </div>
              
              <div className="bg-white/90 dark:bg-gray-700/90 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <p className="text-xl font-bold text-center text-gray-800 dark:text-white mb-3">Pflasterreinigung</p>
                <p className="text-gray-600 dark:text-gray-300 text-center">Schonende Reinigung für gepflegte Außenbereiche und erhöhte Rutschfestigkeit.</p>
              </div>
              
              <div className="bg-white/90 dark:bg-gray-700/90 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-xl font-bold text-center text-gray-800 dark:text-white mb-3">Fassadenreinigung</p>
                <p className="text-gray-600 dark:text-gray-300 text-center">Professionelle Reinigung für ein frisches Erscheinungsbild und Werterhalt Ihrer Immobilie.</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};