import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import Link from 'next/link';

interface IndividuelleLoesungSectionProps {
  variant?: 'normal' | 'glassmorphism';
}

export const IndividuelleLoesungSection = ({ variant = 'normal' }: IndividuelleLoesungSectionProps) => {
  const isGlass = variant === 'glassmorphism';
  const bgClass = isGlass ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-md border border-white/10' : 'bg-white dark:bg-gray-800';
  const textClass = isGlass ? 'text-white' : 'text-gray-900 dark:text-white';

  return (
    <Section className="py-16">
      <Container>
        {/* CTA Bereich */}
        <div className={`rounded-2xl p-8 md:p-12 text-center mb-12 ${bgClass}`}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textClass}`}>
            Benötigen Sie eine individuelle Lösung?
          </h2>
          <p className={`text-lg mb-8 ${textClass}`}>
            Sprechen Sie mit uns über Ihre individuelle Lösung?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontakt" 
              className={`px-6 py-3 rounded-lg font-medium transition-all ${isGlass ? 'bg-white text-blue-900 hover:bg-white/90' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
              Beratung anfragen
            </Link>
            <Link 
              href="/kostenrechner" 
              className={`px-6 py-3 rounded-lg font-medium transition-all ${isGlass ? 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900' : 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50'}`}
            >
              Kosten berechnen
            </Link>
          </div>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover-tile hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Privatreinigung</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Häusliche Reinigung und Pflege</p>
          </div>

          <div className="text-center p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover-tile">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Gewerbereinigung</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Büro- und Gewerbeflächen</p>
          </div>

          <div className="text-center p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover-tile">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Spezialreinigung</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Spezialisierte Reinigungsarbeiten</p>
          </div>

          <div className="text-center p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover-tile">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Facility Management</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Umfassende Objektbetreuung</p>
          </div>
        </div>
      </Container>
    </Section>
  );
};