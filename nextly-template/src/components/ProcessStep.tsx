import React from "react";
import Image from "next/image";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description, imageSrc, imageAlt }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl transform transition-all hover:scale-105 h-full flex flex-col">
      <div className="relative h-64 overflow-hidden rounded-t-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end">
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-white text-3xl font-bold">{step}</div>
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
};