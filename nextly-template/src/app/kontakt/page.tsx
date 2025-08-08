import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import Image from 'next/image';
import { Metadata } from "next";
import { CtaSection } from '@/components/CtaSection';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: "Kontakt - Komfort Gebäudeservice24 GmbH | Kostenloses Angebot",
  description: "Kontaktieren Sie Komfort Gebäudeservice24 für professionelle Gebäudereinigung, Unterhaltsreinigung und Facility Management. Kostenloses Angebot anfordern!",
  viewport: "width=device-width, initial-scale=1",
  keywords: "Kontakt, Komfort Gebäudeservice24, Gebäudereinigung Anfrage, Reinigung Beratung, Darmstadt",
  openGraph: {
    title: "Kontakt - Komfort Gebäudeservice24 GmbH | Kostenloses Angebot",
    description: "Kontaktieren Sie Komfort Gebäudeservice24 für professionelle Gebäudereinigung, Unterhaltsreinigung und Facility Management. Kostenloses Angebot anfordern!",
    url: "https://komfort-gebaeudeservice24.de/kontakt",
    siteName: "Komfort Gebäudeservice24 GmbH",
    locale: "de_DE",
    type: "website",
  },
};

export default function Kontakt() {
  return (
    <>
      {/* Header Section mit großer Überschrift und vollbreitem Hintergrundbild */}
      <div className="relative h-[40vh] min-h-[300px] w-full">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/flux/team-gruppenfoto1.webp"
            alt="Kontakt - Solar Komfort Team"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        </div>
        
        <Container className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase text-white drop-shadow-lg">KONTAKT</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-100 drop-shadow-md">
                Haben Sie Fragen zu unseren Dienstleistungen oder möchten Sie ein unverbindliches Angebot? 
                Kontaktieren Sie uns - wir beraten Sie gerne persönlich.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <Section id="kontaktformular">
          <SectionTitle
            preTitle="Kontaktieren Sie uns"
            title="Wir freuen uns auf Ihre Nachricht"
          >
            Füllen Sie einfach das Formular aus oder kontaktieren Sie uns direkt über unsere Kontaktdaten. 
            Wir melden uns schnellstmöglich bei Ihnen zurück.
          </SectionTitle>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <ContactForm />
            
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
                <div className="flex flex-col items-center mb-8">
                  <Image 
                    src="/img/flux/illustration-standort.webp"
                    alt="Standort Solar Komfort GmbH"
                    width={200}
                    height={200}
                    className="mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-2">Unsere Kontaktdaten</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-2">Solar Komfort GmbH</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Musterstraße 123</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">12345 Musterstadt</p>
                
                <h3 className="text-xl font-semibold mb-3">Kontaktdaten</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Telefon: +49 123 456789</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">E-Mail: info@solar-komfort.de</p>
                
                <h3 className="text-xl font-semibold mb-3">Öffnungszeiten</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Montag - Freitag: 8:00 - 17:00 Uhr</p>
                <p className="text-gray-600 dark:text-gray-300">Samstag & Sonntag: Geschlossen</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Google Maps Sektion */}
        <Section id="standort">
          <SectionTitle
            preTitle="Unser Standort"
            title="So finden Sie uns"
          >
            Besuchen Sie uns gerne persönlich an unserem Standort. Wir freuen uns auf Ihren Besuch!
          </SectionTitle>
          
          <div className="max-w-5xl mx-auto mt-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ height: 400 }}>
                <p className="text-gray-500 dark:text-gray-400">Google Maps wird hier eingebunden</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Anfahrt</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Unser Büro befindet sich in zentraler Lage und ist sowohl mit dem Auto als auch mit öffentlichen Verkehrsmitteln gut zu erreichen.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Mit dem Auto</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Parkmöglichkeiten stehen direkt vor unserem Gebäude zur Verfügung.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Mit öffentlichen Verkehrsmitteln</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Die nächste Bushaltestelle ist nur 2 Gehminuten entfernt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Trust-Elemente mit persönlichem Ansprechpartner */}
        <Section id="ansprechpartner">
          <SectionTitle
            preTitle="Persönlicher Kontakt"
            title="Ihr persönlicher Ansprechpartner"
          >
            Bei uns steht der persönliche Kontakt im Mittelpunkt. Unser Team ist für Sie da, um Ihre Fragen zu beantworten und Sie kompetent zu beraten.
          </SectionTitle>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Persönlicher Ansprechpartner */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image 
                  src="/img/flux/team-geschaeftsfuehrerteam1.webp"
                  alt="Max Mustermann - Ihr Ansprechpartner"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Max Mustermann</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Kundenberatung & Vertrieb</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Mit über 10 Jahren Erfahrung in der Dachsanierung berät Max Sie kompetent zu allen Fragen rund um Ihr Projekt.
                </p>
                <div className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">+49 123 456789</span>
                </div>
              </div>
            </div>

            {/* Vertrauenswürdigkeit */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Vertrauenswürdigkeit</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Wir legen großen Wert auf Transparenz und Zuverlässigkeit. Unsere Kunden schätzen unsere ehrliche Beratung und die Einhaltung von Terminen und Vereinbarungen.
              </p>
              <div className="mt-4 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Kostenlose Erstberatung</span>
                </div>
                <div className="flex items-center mb-2">
                  <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Transparente Preisgestaltung</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Garantierte Termintreue</span>
                </div>
              </div>
            </div>

            {/* Kundenbewertungen */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Kundenbewertungen</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm italic">
                    "Sehr professionelles Team, pünktlich und zuverlässig. Die Dachbeschichtung wurde sauber ausgeführt und das Ergebnis überzeugt vollkommen."
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">- Familie Müller, Darmstadt</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm italic">
                    "Hervorragende Beratung und Top-Ergebnis bei der Reinigung unserer Solaranlage. Die Leistung hat sich deutlich verbessert."
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">- Hans Schmidt, Frankfurt</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Container>
      <CtaSection 
        backgroundImage="/img/flux/team-beratung1.webp"
        backgroundAlt="Kontaktieren Sie uns für eine persönliche Beratung"
        title="Bereit für eine persönliche Beratung durch unsere Experten?"
        description="Kontaktieren Sie uns noch heute für ein unverbindliches Gespräch zu Ihren individuellen Anforderungen."
      />
    </>
  );
}
