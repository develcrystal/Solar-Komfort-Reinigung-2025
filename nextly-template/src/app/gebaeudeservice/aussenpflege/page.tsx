import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';
import { Metadata } from "next";
import { CtaSection } from '@/components/CtaSection';

export const metadata: Metadata = {
  title: "Außenpflege & saisonale Dienste - HK Komfort Facility & Gebäudeservice GmbH",
  description: "Professionelle Außenpflege in Darmstadt und Umgebung. Terrassen- & Pflasterreinigung, Spielplatzkontrolle, Mülltonnendienst, Sonderaufträge.",
  keywords: "Außenpflege, Pflasterreinigung, Terrassenreinigung, Saisonarbeiten, Darmstadt, Außenanlagen",
  openGraph: {
    title: "Außenpflege & saisonale Dienste - HK Komfort Facility & Gebäudeservice GmbH",
    description: "Professionelle Außenpflege in Darmstadt und Umgebung. Terrassen- & Pflasterreinigung, Spielplatzkontrolle, Mülltonnendienst, Sonderaufträge.",
    url: "https://komfort-gebaeudeservice24.de/aussenpflege",
    siteName: "HK Komfort Facility & Gebäudeservice GmbH",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/img/flux/unser-furhpark.webp",
        width: 1200,
        height: 630,
        alt: "Außenpflege - Professionelle Außenanlagenbetreuung"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Außenpflege & saisonale Dienste - HK Komfort Facility & Gebäudeservice GmbH",
    description: "Professionelle Außenpflege in Darmstadt und Umgebung. Terrassen- & Pflasterreinigung, Spielplatzkontrolle, Mülltonnendienst, Sonderaufträge.",
    images: ["/img/flux/unser-furhpark.webp"]
  },
  alternates: {
    canonical: "https://komfort-gebaeudeservice24.de/aussenpflege"
  }
};

export default function Aussenpflege() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Header Section mit großer Überschrift und vollbreitem Hintergrundbild */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/kundenbilder/Gartenpflege.png"
            alt="Außenpflege - HK Komfort Facility & Gebäudeservice GmbH"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        </div>
        
        <Container className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase text-white drop-shadow-lg">AUßENPFLEGE & SAISONALE DIENSTE</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-100 drop-shadow-md">
                Professionelle Außenpflege in Darmstadt und Umgebung. 
                Terrassen- & Pflasterreinigung, Spielplatzkontrolle, Mülltonnendienst, Sonderaufträge.
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
              Wir übernehmen für Sie die professionelle Außenpflege - zuverlässig, kompetent und saisonal angepasst.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Terrassenreinigung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professionelle Reinigung von Holz- und Steinterrassen. Entfernung von Moos, Algen und Verschmutzungen. Schutzbehandlung auf Wunsch.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Pflasterreinigung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Hochdruckreinigung von Pflastersteinen, Gehwegen und Parkplätzen. Entfernung von Moos, Unkraut und Verschmutzungen. Fugenversiegelung auf Wunsch.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Spielplatzkontrolle</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Regelmäßige Kontrolle von Spielplätzen auf Sicherheitsmängel, Schäden und Reinigungsbedarf. Wir sorgen für sichere Spielplätze.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Mülltonnendienst</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Regelmäßiger Mülltonnendienst. Herausstellen und Zurückstellen der Mülltonnen. Reinigung der Tonnen auf Wunsch.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Saisonarbeiten</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Saisonale Arbeiten im Frühjahr, Sommer, Herbst und Winter. Vorbereitung und Absicherung von Außenanlagen für die jeweilige Jahreszeit.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Sonderaufträge</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Individuelle Sonderaufträge für Ihre Außenanlagen. Wir übernehmen Aufgaben, die über den Standard hinausgehen.
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
              Wir sind Ihr zuverlässiger Partner für professionelle Außenpflege in Darmstadt und Umgebung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Eigene Fachkräfte</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Keine Subunternehmer - nur geschultes, eigenes Personal. Wir garantieren Qualität und Zuverlässigkeit bei jeder Außenpflege.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">Saisonale Anpassung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Wir passen unsere Außenpflege saisonal an. Frühjahrsputz, Sommerbetreuung, Herbstreinigung und Winterschutz.
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
                Wir verwenden moderne, leistungsstarke und schonende Gartengeräte für effiziente und schonende Außenpflege.
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
                Unverbindliche Beratung, umfassende Analyse Ihrer Außenanlagen und maßgeschneidertes Angebot. Wir nehmen uns Zeit für Ihre individuellen Anforderungen.
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
              <h3 className="text-xl font-bold mb-4">Außenpflege</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professionelle Außenpflege durch erfahrene Fachkräfte mit modernster Technik. Wir arbeiten gründlich und effizient.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-4">Saisonale Anpassung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Wir passen die Außenpflege saisonal an. Frühjahrsputz, Sommerbetreuung, Herbstreinigung und Winterschutz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
              <h3 className="text-xl font-bold mb-4">Dokumentation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ausführliche Dokumentation der durchgeführten Arbeiten. Wir informieren Sie über den Zustand Ihrer Außenanlagen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">6</div>
              <h3 className="text-xl font-bold mb-4">Regelmäßige Betreuung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Bei Bedarf übernehmen wir die regelmäßige Außenbetreuung. Wir passen den Pflegeplan saisonal an.
              </p>
            </div>
          </div>
        </Section>
      </Container>

      {/* CTA Section */}
      <CtaSection 
        backgroundImage="/img/flux/aussenpflege-prozess.webp"
        backgroundAlt="Außenpflege - Kontaktieren Sie uns für ein kostenloses Angebot"
        title="Bereit für eine professionelle Außenpflege?"
        description="Kontaktieren Sie uns noch heute für eine unverbindliche Beratung zu Ihrer Außenpflege."
        buttonText="Kostenloses Angebot anfordern"
        buttonLink="/kontakt"
      />
    </div>
  );
}