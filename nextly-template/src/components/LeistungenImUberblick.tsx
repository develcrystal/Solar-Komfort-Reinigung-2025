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
      { src: "/img/kundenbilder/Büroreinigung.png", alt: "Professionelle Büroreinigung" },
      { src: "/img/kundenbilder/Reinigung (1).png", alt: "Unterhaltsreinigung in Aktion" }
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
      { src: "/img/kundenbilder/Fassaden-Reingung.png", alt: "Professionelle Fassadenreinigung" },
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
      { src: "/img/kundenbilder/Industriereinigung.png", alt: "Professionelle Industriereinigung" },
      { src: "/img/kundenbilder/Grundreinigung.png", alt: "Industriehallen Reinigung" }
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
      { src: "/img/kundenbilder/Grundreinigung.png", alt: "Intensive Grundreinigung" },
      { src: "/img/kundenbilder/Krankenhausreinigung.png", alt: "Grundreinigung Detail" }
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
      { src: "/img/kundenbilder/Haus.png", alt: "Professionelle Objektbetreuung" },
      { src: "/img/flux/hero-ueber-uns1.webp", alt: "Hausmeisterservice" }
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
      { src: "/img/kundenbilder/Entrümpelung.png", alt: "Professionelle Entrümpelung" },
      { src: "/img/flux/hero-kontakt1.webp", alt: "Haushaltsauflösung" }
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
      <Container>
        {/* Header */}
        <Section>
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white uppercase mb-6">
              Unsere Leistungen im Überblick
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Von der täglichen Unterhaltsreinigung bis zur kompletten Objektbetreuung - 
              wir bieten Ihnen professionelle Reinigungsdienstleistungen aus einer Hand.
            </p>
          </div>
        </Section>

        {/* Services */}
        {services.map((service, index) => (
          <Section key={index}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.005] hover:ring-2 hover:ring-blue-200 dark:hover:ring-blue-800 hover:ring-opacity-50 animate-pulse-once">
              <div className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} group`}>
                {/* Image Section with Slider */}
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
                
                {/* Content Section */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <Link href={service.link} className="absolute inset-0 z-10" aria-hidden="true">
                    <span className="sr-only">Mehr erfahren über {service.title}</span>
                  </Link>
                  {/* Title */}
                  <div className="mb-6">
                    <h3 className="text-4xl font-bold uppercase tracking-wide text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                  
                  {/* Feature Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                        <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Section>
        ))}

        {/* Bottom CTA */}
        <Section>
          <div className="text-center">
            <div className="bg-blue-600 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Benötigen Sie eine individuelle Lösung?
              </h3>
              <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
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
      </Container>
    </div>
  );
}