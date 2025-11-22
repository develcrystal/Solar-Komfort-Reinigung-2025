import React from 'react';
import { Container } from './Container';
import { UserGroupIcon, ShieldCheckIcon, CheckBadgeIcon, CogIcon, SparklesIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const benefits: Benefit[] = [
  {
    icon: <UserGroupIcon className="w-8 h-8" />,
    title: "Festangestellte Mitarbeiter",
    description: "Ausschließlich festangestellte und sozialversicherte Reinigungskräfte mit tariflichem Lohn für höchste Zuverlässigkeit.",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: <ShieldCheckIcon className="w-8 h-8" />,
    title: "Vollversichert bis 3 Mio. €",
    description: "Versicherungsschutz in Höhe von bis zu 3.000.000 € je Schadensfall - Ihre Sicherheit ist unsere Priorität.",
    color: "from-green-400 to-green-600"
  },
  {
    icon: <CheckBadgeIcon className="w-8 h-8" />,
    title: "ISO-zertifizierte Partner",
    description: "Unser Partner für Reinigungsmittel ist ISO zertifiziert. Wir arbeiten nur mit TÜV-geprüften und umweltfreundlichen Produkten.",
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: <CogIcon className="w-8 h-8" />,
    title: "Digitalisierte Prozesse",
    description: "Höchste Effizienz durch digitalisierte Prozesse und elektronische Verwaltung für transparente Abwicklung.",
    color: "from-orange-400 to-orange-600"
  },
  {
    icon: <SparklesIcon className="w-8 h-8" />,
    title: "Bewährte Qualität",
    description: "Vertrauen Sie auf unsere bewährte Qualität. Tausende zufriedene Kunden sprechen für unsere Zuverlässigkeit. Fordern Sie unsere Referenzen an!",
    color: "from-pink-400 to-pink-600"
  },
  {
    icon: <BuildingOfficeIcon className="w-8 h-8" />,
    title: "IHK-Mitglied & zertifiziert",
    description: "Mitglied in der Industrie- und Handelskammer mit Expertenkommission aus Branchenführungskräften.",
    color: "from-indigo-400 to-indigo-600"
  }
];

const Benefits = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700">
            <div className={`bg-gradient-to-br ${benefit.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white`}>
              {benefit.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white">{benefit.title}</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
