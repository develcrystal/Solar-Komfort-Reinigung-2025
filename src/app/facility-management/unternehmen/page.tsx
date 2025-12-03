import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { CtaSection } from '@/components/CtaSection';
import Image from 'next/image';
import Link from 'next/link';
import ServiceLeistungenGrid from '@/components/ServiceLeistungenGrid';

export default function Unternehmen() {
  return (
    <>
      {/* Hero-Bereich - Mobile First */}
      <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] min-h-[350px] sm:min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/kundenbilder/Büroreinigung.webp"
            alt="Unser Unternehmen - Professionelle Arbeitsqualität"
            fill
            className="object-cover brightness-[0.8]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/50"></div>
        </div>

        <Container className="relative z-10 h-full flex items-center">
          <div className="max-w-2xl sm:max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white uppercase mb-3 sm:mb-4 md:mb-6 drop-shadow-lg">
              UNSER UNTERNEHMEN
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-4 sm:mb-6 md:mb-8 drop-shadow-md">
              Erfahren Sie mehr über die Komfort Gebäudeservice24 GmbH und unsere Expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/kontakt" className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all min-h-[44px] touch-manipulation">
                Kostenlos beraten lassen
              </Link>
              <Link href="/kostenrechner" className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 transition-all min-h-[44px] touch-manipulation">
                Kosten berechnen
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <SectionTitle
            preTitle="Facility Management"
            title="Unser Unternehmen"
          >
            Erfahren Sie mehr über die Komfort Gebäudeservice24 GmbH und unsere Expertise.
          </SectionTitle>

          <ServiceLeistungenGrid
            title="Über uns"
            subtitle="Erfahren Sie mehr über die Komfort Gebäudeservice24 GmbH und unsere Expertise."
            leistungen={[
              {
                title: "Tochterfirma der Solar Komfort GmbH",
                description: "Als etablierte Tochtergesellschaft profitieren wir von der langjährigen Erfahrung und Expertise unserer Muttergesellschaft.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2zM12 10v6m-3-3h6" />
                  </svg>
                ),
                color: "bg-blue-600"
              },
              {
                title: "Über 5.000 zufriedene Kunden",
                description: "Unsere langjährige Erfahrung und hohe Kundenzufriedenheit sprechen für sich.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                color: "bg-green-600"
              },
              {
                title: "Langjährige Branchenerfahrung",
                description: "Jahrelange Expertise in der Gebäudereinigung und Facility Management.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "bg-yellow-600"
              },
              {
                title: "Qualifizierte Fachkräfte",
                description: "Unser Team besteht aus geschulten und zertifizierten Fachkräften.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "bg-purple-600"
              },
              {
                title: "Modernste Technik und Verfahren",
                description: "Wir setzen auf innovative Technologien und umweltfreundliche Methoden.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                color: "bg-red-600"
              },
              {
                title: "Zertifizierte Qualitätsstandards",
                description: "Geprüfte Prozesse und Zertifizierungen garantieren erstklassige Dienstleistungen.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                color: "bg-indigo-600"
              }
            ]}
          />

          <ServiceLeistungenGrid
            title="Unsere Werte"
            subtitle="Die Grundprinzipien, die unser Handeln leiten und unsere Dienstleistungen prägen."
            leistungen={[
              {
                title: "Qualität und Zuverlässigkeit",
                description: "Wir garantieren höchste Qualitätsstandards und termingerechte Ausführung aller Arbeiten.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "bg-green-600"
              },
              {
                title: "Transparenz und Ehrlichkeit",
                description: "Klare Kommunikation und faire Preisgestaltung ohne versteckte Kosten.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                color: "bg-green-600"
              },
              {
                title: "Umweltbewusstsein",
                description: "Nachhaltige Arbeitsweisen und umweltfreundliche Reinigungsmittel.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-1.657 0-3-4.03-3-9s1.343-9 3-9m0 18c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
                color: "bg-green-600"
              },
              {
                title: "Kundenorientierung",
                description: "Individuelle Lösungen und persönlicher Service für jeden Kunden.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                color: "bg-green-600"
              },
              {
                title: "Kontinuierliche Weiterbildung",
                description: "Regelmäßige Schulungen und Fortbildungen für unser Team.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                color: "bg-green-600"
              },
              {
                title: "Vertrauen und Zuverlässigkeit",
                description: "Auf uns können Sie sich verlassen - pünktlich, diskret und professionell.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                color: "bg-yellow-600"
              }
            ]}
          />
        </Container>
      </div>

      <CtaSection
        backgroundImage="/img/kundenbilder/Reinigung.webp"
        backgroundAlt="Kontaktieren Sie uns"
        title="Lernen Sie uns kennen!"
        description="Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin."
        buttonText="Jetzt Beratung anfordern"
        buttonLink="/kontakt"
      />
    </>
  );
}