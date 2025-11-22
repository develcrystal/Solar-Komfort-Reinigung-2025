"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ImageSlider } from '@/components/ImageSlider';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import '@/app/globals.css';

interface Service {
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  buttonText: string;
  link: string;
  icon?: string;
}

const services: Service[] = [
  {
    title: "Unterhaltsreinigung",
    images: [
      { src: "/img/kundenbilder/Büro-Reinigung.webp", alt: "Professionelle Büroreinigung" },
      { src: "/img/kundenbilder/Reinigung (1).webp", alt: "Unterhaltsreinigung in Aktion" }
    ],
    description: "Regelmäßige professionelle Büro- und Praxisreinigung für ein sauberes und gesundes Arbeitsumfeld. Unsere geschulten Fachkräfte sorgen für konstante Qualität nach individuellen Reinigungsplänen.",
    features: [
      {
        title: "Individuelle Pläne",
        description: "Maßgeschneiderte Reinigungspläne nach Ihren Bedürfnissen und Arbeitszeiten."
      },
      {
        title: "Qualitätskontrolle",
        description: "Regelmäßige Überprüfung und Dokumentation der Reinigungsqualität vor Ort."
      }
    ],
    buttonText: "Mehr erfahren",
    link: "/gebaeudereinigung/bueroeinigung"
  },
  {
    title: "Glas & Fassadenreinigung",
    images: [
      { src: "/img/kundenbilder/Fassaden-Reinigung.webp", alt: "Professionelle Fassadenreinigung" },
      { src: "/img/flux/fassadenreinigung-prozess.webp", alt: "Fassadenreinigung Prozess" }
    ],
    description: "Streifenfreie Glasreinigung und schonende Fassadenreinigung für gepflegtes Erscheinungsbild. Mit modernster Niederdrucktechnik schonen wir Ihre Bausubstanz und erzielen perfekte Ergebnisse.",
    features: [
      {
        title: "Niederdruckreinigung",
        description: "Schonende Reinigung ohne Schäden am Mauerwerk mit speziellen Reinigungsmitteln."
      },
      {
        title: "Langzeitschutz",
        description: "Optional mit Imprägnierung für langanhaltende Sauberkeit und Witterungsschutz."
      }
    ],
    buttonText: "Mehr erfahren",
    link: "/gebaeudereinigung/fassadenreinigung"
  },
  {
    title: "Industriereinigung",
    images: [
      { src: "/img/kundenbilder/Industriereinigung (1).webp", alt: "Professionelle Industriereinigung" },
      { src: "/img/kundenbilder/Grundreinigung.webp", alt: "Industriehallen Reinigung" }
    ],
    description: "Spezialisierte Reinigung von Industriehallen und Produktionsstätten mit modernsten Verfahren. Wir verstehen die besonderen Anforderungen industrieller Umgebungen und Sicherheitsbestimmungen.",
    features: [
      {
        title: "Spezialverfahren",
        description: "Angepasste Reinigungsmethoden für verschiedene Industriebereiche und Materialien."
      },
      {
        title: "Termingenau",
        description: "Pünktliche Ausführung auch bei laufendem Betrieb ohne Produktionsunterbrechung."
      }
    ],
    buttonText: "Mehr erfahren",
    link: "/gebaeudereinigung/industriereinigung"
  },
  {
    title: "Grundreinigung",
    images: [
      { src: "/img/kundenbilder/Grundreinigung.webp", alt: "Intensive Grundreinigung" },
      { src: "/img/kundenbilder/Krankenhausreinigung (1).webp", alt: "Grundreinigung Detail" }
    ],
    description: "Intensive Tiefenreinigung für Neubezug, nach Renovierungen oder bei hartnäckigen Verschmutzungen. Mit speziellen Verfahren und Geräten erreichen wir auch schwer zugängliche Bereiche.",
    features: [
      {
        title: "Tiefenreinigung",
        description: "Entfernung hartnäckiger Verschmutzungen mit professionellen Spezialgeräten."
      },
      {
        title: "Renovation Ready",
        description: "Perfekte Vorbereitung für Neubezug oder nach umfangreichen Sanierungsarbeiten."
      }
    ],
    buttonText: "Mehr erfahren",
    link: "/gebaeudereinigung/grundreinigung"
  },
  {
    title: "Objektbetreuung",
    images: [
      { src: "/img/kundenbilder/Haus.webp", alt: "Professionelle Objektbetreuung" },
      { src: "/img/flux/hero-ueber-uns2.webp", alt: "Hausmeisterservice" }
    ],
    description: "Umfassende Objektbetreuung und Hausmeisterservice für Wohnanlagen, Gewerbeimmobilien und öffentliche Einrichtungen. Alles aus einer Hand für perfekte Gebäudeverwaltung.",
    features: [
      {
        title: "Hausmeisterservice",
        description: "Komplette technische Betreuung, Wartung und kleine Reparaturen vor Ort."
      },
      {
        title: "Facility Management",
        description: "Ganzheitliche Betreuung mit koordinierten Dienstleistungen und Kostenoptimierung."
      }
    ],
    buttonText: "Mehr erfahren",
    link: "/gebaeudeservice/hausmeisterservice"
  },
  {
    title: "Entrümpelung & Haushaltsauflösungen",
    images: [
      { src: "/img/kundenbilder/Entrümpelung.webp", alt: "Professionelle Entrümpelung" },
      { src: "/img/flux/hero-kontakt2.webp", alt: "Haushaltsauflösung" }
    ],
    description: "Diskrete und zuverlässige Wohnungsauflösungen und Kellerentrümpelung mit fachgerechter Entsorgung. Wir übernehmen die komplette Abwicklung und Wertstofftrennung.",
    features: [
      {
        title: "Fachgerechte Entsorgung",
        description: "Umweltgerechte Trennung und Entsorgung mit entsprechenden Zertifikaten."
      },
      {
        title: "Diskret & zuverlässig",
        description: "Vertrauensvolle Abwicklung mit Respekt vor persönlichen Gegenständen."
      }
    ],
    buttonText: "Mehr erfahren",
    link: "/gebaeudeservice/entruempelung"
  }
];

