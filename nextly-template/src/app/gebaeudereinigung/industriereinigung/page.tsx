import { Container } from '@/components/Container';
import { CtaSection } from '@/components/CtaSection';
import { Breadcrumb } from '@/components/Breadcrumb';
import { RelatedServices } from '@/components/RelatedServices';
import { GarantieSection } from '@/components/GarantieSection';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon, CogIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { Section } from '@/components/Section';

export default function Industriereinigung() {
  const services = [
    {
      name: 'Hochdruckreinigung',
      description: 'Professionelle Reinigung von Maschinen, Anlagen und Hallenböden mit Hochdrucktechnologie',
      icon: CogIcon,
    },
    {
      name: 'Entfettung',
      description: 'Spezielle Verfahren zur Entfernung von Ölen, Fetten und industriellen Verschmutzungen',
      icon: SparklesIcon,
    },
    {
      name: 'Maschinenreinigung',
      description: 'Sorgfältige Reinigung von Produktionsanlagen und Maschinenparks',
      icon: CogIcon,
    },
    {
      name: 'Lackieranlagen',
      description: 'Fachgerechte Reinigung von Lackierkabinen und Absauganlagen',
      icon: SparklesIcon,
    },
    {
      name: 'Hygienekonzepte',
      description: 'Maßgeschneiderte Hygienekonzepte für die Lebensmittel- und Pharmaindustrie',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Sonderreinigung',
      description: 'Reinigung nach Brand, Wasserschaden oder anderen Sonderfällen',
      icon: CheckCircleIcon,
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Breadcrumb Navigation */}
      <Breadcrumb />
      
      {/* Header Section mit großer Überschrift und vollbreitem Hintergrundbild */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/kundenbilder/Industriereinigung (1).png"
            alt="Industriereinigung - HK Komfort Facility & Gebäudeservice GmbH"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        </div>
        
        <Container className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase text-white drop-shadow-lg">INDUSTRIEREINIGUNG</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-100 drop-shadow-md">
                Spezialisierte Reinigungslösungen für Industrieanlagen, Produktionsstätten und gewerbliche Großobjekte im Rhein-Main-Gebiet.
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
                Unsere Leistungen für Ihre Industrie
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Wir bieten maßgeschneiderte Reinigungslösungen für alle Anforderungen in der Industrie. Unsere zertifizierten Fachkräfte gewährleisten höchste Qualität bei minimalen Produktionsausfällen.
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
        
        {/* Reinigungsverfahren */}
        <Section id="verfahren">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Unsere Reinigungsverfahren
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Moderne, effiziente Reinigungsverfahren für verschiedene Industrie-Anwendungen mit höchster Qualität und Sicherheit
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Verfahren Liste Links */}
              <div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      Hochdruck-Heißwasserreinigung
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Einsatz von Hochdruckanlagen bis 200 bar bei Temperaturen bis 150°C. Besonders effektiv bei hartnäckigen Verschmutzungen durch Öle, Fette und industrielle Rückstände.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Anwendung:</strong> Maschinenreinigung, Produktionsanlagen, Betonböden in Werkshallen
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                      <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      Industriestaubsauger-Systeme
                    </h3>
                    <p className="text-gray-600 mb-3">
                      ATEX-zertifizierte Staubsauger für explosionsgefährdete Bereiche. HEPA-Filtration für Feinstaub und gesundheitsgefährdende Partikel.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Zertifizierung:</strong> ATEX Zone 22, HEPA H14-Filter, Klasse M/H nach BG-Vorschriften
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                      <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      Trockeneisreinigung
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Umweltfreundliche Reinigung ohne Chemikalien. Ideal für empfindliche Elektronik und Präzisionsmaschinen, da rückstandsfrei und nicht abrasiv.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-purple-800">
                        <strong>Vorteile:</strong> Keine Demontage erforderlich, chemikalienfrei, minimale Stillstandzeiten
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Compliance & Garantien Rechts */}
              <div>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Compliance & Zertifizierungen</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Umweltschutz-Standards</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Wasserhaushaltsgesetz (WHG) - konforme Abwasserbehandlung</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>TA Luft - Einhaltung von Emissionsgrenzwerten</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>REACH-Verordnung - sichere Chemikalienverwendung</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>ISO 14001 - Umweltmanagementsystem-Zertifizierung</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Arbeitssicherheit</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>DGUV Vorschrift 1 - Grundsätze der Prävention</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Betriebssicherheitsverordnung (BetrSichV)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>TRGS 519 - Asbest - Abbruch-, Sanierungs- oder Instandhaltungsarbeiten</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Gefahrstoffverordnung (GefStoffV)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Zusätzliche Sicherheiten</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 mt-1">✓</span>
                          <span><strong>Vollversicherung bis 10 Mio. Euro</strong> für alle Industrieeinsätze</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 mt-1">✓</span>
                          <span><strong>Dokumentierte Qualitätskontrolle</strong> mit digitaler Protokollierung</span>
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
        currentService="industriereinigung" 
        category="gebaeudereinigung"
        maxServices={4}
      />

      {/* CTA Section - Vollbreites Bild mit Text-Overlay */}
      <CtaSection 
        backgroundImage="/img/flux/industriereinigung.png"
        backgroundAlt="Kontaktieren Sie uns für Industriereinigung"
        title="Bereit für professionelle Industriereinigung?"
        description="Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin."
        buttonText="Jetzt Beratung anfordern"
        buttonLink="/kontakt"
      />
    </div>
  );
}