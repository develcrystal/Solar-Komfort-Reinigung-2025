import { Metadata } from 'next';
import { ServiceHeader } from '@/components/ServiceHeader';
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

export default function GrundreinigungPage() {
  const serviceName = 'Grundreinigung';
  const heroImage = '/img/kundenbilder/Grundreinigung.webp';
  const ctaBg = '/img/kundenbilder/Grundreinigung.webp';

  return (
    <>
      <Breadcrumb
        customItems={[
          { label: 'Home', href: '/' },
          { label: 'Gebäudereinigung', href: '/gebaeudereinigung' },
          { label: serviceName, href: `/gebaeudereinigung/${serviceName.toLowerCase()}` },
        ]}
        className="py-4 sm:py-6 bg-gray-50 dark:bg-gray-800"
      />

      {/* Header Section: Schmal und blaustichig wie Hausmeisterservice */}
      <ServiceHeader
        title={`${serviceName.toUpperCase()} – VOB-KONFORME BAUSCHLUSS- UND UMZUGSREINIGUNG`}
        description="Professionelle Tiefenreinigung für Neubauten, Umbauten und Umzüge. Mit Abnahmeprotokoll und Kaution-Rückgabe-Garantie für stressfreie Übergaben."
        imageSrc={heroImage}
        imageAlt={`${serviceName} – Intensive Tiefenreinigung für makellose Ergebnisse`}
      />

      {/* Service-Cards Section: Custom Cards mit Icons und Beschreibungen */}
      <Section className="py-8 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <SectionTitle
          preTitle="Unsere Kernleistungen"
          title="Detaillierte Grundreinigung-Services"
        >
          Von der Bauschlussreinigung bis zur Nachmieter-Übergabe: Unsere Services sind auf höchste Standards abgestimmt und decken alle Aspekte der Tiefenreinigung ab.
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-full sm:max-w-4xl lg:max-w-7xl mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/gebaeudereinigung.svg" alt="Bauschlussreinigung Icon" width={48} height={48} className="mb-4 mx-auto" sizes="(max-width: 768px) 100vw, 50vw" />
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 leading-tight">Bauschlussreinigung</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">VOB-konforme Reinigung nach Bauarbeiten: Entfernung von Mörtel, Staub und Verpackungsmaterialien für eine saubere Übergabe.</p>
            <Link href="/gebaeudereinigung/baubeschlussreinigung" className="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 font-medium">Mehr zu Baubeschlussreinigung</Link>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/sonstiges.svg" alt="Umzugsreinigung Icon" width={48} height={48} className="mb-4 mx-auto" sizes="(max-width: 768px) 100vw, 50vw" />
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 leading-tight">Umzugsreinigung</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">Vollständige Reinigung vor oder nach Umzug: Böden, Wände, Sanitär und Küchen – bezugsfertig und hygienisch.</p>
            <Link href="/kontakt" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">Angebot für Umzugsreinigung</Link>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/gebaeudereinigung.svg" alt="Nachmieter-Services Icon" width={48} height={48} className="mb-4 mx-auto" sizes="(max-width: 768px) 100vw, 50vw" />
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 leading-tight">Nachmieter-Services</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">Professionelle Vorbereitung für den neuen Mieter: Kaution-Rückgabe-Garantie durch detailliertes Abnahmeprotokoll.</p>
            <Link href="/gebaeudereinigung/haushaltsreinigung" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">Mehr zu Haushaltsreinigung</Link>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/treppenhausreinigung.svg" alt="Boden- & Flächenreinigung Icon" width={48} height={48} className="mb-4 mx-auto" sizes="(max-width: 768px) 100vw, 50vw" />
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 leading-tight">Boden- & Flächenreinigung</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">Gründliche Reinigung von Böden, Treppen und Flächen mit umweltfreundlichen Mitteln und Versiegelung für Langlebigkeit.</p>
            <Link href="/gebaeudereinigung/treppenhausreinigung" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">Mehr zu Treppenhausreinigung</Link>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/fensterreinigung.svg" alt="Sanitär- & Küchenreinigung Icon" width={48} height={48} className="mb-4 mx-auto" sizes="(max-width: 768px) 100vw, 50vw" />
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 leading-tight">Sanitär- & Küchenreinigung</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">Desinfektion und Entkalkung von Bädern und Küchen – hygienisch und geruchsfrei für sofortigen Einzug.</p>
            <Link href="/gebaeudereinigung/fensterreinigung" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">Mehr zu Fensterreinigung</Link>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/fensterreinigung.svg" alt="Fenster & Rahmen Icon" width={48} height={48} className="mb-4 mx-auto" sizes="(max-width: 768px) 100vw, 50vw" />
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 leading-tight">Fenster & Rahmen</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">Streifenfreie Reinigung von Fenstern, Rahmen und Oberflächen – inklusive Höhenarbeiten bei Bedarf.</p>
            <Link href="/gebaeudereinigung/fensterreinigung" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">Mehr zu Fensterreinigung</Link>
          </div>
        </div>
      </Section>

      {/* 4-Stufen-Verfahren Section: Compliance-Heavy */}
      <Section className="py-8 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
        <SectionTitle
          preTitle="Unser bewährter Prozess"
          title="4-Stufen-Grundreinigung für perfekte Ergebnisse"
        >
          Jede Grundreinigung folgt einem standardisierten Verfahren, das VOB/B §4 und DIN-Normen einhält. Von der Planung bis zur Abnahme – alles dokumentiert für Ihre Sicherheit.
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-full sm:max-w-4xl lg:max-w-6xl mx-auto px-4">
          <ProcessStep
            step={1}
            title="Vorbereitung & Planung"
            description="Detaillierte Besichtigung und Erstellung eines VOB-konformen Reinigungsplans mit spezifischen Anforderungen."
            imageSrc="/img/kundenbilder/Haus.webp"
            imageAlt="Vorbereitung und Planung Icon"
          />
          <ProcessStep
            step={2}
            title="Ausführung der Reinigung"
            description="Professionelle Tiefenreinigung mit zertifizierten Mitteln und speziellen Techniken für alle Bereiche."
            imageSrc="/img/kundenbilder/Grundreinigung.webp"
            imageAlt="Ausführung der Reinigung Icon"
          />
          <ProcessStep
            step={3}
            title="Qualitätskontrolle & Abnahme"
            description="Finale Inspektion und Erstellung des Abnahmeprotokolls gemäß VOB/B für fehlerfreie Übergabe."
            imageSrc="/img/kundenbilder/Reinigung.webp"
            imageAlt="Qualitätskontrolle und Abnahme Icon"
          />
          <ProcessStep
            step={4}
            title="Nachsorge & Dokumentation"
            description="Übergabe mit Reinigungsbericht, optionaler Nachkontrolle und vollständiger Dokumentation für Akten."
            imageSrc="/img/kundenbilder/team-model-reinigung.webp"
            imageAlt="Nachsorge und Dokumentation Icon"
          />
        </div>
      </Section>

      {/* Compliance-Section: Branchenspezifische Vorschriften + Garantien */}
      <Section className="py-8 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <SectionTitle
          preTitle="Rechtliche Absicherung"
          title="Compliance-Standards in der Grundreinigung"
        >
          Als zertifizierter Partner halten wir uns an alle relevanten Vorschriften, um Risiken zu minimieren und Ihre Kaution zu schützen.
        </SectionTitle>
        <TwoColContent
          title="VOB-konforme Grundreinigung"
          textLeft="Gemäß VOB/B §4 planen und führen wir alle Reinigungsarbeiten durch. Dies umfasst detaillierte Dokumentation, die für Bauprojekte und Mietübergaben essenziell ist. Unsere Services decken Bauschluss, Umzug und Nachmieter ab."
          textRight="Abnahmeprotokoll und Kaution-Rückgabe-Garantie: Wir stellen sicher, dass alle Kriterien erfüllt sind, damit Sie ohne Nachweise oder Streitigkeiten die Kaution zurückerhalten. Inklusive Nachweis über umweltfreundliche Entsorgung."
          image="/img/flux/industriereinigung.webp"
          alt="VOB und Compliance Icons für Grundreinigung"
          className="max-w-full sm:max-w-4xl lg:max-w-6xl mx-auto px-4"
        />
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow">
            <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-900 dark:text-gray-100 leading-tight">VOB/B §4 Compliance</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">Alle Arbeiten entsprechen den Vergabe- und Vertragsordnungen für Bauleistungen. Vollständige Protokollierung für rechtssichere Übergaben.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow">
            <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-900 dark:text-gray-100 leading-tight">Abnahmeprotokoll</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">Detailliertes Protokoll mit Checklisten für Oberflächen, Sanitär und Böden. Gemeinsame Abnahme mit Vermieter/Mieter.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow">
            <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-900 dark:text-gray-100 leading-tight">Kaution-Rückgabe-Garantie</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">100% Garantie: Bei voller Zufriedenheit und Protokollübermittlung erhalten Sie die Kaution ohne Abzüge zurück.</p>
          </div>
        </div>
      </Section>

      {/* Garantie Section: Trust-Building */}
      <GarantieSection
        className="py-8 sm:py-16 lg:py-20 bg-white dark:bg-gray-800"
        title="Ihre Garantien bei uns"
        subtitle="Über 5000 Kunden, 100% Termintreue, VOB-konforme Qualität und Kaution-Sicherheit"
      />

      {/* Related Services: SEO-optimierte interne Verlinkung */}
      <RelatedServices
        className="py-8 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800"
        title="Ähnliche Reinigungs-Services"
        services={[
          { title: 'Baubeschlussreinigung', href: '/gebaeudereinigung/baubeschlussreinigung', description: 'Spezialisierte Reinigung nach Bauende – VOB/C-konform.' },
          { title: 'Umzugsreinigung', href: '/kontakt', description: 'Vollständige Vorbereitung für den Umzug – hygienisch und effizient.' },
          { title: 'Haushaltsreinigung', href: '/gebaeudereinigung/haushaltsreinigung', description: 'Privatreinigung mit Diskretion und Haustier-Sicherheit.' },
          { title: 'Treppenhausreinigung', href: '/gebaeudereinigung/treppenhausreinigung', description: 'WEG-konforme Reinigung für Mehrfamilienhäuser.' },
        ]}
      />

      {/* CTA Section: Thematisches Hintergrundbild + Conversion-optimiert */}
      <CtaSection
        title="Starten Sie Ihre Grundreinigung noch heute!"
        subtitle="Kontaktieren Sie uns für ein maßgeschneidertes Angebot. Wir beraten Sie zu VOB-Standards, Terminen und Kosten – unverbindlich und kostenlos."
        ctaText="Angebot anfragen"
        ctaLink="/kontakt"
        backgroundImage={ctaBg}
        className="py-8 sm:py-16 lg:py-20 bg-cover bg-center text-white relative"
      >
        <p className="text-base sm:text-lg mb-6 opacity-90 leading-relaxed">Sichern Sie sich die Kaution-Rückgabe und perfekte Sauberkeit – mit Komfort Gebäudeservice24.</p>
      </CtaSection>

      {/* FAQ Section für SEO */}
      <Section className="py-8 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
        <Faq
          title="Häufige Fragen zur Grundreinigung"
          items={[
            {
              question: 'Was umfasst eine VOB-konforme Grundreinigung?',
              answer: 'Gemäß VOB/B §4 beinhaltet sie die vollständige Entfernung von Bauresten, Staub und Flecken, inklusive Dokumentation für Abnahmen. Ideal für Bauschluss und Umzüge.',
            },
            {
              question: 'Wie läuft die Abnahmeprotokoll-Erstellung ab?',
              answer: 'Wir führen eine gemeinsame Inspektion durch und erstellen ein detailliertes Protokoll mit Checklisten. Dies schützt vor Streitigkeiten und sichert die Kaution-Rückgabe.',
            },
            {
              question: 'Bieten Sie Nachmieter-Services an?',
              answer: 'Ja, wir reinigen Räume speziell für die Übergabe an Nachmieter – hygienisch, gründlich und mit Garantie für bezugsfertige Zustände.',
            },
            {
              question: 'Sind Ihre Reinigungsmittel umweltfreundlich?',
              answer: 'Absolut: Wir verwenden zertifizierte, biologisch abbaubare Produkte, die DIN-Standards erfüllen und für sensible Bereiche geeignet sind.',
            },
            {
              question: 'Wie lange dauert eine typische Grundreinigung?',
              answer: 'Je nach Objektgröße 4-8 Stunden. Wir planen flexibel und termingerecht, mit Option für Express-Services.',
            },
          ]}
        />
      </Section>
    </>
  );
}