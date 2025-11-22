import { Container } from '@/components/Container';
import Image from 'next/image';
import { Metadata } from "next";

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
            src="/img/flux/team-geschaeftsfuehrerteam1.webp"
            alt="Über uns - Solar Komfort"
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
        <section id="unternehmen" className="py-16">
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
        </section>
        
        {/* Team Section */}
        <section id="team" className="py-16">
          <h2 className="text-4xl font-bold mb-10 uppercase tracking-wide text-center">UNSER TEAM</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105">
              <div className="p-6 text-center">
                <div className="w-40 h-40 mx-auto mb-6 relative">
                  <Image 
                    src="/img/flux/team-geschaeftsfuehrerteam1.webp"
                    alt="Max Mustermann - Geschäftsführer"
                    fill
                    className="rounded-full object-cover border-4 border-blue-600"
                  />
                </div>
                <h3 className="text-2xl font-bold">Max Mustermann</h3>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">Geschäftsführer</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Leitet das Unternehmen seit der Gründung und bringt über 20 Jahre Erfahrung in der Branche mit.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105">
              <div className="p-6 text-center">
                <div className="w-40 h-40 mx-auto mb-6 relative">
                  <Image 
                    src="/img/flux/team-projektleiterimage.webp"
                    alt="Anna Schmidt - Projektleiterin"
                    fill
                    className="rounded-full object-cover border-4 border-blue-600"
                  />
                </div>
                <h3 className="text-2xl font-bold">Anna Schmidt</h3>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">Projektleiterin</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Koordiniert alle Projekte und sorgt für einen reibungslosen Ablauf und höchste Kundenzufriedenheit.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105">
              <div className="p-6 text-center">
                <div className="w-40 h-40 mx-auto mb-6 relative">
                  <Image 
                    src="/img/flux/team-technischer-leiterimage.webp"
                    alt="Thomas Weber - Technischer Leiter"
                    fill
                    className="rounded-full object-cover border-4 border-blue-600"
                  />
                </div>
                <h3 className="text-2xl font-bold">Thomas Weber</h3>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">Technischer Leiter</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Verantwortlich für alle technischen Aspekte und die Weiterentwicklung unserer Reinigungsmethoden.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Ausrüstung Section */}
        <section id="ausruestung" className="py-16">
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
        </section>
        
        {/* Philosophie Section */}
        <section id="philosophie" className="py-16">
          <div className="bg-blue-600 dark:bg-blue-800 text-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-10 md:p-16">
              <h2 className="text-4xl font-bold mb-8 uppercase tracking-wide text-center">UNSERE PHILOSOPHIE</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl mb-6">
                  Wir arbeiten nach dem Grundsatz: "Qualität ist kein Zufall, sondern das Ergebnis intelligenter Bemühungen."
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
        </section>
      </Container>
      
      {/* CTA Section - Vollbreites Bild mit Text-Overlay */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/flux/firmenfahrzeug-solar-komfort1.webp"
            alt="Kontaktieren Sie uns für ein Angebot"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">KONTAKTIEREN SIE UNS</h2>
            <p className="text-xl mb-8 text-gray-100 drop-shadow-md">
              Haben Sie Fragen zu unseren Dienstleistungen oder möchten Sie ein unverbindliches Angebot erhalten? Unser Team steht Ihnen gerne zur Verfügung.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:061511546592"
                className="px-8 py-4 text-lg font-bold text-center text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center"
              >
                <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06151 15 465 92
              </a>
              <a
                href="/kostenrechner"
                className="px-8 py-4 text-lg font-bold text-center text-white bg-orange-500 rounded-xl hover:bg-orange-600 transition-colors shadow-lg"
              >
                Kostenrechner starten
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}