import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import ServiceHeader from '@/components/ServiceHeader';
import CtaSection from '@/components/CtaSection';
import RelatedServices from '@/components/RelatedServices';
import GarantieSection from '@/components/GarantieSection';
import Benefits from '@/components/Benefits';
import Faq from '@/components/Faq';
import Breadcrumb from '@/components/Breadcrumb';
import TwoColContent from '@/components/TwoColContent';
import ProcessStep from '@/components/ProcessStep';
import { metadata as meta } from './metadata';

export const metadata = meta;

export default function ServiceTemplatePage() {
  const serviceName = 'Service Template';
  const heroImage = '/img/hero.webp';
  const ctaBg = '/img/kundenbilder/template-bg.webp'; // Thematisches CTA-Hintergrundbild

  return (
    <>
      <Breadcrumb
        list={[
          { title: 'Home', href: '/' },
          { title: serviceName, href: `/template-demo` },
        ]}
        className="py-6 bg-gray-50"
      />

      {/* Hero Section: Vollbreites thematisches Bild + technische Details */}
      <Hero
        title={`${serviceName} - Professionelle Lösungen von Komfort Gebäudeservice24 GmbH`}
        subtitle="Wir transformieren Ihre Anforderungen in makellose Ergebnisse mit zertifizierter Qualität und höchsten Standards. Entdecken Sie, wie wir Ihr Projekt zum Erfolg führen."
        image={heroImage}
        alt={`${serviceName} Hero Bild`}
        ctaText="Kostenloses Angebot anfragen"
        ctaLink="/kontakt"
        className="min-h-[60vh] bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-xl mb-4 opacity-90">Über 5000 zufriedene Kunden vertrauen auf unsere Expertise</p>
        </div>
      </Hero>

      {/* Service Header Section */}
      <Section className="py-16 bg-white">
        <ServiceHeader
          title={serviceName}
          description="Als führender Anbieter in der Gebäudereinigung und -service bieten wir maßgeschneiderte Lösungen, die auf Ihre individuellen Bedürfnisse abgestimmt sind. Mit modernster Technik und einem Team aus zertifizierten Fachkräften gewährleisten wir höchste Qualitätsstandards und termingerechte Umsetzung."
          image="/img/service-placeholder.webp"
          alt="Service Header Bild"
          className="max-w-6xl mx-auto"
        />
      </Section>

      {/* Service-Cards Section: 6+ Cards mit Icons und Beschreibungen */}
      <Section className="py-20 bg-gray-50">
        <SectionTitle
          preTitle="Unsere Kernleistungen"
          title="Umfassende Service-Übersicht"
          className="text-center mb-12"
        >
          Jede Leistung ist detailliert konzipiert, um maximale Effizienz und Kundenzufriedenheit zu erreichen. Wählen Sie aus unserem Portfolio die passenden Services für Ihr Projekt.
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <Benefits.Card
            title="Grundreinigung"
            icon="/img/icons/gebaeudereinigung.svg"
            description="VOB-konforme Bauschlussreinigung für Neubauten und Umbauten. Entfernung von Bauresten, Staub und Flecken für eine perfekte Übergabe."
            link={{ href: '/gebaeudereinigung/grundreinigung', title: 'Mehr erfahren' }}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          />
          <Benefits.Card
            title="Fensterreinigung"
            icon="/img/icons/fensterreinigung.svg"
            description="Professionelle Reinigung aller Glasarten, inklusive Höhenarbeiten mit SCC-Zertifizierung. Kristallklare Ergebnisse für beeindruckende Optik."
            link={{ href: '/gebaeudereinigung/fensterreinigung', title: 'Mehr erfahren' }}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          />
          <Benefits.Card
            title="Haushaltsreinigung"
            icon="/img/icons/sonstiges.svg"
            description="Diskrete und haustiersichere Reinigung für Privatkunden. Premium-Service mit Fokus auf Hygiene und Datenschutz (DSGVO-konform)."
            link={{ href: '/gebaeudereinigung/haushaltsreinigung', title: 'Mehr erfahren' }}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          />
          <Benefits.Card
            title="Treppenhausreinigung"
            icon="/img/icons/treppenhausreinigung.svg"
            description="Spezialisierte Reinigung für Mehrfamilienhäuser, WEG-konform. Respekt vor Hausordnung und Lärmschutzzeiten."
            link={{ href: '/gebaeudereinigung/treppenhausreinigung', title: 'Mehr erfahren' }}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          />
          <Benefits.Card
            title="Baubeschlussreinigung"
            icon="/img/icons/gebaeudereinigung.svg"
            description="Durchführung gemäß VOB/C und DIN 18299. Vollständige Entfernung von Baustaub und -resten für reibungslose Abnahme."
            link={{ href: '/gebaeudereinigung/baubeschlussreinigung', title: 'Mehr erfahren' }}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          />
          <Benefits.Card
            title="Industriereinigung"
            icon="/img/icons/industriereinigung.svg"
            description="Spezialisierte Reinigung für Gewerbeobjekte, inklusive Maschinen und Anlagen. Hohe Sicherheitsstandards und Effizienz."
            link={{ href: '/gebaeudereinigung/industriereinigung', title: 'Mehr erfahren' }}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          />
        </div>
      </Section>

      {/* 4-Stufen-Verfahren Section: Compliance-Heavy */}
      <Section className="py-20 bg-white">
        <SectionTitle
          preTitle="Unser Prozess"
          title="4-Stufen-Verfahren für perfekte Ergebnisse"
          className="text-center mb-12"
        >
          Unser standardisiertes Verfahren gewährleistet Konsistenz, Qualität und Compliance mit allen relevanten Vorschriften. Jede Stufe ist detailliert dokumentiert.
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <ProcessStep
            number="1"
            title="Vorbereitung & Planung"
            description="Detaillierte Bedarfsanalyse und Erstellung eines maßgeschneiderten Reinigungsplans. Einhaltung von VOB/B §4 und DGUV-Regeln."
            icon="/img/icons/planung.svg"
            className="bg-blue-50 rounded-lg p-6 text-center"
          />
          <ProcessStep
            number="2"
            title="Ausführung"
            description="Professionelle Umsetzung mit zertifizierten Mitteln und Methoden. Fokus auf Sicherheit (SCC-Zertifizierung) und Umweltschutz."
            icon="/img/icons/ausfuehrung.svg"
            className="bg-green-50 rounded-lg p-6 text-center"
          />
          <ProcessStep
            number="3"
            title="Kontrolle & Abnahme"
            description="Qualitätsprüfung und Abnahmeprotokoll. Garantie für Kaution-Rückgabe und 100% Termintreue."
            icon="/img/icons/kontrolle.svg"
            className="bg-yellow-50 rounded-lg p-6 text-center"
          />
          <ProcessStep
            number="4"
            title="Nachsorge & Optimierung"
            description="Feedback-Runde und Optimierungsempfehlungen. Langfristige Partnerschaft mit DSGVO-konformer Dokumentation."
            icon="/img/icons/nachsorge.svg"
            className="bg-purple-50 rounded-lg p-6 text-center"
          />
        </div>
      </Section>

      {/* Compliance-Section: Branchenspezifische Vorschriften + Garantien */}
      <Section className="py-20 bg-gray-50">
        <SectionTitle
          preTitle="Qualität & Sicherheit"
          title="Compliance und Zertifizierungen"
          className="text-center mb-12"
        >
          Wir halten uns strikt an gesetzliche Vorgaben und Branchenstandards, um höchste Sicherheit und Zuverlässigkeit zu gewährleisten.
        </SectionTitle>
        <TwoColContent
          title="Unsere Compliance-Standards"
          textLeft="VOB/B §4 für Baureinigung, DGUV Regel 101-005 für Höhenarbeiten, WEG-Gesetz §21 für Gemeinschaftseigentum. Alle Prozesse sind dokumentiert und versichert."
          textRight="SCC-Zertifizierung, Höhenarbeits-Versicherung, DSGVO-konforme Datenschutzmaßnahmen. Kaution-Rückgabe-Garantie und Abnahmeprotokolle inklusive."
          image="/img/compliance-placeholder.webp"
          alt="Compliance Icons"
          className="max-w-6xl mx-auto"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">VOB-konform</h3>
            <p>Alle Reinigungsarbeiten entsprechen den VOB-Vorschriften für Bauprojekte.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">SCC-Zertifiziert</h3>
            <p>Sicherheitszertifizierung für Höhen- und Industriereinigung.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">DSGVO-sicher</h3>
            <p>Schutz Ihrer Daten in allen Prozessen.</p>
          </div>
        </div>
      </Section>

      {/* Garantie Section: Trust-Building */}
      <GarantieSection
        className="py-20 bg-white"
        title="Unsere Garantien"
        subtitle="Über 5000 Kunden, 100% Termintreue, Kaution-Rückgabe-Garantie"
      />

      {/* Related Services: SEO-optimierte interne Verlinkung */}
      <RelatedServices
        className="py-20 bg-gray-50"
        title="Ähnliche Services"
        services={[
          { title: 'Büroreinigung', href: '/gebaeudereinigung/bueroeinigung', description: 'Effiziente Reinigung für Gewerbeflächen.' },
          { title: 'Industriereinigung', href: '/gebaeudereinigung/industriereinigung', description: 'Spezialreinigung für Industrieanlagen.' },
          { title: 'Fassadenreinigung', href: '/gebaeudereinigung/fassadenreinigung', description: 'Professionelle Pflege von Gebäudefassaden.' },
          { title: 'Pflasterreinigung', href: '/gebaeudereinigung/pflasterreinigung', description: 'Reinigung von Außenflächen und Wegen.' },
        ]}
      />

      {/* CTA Section: Thematisches Hintergrundbild + Conversion-optimiert */}
      <CtaSection
        title="Bereit für Ihr Projekt?"
        subtitle="Kontaktieren Sie uns noch heute für ein unverbindliches Angebot. Wir beraten Sie gerne zu allen Details."
        ctaText="Angebot anfragen"
        ctaLink="/kontakt"
        backgroundImage={ctaBg}
        className="py-20 bg-cover bg-center text-white relative"
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="text-lg mb-6 opacity-90">Profitieren Sie von unserer Expertise und den besten Preisen.</p>
        </div>
      </CtaSection>

      {/* FAQ Section für SEO */}
      <Section className="py-20 bg-white">
        <Faq
          title="Häufige Fragen zu unserem Service"
          items={[
            {
              question: 'Was ist VOB-konforme Reinigung?',
              answer: 'VOB steht für Vergabe- und Vertragsordnung für Bauleistungen. Unsere Reinigungen erfüllen alle relevanten Standards für Bauprojekte.',
            },
            {
              question: 'Sind Ihre Mitarbeiter zertifiziert?',
              answer: 'Ja, alle Teams sind SCC- und DGUV-zertifiziert, insbesondere für Höhenarbeiten.',
            },
            {
              question: 'Wie läuft die Abnahme ab?',
              answer: 'Wir erstellen ein detailliertes Protokoll und garantieren die Kaution-Rückgabe bei voller Zufriedenheit.',
            },
            {
              question: 'Was kostet der Service?',
              answer: 'Preise sind individuell. Nutzen Sie unseren Kostenrechner oder kontaktieren Sie uns für ein Angebot.',
            },
          ]}
        />
      </Section>
    </>
  );
}