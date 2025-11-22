import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';
import { Metadata } from "next";
import { CtaSection } from '@/components/CtaSection';

export const metadata: Metadata = {
  title: "Gartenpflege - HK Komfort Facility & Gebäudeservice GmbH",
  description: "Professionelle Gartenpflege in Darmstadt und Umgebung. Rasenmähen, Hecken schneiden, Laub entfernen, Beetpflege – regelmäßig oder saisonal buchbar.",
  keywords: "Gartenpflege, Rasenmähen, Heckenschnitt, Blumenbeete, Darmstadt, Außenanlagen",
  openGraph: {
    title: "Gartenpflege - HK Komfort Facility & Gebäudeservice GmbH",
    description: "Professionelle Gartenpflege in Darmstadt und Umgebung. Rasenmähen, Hecken schneiden, Laub entfernen, Beetpflege – regelmäßig oder saisonal buchbar.",
    url: "https://komfort-gebaeudeservice24.de/gartenpflege",
    siteName: "HK Komfort Facility & Gebäudeservice GmbH",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/img/flux/einsatz-beim-kunden1.webp",
        width: 1200,
        height: 630,
        alt: "Gartenpflege - Professionelle Gartenbetreuung"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Gartenpflege - HK Komfort Facility & Gebäudeservice GmbH",
    description: "Professionelle Gartenpflege in Darmstadt und Umgebung. Rasenmähen, Hecken schneiden, Laub entfernen, Beetpflege – regelmäßig oder saisonal buchbar.",
    images: ["/img/flux/einsatz-beim-kunden1.webp"]
  },
  alternates: {
    canonical: "https://komfort-gebaeudeservice24.de/gartenpflege"
  }
};

export default function Gartenpflege() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Header Section mit großer Überschrift und vollbreitem Hintergrundbild */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/kundenbilder/Gartenpflege (1).webp"
            alt="Gartenpflege - Professionelle Gartenbetreuung in Darmstadt"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        </div>
        
        <Container className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase text-white drop-shadow-lg">GARTENPFLEGE</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-100 drop-shadow-md">
                Professionelle Gartenpflege in Darmstadt und Umgebung. 
                Rasenmähen, Hecken schneiden, Laub entfernen, Beetpflege – regelmäßig oder saisonal buchbar.
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
              Wir übernehmen für Sie die professionelle Gartenpflege - zuverlässig, kompetent und nachhaltig.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Rasenmähen</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Regelmäßiges Rasenmähen mit qualitativ hochwertigen Rasenmähern. Wir achten auf die richtige Schnitthöhe und Mährichtung für gesunden Rasen.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Heckenschnitt</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professioneller Heckenschnitt für Hecken aus Buchsbaum, Liguster, Thuja und anderen Heckenpflanzen. Wir schneiden formschön und pflanzengerecht.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Laub entfernen</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Effiziente Entfernung von Laub im Herbst mit Laubsaugern und -bläsern. Wir hinterlassen Ihren Garten sauber und ordentlich.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Beetpflege</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Pflege von Blumenbeeten, Staudenbeeten und Gemüsebeeten. Unkraut jäten, mulchen, Düngung und saisonale Pflanzarbeiten.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Schnittgutentsorgung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fachgerechte Entsorgung von Gartenabfällen. Wir kompostieren organische Abfälle und entsorgen Restmüll umweltgerecht.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Garteninspektion</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Regelmäßige Garteninspektion auf Schäden, Krankheiten und Pflegebedarf. Wir melden Probleme frühzeitig und schlagen Lösungen vor.
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
              Wir sind Ihr zuverlässiger Partner für professionelle Gartenpflege in Darmstadt und Umgebung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Eigene Fachkräfte</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Keine Subunternehmer - nur geschultes, eigenes Personal. Wir garantieren Qualität und Zuverlässigkeit bei jeder Gartenpflege.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">Nachhaltige Pflege</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Wir arbeiten nachhaltig und umweltfreundlich. Kompostierung von Gartenabfällen und Verzicht auf chemische Unkrautvernichter.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-orange-400">Flexible Buchung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Regelmäßige oder saisonale Buchung möglich. Monatlich, wöchentlich oder einmalig - wir passen uns Ihren Bedürfnissen an.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Moderne Ausrüstung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Wir verwenden moderne, leistungsstarke und leise Gartengeräte für effiziente und schonende Gartenpflege.
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
                Unverbindliche Beratung, umfassende Gartenanalyse und maßgeschneidertes Angebot. Wir nehmen uns Zeit für Ihre individuellen Anforderungen.
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
              <h3 className="text-xl font-bold mb-4">Gartenpflege</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professionelle Gartenpflege durch erfahrene Fachkräfte mit modernster Technik. Wir arbeiten gründlich und effizient.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-4">Schnittgutentsorgung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fachgerechte Entsorgung und Kompostierung von Gartenabfällen. Wir hinterlassen Ihren Garten sauber und ordentlich.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
              <h3 className="text-xl font-bold mb-4">Dokumentation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ausführliche Dokumentation der durchgeführten Arbeiten. Wir informieren Sie über den Zustand Ihres Gartens.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">6</div>
              <h3 className="text-xl font-bold mb-4">Regelmäßige Betreuung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Bei Bedarf übernehmen wir die regelmäßige Gartenbetreuung. Wir passen den Pflegeplan saisonal an.
              </p>
            </div>
          </div>
        </Section>
      </Container>

      {/* CTA Section */}
      <CtaSection 
        backgroundImage="/img/flux/referenz-einfamilienhaus2.webp"
        backgroundAlt="Gartenpflege - Kontaktieren Sie uns für ein kostenloses Angebot"
        title="Bereit für eine professionelle Gartenpflege?"
        description="Kontaktieren Sie uns noch heute für eine unverbindliche Beratung zu Ihrer Gartenpflege."
        buttonText="Kostenloses Angebot anfordern"
        buttonLink="/kontakt"
      />
    </div>
  );
}