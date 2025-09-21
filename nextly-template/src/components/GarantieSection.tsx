'use client';

import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { ShieldCheckIcon, ClockIcon, SparklesIcon } from '@heroicons/react/24/outline';

interface GarantieSectionProps {
  className?: string;
}

export function GarantieSection({ className = '' }: GarantieSectionProps) {
  const garantien = [
    {
      title: 'Termintreue-Garantie',
      description: 'Vereinbarte Reinigungstermine werden zu 100% eingehalten oder Sie erhalten 50% Rabatt auf den Folgeauftrag.',
      icon: ClockIcon,
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-800 dark:text-blue-200',
      borderColor: 'border-blue-200 dark:border-blue-700',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      title: 'Qualitäts-Garantie',
      description: 'Bei Qualitätsmängeln wird die Reinigung innerhalb von 24h kostenfrei wiederholt.',
      icon: SparklesIcon,
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-800 dark:text-green-200',
      borderColor: 'border-green-200 dark:border-green-700',
      iconColor: 'text-green-600 dark:text-green-400'
    },
    {
      title: 'Sicherheits-Garantie',
      description: 'Alle Mitarbeiter sind SCC-zertifiziert und in Erster Hilfe ausgebildet.',
      icon: ShieldCheckIcon,
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      textColor: 'text-purple-800 dark:text-purple-200',
      borderColor: 'border-purple-200 dark:border-purple-700',
      iconColor: 'text-purple-600 dark:text-purple-400'
    }
  ];

  return (
    <div className={`bg-white dark:bg-gray-900 ${className}`}>
      <Container>
        <Section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Unsere Garantien
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Vertrauen Sie auf unsere verbindlichen Zusagen für Termintreue, Qualität und Sicherheit bei jedem Auftrag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {garantien.map((garantie, index) => (
              <div
                key={garantie.title}
                className={`${garantie.bgColor} ${garantie.borderColor} border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex justify-center mb-6">
                  <div className={`${garantie.bgColor} p-4 rounded-full shadow-sm`}>
                    <garantie.icon className={`h-8 w-8 ${garantie.iconColor}`} />
                  </div>
                </div>

                <h3 className={`text-xl font-bold ${garantie.textColor} mb-4`}>
                  {garantie.title}
                </h3>

                <p className={`${garantie.textColor} leading-relaxed`}>
                  {garantie.description}
                </p>
              </div>
            ))}
          </div>

          {/* Trust-Building Elements */}
          <div className="mt-16 text-center">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Zufriedene Kunden</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Termintreue</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">24h</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Reaktionszeit</div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
}