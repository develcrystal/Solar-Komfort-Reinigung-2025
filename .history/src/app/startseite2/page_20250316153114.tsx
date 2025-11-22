import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { CtaSection } from "@/components/CtaSection";
import { ProcessStep } from "@/components/ProcessStep";
import { ImageSlider } from "@/components/ImageSlider";

import { benefitOne, benefitTwo } from "@/components/data";

export const metadata: Metadata = {
  title: "Solar Komfort GmbH - Dach- & Fassadenreinigung Experten",
  description: "Professionelle Dach- und Fassadenreinigung mit modernster Technik. Verlängern Sie die Lebensdauer Ihrer Immobilie mit unseren spezialisierten Reinigungsverfahren.",
  keywords: "Dachreinigung, Fassadenreinigung, Dachbeschichtung, Darmstadt, Nano-Effekt, Immobilienpflege",
  openGraph: {
    title: "Solar Komfort GmbH - Dach- & Fassadenreinigung Experten",
    description: "Professionelle Dach- und Fassadenreinigung mit modernster Technik. Verlängern Sie die Lebensdauer Ihrer Immobilie mit unseren spezialisierten Reinigungsverfahren.",
    url: "https://solar-komfort.de/startseite2",
    siteName: "Solar Komfort GmbH",
    locale: "de_DE",
    type: "website",
  },
};

const processSteps = [
  {
    step: 1,
    title: "Vorbereitung & Reinigung",
    description: "Gründliche Reinigung des Daches von Moos, Flechten und Verschmutzungen. Reparatur kleiner Schäden und sorgfältige Vorbereitung der Oberfläche für optimale Haftung.",
    imageSrc: "/img/flux/dach-reinigung-prozess1.webp",
    imageAlt: "Vorbereitung und Reinigung"
  },
  {
    step: 2,
    title: "Grundierung",
    description: "Auftragen einer speziellen Grundierung, die tief in die Dachoberfläche eindringt. Diese schafft die perfekte Basis für die nachfolgende Beschichtung und verbessert die Haftung.",
    imageSrc: "/img/flux/dach-beschichtung-prozess2.webp",
    imageAlt: "Grundierung"
  },
  {
    step: 3,
    title: "Zweifache Beschichtung",
    description: "Auftragen von zwei Schichten hochwertiger Nano-Beschichtung für maximalen Schutz. Diese sorgt für Wasserabweisung, UV-Beständigkeit und verhindert neue Moosbildung für viele Jahre.",
    imageSrc: "/img/flux/dach-beschichtung-prozess3.webp",
    imageAlt: "Zweifache Beschichtung"
  }
];

const referenceImages = [
  { src: "/img/flux/referenz-einfamilienhaus2.webp", alt: "Referenz Einfamilienhaus 2" },
  { src: "/img/flux/referenz-einfamilienhaus3.webp", alt: "Referenz Einfamilienhaus 3" },
  { src: "/img/flux/referenz-einfamilienhaus4.webp", alt: "Referenz Einfamilienhaus 4" },
  { src: "/img/flux/referenz-einfamilienhaus5.webp", alt: "Referenz Einfamilienhaus 5" },
  { src: "/img/flux/referenz-gewerbeobjekt1.webp", alt: "Referenz Gewerbeobjekt 1" },
  { src: "/img/flux/referenz-gewerbeobjekt2.webp", alt: "Referenz Gewerbeobjekt 2" },
  { src: "/img/flux/referenz-gewerbeobjekt3.webp", alt: "Referenz Gewerbeobjekt 3" }
];

