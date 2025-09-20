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
    <section className="py-12 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Unsere Kunden in der Region
        </h3>
        <div className="relative overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-700">
          <div className="flex animate-scroll whitespace-nowrap">
            {cities.map((city, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 w-64 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-md flex items-center justify-center text-xl font-bold text-gray-900 dark:text-white border border-blue-200 dark:border-blue-800"
              >
                {city}
              </div>
            ))}
            {cities.map((city, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 mx-4 w-64 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-md flex items-center justify-center text-xl font-bold text-gray-900 dark:text-white border border-blue-200 dark:border-blue-800"
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