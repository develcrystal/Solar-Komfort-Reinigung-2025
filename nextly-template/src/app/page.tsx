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
  title: "Komfort Gebäudeservice24 GmbH - Ihre Gebäudereinigung als Komplettlösung",
  description: "Professionelle Gebäudereinigung, Unterhaltsreinigung, Industriereinigung und Facility Management. Tochterfirma der Solar Komfort GmbH mit über 5.000 zufriedenen Kunden.",
  keywords: "Gebäudereinigung, Büroreinigung, Industriereinigung, Dachreinigung, Fassadenreinigung, Grundreinigung, Objektbetreuung, Berlin, Komfort Gebäudeservice24",
  openGraph: {
    title: "Komfort Gebäudeservice24 GmbH - Ihre Gebäudereinigung als Komplettlösung",
    description: "Professionelle Gebäudereinigung, Unterhaltsreinigung, Industriereinigung und Facility Management. Tochterfirma der Solar Komfort GmbH.",
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
    <>
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
              IHRE GEBÄUDEREINIGUNG<br />
              <span className="whitespace-nowrap">ALS KOMPLETTLÖSUNG</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 drop-shadow-md">
              Als Tochterfirma der Solar Komfort GmbH sind wir Ihr professioneller Partner für Gebäudereinigung und Facility Management. Mit über 5.000 zufriedenen Kunden und jahrelanger Erfahrung bieten wir Ihnen dokumentierte, transparente Komplettlösungen aus einer Hand.
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

      {/* Warum wir Section */}
      <WarumWirSection />

      {/* Problem-Lösung Section */} 
      <ProblemLoesungSection />

      {/* Unsere Leistungen im Überblick */}
      <LeistungenImUberblick />

      {/* Kostenrechner */}
      <Preiskalkulator />

      {/* Kundenstimmen */}
      <TestimonialsSection />

      {/* FAQ */}
      <div className="bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-28">
        <Container>
          <SectionTitle
            preTitle="Häufige Fragen"
            title="Antworten auf Ihre Fragen"
          >
            Hier finden Sie Antworten auf die am häufigsten gestellten Fragen zu unseren Reinigungsdienstleistungen.
          </SectionTitle>
          <div className="mt-10 sm:mt-12 md:mt-16 max-w-3xl mx-auto">
            <Faq />
          </div>
        </Container>
      </div>

      {/* Call-to-Action - Fullwidth Layout */}
      <div id="kontakt" className="w-full">
        <CtaSection
          backgroundImage="/img/kundenbilder/buero-reinigung-profi.png"
          backgroundAlt="Professionelle Büroreinigung - Kontaktieren Sie uns für Ihr kostenloses Angebot"
          title="Bereit für professionelle Gebäudereinigung?"
          description="Vereinbaren Sie noch heute Ihren kostenlosen Beratungstermin! Über 5.000 zufriedene Kunden vertrauen bereits auf unsere Expertise als Tochterfirma der Solar Komfort GmbH."
          buttonText="Kostenloses Angebot anfordern"
          buttonLink="/kontakt"
        />
      </div>
    </>
  );
}