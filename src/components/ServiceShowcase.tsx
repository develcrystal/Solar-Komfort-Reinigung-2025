"use client";

import React from "react";
import Image from "next/image";

interface ServiceShowcaseItem {
  title: string;
  description: string;
  imageSrc: string;  // REQUIRED - process/reference image
  imageAlt: string;
  color: string;     // e.g., 'bg-blue-600', 'bg-green-600'
  step?: number;     // Optional: for process-mode numbering (1, 2, 3, etc)
}

interface ServiceShowcaseProps {
  title: string;
  subtitle?: string;
  mode: 'process' | 'features' | 'benefits';
  items: ServiceShowcaseItem[];
  className?: string;
}

export const ServiceShowcase: React.FC<ServiceShowcaseProps> = ({
  title,
  subtitle,
  mode,
  items,
  className = ""
}) => {
  // Determine grid layout based on mode
  const getGridClass = () => {
    if (mode === 'process') {
      // Process: 3 columns for 3 steps (single row)
      return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8";
    }
    // Features & Benefits: 3 columns for 6 items (2 rows)
    return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8";
  };

  return (
    <section className={`py-12 sm:py-16 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Items Grid */}
        <div className={getGridClass()}>
          {items.map((item, index) => (
            <ServiceShowcaseCard
              key={index}
              {...item}
              mode={mode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CardProps extends ServiceShowcaseItem {
  mode: 'process' | 'features' | 'benefits';
}

const ServiceShowcaseCard: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  color,
  step,
  mode
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Step Number Badge (only for process mode) */}
        {mode === 'process' && step !== undefined && (
          <div className="absolute bottom-4 right-4">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 ${color} rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg`}>
              {step}
            </div>
          </div>
        )}

        {/* Color Tint Overlay (for features/benefits) */}
        {(mode === 'features' || mode === 'benefits') && (
          <div className={`absolute inset-0 ${color} opacity-10`}></div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceShowcase;
