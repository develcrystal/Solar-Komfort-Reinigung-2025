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

export default function TreppenhausreinigungPage() {
  const serviceName = 'Treppenhausreinigung';
  const heroImage = '/img/kundenbilder/Treppenhausreinigung.webp';
  const ctaBg = '/img/kundenbilder/Treppenhausreinigung.webp';

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
        title={`${serviceName.toUpperCase()} – WEG-VERWALTUNG & MEHRFAMILIENHAUS-EXPERTISE`}
        description="WEG-konforme Reinigung für Mehrfamilienhäuser mit Hausordnungs-Compliance und Lärmschutz-Zeiten. Professionelle Pflege von Treppenhäusern, Eingangsbereichen und Gemeinschaftsflächen."
        imageSrc={heroImage}
        imageAlt={`${serviceName} – Gepflegte Treppenhäuser für Wohnkomfort`}
      />

      {/* Service-Cards Section: Custom Cards mit Icons und Beschreibungen */}
      <Section className="py-4 sm:py-8 md:py-12 lg:py-16 bg-gray-50">
        <SectionTitle
          preTitle="Unsere Kernleistungen"
          title="Detaillierte Treppenhausreinigung-Services"
        >
          Von der wöchentlichen Wartung bis zur WEG-Verwaltung: Unsere Services sind auf Mehrfamilienhäuser und Hausordnungen abgestimmt.
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/treppenhausreinigung.svg" alt="Wöchentliche Treppenhausreinigung Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Wöchentliche Treppenhausreinigung</h3>
            <p className="text-gray-600 mb-4">Regelmäßige Reinigung von Stufen, Geländer und Handläufen unter Beachtung der Hausordnung.</p>
            <Link href="/kontakt" className="text-blue-600 hover:text-blue-800 font-medium">Reinigungsplan erstellen</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/gebaeudereinigung.svg" alt="Eingangsbereiche & Flure Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Eingangsbereiche & Flure</h3>
            <p className="text-gray-600 mb-4">Gründliche Pflege von Eingängen, Fluren und Briefkastenanlagen für gepflegtes Erscheinungsbild.</p>
            <Link href="/gebaeudereinigung/haushaltsreinigung" className="text-blue-600 hover:text-blue-800 font-medium">Mehr zu Haushaltsreinigung</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/sonstiges.svg" alt="Müllbereiche & Kellerflure Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Müllbereiche & Kellerflure</h3>
            <p className="text-gray-600 mb-4">Hygienische Reinigung von Müllstandplätzen und Kellerfluren – geruchsfrei und sauber.</p>
            <Link href="/gebaeudereinigung/grundreinigung" className="text-blue-600 hover:text-blue-800 font-medium">Mehr zu Grundreinigung</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/fensterreinigung.svg" alt="WEG-Verwaltung Services Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">WEG-Verwaltung Services</h3>
            <p className="text-gray-600 mb-4">Direkte Zusammenarbeit mit Hausverwaltungen – Protokolle und Mängeldokumentation inklusive.</p>
            <Link href="/kontakt" className="text-blue-600 hover:text-blue-800 font-medium">WEG-Angebot anfordern</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/gebaeudereinigung.svg" alt="Lärmschutz-Zeiten Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Lärmschutz-Zeiten</h3>
            <p className="text-gray-600 mb-4">Arbeiten zwischen 8-20 Uhr werktags, Ruhezeiten-konform für ungestörtes Wohnen.</p>
            <Link href="/gebaeudereinigung/bueroeinigung" className="text-blue-600 hover:text-blue-800 font-medium">Mehr zu Büroreinigung</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/treppenhausreinigung.svg" alt="Hausordnung-Compliance Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Hausordnung-Compliance</h3>
            <p className="text-gray-600 mb-4">Strikte Einhaltung aller Hausregeln und Mieterpflichten für konfliktfreie Reinigung.</p>
            <Link href="/gebaeudereinigung/industriereinigung" className="text-blue-600 hover:text-blue-800 font-medium">Mehr zu Industriereinigung</Link>
          </div>
        </div>
      </Section>

      {/* 4-Stufen-Verfahren Section: Compliance-Heavy */}
      <Section className="py-4 sm:py-8 md:py-12 lg:py-16 bg-white">
        <SectionTitle
          preTitle="Unser bewährter Prozess"
          title="4-Stufen-Treppenhausreinigung für Mieter-Zufriedenheit"
        >
          Jede Reinigung folgt einem WEG-konformen Verfahren, das WEG-Gesetz §21 und Hausordnungen einhält. Von der Planung bis zur Abnahme – alles für harmonisches Wohnen.
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <ProcessStep
            step={1}
            title="WEG-Abstimmung & Planung"
            description="Koordination mit Hausverwaltung und Erstellung hausordnungskonformer Reinigungspläne."
            imageSrc="/img/flux/team-beratung1.webp"
            imageAlt="WEG-Abstimmung und Planung Icon"
          />
          <ProcessStep
            step={2}
            title="Lärmschutz-konforme Ausführung"
            description="Professionelle Reinigung werktags 8-20 Uhr: Treppen, Geländer, Eingänge ohne Störung."
            imageSrc="/img/flux/team-beratung1.webp"
            imageAlt="Lärmschutz-konforme Ausführung Icon"
          />
          <ProcessStep
            step={3}
            title="Qualitätskontrolle & Mängeldokumentation"
            description="Finale Inspektion und Protokollerstellung für WEG-Verwaltung mit Qualitätsgarantie."
            imageSrc="/img/flux/team-beratung1.webp"
            imageAlt="Qualitätskontrolle und Mängeldokumentation Icon"
          />
          <ProcessStep
            step={4}
            title="Mieter-Feedback & Nachsorge"
            description="Regelmäßige Kontrollen und Mieter-Feedback für kontinuierliche Verbesserung."
            imageSrc="/img/flux/team-beratung1.webp"
            imageAlt="Mieter-Feedback und Nachsorge Icon"
          />
        </div>
      </Section>

      {/* Compliance-Section: Branchenspezifische Vorschriften + Garantien */}
      <Section className="py-4 sm:py-8 md:py-12 lg:py-16 bg-gray-50">
        <SectionTitle
          preTitle="WEG-Gesetz & Hausordnung"
          title="Compliance-Standards in der Treppenhausreinigung"
        >
          Als WEG-Partner halten wir uns an alle relevanten Vorschriften für harmonisches Zusammenleben.
        </SectionTitle>
        <TwoColContent
          title="WEG-konforme Treppenhausreinigung"
          textLeft="Gemäß WEG-Gesetz §21 koordinieren wir alle Reinigungsarbeiten mit der Hausverwaltung. Strikte Einhaltung von Hausordnungen und Lärmschutz-Zeiten für ungestörtes Wohnen."
          textRight="Mehrfamilienhaus-Expertise: Wir verstehen die besonderen Anforderungen von Wohngemeinschaften. Professionelle Protokollierung und direkter Kontakt zu Verwaltungen für reibungslose Abläufe."
          image="/img/compliance-placeholder.webp"
          alt="WEG und Hausordnung Icons für Treppenhausreinigung"
          className="max-w-6xl mx-auto"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">WEG-Gesetz §21</h3>
            <p>Alle Arbeiten erfolgen in Abstimmung mit der Eigentümergemeinschaft und deren Beschlüssen.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Hausordnung-Compliance</h3>
            <p>Strikte Einhaltung aller Hausregeln und Mieterpflichten für konfliktfreie Zusammenarbeit.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Lärmschutz-Zeiten</h3>
            <p>Arbeiten ausschließlich werktags 8-20 Uhr – Respekt vor Ruhezeiten und Mieterkomfort.</p>
          </div>
        </div>
      </Section>

      {/* Garantie Section: Trust-Building */}
      <GarantieSection
        className="py-4 sm:py-8 md:py-12 lg:py-16 bg-white"
        title="Ihre Garantien bei uns"
        subtitle="Über 5000 Kunden, 100% WEG-Compliance, Hausordnungs-Respekt und Mieter-Zufriedenheit"
      />

      {/* Related Services: SEO-optimierte interne Verlinkung */}
      <RelatedServices
        className="py-4 sm:py-8 md:py-12 lg:py-16 bg-gray-50"
        title="Ähnliche Reinigungs-Services"
        services={[
          { title: 'Haushaltsreinigung', href: '/gebaeudereinigung/haushaltsreinigung', description: 'Private Reinigung für Mieter – diskret und haustier-sicher.' },
          { title: 'Grundreinigung', href: '/gebaeudereinigung/grundreinigung', description: 'Umzugsreinigung für Mieterwechsel – VOB-konform.' },
          { title: 'Büroreinigung', href: '/gebaeudereinigung/bueroeinigung', description: 'Gewerbliche Flächen in Mehrfamilienhäusern.' },
          { title: 'Fensterreinigung', href: '/gebaeudereinigung/fensterreinigung', description: 'Treppenhaus-Fenster und Eingangsbereiche.' },
        ]}
      />

      {/* CTA Section: Thematisches Hintergrundbild + Conversion-optimiert */}
      <CtaSection
        title="Bereit für ein gepflegtes Treppenhaus?"
        subtitle="Kontaktieren Sie uns für ein maßgeschneidertes Angebot. Wir beraten Sie zu WEG-Standards, Hausordnungen und Kosten – mieterfreundlich und unverbindlich."
        ctaText="Angebot anfragen"
        ctaLink="/kontakt"
        backgroundImage={ctaBg}
        className="py-4 sm:py-8 md:py-12 lg:py-16 bg-cover bg-center text-white relative"
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="text-lg mb-6 opacity-90">Schaffen Sie Wohnkomfort für alle Mieter – mit professioneller WEG-konformer Reinigung.</p>
        </div>
      </CtaSection>

      {/* FAQ Section für SEO */}
      <Section className="py-4 sm:py-8 md:py-12 lg:py-16 bg-white">
        <Faq
          title="Häufige Fragen zur Treppenhausreinigung"
          items={[
            {
              question: 'Arbeiten Sie WEG-konform?',
              answer: 'Ja, alle Arbeiten erfolgen gemäß WEG-Gesetz §21 in Abstimmung mit Hausverwaltung und Eigentümergemeinschaft.',
            },
            {
              question: 'Werden Lärmschutz-Zeiten eingehalten?',
              answer: 'Absolut: Wir arbeiten ausschließlich werktags zwischen 8-20 Uhr und respektieren alle Ruhezeiten.',
            },
            {
              question: 'Wie wird die Hausordnung berücksichtigt?',
              answer: 'Wir studieren jede Hausordnung im Vorfeld und halten alle Regeln und Mieterpflichten strikt ein.',
            },
            {
              question: 'Können Sie direkt mit der Hausverwaltung arbeiten?',
              answer: 'Ja, wir sind erfahren in der Zusammenarbeit mit WEG-Verwaltungen und erstellen alle erforderlichen Protokolle.',
            },
            {
              question: 'Wie oft empfehlen Sie eine Treppenhausreinigung?',
              answer: 'Wöchentlich für stark frequentierte Bereiche, alle 14 Tage für normale Mehrfamilienhäuser – je nach Bedarf.',
            },
          ]}
        />
      </Section>
    </>
  );
}