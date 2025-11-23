import { Container } from '@/components/Container';
import { CtaSection } from '@/components/CtaSection';
import { Breadcrumb } from '@/components/Breadcrumb';
import { RelatedServices } from '@/components/RelatedServices';
import { GarantieSection } from '@/components/GarantieSection';
import Image from 'next/image';
import Link from 'next/link';
import {
  BuildingOfficeIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon,
  SparklesIcon,
  DocumentCheckIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';
import { Section } from '@/components/Section';

export default function Bueroreinigung() {
  const services = [
    {
      name: 'Workstation-Reinigung',
      description: 'Professionelle Reinigung von Arbeitsplätzen, Schreibtischen und IT-Equipment mit antistatischen Mitteln',
      icon: ComputerDesktopIcon,
    },
    {
      name: 'Meeting- & Konferenzräume',
      description: 'Repräsentative Reinigung von Besprechungsräumen, Präsentationstechnik und Empfangsbereichen',
      icon: UserGroupIcon,
    },
    {
      name: 'Sanitär & Küchenbereiche',
      description: 'Hygienische Reinigung von Büroküchen, Kaffeebereichen und Sanitäranlagen nach HACCP-Standards',
      icon: SparklesIcon,
    },
    {
      name: 'COVID-Hygieneservice',
      description: 'Desinfektion von Kontaktflächen, Türgriffen und Gemeinsschaftsbereichen nach RKI-Empfehlungen',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Flexible Arbeitszeiten',
      description: 'Reinigung außerhalb der Geschäftszeiten (früh, spät, Wochenende) ohne Betriebsstörung',
      icon: ClockIcon,
    },
    {
      name: 'Corporate Services',
      description: 'Repräsentative Reinigung für Kundenbereiche, Lobbys und Außendarstellung des Unternehmens',
      icon: BuildingOfficeIcon,
    },
  ];

  const reinigungsverfahren = [
    {
      step: 1,
      title: 'Arbeitsplatz-Systematik',
      description: 'Strukturierte Reinigung nach Clean-Desk-Policy mit IT-Equipment-Schutz und ergonomischen Arbeitsplätzen',
      details: 'Antistatische Bildschirmreinigung, Tastatur-Desinfektion, Kabelsystem-Pflege. Berücksichtigung sensibler IT-Hardware.',
      color: 'blue',
      compliance: 'IT-Sicherheitsrichtlinien & Datenschutz'
    },
    {
      step: 2,
      title: 'Lufthygiene & Klima',
      description: 'Optimierung der Raumluftqualität durch HEPA-Filtration und regelmäßige Lüftungsanlagen-Wartung',
      details: 'CO2-Überwachung, Feinstaubmessung, Klimaanlagen-Reinigung. Verbesserung der Produktivität durch optimale Luftqualität.',
      color: 'green',
      compliance: 'Arbeitsstättenverordnung (ArbStättV)'
    },
    {
      step: 3,
      title: 'Corporate Hygiene',
      description: 'Repräsentative Bereiche für Kunden und Geschäftspartner nach höchsten ästhetischen Standards',
      details: 'Empfangsbereiche, Lobby-Reinigung, Präsentationsräume. Fokus auf Außenwirkung und Unternehmensimage.',
      color: 'purple',
      compliance: 'Corporate Identity & Qualitätsmanagement'
    },
    {
      step: 4,
      title: 'Nachhaltigkeits-Management',
      description: 'Umweltfreundliche Reinigungsmittel, Abfall-Trennung und CO2-Reduktion für Green Office Zertifizierung',
      details: 'Ökologische Reinigungsmittel, Recycling-Systeme, Energieeffiziente Geräte. Unterstützung bei Umwelt-Zertifizierungen.',
      color: 'emerald',
      compliance: 'ISO 14001 (Umweltmanagement)'
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Breadcrumb Navigation */}
      <Breadcrumb />

      {/* Header Section mit großer Überschrift und vollbreitem Hintergrundbild */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/kundenbilder/Büro-Reinigung (1).webp"
            alt="Büroreinigung - Professionelle Reinigung für produktive Arbeitsplätze"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        </div>

        <Container className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase text-white drop-shadow-lg">BÜROREINIGUNG</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-100 drop-shadow-md">
                Professionelle Büroreinigung für produktive Arbeitsplätze mit COVID-Hygieneservice und flexiblen Corporate-Lösungen.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        {/* Services Section */}
        <Section id="leistungen">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Corporate Büroreinigung
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Maßgeschneiderte Reinigungslösungen für moderne Büroumgebungen mit Fokus auf Produktivität, Hygiene und Unternehmensimage.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.name} className="group relative bg-white dark:bg-gray-700 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <span className="inline-flex items-center justify-center rounded-lg bg-blue-50 p-3 group-hover:bg-blue-100 transition-colors">
                    <service.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900">{service.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{service.description}</p>
                </div>
                <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-blue-400" aria-hidden="true">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            ))}
            </div>
          </div>
        </Section>

        {/* 4-Stufen-Büroreinigungsverfahren */}
        <Section id="reinigungsverfahren">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Systematische Büroreinigung
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Unser wissenschaftlich entwickeltes 4-Stufen-System optimiert Arbeitsplatz-Hygiene und steigert nachweislich die Mitarbeiterproduktivität
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Reinigungsverfahren Links */}
              <div>
                <div className="space-y-6">
                  {reinigungsverfahren.map((step) => (
                    <div key={step.step} className={`bg-gradient-to-r from-${step.color}-50 to-${step.color}-100 p-6 rounded-xl border border-${step.color}-200`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                        <span className={`bg-${step.color}-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0`}>{step.step}</span>
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {step.description}
                      </p>
                      <div className="bg-white p-4 rounded-lg mb-3">
                        <p className="text-sm text-gray-700">
                          {step.details}
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <p className={`text-sm text-${step.color}-800 font-medium`}>
                          <strong>Standard:</strong> {step.compliance}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corporate Standards & Flexibilität Rechts */}
              <div>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Corporate Standards</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <ComputerDesktopIcon className="h-5 w-5 text-blue-600 mr-2" />
                        IT-Equipment & Datenschutz
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Antistatische Bildschirm- und Tastatur-Reinigung</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Server- und Netzwerk-Equipment Spezialreinigung</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>DSGVO-konforme Reinigung mit Datenschutz-Schulung</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Drucker, Scanner, Kopierer - Wartungsreinigung</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <ClockIcon className="h-5 w-5 text-emerald-600 mr-2" />
                        Flexible Arbeitszeiten
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span><strong>Früh-Service:</strong> 5:00-8:00 Uhr vor Geschäftsbeginn</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span><strong>Spät-Service:</strong> 18:00-22:00 Uhr nach Feierabend</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span><strong>Wochenend-Service:</strong> Samstag/Sonntag verfügbar</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span><strong>Homeoffice-Reinigung:</strong> Remote-Arbeitsplätze</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <BeakerIcon className="h-5 w-5 text-purple-600 mr-2" />
                        COVID-19 Hygienemaßnahmen
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Kontaktflächen-Desinfektion nach RKI-Empfehlungen</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Türgriffe, Lichtschalter, Handläufe (stündlich)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Aufzüge, Gemeinschaftsbereiche, Kantine</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Viruzide Desinfektion (VAH-gelistete Mittel)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <DocumentCheckIcon className="h-5 w-5 text-red-600 mr-2" />
                        Corporate Garantien
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 mt-1">✓</span>
                          <span><strong>Betriebshaftpflicht bis 20 Mio. Euro</strong> für Corporate-Umgebungen</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 mt-1">✓</span>
                          <span><strong>SLA-Garantie 99,5%</strong> Verfügbarkeit & Termintreue</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 mt-1">✓</span>
                          <span><strong>Qualitäts-Audits</strong> mit digitaler Protokollierung</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 mt-1">✓</span>
                          <span><strong>24h-Störungs-Hotline</strong> für Notfälle und Sonderreinigungen</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Container>

      {/* Garantie Section - Eigenständiger Bereich */}
      <GarantieSection />

      {/* Projektgalerie - Büroreinigungen in der Praxis */}
      <div className="bg-white dark:bg-gray-900 py-8 sm:py-12 md:py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
              Unsere Büroreinigungsprojekte
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Sehen Sie, wie wir Büroumgebungen in produktive und hygienische Arbeitsräume verwandeln.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/img/kundenbilder/Büro-Reinigung (1).webp",
                alt: "Büroreinigung Projekt - Professionelle Reinigung eines modernen Büroumfelds",
                label: "Moderne Büroräume"
              },
              {
                src: "/img/kundenbilder/Büro-Reinigung (2).webp",
                alt: "Büroreinigung in Aktion - Fachkraft bei der gründlichen Reinigung von Arbeitsplätzen",
                label: "Gründliche Arbeitsplatz-Pflege"
              },
              {
                src: "/img/kundenbilder/Büro-Reinigung (3).webp",
                alt: "Sauberes Büro nach Reinigung - Glänzender Boden und makellose Oberflächen",
                label: "Glänzende Ergebnisse"
              }
            ].map((image, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-64 sm:h-72">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <p className="text-white text-sm font-semibold text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Related Services - Internal Linking für SEO */}
      <RelatedServices
        currentService="bueroeinigung"
        category="gebaeudereinigung"
        maxServices={4}
      />

      {/* CTA Section - Vollbreites Bild mit Text-Overlay */}
      <CtaSection
        backgroundImage="/img/kundenbilder/Büroreinigung.webp"
        backgroundAlt="Kontaktieren Sie uns für professionelle Büroreinigung"
        title="Bereit für ein produktives Arbeitsumfeld?"
        description="Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin für Ihre Corporate Büroreinigung."
        buttonText="Jetzt Corporate-Beratung anfordern"
        buttonLink="/kontakt"
      />
    </div>
  );
}