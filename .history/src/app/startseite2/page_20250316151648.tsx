import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { CtaSection } from "@/components/CtaSection";

import { benefitOne, benefitTwo } from "@/components/data";

export const metadata: Metadata = {
  title: "Solar Komfort GmbH - Dach- & Fassadenreinigung Experten",
  description: "Professionelle Dach- und Fassadenreinigung mit modernster Technik. Verlängern Sie die Lebensdauer Ihrer Immobilie mit unseren spezialisierten Reinigungsverfahren.",
  keywords: "Dachreinigung, Fassadenreinigung, Dachbeschichtung, Darmstadt, Nano-Effekt, Immobilienpflege",
  openGraph: {
    title: "Solar Komfort GmbH - Dach- & Fassadenreinigung Experten",
    description: "Professionelle Dach- und Fassadenreinigung mit modernster Technik. Verlängern Sie die Lebensdauer Ihrer Immobilie mit unseren spezialisierten Reinigungsverfahren.",
    url: "https://solar-komfort.de/startseite2",
    siteName: "Solar Komfort GmbH",
    locale: "de_DE",
    type: "website",
  },
};

export default function Startseite2() {
  return (
    <>
      {/* Moderner Hero-Bereich mit klarem Fokus */}
      <div className="relative h-[80vh] min-h-[600px] w-full">
        {/* Hintergrundbild mit Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/flux/referenz-einfamilienhaus2.webp"
            alt="Solar Komfort - Dachreinigung und Dachbeschichtung"
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
              Professionelle<br />
              Dachreinigung &<br />
              Dachbeschichtung
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              Verlängern Sie die Lebensdauer Ihres Daches mit unserer<br />
              professionellen Reinigung und Nano-Beschichtung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/kontakt" 
                className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all"
              >
                Kostenfreies Angebot
              </Link>
              <Link 
                href="/dienstleistungen" 
                className="px-8 py-4 text-lg font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 transition-all"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div id="dachbeschichtung">
          <SectionTitle
            preTitle="Solar Komfort GmbH"
            title="Unsere professionelle Dachbeschichtung"
          >
            Wir bieten umfassende Dienstleistungen für Ihr Dach - von der gründlichen Reinigung bis zur langlebigen Beschichtung mit modernem Nano-Effekt. Unsere Experten sorgen für ein strahlendes und langlebiges Ergebnis.
          </SectionTitle>

          <Benefits data={benefitOne} />
        </div>
        <div id="leistungen">
          <Benefits imgPos="right" data={benefitTwo} />
        </div>

        <div id="prozess">
          <SectionTitle
            preTitle="Unser Prozess"
            title="So gehen wir bei der Dachbeschichtung vor"
          >
            Unsere Dachbeschichtung erfolgt in drei sorgfältig durchgeführten Schritten: Vorbereitung, Grundierung und zweifache Beschichtung. Jeder Schritt ist entscheidend für ein langlebiges und qualitativ hochwertiges Ergebnis.
          </SectionTitle>

          {/* Visuelle Darstellung der 3 Schritte */}
          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProcessStep
                step={1}
                title="Vorbereitung & Reinigung"
                description="Gründliche Reinigung des Daches von Moos, Flechten und Verschmutzungen. Reparatur kleiner Schäden und sorgfältige Vorbereitung der Oberfläche für optimale Haftung."
                imageSrc="/img/flux/dach-reinigung-prozess1.webp"
                imageAlt="Vorbereitung und Reinigung"
              />
              <ProcessStep
                step={2}
                title="Grundierung"
                description="Auftragen einer speziellen Grundierung, die tief in die Dachoberfläche eindringt. Diese schafft die perfekte Basis für die nachfolgende Beschichtung und verbessert die Haftung."
                imageSrc="/img/flux/dach-beschichtung-prozess2.webp"
                imageAlt="Grundierung"
              />
              <ProcessStep
                step={3}
                title="Zweifache Beschichtung"
                description="Auftragen von zwei Schichten hochwertiger Nano-Beschichtung für maximalen Schutz. Diese sorgt für Wasserabweisung, UV-Beständigkeit und verhindert neue Moosbildung für viele Jahre."
                imageSrc="/img/flux/dach-beschichtung-prozess3.webp"
                imageAlt="Zweifache Beschichtung"
              />
            </div>
            
            {/* Zusätzliche Info-Box */}
            <div className="mt-16 bg-blue-50 dark:bg-blue-900/30 p-8 rounded-2xl shadow-lg border border-blue-100 dark:border-blue-800">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-6 md:mb-0">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Langanhaltender Schutz garantiert</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Unser dreistufiger Prozess garantiert eine Haltbarkeit von bis zu 10 Jahren. Die spezielle Nano-Beschichtung bietet nicht nur Schutz vor Witterungseinflüssen, sondern verbessert auch die Energieeffizienz Ihres Hauses durch optimierte Wärmereflexion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Video 
            videoId="rKtfqb3sKww" 
            title="Sehen Sie unsere Dachbeschichtung in Aktion"
          />
        </div>

        <div id="kundenstimmen">
          <SectionTitle
            preTitle="Kundenstimmen"
            title="Das sagen unsere Kunden über uns"
          >
            Die Zufriedenheit unserer Kunden steht für uns an erster Stelle. Hier finden Sie einige Stimmen unserer zufriedenen Kunden.
          </SectionTitle>

          <Testimonials />
        </div>

        <div id="faq">
          <SectionTitle preTitle="FAQ" title="Häufig gestellte Fragen">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Dienstleistungen rund um Dachbeschichtung und Reinigung.
          </SectionTitle>

          <Faq />
        </div>
      </Container>
      
      <CtaSection 
        backgroundImage="/img/flux/dach-reinigung-prozess3.webp"
        backgroundAlt="Kontaktieren Sie uns für ein Angebot zur Dachreinigung"
        title="Bereit für eine professionelle Dachreinigung und Dachbeschichtung?"
        description="Kontaktieren Sie uns noch heute für eine unverbindliche Beratung zu Ihrer Dachpflege."
      />
    </>
  );
}