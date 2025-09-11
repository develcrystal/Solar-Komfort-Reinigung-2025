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
import { Preiskalkulator } from "@/components/Preiskalkulator";

const testimonials = [
  {
    rating: "★★★★★",
    text: "Solar Komfort reinigt seit 3 Jahren unsere Büroräume. Immer pünktlich, gründlich und freundlich. Die Qualität stimmt einfach!",
    name: "Andreas Müller",
    role: "Geschäftsführer, IT-Consulting Berlin",
    initial: "A"
  },
  {
    rating: "★★★★★", 
    text: "Hervorragende Fassadenreinigung! Das Ergebnis war beeindruckend und der Service sehr professionell. Gerne wieder!",
    name: "Bettina Klein",
    role: "Facility Managerin, Bürokomplex Mitte",
    initial: "B"
  },
  {
    rating: "★★★★★",
    text: "Zuverlässige Objektbetreuung seit Jahren. Probleme werden schnell gelöst und die Kommunikation ist immer transparent.",
    name: "Christian Weber",
    role: "Hausverwaltung, Wohnanlage Charlottenburg",
    initial: "C"
  }
];

const Testimonials = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {testimonials.map((testimonial, index) => (
      <div key={index} className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
        <div className="flex items-center mb-3 sm:mb-4">
          <div className="text-yellow-400 text-lg sm:text-xl">{testimonial.rating}</div>
        </div>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 italic">
          &ldquo;{testimonial.text}&rdquo;
        </p>
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-medium">
              {testimonial.initial}
            </div>
          </div>
          <div>
            <div className="font-medium text-gray-900 dark:text-white">{testimonial.name}</div>
            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const metadata: Metadata = {
  title: "Komfort Gebäudeservice24 GmbH - Gebäudereinigung Berlin",
  description: "Professionelle Gebäudereinigung in Berlin und Umgebung. Reinigungsfirma für Büro, Industrie und Facility Management. Jetzt Angebot anfordern!",
  keywords: "Gebäudereinigung Berlin, Reinigungsfirma Berlin, Facility Management Berlin, Komfort Gebäudeservice24",
  openGraph: {
    title: "Komfort Gebäudeservice24 GmbH - Ihre Gebäudereinigung als Komplettlösung",
    description: "Professionelle Gebäudereinigung, Unterhaltsreinigung, Industriereinigung und Facility Management. Tochterfirma der Solar Komfort GmbH mit über 5.000 zufriedenen Kunden.",
    url: "https://komfort-gebaeudeservice24.de",
    siteName: "Komfort Gebäudeservice24 GmbH",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://komfort-gebaeudeservice24.de/img/flux/komfort-team-cleaning.webp",
        width: 1200,
        height: 630,
        alt: "Komfort Gebäudeservice24 - Team bei der professionellen Gebäudereinigung"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Komfort Gebäudeservice24 GmbH - Ihre Gebäudereinigung als Komplettlösung",
    description: "Tochterfirma der Solar Komfort GmbH. Über 5.000 zufriedene Kunden. Komplettlösungen aus einer Hand.",
    images: ["https://komfort-gebaeudeservice24.de/img/flux/kunden-dachreinigung-1.jpg"]
  },
  alternates: {
    canonical: "https://komfort-gebaeudeservice24.de"
  }
};

export default function Home() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/flux/familie-vor-haus-mit-solaranlagen.webp"
            alt="Zufriedene Familie vor ihrem gepflegten Haus mit Solaranlage - Komfort Gebäudeservice24"
            fill
            className="object-cover scale-110"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/60 to-blue-900/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-8">
          <div className="max-w-4xl text-white">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-blue-600/80 text-sm font-semibold rounded-full mb-4">SEIT ÜBER 10 JAHREN IHR PARTNER</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
                PROFESSIONELLE<br />
                <span className="text-blue-300">GEBÄUDEREINIGUNG</span><br />
                AUS EINER HAND
              </h1>
              
              <div className="w-24 h-1.5 bg-blue-400 mb-8 rounded-full"></div>
              
              <p className="text-xl md:text-2xl mb-10 max-w-2xl leading-relaxed">
                Als Tochterfirma der Solar Komfort GmbH bieten wir professionelle Reinigungsdienstleistungen für Gewerbe, Industrie und Privathaushalte in Berlin und Umgebung.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link 
                  href="/kontakt" 
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-lg text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/30"
                >
                  KOSTENLOSES ANGEBOT ANFORDERN
                </Link>
                <Link 
                  href="#leistungen" 
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-lg text-center backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 border border-white/20 hover:border-white/30"
                >
                  UNSERE LEISTUNGEN
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-600/30 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-semibold">5.000+</span>
                  </div>
                  <p className="text-sm text-gray-200">Zufriedene Kunden</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-600/30 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-semibold">100%</span>
                  </div>
                  <p className="text-sm text-gray-200">Zertifizierte Fachkräfte</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-600/30 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-semibold">24/7</span>
                  </div>
                  <p className="text-sm text-gray-200">Notdienst verfügbar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <a href="#leistungen" className="inline-block animate-bounce">
            <div className="w-10 h-16 border-2 border-white/30 rounded-full flex justify-center p-1">
              <div className="w-1 h-3 bg-white rounded-full"></div>
            </div>
          </a>
        </div>
      </div>

      {/* Wer wir sind - Kurze Einleitung */}
      <section className="section section-light dark:bg-gray-900">
        <Container>
          <SectionTitle
            preTitle="Über uns"
            title="Wer wir sind"
          >
            Als Tochterfirma der renommierten Solar Komfort GmbH bringen wir jahrelange Erfahrung und Expertise in der Gebäudereinigung und im Facility Management mit. Mit über 150 zufriedenen Kunden haben wir uns als zuverlässiger Partner etabliert.
          </SectionTitle>
          
          <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">Unsere Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Wir streben danach, durch innovative Reinigungslösungen und herausragenden Service die höchste Kundenzufriedenheit zu erreichen. Unser Ziel ist es, Ihre Immobilie nicht nur sauber, sondern auch nachhaltig zu pflegen.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">Unser Versprechen</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Als Teil der Solar Komfort GmbH stehen wir für Qualität, Verlässlichkeit und Transparenz. Wir verwenden ausschließlich umweltfreundliche Reinigungsmittel und moderne Technologien für optimale Ergebnisse.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Leistungen im Überblick */}
      <section id="leistungen" className="section">
        <LeistungenImUberblick />
      </section>

      {/* Warum wir? */}
      <section className="section section-light dark:bg-gray-900">
        <WarumWirSection />
      </section>

      {/* Problem & Lösung */}
      <section className="section">
        <ProblemLoesungSection />
      </section>

      {/* Unsere Vorteile */}
      <section className="section section-light dark:bg-gray-900">
        <Container>
          <SectionTitle
            preTitle="Warum Komfort Gebäudeservice24?"
            title="Unsere Vorteile auf einen Blick"
          >
            Als Tochterfirma der Solar Komfort GmbH bieten wir Ihnen Komplettlösungen aus einer Hand - besser, professioneller, dokumentierter und transparenter.
          </SectionTitle>
          <div className="mt-10 sm:mt-12 md:mt-16">
            <Benefits />
          </div>
        </Container>
      </section>

      {/* Prozess */}
      <section className="section">
        <Container>
          <ExtendedProcessSteps 
            steps={[
              {
                title: "Beratung & Angebot",
                description: "Unverbindliche Beratung, umfassende Bedarfsanalyse und maßgeschneidertes Angebot. Wir nehmen uns Zeit für Ihre individuellen Anforderungen und erstellen eine auf Sie zugeschnittene Lösung.",
                imageSrc: "/img/flux/beratung-angebot.webp",
                imageAlt: "Persönliche Beratung und Angebotserstellung",
                bgColor: "bg-blue-600"
              },
              {
                title: "Terminvereinbarung",
                description: "Flexible Terminplanung nach Ihren Wünschen. Wir passen uns Ihrem Zeitplan an und garantieren pünktliches Erscheinen unserer Fachkräfte.",
                imageSrc: "/img/flux/terminvereinbarung.webp",
                imageAlt: "Terminvereinbarung für die Reinigung",
                bgColor: "bg-green-600"
              },
              {
                title: "Durchführung",
                description: "Professionelle Ausführung durch erfahrene Fachkräfte mit modernster Technik. Wir arbeiten gründlich, effizient und mit größter Sorgfalt.",
                imageSrc: "/img/flux/durchfuehrung.webp",
                imageAlt: "Professionelle Durchführung der Reinigungsarbeiten",
                bgColor: "bg-yellow-600"
              },
              {
                title: "Qualitätskontrolle & Übergabe",
                description: "Abschließende Qualitätsprüfung, ausführliche Dokumentation der durchgeführten Arbeiten und Übergabe mit umfassender Garantie. Ihre Zufriedenheit ist unser Ziel.",
                imageSrc: "/img/flux/qualitaetskontrolle-uebergabe.webp",
                imageAlt: "Qualitätskontrolle und Projektübergabe",
                bgColor: "bg-red-600"
              }
            ]}
            title="Unser bewährter 4-Stufen-Prozess"
            subtitle="Vom ersten Kontakt bis zur zufriedenen Übergabe - so garantieren wir Ihnen professionelle Ergebnisse"
          />
        </Container>
      </section>

      {/* Referenzprojekte - Vorher/Nachher */}
      <section className="section section-light dark:bg-gray-900">
        <Container>
          <SectionTitle
            preTitle="Unsere Referenzen"
            title="Überzeugende Ergebnisse - Vorher/Nachher"
          >
            Sehen Sie selbst, welche beeindruckenden Resultate wir für unsere Kunden erzielen. 
            Diese Vorher-Nachher-Vergleiche zeigen die Qualität und Wirksamkeit unserer professionellen Reinigungsdienstleistungen.
          </SectionTitle>
          
          <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Dachreinigung & Beschichtung</h3>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/img/flux/kunden-dachreinigung-1.jpg"
                  alt="Echtes Kundenprojekt: Dachreinigung und Beschichtung Vorher/Nachher"
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 sm:h-80"
                />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                <strong>Echtes Kundenprojekt:</strong> Dramatischer Unterschied durch professionelle Dachreinigung und Nano-Beschichtung. Links verschmutzt, rechts wie neu!
              </p>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Fassadenreinigung</h3>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/img/flux/fassadenreinigung-vorher-nachher.jpg"
                  alt="Fassadenreinigung Vorher/Nachher - Komfort Gebäudeservice24"
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 sm:h-80"
                />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                <strong>Fassadenreinigung:</strong> Unsere schonende Reinigung entfernt selbst hartnäckigsten Schmutz und lässt Ihre Fassade in neuem Glanz erstrahlen.
              </p>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Büroreinigung</h3>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/img/flux/bueroreinigung-vorher-nachher.jpg"
                  alt="Büroreinigung Vorher/Nachher - Komfort Gebäudeservice24"
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 sm:h-80"
                />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                <strong>Bürokomplex:</strong> Regelmäßige Unterhaltsreinigung sorgt für ein sauberes und einladendes Arbeitsumfeld. Ihre Mitarbeiter werden es zu schätzen wissen!
              </p>
            </div>
          </div>
          
          <div className="mt-10 sm:mt-12 text-center">
            <Link 
              href="/galerie" 
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all"
            >
              Weitere Referenzen ansehen
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* Kundenstimmen */}
      <section className="section section-light dark:bg-gray-900">
        <Container>
          <SectionTitle
            preTitle="Kundenstimmen"
            title="Was unsere Kunden über uns sagen"
          >
            Hier finden Sie einige Stimmen unserer zufriedenen Kunden.
          </SectionTitle>
          <div className="mt-10 sm:mt-12 md:mt-16">
            <TestimonialsSection />
          </div>
        </Container>
      </section>

      {/* Preisrechner */}
      <section className="section">
        <Container>
          <SectionTitle
            preTitle="Kostenlose Angebotsanfrage"
            title="Preiskalkulator"
          >
            Berechnen Sie jetzt unverbindlich die Kosten für Ihre gewünschte Reinigungsleistung.
          </SectionTitle>
          <div className="mt-10 sm:mt-12 md:mt-16">
            <Preiskalkulator />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section section-light dark:bg-gray-900">
        <Container>
          <SectionTitle
            preTitle="Häufig gestellte Fragen"
            title="Sie haben Fragen? Wir haben Antworten!"
          >
            Hier finden Sie Antworten auf die am häufigsten gestellten Fragen zu unseren Dienstleistungen.
          </SectionTitle>
          <div className="mt-10 sm:mt-12 md:mt-16 max-w-3xl mx-auto">
            <Faq />
          </div>
        </Container>
      </section>

      {/* Call-to-Action - Full Width */}
      <div className="section-full bg-blue-600 text-white">
        <CtaSection
          backgroundImage="/img/flux/team-beratung1.webp"
          backgroundAlt="Kontaktieren Sie uns für professionelle Gebäudereinigung"
          title="Bereit für professionelle Gebäudereinigung?"
          description="Vereinbaren Sie noch heute Ihren kostenlosen Beratungstermin! Über 150 zufriedene Kunden vertrauen bereits auf unsere Expertise als Tochterfirma der Solar Komfort GmbH."
          buttonText="Kostenloses Angebot anfordern"
          buttonLink="/kontakt"
        />
      </div>
    </div>
  );
}
