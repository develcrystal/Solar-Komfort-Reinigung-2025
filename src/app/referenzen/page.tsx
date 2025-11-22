"use client";

import { Container } from '@/components/Container';
import Image from 'next/image';
import { ImageSlider } from '@/components/ImageSlider';
import { CtaSection } from '@/components/CtaSection';
import Link from 'next/link';

export default function Referenzen() {
  // Bildslider für Einfamilienhaus-Referenzen
  const einfamilienhausImages = [
    {
      src: "/img/flux/referenz-einfamilienhaus2.webp",
      alt: "Einfamilienhaus in Darmstadt - Dachreinigung und Dachbeschichtung"
    },
    {
      src: "/img/flux/referenz-einfamilienhaus3.webp",
      alt: "Einfamilienhaus in Groß-Gerau - Dachbeschichtung"
    },
    {
      src: "/img/flux/referenz-einfamilienhaus4.webp",
      alt: "Einfamilienhaus in Offenbach - Dachreinigung"
    },
    {
      src: "/img/flux/referenz-einfamilienhaus5.webp",
      alt: "Einfamilienhaus - Nach der Dachbeschichtung"
    }
  ];

  // Bildslider für Mehrfamilienhaus-Referenzen
  const mehrfamilienhausImages = [
    {
      src: "/img/flux/referenz-mehrfamilienhaus1.webp",
      alt: "Mehrfamilienhaus in Frankfurt - Fassadenreinigung"
    },
    {
      src: "/img/flux/referenz-mehrfamilienhaus2.webp",
      alt: "Mehrfamilienhaus in Darmstadt - Fassadenreinigung"
    },
    {
      src: "/img/flux/referenz-mehrfamilienhaus3.webp",
      alt: "Mehrfamilienhaus - Nach der Fassadenreinigung"
    },
    {
      src: "/img/flux/referenz-mehrfamilienhaus4.webp",
      alt: "Mehrfamilienhaus in Rüsselsheim - Dach- und Fassadenreinigung"
    },
    {
      src: "/img/flux/referenz-mehrfamilienhaus5.webp",
      alt: "Mehrfamilienhaus in Groß-Gerau - Dach- und Fassadenreinigung"
    }
  ];

  // Bildslider für Gewerbeobjekt-Referenzen
  const gewerbeobjektImages = [
    {
      src: "/img/flux/referenz-gewerbeobjekt1.webp",
      alt: "Gewerbeobjekt in Wiesbaden - Dach- und Fassadenreinigung"
    },
    {
      src: "/img/flux/referenz-gewerbeobjekt2.webp",
      alt: "Gewerbeobjekt in Offenbach - Dach- und Fassadenreinigung"
    },
    {
      src: "/img/flux/referenz-gewerbeobjekt3.webp",
      alt: "Gewerbeobjekt in Frankfurt - Nach der Reinigung"
    }
  ];

  // Bildslider für Firmenfahrzeuge
  // Bildslider für Firmenfahrzeuge
  const firmenfahrzeugeImages = [
    {
      src: "/img/flux/einsatz-beim-kunden1.webp",
      alt: "Einsatz beim Kunden mit Firmenfahrzeug"
    },
    {
      src: "/img/flux/firmenfahrzeug-solar-komfort4.webp",
      alt: "Firmenfahrzeug Solar Komfort"
    },
    {
      src: "/img/flux/unser-furhpark.webp",
      alt: "Unser Fuhrpark"
    }
  ];
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section mit großer Überschrift und vollbreitem Hintergrundbild */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/flux/einsatz-beim-kunden1.webp"
            alt="Referenzen - Solar Komfort"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        </div>
        
        <Container className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase text-white drop-shadow-lg">REFERENZEN</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-100 drop-shadow-md">
                Entdecken Sie unsere erfolgreich abgeschlossenen Projekte und erfahren Sie, was unsere Kunden über unsere Dienstleistungen sagen.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        {/* Einleitungstext für Referenzen - SEO-optimiert */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
              Qualität, die überzeugt - Unsere Referenzprojekte
            </h2>
            <div className="prose prose-lg dark:prose-dark mx-auto">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
                Bei <strong>Solar Komfort GmbH</strong> stehen Qualität und Kundenzufriedenheit an erster Stelle. Seit über 10 Jahren sorgen wir in Darmstadt, Groß-Gerau, Wiesbaden und dem gesamten Rhein-Main-Gebiet für saubere Dächer, langlebige Dachbeschichtungen und makellose Fassaden.
              </p>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
                Unsere Referenzprojekte zeigen eindrucksvoll die Wirksamkeit unserer <strong>professionellen Dachreinigung</strong> und <strong>Dachbeschichtung</strong>. Die beeindruckenden Vorher-Nachher-Vergleiche demonstrieren, wie wir Moose, Flechten und Verschmutzungen effektiv entfernen und Ihrem Dach neuen Glanz verleihen.
              </p>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Überzeugen Sie sich selbst von unserer Expertise bei <strong>Einfamilienhäusern</strong>, <strong>Mehrfamilienhäusern</strong> und <strong>Gewerbeobjekten</strong>. Unsere zufriedenen Kunden bestätigen: Mit Solar Komfort treffen Sie die richtige Wahl für die Werterhaltung Ihrer Immobilie!
              </p>
            </div>
          </div>
        </section>

        {/* Kundenbewertungen Section */}
        <section id="kundenbewertungen" className="py-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-4xl font-bold mb-10 uppercase tracking-wide text-center">KUNDENBEWERTUNGEN</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md transform transition-transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <Image 
                      src="/img/flux/team-geschaeftsfuehrerteam1.webp" 
                      alt="Kunde" 
                      width={70} 
                      height={70} 
                      className="rounded-full mr-4 border-2 border-blue-600 object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold">Michael Becker</h3>
                      <div className="flex text-yellow-400 text-xl">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg italic line-clamp-3">
                    &quot;Die Dachreinigung wurde sehr professionell durchgeführt. Das Team war pünktlich, freundlich und hat saubere Arbeit geleistet. Mein Dach sieht aus wie neu!&quot;
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md transform transition-transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <Image 
                      src="/img/flux/team-projektleiterimage.webp" 
                      alt="Kunde" 
                      width={70} 
                      height={70} 
                      className="rounded-full mr-4 border-2 border-blue-600 object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold">Sabine Müller</h3>
                      <div className="flex text-yellow-400 text-xl">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg italic line-clamp-3">
                    &quot;Ich bin sehr zufrieden mit der Dachbeschichtung. Die Beratung war kompetent und das Ergebnis überzeugt. Kann Solar Komfort nur weiterempfehlen!&quot;
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-md transform transition-transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <Image 
                      src="/img/flux/team-technischer-leiterimage.webp" 
                      alt="Kunde" 
                      width={70} 
                      height={70} 
                      className="rounded-full mr-4 border-2 border-blue-600 object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold">Klaus Werner</h3>
                      <div className="flex text-yellow-400 text-xl">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg italic line-clamp-3">
                    &quot;Die Fassadenreinigung hat mein Haus komplett verändert. Es sieht aus wie neu gestrichen. Das Team war sehr ordentlich und hat alles sauber hinterlassen.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Referenzprojekte Section */}
        <section id="referenzprojekte" className="py-16">
          <h2 className="text-4xl font-bold mb-10 uppercase tracking-wide text-center">REFERENZPROJEKTE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105">
              <div className="relative h-64">
                <ImageSlider 
                  images={einfamilienhausImages}
                  width={800}
                  height={400}
                  className="object-cover rounded-t-2xl"
                  autoPlay={true}
                  interval={6000}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Einfamilienhaus in Darmstadt</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">Dachreinigung und Dachbeschichtung</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Vollständige Reinigung und Beschichtung eines 180m² großen Daches. Entfernung von Moos, Flechten und Algen, gefolgt von einer hochwertigen Schutzbeschichtung.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105">
              <div className="relative h-64">
                <ImageSlider 
                  images={mehrfamilienhausImages}
                  width={800}
                  height={400}
                  className="object-cover rounded-t-2xl"
                  autoPlay={true}
                  interval={7000}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Mehrfamilienhaus in Frankfurt</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">Fassadenreinigung</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Professionelle Reinigung einer 450m² großen Fassade. Beseitigung von Verschmutzungen und Wiederherstellung des ursprünglichen Erscheinungsbildes.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105">
              <div className="relative h-64">
                <ImageSlider 
                  images={gewerbeobjektImages}
                  width={800}
                  height={400}
                  className="object-cover rounded-t-2xl"
                  autoPlay={true}
                  interval={6500}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Gewerbeobjekt in Frankfurt</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">Dach- und Fassadenreinigung</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Umfassende Reinigung eines Gewerbegebäudes mit 800m² Dachfläche und 1200m² Fassadenfläche. Beseitigung von hartnäckigen Verschmutzungen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Unsere Ausrüstung Section */}
        <section id="ausruestung" className="py-16">
          <h2 className="text-4xl font-bold mb-10 uppercase tracking-wide text-center">UNSERE AUSRÜSTUNG</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105">
              <div className="relative h-64">
                <ImageSlider
                  images={firmenfahrzeugeImages}
                  width={800}
                  height={400}
                  className="object-cover rounded-t-2xl"
                  autoPlay={true}
                  interval={5500}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Unsere Firmenfahrzeuge</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">Professionell ausgestattet für jeden Einsatz</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Unsere Firmenfahrzeuge sind mit modernster Technik und allen notwendigen Werkzeugen für die professionelle Reinigung und Beschichtung ausgestattet. Wir sind mobil und flexibel für jeden Einsatz.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105">
              <div className="relative h-64">
                <ImageSlider 
                  images={[
                    { src: "/img/flux/professionelle-ausruestung1.webp", alt: "Professionelle Ausrüstung - Reinigungsgeräte" },
                    { src: "/img/flux/professionelle-ausruestung2.webp", alt: "Professionelle Ausrüstung - Beschichtungswerkzeuge" },
                    { src: "/img/flux/professionelle-ausruestung3.webp", alt: "Professionelle Ausrüstung - Sicherheitsausrüstung" }
                  ]}
                  width={800}
                  height={400}
                  className="object-cover rounded-t-2xl"
                  autoPlay={true}
                  interval={5000}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Professionelle Ausrüstung</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">Modernste Technik für beste Ergebnisse</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Wir setzen auf hochwertige Reinigungsgeräte, spezielle Beschichtungswerkzeuge und umfassende Sicherheitsausrüstung. Unsere Ausrüstung wird regelmäßig gewartet und auf dem neuesten Stand gehalten.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
      
      {/* CTA Section - Vollbreites Bild mit Text-Overlay */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/flux/referenz-einfamilienhaus3.webp"
            alt="Kontaktieren Sie uns für ein Angebot"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">BEREIT, TEIL UNSERER ERFOLGREICHEN REFERENZPROJEKTE ZU WERDEN?</h2>
            <p className="text-xl mb-8 text-gray-100 drop-shadow-md">
              Überzeugen Sie sich selbst von unserer Qualität und Professionalität. Kontaktieren Sie uns noch heute für eine unverbindliche Beratung.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/kontakt"
                className="px-8 py-4 text-lg font-bold text-center text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                Kontakt aufnehmen
              </Link>
              <Link
                href="/kostenrechner"
                className="px-8 py-4 text-lg font-bold text-center text-white bg-orange-500 rounded-xl hover:bg-orange-600 transition-colors shadow-lg"
              >
                Kostenrechner starten
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}