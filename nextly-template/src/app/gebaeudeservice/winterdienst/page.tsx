import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';
import { Metadata } from "next";
import { CtaSection } from '@/components/CtaSection';

export const metadata: Metadata = {
  title: "Winterdienst - HK Komfort Facility & Gebäudeservice GmbH",
  description: "Professioneller Winterdienst in Darmstadt und Umgebung. Räumen & Streuen nach Ortssatzung. Maschinenpark & 24/7-Rufbereitschaft.",
  keywords: "Winterdienst, Streudienst, Schneeräumung, Darmstadt, Winterdienstvertrag",
  openGraph: {
    title: "Winterdienst - HK Komfort Facility & Gebäudeservice GmbH",
    description: "Professioneller Winterdienst in Darmstadt und Umgebung. Räumen & Streuen nach Ortssatzung. Maschinenpark & 24/7-Rufbereitschaft.",
    url: "https://komfort-gebaeudeservice24.de/winterdienst",
    siteName: "HK Komfort Facility & Gebäudeservice GmbH",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/img/flux/firmenfahrzeug-solar-komfort4.webp",
        width: 1200,
        height: 630,
        alt: "Winterdienst - Professionelle Schneeräumung"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Winterdienst - HK Komfort Facility & Gebäudeservice GmbH",
    description: "Professioneller Winterdienst in Darmstadt und Umgebung. Räumen & Streuen nach Ortssatzung. Maschinenpark & 24/7-Rufbereitschaft.",
    images: ["/img/flux/firmenfahrzeug-solar-komfort4.webp"]
  },
  alternates: {
    canonical: "https://komfort-gebaeudeservice24.de/winterdienst"
  }
};

export default function Winterdienst() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Header Section mit großer Überschrift und vollbreitem Hintergrundbild */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/kundenbilder/Dachreinigung.png"
            alt="Winterdienst - HK Komfort Facility & Gebäudeservice GmbH"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        </div>
        
        <Container className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase text-white drop-shadow-lg">WINTERDIENST</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-100 drop-shadow-md">
                Professioneller Winterdienst in Darmstadt und Umgebung. 
                Räumen & Streuen nach Ortssatzung. Maschinenpark & 24/7-Rufbereitschaft.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        {/* Leistungsübersicht Section */}
        <Section id="leistungen" className="py-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Unsere Leistungen</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Wir übernehmen für Sie den professionellen Winterdienst - zuverlässig, pünktlich und nach Ortssatzung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Schneeräumung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Regelmäßige Schneeräumung von Gehwegen, Parkplätzen, Einfahrten und Treppen. Wir räumen pünktlich und zuverlässig nach Ortssatzung.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Streudienst</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fachgerechtes Streuen mit umweltfreundlichem Streumaterial. Wir verwenden Salzsparsam und achten auf die Umwelt.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">24/7-Rufbereitschaft</h3>
              <p className="text-gray-600 dark:text-gray-300">
                24/7-Rufbereitschaft für Notfälle und unvorhergesehene Schneefälle. Wir sind jederzeit erreichbar und reagieren schnell.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Diskretion</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Wir arbeiten diskret und zuverlässig. Ihre Sicherheit und die Ihrer Mieter steht bei uns an erster Stelle.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Vertragssicherheit</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Klare Winterdienstverträge mit definierten Leistungen, Preisen und Kündigungsfristen. Keine versteckten Kosten.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Moderne Ausrüstung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Wir verfügen über modernen Maschinenpark für effiziente Schneeräumung und Streudienst. Schneefräsen, Schneepflüge und Streufahrzeuge.
              </p>
            </div>
          </div>
        </Section>

        {/* Vorteile Section */}
        <Section id="vorteile" className="py-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Warum HK Komfort Facility & Gebäudeservice GmbH?</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Wir sind Ihr zuverlässiger Partner für professionellen Winterdienst in Darmstadt und Umgebung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Eigene Fachkräfte</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Keine Subunternehmer - nur geschultes, eigenes Personal. Wir garantieren Qualität und Zuverlässigkeit bei jedem Winterdienst.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">Pünktlichkeit</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Wir räumen und streuen pünktlich nach Ortssatzung. Ihre Sicherheit und die Ihrer Mieter steht bei uns an erster Stelle.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-orange-400">Umweltfreundlich</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Wir verwenden umweltfreundliches Streumaterial und arbeiten salzsparend. Wir achten auf die Umwelt und Ihre Pflanzen.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Moderne Technik</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Moderner Maschinenpark für effiziente Schneeräumung und Streudienst. Schneefräsen, Schneepflüge und Streufahrzeuge.
              </p>
            </div>
          </div>
        </Section>

        {/* Prozess Section */}
        <Section id="prozess" className="py-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Unser Prozess</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              So arbeiten wir für Sie - transparent, professionell und zuverlässig.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-4">Bedarfsanalyse</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Umfassende Analyse Ihrer Winterdienst-Anforderungen. Wir ermitteln Flächen, Zugangswege und besondere Anforderungen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-4">Angebotserstellung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Maßgeschneidertes Angebot für Ihren Winterdienst. Transparente Preise und Leistungsbeschreibung.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-4">Vertragsabschluss</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Unkomplizierter Vertragsabschluss. Klare Regelungen zu Leistungen, Preisen und Kündigungsfristen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-4">Einarbeitung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Gründliche Einarbeitung in Ihre Anlagen und Zugangswege. Wir lernen Ihre besonderen Anforderungen und Sicherheitsvorschriften kennen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
              <h3 className="text-xl font-bold mb-4">Regelmäßiger Winterdienst</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Regelmäßiger Winterdienst nach Ortssatzung. Pünktliches Räumen und Streuen bei Schnee- und Eisglätte.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">6</div>
              <h3 className="text-xl font-bold mb-4">Dokumentation & Reporting</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ausführliche Dokumentation aller Winterdienst-Einsätze. Monatliches Reporting über durchgeführte Einsätze und Materialverbrauch.
              </p>
            </div>
          </div>
        </Section>
      </Container>

      {/* CTA Section */}
      <CtaSection 
        backgroundImage="/img/flux/winterdienst-prozess.webp"
        backgroundAlt="Winterdienst - Kontaktieren Sie uns für ein kostenloses Angebot"
        title="Bereit für einen professionellen Winterdienst?"
        description="Kontaktieren Sie uns noch heute für eine unverbindliche Beratung zu Ihrem Winterdienst."
        buttonText="Kostenloses Angebot anfordern"
        buttonLink="/kontakt"
      />
    </div>
  );
}