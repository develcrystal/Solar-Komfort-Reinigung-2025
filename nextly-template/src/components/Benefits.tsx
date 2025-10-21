import React from 'react';
import { Container } from './Container';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: "👥",
    title: "Festangestellte Mitarbeiter",
    description: "Ausschließlich festangestellte und sozialversicherte Reinigungskräfte mit tariflichem Lohn für höchste Zuverlässigkeit."
  },
  {
    icon: "🛡️",
    title: "Vollversichert bis 3 Mio. €",
    description: "Versicherungsschutz in Höhe von bis zu 3.000.000 € je Schadensfall - Ihre Sicherheit ist unsere Priorität."
  },
  {
    icon: "🏅",
    title: "ISO-zertifizierte Partner",
    description: "Unser Partner für Reinigungsmittel ist ISO zertifiziert. Wir arbeiten nur mit TÜV-geprüften und umweltfreundlichen Produkten."
  },
  {
    icon: "💻",
    title: "Digitalisierte Prozesse",
    description: "Höchste Effizienz durch digitalisierte Prozesse und elektronische Verwaltung für transparente Abwicklung."
  },
  {
    icon: "⭐",
    title: "Über 5.000 zufriedene Kunden",
    description: "Schon über 5.000 zufriedene Kunden vertrauen auf unsere Qualität. Fordern Sie unsere Referenzen an!"
  },
  {
    icon: "🏛️",
    title: "IHK-Mitglied & zertifiziert",
    description: "Mitglied in der Industrie- und Handelskammer Berlin mit Expertenkommission aus Branchenführungskräften."
  }
];

const Benefits = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{benefit.icon}</div>
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
