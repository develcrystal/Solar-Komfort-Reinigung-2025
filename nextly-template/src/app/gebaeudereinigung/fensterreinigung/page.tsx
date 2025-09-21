import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { SectionTitle } from '@/components/SectionTitle';
import { CtaSection } from '@/components/CtaSection';
import { RelatedServices } from '@/components/RelatedServices';
import { GarantieSection } from '@/components/GarantieSection';
import { Faq } from '@/components/Faq';
import { Breadcrumb } from '@/components/Breadcrumb';
import { TwoColContent } from '@/components/TwoColContent';
import { ProcessStep } from '@/components/ProcessStep';
import Link from 'next/link';
import Image from 'next/image';
import { metadata as meta } from './metadata';

export const metadata = meta;

export default function FensterreinigungPage() {
  const serviceName = 'Fensterreinigung';
  const heroImage = '/img/kundenbilder/Reinigung.webp';
  const ctaBg = '/img/kundenbilder/Reinigung.webp';

  return (
    <>
      <Breadcrumb
        list={[
          { title: 'Home', href: '/' },
          { title: 'Gebäudereinigung', href: '/gebaeudereinigung' },
          { title: serviceName, href: `/gebaeudereinigung/${serviceName.toLowerCase()}` },
        ]}
        className="py-6 bg-gray-50"
      />

      {/* Hero Section: Vollbreites thematisches Bild + technische Details */}
      <Hero
        title={`${serviceName} – Höhenarbeits-Zertifizierung & Glasarten-Expertise`}
        subtitle="Professionelle Reinigung aller Glasarten und Rahmen-Materialien mit SCC-Zertifizierung und DGUV-Regel 101-005. Sichere Höhenarbeiten mit voller Versicherung für kristallklare Ergebnisse."
        backgroundImage={heroImage}
        backgroundAlt={`${serviceName} – Streifenfreie Reinigung für klare Sicht`}
        ctaText="Kostenloses Angebot anfragen"
        ctaLink="/kontakt"
        className="min-h-[60vh] bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-xl mb-4 opacity-90">Über 5000 zufriedene Kunden – Sichere und zertifizierte Höhenarbeiten</p>
        </div>
      </Hero>

      {/* Service-Cards Section: Custom Cards mit Icons und Beschreibungen */}
      <Section className="py-4 sm:py-8 md:py-12 lg:py-16 bg-gray-50">
        <SectionTitle
          preTitle="Unsere Kernleistungen"
          title="Detaillierte Fensterreinigung-Services"
          className="text-center mb-12"
        >
          Von der Innen-/Außenreinigung bis zu Fassaden und Wintergärten: Unsere Services sind zertifiziert und auf höchste Sicherheit abgestimmt.
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/fensterreinigung.svg" alt="Innen- & Außenreinigung Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Innen- & Außenreinigung</h3>
            <p className="text-gray-600 mb-4">Streifenfreie Reinigung von Fenstern innen und außen, inklusive Rahmen und Bänke für perfekte Optik.</p>
            <Link href="/kontakt" className="text-blue-600 hover:text-blue-800 font-medium">Angebot anfragen</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/sonstiges.svg" alt="Glasfassaden & Schaufenster Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Glasfassaden & Schaufenster</h3>
            <p className="text-gray-600 mb-4">Professionelle Reinigung großer Glasflächen mit speziellen Techniken für Gewerbe und Büros.</p>
            <Link href="/gebaeudereinigung/fassadenreinigung" className="text-blue-600 hover:text-blue-800 font-medium">Mehr zu Fassadenreinigung</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/fensterreinigung.svg" alt="Höhenarbeiten Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Höhenarbeiten</h3>
            <p className="text-gray-600 mb-4">Sichere Reinigung in Höhen mit DGUV 101-005 und SCC-Zertifizierung – voll versichert bis 3 Mio. €.</p>
            <Link href="/kontakt" className="text-blue-600 hover:text-blue-800 font-medium">Sicheres Angebot</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/gebaeudereinigung.svg" alt="Glasarten-Expertise Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Glasarten-Expertise</h3>
            <p className="text-gray-600 mb-4">Spezialisierte Reinigung für Einfach-, Isolier- und Sicherheitsglas – ohne Kratzer oder Streifen.</p>
            <Link href="/gebaeudereinigung/industriereinigung" className="text-blue-600 hover:text-blue-800 font-medium">Mehr zu Industriereinigung</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/sonstiges.svg" alt="Rahmen-Materialien Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Rahmen-Materialien</h3>
            <p className="text-gray-600 mb-4">Pflege von Alu, Holz und PVC-Rahmen mit materialgerechten Mitteln für Langlebigkeit.</p>
            <Link href="/gebaeudereinigung/bueroeinigung" className="text-blue-600 hover:text-blue-800 font-medium">Mehr zu Büroreinigung</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/fensterreinigung.svg" alt="Wintergarten-Reinigung Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Wintergarten-Reinigung</h3>
            <p className="text-gray-600 mb-4">Gründliche Reinigung von Wintergärten und Dachflächenfenstern – auch in schwierigen Positionen.</p>
            <Link href="/gebaeudereinigung/haushaltsreinigung" className="text-blue-600 hover:text-blue-800 font-medium">Mehr zu Haushaltsreinigung</Link>
          </div>
        </div>
      </Section>

      {/* 4-Stufen-Verfahren Section: Compliance-Heavy */}
      <Section className="py-4 sm:py-8 md:py-12 lg:py-16 bg-white">
        <SectionTitle
          preTitle="Unser bewährter Prozess"
          title="4-Stufen-Fensterreinigung für perfekte Klarheit"
          className="text-center mb-12"
        >
          Jede Fensterreinigung folgt einem standardisierten Verfahren, das DGUV Regel 101-005 und SCC-Standards einhält. Von der Vorbereitung bis zur Abnahme – alles für Ihre Sicherheit.
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <ProcessStep
            number="1"
            title="Vorbereitung & Sicherung"
            description="Risikoanalyse und Sicherung des Arbeitsbereichs gemäß DGUV 101-005. Auswahl materialgerechter Mittel für Glasarten und Rahmen."
            icon="/img/icons/planung.svg"
            className="bg-blue-50 rounded-lg p-6 text-center"
          />
          <ProcessStep
            number="2"
            title="Ausführung der Reinigung"
            description="Professionelle Reinigung mit SCC-zertifizierten Methoden: Streifenfrei für alle Oberflächen, inklusive Höhenarbeiten mit Versicherungsschutz."
            icon="/img/icons/ausfuehrung.svg"
            className="bg-green-50 rounded-lg p-6 text-center"
          />
          <ProcessStep
            number="3"
            title="Qualitätskontrolle & Abnahme"
            description="Finale Inspektion auf Streifen und Sauberkeit. Abnahmeprotokoll für dokumentierte Qualität und Zufriedenheit."
            icon="/img/icons/kontrolle.svg"
            className="bg-yellow-50 rounded-lg p-6 text-center"
          />
          <ProcessStep
            number="4"
            title="Nachsorge & Wartungstipps"
            description="Übergabe mit Pflegetipps für Rahmen und Glas. Optionale Wartungspläne für langfristige Klarheit und Sicherheit."
            icon="/img/icons/nachsorge.svg"
            className="bg-purple-50 rounded-lg p-6 text-center"
          />
        </div>
      </Section>

      {/* Compliance-Section: Branchenspezifische Vorschriften + Garantien */}
      <Section className="py-4 sm:py-8 md:py-12 lg:py-16 bg-gray-50">
        <SectionTitle
          preTitle="Sicherheit & Zertifizierung"
          title="Compliance-Standards in der Fensterreinigung"
          className="text-center mb-12"
        >
          Unsere Höhenarbeiten sind voll versichert und zertifiziert, um höchste Sicherheit zu gewährleisten.
        </SectionTitle>
        <TwoColContent
          title="Höhenarbeits-Zertifizierung"
          textLeft="Gemäß DGUV Regel 101-005 und SCC-Zertifizierung führen wir alle Arbeiten durch. Expertise für Glasarten und Rahmen-Materialien, mit Fokus auf Prävention von Unfällen."
          textRight="Höhenarbeits-Versicherung bis 3 Mio. €: Wir schützen Sie und unser Team. Dokumentierte Schulungen und Ausrüstung für sichere, streifenfreie Reinigung in jeder Höhe."
          image="/img/compliance-placeholder.webp"
          alt="DGUV und SCC Icons für Fensterreinigung"
          className="max-w-6xl mx-auto"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">DGUV Regel 101-005</h3>
            <p>Sicherheitsstandards für Arbeiten in der Höhe – unsere Teams sind vollständig geschult und ausgerüstet.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">SCC-Zertifizierung</h3>
            <p>Sicherheitszertifikat für Contractor: Regelmäßige Audits und Schulungen für höchste Qualität.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Höhenarbeits-Versicherung</h3>
            <p>Vollständiger Schutz bis 3 Mio. € – für Schäden und Unfälle während der Reinigung.</p>
          </div>
        </div>
      </Section>

      {/* Garantie Section: Trust-Building */}
      <GarantieSection
        className="py-4 sm:py-8 md:py-12 lg:py-16 bg-white"
        title="Ihre Garantien bei uns"
        subtitle="Über 5000 Kunden, 100% Termintreue, SCC-zertifizierte Sicherheit und Höhenarbeits-Expertise"
      />

      {/* Related Services: SEO-optimierte interne Verlinkung */}
      <RelatedServices
        className="py-4 sm:py-8 md:py-12 lg:py-16 bg-gray-50"
        title="Ähnliche Reinigungs-Services"
        services={[
          { title: 'Fassadenreinigung', href: '/gebaeudereinigung/fassadenreinigung', description: 'Professionelle Reinigung von Glasfassaden und Außenflächen.' },
          { title: 'Büroreinigung', href: '/gebaeudereinigung/bueroeinigung', description: 'Innenreinigung für Büros, inklusive Fenster und Glas.' },
          { title: 'Industriereinigung', href: '/gebaeudereinigung/industriereinigung', description: 'Spezialreinigung für Industrieglas und Höhenarbeiten.' },
          { title: 'Grundreinigung', href: '/gebaeudereinigung/grundreinigung', description: 'Tiefenreinigung mit Fensterpflege für Neubauten.' },
        ]}
      />

      {/* CTA Section: Thematisches Hintergrundbild + Conversion-optimiert */}
      <CtaSection
        title="Bereit für klare Sicht?"
        subtitle="Kontaktieren Sie uns für ein maßgeschneidertes Angebot. Wir beraten Sie zu Höhenarbeiten, Zertifizierungen und Kosten – unverbindlich und sicher."
        ctaText="Angebot anfragen"
        ctaLink="/kontakt"
        backgroundImage={ctaBg}
        className="py-4 sm:py-8 md:py-12 lg:py-16 bg-cover bg-center text-white relative"
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="text-lg mb-6 opacity-90">Profitieren Sie von unserer Expertise in Glasreinigung und Höhenarbeiten – zertifiziert und versichert.</p>
        </div>
      </CtaSection>

      {/* FAQ Section für SEO */}
      <Section className="py-4 sm:py-8 md:py-12 lg:py-16 bg-white">
        <Faq
          title="Häufige Fragen zur Fensterreinigung"
          items={[
            {
              question: 'Welche Zertifizierungen haben Ihre Teams?',
              answer: 'Unsere Mitarbeiter sind SCC-zertifiziert und folgen DGUV Regel 101-005 für Höhenarbeiten – mit regelmäßigen Schulungen.',
            },
            {
              question: 'Können Sie alle Glasarten reinigen?',
              answer: 'Ja, wir haben Expertise für Einfach-, Isolier- und Sicherheitsglas, ohne Risiko für Beschädigungen.',
            },
            {
              question: 'Ist die Höhenarbeits-Versicherung inklusive?',
              answer: 'Absolut: Vollständiger Versicherungsschutz bis 3 Mio. € für alle Arbeiten in der Höhe.',
            },
            {
              question: 'Wie oft empfehlen Sie eine Reinigung?',
              answer: 'Je nach Lage 2-4 Mal pro Jahr für optimale Klarheit und Pflege der Rahmen-Materialien.',
            },
            {
              question: 'Was machen Sie bei schwierigen Rahmen-Materialien?',
              answer: 'Wir verwenden materialgerechte Mittel für Alu, Holz und PVC – ohne Korrosion oder Verfärbung.',
            },
          ]}
        />
      </Section>
    </>
  );
}