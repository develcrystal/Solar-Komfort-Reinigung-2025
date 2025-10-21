"use client";

import Link from 'next/link';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

interface RelatedService {
  title: string;
  description: string;
  href: string;
  category: 'building' | 'facility' | 'special';
  keywords: string[];
}

interface RelatedServicesProps {
  currentService?: string;
  category?: 'gebaeudereinigung' | 'gebaeudeservice' | 'facility-management';
  maxServices?: number;
  className?: string;
  title?: string;
  services?: Array<{
    title: string;
    href: string;
    description: string;
  }>;
}

const allServices: RelatedService[] = [
  {
    title: "Büroreinigung",
    description: "Professionelle Büroreinigung in Darmstadt und Frankfurt für ein sauberes Arbeitsumfeld.",
    href: "/gebaeudereinigung/bueroeinigung",
    category: 'building',
    keywords: ["Büroreinigung Darmstadt", "Praxisreinigung", "Gewerbliche Reinigung"]
  },
  {
    title: "Industriereinigung", 
    description: "Spezialisierte Industriereinigung für Produktionsstätten im Rhein-Main-Gebiet.",
    href: "/gebaeudereinigung/industriereinigung",
    category: 'building',
    keywords: ["Industriereinigung", "Hallentreibigung", "Produktionsreinigung"]
  },
  {
    title: "Fassadenreinigung",
    description: "Schonende Fassadenreinigung und Gebäudehüllenreinigung in Darmstadt.",
    href: "/gebaeudereinigung/fassadenreinigung", 
    category: 'building',
    keywords: ["Fassadenreinigung Darmstadt", "Gebäudereinigung", "Außenreinigung"]
  },
  {
    title: "Grundreinigung",
    description: "Intensive Grundreinigung für Neubezug und nach Renovierungen.",
    href: "/gebaeudereinigung/grundreinigung",
    category: 'building', 
    keywords: ["Grundreinigung", "Baubeschlussreinigung", "Tiefenreinigung"]
  },
  {
    title: "Hausmeisterservice",
    description: "Zuverlässiger Hausmeisterservice und Objektbetreuung im Rhein-Main-Gebiet.",
    href: "/gebaeudeservice/hausmeisterservice",
    category: 'facility',
    keywords: ["Hausmeisterservice Darmstadt", "Facility Management", "Objektbetreuung"]
  },
  {
    title: "Dachreinigung",
    description: "Professionelle Dachreinigung zur Werterhaltung Ihrer Immobilie.",
    href: "/gebaeudereinigung/dachreinigung",
    category: 'special',
    keywords: ["Dachreinigung", "Dachsanierung", "Moosentfernung"]
  },
  {
    title: "Treppenhausreinigung",
    description: "Regelmäßige Treppenhausreinigung für Wohnanlagen und Gewerbeimmobilien.",
    href: "/gebaeudereinigung/treppenhausreinigung", 
    category: 'building',
    keywords: ["Treppenhausreinigung", "Hausverwaltung", "Gemeinschaftsräume"]
  },
  {
    title: "Entrümpelung",
    description: "Professionelle Entrümpelung und Haushaltsauflösung mit fachgerechter Entsorgung.", 
    href: "/gebaeudeservice/entruempelung",
    category: 'facility',
    keywords: ["Entrümpelung Darmstadt", "Haushaltsauflösung", "Entsorgungsservice"]
  }
];

export function RelatedServices({
  currentService,
  category = 'gebaeudereinigung',
  maxServices = 4,
  className = '',
  title = 'Weitere Dienstleistungen',
  services
}: RelatedServicesProps) {
  // Filter services based on category and exclude current service
  let filteredServices = allServices
    .filter(service => {
      if (currentService && service.href.includes(currentService)) return false;
      
      // If specific category requested, prioritize that category
      if (category === 'gebaeudereinigung') {
        return service.category === 'building' || service.category === 'special';
      } else if (category === 'gebaeudeservice') {
        return service.category === 'facility';
      }
      return true;
    })
    .slice(0, maxServices);

  // If we don't have enough services, fill with others
  if (filteredServices.length < maxServices) {
    const remainingServices = allServices
      .filter(service => 
        !filteredServices.includes(service) && 
        !(currentService && service.href.includes(currentService))
      )
      .slice(0, maxServices - filteredServices.length);
    
    filteredServices = [...filteredServices, ...remainingServices];
  }

  return (
    <Section className={`bg-gray-50 dark:bg-gray-900 ${className}`}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
{title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Entdecken Sie unser komplettes Leistungsspektrum für professionelle Gebäudereinigung und Facility Management im Rhein-Main-Gebiet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <Link 
              key={service.href}
              href={service.href}
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {service.keywords.slice(0, 2).map((keyword) => (
                  <span 
                    key={keyword}
                    className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <div className="text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:underline">
                Mehr erfahren →
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/ueber-uns"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Alle Leistungen ansehen
          </Link>
        </div>
      </Container>
    </Section>
  );
}