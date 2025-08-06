import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Benefits from "@/components/Benefits";
import LeistungenImUberblick from "@/components/LeistungenImUberblick";

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
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {testimonials.map((testimonial, index) => (
      <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
        <div className="flex items-center mb-4">
          <div className="text-yellow-400 text-xl">{testimonial.rating}</div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
          "{testimonial.text}"
        </p>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              {testimonial.initial}
            </span>
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-white">
              {testimonial.name}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
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
  description: "Wir sind Ihre Tochterfirma von Solar Komfort GmbH - professionelle Dienstleister mit jahrelanger Erfahrung. Von der Dachreinigung bis zur Industriereinigung - Komplettlösungen aus einer Hand.",
  keywords: "Gebäudereinigung, Büroreinigung, Industriereinigung, Dachreinigung, Fassadenreinigung, Grundreinigung, Objektbetreuung, Berlin, Komfort Gebäudeservice24",
  openGraph: {
    title: "Komfort Gebäudeservice24 GmbH - Ihre Gebäudereinigung als Komplettlösung",
    description: "Wir sind Ihre Tochterfirma von Solar Komfort GmbH - professionelle Dienstleister mit jahrelanger Erfahrung. Komplettlösungen aus einer Hand.",
    url: "https://komfort-gebaeudeservice24.de",
    siteName: "Komfort Gebäudeservice24 GmbH",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://komfort-gebaeudeservice24.de/img/flux/kunden-dachreinigung-1.jpg",
        width: 1200,
        height: 630,
        alt: "Komfort Gebäudeservice24 - Echte Kundenprojekte der Gebäudereinigung"
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
      <div className="relative h-[80vh] min-h-[600px] w-full">
        {/* Hintergrundbild mit Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/flux/team-bei-der-arbeitwebp.webp"
            alt="Komfort Gebäudeservice24 - Team bei der professionellen Gebäudereinigung"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-900/40"></div>
        </div>
        {/* Hero-Content */}
        <Container className="relative z-10 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white uppercase mb-4 drop-shadow-lg">
              IHRE<br />
              GEBÄUDEREINIGUNG<br />
              ALS KOMPLETTLÖSUNG
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              Wir sind Ihre Tochterfirma von Solar Komfort GmbH - professionelle Dienstleister mit jahrelanger Erfahrung. Von der Dachreinigung bis zur Industriereinigung - wir bieten Ihnen Komplettlösungen aus einer Hand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/kontakt" 
                className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all"
              >
                Kostenloses Angebot erhalten
              </Link>
              <Link 
                href="#leistungen" 
                className="px-8 py-4 text-lg font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 transition-all"
              >
                Unsere Leistungen
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Unsere Leistungen im Überblick */}
      <LeistungenImUberblick />

      {/* Unsere Vorteile */}
      <div className="bg-gray-50 dark:bg-gray-800 py-20 sm:py-28">
        <Container>
          <SectionTitle
            preTitle="Warum Komfort Gebäudeservice24?"
            title="Unsere Vorteile auf einen Blick"
          >
            Als Tochterfirma der Solar Komfort GmbH bieten wir Ihnen Komplettlösungen aus einer Hand - besser, professioneller, dokumentierter und transparenter.
          </SectionTitle>
          <div className="mt-16">
            <Benefits />
          </div>
        </Container>
      </div>

      {/* Vorher/Nachher Galerie */}
      <div className="bg-white dark:bg-gray-900 py-20 sm:py-28">
        <Container>
          <SectionTitle
            preTitle="Unsere Arbeit"
            title="Vorher/Nachher - Sehen Sie den Unterschied"
          >
            Überzeugen Sie sich selbst von der Qualität unserer Reinigungsarbeiten durch diese Beispiele unserer täglichen Arbeit.
          </SectionTitle>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Dachreinigung & Beschichtung</h3>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/img/flux/kunden-dachreinigung-1.jpg"
                  alt="Echtes Kundenprojekt: Dachreinigung und Beschichtung Vorher/Nachher"
                  width={600}
                  height={400}
                  className="object-cover w-full h-80"
                />
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Echtes Kundenprojekt:</strong> Dramatischer Unterschied durch professionelle Dachreinigung und Nano-Beschichtung. Links verschmutzt, rechts wie neu!
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Weitere Kundenprojekte</h3>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/img/flux/kunden-dachreinigung-2.jpg"
                  alt="Weiteres echtes Kundenprojekt der Dachreinigung"
                  width={600}
                  height={400}
                  className="object-cover w-full h-80"
                />
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Authentische Referenz:</strong> Einer von über 5.000 zufriedenen Kunden. Sehen Sie selbst die Qualität unserer Arbeit!
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Kundenstimmen */}
      <div className="bg-gray-50 dark:bg-gray-800 py-20 sm:py-28">
        <Container>
          <SectionTitle
            preTitle="Kundenstimmen"
            title="Das sagen unsere Kunden"
          >
            Überzeugen Sie sich von der Qualität unserer Arbeit durch die Erfahrungen zufriedener Kunden.
          </SectionTitle>
          <div className="mt-16">
            <Testimonials />
          </div>
        </Container>
      </div>

      {/* FAQ */}
      <div className="bg-white dark:bg-gray-900 py-20 sm:py-28">
        <Container>
          <SectionTitle
            preTitle="Häufige Fragen"
            title="Antworten auf Ihre Fragen"
          >
            Hier finden Sie Antworten auf die am häufigsten gestellten Fragen zu unseren Reinigungsdienstleistungen.
          </SectionTitle>
          <div className="mt-16 max-w-3xl mx-auto">
            <Faq />
          </div>
        </Container>
      </div>

      {/* Call-to-Action */}
      <div id="kontakt">
        <CtaSection
          backgroundImage="/img/flux/team-beratung2.webp"
          backgroundAlt="Kontaktieren Sie uns für professionelle Gebäudereinigung"
          title="Bereit für saubere Ergebnisse?"
          description="Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin und lassen Sie sich von unserer Arbeit überzeugen."
          buttonText="Jetzt Beratung anfordern"
          buttonLink="/kontakt"
        />
      </div>
    </>
  );
}
