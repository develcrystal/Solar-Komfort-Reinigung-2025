import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';
import { Metadata } from "next";
import { CtaSection } from '@/components/CtaSection';

export const metadata: Metadata = {
  title: "Über uns - Clean Komfort Gebäudeservice24 GmbH | Facility Management & Gebäudereinigung",
  description: "Lernen Sie das Team der Clean Komfort Gebäudeservice24 GmbH kennen. Erfahrene Experten für ganzheitliche Gebäudereinigung, technischen Service und intelligentes Facility Management. Als Tochterunternehmen der Solar Komfort GmbH vereinen wir jahrelange Erfahrung aus Handwerk, Reinigung, Technik und Objektmanagement.",
  keywords: "Clean Komfort Gebäudeservice24 Team, Facility Management, Darmstadt, Gebäudereinigung Experten, Über uns, Unternehmensgeschichte",
  openGraph: {
    title: "Über uns - Clean Komfort Gebäudeservice24 GmbH | Facility Management & Gebäudereinigung",
    description: "Lernen Sie das Team der Clean Komfort Gebäudeservice24 GmbH kennen. Erfahrene Experten für ganzheitliche Gebäudereinigung, technischen Service und intelligentes Facility Management. Als Tochterunternehmen der Solar Komfort GmbH vereinen wir jahrelange Erfahrung aus Handwerk, Reinigung, Technik und Objektmanagement.",
    url: "https://komfort-gebaeudeservice24.de/ueber-uns",
    siteName: "Clean Komfort Gebäudeservice24 GmbH",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Über uns - Clean Komfort Gebäudeservice24 GmbH | Facility Management & Gebäudereinigung",
    description: "Lernen Sie das Team der Clean Komfort Gebäudeservice24 GmbH kennen. Erfahrene Experten für ganzheitliche Gebäudereinigung, technischen Service und intelligentes Facility Management. Als Tochterunternehmen der Solar Komfort GmbH vereinen wir jahrelange Erfahrung aus Handwerk, Reinigung, Technik und Objektmanagement.",
    images: ["/img/flux/team-gruppenfoto1.webp"]
  },
  alternates: {
    canonical: "https://komfort-gebaeudeservice24.de/ueber-uns"
  }
};

