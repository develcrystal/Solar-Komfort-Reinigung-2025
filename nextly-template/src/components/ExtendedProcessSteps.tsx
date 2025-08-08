import React from "react";
import Image from "next/image";

interface ProcessStepData {
  step: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  bgColor?: string;
}

interface ExtendedProcessStepsProps {
  steps: ProcessStepData[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const ExtendedProcessSteps: React.FC<ExtendedProcessStepsProps> = ({ 
  steps, 
  title = "Unser Arbeitsprozess",
  subtitle = "Von der ersten Analyse bis zur finalen Qualitätskontrolle - so läuft Ihr Projekt ab",
  className = ""
}) => {
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

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-8">
          {steps.map((stepData, index) => (
            <div key={index} className="xl:col-span-2 first:xl:col-span-2 last:xl:col-span-2">
              <ProcessStepCard {...stepData} />
            </div>
          ))}
        </div>

        {/* Timeline Connection (Desktop Only) */}
        <div className="hidden xl:block relative mt-8">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 opacity-20 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const ProcessStepCard: React.FC<ProcessStepData> = ({ 
  step, 
  title, 
  description, 
  imageSrc, 
  imageAlt,
  bgColor = "bg-blue-600"
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative h-48 sm:h-56">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Step Number Badge */}
        <div className="absolute bottom-4 left-4">
          <div className={`w-12 h-12 sm:w-14 sm:h-14 ${bgColor} rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg`}>
            {step}
          </div>
        </div>
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