export default function LeistungenImUberblick() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="container px-8 mx-auto xl:px-0">
        {/* Header */}
        <Section>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 dark:text-white uppercase mb-4 sm:mb-6">
              Unsere Leistungen im Überblick
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Von der täglichen Unterhaltsreinigung bis zur kompletten Objektbetreuung -
              wir bieten Ihnen professionelle Reinigungsdienstleistungen aus einer Hand.
            </p>
          </div>
        </Section>

        {/* Services */}
        {services.map((service, index) => (
          <Section key={index} fullWidth={true}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.005] hover:ring-2 hover:ring-blue-200 dark:hover:ring-blue-800 hover:ring-opacity-50 animate-pulse-once border border-gray-100 dark:border-gray-700">
              <div className="relative flex flex-col group">
                {/* Mobile: Enhanced Image Section */}
                <div className="md:hidden relative group">
                  {/* Mobile Hero Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-2xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700">
                    <ImageSlider
                      images={service.images}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover"
                      autoPlay={true}
                      interval={6000 + (index * 500)} // Staggered timing
                    />
                    {/* Mobile Overlay for better readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>
                  </div>

                  {/* Mobile Visual Separator */}
                  <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                </div>

                {/* Desktop: Side by side layout */}
                <div className={`hidden md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Desktop Image Section */}
                  <div className="md:w-1/2 relative group">
                    <ImageSlider
                      images={service.images}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover rounded-xl"
                      autoPlay={true}
                      interval={6000 + (index * 500)} // Staggered timing
                    />
                  </div>

                  {/* Desktop Content Section - Enhanced */}
                  <div className="md:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 dark:from-gray-800 dark:via-gray-800 dark:to-indigo-900/10">
                    <Link href={service.link} className="absolute inset-0 z-10" aria-hidden="true">
                      <span className="sr-only">Mehr erfahren über {service.title}</span>
                    </Link>

                    {/* Desktop Service Badge */}
                    <div className="flex justify-center md:justify-start mb-4">
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium rounded-full shadow-md">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Premium Service
                      </div>
                    </div>

                    {/* Title with enhanced desktop styling */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent">
                        {service.title}
                    </h3>

                    {/* Description with better typography */}
                    <p className="text-base sm:text-lg mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
                        {service.description}
                    </p>

                    {/* Enhanced Feature Cards for Desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 mb-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-200/50 dark:border-gray-600/50 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500">
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                  {feature.title}
                              </h4>
                              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                  {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="mt-6">
                      <Link
                        href={service.link}
                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      >
                        {service.buttonText}
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mobile Content Section - Enhanced */}
                <div className="md:hidden p-6 sm:p-8 flex flex-col justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                  <Link href={service.link} className="absolute inset-0 z-10" aria-hidden="true">
                    <span className="sr-only">Mehr erfahren über {service.title}</span>
                  </Link>

                  {/* Mobile Service Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>

                  {/* Title with enhanced styling */}
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-gray-900 dark:text-white mb-4 text-center bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      {service.title}
                  </h3>

                  {/* Description with better spacing */}
                  <p className="text-base sm:text-lg mb-6 text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                      {service.description}
                  </p>

                  {/* Enhanced Feature Cards */}
                  <div className="grid grid-cols-1 gap-3 sm:gap-4 mt-4 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="bg-white dark:bg-gray-700/50 p-4 sm:p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all duration-300">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                {feature.title}
                            </h4>
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Mobile CTA Section */}
                  <div className="mt-6 space-y-3">
                    <Link
                      href={service.link}
                      className="block w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      {service.buttonText}
                    </Link>

                    {/* Additional Mobile CTA */}
                    <div className="flex justify-center space-x-2">
                      <a
                        href="tel:+49123456789"
                        className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors"
                      >
                        📞 Anrufen
                      </a>
                      <a
                        href="/kontakt"
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      >
                        💬 Kontakt
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        ))}

        {/* Bottom CTA */}
        <Section>
          <div className="text-center">
            <div className="bg-blue-600 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                Benötigen Sie eine individuelle Lösung?
              </h3>
              <p className="text-base sm:text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
                Sprechen Sie uns an! Wir entwickeln maßgeschneiderte Reinigungskonzepte für Ihre speziellen Anforderungen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/kontakt"
                  className="px-8 py-4 text-lg font-bold text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Kostenlose Beratung
                </Link>
                <Link
                  href="/kostenrechner"
                  className="px-8 py-4 text-lg font-bold text-white bg-blue-800 rounded-lg border-2 border-white hover:bg-blue-900 transition-colors"
                >
                  Kosten berechnen
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}