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
    role: "Zahnarztpraxis Berlin-Mitte",
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
        <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white uppercase mb-4 sm:mb-6 drop-shadow-lg">
              CLEAN KOMFORT GEBÄUDESERVICE24 GMBH<br />
              <span className="whitespace-nowrap">IHRE GEBÄUDEREINIGUNG ALS KOMPLETTLÖSUNG</span>
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

      {/* Über uns - Firmenvorstellung */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3 tracking-wider uppercase">Ihr zuverlässiger Partner</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Clean Komfort Gebäudeservice24 GmbH</h3>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Willkommen bei Clean Komfort Gebäudeservice24 GmbH – Ihrem zuverlässigen Partner für ganzheitliche Gebäudereinigung, technischen Service und intelligentes Facility Management. Als Tochterunternehmen der Solar Komfort GmbH bringen wir jahrelange Erfahrung aus Handwerk, Reinigung, Technik und Objektmanagement zusammen.
            </p>
          </div>
          
          <div className="mb-16 max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
              Ob privates Haus, Wohnanlage, Bürokomplex, Gewerbeobjekt oder öffentliche Einrichtung: Unser Ziel ist es, Ihre Immobilie in Top-Zustand zu halten – optisch, technisch und wirtschaftlich. Wir arbeiten mit eigenem Fachpersonal, modernster Technik und transparenten Abläufen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-9 h-9 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Eigene Fachkräfte</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Keine Subunternehmer - nur geschultes, eigenes Personal</p>
              </div>
              
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="w-20 h-20 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-9 h-9 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Zertifizierungen</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Sachkunde für Dach, PV und Spezialbereiche</p>
              </div>
              
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="w-20 h-20 bg-orange-50 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-9 h-9 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m12-6V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Strukturierte Prozesse</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Transparente Angebote & dokumentierte Abläufe</p>
              </div>
              
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="w-20 h-20 bg-purple-50 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-9 h-9 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Persönliche Betreuung</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Feste Ansprechpartner & individuelle Beratung</p>
              </div>
            </div>
        </Container>
      </section>

      {/* 3 Hauptbereiche - Leistungen im Überblick */}
      <section id="leistungen" className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <SectionTitle
            preTitle="Unsere Expertise"
            title="Drei Hauptbereiche aus einer Hand"
          >
            Mehr als nur Reinigung – wir bieten Ihnen Komplettlösungen für alle Gebäudebereiche: von der gründlichen Reinigung über technischen Service bis hin zum professionellen Facility Management.
          </SectionTitle>
          <LeistungenImUberblick />
        </Container>
      </section>

      {/* Problem & Lösung */}
      <section className="py-20 bg-blue-50 dark:bg-gray-800">
        <Container>
          <ProblemLoesungSection />
        </Container>
      </section>

      {/* Unsere Vorteile */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3 tracking-wider uppercase">Warum Clean Komfort Gebäudeservice24?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Unsere Vorteile auf einen Blick</h3>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Als Tochterfirma der Solar Komfort GmbH bieten wir Ihnen Komplettlösungen aus einer Hand - besser, professioneller, dokumentierter und transparenter.
            </p>
          </div>
          <div className="mt-12">
            <Benefits />
          </div>
        </Container>
      </section>

      {/* Prozess */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
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
              <strong>Alle Bilder sind echte Kundenprojekte!</strong> Keine gestellten Fotos - das sind authentische Vorher/Nachher-Ergebnisse unserer täglichen Arbeit.
            </p>
            <Link 
              href="/galerie" 
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all"
            >
              Mehr Kundenprojekte ansehen
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* Kundenstimmen */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3 tracking-wider uppercase">Das sagen unsere Kunden</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Bewertungen & Erfahrungen</h3>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          <Testimonials />
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3 tracking-wider uppercase">Häufige Fragen</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Antworten auf Ihre Fragen</h3>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
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