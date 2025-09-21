import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Breadcrumb } from '@/components/Breadcrumb';
import { RelatedServices } from '@/components/RelatedServices';
import Image from 'next/image';
import { Metadata } from "next";
import { CtaSection } from '@/components/CtaSection';
import { ServiceHeader } from '@/components/ServiceHeader';

export const metadata: Metadata = {
  title: "Hausmeisterservice - HK Komfort Facility & Gebäudeservice GmbH",
  description: "Professioneller Hausmeisterservice in Darmstadt und Umgebung. Regelmäßige Kontrollgänge, Kleinreparaturen, Techniküberwachung, Schließdienst, Ansprechpartner vor Ort.",
  keywords: "Hausmeisterservice, Hauswart, Hausverwaltung, Objektbetreuung, Darmstadt, Facility Management",
  openGraph: {
    title: "Hausmeisterservice - HK Komfort Facility & Gebäudeservice GmbH",
    description: "Professioneller Hausmeisterservice in Darmstadt und Umgebung. Regelmäßige Kontrollgänge, Kleinreparaturen, Techniküberwachung, Schließdienst, Ansprechpartner vor Ort.",
    url: "https://komfort-gebaeudeservice24.de/hausmeisterservice",
    siteName: "HK Komfort Facility & Gebäudeservice GmbH",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/img/flux/team-bei-der-arbeit1741879901018.webp",
        width: 1200,
        height: 630,
        alt: "Hausmeisterservice - Professionelle Objektbetreuung"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Hausmeisterservice - HK Komfort Facility & Gebäudeservice GmbH",
    description: "Professioneller Hausmeisterservice in Darmstadt und Umgebung. Regelmäßige Kontrollgänge, Kleinreparaturen, Techniküberwachung, Schließdienst, Ansprechpartner vor Ort.",
    images: ["/img/flux/team-bei-der-arbeit1741879901018.webp"]
  },
  alternates: {
    canonical: "https://komfort-gebaeudeservice24.de/hausmeisterservice"
  }
};

export default function Hausmeisterservice() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Breadcrumb Navigation */}
      <Breadcrumb />

      {/* Header Section mit schmalem Header und blaustichigem Overlay */}
      <ServiceHeader
        title="HAUSMEISTERSERVICE"
        description="Professioneller Hausmeisterservice in Darmstadt und Umgebung. Regelmäßige Kontrollgänge, Kleinreparaturen, Techniküberwachung, Schließdienst, Ansprechpartner vor Ort."
        imageSrc="/img/kundenbilder/Gartenpflege.png"
        imageAlt="Hausmeisterservice - Umfassende Objektbetreuung inklusive Außenpflege"
      />
      <Container>
        {/* Leistungsübersicht Section */}
        <Section id="leistungen" className="py-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Unsere Leistungen</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Wir übernehmen für Sie die professionelle Objektbetreuung - zuverlässig, kompetent und vor Ort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Regelmäßige Kontrollgänge</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tägliche oder wöchentliche Kontrollgänge durch unseren erfahrenen Hausmeister. Wir prüfen auf Schäden, Sicherheitsrisiken und Wartungsbedarf.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Kleinreparaturen</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Reparatur von Türen, Fenstern, Sanitärinstallationen, Elektrik und anderen technischen Anlagen. Wir arbeiten schnell und zuverlässig.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Techniküberwachung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Kontinuierliche Überwachung von Heizung, Lüftung, Klimaanlagen und anderen technischen Anlagen. Wir sorgen für reibungslosen Betrieb.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Schließdienst</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Zuverlässiger Schließdienst für Wohnanlagen, Büros und Gewerbeobjekte. Wir übernehmen die morgendliche Öffnung und abendliche Schließung.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Ansprechpartner vor Ort</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ihr persönlicher Ansprechpartner vor Ort. Wir sind für Ihre Mieter und Mitarbeiter jederzeit erreichbar und lösen Probleme schnell.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Objektbetreuung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Komplette Objektbetreuung für Wohnanlagen, Büros und Gewerbeobjekte. Wir übernehmen alle hausmeisterlichen Tätigkeiten.
              </p>
            </div>
          </div>
        </Section>

        {/* Vorteile Section */}
        <Section id="vorteile" className="py-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Warum HK Komfort Facility & Gebäudeservice GmbH?</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Wir sind Ihr zuverlässiger Partner für professionellen Hausmeisterservice in Darmstadt und Umgebung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Eigene Fachkräfte</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Keine Subunternehmer - nur geschultes, eigenes Personal. Wir garantieren Qualität und Zuverlässigkeit bei jeder Objektbetreuung.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">Transparente Preise</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Klare, transparente Angebote ohne versteckte Kosten. Wir erstellen Ihnen ein kostenloses, unverbindliches Angebot.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-orange-400">Schnelle Reaktionszeit</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Kurze Reaktionszeiten bei Störungen und Notfällen. 24/7-Rufbereitschaft auf Anfrage möglich.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Technische Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Unsere Hausmeister verfügen über umfangreiche technische Kenntnisse in Heizung, Elektrik, Sanitär und Facility Management.
              </p>
            </div>
          </div>
        </Section>

        {/* Prozess Section */}
        <Section id="prozess" className="py-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Unser Prozess</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              So arbeiten wir für Sie - transparent, professionell und zuverlässig.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-4">Bedarfsanalyse</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Umfassende Bedarfsanalyse Ihrer Objektbetreuung. Wir ermitteln Ihren individuellen Bedarf an Hausmeistertätigkeiten.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-4">Angebotserstellung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Maßgeschneidertes Angebot für Ihre Objektbetreuung. Transparente Preise und Leistungsbeschreibung.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-4">Vertragsabschluss</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Unkomplizierter Vertragsabschluss. Klare Regelungen zu Leistungen, Preisen und Kündigungsfristen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-4">Einarbeitung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Gründliche Einarbeitung in Ihre Objektbetreuung. Wir lernen Ihre Anlagen, Sicherheitsvorschriften und besonderen Anforderungen kennen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
              <h3 className="text-xl font-bold mb-4">Regelmäßige Betreuung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Regelmäßige Objektbetreuung nach Ihrem individuellen Fahrplan. Kontrollgänge, Wartungsarbeiten und Kleinreparaturen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">6</div>
              <h3 className="text-xl font-bold mb-4">Dokumentation & Reporting</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ausführliche Dokumentation aller durchgeführten Arbeiten. Monatliches Reporting über Wartungsarbeiten und Kosten.
              </p>
            </div>
          </div>
        </Section>
      </Container>

      {/* Related Services - Internal Linking für SEO */}
      <RelatedServices
        currentService="hausmeisterservice"
        category="gebaeudeservice"
        maxServices={4}
      />

      {/* CTA Section */}
      <CtaSection
        backgroundImage="/img/flux/team-bei-der-arbeit1741879901018.webp"
        backgroundAlt="Hausmeisterservice - Kontaktieren Sie uns für ein kostenloses Angebot"
        title="Bereit für einen professionellen Hausmeisterservice?"
        description="Kontaktieren Sie uns noch heute für eine unverbindliche Beratung zu Ihrer Objektbetreuung."
        buttonText="Kostenloses Angebot anfordern"
        buttonLink="/kontakt"
      />
    </div>
  );
}