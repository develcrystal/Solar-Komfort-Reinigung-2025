import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { benefitOne, benefitTwo } from "@/components/data";

export const metadata: Metadata = {
  title: "Solar Komfort GmbH - Professionelle Dachreinigung & Dachbeschichtung",
  description: "Professionelle Dachreinigung und Dachbeschichtung mit Nano-Effekt in Darmstadt und Umgebung. Verlängern Sie die Lebensdauer Ihres Daches mit unseren Experten.",
  keywords: "Dachreinigung, Dachbeschichtung, Nano-Effekt, Darmstadt, Fassadenreinigung, Solaranlagenreinigung, Dachsanierung, Dachziegel reinigen, Dachziegel beschichten, Moosbefall Dach, Algenbefall Dach",
  openGraph: {
    title: "Solar Komfort GmbH - Professionelle Dachreinigung & Dachbeschichtung",
    description: "Professionelle Dachreinigung und Dachbeschichtung mit Nano-Effekt in Darmstadt und Umgebung. Verlängern Sie die Lebensdauer Ihres Daches mit unseren Experten.",
    url: "https://solar-komfort.de",
    siteName: "Solar Komfort GmbH",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://solar-komfort.de/img/flux/referenz-einfamilienhaus2.webp",
        width: 1200,
        height: 630,
        alt: "Solar Komfort - Dachreinigung und Dachbeschichtung"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Komfort GmbH - Professionelle Dachreinigung & Dachbeschichtung",
    description: "Professionelle Dachreinigung und Dachbeschichtung mit Nano-Effekt in Darmstadt und Umgebung.",
    images: ["https://solar-komfort.de/img/flux/referenz-einfamilienhaus2.webp"]
  },
  alternates: {
    canonical: "https://solar-komfort.de"
  }
};