export default function Startseite2() {
  return (
    <>
      {/* Moderner Hero-Bereich mit klarem Fokus */}
      <div className="relative h-[80vh] min-h-[600px] w-full">
        {/* Hintergrundbild mit Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/img/flux/referenz-einfamilienhaus2.webp"
            alt="Solar Komfort - Dachreinigung und Dachbeschichtung"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-900/40"></div>
        </div>
        
        {/* Hero-Content */}
        <Container className="relative z-10 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white uppercase mb-4 drop-shadow-lg">
              Professionelle<br />
              Dachreinigung &<br />
              Dachbeschichtung
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              Verlängern Sie die Lebensdauer Ihres Daches mit unserer professionellen Reinigung und Nano-Beschichtung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/kontakt" 
                className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all"
              >
                Kostenfreies Angebot
              </Link>
              <Link 
                href="/dienstleistungen" 
                className="px-8 py-4 text-lg font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 transition-all"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        {/* Einleitung */}
        <div className="py-16">
          <SectionTitle
            preTitle="Solar Komfort GmbH"
            title="Professionelle Dachreinigung und Dachbeschichtung"
          >
            Als Experten für Dachreinigung und Dachbeschichtung in Darmstadt und Umgebung bieten wir Ihnen hochwertige Dienstleistungen zur Pflege und Instandhaltung Ihres Daches. Mit modernster Technik und umweltfreundlichen Materialien verlängern wir die Lebensdauer Ihres Daches und schützen es vor Witterungseinflüssen.
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Image
                  src="/img/flux/icon-dachreinigung.webp"
                  alt="Dachreinigung"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Dachreinigung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Gründliche Reinigung von Moos, Flechten und Verschmutzungen für ein sauberes und gepflegtes Dach.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Image
                  src="/img/flux/icon-dachbeschichtung.webp"
                  alt="Dachbeschichtung"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Dachbeschichtung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Langlebiger Schutz durch Nano-Beschichtung für maximale Wasserabweisung und UV-Beständigkeit.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Image
                  src="/img/flux/icon-fassadenreinigung.webp"
                  alt="Fassadenreinigung"
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fassadenreinigung</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professionelle Reinigung Ihrer Fassade für ein frisches und gepflegtes Erscheinungsbild.
              </p>
            </div>
          </div>
        </div>

        {/* Referenzen Slider */}
        <div className="py-16">
          <SectionTitle
            preTitle="Unsere Referenzen"
            title="Erfolgreich umgesetzte Projekte"
          >
            Sehen Sie sich unsere bisherigen Projekte an und überzeugen Sie sich selbst von unserer Arbeit.
          </SectionTitle>
          <ImageSlider images={referenceImages} width={800} height={600} />
        </div>

        {/* Prozess-Sektion */}
        <div id="prozess" className="py-16">
          <SectionTitle
            preTitle="Unser Prozess"
            title="So gehen wir bei der Dachbeschichtung vor"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"> {/* Added margin */}
            {processSteps.map((step) => (
              <ProcessStep key={step.step} {...step} className="mb-8" /> {/* Added margin */}
            ))}
          </div>
        </div>

        {/* Vorteile-Sektion */}
        <div id="vorteile" className="py-16">
          <SectionTitle
            preTitle="Unsere Vorteile"
            title="Warum Solar Komfort?"
          />
          <Benefits data={benefitOne} />
          <Benefits imgPos="right" data={benefitTwo} />
        </div>

        {/* Video-Sektion */}
        <div className="py-16">
          <Video 
            videoId="rKtfqb3sKww" 
            title="Sehen Sie unsere Dachbeschichtung in Aktion"
          />
        </div>

        {/* Kundenstimmen */}
        <div id="kundenstimmen" className="py-16">
          <SectionTitle
            preTitle="Kundenstimmen"
            title="Das sagen unsere Kunden"
          />
          <Testimonials />
        </div>

        {/* FAQ */}
        <div id="faq" className="py-16">
          <SectionTitle preTitle="FAQ" title="Häufig gestellte Fragen" />
          <Faq />
        </div>
      </Container>
      
      {/* CTA-Sektion */}
      <CtaSection 
        backgroundImage="/img/flux/dach-reinigung-prozess3.webp"
        backgroundAlt="Kontaktieren Sie uns für ein Angebot zur Dachreinigung"
        title="Bereit für eine professionelle Dachreinigung und Dachbeschichtung?"
        description="Kontaktieren Sie uns noch heute für eine unverbindliche Beratung zu Ihrer Dachpflege."
      />
    </>
  );
}