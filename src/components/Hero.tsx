import Image from "next/image";
import { Container } from "@/components/Container";

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
      <div className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh] min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] xl:min-h-[600px] w-full">
        {/* Vollbreites Bild mit Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/flux/komfort-team-cleaning.webp"
            alt="Komfort Gebäudeservice24 - Team bei der professionellen Gebäudereinigung"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>
        
        {/* Hero-Content */}
        <Container className="relative z-10 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white mb-3 sm:mb-4 md:mb-5 drop-shadow-lg">
              PROFESSIONELLE GEBÄUDEREINIGUNG
            </h1>
            <p className="py-2 text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 drop-shadow-md mb-4 sm:mb-5 md:mb-6">
              Solar Komfort Tochterfirma - Komplettlösungen für Büro, Industrie und Facility Management aus einer Hand.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4 mt-6 sm:mt-8">
              <a
                href="/kontakt"
                className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Kostenlos anfragen
              </a>
              <a
                href="#leistungen"
                className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-center text-white border-2 border-white/50 rounded-lg hover:bg-white/10 transition-colors"
              >
                Leistungen ansehen
              </a>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Dienstleistungen Sektion */}
      <div className="relative bg-white dark:bg-gray-800 py-12 sm:py-16 md:py-20">
        {/* Vollbreites Hintergrundbild mit Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/flux/dachbeschichtung-prozess.webp"
            alt="Dachbeschichtung Prozess"
            fill
            className="object-cover opacity-10 dark:opacity-5"
          />
        </div>
        
        <Container className="py-6 sm:py-8 md:py-10 relative z-10">
          <div className="flex flex-col justify-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4 sm:mb-6 uppercase tracking-wide">
              Unsere Dienstleistungen
            </div>
            <div className="w-20 sm:w-24 h-1 bg-blue-600 mx-auto mb-8 sm:mb-10"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10">
              <div className="bg-white/90 dark:bg-gray-700/90 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <svg className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-lg sm:text-xl font-bold text-center text-gray-800 dark:text-white mb-3">Dachreinigung</p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center">Professionelle Reinigung für langfristigen Schutz und Werterhalt Ihres Daches.</p>
              </div>
              
              <div className="bg-white/90 dark:bg-gray-700/90 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <svg className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-lg sm:text-xl font-bold text-center text-gray-800 dark:text-white mb-3">Dachimprägnierung</p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center">Schutz vor Moos und Algen mit natürlichen Inhaltsstoffen für langanhaltende Wirkung.</p>
              </div>
              
              <div className="bg-white/90 dark:bg-gray-700/90 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <svg className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <p className="text-lg sm:text-xl font-bold text-center text-gray-800 dark:text-white mb-3">Dachbeschichtung</p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center">UV-beständige Beschichtung für eine längere Lebensdauer und optimalen Schutz.</p>
              </div>
              
              <div className="bg-white/90 dark:bg-gray-700/90 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <svg className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <p className="text-lg sm:text-xl font-bold text-center text-gray-800 dark:text-white mb-3">Dachrinnenreinigung</p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center">Effektive Reinigung für eine optimale Wasserableitung und Schutz vor Verstopfung.</p>
              </div>
              
              <div className="bg-white/90 dark:bg-gray-700/90 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <svg className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <p className="text-lg sm:text-xl font-bold text-center text-gray-800 dark:text-white mb-3">Pflasterreinigung</p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center">Schonende Reinigung für gepflegte Außenbereiche und erhöhte Rutschfestigkeit.</p>
              </div>
              
              <div className="bg-white/90 dark:bg-gray-700/90 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <svg className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-lg sm:text-xl font-bold text-center text-gray-800 dark:text-white mb-3">Fassadenreinigung</p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center">Professionelle Reinigung für ein frisches Erscheinungsbild und Werterhalt Ihrer Immobilie.</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};