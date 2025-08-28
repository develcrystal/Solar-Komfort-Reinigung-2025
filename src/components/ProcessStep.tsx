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
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105">
      <div className="relative h-64">
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
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};