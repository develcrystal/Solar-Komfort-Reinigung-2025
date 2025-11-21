import { Container } from '@/components/Container';
import { CtaSection } from '@/components/CtaSection';
import { Breadcrumb } from '@/components/Breadcrumb';
import { RelatedServices } from '@/components/RelatedServices';
import { GarantieSection } from '@/components/GarantieSection';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheckIcon,
  HeartIcon,
  ClipboardDocumentCheckIcon,
  BeakerIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import { Section } from '@/components/Section';

export default function Krankenausreinigung() {
  const services = [
    {
      name: 'OP-Bereich Reinigung',
      description: 'Sterilraumgerechte Reinigung und Desinfektion von Operationssälen nach RKI-Richtlinien mit VAH-zertifizierten Verfahren',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Intensivstation',
      description: 'Hochfrequente Desinfektion von Intensiv- und Isolierstationen mit besonderen Hygieneanforderungen',
      icon: HeartIcon,
    },
    {
      name: 'Patientenzimmer',
      description: 'Patientenorientierte Reinigung mit minimaler Störung und maximaler Hygienesicherheit',
      icon: ClipboardDocumentCheckIcon,
    },
    {
      name: 'Labor & Diagnostik',
      description: 'Spezialreinigung für Laborbereiche, Röntgen und diagnostische Einrichtungen mit Kontaminationsschutz',
      icon: BeakerIcon,
    },
    {
      name: '24/7 Notfallservice',
      description: 'Rund-um-die-Uhr Bereitschaft für Notfalldesinfektionen und Isolationsmaßnahmen',
      icon: ClockIcon,
    },
    {
      name: 'Personalschulung',
      description: 'Schulung des Krankenhauspersonals in Hygienemaßnahmen und Infektionsprävention',
      icon: UserGroupIcon,
    },
  ];

  const hygieneSteps = [
    {
      step: 1,
      title: 'Risikobereichsanalyse',
      description: 'Einteilung in Risikobereiche A (niedriges Risiko), B (mittleres Risiko) und C (hohes Risiko) nach RKI-Klassifikation',
      details: 'Systematische Erfassung aller Bereiche mit spezifischen Hygieneanforderungen. Dokumentation von Patientenströmen und Kontaminationsrisiken.',
      color: 'blue',
      compliance: 'RKI-Richtlinie für Krankenhaushygiene'
    },
    {
      step: 2,
      title: 'Desinfektionsverfahren',
      description: 'VAH-gelistete Desinfektionsmittel mit nachgewiesener Wirksamkeit gegen Bakterien, Viren und Pilze einschließlich multiresistenter Erreger',
      details: 'Flächen-, Instruments- und Raumdesinfektion mit dokumentierter Einwirkzeit. Wirkungsspektrum: bakterizid, viruzid, fungizid, sporozid.',
      color: 'green',
      compliance: 'VAH-Zertifizierung (Verbund für Angewandte Hygiene)'
    },
    {
      step: 3,
      title: 'HEPA-Filtration',
      description: 'Hochleistungspartikelfilter (H13/H14) für OP-Bereiche und Reinräume zur Eliminierung luftgetragener Kontaminanten',
      details: 'Kontinuierliche Raumluftüberwachung mit Partikelmessung. Dokumentation der Luftwechselraten und Druckverhältnisse.',
      color: 'purple',
      compliance: 'DIN EN ISO 14644 (Reinräume)'
    },
    {
      step: 4,
      title: 'Qualitätskontrolle',
      description: 'Mikrobiologische Kontrollen und ATP-Biolumineszenz-Messungen zur Verifizierung der Reinigungsqualität',
      details: 'Regelmäßige Abklatschproben und Luftkeimmessungen. Dokumentation aller Messwerte für Qualitätsmanagement und Behördenaudits.',
      color: 'red',
      compliance: 'KRINKO-Empfehlungen (Kommission für Krankenhaushygiene)'
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Breadcrumb Navigation */}
      <Breadcrumb />

      {/* Header Section mit großer Überschrift und vollbreitem Hintergrundbild */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/kundenbilder/Krankenhausreinigung (1).webp"
            alt="Krankenhausreinigung - RKI-konforme Hygienelösungen für medizinische Einrichtungen"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        </div>

        <Container className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase text-white drop-shadow-lg">KRANKENHAUS-REINIGUNG</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-100 drop-shadow-md">
                RKI-konforme Hygienelösungen für medizinische Einrichtungen mit VAH-zertifizierten Desinfektionsverfahren und 24/7-Notfallservice.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        {/* Services Section */}
        <Section id="leistungen">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Medizinische Hygienelösungen
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Spezialisierte Reinigungsdienste für Krankenhäuser, Kliniken und medizinische Einrichtungen mit höchsten Hygiene- und Sicherheitsstandards.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.name} className="group relative bg-white dark:bg-gray-700 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <span className="inline-flex items-center justify-center rounded-lg bg-blue-50 p-3 group-hover:bg-blue-100 transition-colors">
                    <service.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900">{service.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{service.description}</p>
                </div>
                <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-blue-400" aria-hidden="true">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            ))}
            </div>
          </div>
        </Section>

        {/* 4-Stufen-Hygieneverfahren */}
        <Section id="hygieneverfahren">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                4-Stufen-Hygieneverfahren
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Unser systematisches Hygienesystem entspricht den strengsten medizinischen Standards und gewährleistet maximalen Infektionsschutz
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hygiene-Verfahren Links */}
              <div>
                <div className="space-y-6">
                  {hygieneSteps.map((step) => (
                    <div key={step.step} className={`bg-gradient-to-r from-${step.color}-50 to-${step.color}-100 p-6 rounded-xl border border-${step.color}-200`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                        <span className={`bg-${step.color}-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0`}>{step.step}</span>
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {step.description}
                      </p>
                      <div className="bg-white p-4 rounded-lg mb-3">
                        <p className="text-sm text-gray-700">
                          {step.details}
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <p className={`text-sm text-${step.color}-800 font-medium`}>
                          <strong>Compliance:</strong> {step.compliance}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Medizinische Compliance & Zertifizierungen Rechts */}
              <div>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Medizinische Compliance</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <ShieldCheckIcon className="h-5 w-5 text-red-600 mr-2" />
                        RKI-Richtlinien (Robert Koch-Institut)
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Krankenhaushygiene und Infektionsprävention</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Händedesinfektion und persönliche Schutzausrüstung</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Umgang mit multiresistenten Erregern (MRE)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Reinigung und Desinfektion von Flächen</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <BeakerIcon className="h-5 w-5 text-blue-600 mr-2" />
                        VAH-Zertifizierung
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Verbund für Angewandte Hygiene e.V. gelistete Produkte</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Bakterizide, viruzide, fungizide Wirkung</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Begrenzt viruzid PLUS (inkl. Noroviren)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Sporozide Wirkung gegen C. difficile</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <ClipboardDocumentCheckIcon className="h-5 w-5 text-purple-600 mr-2" />
                        KRINKO-Empfehlungen
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Kommission für Krankenhaushygiene beim RKI</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Prävention postoperativer Wundinfektionen</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Hygienemaßnahmen bei Infektionen durch MRSA</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          <span>Lufthygiene in medizinischen Einrichtungen</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <ExclamationTriangleIcon className="h-5 w-5 text-red-600 mr-2" />
                        Notfall- & Sicherheitsgarantien
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 mt-1">✓</span>
                          <span><strong>24/7 Notfallbereitschaft</strong> für Isolationsmaßnahmen und Ausbruchsmanagement</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 mt-1">✓</span>
                          <span><strong>Berufshaftpflicht bis 50 Mio. Euro</strong> speziell für medizinische Einrichtungen</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 mt-1">✓</span>
                          <span><strong>Hygienebeauftragte Fachkräfte</strong> mit medizinischer Weiterbildung</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-3 mt-1">✓</span>
                          <span><strong>Mikrobiologische Qualitätskontrolle</strong> mit externem Labor</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Container>

      {/* Garantie Section - Eigenständiger Bereich */}
      <GarantieSection />

      {/* Related Services - Internal Linking für SEO */}
      <RelatedServices
        currentService="krankenausreinigung"
        category="gebaeudereinigung"
        maxServices={4}
      />

      {/* CTA Section - Vollbreites Bild mit Text-Overlay */}
      <CtaSection
        backgroundImage="/img/kundenbilder/Krankenhausreinigung.webp"
        backgroundAlt="Kontaktieren Sie uns für professionelle Krankenhausreinigung"
        title="Bereit für RKI-konforme Krankenhaushygiene?"
        description="Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin mit unseren Hygiene-Experten."
        buttonText="Jetzt Hygiene-Beratung anfordern"
        buttonLink="/kontakt"
      />
    </div>
  );
}