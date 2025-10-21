'use client';
import React, { useState, useEffect } from 'react';

const cities = [
  'Darmstadt',
  'IHK Darmstadt',
  'Frankfurt',
  'Mannheim'
];

const LogoSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cities.length);
    }, 3000); // Wechsle alle 3 Sekunden

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-4 sm:py-8 md:py-12 lg:py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-4 sm:mb-6 md:mb-8">
          Unsere Kunden in der Region
        </h3>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap py-4">
            {cities.map((city, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 px-8 py-4 flex items-center justify-center text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                {city}
              </div>
            ))}
            {cities.map((city, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 mx-6 px-8 py-4 flex items-center justify-center text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
        <style jsx global>{`
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-scroll {
              animation: none;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default LogoSlider;