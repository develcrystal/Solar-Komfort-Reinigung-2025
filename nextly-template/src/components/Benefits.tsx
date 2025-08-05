import React from 'react';
import { Container } from './Container';

const Benefits = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold mb-2">Vorteil {i}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Dies ist ein Beispiel für einen Vorteil unserer Dienstleistungen.
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Benefits;
