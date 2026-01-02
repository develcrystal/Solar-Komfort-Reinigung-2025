import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Image from 'next/image';
import { Metadata } from "next";
import { CtaSection } from '@/components/CtaSection';

export const metadata: Metadata = {
  title: "Über uns - Solar Komfort GmbH | Ihr Experte für Dachbeschichtung",
  description: "Lernen Sie das Team der Solar Komfort GmbH kennen. Erfahrene Experten für Dachreinigung und Dachbeschichtung mit modernster Ausrüstung in Darmstadt und Umgebung.",
  keywords: "Solar Komfort Team, Dachexperten, Darmstadt, Dachbeschichtung Experten, Über uns, Unternehmensgeschichte",
  openGraph: {
    title: "Über uns - Solar Komfort GmbH | Ihr Experte für Dachbeschichtung",
    description: "Lernen Sie das Team der Solar Komfort GmbH kennen. Erfahrene Experten für Dachreinigung und Dachbeschichtung mit modernster Ausrüstung in Darmstadt und Umgebung.",
    url: "https://solar-komfort.de/ueber-uns",
    siteName: "Solar Komfort GmbH",
    locale: "de_DE",
    type: "website",
  },
};

export default function UeberUns() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Header Section mit großer Überschrift und vollbreitem Hintergrundbild */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/flux/team-gruppenfoto2.webp"
            alt="Über uns - Solar Komfort Team"
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
                Solar Komfort GmbH ist Ihr zuverlässiger Partner für professionelle Dach- und Fassadenreinigung sowie Dachbeschichtung.
                Mit jahrelanger Erfahrung und modernster Technik sorgen wir für langanhaltende Sauberkeit und Schutz Ihrer Immobilie.
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
                    Unser Unternehmen wurde 2010 gegründet und hat sich seitdem zu einem führenden Anbieter in der Region entwickelt.
                    Wir legen großen Wert auf Qualität, Nachhaltigkeit und Kundenzufriedenheit.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Mit einem Team aus erfahrenen Fachleuten und modernster Ausrüstung bieten wir Ihnen Dienstleistungen auf höchstem Niveau.
                    Unsere Kunden schätzen unsere Zuverlässigkeit, Pünktlichkeit und die hervorragende Qualität unserer Arbeit.
                  </p>
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

        {/* Trust-Elemente Section */}
        <Section id="vertrauen" className="mt-0 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-4xl font-bold mb-10 uppercase tracking-wide text-center">WARUM UNS VERTRAUEN?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/img/flux/badge-qualitaet.webp"
                    alt="Premium Qualität"
                    width={180}
                    height={180}
                    className="mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-3">Premium Qualität</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Wir verwenden ausschließlich hochwertige Materialien und arbeiten mit modernsten Techniken für ein optimales Ergebnis.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/img/flux/badge-erfahrung.webp"
                    alt="10 Jahre Erfahrung"
                    width={180}
                    height={180}
                    className="mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-3">10 Jahre Erfahrung</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Seit über einem Jahrzehnt sind wir Ihr zuverlässiger Partner für alle Dach- und Fassadenarbeiten in der Region.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/img/flux/badge-kundenzufriedenheit.webp"
                    alt="99% Kundenzufriedenheit"
                    width={180}
                    height={180}
                    className="mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-3">99% Kundenzufriedenheit</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Die Zufriedenheit unserer Kunden steht für uns an erster Stelle. Wir arbeiten erst dann ab, wenn Sie vollständig zufrieden sind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Team Section - Neu gestaltet mit modernem Layout */}
        <Section id="team" className="mt-0 mb-12 !py-0">
          <h2 className="text-4xl font-bold mb-10 uppercase tracking-wide text-center">UNSER TEAM</h2>

          {/* Führungsteam - Moderne Karten mit Hover-Effekt */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400 text-center">Führungsteam</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Geschäftsführer */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative h-80">
                  <Image
                    src="/img/flux/team-geschaeftsfuehrerteam1.webp"
                    alt="Max Mustermann - Geschäftsführer"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white text-sm">
                      &ldquo;Qualität und Nachhaltigkeit sind keine Trends, sondern unsere Grundwerte.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold">Max Mustermann</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Geschäftsführer</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    20+ Jahre Erfahrung in der Dachsanierung und -beschichtung. Zertifizierter Experte für nachhaltige Gebäudesanierung.
                  </p>
                  <div className="flex space-x-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      Dachdeckermeister
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      BWL
                    </span>
                  </div>
                </div>
              </div>

              {/* Projektleiterin */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative h-80">
                  <Image
                    src="/img/flux/team-projektleiterimage.webp"
                    alt="Anna Schmidt - Projektleiterin"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white text-sm">
                      &ldquo;Jedes Projekt ist einzigartig und verdient eine maßgeschneiderte Lösung.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold">Anna Schmidt</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Projektleiterin</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Expertin für Bauprojektmanagement mit Fokus auf denkmalgeschützte Gebäude und Wohnanlagen.
                  </p>
                  <div className="flex space-x-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      Architektur
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                      PMI-Zertifiziert
                    </span>
                  </div>
                </div>
              </div>

              {/* Technischer Leiter */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative h-80">
                  <Image
                    src="/img/flux/team-technischer-leiterimage.webp"
                    alt="Thomas Weber - Technischer Leiter"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white text-sm">
                      &quot;Innovation und Tradition im perfekten Gleichgewicht.&quot;
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold">Thomas Weber</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Technischer Leiter</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Entwickelt spezialisierte Reinigungsverfahren und umweltfreundliche Beschichtungstechniken.
                  </p>
                  <div className="flex space-x-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                      Dachdeckermeister
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                      Sachverständiger
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team-Gruppenfotos mit interaktivem Layout */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400 text-center">Unser Gesamtteam</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Linke Spalte - Großes Bild */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/img/flux/team-gruppenfoto-neu.webp"
                  alt="Unser Team"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                  <h4 className="text-white text-2xl font-bold mb-2">Das Solar Komfort Team</h4>
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
                      Das Herzstück der Solar Komfort GmbH ist unser engagiertes und hochqualifiziertes Team aus Fachkräften. Mit über 25 Mitarbeitern, darunter Dachdecker, Maler, Gebäudereiniger und Techniker, decken wir alle Kompetenzbereiche ab.
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
                      src="/img/flux/firmenfahrzeug-solar-komfort1.webp"
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
        title="Bereit für die Experten von Solar Komfort?"
        description="Kontaktieren Sie unser erfahrenes Team noch heute für eine unverbindliche Beratung zu Ihrem Dachprojekt."
      />
    </div>
  );
}
