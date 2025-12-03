"use client";

import React from 'react';
import { Section } from '@/components/Section';

interface LeistungItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string; // e.g., 'bg-blue-600', 'bg-green-600'
}

interface ServiceLeistungenGridProps {
  title?: string;
  subtitle?: string;
  leistungen: LeistungItem[];
}

const ServiceLeistungenGrid: React.FC<ServiceLeistungenGridProps> = ({
  title = "Unsere Leistungen",
  subtitle = "Wir übernehmen für Sie professionelle Dienstleistungen - zuverlässig und kompetent.",
  leistungen
}) => {
  return (
    <Section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 uppercase">
          {title}
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {leistungen.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
          >
            <div className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ServiceLeistungenGrid;