export default function UeberUns() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Header Section mit großer Überschrift und vollbreitem Hintergrundbild */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/flux/team-gruppenfoto1.webp"
            alt="Clean Komfort Gebäudeservice24 GmbH - Unser motiviertes Team für professionelle Gebäudereinigung und Service"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        </div>
        
        <Container className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase text-white drop-shadow-lg">ÜBER UNS</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-100 drop-shadow-md">
                Clean Komfort Gebäudeservice24 GmbH ist Ihr zuverlässiger Partner für ganzheitliche Gebäudereinigung, technischen Service und intelligentes Facility Management. 
                Als Tochterunternehmen der Solar Komfort GmbH vereinen wir jahrelange Erfahrung aus Handwerk, Reinigung, Technik und Objektmanagement.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        {/* Unternehmen Section */}
        <Section id="unternehmen" className="mt-12 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-4xl font-bold mb-6 uppercase tracking-wide">UNSER UNTERNEHMEN</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                    Wir sind **Clean Komfort Gebäudeservice24 GmbH**, Tochterunternehmen der Solar Komfort GmbH. Unsere Gründer Mohamed Kaddouri & Abdelhafid Hajjout vereinen jahrelange Erfahrung aus Handwerk, Solartechnik und professioneller Gebäudebetreuung.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Unsere Stärken:
                  </p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Eigene Fachkräfte (keine Subunternehmer)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Zertifizierungen & Sachkunde (z. B. Dach, PV)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Strukturierte Prozesse & transparente Angebote</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Liebe zum Detail & feste Ansprechpartner</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">Unsere Werte</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Qualität und Präzision bei jedem Auftrag</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Umweltfreundliche und nachhaltige Methoden</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Transparente Kommunikation und faire Preise</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Kontinuierliche Weiterbildung unseres Teams</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Trust-Elemente Section - Siegel & Zertifizierungen */}
        <Section id="vertrauen" className="mt-0 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-4xl font-bold mb-10 uppercase tracking-wide text-center">WARUM UNS VERTRAUEN?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Siegel 1: Qualität */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center mb-6 shadow-lg">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 dark:text-blue-300">✓</div>
                      <div className="text-sm font-semibold text-blue-600 dark:text-blue-300 mt-1">ZERTIFIZIERT</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">SCC & Sachkunde</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Zertifizierte Fachkräfte mit gültigen Sachkundenachweisen und Sicherheitsschulungen. Regelmäßige Auffrischung garantiert.
                  </p>
                </div>

                {/* Siegel 2: Erfahrung */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900 dark:to-green-800 flex items-center justify-center mb-6 shadow-lg">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 dark:text-green-300">10+</div>
                      <div className="text-sm font-semibold text-green-600 dark:text-green-300 mt-1">JAHRE</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">10+ Jahre Erfahrung</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Über ein Jahrzehnt Erfahrung in professioneller Gebäudereinigung, Dachbetreuung und technischem Service. Bewährt & zuverlässig.
                  </p>
                </div>

                {/* Siegel 3: Zufriedenheit */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900 dark:to-purple-800 flex items-center justify-center mb-6 shadow-lg">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 dark:text-purple-300">100%</div>
                      <div className="text-sm font-semibold text-purple-600 dark:text-purple-300 mt-1">ZUFRIEDENHEIT</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">100% Kundenzufriedenheit</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Persönliche Betreuung & sofortige Reaktion. Zufriedenheit garantiert oder Geld zurück. Ihre Zufriedenheit ist unser Anspruch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Team Section - Neu gestaltet mit modernem Layout */}
        <Section id="team" className="mt-0 mb-12 !py-0">
          <h2 className="text-4xl font-bold mb-10 uppercase tracking-wide text-center">UNSER TEAM</h2>
          
          
          {/* Team-Gruppenfotos mit interaktivem Layout */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400 text-center">Unser Gesamtteam</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Linke Spalte - Großes Bild */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/img/kundenbilder/team-model-reinigung.webp"
                  alt="Unser freundliches Teammitglied bei der Reinigungsarbeit"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                  <h4 className="text-white text-2xl font-bold mb-2">Das Clean Komfort Gebäudeservice24 Team</h4>
                  <p className="text-white/90 mb-4">
                    Unser engagiertes Team aus über 25 Fachkräften steht für Qualität und Zuverlässigkeit.
                  </p>
                </div>
              </div>
              
              {/* Rechte Spalte - Infos und kleinere Bilder */}
              <div className="flex flex-col justify-between">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
                  <h4 className="text-xl font-bold mb-4">Unsere Teamphilosophie</h4>
                  <div className="prose prose-sm dark:prose-invert">
                    <p>
                      Das Herzstück der Clean Komfort Gebäudeservice24 GmbH ist unser engagiertes und hochqualifiziertes Team aus Fachkräften. Mit über 25 Mitarbeitern, darunter Dachdecker, Maler, Gebäudereiniger und Techniker, decken wir alle Kompetenzbereiche ab.
                    </p>
                    <p>
                      Jedes Teammitglied durchläuft ein umfassendes Schulungsprogramm und nimmt regelmäßig an Weiterbildungen teil. Unsere Mitarbeiter sind nicht nur fachlich kompetent, sondern auch für ihre Zuverlässigkeit, Pünktlichkeit und ihren freundlichen Umgang mit Kunden bekannt.
                    </p>
                  </div>
                </div>
                
                {/* Team-Statistiken */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-blue-600 text-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold mb-2">25+</span>
                    <span className="text-sm text-center">Fachkräfte im Team</span>
                  </div>
                  <div className="bg-green-600 text-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold mb-2">12+</span>
                    <span className="text-sm text-center">Jahre Erfahrung</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fachbereiche - Moderne Darstellung mit Icons */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400 text-center">Unsere Fachbereiche</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Dachdecker */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">Dachdecker</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Unsere Dachdecker-Experten sorgen für fachgerechte Reinigung und Instandhaltung aller Dachtypen.
                </p>
              </div>
              
              {/* Maler */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">Maler & Beschichter</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Spezialisiert auf langlebige und witterungsbeständige Dach- und Fassadenbeschichtungen.
                </p>
              </div>
              
              {/* Gebäudereiniger */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">Gebäudereiniger</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Professionelle Reinigung von Fassaden und Solaranlagen mit umweltfreundlichen Verfahren.
                </p>
              </div>
              
              {/* Techniker */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 text-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">Techniker</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Entwicklung und Anwendung innovativer Technologien für effiziente und nachhaltige Lösungen.
                </p>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Ausrüstung Section */}
        <Section id="ausruestung" className="mt-0 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-4xl font-bold mb-8 uppercase tracking-wide">UNSERE AUSRÜSTUNG</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <div className="relative h-80 mb-6">
                    <Image 
                      src="/img/flux/professionelle-ausruestung1.webp"
                      alt="Professionelle Ausrüstung für Dachreinigung"
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Modernste Reinigungsgeräte</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Wir setzen auf hochwertige Geräte und innovative Technologien, um optimale Ergebnisse zu erzielen und gleichzeitig die Umwelt zu schonen.
                  </p>
                </div>
                <div>
                  <div className="relative h-80 mb-6">
                    <Image 
                      src="/img/flux/firmenfahrzeug-solar-komfort4.webp"
                      alt="Firmenfahrzeug Solar Komfort"
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Unser Fuhrpark</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Mit unserem modernen Fuhrpark sind wir flexibel und können schnell bei Ihnen vor Ort sein. Alle Fahrzeuge sind mit der notwendigen Ausrüstung ausgestattet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Philosophie Section */}
        <Section id="philosophie" className="mt-0 mb-12">
          <div className="bg-blue-600 dark:bg-blue-800 text-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-10 md:p-16">
              <h2 className="text-4xl font-bold mb-8 uppercase tracking-wide text-center">UNSERE PHILOSOPHIE</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl mb-6">
                  Wir arbeiten nach dem Grundsatz: &ldquo;Qualität ist kein Zufall, sondern das Ergebnis intelligenter Bemühungen.&rdquo;
                </p>
                <p className="text-xl mb-6">
                  Unser Ziel ist es, nicht nur die Erwartungen unserer Kunden zu erfüllen, sondern sie zu übertreffen. 
                  Wir setzen auf nachhaltige Lösungen, die sowohl für unsere Kunden als auch für die Umwelt von Vorteil sind.
                </p>
                <p className="text-xl">
                  Kontinuierliche Verbesserung und Innovation sind Teil unserer DNA. Wir bilden uns ständig weiter, 
                  um Ihnen die besten Lösungen und Dienstleistungen anbieten zu können.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </Container>
      
      <CtaSection 
        backgroundImage="/img/flux/firmenfahrzeug-solar-komfort1.webp"
        backgroundAlt="Kontaktieren Sie uns für ein persönliches Gespräch"
        title="Bereit für die Experten von Clean Komfort Gebäudeservice24?"
        description="Kontaktieren Sie unser erfahrenes Team noch heute für eine unverbindliche Beratung zu Ihrem Dachprojekt."
      />
    </div>
  );
}