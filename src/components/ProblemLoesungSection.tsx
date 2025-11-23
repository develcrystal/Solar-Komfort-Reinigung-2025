"use client";

import { Container } from './Container';
import { SectionTitle } from './SectionTitle';
import Image from 'next/image';

const ProblemLoesungSection = () => {
  const probleme = [
    {
      problem: "Sie kennen das bestimmt...",
      details: [
        "Reinigungsfirmen, die nicht zum vereinbarten Termin erscheinen",
        "Versteckte Kosten, die erst bei der Rechnung auftauchen", 
        "Schlechte Erreichbarkeit oder keine Rückmeldung bei Problemen",
        "Oberflächliche Reinigung ohne echte Tiefenwirkung",
        "Keine Dokumentation der durchgeführten Arbeiten"
      ]
    }
  ];

  const loesungen = [
    {
      title: "Pünktlichkeit & Zuverlässigkeit",
      description: "Terminverbindlich seit über 15 Jahren - bei uns können Sie sich darauf verlassen",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Transparente Kostenstruktur", 
      description: "Alle Kosten im Voraus klar benannt - keine versteckten Gebühren oder Überraschungen",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: "Persönliche Erreichbarkeit",
      description: "Direkter Draht zu Ihrem Ansprechpartner - schnelle Lösungen bei allen Fragen",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Professionelle Tiefenreinigung",
      description: "Modernste Geräte und Verfahren für nachhaltige Sauberkeit - nicht nur oberflächlich",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Vollständige Dokumentation",
      description: "Detaillierte Berichte mit Vorher-Nachher-Fotos - Sie sehen genau was gemacht wurde",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "20+ Jahre Erfahrung",
      description: "Als Tochterfirma der Solar Komfort GmbH profitieren Sie von jahrzehntelanger Expertise",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 py-16 sm:py-20 md:py-24 lg:py-28">
      <Container>
        <SectionTitle
          preTitle="Ehrlich gesagt..."
          title="Sie kennen das bestimmt - Typische Probleme bei anderen Anbietern"
        >
          Jeder, der schon einmal eine Reinigungsfirma beauftragt hat, kennt diese Frustrationen. 
          Deshalb haben wir unser Unternehmen anders aufgebaut - kundenorientiert, transparent und zuverlässig.
        </SectionTitle>

        <div className="mt-12">
          {/* Desktop: Banner Image + Erklärungstext */}
          <div className="hidden md:block">
            <div className="mb-12 rounded-2xl overflow-hidden shadow-lg h-80 relative">
              <Image
                src="/img/flux/banner-fassadenreinigung.webp"
                alt="Fassadenreinigung Banner - Das Problem vs. Komfort Gebäudeservice24 Lösung"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 100vw"
              />
            </div>

            {/* Erklärungstext unter dem Banner (nur Desktop) */}
            <div className="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Wir machen es anders - professioneller!
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
                Der Unterschied ist offensichtlich: Während andere Reinigungsfirmen oberflächlich arbeiten und Qualitätsmängel ignorieren,
                setzen wir auf Transparenz, Zuverlässigkeit und professionelle Tiefenreinigung. Als Tochterfirma der Solar Komfort GmbH
                mit über 15 Jahren Erfahrung in Handwerk und Gebäudemanagement bringen wir eine komplett andere Herangehensweise mit.
                Ihre Zufriedenheit ist nicht nur ein Versprechen – sie ist unser Standard.
              </p>
            </div>
          </div>

          {/* Mobile: Banner Table Image */}
          <div className="md:hidden mb-12 rounded-2xl overflow-hidden shadow-lg relative">
            <Image
              src="/img/flux/problem-loesung-tabelle.webp"
              alt="Problem vs. Lösung Vergleichstabelle - Komfort Gebäudeservice24 vs. andere Reinigungsfirmen"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
              sizes="(max-width: 768px) 100vw"
            />
          </div>

          {/* Mobile: Erklärungstext */}
          <div className="md:hidden mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Wir machen es anders - professioneller!
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Der Unterschied ist offensichtlich: Während andere Reinigungsfirmen oberflächlich arbeiten und Qualitätsmängel ignorieren,
              setzen wir auf Transparenz, Zuverlässigkeit und professionelle Tiefenreinigung. Als Tochterfirma der Solar Komfort GmbH
              mit über 15 Jahren Erfahrung bringen wir eine komplett andere Herangehensweise mit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loesungen.map((loesung, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 dark:border-green-800/30 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {loesung.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 transition-colors">
                      {loesung.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {loesung.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">
              Überzeugen Sie sich selbst vom Unterschied!
            </h4>
            <p className="text-lg mb-6 opacity-90">
              Über 150 zufriedene Kunden bestätigen unsere Qualität. Erleben Sie professionelle Gebäudereinigung, wie sie sein sollte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/kontakt" 
                className="px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Kostenloses Erstgespräch
              </a>
              <a 
                href="/kostenrechner" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Kosten berechnen
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export { ProblemLoesungSection };