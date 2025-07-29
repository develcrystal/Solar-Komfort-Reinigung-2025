"use client";

import React, { useState } from 'react';
import { Container } from '@/components/Container';
import { LeadFunnel } from '@/components/LeadFunnel';
import Image from 'next/image';

export default function Kostenrechner() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Speichere die Daten in der Datenbank oder sende sie an ein CRM-System
      console.log('Formular abgesendet:', data);
      
      // Extrahiere Name und E-Mail für die Bestätigungsmail
      const name = data.step_5 || 'Kunde';
      const email = data.step_6 || '';
      
      if (email) {
        // Sende Bestätigungsmail an den Kunden
        const response = await fetch('/api/send-confirmation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            ...data
          }),
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Fehler beim Senden der Bestätigungsmail');
        }
      }
    } catch (error) {
      console.error('Fehler beim Absenden des Formulars:', error);
      setSubmitError(error instanceof Error ? error.message : 'Ein unbekannter Fehler ist aufgetreten');
    } finally {
      setIsSubmitting(false);
    }
  };

  const funnelSteps = [
    {
      id: 1,
      title: "Welche Dachform hat Ihr Haus?",
      inputType: "options" as const,
      isRequired: true,
      options: [
        {
          id: "sattel",
          label: "Satteldach",
          icon: "/img/icons/satteldach.svg",
          value: "satteldach"
        },
        {
          id: "flach",
          label: "Flachdach",
          icon: "/img/icons/flachdach.svg",
          value: "flachdach"
        },
        {
          id: "pult",
          label: "Pultdach",
          icon: "/img/icons/pultdach.svg",
          value: "pultdach"
        },
        {
          id: "andere",
          label: "Andere",
          icon: "/img/icons/andere-dachform.svg",
          value: "andere"
        }
      ]
    },
    {
      id: 2,
      title: "Wie groß ist Ihre Dachfläche?",
      description: "Ungefähre Angabe in Quadratmetern",
      inputType: "number" as const,
      placeholder: "z.B. 150",
      isRequired: true
    },
    {
      id: 3,
      title: "Welche Dienstleistung benötigen Sie?",
      inputType: "options" as const,
      isRequired: true,
      options: [
        {
          id: "reinigung",
          label: "Dachreinigung",
          value: "dachreinigung"
        },
        {
          id: "beschichtung",
          label: "Dachbeschichtung",
          value: "dachbeschichtung"
        },
        {
          id: "beides",
          label: "Beides",
          value: "beides"
        },
        {
          id: "unsicher",
          label: "Bin mir nicht sicher",
          value: "unsicher"
        }
      ]
    },
    {
      id: 4,
      title: "Wie ist der aktuelle Zustand Ihres Daches?",
      inputType: "options" as const,
      isRequired: true,
      options: [
        {
          id: "neu",
          label: "Neuwertig",
          value: "neuwertig"
        },
        {
          id: "gut",
          label: "Gut erhalten",
          value: "gut"
        },
        {
          id: "verschmutzt",
          label: "Verschmutzt",
          value: "verschmutzt"
        },
        {
          id: "stark_verschmutzt",
          label: "Stark verschmutzt",
          value: "stark_verschmutzt"
        }
      ]
    },
    {
      id: 5,
      title: "Wie können wir Sie erreichen?",
      description: "Bitte geben Sie Ihre Kontaktdaten an, damit wir Ihnen ein unverbindliches Angebot erstellen können.",
      inputType: "text" as const,
      placeholder: "Ihr Name",
      isRequired: true
    },
    {
      id: 6,
      title: "Ihre E-Mail-Adresse",
      inputType: "email" as const,
      placeholder: "beispiel@email.de",
      isRequired: true
    },
    {
      id: 7,
      title: "Ihre Telefonnummer",
      description: "Für Rückfragen und zur schnelleren Bearbeitung",
      inputType: "tel" as const,
      placeholder: "z.B. 0123 456789",
      isRequired: false
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section mit großer Überschrift und vollbreitem Hintergrundbild */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/flux/dachbeschichtung-prozess.webp"
            alt="Kostenrechner - Solar Komfort"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        </div>
        
        <Container className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase text-white drop-shadow-lg">KOSTENRECHNER</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-100 drop-shadow-md">
                Erhalten Sie in nur 2 Minuten ein kostenloses und unverbindliches Angebot für Ihre Dachpflege.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-16 text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Kostenloses Angebot für Ihre Dachpflege anfordern</h2>
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-2xl text-orange-500 dark:text-orange-400 font-bold">
              In nur 2 Minuten zu Ihrem individuellen Angebot
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <LeadFunnel
              title="Ihr persönliches Angebot"
              subtitle="Beantworten Sie einige Fragen für ein maßgeschneidertes Angebot"
              steps={funnelSteps}
              onSubmit={handleSubmit}
              primaryColor="#FFA500" // Orange
              secondaryColor="#3B82F6" // Blau
              showProgressBar={true}
              externalIsSubmitting={isSubmitting}
              externalError={submitError}
            />
          </div>
        </div>

        {/* Beratungssektion mit Bild */}
        <section className="py-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="relative h-96">
                <Image 
                  src="/img/flux/team-beratung1.webp"
                  alt="Persönliche Beratung bei Solar Komfort"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Persönliche Beratung garantiert</h2>
                <div className="prose prose-lg dark:prose-invert">
                  <p>
                    Bei Solar Komfort steht Ihre Zufriedenheit an erster Stelle. Nach Ihrer Anfrage über unseren Kostenrechner nehmen wir persönlich Kontakt mit Ihnen auf, um alle Details zu besprechen und Ihre individuellen Wünsche zu berücksichtigen.
                  </p>
                  <p>
                    Unser erfahrenes Beratungsteam nimmt sich Zeit für Sie und erklärt Ihnen alle Optionen verständlich und transparent. Wir erstellen ein maßgeschneidertes Angebot, das genau auf Ihre Bedürfnisse zugeschnitten ist.
                  </p>
                  <p>
                    Auf Wunsch vereinbaren wir auch gerne einen Vor-Ort-Termin, um Ihr Dach persönlich zu begutachten und die optimale Lösung für Sie zu finden. So können wir sicherstellen, dass alle besonderen Gegebenheiten berücksichtigt werden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vorher-Nachher Sektion */}
        <section className="py-16">
          <h2 className="text-4xl font-bold mb-10 text-center">Beeindruckende Ergebnisse</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Vorher-Nachher: Dachreinigung</h3>
                <div className="relative h-80 mb-4">
                  <Image 
                    src="/img/flux/Vorher-Nachher Dachreinigung.webp"
                    alt="Vorher-Nachher Vergleich einer Dachreinigung"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Sehen Sie den beeindruckenden Unterschied, den eine professionelle Dachreinigung ausmachen kann. Unser spezielles Reinigungsverfahren entfernt selbst hartnäckige Verschmutzungen, Moos und Flechten vollständig und schonend.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Vorher-Nachher: Fassadenreinigung</h3>
                <div className="relative h-80 mb-4">
                  <Image 
                    src="/img/flux/fassadenreinigung-vorher-nachher.webp"
                    alt="Vorher-Nachher Vergleich einer Fassadenreinigung"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Eine saubere Fassade wertet Ihr gesamtes Gebäude optisch auf. Unsere schonende Reinigungsmethode entfernt Verschmutzungen, Algen und Pilze effektiv und gibt Ihrer Fassade ihr ursprüngliches Erscheinungsbild zurück.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Unser Prozess */}
        <section className="py-16">
          <h2 className="text-4xl font-bold mb-10 text-center">Unser Arbeitsprozess</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64">
                <Image 
                  src="/img/flux/dach-reinigung-prozess1.webp"
                  alt="Analyse und Beratung"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">1</div>
                <h3 className="text-xl font-bold mb-3">Analyse & Beratung</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Wir analysieren den Zustand Ihres Daches oder Ihrer Fassade und beraten Sie ausführlich zu den möglichen Maßnahmen. Gemeinsam finden wir die optimale Lösung für Ihre Anforderungen.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64">
                <Image 
                  src="/img/flux/dach-reinigung-prozess3.webp"
                  alt="Professionelle Durchführung"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">2</div>
                <h3 className="text-xl font-bold mb-3">Professionelle Durchführung</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Unser geschultes Team führt alle Arbeiten mit höchster Sorgfalt und modernster Ausrüstung durch. Wir achten dabei besonders auf Sicherheit und Qualität bei jedem Arbeitsschritt.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-64">
                <Image 
                  src="/img/flux/dach-beschichtung-prozess3.webp"
                  alt="Nachbereitung und Garantie"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">3</div>
                <h3 className="text-xl font-bold mb-3">Nachbereitung & Garantie</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Nach Abschluss der Arbeiten führen wir eine gründliche Qualitätskontrolle durch und räumen alles sauber auf. Auf unsere Leistungen geben wir eine umfassende Garantie.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-4xl font-bold mb-10 text-center">Vertrauen Sie auf unsere Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-center justify-center">
              <Image src="/img/logos/partner1.svg" alt="Partner Logo" width={150} height={80} />
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-center justify-center">
              <Image src="/img/logos/partner2.svg" alt="Partner Logo" width={150} height={80} />
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-center justify-center">
              <Image src="/img/logos/partner3.svg" alt="Partner Logo" width={150} height={80} />
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-center justify-center">
              <Image src="/img/logos/partner4.svg" alt="Partner Logo" width={150} height={80} />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Warum sich eine professionelle Dachreinigung und -beschichtung lohnt</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Langfristiger Schutz</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Eine professionelle Dachbeschichtung schützt Ihr Dach vor Witterungseinflüssen und verlängert die Lebensdauer erheblich. Sie sparen langfristig Kosten für teure Reparaturen oder eine komplette Neueindeckung.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3">Wertsteigerung Ihrer Immobilie</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ein gepflegtes Dach trägt maßgeblich zum Gesamteindruck und damit zum Wert Ihrer Immobilie bei. Bei einem eventuellen Verkauf kann dies ein entscheidender Faktor sein.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Energieeffizienz</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Eine saubere und beschichtete Dachfläche kann die Energieeffizienz Ihres Hauses verbessern. Spezielle Beschichtungen können im Sommer die Hitze abweisen und im Winter die Wärme im Haus halten.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3">Ästhetischer Aspekt</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ein sauberes und gepflegtes Dach verbessert das Erscheinungsbild Ihres gesamten Hauses. Besonders bei Moos- oder Algenbefall ist der Unterschied nach einer professionellen Reinigung beeindruckend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section - Vollbreites Bild mit Text-Overlay */}
        <section className="relative py-24">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/img/flux/dachbeschichtung-prozess.webp"
              alt="Kontaktieren Sie uns für ein Angebot"
              fill
              className="object-cover brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
          
          <Container className="relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">JETZT KONTAKT AUFNEHMEN</h2>
              <p className="text-xl mb-8 text-gray-100 drop-shadow-md">
                Haben Sie Fragen oder wünschen Sie eine persönliche Beratung? Unser Team steht Ihnen gerne zur Verfügung.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:061511546592"
                  className="px-8 py-4 text-lg font-bold text-center text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center"
                >
                  <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  06151 15 465 92
                </a>
                <a
                  href="/kontakt"
                  className="px-8 py-4 text-lg font-bold text-center text-white bg-orange-500 rounded-xl hover:bg-orange-600 transition-colors shadow-lg"
                >
                  Kontaktformular
                </a>
              </div>
            </div>
          </Container>
        </section>
      </Container>
    </div>
  );
}
