import { Container } from './Container';
import Image from 'next/image';

export const GründerPresentation = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3 tracking-wider uppercase">Unsere Gründer</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Mohamed Kaddouri & Abdelhafid Hajjout</h3>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Gründer der Clean Komfort Gebäudeservice24 GmbH - Tochterunternehmen der Solar Komfort GmbH
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Mohamed Kaddouri */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 sm:p-8 text-center">
            <div className="relative mx-auto mb-6 w-32 h-32 sm:w-40 sm:h-40">
              <Image
                src="/img/flux/team-gruppenfoto1.webp"
                alt="Mohamed Kaddouri - Gründer der Clean Komfort Gebäudeservice24 GmbH"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">Mohamed Kaddouri</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">Geschäftsführer</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Jahrelange Erfahrung im Handwerk und in der Gebäudereinigung mit Fokus auf Qualität und Kundenzufriedenheit.
            </p>
          </div>

          {/* Abdelhafid Hajjout */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 sm:p-8 text-center">
            <div className="relative mx-auto mb-6 w-32 h-32 sm:w-40 sm:h-40">
              <Image
                src="/img/flux/team-gruppenfoto1.webp"
                alt="Abdelhafid Hajjout - Gründer der Clean Komfort Gebäudeservice24 GmbH"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">Abdelhafid Hajjout</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">Geschäftsführer</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Spezialist für Solartechnik und Gebäudebetreuung mit Schwerpunkt auf nachhaltige Gebäudewartung.
            </p>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Unsere Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-2">Handwerk</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Traditionelles Handwerk und moderne Techniken verbinden wir zur optimalen Gebäudereinigung.
                </p>
              </div>
              <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-2">Solartechnik</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Spezialwissen in Solartechnik und PV-Anlagen für ganzheitliche Gebäudebetreuung.
                </p>
              </div>
              <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-2">Gebäudereinigung</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Jahrzehntelange Erfahrung in professioneller Gebäudereinigung für Privat- und Gewerbekunden.
                </p>
              </div>
              <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-2">Objektmanagement</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Komplette Gebäudebetreuung und Objektmanagement aus einer Hand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GründerPresentation;