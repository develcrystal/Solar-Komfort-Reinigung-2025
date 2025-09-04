"use client";

import { useState } from 'react';
import { Container } from './Container';

const Preiskalkulator = () => {
  const [selectedService, setSelectedService] = useState('');
  const [flaeche, setFlaeche] = useState('');
  const [haeufigkeit, setHaeufigkeit] = useState('');
  const [geschaetzt, setGeschaetzt] = useState(0);

  const services = [
    {
      id: 'buero',
      name: 'Büro',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      basePrice: 2.5
    },
    {
      id: 'praxis',
      name: 'Praxis',
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      basePrice: 3.2
    },
    {
      id: 'kita',
      name: 'Kita',
      icon: (
        <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      basePrice: 3.8
    },
    {
      id: 'studio',
      name: 'Studio',
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      basePrice: 4.0
    },
    {
      id: 'gastro',
      name: 'Gastro',
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      basePrice: 4.5
    }
  ];

  const haeufigkeiten = [
    { id: 'einmalig', name: '1x einmalig', multiplier: 1.5 },
    { id: 'woechentlich', name: '1x wöchentlich', multiplier: 1.0 },
    { id: 'zweiwoechentlich', name: '2x wöchentlich', multiplier: 0.9 },
    { id: 'taeglich', name: 'täglich', multiplier: 0.7 }
  ];

  const calculatePrice = () => {
    if (!selectedService || !flaeche || !haeufigkeit) return 0;
    
    const service = services.find(s => s.id === selectedService);
    const freq = haeufigkeiten.find(h => h.id === haeufigkeit);
    
    if (!service || !freq) return 0;
    
    const baseTotal = service.basePrice * parseInt(flaeche);
    return Math.round(baseTotal * freq.multiplier);
  };

  const handleCalculate = () => {
    const price = calculatePrice();
    setGeschaetzt(price);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-16 sm:py-20 md:py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Preiskalkulator Reinigung
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Berechnen Sie schnell und einfach die Kosten für Ihre Gebäudereinigung
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
            {/* Service Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                Wählen Sie Ihren Bereich:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                      selectedService === service.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 shadow-lg transform scale-105'
                        : 'border-gray-200 dark:border-gray-600 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <div className={`p-3 rounded-xl ${
                        selectedService === service.id ? 'bg-blue-100 dark:bg-blue-800' : 'bg-gray-100 dark:bg-gray-700'
                      }`}>
                        {service.icon}
                      </div>
                      <span className={`text-sm font-medium ${
                        selectedService === service.id ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {service.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Wie groß ist die Fläche? *
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={flaeche}
                    onChange={(e) => setFlaeche(e.target.value)}
                    placeholder="z.B. 250"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-lg"
                  />
                  <span className="absolute right-4 top-3 text-gray-500 dark:text-gray-400 text-lg">m²</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Wie oft? *
                </label>
                <select
                  value={haeufigkeit}
                  onChange={(e) => setHaeufigkeit(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-lg"
                >
                  <option value="">Häufigkeit wählen</option>
                  {haeufigkeiten.map((freq) => (
                    <option key={freq.id} value={freq.id}>
                      {freq.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Calculate Button */}
            <div className="text-center mb-8">
              <button
                onClick={handleCalculate}
                disabled={!selectedService || !flaeche || !haeufigkeit}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  selectedService && flaeche && haeufigkeit
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Preis berechnen
              </button>
            </div>

            {/* Result */}
            {geschaetzt > 0 && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 text-center border border-green-200 dark:border-green-700">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Geschätzter Monatspreis:
                </h4>
                <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-4">
                  {geschaetzt} €
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  *Unverbindliche Schätzung. Finaler Preis nach Vor-Ort-Besichtigung
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/kontakt"
                    className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Kostenloses Angebot anfordern
                  </a>
                  <a 
                    href="tel:+491234567890"
                    className="px-6 py-3 bg-white text-green-600 border-2 border-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                  >
                    📞 Sofort anrufen
                  </a>
                </div>
              </div>
            )}

            <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
              <p>💡 <strong>Tipp:</strong> Kostenlose Erstbesichtigung und unverbindliches Angebot</p>
              <p className="mt-1">🏆 Über 150 zufriedene Kunden vertrauen auf unsere Expertise</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export { Preiskalkulator };