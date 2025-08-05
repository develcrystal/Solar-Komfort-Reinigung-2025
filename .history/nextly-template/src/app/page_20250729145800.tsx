import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Benefits } from "@/components/Benefits";

// Temporäre Komponenten
const Video = ({ videoId, title }: { videoId: string; title: string }) => (
  <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-lg overflow-hidden">
    <div className="text-center p-8">
      <div className="text-4xl mb-2">▶️</div>
      <p className="font-medium text-lg">{title}</p>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3].map((i) => (
      <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <div className="text-yellow-400 text-2xl">★★★★★</div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          "Hervorragender Service! Das Team von Solar Komfort hat unsere Büroräume gründlich und zuverlässig gereinigt."
        </p>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              {i === 1 ? 'A' : i === 2 ? 'B' : 'C'}
            </span>
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-white">
              {i === 1 ? 'Andreas M.' : i === 2 ? 'Bettina K.' : 'Christian W.'}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {i === 1 ? 'Geschäftsführer' : i === 2 ? 'Büroleiterin' : 'Hausverwaltung'}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const HomePage = () => {
  return (
    <Container>
      <SectionTitle>Vorteile unserer Dienstleistungen</SectionTitle>
      <Benefits />
      {/* Rest der Seite */}
      <Testimonials />
      <Faq />
      <CtaSection
        backgroundImage="/img/flux/hero-gebaeudereinigung.webp"
        backgroundAlt="Gebäudereinigung"
      />
    </Container>
  );
};

export const metadata: Metadata = {
  title: "Solar Komfort GmbH - Professionelle Gebäudereinigung & Facility Management",
  description: "Ihr zuverlässiger Partner für saubere, gepflegte und professionell verwaltete Gebäude in Berlin und Umgebung.",
  keywords: "Gebäudereinigung, Facility Management, Hausmeisterservice, Gebäudeservice, Berlin, Reinigungsservice, Hausverwaltung, Gewerbereinigung",
  openGraph: {
    title: "Solar Komfort GmbH - Professionelle Gebäudereinigung & Facility Management",
    description: "Ihr zuverlässiger Partner für saubere, gepflegte und professionell verwaltete Gebäude in Berlin und Umgebung.",
    url: "https://solar-komfort.de",
    siteName: "Solar Komfort GmbH",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://solar-komfort.de/img/flux/hero-gebaeudereinigung.webp",
        width: 1200,
        height: 630,
        title: "Solar Komfort GmbH - Professionelle Gebäudereinigung & Facility Management",
      }
      
      export default HomePage;
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Komfort GmbH - Professionelle Gebäudereinigung & Facility Management",
    description: "Ihr zuverlässiger Partner für saubere, gepflegte und professionell verwaltete Gebäude in Berlin und Umgebung.",
    images: ["https://solar-komfort.de/img/flux/hero-gebaeudereinigung.webp"]
  },
  alternates: {
    canonical: "https://solar-komfort.de"
  }
};

export default function Home() {
  return (
    <>
      {/* Hero-Bereich */}
      <div className="relative">
        {/* Hintergrundbild */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/flux/referenz-einfamilienhaus2.webp"
            alt="Solar Komfort Dachreinigung"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        
        {/* Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-900/40 z-10"></div>
        
        {/* Hero Content */}
        <Container className="relative z-20">
          <div className="flex flex-col items-start justify-center min-h-screen py-20 text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white uppercase mb-4 drop-shadow-lg">
              PROFESSIONELLE<br />
              GEBÄUDEREINIGUNG<br />
              & FACILITY MANAGEMENT
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              Ihr zuverlässiger Partner für saubere, gepflegte und professionell verwaltete Gebäude in Berlin und Umgebung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#kontakt" className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all">
                Kostenfreie Beratung
              </a>
              <a href="#leistungen" className="px-8 py-4 text-lg font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 transition-all">
                Unsere Leistungen
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Einführung */}
      <div className="bg-white dark:bg-gray-900 py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Willkommen bei Solar Komfort
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Als Tochterunternehmen der Solar Komfort GmbH bringen wir langjährige Erfahrung, professionelles Equipment und ein motiviertes Team in jeden Auftrag ein.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <dl className="grid max-w-xl grid-cols-2 gap-8 lg:max-w-none lg:grid-cols-5">
              {[
                { name: 'Zuverlässigkeit', icon: '🔒' },
                { name: 'Gründlichkeit', icon: '✨' },
                { name: 'Fachkompetenz', icon: '🎓' },
                { name: 'Erfahrung', icon: '📅' },
                { name: 'Moderne Technik', icon: '⚙️' },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">{feature.name}</dt>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </div>

      {/* Tätigkeitsbereiche */}
      <div id="leistungen" className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
        <Container>
          <SectionTitle
            preTitle="Unsere Leistungen"
            title="Umfassende Lösungen für Ihr Gebäude"
          >
            Von der regelmäßigen Reinigung bis zum kompletten Facility Management - wir bieten maßgeschneiderte Lösungen für jeden Bedarf.
          </SectionTitle>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Gebäudereinigung',
                description: 'Professionelle Reinigung für ein makelloses Erscheinungsbild und langfristigen Werterhalt Ihrer Immobilie.',
                icon: '🧹',
                link: '/dienstleistungen/gebaudereinigung'
              },
              {
                title: 'Gebäudeservice',
                description: 'Umfassender Service rund um Ihr Gebäude - zuverlässig, termingerecht und fachgerecht.',
                icon: '🏢',
                link: '/dienstleistungen/gebaudeservice'
              },
              {
                title: 'Facility Management',
                description: 'Ganzheitliche Betreuung Ihrer Immobilie - von der Planung bis zur Umsetzung.',
                icon: '🔧',
                link: '/dienstleistungen/facility-management'
              },
              {
                title: 'Dachreinigung',
                description: 'Professionelle Reinigung und Pflege von Dächern zur Verlängerung der Lebensdauer.',
                icon: '🏠',
                link: '/dienstleistungen/dachreinigung'
              },
              {
                title: 'Solaranlagenreinigung',
                description: 'Steigern Sie die Effizienz Ihrer Photovoltaikanlage durch professionelle Reinigung.',
                icon: '☀️',
                link: '/dienstleistungen/solaranlagenreinigung'
              },
              {
                title: 'Grundreinigung',
                description: 'Umfassende Grundreinigung für Neubezug, Bauabnahme oder Saisonstart.',
                icon: '✨',
                link: '/dienstleistungen/grundreinigung'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                <Link 
                  href={service.link}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-500 font-medium inline-flex items-center"
                >
                  Mehr erfahren
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Ablauf */}
      <div className="bg-white dark:bg-gray-900 py-16 sm:py-24">
        <Container>
          <SectionTitle
            preTitle="Unser Vorgehen"
            title="So funktioniert's"
          >
            Transparent und verlässlich - von der ersten Kontaktaufnahme bis zur fertigen Leistung.
          </SectionTitle>

          <div className="mt-16 space-y-12">
            {[
              {
                step: 1,
                title: 'Kontakt & Beratung',
                description: 'Kontaktieren Sie uns telefonisch oder per E-Mail. Wir beraten Sie gerne unverbindlich zu unseren Leistungen und erstellen Ihnen ein individuelles Angebot.'
              },
              {
                step: 2,
                title: 'Terminvereinbarung',
                description: 'Nach Angebotsannahme vereinbaren wir mit Ihnen einen passenden Termin für die Durchführung der Arbeiten.'
              },
              {
                step: 3,
                title: 'Professionelle Ausführung',
                description: 'Unser erfahrenes Team führt die Arbeiten termingerecht und mit größter Sorgfalt durch.'
              },
              {
                step: 4,
                title: 'Qualitätskontrolle',
                description: 'Nach Abschluss der Arbeiten führen wir eine gründliche Qualitätskontrolle durch, um ein perfektes Ergebnis zu gewährleisten.'
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Unser Dachbeschichtungsprozess - Detailliert und informativ */}
      <div id="prozess" className="mb-24">
              <Container>
                <SectionTitle
                  preTitle="Unser Prozess"
                  title="So gehen wir bei der Dachbeschichtung vor"
                >
                  Unsere Dachbeschichtung erfolgt in drei sorgfältig durchgeführten Schritten. Jeder Schritt ist entscheidend für ein langlebiges und qualitativ hochwertiges Ergebnis, das Ihr Dach bis zu 10 Jahre schützt.
                </SectionTitle>

                {/* Visuelle Darstellung der 3 Schritte */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  {/* Schritt 1 */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105">
                    <div className="relative h-64">
                      <Image
                        src="/img/flux/prozess-vorbereitung-reinigung.webp"
                        alt="Vorbereitung und Reinigung"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end">
                        <div className="p-6">
                          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-white text-3xl font-bold">1</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-4">Vorbereitung & Reinigung</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Gründliche Reinigung des Daches von Moos, Flechten und Verschmutzungen.
                        Reparatur kleiner Schäden und sorgfältige Vorbereitung der Oberfläche für optimale Haftung.
                      </p>
                    </div>
                  </div>
                  
                  {/* Schritt 2 */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105">
                    <div className="relative h-64">
                      <Image
                        src="/img/flux/prozess-grundierung.webp"
                        alt="Grundierung"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end">
                        <div className="p-6">
                          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-white text-3xl font-bold">2</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-4">Grundierung</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Auftragen einer speziellen Grundierung, die tief in die Poren eindringt.
                        Diese sorgt für eine optimale Haftung der späteren Beschichtung und versiegelt kleinste Risse.
                      </p>
                    </div>
                  </div>
                  
                  {/* Schritt 3 */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105">
                    <div className="relative h-64">
                      <Image
                        src="/img/flux/prozess-zweifache-beschichtung.webp"
                        alt="Beschichtung"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end">
                        <div className="p-6">
                          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-white text-3xl font-bold">3</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-4">Zweifache Beschichtung</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Auftragen von zwei Schichten hochwertiger Nano-Beschichtung für maximalen Schutz.
                        Diese sorgt für Wasserabweisung, UV-Beständigkeit und verhindert neue Moosbildung für viele Jahre.
                      </p>
                    </div>
                  </div>
                </div>
              </Container>
            </div>



      {/* Vorteile der Dachbeschichtung - Neu gestaltet mit drei Kacheln und Bildmaterial */}
      <div className="mt-32 mb-32">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full uppercase tracking-wider dark:bg-blue-900/30 dark:text-blue-400 mb-4">
            Unsere Vorteile
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8 leading-tight">
            Warum Sie sich für uns entscheiden sollten
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
            Unsere professionelle Dachbeschichtung bietet zahlreiche Vorteile für Ihre Immobilie.
            Entdecken Sie, was uns auszeichnet.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Vorteil 1: Langanhaltender Schutz */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transition-transform hover:translate-y-[-5px]">
            <div className="relative h-48 mb-8 rounded-xl overflow-hidden">
              <Image
                src="/img/flux/dach-beschichtung-detail.webp"
                alt="Langanhaltender Schutz durch Dachbeschichtung"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Langanhaltender Schutz</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
              Unsere Nano-Beschichtung garantiert eine Haltbarkeit von bis zu 10 Jahren. Sie schützt Ihr Dach zuverlässig vor Witterungseinflüssen, Moos und Algenbefall.
            </p>
          </div>
          
          {/* Vorteil 2: Energieeffizienz */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transition-transform hover:translate-y-[-5px]">
            <div className="relative h-48 mb-8 rounded-xl overflow-hidden">
              <Image
                src="/img/flux/energieeffizienz-dach.webp"
                alt="Verbesserte Energieeffizienz durch Dachbeschichtung"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Verbesserte Energieeffizienz</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
              Die spezielle Beschichtung optimiert die Wärmereflexion und kann Ihre Energiekosten senken. Im Sommer bleibt es kühler, im Winter wird die Wärme besser gespeichert.
            </p>
          </div>
          
          {/* Vorteil 3: Wertsteigerung */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transition-transform hover:translate-y-[-5px]">
            <div className="relative h-48 mb-8 rounded-xl overflow-hidden">
              <Image
                src="/img/flux/immobilie-wertsteigerung.webp"
                alt="Wertsteigerung Ihrer Immobilie durch Dachbeschichtung"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Wertsteigerung Ihrer Immobilie</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
              Eine professionelle Dachbeschichtung erhöht nicht nur die Lebensdauer Ihres Daches, sondern steigert auch den Wert Ihrer Immobilie durch ein gepflegtes Erscheinungsbild.
            </p>
          </div>
        </div>
      </div>
      
      {/* Video-Bereich */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
        <Container>
          <SectionTitle
            preTitle="Einblicke"
            title="Unsere Arbeit in Aktion"
          >
            Sehen Sie sich an, wie wir arbeiten und welche Ergebnisse Sie erwarten können.
          </SectionTitle>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <Video
              videoId="rKtfqb3sKww"
              title="Professionelle Gebäudereinigung durch Solar Komfort"
            />
          </div>
        </Container>
      </div>

      {/* Kundenstimmen */}
      <div className="bg-white dark:bg-gray-900 py-16 sm:py-24">
        <Container>
          <SectionTitle
            preTitle="Kundenstimmen"
            title="Das sagen unsere Kunden"
          >
            Überzeugen Sie sich von der Qualität unserer Arbeit durch die Meinungen zufriedener Kunden.
          </SectionTitle>

          <div className="mt-16">
            <Testimonials />
          </div>
        </Container>
      </div>

      {/* FAQ-Bereich */}
      <div id="faq" className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
        <Container>
          <SectionTitle
            preTitle="Häufige Fragen"
            title="Antworten auf häufige Fragen"
          >
            Hier finden Sie Antworten auf die am häufigsten gestellten Fragen zu unseren Dienstleistungen.
          </SectionTitle>

          <div className="mt-16 max-w-3xl mx-auto">
            <Faq />
          </div>
        </Container>
      </div>

      
      
      
      {/* CTA Section - Vollbreites Bild mit Text-Overlay */}
      <CtaSection
        backgroundImage="/img/flux/dachbeschichtung-prozess.webp"
        backgroundAlt="Kontaktieren Sie uns für eine professionelle Gebäudereinigung"
        title="Bereit für eine saubere Lösung?"
        description="Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin mit unseren Experten und lassen Sie sich von unserer Arbeit überzeugen."
      />
    </>
  );
}
