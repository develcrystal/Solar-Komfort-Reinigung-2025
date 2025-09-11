import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { ExtendedProcessSteps } from "@/components/ExtendedProcessSteps";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Benefits from "@/components/Benefits";
import LeistungenImUberblick from "@/components/LeistungenImUberblick";
import TestimonialsSection from "@/components/TestimonialsSection";
import { WarumWirSection } from "@/components/WarumWirSection";
import { ProblemLoesungSection } from "@/components/ProblemLoesungSection";

const testimonials = [
  {
    rating: "★★★★★",
    text: "Als Wohnungsbaugesellschaft sind wir auf zuverlässige Partner angewiesen. Komfort Gebäudeservice24 betreut unsere Anlagen seit Jahren professionell und transparent.",
    name: "Petra Hartmann",
    role: "Wohnungsbaugesellschaft Darmstadt",
    initial: "P"
  },
  {
    rating: "★★★★★", 
    text: "In unserer Zahnarztpraxis ist Hygiene das A und O. Das Team arbeitet nach RKI-Vorgaben und verwendet nur zertifizierte Reinigungsmittel. Absolute Empfehlung!",
    name: "Dr. Michael Schmidt",
    role: "Zahnarztpraxis Groß-Gerau",
    initial: "M"
  },
  {
    rating: "★★★★★",
    text: "Vom Fitnessstudio bis zum Architekturbüro - Komfort Gebäudeservice24 kennt die besonderen Anforderungen jeder Branche. Eigenes Fachpersonal macht den Unterschied.",
    name: "Sandra Becker",
    role: "Facility Managerin, Gewerbezentrum",
    initial: "S"
  },
  {
    rating: "★★★★★",
    text: "Kommunale Einrichtungen haben besondere Anforderungen. Die strukturierten Prozesse und transparente Dokumentation überzeugen uns seit Jahren.",
    name: "Thomas Wagner",
    role: "Schulverwaltung Darmstadt",
    initial: "T"
  }
];

