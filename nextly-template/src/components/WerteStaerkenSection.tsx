import { Container } from './Container';
import { SectionTitle } from './SectionTitle';

export const WerteStaerkenSection = () => {
  const staerken = [
    {
      title: "Eigene Fachkräfte",
      description: "Wir arbeiten ausschließlich mit eigenem, geschultem Personal – keine Subunternehmer, sondern festangestellte Experten.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      title: "Zertifizierungen & Sachkunde",
      description: "Unsere Mitarbeiter verfügen über notwendige Qualifikationen und Zertifizierungen (z.B. Dach, PV-Anlagen).",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-green-100 dark:bg-green-900/30"
    },
    {
      title: "Strukturierte Prozesse",
      description: "Transparente Angebote, dokumentierte Abläufe und klare Kommunikationswege für einen reibungslosen Service.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m12-6V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
        </svg>
      ),
      color: "bg-yellow-100 dark:bg-yellow-900/30"
    },
    {
      title: "Liebe zum Detail",
      description: "Feste Ansprechpartner, persönliche Betreuung und Liebe zum Detail in jeder einzelnen Arbeit.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "bg-red-100 dark:bg-red-900/30"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <SectionTitle
            preTitle="Unsere Stärken"
            title="Warum Kunden von anderen zu uns wechseln"
          >
            Diese vier Säulen machen uns zum zuverlässigen Partner für ganzheitliche Gebäudereinigung und Facility Management.
          </SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staerken.map((staerke, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 p-6 group hover:transform hover:-translate-y-1"
            >
              <div className={`${staerke.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 group-hover:bg-opacity-80`}>
                {staerke.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">{staerke.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                {staerke.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 dark:bg-blue-800 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ihre Experten für Reinigung, Werterhalt & nachhaltige Gebäudepflege</h3>
            <p className="text-lg md:text-xl mb-6">
              Tochterunternehmen der Solar Komfort GmbH mit über 5.000 zufriedenen Kunden
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/kontakt" 
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors min-h-[44px] touch-manipulation"
              >
                Kostenlose Erstberatung
              </a>
              <a 
                href="/ueber-uns" 
                className="px-6 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-colors min-h-[44px] touch-manipulation"
              >
                Mehr über uns
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WerteStaerkenSection;