export default function Home() {
  return (
    <>
      {/* Neue Hero Section mit Hintergrundbild */}
      <div className="relative">
        {/* Hintergrundbild */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/flux/referenz-einfamilienhaus2.webp"
            alt="Solar Komfort Dachreinigung"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        
        {/* Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-900/40 z-10"></div>
        
        {/* Hero Content */}
        <Container className="relative z-20">
          <div className="flex flex-col items-center justify-center min-h-screen py-20 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
              PROFESSIONELLE<br />
              <span className="text-blue-300">DACH- & FASSADENREINIGUNG</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-100">
              Wir sorgen für langanhaltende Sauberkeit und Schutz Ihrer Immobilie mit modernster Technik und jahrelanger Erfahrung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a href="#kontakt" className="px-8 py-4 text-lg font-bold bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg">
                JETZT ANFRAGEN
              </a>
              <a href="#prozess" className="px-8 py-4 text-lg font-bold bg-white text-blue-900 rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
                UNSERE LEISTUNGEN
              </a>
            </div>
            
            {/* Service-Karten */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 w-full">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all shadow-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Dachreinigung</h3>
                <p className="text-gray-100 text-center">Professionelle Reinigung für ein neuwertiges Erscheinungsbild</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all shadow-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Dachbeschichtung</h3>
                <p className="text-gray-100 text-center">Langanhaltender Schutz mit UV-beständiger Nano-Technologie</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all shadow-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Fassadenreinigung</h3>
                <p className="text-gray-100 text-center">Schonende Reinigung für strahlende Fassaden</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all shadow-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Solarreinigung</h3>
                <p className="text-gray-100 text-center">Effiziente Reinigung für maximale Energiegewinnung</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Hauptdienstleistungen - Übersichtlich und klar strukturiert */}
      <section id="dienstleistungen" className="bg-white dark:bg-gray-800 pt-40 pb-20">
        <Container>
          <SectionTitle
            preTitle="Unsere Kernkompetenzen"
            title="Professionelle Lösungen für Ihre Immobilie"
          >
            Wir bieten spezialisierte Dienstleistungen für die Reinigung und den Schutz Ihrer Immobilie. 
            Mit modernster Technik und umweltfreundlichen Verfahren sorgen wir für langanhaltende Ergebnisse.
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Dienstleistungskarten hier */}
          </div>
        </Container>
      </section>

      {/* Unser Dachbeschichtungsprozess - Detailliert und informativ */}
      <section id="prozess" className="pt-40 pb-20">
        <Container>
          <SectionTitle
            preTitle="Unser Prozess"
            title="So gehen wir bei der Dachbeschichtung vor"
          >
            Unsere Dachbeschichtung erfolgt in drei sorgfältig durchgeführten Schritten. Jeder Schritt ist entscheidend für ein langlebiges und qualitativ hochwertiges Ergebnis, das Ihr Dach bis zu 10 Jahre schützt.
          </SectionTitle>
          
          {/* Timeline-Darstellung der 3 Schritte */}
          <div className="relative mt-16">
            {/* Timeline-Inhalte hier */}
          </div>
        </Container>
      </section>

      {/* Vorteile der Dachbeschichtung - Als eigenständige Sektion */}
      <section id="vorteile" className="pt-40 pb-20">
        <Container>
          <SectionTitle
            preTitle="Unsere Vorteile"
            title="Warum Sie sich für uns entscheiden sollten"
          >
            Unsere professionelle Dachbeschichtung bietet zahlreiche Vorteile für Ihre Immobilie.
            Entdecken Sie, was uns auszeichnet.
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-4 mt-16">
            {/* Vorteile-Karten hier */}
          </div>
        </Container>
      </section>

      {/* Video-Bereich - Neu gestaltet mit eleganteren Überschriften und besseren Abständen */}
      <section id="video" className="pt-40 pb-20">
        <Container>
          <SectionTitle
            preTitle="Unsere Arbeit"
            title="Sehen Sie unsere Dachbeschichtung in Aktion"
          >
            Erleben Sie den Unterschied, den unsere professionelle Dachbeschichtung macht. In diesem Video zeigen wir Ihnen den kompletten Prozess von der Reinigung bis zur fertigen Beschichtung.
          </SectionTitle>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
            <Video 
              videoId="rKtfqb3sKww" 
              title="Professionelle Dachbeschichtung durch Solar Komfort"
            />
            <div className="bg-white dark:bg-gray-800 p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Professionelle Dachbeschichtung durch Solar Komfort
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Unsere Experten zeigen Ihnen den gesamten Prozess der Dachbeschichtung
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Kundenstimmen - Vertrauensbildend */}
      <section id="testimonials" className="pt-40 pb-20">
        <Container>
          <SectionTitle
            preTitle="Kundenstimmen"
            title="Das sagen unsere Kunden über uns"
          >
            Die Zufriedenheit unserer Kunden ist unser höchstes Gut. Hier finden Sie einige authentische Bewertungen unserer Kunden aus Darmstadt und Umgebung.
          </SectionTitle>

          <Testimonials />
        </Container>
      </section>

      {/* FAQ - Hilfreich und informativ */}
      <section id="faq" className="pt-40 pb-20">
        <Container>
          <SectionTitle preTitle="FAQ" title="Häufig gestellte Fragen">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Dienstleistungen rund um Dachbeschichtung und Reinigung. Falls Ihre Frage nicht dabei ist, kontaktieren Sie uns gerne direkt.
          </SectionTitle>

          <Faq />
        </Container>
      </section>

      {/* CTA-Bereich - Neu gestaltet mit klarem Call-to-Action */}
      <section id="kontakt" className="pt-40 pb-20">
        <Container>
          <CtaSection 
            backgroundImage="/img/flux/dach-reinigung-prozess3.webp"
            backgroundAlt="Kontaktieren Sie uns für ein Angebot zur professionellen Dachreinigung und Dachbeschichtung"
            title="Bereit für eine professionelle Dachreinigung und Dachbeschichtung?"
            description="Kontaktieren Sie uns noch heute für eine unverbindliche Beratung und ein kostenloses Angebot für Ihre individuelle Dachpflege."
          />
        </Container>
      </section>
    </>
  );
}