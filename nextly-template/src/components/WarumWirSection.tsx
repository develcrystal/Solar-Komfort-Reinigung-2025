"use client";

import { Container } from './Container';
import { SectionTitle } from './SectionTitle';

const WarumWirSection = () => {
  const vorteile = [
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Moderne Technik",
      description: "Neueste Reinigungsverfahren und Geräte für optimale Ergebnisse"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Sicherheit & Haftung",
      description: "Vollversichert und zertifiziert - 100% Sicherheit für Ihr Eigentum"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Zertifizierte Partner",
      description: "Unser Partner-Status bei ISO-zertifizierten Reinigungssystemen"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Ausgebildete Mitarbeiter",
      description: "Fachpersonal mit Reinigungsausbildung und regelmäßigen Schulungen"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Höchste Qualität",
      description: "Über 99% Kundenzufriedenheit - messbare und dokumentierte Qualität"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "150+ Referenzen",
      description: "Bereits über 150 zufriedene Kunden vertrauen auf unsere Qualität"
    }
  ];

  return (
    <div className="section bg-white dark:bg-gray-900">
      <Container>
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-blue-300 mr-4"></div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-lg font-semibold text-blue-600 uppercase tracking-wide">Warum Wir?</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-blue-300 ml-4"></div>
          </div>
        </div>

        <SectionTitle
          title="Was uns von anderen Reinigungsfirmen unterscheidet"
        >
          Sie kennen das bestimmt: Unzuverlässige Termine, versteckte Kosten, schlechte Erreichbarkeit oder mangelnde Dokumentation. 
          Als Tochterfirma der Solar Komfort GmbH machen wir es anders - professionell, transparent und mit über 10 Jahren Erfahrung.
        </SectionTitle>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vorteile.map((vorteil, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl border border-yellow-200 dark:border-gray-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {vorteil.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-600 transition-colors">
                    {vorteil.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {vorteil.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ProvenExpert Style Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 px-8 py-4 rounded-2xl border border-blue-200 dark:border-blue-700">
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400 text-2xl">
                ★★★★★
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">4.9/5</span>
            </div>
            <div className="h-8 w-px bg-blue-300 dark:bg-blue-600"></div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Über 150 Bewertungen</p>
              <p className="text-xs text-gray-600 dark:text-gray-300">Verifizierte Kundenbewertungen</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export { WarumWirSection };