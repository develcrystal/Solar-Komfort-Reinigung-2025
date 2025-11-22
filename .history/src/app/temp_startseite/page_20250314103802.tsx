import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import Image from "next/image";
import Link from "next/link";

import { benefitOne, benefitTwo } from "@/components/data";

export default function TempStartseite() {
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
              <Link href="/kontakt" className="px-8 py-4 text-lg font-bold bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg">
                JETZT ANFRAGEN
              </Link>
              <Link href="/dienstleistungen" className="px-8 py-4 text-lg font-bold bg-white text-blue-900 rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
                UNSERE LEISTUNGEN
              </Link>
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
                <p className="text-gray-100 text-center">Langanhaltender Schutz mit moderner Nano-Technologie</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all shadow-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Fassadenreinigung</h3>
                <p className="text-gray-100 text-center">Schonende Reinigung für strahlende Fassaden</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all shadow-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Solaranlagenreinigung</h3>
                <p className="text-gray-100 text-center">Optimale Leistung durch regelmäßige Reinigung</p>
              </div>
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
              {/* Schritt 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105">
                <div className="relative h-64">
                  <Image 
                    src="/img/flux/dach-reinigung-prozess1.webp" 
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
                    src="/img/flux/dach-beschichtung-prozess2.webp" 
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
                    Auftragen einer speziellen Grundierung, die tief in die Dachoberfläche eindringt. 
                    Diese schafft die perfekte Basis für die nachfolgende Beschichtung und verbessert die Haftung.
                  </p>
                </div>
              </div>
              
              {/* Schritt 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-105">
                <div className="relative h-64">
                  <Image 
                    src="/img/flux/dach-beschichtung-prozess3.webp" 
                    alt="Zweifache Beschichtung" 
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
        <Cta />
      </Container>
    </>
  );
}