const Testimonials = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
    {testimonials.map((testimonial, index) => (
      <div key={index} className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
        <div className="flex items-center mb-3 sm:mb-4">
          <div className="text-yellow-400 text-lg sm:text-xl">{testimonial.rating}</div>
        </div>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 italic">
          &ldquo;{testimonial.text}&rdquo;
        </p>
        <div className="flex items-center">
          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
            <span className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium">
              {testimonial.initial}
            </span>
          </div>
          <div>
            <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">
              {testimonial.name}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const metadata: Metadata = {
  title: "Clean Komfort Gebäudeservice24 GmbH - Ihre Gebäudereinigung als Komplettlösung",
  description: "Professionelle Gebäudereinigung, Unterhaltsreinigung, Industriereinigung und Facility Management. Tochterfirma der Solar Komfort GmbH mit über 5.000 zufriedenen Kunden.",
  keywords: "Gebäudereinigung, Büroreinigung, Industriereinigung, Dachreinigung, Fassadenreinigung, Grundreinigung, Objektbetreuung, Berlin, Komfort Gebäudeservice24",
  openGraph: {
    title: "Clean Komfort Gebäudeservice24 GmbH - Ihre Gebäudereinigung als Komplettlösung",
    description: "Professionelle Gebäudereinigung, Unterhaltsreinigung, Industriereinigung und Facility Management. Tochterfirma der Solar Komfort GmbH.",
    url: "https://komfort-gebaeudeservice24.de",
    siteName: "Clean Komfort Gebäudeservice24 GmbH",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://komfort-gebaeudeservice24.de/img/flux/komfort-team-cleaning.webp",
        width: 1200,
        height: 630,
        alt: "Clean Komfort Gebäudeservice24 - Team bei der professionellen Gebäudereinigung"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Clean Komfort Gebäudeservice24 GmbH - Ihre Gebäudereinigung als Komplettlösung",
    description: "Tochterfirma der Solar Komfort GmbH. Über 5.000 zufriedene Kunden. Komplettlösungen aus einer Hand.",
    images: ["https://komfort-gebaeudeservice24.de/img/flux/kunden-dachreinigung-1.jpg"]
  },
  alternates: {
    canonical: "https://komfort-gebaeudeservice24.de"
  }
};

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero-Bereich - Fullwidth Layout */}
      <div className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px] w-full">
        {/* Hintergrundbild mit Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/flux/familie-vor-haus-mit-solaranlagen.webp"
            alt="Zufriedene Familie vor ihrem gepflegten Haus mit Solaranlage - Komfort Gebäudeservice24"
            fill
            className="object-cover brightness-[0.85]"
            style={{ transform: 'scaleX(-1)' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-900/40"></div>
        </div>
        {/* Hero-Content - Fullwidth ohne Container */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="max-w-4xl ml-4 sm:ml-8 lg:ml-48">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.2] tracking-tight text-white uppercase mb-4 sm:mb-6 drop-shadow-lg">
              KOMFORT GEBÄUDESERVICE24 GMBH<br />
              IHRE GEBÄUDEREINIGUNG ALS KOMPLETTLÖSUNG
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 drop-shadow-md">
              Willkommen bei HK Komfort Facility & Gebäudeservice GmbH – Ihrem zuverlässigen Partner für ganzheitliche Gebäudereinigung, technischen Service und intelligentes Facility Management. Als Tochterunternehmen der Solar Komfort GmbH bringen wir jahrelange Erfahrung aus Handwerk, Reinigung, Technik und Objektmanagement zusammen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link 
                href="/kontakt" 
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all"
              >
                Kostenloses Angebot erhalten
              </Link>
              <Link 
                href="#leistungen" 
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 transition-all"
              >
                Unsere Leistungen
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Über uns - Firmenvorstellung */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3 tracking-wider uppercase">Ihr zuverlässiger Partner</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Komfort Gebäudeservice24 GmbH</h3>
            <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Willkommen bei Komfort Gebäudeservice24 GmbH – Ihrem zuverlässigen Partner für ganzheitliche Gebäudereinigung, technischen Service und intelligentes Facility Management. Als Tochterunternehmen der Solar Komfort GmbH bringen wir jahrelange Erfahrung aus Handwerk, Reinigung, Technik und Objektmanagement zusammen.
            </p>
          </div>
          
          <div className="mb-12 sm:mb-16 max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
              Ob privates Haus, Wohnanlage, Bürokomplex, Gewerbeobjekt oder öffentliche Einrichtung: Unser Ziel ist es, Ihre Immobilie in Top-Zustand zu halten – optisch, technisch und wirtschaftlich. Wir arbeiten mit eigenem Fachpersonal, modernster Technik und transparenten Abläufen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-8 sm:w-9 h-8 sm:h-9 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Eigene Fachkräfte</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">Keine Subunternehmer - nur geschultes, eigenes Personal</p>
              </div>
              
              <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-8 sm:w-9 h-8 sm:h-9 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Zertifizierungen</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">Sachkunde für Dach, PV und Spezialbereiche</p>
              </div>
              
              <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-orange-50 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-8 sm:w-9 h-8 sm:h-9 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m12-6V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Strukturierte Prozesse</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">Transparente Angebote & dokumentierte Abläufe</p>
              </div>
              
              <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-purple-50 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-8 sm:w-9 h-8 sm:h-9 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Persönliche Betreuung</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">Feste Ansprechpartner & individuelle Beratung</p>
              </div>
            </div>
        </Container>
      </section>

      {/* Service Grid - 6-Service Komplettlösung */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <Container>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ihre Gebäudereinigung als Komplettlösung
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professionelle Reinigungsdienstleistungen für jeden Bereich - von der Fassade bis zum Innenraum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Service 1: Fassadenreinigung */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image 
                  src="/img/kundenbilder/Fassaden-Reingung.png" 
                  alt="Professionelle Fassadenreinigung"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Fassadenreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Wir sorgen dafür, dass Ihre Fassade richtig wieder strahlt. Entfernung von Algen und Schmutz ebenso effektiv wie professionell.
                </p>
              </div>
            </div>

            {/* Service 2: Fensterreinigung */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image 
                  src="/img/kundenbilder/Büroreinigung.png" 
                  alt="Professionelle Fensterreinigung"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Fensterreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Sie brauchen einen klaren Durchblick? Unsere Experten übernehmen gern die professionelle Reinigung von Fenstern und Glasflächen in bester Qualität.
                </p>
              </div>
            </div>

            {/* Service 3: Sanitärreinigung */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image 
                  src="/img/kundenbilder/Krankenhausreinigung.png" 
                  alt="Hygienische Sanitärreinigung"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Sanitärreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Durch die hygienische Reinigung der sanitären Anlagen erreichen diese immer einen optimalen und sauberen Zustand für alle.
                </p>
              </div>
            </div>

            {/* Service 4: Bodenreinigung */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image 
                  src="/img/kundenbilder/Grundreinigung.png" 
                  alt="Professionelle Bodenreinigung"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Bodenreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Egal welcher Bodenbelag, wir haben stets passende Reinigungsmittel und kennen die richtige Reinigungstechnik für gepflegten Boden.
                </p>
              </div>
            </div>

            {/* Service 5: Hausmeisterservice */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image 
                  src="/img/kundenbilder/Haus.png" 
                  alt="Zuverlässiger Hausmeisterservice"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Hausmeisterservice
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Mit dem Hausmeisterservice ist alles geregelt. Kleine Reparaturen, Energieabrechnung und gepflegte Instandhaltung.
                </p>
              </div>
            </div>

            {/* Service 6: Teppichreinigung */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image 
                  src="/img/kundenbilder/Pflaster-stein-Reinigung.png" 
                  alt="Professionelle Teppichreinigung"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Teppichreinigung
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  Wir übernehmen die Tiefenreinigung sämtlicher Bodenbeläge - materialschonend und hygienisch. Teppiche wie neu.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8 sm:mt-12">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/kontakt" 
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all min-h-[44px] touch-manipulation"
              >
                Kostenlose Beratung anfragen
              </Link>
              <Link 
                href="/kostenrechner" 
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 transition-all min-h-[44px] touch-manipulation"
              >
                Kosten berechnen
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem vs. Lösung - Vergleich */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-red-50 to-green-50">
        <Container>
          <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Der Unterschied ist offensichtlich
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Warum über 5.000 Kunden von anderen Reinigungsfirmen zu uns gewechselt sind
            </p>
          </div>

            {/* Vergleichstabelle */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* Header Row */}
                <div className="bg-gray-100 p-6 font-semibold text-gray-800">
                  Das Problem
                </div>
                <div className="bg-red-100 p-6 font-semibold text-red-800">
                  ❌ Andere Reinigungsfirmen
                </div>
                <div className="bg-green-100 p-6 font-semibold text-green-800">
                  ✅ Komfort Gebäudeservice24
                </div>

                {/* Comparison Rows */}
                <div className="p-6 border-t border-gray-200 bg-gray-50">
                  <p className="font-medium text-gray-900">Reinigungsqualität schwankt trotz Beschwerden</p>
                </div>
                <div className="p-6 border-t border-gray-200 bg-red-50">
                  <p className="text-red-700">Versprechen Besserung, aber keine Struktur</p>
                </div>
                <div className="p-6 border-t border-gray-200 bg-green-50">
                  <p className="text-green-700 font-medium">Strukturierte Qualitätskontrolle mit Checklisten</p>
                </div>

                <div className="p-6 border-t border-gray-200 bg-gray-50">
                  <p className="font-medium text-gray-900">Termine werden nicht eingehalten</p>
                </div>
                <div className="p-6 border-t border-gray-200 bg-red-50">
                  <p className="text-red-700">Ausreden und Entschuldigungen</p>
                </div>
                <div className="p-6 border-t border-gray-200 bg-green-50">
                  <p className="text-green-700 font-medium">Feste Terminpläne + Backup-Teams</p>
                </div>

                <div className="p-6 border-t border-gray-200 bg-gray-50">
                  <p className="font-medium text-gray-900">Ständiges Nachfassen erforderlich</p>
                </div>
                <div className="p-6 border-t border-gray-200 bg-red-50">
                  <p className="text-red-700">Reagieren nur auf Beschwerden</p>
                </div>
                <div className="p-6 border-t border-gray-200 bg-green-50">
                  <p className="text-green-700 font-medium">Proaktive Kommunikation + feste Ansprechpartner</p>
                </div>

                <div className="p-6 border-t border-gray-200 bg-gray-50">
                  <p className="font-medium text-gray-900">Unprofessionelles Personal</p>
                </div>
                <div className="p-6 border-t border-gray-200 bg-red-50">
                  <p className="text-red-700">Wechselnde Subunternehmer</p>
                </div>
                <div className="p-6 border-t border-gray-200 bg-green-50">
                  <p className="text-green-700 font-medium">Eigenes, geschultes Fachpersonal</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 rounded-2xl p-6 sm:p-8 mt-8 sm:mt-12 text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                Unser Versprechen an Sie:
              </h3>
              <p className="text-base sm:text-lg text-blue-100 mb-4 sm:mb-6">
                Konstante Qualität und zuverlässiger Service - oder Sie zahlen den ersten Monat nicht.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/kontakt" className="bg-white text-blue-600 font-bold py-3 px-6 sm:px-8 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                  Jetzt kostenlos testen
                </Link>
                <Link href="/galerie" className="bg-blue-800 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg border-2 border-white hover:bg-blue-900 transition-colors text-sm sm:text-base">
                  Referenzen anfordern
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Unsere Leistungen im Überblick */}
      <section id="leistungen" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <Container>
          <LeistungenImUberblick />
        </Container>
      </section>

      {/* Unsere Vorteile */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3 tracking-wider uppercase">Warum Komfort Gebäudeservice24?</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Unsere Vorteile auf einen Blick</h3>
            <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Als Tochterfirma der Solar Komfort GmbH bieten wir Ihnen Komplettlösungen aus einer Hand - besser, professioneller, dokumentierter und transparenter.
            </p>
          </div>
          <div className="mt-8 sm:mt-12">
            <Benefits />
          </div>
        </Container>
      </section>

      {/* Prozess */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <Container className="max-w-6xl">
          <ExtendedProcessSteps 
            steps={[
              {
                step: 1,
                title: "Beratung & Angebot",
                description: "Unverbindliche Beratung, umfassende Bedarfsanalyse und maßgeschneidertes Angebot. Wir nehmen uns Zeit für Ihre individuellen Anforderungen und erstellen eine auf Sie zugeschnittene Lösung.",
                imageSrc: "/img/flux/team-beratung1.webp",
                imageAlt: "Persönliche Beratung und Angebotserstellung",
                bgColor: "bg-blue-600"
              },
              {
                step: 2,
                title: "Terminvereinbarung",
                description: "Flexible Terminplanung nach Ihren Wünschen. Wir passen uns Ihrem Zeitplan an und garantieren pünktliches Erscheinen unserer Fachkräfte.",
                imageSrc: "/img/flux/dach-reinigung-prozess1.webp",
                imageAlt: "Terminvereinbarung für die Reinigung",
                bgColor: "bg-green-600"
              },
              {
                step: 3,
                title: "Professionelle Durchführung",
                description: "Professionelle Ausführung durch erfahrene Fachkräfte mit modernster Technik. Wir arbeiten gründlich, effizient und mit größter Sorgfalt.",
                imageSrc: "/img/flux/bueroeinigung-sauber.webp",
                imageAlt: "Professionelle Durchführung der Reinigungsarbeiten",
                bgColor: "bg-yellow-600"
              },
              {
                step: 4,
                title: "Qualitätskontrolle & Übergabe",
                description: "Abschließende Qualitätsprüfung, ausführliche Dokumentation der durchgeführten Arbeiten und Übergabe mit umfassender Garantie. Ihre Zufriedenheit ist unser Ziel.",
                imageSrc: "/img/kundenbilder/Dachreinigung Resultat!.png",
                imageAlt: "Qualitätskontrolle und Projektübergabe",
                bgColor: "bg-red-600"
              }
            ]}
            title="Unser bewährter 4-Stufen-Prozess"
            subtitle="Vom ersten Kontakt bis zur zufriedenen Übergabe - so garantieren wir Ihnen professionelle Ergebnisse"
          />
        </Container>
      </section>

      {/* Echte Kundenprojekte - Vorher/Nachher */}
      <section className="section section-light dark:bg-gray-900">
        <Container>
          <SectionTitle
            preTitle="Echte Kundenprojekte"
            title="Vorher/Nachher - Sehen Sie den Unterschied"
          >
            Überzeugen Sie sich selbst von der Qualität unserer Arbeit. Diese authentischen Vorher/Nachher-Bilder zeigen echte Kundenprojekte - dramatische Verbesserungen durch unsere professionelle Reinigung.
          </SectionTitle>
          
          <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Dachreinigung Projekt 1</h3>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/img/flux/kunden-dachreinigung-vorher-nachher-1.jpg"
                  alt="Echtes Kundenprojekt: Dachreinigung Vorher/Nachher - dramatische Verbesserung"
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 sm:h-72"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Authentisches Kundenprojekt:</strong> Sehen Sie den dramatischen Unterschied durch unsere professionelle Dachreinigung.
              </p>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Dachreinigung Projekt 2</h3>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/img/flux/kunden-dachreinigung-vorher-nachher-2.jpg"
                  alt="Weiteres echtes Kundenprojekt: Dachreinigung Vorher/Nachher"
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 sm:h-72"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Beeindruckendes Ergebnis:</strong> Von verschmutzt zu makelos - unsere Reinigung macht den Unterschied sichtbar.
              </p>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Dachreinigung Projekt 3</h3>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/img/flux/kunden-dachreinigung-vorher-nachher-3.jpg"
                  alt="Drittes echtes Kundenprojekt: Dachreinigung Vorher/Nachher"
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 sm:h-72"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Einer von 5.000+ Kunden:</strong> Authentische Referenz - so arbeiten wir für zufriedene Kunden seit Jahren.
              </p>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-10 text-center">
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
              Hier sehen Sie Beispiele unserer Dachreinigungsarbeiten mit deutlich sichtbaren Verbesserungen.
            </p>
            <Link 
              href="/galerie" 
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all"
            >
              Mehr Projekte ansehen
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* Kundenstimmen */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3 tracking-wider uppercase">Das sagen unsere Kunden</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Bewertungen & Erfahrungen</h3>
            <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
          </div>
          <Testimonials />
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3 tracking-wider uppercase">Häufige Fragen</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Antworten auf Ihre Fragen</h3>
            <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Hier finden Sie Antworten auf die am häufigsten gestellten Fragen zu unseren Reinigungsdienstleistungen.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Faq />
          </div>
        </Container>
      </section>

      {/* Call-to-Action - Fullwidth Layout */}
      <div id="kontakt" className="w-full">
        <CtaSection
          backgroundImage="/img/kundenbilder/buero-reinigung-profi.png"
          backgroundAlt="Professionelle Büroreinigung - Kontaktieren Sie uns für Ihr kostenloses Angebot"
          title="Bereit für professionelle Gebäudereinigung?"
          description="Vereinbaren Sie noch heute Ihren kostenlosen Beratungstermin! Unsere Gründer Mohamed Kaddouri & Abdelhafid Hajjout vereinen jahrelange Erfahrung aus Handwerk, Solartechnik und professioneller Gebäudebetreuung. Als Tochterunternehmen der Solar Komfort GmbH sind wir Ihr zuverlässiger Partner."
          buttonText="Kostenloses Angebot anfordern"
          buttonLink="/kontakt"
        />
      </div>
    </div>
  );
}