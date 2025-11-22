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
              <a 
                href="#kontakt" 
                className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all"
              >
                Kostenfreies Angebot
              </a>
              <a 
                href="#prozess" 
                className="px-8 py-4 text-lg font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 transition-all"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Hauptdienstleistungen - Übersichtlich und klar strukturiert */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <Container>
          <SectionTitle
            preTitle="Unsere Kernkompetenzen"
            title="Professionelle Lösungen für Ihre Immobilie"
          >
            Wir bieten spezialisierte Dienstleistungen für die Reinigung und den Schutz Ihrer Immobilie. 
            Mit modernster Technik und umweltfreundlichen Verfahren sorgen wir für langanhaltende Ergebnisse.
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Dienstleistung 1 */}
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-all hover:translate-y-[-5px]">
              <div className="relative h-48">
                <Image 
                  src="/img/flux/quer_Vorher-Nachher Dachreinigung.webp" 
                  alt="Professionelle Dachreinigung" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Dachreinigung</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Schonende Entfernung von Moos, Flechten und Verschmutzungen für ein neuwertiges Erscheinungsbild und längere Lebensdauer.
                </p>
                <Link href="/dienstleistungen#dachreinigung" className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center">
                  Mehr erfahren
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Dienstleistung 2 */}
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-all hover:translate-y-[-5px]">
              <div className="relative h-48">
                <Image 
                  src="/img/flux/dachbeschichtung-prozess.webp" 
                  alt="Professionelle Dachbeschichtung" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Dachbeschichtung</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Langanhaltender Schutz mit UV-beständiger Nano-Technologie für bis zu 10 Jahre Haltbarkeit und verbesserte Energieeffizienz.
                </p>
                <Link href="/dienstleistungen#dachbeschichtung" className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center">
                  Mehr erfahren
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Dienstleistung 3 */}
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-all hover:translate-y-[-5px]">
              <div className="relative h-48">
                <Image 
                  src="/img/flux/fassadenreinigung-vorher-nachher.webp" 
                  alt="Professionelle Fassadenreinigung" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Fassadenreinigung</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Schonende Reinigung für strahlende Fassaden ohne Beschädigung der Oberfläche durch unser spezielles Niederdruckverfahren.
                </p>
                <Link href="/dienstleistungen#fassadenreinigung" className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center">
                  Mehr erfahren
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Dienstleistung 4 */}
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-all hover:translate-y-[-5px]">
              <div className="relative h-48">
                <Image 
                  src="/img/flux/solaranlagenreinigung-vorher-nachher.webp" 
                  alt="Professionelle Solaranlagenreinigung" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Solaranlagenreinigung</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Bis zu 30% mehr Leistung durch professionelle Reinigung Ihrer Photovoltaik- oder Solarthermieanlage mit speziellen Reinigungsmitteln.
                </p>
                <Link href="/dienstleistungen#solaranlagenreinigung" className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center">
                  Mehr erfahren
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        {/* Unser Dachbeschichtungsprozess - Detailliert und informativ */}
        <div id="prozess" className="mb-24">
          <SectionTitle
            preTitle="Unser Prozess"
            title="So gehen wir bei der Dachbeschichtung vor"
          >
            Unsere Dachbeschichtung erfolgt in drei sorgfältig durchgeführten Schritten. Jeder Schritt ist entscheidend für ein langlebiges und qualitativ hochwertiges Ergebnis, das Ihr Dach bis zu 10 Jahre schützt.
          </SectionTitle>

          {/* Visuelle Darstellung der 3 Schritte */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Schritt 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105">
              <div className="relative h-64">
                <Image 
                  src="/img/flux/prozess-vorbereitung-reinigung.webp" 
                  alt="Vorbereitung und Reinigung" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-white text-3xl font-bold">1</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Vorbereitung & Reinigung</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Gründliche Reinigung des Daches von Moos, Flechten und Verschmutzungen. 
                  Reparatur kleiner Schäden und sorgfältige Vorbereitung der Oberfläche für optimale Haftung.
                </p>
              </div>
            </div>
            
            {/* Schritt 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105">
              <div className="relative h-64">
                <Image 
                  src="/img/flux/prozess-grundierung.webp" 
                  alt="Grundierung" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-white text-3xl font-bold">2</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Grundierung</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Auftragen einer speziellen Grundierung, die tief in die Poren eindringt.
                  Diese sorgt für eine optimale Haftung der späteren Beschichtung und versiegelt kleinste Risse.
                </p>
              </div>
            </div>
            
            {/* Schritt 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105">
              <div className="relative h-64">
                <Image 
                  src="/img/flux/prozess-zweifache-beschichtung.webp" 
                  alt="Beschichtung" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 text-white text-3xl font-bold">3</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Zweifache Beschichtung</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Auftragen von zwei Schichten hochwertiger Nano-Beschichtung für maximalen Schutz. 
                  Diese sorgt für Wasserabweisung, UV-Beständigkeit und verhindert neue Moosbildung für viele Jahre.
                </p>
              </div>
            </div>
          </div>
          
          {/* Vorteile der Dachbeschichtung - Neu gestaltet mit drei Kacheln und Bildmaterial */}
          <div className="mt-32 mb-32">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full uppercase tracking-wider dark:bg-blue-900/30 dark:text-blue-400 mb-4">
                Unsere Vorteile
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8 leading-tight">
                Warum Sie sich für uns entscheiden sollten
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
                Unsere professionelle Dachbeschichtung bietet zahlreiche Vorteile für Ihre Immobilie.
                Entdecken Sie, was uns auszeichnet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-4">
              {/* Vorteil 1: Langanhaltender Schutz */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transition-transform hover:translate-y-[-5px]">
                <div className="relative h-48 mb-8 rounded-xl overflow-hidden">
                  <Image 
                    src="/img/flux/dach-beschichtung-detail.webp" 
                    alt="Langanhaltender Schutz durch Dachbeschichtung" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto -mt-16 relative z-10 border-4 border-white dark:border-gray-800">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Langanhaltender Schutz</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
                  Unsere Nano-Beschichtung garantiert eine Haltbarkeit von bis zu 10 Jahren. Sie schützt Ihr Dach zuverlässig vor Witterungseinflüssen, Moos und Algenbefall.
                </p>
              </div>

              {/* Vorteil 2: Energieeffizienz */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transition-transform hover:translate-y-[-5px]">
                <div className="relative h-48 mb-8 rounded-xl overflow-hidden">
                  <Image 
                    src="/img/flux/energieeffizienz-dach.webp" 
                    alt="Verbesserte Energieeffizienz durch Dachbeschichtung" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 mx-auto -mt-16 relative z-10 border-4 border-white dark:border-gray-800">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Verbesserte Energieeffizienz</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
                  Die spezielle Beschichtung optimiert die Wärmereflexion und kann Ihre Energiekosten senken. Im Sommer bleibt es kühler, im Winter wird die Wärme besser gespeichert.
                </p>
              </div>

              {/* Vorteil 3: Wertsteigerung */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transition-transform hover:translate-y-[-5px]">
                <div className="relative h-48 mb-8 rounded-xl overflow-hidden">
                  <Image 
                    src="/img/flux/immobilie-wertsteigerung.webp" 
                    alt="Wertsteigerung Ihrer Immobilie durch Dachbeschichtung" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6 mx-auto -mt-16 relative z-10 border-4 border-white dark:border-gray-800">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Wertsteigerung Ihrer Immobilie</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
                  Eine professionelle Dachbeschichtung erhöht nicht nur die Lebensdauer Ihres Daches, sondern steigert auch den Wert Ihrer Immobilie durch ein gepflegtes Erscheinungsbild.
                </p>
              </div>
            </div>
          </div>

          {/* Video-Bereich - Neu gestaltet mit eleganteren Überschriften und besseren Abständen */}
          <div id="video" className="mb-32 pt-16">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full uppercase tracking-wider dark:bg-blue-900/30 dark:text-blue-400 mb-4">
                Unsere Arbeit
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8 leading-tight">
                Sehen Sie unsere Dachbeschichtung<br />in Aktion
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                In diesem Video zeigen wir Ihnen, wie wir bei der professionellen 
                Dachbeschichtung vorgehen. Erleben Sie den kompletten Prozess von 
                der Reinigung bis zur fertigen Beschichtung.
              </p>
            </div>

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
          </div>

          {/* Kundenstimmen - Vertrauensbildend */}
          <div id="kundenstimmen" className="mb-24">
            <SectionTitle
              preTitle="Kundenstimmen"
              title="Das sagen unsere Kunden über uns"
            >
              Die Zufriedenheit unserer Kunden ist unser höchstes Gut. Hier finden Sie einige authentische Bewertungen unserer Kunden aus Darmstadt und Umgebung.
            </SectionTitle>

            <Testimonials />
          </div>

          {/* FAQ - Hilfreich und informativ */}
          <div id="faq">
            <SectionTitle preTitle="FAQ" title="Häufig gestellte Fragen">
              Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Dienstleistungen rund um Dachbeschichtung und Reinigung. Falls Ihre Frage nicht dabei ist, kontaktieren Sie uns gerne direkt.
            </SectionTitle>

            <Faq />
          </div>
        </div>

        {/* CTA-Bereich - Klarer Handlungsaufruf */}
        <CtaSection 
          backgroundImage="/img/flux/dach-reinigung-prozess3.webp"
          backgroundAlt="Kontaktieren Sie uns für ein Angebot zur professionellen Dachreinigung und Dachbeschichtung"
          title="Bereit für eine professionelle Dachreinigung und Dachbeschichtung?"
          description="Kontaktieren Sie uns noch heute für eine unverbindliche Beratung und ein kostenloses Angebot für Ihre individuelle Dachpflege."
        />
      </Container>
    </>
  );
}