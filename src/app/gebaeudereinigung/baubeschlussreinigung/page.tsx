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

export default function BaubeschlussreinigungPage() {
  const serviceName = 'Baubeschlussreinigung';
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
        className="py-6 bg-gray-50"
      />

      {/* Header Section: Schmal und blaustichig wie Hausmeisterservice */}
      <ServiceHeader
        title={`${serviceName.toUpperCase()} – VOB/C ATV DIN 18299 & BAUSTELLENVERORDNUNG`}
        description="Professionelle Endreinigung nach Bau- und Renovierungsarbeiten mit Baustellenstandards, Rohbau-Reinigung und Entsorgungsnachweis. VOB/C-konforme Abwicklung für bezugsfertige Übergaben."
        imageSrc={heroImage}
        imageAlt={`${serviceName} – Bezugsfertige Übergabe nach Bauende`}
      />

      {/* Service-Cards Section: Custom Cards mit Icons und Beschreibungen */}
      <Section className="py-4 sm:py-8 md:py-12 lg:py-16 bg-gray-50">
        <SectionTitle
          preTitle="Unsere Kernleistungen"
          title="Detaillierte Baubeschlussreinigung-Services"
        >
          Von der Rohbau-Reinigung bis zur bezugsfertigen Übergabe: Unsere Services sind auf Baustellenstandards und VOB/C-Compliance abgestimmt.
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/gebaeudereinigung.svg" alt="Rohbau-Reinigung Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Rohbau-Reinigung</h3>
            <p className="text-gray-600 mb-4">Gründliche Entfernung von Mörtel, Zement und Baustaub aus Rohbau-Strukturen nach ATV DIN 18299.</p>
            <Link href="/gebaeudereinigung/grundreinigung" className="text-blue-600 hover:text-blue-800 font-medium">Mehr zu Grundreinigung</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/sonstiges.svg" alt="Baustaub-Entfernung Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Baustaub-Entfernung</h3>
            <p className="text-gray-600 mb-4">Professionelle Beseitigung aller Baustäube und Feinpartikel – auch aus schwer zugänglichen Bereichen.</p>
            <Link href="/kontakt" className="text-blue-600 hover:text-blue-800 font-medium">Angebot für Entstaubung</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/fensterreinigung.svg" alt="Baustellen-Standards Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Baustellen-Standards</h3>
            <p className="text-gray-600 mb-4">Einhaltung aller Baustellenverordnungen und Sicherheitsvorschriften für professionelle Abwicklung.</p>
            <Link href="/gebaeudereinigung/industriereinigung" className="text-blue-600 hover:text-blue-800 font-medium">Mehr zu Industriereinigung</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/gebaeudereinigung.svg" alt="Fenster- & Rahmenreinigung Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Fenster- & Rahmenreinigung</h3>
            <p className="text-gray-600 mb-4">Streifenfreie Reinigung aller Fenster und Rahmen – Entfernung von Kleberesten und Folien.</p>
            <Link href="/gebaeudereinigung/fensterreinigung" className="text-blue-600 hover:text-blue-800 font-medium">Mehr zu Fensterreinigung</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/treppenhausreinigung.svg" alt="Sanitäranlagen komplett Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Sanitäranlagen komplett</h3>
            <p className="text-gray-600 mb-4">Desinfektion und Grundreinigung aller Sanitärinstallationen – bezugsfertig und hygienisch.</p>
            <Link href="/gebaeudereinigung/krankenausreinigung" className="text-blue-600 hover:text-blue-800 font-medium">Mehr zu Krankenausreinigung</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/sonstiges.svg" alt="Entsorgungsnachweis Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Entsorgungsnachweis</h3>
            <p className="text-gray-600 mb-4">Dokumentierte Entsorgung aller Bauabfälle und Verpackungsmaterialien – umweltgerecht und nachweisbar.</p>
            <Link href="/kontakt" className="text-blue-600 hover:text-blue-800 font-medium">Entsorgungsangebot</Link>
          </div>
        </div>
      </Section>

      {/* 4-Stufen-Verfahren Section: Compliance-Heavy */}
      <Section className="py-4 sm:py-8 md:py-12 lg:py-16 bg-white">
        <SectionTitle
          preTitle="Unser bewährter Prozess"
          title="4-Stufen-Baubeschlussreinigung für bezugsfertige Übergabe"
        >
          Jede Reinigung folgt einem standardisierten Verfahren, das VOB/C ATV DIN 18299 und Baustellenverordnung einhält. Von der Planung bis zur Abnahme – alles für termingerechte Fertigstellung.
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <ProcessStep
            step={1}
            title="Baustellenanalyse & Planung"
            description="Detaillierte Bestandsaufnahme nach VOB/C und Erstellung eines Reinigungsplans mit Generalunternehmer-Koordination."
            imageSrc="/img/kundenbilder/Haus.webp"
            imageAlt="Baustellenanalyse und Planung Icon"
          />
          <ProcessStep
            step={2}
            title="Rohbau- & Entstaubung"
            description="Professionelle Entfernung von Mörtel, Zement und Baustaub mit modernsten Spezialgeräten nach ATV DIN 18299 Standards."
            imageSrc="/img/kundenbilder/Grundreinigung.webp"
            imageAlt="Rohbau und Entstaubung Icon"
          />
          <ProcessStep
            step={3}
            title="Feinreinigung & Qualitätskontrolle"
            description="Finale Reinigung aller Oberflächen und Sanitäranlagen mit Abnahmeprotokoll für bezugsfertige Übergabe."
            imageSrc="/img/kundenbilder/Reinigung.webp"
            imageAlt="Feinreinigung und Qualitätskontrolle Icon"
          />
          <ProcessStep
            step={4}
            title="Übergabe & Entsorgungsnachweis"
            description="Bezugsfertige Übergabe mit Dokumentation und Entsorgungsnachweis für Garantie."
            imageSrc="/img/kundenbilder/team-model-reinigung.webp"
            imageAlt="Übergabe und Entsorgungsnachweis Icon"
          />
        </div>
      </Section>

      {/* Compliance-Section: Branchenspezifische Vorschriften + Garantien */}
      <Section className="py-4 sm:py-8 md:py-12 lg:py-16 bg-gray-50">
        <SectionTitle
          preTitle="VOB/C & Baustellenverordnung"
          title="Compliance-Standards in der Baubeschlussreinigung"
        >
          Als VOB/C-Partner halten wir uns an alle relevanten Bauvorschriften für termingerechte und mängelfreie Übergaben.
        </SectionTitle>
        <TwoColContent
          title="VOB/C-konforme Baubeschlussreinigung"
          textLeft="Gemäß VOB/C ATV DIN 18299 führen wir alle Reinigungsarbeiten durch. Strikte Einhaltung der Baustellenverordnung und professionelle Koordination mit allen Gewerken für reibungslose Abläufe."
          textRight="Baustellen-Expertise: Wir verstehen die besonderen Anforderungen von Bauprojekten. Termingerechte Ausführung und vollständige Dokumentation für Generalunternehmer und Bauherren."
          image="/img/flux/industriereinigung.webp"
          alt="VOB/C und Baustellenverordnung Icons für Baubeschlussreinigung"
          className="max-w-6xl mx-auto"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">VOB/C ATV DIN 18299</h3>
            <p>Alle Arbeiten entsprechen den allgemeinen technischen Vertragsbedingungen für Bauleistungen.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Baustellenverordnung</h3>
            <p>Strikte Einhaltung aller Sicherheitsvorschriften und Koordination mit anderen Gewerken.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Entsorgungsnachweis</h3>
            <p>Vollständige Dokumentation der umweltgerechten Entsorgung aller Bauabfälle und Materialien.</p>
          </div>
        </div>
      </Section>

      {/* Garantie Section: Trust-Building */}
      <GarantieSection
        className="py-4 sm:py-8 md:py-12 lg:py-16 bg-white"
        title="Ihre Garantien bei uns"
        subtitle="Über 5000 Kunden, 100% VOB/C-Compliance, Baustellenverordnungs-Einhaltung und termingerechte Fertigstellung"
      />

      {/* Related Services: SEO-optimierte interne Verlinkung */}
      <RelatedServices
        className="py-4 sm:py-8 md:py-12 lg:py-16 bg-gray-50"
        title="Ähnliche Reinigungs-Services"
        services={[
          { title: 'Grundreinigung', href: '/gebaeudereinigung/grundreinigung', description: 'VOB-konforme Tiefenreinigung für Umzüge und Neubauten.' },
          { title: 'Industriereinigung', href: '/gebaeudereinigung/industriereinigung', description: 'Spezialreinigung für Produktionsanlagen und Maschinen.' },
          { title: 'Fensterreinigung', href: '/gebaeudereinigung/fensterreinigung', description: 'Professionelle Reinigung für Baustellen und Neubauten.' },
          { title: 'Krankenausreinigung', href: '/gebaeudereinigung/krankenausreinigung', description: 'Hygienische Standards für medizinische Einrichtungen.' },
        ]}
      />

      {/* CTA Section: Thematisches Hintergrundbild + Conversion-optimiert */}
      <CtaSection
        title="Bereit für die bezugsfertige Übergabe?"
        subtitle="Kontaktieren Sie uns für ein maßgeschneidertes Angebot. Wir beraten Sie zu VOB/C-Standards, Baustellenkoordination und Terminen – professionell und unverbindlich."
        ctaText="Angebot anfragen"
        ctaLink="/kontakt"
        backgroundImage={ctaBg}
      >
        <p className="text-lg mb-6 opacity-90">Vertrauen Sie auf unsere Baustellenerfahrung – für termingerechte und mängelfreie Übergaben.</p>
      </CtaSection>

      {/* FAQ Section für SEO */}
      <Section className="py-4 sm:py-8 md:py-12 lg:py-16 bg-white">
        <Faq
          title="Häufige Fragen zur Baubeschlussreinigung"
          items={[
            {
              question: 'Arbeiten Sie VOB/C-konform?',
              answer: 'Ja, alle Arbeiten erfolgen gemäß VOB/C ATV DIN 18299 und in Koordination mit Generalunternehmern und Baustellenleitung.',
            },
            {
              question: 'Können Sie termingerecht zur Baufertigstellung arbeiten?',
              answer: 'Absolut: Wir koordinieren unsere Arbeiten mit dem Bauzeitplan und sorgen für pünktliche, bezugsfertige Übergaben.',
            },
            {
              question: 'Ist die Entsorgung der Bauabfälle inklusive?',
              answer: 'Ja, wir entsorgen alle Bauabfälle umweltgerecht und stellen vollständige Entsorgungsnachweise zur Verfügung.',
            },
            {
              question: 'Arbeiten Sie auch bei laufendem Baubetrieb?',
              answer: 'Ja, wir sind erfahren in der Koordination mit anderen Gewerken und halten alle Baustellenverordnungen ein.',
            },
            {
              question: 'Welche Garantien geben Sie auf die Baubeschlussreinigung?',
              answer: 'Wir garantieren bezugsfertige Qualität mit Abnahmeprotokoll und bieten Nachkontrolle bei Bedarf.',
            },
          ]}
        />
      </Section>
    </>
  );
}