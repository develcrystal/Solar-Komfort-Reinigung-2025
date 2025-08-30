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
      {/* Hero-Bereich - Layout von startseite2 */}
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
        {/* Hero-Content */}
        <Container className="relative z-10 h-full flex items-center">
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
        </Container>
      </div>

      {/* Wer wir sind - Kurze Einleitung */}
      <div className="bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20">
        <Container>
          <SectionTitle
            preTitle="Über uns"
            title="Wer wir sind"
          >
            Als Tochterfirma der renommierten Solar Komfort GmbH bringen wir jahrelange Erfahrung und Expertise in der Gebäudereinigung und im Facility Management mit. Mit über 5.000 zufriedenen Kunden haben wir uns als zuverlässiger Partner etabliert.
          </SectionTitle>
        </Container>
      </div>

      {/* Unsere Leistungen im Überblick */}
      <LeistungenImUberblick />

      {/* Sie kennen das bestimmt... - Probleme ansprechen */}
      <div className="bg-gray-50 dark:bg-gray-800 py-12 sm:py-16 md:py-20 lg:py-28">
        <Container>
          <SectionTitle
            preTitle="Sie kennen das bestimmt..."
            title="Typische Probleme bei anderen Anbietern"
          >
            Unzuverlässige Termine, mangelhafte Dokumentation, versteckte Kosten oder schlechte Erreichbarkeit - wir machen es anders! Als professioneller Partner bieten wir Ihnen transparente, dokumentierte und zuverlässige Dienstleistungen.
          </SectionTitle>
          <div className="mt-10 sm:mt-12 md:mt-16">
            <Benefits />
          </div>
        </Container>
      </div>

      {/* Unser 6-Stufen-Ablauf */}
      <div className="bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20">
        <Container>
          <SectionTitle
            preTitle="Unser Arbeitsablauf"
            title="So arbeiten wir für Sie"
          >
            Von der ersten Kontaktaufnahme bis zur finalen Qualitätskontrolle - unser bewährter 6-Stufen-Prozess garantiert Ihnen professionelle Ergebnisse und vollste Zufriedenheit.
          </SectionTitle>
        </Container>
        <ExtendedProcessSteps 
          steps={[
            {
              step: 1,
              title: "Erste Kontaktaufnahme",
              description: "Sie kontaktieren uns telefonisch oder über unser Kontaktformular. Wir besprechen Ihre Anforderungen und vereinbaren einen Termin für die Vor-Ort-Besichtigung.",
              imageSrc: "/img/flux/team-beratung1.webp",
              imageAlt: "Erste Beratung und Kontaktaufnahme",
              bgColor: "bg-blue-600"
            },
            {
              step: 2,
              title: "Detaillierte Analyse vor Ort",
              description: "Unser Experten-Team führt eine gründliche Analyse durch, dokumentiert den aktuellen Zustand und identifiziert alle Reinigungsbereiche und besonderen Anforderungen.",
              imageSrc: "/img/flux/dach-reinigung-prozess1.webp",
              imageAlt: "Professionelle Vor-Ort-Analyse",
              bgColor: "bg-green-600"
            },
            {
              step: 3,
              title: "Transparentes Angebot",
              description: "Basierend auf der Analyse erstellen wir Ihnen ein detailliertes, transparentes Angebot ohne versteckte Kosten. Alle Leistungen und Preise sind klar aufgeschlüsselt.",
              imageSrc: "/img/flux/bueroeinigung-sauber.webp",
              imageAlt: "Detailliertes transparentes Angebot",
              bgColor: "bg-orange-600"
            },
            {
              step: 4,
              title: "Terminvereinbarung",
              description: "Nach Ihrer Auftragserteilung vereinbaren wir verbindliche Termine, die zu Ihrem Zeitplan passen. Pünktlichkeit und Zuverlässigkeit sind für uns selbstverständlich.",
              imageSrc: "/img/flux/team-beratung1.webp",
              imageAlt: "Zuverlässige Terminplanung",
              bgColor: "bg-purple-600"
            },
            {
              step: 5,
              title: "Professionelle Durchführung",
              description: "Unser geschultes Team führt die Arbeiten mit modernsten Geräten und umweltfreundlichen Reinigungsmitteln durch. Dabei dokumentieren wir jeden Arbeitsschritt.",
              imageSrc: "/ideogram-images/ideogram-prompt-father-mother-and-two.jpeg",
              imageAlt: "Professionelle Reinigungsarbeiten",
              bgColor: "bg-yellow-600"
            },
            {
              step: 6,
              title: "Qualitätskontrolle & Übergabe",
              description: "Abschließende Qualitätsprüfung, ausführliche Dokumentation der durchgeführten Arbeiten und Übergabe mit umfassender Garantie. Ihre Zufriedenheit ist unser Ziel.",
              imageSrc: "/img/kundenbilder/Dachreinigung Resultat!.png",
              imageAlt: "Qualitätskontrolle und Projektübergabe",
              bgColor: "bg-red-600"
            }
          ]}
          title="Unser bewährter 6-Stufen-Prozess"
          subtitle="Vom ersten Kontakt bis zur zufriedenen Übergabe - so garantieren wir Ihnen professionelle Ergebnisse"
        />
      </div>

      {/* Facility Management - Warum so wichtig? */}
      <div className="bg-gray-50 dark:bg-gray-800 py-12 sm:py-16 md:py-20">
        <Container>
          <SectionTitle
            preTitle="Facility Management"
            title="Warum professionelles Gebäudemanagement so wichtig ist"
          >
            Professionelles Facility Management spart Kosten, erhält den Wert Ihrer Immobilie und sorgt für ein angenehmes Arbeits- und Wohnumfeld. Als erfahrener Partner übernehmen wir die komplette Betreuung Ihrer Objekte.
          </SectionTitle>
          
          <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Kosteneinsparung</h3>
              <p className="text-gray-600 dark:text-gray-300">Vorbeugende Wartung und professionelle Pflege reduzieren langfristige Instandhaltungskosten erheblich.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Werterhaltung</h3>
              <p className="text-gray-600 dark:text-gray-300">Regelmäßige Pflege und Instandhaltung erhalten den Wert Ihrer Immobilie und verhindern kostspielige Schäden.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Wohlbefinden</h3>
              <p className="text-gray-600 dark:text-gray-300">Ein gepflegtes Umfeld steigert das Wohlbefinden von Bewohnern und Mitarbeitern und verbessert das Firmenimage.</p>
            </div>
          </div>
        </Container>
      </div>

      {/* Echte Kundenprojekte - Vorher/Nachher */}
      <div className="bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-28">
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
      </div>

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

      {/* Call-to-Action */}
      <div id="kontakt">
        <CtaSection
          backgroundImage="/img/flux/team-beratung1.webp"
          backgroundAlt="Kontaktieren Sie uns für professionelle Gebäudereinigung"
          title="Bereit für professionelle Gebäudereinigung?"
          description="Vereinbaren Sie noch heute Ihren kostenlosen Beratungstermin! Über 5.000 zufriedene Kunden vertrauen bereits auf unsere Expertise als Tochterfirma der Solar Komfort GmbH."
          buttonText="Kostenloses Angebot anfordern"
          buttonLink="/kontakt"
        />
      </div>
    </>
  );
}
