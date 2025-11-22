import { Container } from './Container';
import { SectionTitle } from './SectionTitle';
import ServiceLeistungenGrid from './ServiceLeistungenGrid';

export const FacilityManagementLeistungen = () => {
  // Facility Management Leistungen
  const fmLeistungen = [
    {
      title: "Objektaufnahme & Zieldefinition",
      description: "Detaillierte Analyse Ihres Objekts mit Festlegung klarer Ziele und Anforderungen.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2zM12 10v6m-3-3h6" />
        </svg>
      ),
      color: "bg-blue-600"
    },
    {
      title: "Reinigung, Hausmeister & Instandhaltung",
      description: "Komplette Gebäudereinigung, hausmeistermäßige Dienstleistungen und Instandhaltungsarbeiten.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      color: "bg-green-600"
    },
    {
      title: "Dienstleisterkoordination & Terminüberwachung",
      description: "Organisation und Koordination aller externen Dienstleister sowie Überwachung aller Termine.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: "bg-yellow-600"
    },
    {
      title: "Qualitätssicherung & Dokumentation",
      description: "Systematische Qualitätssicherung aller Arbeiten mit vollständiger Dokumentation.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-purple-600"
    },
    {
      title: "Reporting & Kostenkontrolle",
      description: "Transparente Berichterstattung und effiziente Kostenkontrolle für alle Facility-Dienstleistungen.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "bg-red-600"
    },
    {
      title: "Betreuung von Gewerbeparks, Verwaltungen, Kliniken, Schulen",
      description: "Spezialisierte Facility Management-Lösungen für komplexe Immobilien.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2z" />
        </svg>
      ),
      color: "bg-indigo-600"
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
      <Container>
        <SectionTitle
          preTitle="Facility Management"
          title="Unser Leistungsspektrum"
        >
          Ob Teilbereich oder Komplettpaket – wir stellen den reibungslosen Betrieb Ihrer Immobilie sicher.
        </SectionTitle>

        <ServiceLeistungenGrid
          title="Facility Management"
          subtitle="Komplette Gebäudemanagement-Lösungen aus einer Hand."
          leistungen={fmLeistungen}
        />

        <div className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Flexible Lösungen</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Ob Teilbereich oder Komplettpaket – wir stellen den reibungslosen Betrieb Ihrer Immobilie sicher.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Individuell auf Ihre Bedürfnisse zugeschnitten</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Transparente Prozesse und klare Kommunikation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Effiziente Ressourcennutzung und Kosteneinsparung</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Vorteile eines Full-Service FM</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-2 mr-4">
                    <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white">Ein Ansprechpartner</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Alle Gewerke aus einer Hand</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2 mr-4">
                    <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white">Kostenoptimierung</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Effiziente Ressourcenplanung</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-2 mr-4">
                    <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white">Qualitätsgarantie</h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Hohe und einheitliche Standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FacilityManagementLeistungen;