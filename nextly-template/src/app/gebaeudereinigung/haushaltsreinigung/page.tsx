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

export default function HaushaltsreinigungPage() {
  const serviceName = 'Haushaltsreinigung';
  const heroImage = '/img/kundenbilder/Haus.webp';
  const ctaBg = '/img/kundenbilder/Haus.webp';

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
        title={`${serviceName.toUpperCase()} – PREMIUM PRIVATE SERVICES MIT DISKRETION`}
        description="Diskrete und haustier-sichere Reinigung für Ihr Zuhause. DSGVO-konforme Vertragsgestaltung und Respektierung des Hausrechts für höchsten Komfort und Hygiene."
        imageSrc={heroImage}
        imageAlt={`${serviceName} – Professionelle Reinigung für Privatkunden`}
      />

      {/* Service-Cards Section: Custom Cards mit Icons und Beschreibungen */}
      <Section className="py-4 sm:py-8 md:py-12 lg:py-16 bg-gray-50">
        <SectionTitle
          preTitle="Unsere Kernleistungen"
          title="Detaillierte Haushaltsreinigung-Services"
        >
          Von der regelmäßigen Wartung bis zu Sonderreinigungen: Unsere Services sind diskret und auf Ihr Privatleben abgestimmt.
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/sonstiges.svg" alt="Regelmäßige Haushaltsreinigung Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Regelmäßige Haushaltsreinigung</h3>
            <p className="text-gray-600 mb-4">Wöchentliche oder monatliche Reinigung: Staubsaugen, Wischen, Sanitär – flexibel und zuverlässig.</p>
            <Link href="/kontakt" className="text-blue-600 hover:text-blue-800 font-medium">Termin vereinbaren</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/gebaeudereinigung.svg" alt="Küche & Bad gründlich Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Küche & Bad gründlich</h3>
            <p className="text-gray-600 mb-4">Desinfektion von Oberflächen, Entkalkung und Hygiene – haustier-sicher und geruchsfrei.</p>
            <Link href="/gebaeudereinigung/grundreinigung" className="text-blue-600 hover:text-blue-800 font-medium">Mehr zu Grundreinigung</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/fensterreinigung.svg" alt="Fensterreinigung inklusive Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Fensterreinigung inklusive</h3>
            <p className="text-gray-600 mb-4">Streifenfreie Pflege von Fenstern und Spiegeln – diskret und ohne Störung.</p>
            <Link href="/gebaeudereinigung/fensterreinigung" className="text-blue-600 hover:text-blue-800 font-medium">Mehr zu Fensterreinigung</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/sonstiges.svg" alt="Individuelle Wünsche Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Individuelle Wünsche</h3>
            <p className="text-gray-600 mb-4">Maßgeschneiderte Reinigung: Von der Wäschepflege bis zu speziellen Bereichen – alles nach Ihren Vorstellungen.</p>
            <Link href="/kontakt" className="text-blue-600 hover:text-blue-800 font-medium">Ihre Wünsche besprechen</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/gebaeudereinigung.svg" alt="Diskretion-Garantie Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Diskretion-Garantie</h3>
            <p className="text-gray-600 mb-4">Vollständiger Datenschutz und Respekt vor Ihrem Privatleben – DSGVO-konform und vertrauensvoll.</p>
            <Link href="/datenschutz" className="text-blue-600 hover:text-blue-800 font-medium">Datenschutz-Info</Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Image src="/img/icons/treppenhausreinigung.svg" alt="Haustier-sichere Reinigung Icon" width={48} height={48} className="mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-3 text-gray-900">Haustier-sichere Reinigung</h3>
            <p className="text-gray-600 mb-4">Tierfreundliche Mittel und Methoden – sicher für Haustiere und Familie.</p>
            <Link href="/gebaeudereinigung/treppenhausreinigung" className="text-blue-600 hover:text-blue-800 font-medium">Mehr zu Treppenhausreinigung</Link>
          </div>
        </div>
      </Section>

      {/* 4-Stufen-Verfahren Section: Compliance-Heavy */}
      <Section className="py-4 sm:py-8 md:py-12 lg:py-16 bg-white">
        <SectionTitle
          preTitle="Unser bewährter Prozess"
          title="4-Stufen-Haushaltsreinigung für höchsten Komfort"
        >
          Jede Reinigung folgt einem diskreten Verfahren, das DSGVO und Hausrecht respektiert. Von der Planung bis zur Abnahme – alles für Ihr Wohlbefinden.
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <ProcessStep
            step={1}
            title="Vorbereitung & Absprache"
            description="Persönliche Beratung und DSGVO-konforme Vertragsgestaltung für vollen Datenschutz."
            imageSrc="/img/kundenbilder/Haus.webp"
            imageAlt="Vorbereitung und Absprache Icon"
          />
          <ProcessStep
            step={2}
            title="Diskrete Ausführung"
            description="Professionelle Reinigung mit haustier-sicheren Mitteln ohne Störung Ihres Alltags."
            imageSrc="/img/kundenbilder/Reinigung.webp"
            imageAlt="Diskrete Ausführung Icon"
          />
          <ProcessStep
            step={3}
            title="Qualitätskontrolle & Abnahme"
            description="Finale Prüfung und gemeinsame Abnahme mit Garantie für hygienische Ergebnisse."
            imageSrc="/img/kundenbilder/Grundreinigung.webp"
            imageAlt="Qualitätskontrolle und Abnahme Icon"
          />
          <ProcessStep
            step={4}
            title="Nachsorge & Feedback"
            description="Übergabe mit Pflegetipps und anonymes Feedback für kontinuierliche Verbesserung."
            imageSrc="/img/kundenbilder/team-model-reinigung.webp"
            imageAlt="Nachsorge und Feedback Icon"
          />
        </div>
      </Section>

      {/* Compliance-Section: Branchenspezifische Vorschriften + Garantien */}
      <Section className="py-4 sm:py-8 md:py-12 lg:py-16 bg-gray-50">
        <SectionTitle
          preTitle="Privatsphäre & Sicherheit"
          title="Compliance-Standards in der Haushaltsreinigung"
        >
          Wir schützen Ihre Privatsphäre und respektieren Ihr Hausrecht in jedem Schritt.
        </SectionTitle>
        <TwoColContent
          title="DSGVO-konforme Haushaltsreinigung"
          textLeft="Gemäß DSGVO gestalten wir Verträge und Prozesse datenschutzkonform. Keine Speicherung persönlicher Daten ohne Einwilligung – volle Transparenz."
          textRight="Hausrecht-Respektierung: Unsere Teams arbeiten diskret und respektieren Ihre Regeln. Haustier-sichere Mittel und Methoden für familienfreundliche Reinigung."
          image="/img/compliance-placeholder.webp"
          alt="DSGVO und Hausrecht Icons für Haushaltsreinigung"
          className="max-w-6xl mx-auto"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">DSGVO-konform</h3>
            <p>Vertragsgestaltung mit Datenschutzgarantie – Ihre Informationen bleiben geschützt.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Diskretion-Garantie</h3>
            <p>Vollständige Vertraulichkeit: Keine Weitergabe von Details, respektiertes Privatleben.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Haustier-sicher</h3>
            <p>Tierfreundliche Produkte und Methoden – sicher für Haustiere und Kinder.</p>
          </div>
        </div>
      </Section>

      {/* Garantie Section: Trust-Building */}
      <GarantieSection
        className="py-4 sm:py-8 md:py-12 lg:py-16 bg-white"
        title="Ihre Garantien bei uns"
        subtitle="Über 5000 Kunden, 100% Diskretion, DSGVO-konforme Qualität und Haustier-Sicherheit"
      />

      {/* Related Services: SEO-optimierte interne Verlinkung */}
      <RelatedServices
        className="py-4 sm:py-8 md:py-12 lg:py-16 bg-gray-50"
        title="Ähnliche Reinigungs-Services"
        services={[
          { title: 'Grundreinigung', href: '/gebaeudereinigung/grundreinigung', description: 'Tiefenreinigung für Umzüge und Neubezug – VOB-konform.' },
          { title: 'Fensterreinigung', href: '/gebaeudereinigung/fensterreinigung', description: 'Streifenfreie Pflege für Ihr Zuhause – sicher und professionell.' },
          { title: 'Treppenhausreinigung', href: '/gebaeudereinigung/treppenhausreinigung', description: 'Diskrete Reinigung für Mehrfamilienhäuser.' },
          { title: 'Büroreinigung', href: '/gebaeudereinigung/bueroeinigung', description: 'Übergang von Privat zu Gewerbe – flexible Services.' },
        ]}
      />

      {/* CTA Section: Thematisches Hintergrundbild + Conversion-optimiert */}
      <CtaSection
        title="Bereit für ein sauberes Zuhause?"
        subtitle="Kontaktieren Sie uns für ein maßgeschneidertes Angebot. Wir beraten Sie diskret zu Terminen, Kosten und individuellen Wünschen – DSGVO-sicher."
        ctaText="Angebot anfragen"
        ctaLink="/kontakt"
        backgroundImage={ctaBg}
        className="py-4 sm:py-8 md:py-12 lg:py-16 bg-cover bg-center text-white relative"
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="text-lg mb-6 opacity-90">Genießen Sie mehr Zeit zu Hause – mit unserem premium Service und voller Diskretion.</p>
        </div>
      </CtaSection>

      {/* FAQ Section für SEO */}
      <Section className="py-4 sm:py-8 md:py-12 lg:py-16 bg-white">
        <Faq
          title="Häufige Fragen zur Haushaltsreinigung"
          items={[
            {
              question: 'Wie stellen Sie Diskretion sicher?',
              answer: 'Durch DSGVO-konforme Verträge und geschulte Teams – keine Speicherung oder Weitergabe persönlicher Daten.',
            },
            {
              question: 'Sind die Mittel haustier-sicher?',
              answer: 'Ja, wir verwenden nur tierfreundliche, biologisch abbaubare Produkte – getestet für Haustiere und Familie.',
            },
            {
              question: 'Respektieren Sie das Hausrecht?',
              answer: 'Absolut: Wir folgen Ihren Regeln, arbeiten in Abwesenheit und minimieren Störungen.',
            },
            {
              question: 'Können Wünsche individuell angepasst werden?',
              answer: 'Ja, von der Wäschepflege bis zu speziellen Bereichen – alles maßgeschneidert auf Sie.',
            },
            {
              question: 'Wie oft empfehlen Sie eine Reinigung?',
              answer: 'Wöchentlich oder monatlich für Wartung, oder bei Bedarf für Sonderreinigungen – flexibel planbar.',
            },
          ]}
        />
      </Section>
    </>
  );
}