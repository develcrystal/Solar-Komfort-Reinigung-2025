import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
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
        <Section id="unternehmen">
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
        
        {/* Team Section */}
        <Section id="team">
          <h2 className="text-4xl font-bold mb-10 uppercase tracking-wide text-center">UNSER TEAM</h2>
          
          {/* Geschäftsführung */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Geschäftsführung</h3>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="relative h-96">
                  <Image 
                    src="/img/flux/team-geschaeftsfuehrerteam1.webp"
                    alt="Max Mustermann - Geschäftsführer"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-2xl font-bold mb-2">Max Mustermann</h4>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">Geschäftsführer</p>
                  <div className="prose prose-lg dark:prose-invert">
                    <p>
                      Als Gründer und Geschäftsführer der Solar Komfort GmbH bringt Max Mustermann über 20 Jahre Erfahrung in der Dachsanierung und -beschichtung mit. Seine Karriere begann er als Dachdecker, wo er das Handwerk von Grund auf erlernte und ein tiefes Verständnis für die Bedürfnisse von Immobilienbesitzern entwickelte.
                    </p>
                    <p>
                      Nach seiner Meisterprüfung und einem Studium der Betriebswirtschaft gründete er 2010 die Solar Komfort GmbH mit dem Ziel, hochwertige und nachhaltige Lösungen für Dach- und Fassadenreinigung sowie Dachbeschichtung anzubieten. Unter seiner Führung hat sich das Unternehmen zu einem der führenden Anbieter in der Region entwickelt.
                    </p>
                    <p>
                      Max legt besonderen Wert auf umweltfreundliche Verfahren und innovative Technologien. Er ist zertifizierter Experte für nachhaltige Gebäudesanierung und regelmäßiger Referent auf Fachmessen zum Thema Dacherhaltung und Energieeffizienz. Seine Vision ist es, durch qualitativ hochwertige Dachbeschichtungen die Lebensdauer von Dächern zu verlängern und gleichzeitig den ökologischen Fußabdruck zu reduzieren.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Projektleitung */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Projektleitung</h3>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="flex flex-col justify-center order-2 md:order-1">
                  <h4 className="text-2xl font-bold mb-2">Anna Schmidt</h4>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">Projektleiterin</p>
                  <div className="prose prose-lg dark:prose-invert">
                    <p>
                      Anna Schmidt ist seit 2015 als Projektleiterin bei der Solar Komfort GmbH tätig und verantwortet die reibungslose Planung und Durchführung aller Kundenprojekte. Mit ihrem Hintergrund in Architektur und Bauprojektmanagement bringt sie ein umfassendes Verständnis für die technischen und logistischen Anforderungen komplexer Dach- und Fassadenprojekte mit.
                    </p>
                    <p>
                      Ihre Expertise umfasst die detaillierte Analyse von Dachzuständen, die Entwicklung maßgeschneiderter Sanierungskonzepte und die Koordination der Arbeitsabläufe. Durch ihre strukturierte Arbeitsweise und ihr Auge fürs Detail stellt sie sicher, dass jedes Projekt termingerecht, im Budgetrahmen und mit höchster Qualität abgeschlossen wird.
                    </p>
                    <p>
                      Anna hat zahlreiche Großprojekte im Bereich der Dachsanierung erfolgreich geleitet, darunter mehrere denkmalgeschützte Gebäude und große Wohnanlagen. Sie ist zertifizierte Projektmanagerin nach PMI-Standards und bildet sich kontinuierlich in den Bereichen nachhaltige Baustoffe und energieeffiziente Dachsysteme weiter. Ihr Engagement für Kundenzufriedenheit und ihre lösungsorientierte Herangehensweise machen sie zu einer wertvollen Ansprechpartnerin für unsere Kunden.
                    </p>
                  </div>
                </div>
                <div className="relative h-96 order-1 md:order-2">
                  <Image 
                    src="/img/flux/team-projektleiterimage.webp"
                    alt="Anna Schmidt - Projektleiterin"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Technische Leitung */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Technische Leitung</h3>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="relative h-96">
                  <Image 
                    src="/img/flux/team-technischer-leiterimage.webp"
                    alt="Thomas Weber - Technischer Leiter"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-2xl font-bold mb-2">Thomas Weber</h4>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">Technischer Leiter</p>
                  <div className="prose prose-lg dark:prose-invert">
                    <p>
                      Thomas Weber leitet seit 2012 den technischen Bereich der Solar Komfort GmbH und ist verantwortlich für die Qualitätssicherung und technische Innovation unserer Dienstleistungen. Mit seinem Hintergrund als Dachdeckermeister und Bautechniker bringt er fundiertes Fachwissen und praktische Erfahrung in alle Aspekte der Dach- und Fassadenarbeiten ein.
                    </p>
                    <p>
                      Er hat maßgeblich zur Entwicklung unserer spezialisierten Reinigungsverfahren und Beschichtungstechniken beigetragen, die besonders schonend und effektiv sind. Unter seiner Leitung wurden zahlreiche Prozesse optimiert und neue umweltfreundliche Materialien in unser Portfolio aufgenommen. Thomas ist Experte für moderne Dachbeschichtungssysteme und deren Anwendung auf verschiedenen Dachtypen.
                    </p>
                    <p>
                      Seine kontinuierliche Forschung und Zusammenarbeit mit führenden Herstellern von Dachbeschichtungsmaterialien ermöglicht es uns, stets die neuesten und effektivsten Produkte anzubieten. Thomas ist zertifizierter Sachverständiger für Dachkonstruktionen und hält regelmäßig Schulungen für unser Team, um sicherzustellen, dass alle Mitarbeiter auf dem neuesten Stand der Technik sind. Seine Leidenschaft für technische Perfektion und sein Engagement für nachhaltige Lösungen machen ihn zu einem wertvollen Mitglied unseres Führungsteams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team-Gruppenfotos */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Unser Gesamtteam</h3>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="flex flex-col justify-center order-2 md:order-1">
                  <h4 className="text-2xl font-bold mb-2">Das Solar Komfort Team</h4>
                  <div className="prose prose-lg dark:prose-invert">
                    <p>
                      Das Herzstück der Solar Komfort GmbH ist unser engagiertes und hochqualifiziertes Team aus Fachkräften. Mit über 25 Mitarbeitern, darunter Dachdecker, Maler, Gebäudereiniger und Techniker, decken wir alle Kompetenzbereiche ab, die für exzellente Dach- und Fassadenarbeiten erforderlich sind.
                    </p>
                    <p>
                      Jedes Teammitglied durchläuft ein umfassendes Schulungsprogramm und nimmt regelmäßig an Weiterbildungen teil, um stets auf dem neuesten Stand der Technik zu bleiben. Unsere Mitarbeiter sind nicht nur fachlich kompetent, sondern auch für ihre Zuverlässigkeit, Pünktlichkeit und ihren freundlichen Umgang mit Kunden bekannt.
                    </p>
                    <p>
                      Die Zusammenarbeit und der Wissensaustausch innerhalb des Teams sind uns besonders wichtig. Durch regelmäßige Teambesprechungen und gemeinsame Projektanalysen stellen wir sicher, dass Erfahrungen geteilt werden und jeder von den Erkenntnissen der Kollegen profitieren kann. Diese Teamkultur ermöglicht es uns, kontinuierlich besser zu werden und innovative Lösungen für die Herausforderungen unserer Kunden zu entwickeln.
                    </p>
                  </div>
                </div>
                <div className="relative h-96 order-1 md:order-2">
                  <Image 
                    src="/img/flux/team-gruppenfoto1.webp"
                    alt="Das Solar Komfort Team"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Team bei der Arbeit */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Unser Team im Einsatz</h3>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="relative h-96">
                  <Image 
                    src="/img/flux/team-bei-der-arbeitwebp.webp"
                    alt="Solar Komfort Team bei der Arbeit"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-2xl font-bold mb-2">Professionell im Einsatz</h4>
                  <div className="prose prose-lg dark:prose-invert">
                    <p>
                      Bei jedem Projekt zeigt sich die Professionalität und Sorgfalt unseres Teams. Ausgestattet mit modernster Sicherheitsausrüstung und spezialisierten Werkzeugen, arbeiten unsere Fachkräfte effizient und präzise, um optimale Ergebnisse zu erzielen. Ob bei der gründlichen Reinigung eines verschmutzten Daches, der fachgerechten Beschichtung oder der Sanierung beschädigter Dachflächen – unser Team meistert jede Herausforderung mit Expertise und Engagement.
                    </p>
                    <p>
                      Sicherheit steht bei allen Arbeiten an erster Stelle. Unsere Mitarbeiter sind umfassend in Arbeitssicherheit geschult und verwenden stets die vorgeschriebene Schutzausrüstung. Regelmäßige Sicherheitsschulungen und strenge Einhaltung aller Vorschriften gewährleisten, dass jedes Projekt nicht nur qualitativ hochwertig, sondern auch sicher durchgeführt wird.
                    </p>
                    <p>
                      Die Zufriedenheit unserer Kunden ist das oberste Ziel bei jedem Einsatz. Unser Team legt großen Wert auf eine saubere Arbeitsweise, minimale Störungen für die Bewohner und eine gründliche Reinigung nach Abschluss der Arbeiten. Diese Sorgfalt und Rücksichtnahme sind Gründe, warum viele unserer Kunden uns weiterempfehlen und für zukünftige Projekte wieder auf uns zurückkommen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Kundenberatung */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Kundenberatung</h3>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="flex flex-col justify-center order-2 md:order-1">
                  <h4 className="text-2xl font-bold mb-2">Individuelle Beratung</h4>
                  <div className="prose prose-lg dark:prose-invert">
                    <p>
                      Eine umfassende und ehrliche Beratung ist der Grundstein für jedes erfolgreiche Projekt. Unser Beratungsteam nimmt sich Zeit, die individuellen Bedürfnisse und Anforderungen jedes Kunden zu verstehen und maßgeschneiderte Lösungen zu entwickeln. Bei einem persönlichen Termin vor Ort analysieren unsere Experten den Zustand des Daches oder der Fassade und erklären verständlich die verschiedenen Optionen zur Reinigung, Beschichtung oder Sanierung.
                    </p>
                    <p>
                      Transparenz ist uns besonders wichtig. Wir erläutern detailliert die notwendigen Arbeitsschritte, die verwendeten Materialien und die zu erwartenden Ergebnisse. Unsere Kunden erhalten eine klare Kostenübersicht ohne versteckte Gebühren und werden über den zeitlichen Ablauf des Projekts informiert. Diese offene Kommunikation schafft Vertrauen und bildet die Basis für eine erfolgreiche Zusammenarbeit.
                    </p>
                    <p>
                      Auch nach Abschluss eines Projekts stehen wir unseren Kunden mit Rat und Tat zur Seite. Wir bieten Wartungstipps, beantworten Fragen zur Pflege und stehen für Folgeaufträge oder weitere Beratung zur Verfügung. Diese langfristige Kundenbeziehung ist uns wichtig und spiegelt unsere Philosophie wider, nicht nur Dienstleister, sondern Partner für alle Fragen rund um Dach und Fassade zu sein.
                    </p>
                  </div>
                </div>
                <div className="relative h-96 order-1 md:order-2">
                  <Image 
                    src="/img/flux/team-beratung1.webp"
                    alt="Kundenberatung bei Solar Komfort"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Ausrüstung Section */}
        <Section id="ausruestung">
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
        <Section id="philosophie">
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
        </Section>
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