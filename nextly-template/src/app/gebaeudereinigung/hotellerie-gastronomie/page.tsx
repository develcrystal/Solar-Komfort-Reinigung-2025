import { Container } from '@/components/Container';
import { CtaSection } from '@/components/CtaSection';
import { Breadcrumb } from '@/components/Breadcrumb';
import { RelatedServices } from '@/components/RelatedServices';
import { GarantieSection } from '@/components/GarantieSection';
import Image from 'next/image';
import Link from 'next/link';
import {
  BuildingOffice2Icon,
  BeakerIcon,
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon,
  SparklesIcon,
  DocumentCheckIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { Section } from '@/components/Section';

export default function HotelleriGastronomie() {
  const services = [
    {
      name: 'HACCP-Küchenreinigung',
      description: 'Lebensmittelsichere Küchenreinigung nach HACCP-Standards mit Temperaturdokumentation und kritischen Kontrollpunkten',
      icon: BeakerIcon,
    },
    {
      name: 'Premium Hotelzimmer',
      description: 'Luxuriöse Zimmerreinigung mit Gäste-Komfort-Fokus, Turndown-Service und VIP-Bereichen',
      icon: BuildingOffice2Icon,
    },
    {
      name: 'Restaurant & Bar-Bereiche',
      description: 'Gastronomische Reinigung von Dining-Areas, Bars, Weinlagern und Gästebereichen während des Betriebs',
      icon: UserGroupIcon,
    },
    {
      name: 'Wellness & Spa',
      description: 'Spezialreinigung für Wellness-Bereiche, Saunen, Pools und Behandlungsräume mit hygienischen Standards',
      icon: HeartIcon,
    },
    {
      name: '24/7 Hospitality-Service',
      description: 'Rund-um-die-Uhr Service für Check-In/Check-Out Zeiten und Event-Reinigung ohne Gästestörung',
      icon: ClockIcon,
    },
    {
      name: 'Event & Bankett-Reinigung',
      description: 'Schnelle Umgestaltung von Veranstaltungsräumen, Bankett-Setup und After-Event-Cleaning',
      icon: SparklesIcon,
    },
  ];

  const haccp_verfahren = [
    {
      step: 1,
      title: 'Gefahrenanalyse (Hazard Analysis)',
      description: 'Systematische Identifikation biologischer, chemischer und physikalischer Gefahren in allen Küchen- und Lagerbereichen',
      details: 'Bewertung von Kontaminationsrisiken, Allergenen und kritischen Arbeitsbereichen. Dokumentation aller potentiellen Risikoquellen.',
      color: 'red',
      compliance: 'HACCP-Verordnung (EU) Nr. 852/2004'
    },
    {
      step: 2,
      title: 'Kritische Kontrollpunkte (CCP)',
      description: 'Definition und Überwachung kritischer Kontrollpunkte mit kontinuierlicher Temperatur- und pH-Wert-Kontrolle',
      details: 'Kühlketten-Überwachung, Reinigungstemperaturen, Desinfektionszeiten. Digitale Protokollierung aller Messwerte.',
      color: 'orange',
      compliance: 'Lebensmittelhygiene-Verordnung (LMHV)'
    },
    {
      step: 3,
      title: 'Präventivmaßnahmen',
      description: 'Proaktive Hygienemaßnahmen zur Verhinderung von Kreuzkontaminationen zwischen rohen und verarbeiteten Lebensmitteln',
      details: 'Farbcodierte Reinigungsutensilien, separate Arbeitsbereiche, Personalhygiene-Schulungen.',
      color: 'yellow',
      compliance: 'IFS Food Standard (International Featured Standards)'
    },
    {
      step: 4,
      title: 'Monitoring & Dokumentation',
      description: 'Kontinuierliche Überwachung und lückenlose Dokumentation aller Reinigungsprozesse für Behördenkontrollen',
      details: 'Digitale HACCP-Protokolle, Temperaturlogger, mikrobiologische Proben. Ready für Lebensmittelaufsicht.',
      color: 'green',
      compliance: 'BRC Global Standard (British Retail Consortium)'
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
            src="/img/kundenbilder/Reinigung.webp"
            alt="Hotellerie & Gastronomie - HACCP-konforme Reinigung für Hotels und Restaurants"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        </div>

        <Container className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase text-white drop-shadow-lg">HOTELLERIE & GASTRONOMIE</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-100 drop-shadow-md">
                HACCP-konforme Reinigung für Hotels, Restaurants und gastronomische Betriebe mit Gäste-Zufriedenheits-Garantie und 24/7-Service.
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
                Hospitality Reinigungslösungen
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Spezialisierte Reinigungsdienste für die Hotellerie und Gastronomie mit Fokus auf Gästezufriedenheit und Lebensmittelsicherheit.
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

        {/* HACCP-Hygieneverfahren */}
        <Section id="haccp-verfahren">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                HACCP-Hygienesystem
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Unser wissenschaftlich entwickeltes HACCP-System gewährleistet Lebensmittelsicherheit und erfüllt alle EU-Verordnungen für die Gastronomie
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* HACCP-Verfahren Links */}
              <div>
                <div className="space-y-6">
                  {haccp_verfahren.map((step) => (
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

              {/* Hospitality Standards & Gäste-Service Rechts */}
              <div>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Hospitality Excellence</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <BeakerIcon className="h-5 w-5 text-red-600 mr-2" />
                        Lebensmittelsicherheit
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>HACCP-Verordnung (EU) Nr. 852/2004 vollständig erfüllt</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>IFS Food und BRC Global Standard zertifiziert</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Allergene-Management und Kreuzkontamination-Schutz</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Temperaturkontrolle und Kühlketten-Überwachung</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <HeartIcon className="h-5 w-5 text-pink-600 mr-2" />
                        Gäste-Komfort-Service
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span><strong>Silent Service:</strong> Geräuschlose Reinigung während Gästezeiten</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span><strong>Express Check-Out:</strong> 15-Minuten Zimmer-Turnaround</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span><strong>VIP-Bereiche:</strong> Luxus-Suiten und Präsidenten-Etagen</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span><strong>Turndown-Service:</strong> Abendliche Bett-Vorbereitung</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <ClockIcon className="h-5 w-5 text-blue-600 mr-2" />
                        Flexible Hospitality-Zeiten
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span><strong>Früh-Service:</strong> 4:00-7:00 Uhr für Frühstücks-Vorbereitung</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span><strong>Check-Out-Rush:</strong> 8:00-12:00 Uhr Hochfrequenz-Reinigung</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span><strong>Event-Service:</strong> Bankett-Setup und After-Party-Cleaning</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span><strong>Nacht-Service:</strong> 22:00-4:00 Uhr für 24h-Hotels</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <DocumentCheckIcon className="h-5 w-5 text-green-600 mr-2" />
                        Hospitality-Garantien
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 mt-1">✓</span>
                          <span><strong>Gäste-Zufriedenheits-Garantie</strong> mit Review-Score-Verbesserung</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 mt-1">✓</span>
                          <span><strong>Betriebshaftpflicht bis 30 Mio. Euro</strong> für Hospitality-Bereiche</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 mt-1">✓</span>
                          <span><strong>Lebensmittelaufsicht-Ready</strong> mit sofortiger Prüfbereitschaft</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 mt-1">✓</span>
                          <span><strong>24/7 Event-Notfallservice</strong> für spontane Veranstaltungen</span>
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

      {/* Related Services - Internal Linking für SEO */}
      <RelatedServices
        currentService="hotellerie-gastronomie"
        category="gebaeudereinigung"
        maxServices={4}
      />

      {/* CTA Section - Vollbreites Bild mit Text-Overlay */}
      <CtaSection
        backgroundImage="/img/flux/team-beratung1.webp"
        backgroundAlt="Kontaktieren Sie uns für Hotellerie & Gastronomie Reinigung"
        title="Bereit für zufriedene Gäste und perfekte Hygiene?"
        description="Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin für Ihre HACCP-konforme Hospitality-Reinigung."
        buttonText="Jetzt Hospitality-Beratung anfordern"
        buttonLink="/kontakt"
      />
    </div>
  );
}