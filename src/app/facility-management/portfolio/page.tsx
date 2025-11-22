"use client";

import { Container } from '@/components/Container';
import Image from 'next/image';
import Link from 'next/link';
import { CtaSection } from '@/components/CtaSection';

export default function FMPortfolio() {
  const caseStudies = [
    {
      id: 1,
      title: "Großzentrum Frankfurt - Vollumfassendes FM",
      category: "Großflächige Immobilie",
      location: "Frankfurt am Main",
      image: "/img/kundenbilder/Industriereinigung.webp",
      description: "Umfassende Facility Management Betreuung für modernes Geschäftszentrum mit 5.000 m² Bürofläche. Management von Reinigung, Instandhaltung und Sicherheit.",
      results: [
        "98% Kundenzufriedenheit",
        "Notfallkontakt innerhalb 24-48 Stunden",
        "Kostenoptimierung um 15%",
        "Energie-Effizienzsteigerung um 12%"
      ]
    },
    {
      id: 2,
      title: "Industriepark Rüsselsheim - Spezialreinigung & Wartung",
      category: "Industrieanlage",
      location: "Rüsselsheim",
      image: "/img/kundenbilder/Reinigung.webp",
      description: "Spezialisierte FM-Services für sensible Produktionsbereiche. Hochfrequente Reinigung, präventive Instandhaltung und Compliance-Management.",
      results: [
        "Zero-Defect Reinigung",
        "Produktionsausfallzeit: 0 Std.",
        "ISO-Zertifizierung beibehalten",
        "Mitarbeiter-Zufriedenheit +25%"
      ]
    },
    {
      id: 3,
      title: "Ärztezentrum Darmstadt - Hygienemanagement",
      category: "Medizinische Einrichtung",
      location: "Darmstadt",
      image: "/img/kundenbilder/Haus.webp",
      description: "HACCP-zertifizierte FM mit höchsten Hygienestandards. Management aller Reinigung, Wäsche und Desinfektionsprozesse für medizinische Räume.",
      results: [
        "HACCP-Standard erfüllt",
        "Hygiene-Audits: 100% bestanden",
        "Keimreduzierung um 95%",
        "Ärzte-Zufriedenheit: 5/5 Sterne"
      ]
    }
  ];

  const servicePackages = [
    {
      name: "BASIC FM",
      price: "ab €500",
      period: "monatlich",
      services: [
        "Tägliche Grundreinigung",
        "Wöchentliche Tiefenreinigung",
        "Müll- & Recycling-Management",
        "Notfallkontakt (Std.-Zeiten)",
        "Quartal-Inspektionen"
      ],
      ideal: "Kleine Büros & Gewerbe"
    },
    {
      name: "STANDARD FM",
      price: "ab €1.500",
      period: "monatlich",
      services: [
        "Tägliche Premium-Reinigung",
        "Wöchentliche Spezialreinigung",
        "Vollständiges Facility Management",
        "Notfallkontakt innerhalb 24-48 Stunden",
        "Monatl. Inspektionen & Reports",
        "Wartungs-Koordination"
      ],
      ideal: "Mittel. Unternehmen",
      featured: true
    },
    {
      name: "PREMIUM FM",
      price: "Maßgeschneidert",
      period: "",
      services: [
        "Alles aus STANDARD FM",
        "Dedicated FM-Manager",
        "Spezial-Service Pakete",
        "Präventive Instandhaltung",
        "Energie-Management",
        "Sicherheit & Zutrittskontrolle",
        "Strategische Beratung"
      ],
      ideal: "Großunternehmen & Konzerne"
    }
  ];

  const teamQualities = [
    {
      icon: "👨‍💼",
      title: "Erfahrene FM-Manager",
      description: "Teams mit durchschnittlich 12 Jahren Facility Management Erfahrung in Industrie und Gewerbe."
    },
    {
      icon: "🎓",
      title: "Zertifizierungen",
      description: "HACCP, ISO 9001, Sicherheitsschulung und spezielle Branchenzertifikate für Medizin & Industrie."
    },
    {
      icon: "📊",
      title: "Datengestützte Berichte",
      description: "Monatliche Detailberichte mit KPIs, Kostenanalyse und Optimierungsvorschlägen."
    },
    {
      icon: "🛠️",
      title: "Schnelle Reaktionszeiten",
      description: "Notfallkontakt mit Reaktionszeit innerhalb 24-48 Stunden in der Rhein-Main Region."
    },
    {
      icon: "💰",
      title: "Kostentransparenz",
      description: "Transparent Preismodelle ohne versteckte Kosten. Durchschnittlich 10-15% Kostenersparnis vs. Wettbewerb."
    },
    {
      icon: "♻️",
      title: "Nachhaltig & Umweltbewusst",
      description: "Eco-freundliche Reinigungsmittel, Energie-Optimierung und Abfall-Minimierung."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/kundenbilder/Industriereinigung.webp"
            alt="Facility Management Portfolio - Unsere Referenzen"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        </div>

        <Container className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight uppercase text-white drop-shadow-lg">
              FACILITY MANAGEMENT PORTFOLIO
            </h1>
            <p className="text-xl text-gray-100 drop-shadow-md max-w-3xl mx-auto">
              Referenzen, Qualifikationen und Service-Pakete für professionelle Gebäudebewirtschaftung
            </p>
          </div>
        </Container>
      </div>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Erfolgreiche FM-Projekte
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Diese Referenzen zeigen unsere Expertise im umfassenden Facility Management für verschiedenste Branchen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {study.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {study.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3 text-sm">
                    📍 {study.location}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {study.description}
                  </p>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                      Ergebnisse:
                    </h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Service Packages Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              FM Service-Pakete
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Flexible, skalierbare FM-Lösungen für jeden Unternehmenstyp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-xl overflow-hidden transition-all ${
                  pkg.featured
                    ? 'ring-2 ring-blue-600 shadow-2xl scale-105'
                    : 'bg-gray-50 dark:bg-gray-700 shadow-lg'
                }`}
              >
                {pkg.featured && (
                  <div className="bg-blue-600 text-white py-2 px-4 text-center font-bold">
                    MEISTGEWÄHLT
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {pkg.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">
                      {pkg.price}
                    </span>
                    {pkg.period && (
                      <span className="text-gray-600 dark:text-gray-300 ml-2">
                        {pkg.period}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 font-semibold">
                    Ideal für: {pkg.ideal}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {pkg.services.map((service, sidx) => (
                      <li key={sidx} className="flex items-start">
                        <span className="text-blue-600 font-bold mr-3 mt-1">+</span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {service}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/kontakt"
                    className={`w-full block text-center py-3 px-4 rounded-lg font-bold transition-colors ${
                      pkg.featured
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  >
                    Anfrage stellen
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Qualifications Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Unser FM-Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professionelle Qualifikationen und Erfahrung für komplexe Facility Management Anforderungen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamQualities.map((quality, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{quality.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {quality.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {quality.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CtaSection
        backgroundImage="/img/kundenbilder/Reinigung.webp"
        backgroundAlt="Facility Management Anfrage"
        title="Bereit für professionelles Facility Management?"
        description="Lassen Sie sich von unserem erfahrenen FM-Team beraten. Wir erstellen Ihnen ein maßgeschneidertes Angebot."
        buttonText="Anfrage stellen"
        buttonLink="/kontakt"
      />
    </>
  );
}
