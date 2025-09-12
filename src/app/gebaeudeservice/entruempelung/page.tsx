import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';
import { Metadata } from "next";
import { CtaSection } from '@/components/CtaSection';

export const metadata: Metadata = {
  title: "Entrümpelung & Haushaltsauflösungen - HK Komfort Facility & Gebäudeservice GmbH",
  description: "Professionelle Entrümpelung und Haushaltsauflösungen in Darmstadt und Umgebung. Besenreine Räumung von Kellern, Wohnungen, Büros. Inkl. Trennung, Transport & fachgerechter Entsorgung.",
  keywords: "Entrümpelung, Haushaltsauflösung, Wohnungsauflösung, Keller entrümpeln, Büro entrümpeln, Darmstadt, Entsorgung",
  openGraph: {
    title: "Entrümpelung & Haushaltsauflösungen - HK Komfort Facility & Gebäudeservice GmbH",
    description: "Professionelle Entrümpelung und Haushaltsauflösungen in Darmstadt und Umgebung. Besenreine Räumung von Kellern, Wohnungen, Büros. Inkl. Trennung, Transport & fachgerechter Entsorgung.",
    url: "https://komfort-gebaeudeservice24.de/entruempelung",
    siteName: "HK Komfort Facility & Gebäudeservice GmbH",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://komfort-gebaeudeservice24.de/img/flux/entruempelung-vorher-nachher.webp",
        width: 1200,
        height: 630,
        alt: "Entrümpelung vorher nachher - Professionelle Haushaltsauflösung"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrümpelung & Haushaltsauflösungen - HK Komfort Facility & Gebäudeservice GmbH",
    description: "Professionelle Entrümpelung und Haushaltsauflösungen in Darmstadt und Umgebung. Besenreine Räumung von Kellern, Wohnungen, Büros. Inkl. Trennung, Transport & fachgerechter Entsorgung.",
    images: ["https://komfort-gebaeudeservice24.de/img/flux/entruempelung-vorher-nachher.webp"]
  },
  alternates: {
    canonical: "https://komfort-gebaeudeservice24.de/entruempelung"
  }
};

export default function Entrümpelung() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Header Section mit großer Überschrift und vollbreitem Hintergrundbild */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/flux/entruempelung-vorher-nachher.webp"
            alt="Entrümpelung - HK Komfort Facility & Gebäudeservice GmbH"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        </div>
        
        <Container className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase text-white drop-shadow-lg">ENTRÜMPELUNG & HAUSHALTSAUFLÖSUNGEN</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-100 drop-shadow-md">
                Professionelle Entrümpelung und Haushaltsauflösungen in Darmstadt und Umgebung. 
                Besenreine Räumung von Kellern, Wohnungen, Büros. Inkl. Trennung, Transport & fachgerechter Entsorgung.
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
              Wir übernehmen für Sie die komplette Entrümpelung und Haushaltsauflösung - professionell, diskret und zuverlässig.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Wohnungsauflösung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Komplette Räumung von Wohnungen nach Todesfällen, Umzügen oder Erbschaften. Wir entsorgen alles fachgerecht und dokumentieren den Prozess.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Kellerentrümpelung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Räumung und Reinigung von überfüllten Kellern. Wir entsorgen Sperrmüll, Elektroschrott und Wertstoffe fachgerecht und umweltgerecht.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Büroentrümpelung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Räumung von Büros nach Umzügen oder Firmenschließungen. Wir entsorgen Akten, Möbel und Elektronik fachgerecht und datenschutzkonform.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Wertgegenstände</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Bei Bedarf identifizieren und sichern wir Wertgegenstände und übergeben sie Ihnen. Wir arbeiten diskret und vertrauenswürdig.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Entsorgung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fachgerechte Trennung und Entsorgung von Sperrmüll, Elektroschrott, Papier und Wertstoffen. Wir arbeiten mit zertifizierten Entsorgungspartnern.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Diskretion</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Wir arbeiten diskret und vertrauenswürdig. Ihre Privatsphäre steht bei uns an erster Stelle, besonders bei sensiblen Fällen wie Nachlassauflösungen.
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
              Wir sind Ihr zuverlässiger Partner für Entrümpelungen und Haushaltsauflösungen in Darmstadt und Umgebung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Eigene Fachkräfte</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Keine Subunternehmer - nur geschultes, eigenes Personal. Wir garantieren Qualität und Zuverlässigkeit bei jeder Entrümpelung.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">Transparente Preise</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Klare, transparente Angebote ohne versteckte Kosten. Wir erstellen Ihnen ein kostenloses, unverbindliches Angebot.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-orange-400">Schnelle Terminvergabe</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Flexible Terminplanung nach Ihren Wünschen. Wir passen uns Ihrem Zeitplan an und garantieren pünktliches Erscheinen.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Fachgerechte Entsorgung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Wir trennen und entsorgen alle Materialien fachgerecht und umweltgerecht. Mit zertifizierten Entsorgungspartnern.
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
              <h3 className="text-xl font-bold mb-4">Beratung & Angebot</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Unverbindliche Beratung, umfassende Bedarfsanalyse und maßgeschneidertes Angebot. Wir nehmen uns Zeit für Ihre individuellen Anforderungen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-4">Terminvereinbarung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Flexible Terminplanung nach Ihren Wünschen. Wir passen uns Ihrem Zeitplan an und garantieren pünktliches Erscheinen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-4">Professionelle Durchführung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professionelle Ausführung durch erfahrene Fachkräfte mit modernster Technik. Wir arbeiten gründlich und effizient.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-4">Reinigung & Übergabe</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nach der Entrümpelung reinigen wir den Raum gründlich und übergeben ihn besenrein. Mit vollständiger Dokumentation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
              <h3 className="text-xl font-bold mb-4">Entsorgung & Rechnung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fachgerechte Trennung und Entsorgung aller Materialien. Klare, transparente Rechnung ohne versteckte Kosten.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">6</div>
              <h3 className="text-xl font-bold mb-4">Zufriedenheitsgarantie</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ihre Zufriedenheit ist unser Ziel. Wir bieten eine Zufriedenheitsgarantie und stehen auch nach der Entrümpelung für Sie zur Verfügung.
              </p>
            </div>
          </div>
        </Section>
      </Container>

      {/* CTA Section */}
      <CtaSection 
        backgroundImage="/img/flux/entruempelung-vorher-nachher.webp"
        backgroundAlt="Entrümpelung - Kontaktieren Sie uns für ein kostenloses Angebot"
        title="Bereit für eine professionelle Entrümpelung?"
        description="Kontaktieren Sie uns noch heute für eine unverbindliche Beratung zu Ihrer Entrümpelung oder Haushaltsauflösung."
        buttonText="Kostenloses Angebot anfordern"
        buttonLink="/kontakt"
      />
    </div>
  );
}