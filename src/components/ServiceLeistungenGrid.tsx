"use client";

import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/Section';

interface LeistungItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  color: string; // e.g., 'bg-blue-600', 'bg-green-600'
  imageSrc?: string; // Optional image for CI-consistent design
  imageAlt?: string; // Alt text for image
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
            className="rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
          >
            {item.imageSrc ? (
              // IMAGE-BASED CARD (CI-consistent design)
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt || item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className={`absolute inset-0 ${item.color} opacity-10`}></div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ) : (
              // ICON-BASED CARD (fallback for backward compatibility)
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border border-gray-200 dark:border-gray-700 h-full flex flex-col justify-center">
                {item.icon && (
                  <div className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    {item.icon}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ServiceLeistungenGrid;