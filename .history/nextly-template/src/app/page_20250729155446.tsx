import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Benefits from "@/components/Benefits";

const Testimonials = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3].map((i) => (
      <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <div className="text-yellow-400 text-2xl">★★★★★</div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          "Hervorragender Service! Das Team von Solar Komfort hat unsere Büroräume gründlich und zuverlässig gereinigt."
        </p>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              {i === 1 ? 'A' : i === 2 ? 'B' : 'C'}
            </span>
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-white">
              {i === 1 ? 'Andreas M.' : i === 2 ? 'Bettina K.' : 'Christian W.'}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {i === 1 ? 'Geschäftsführer' : i === 2 ? 'Büroleiterin' : 'Hausverwaltung'}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const metadata: Metadata = {
  title: "Solar Komfort GmbH - Professionelle Gebäudereinigung & Facility Management",
  description: "Ihr zuverlässiger Partner für saubere, gepflegte und professionell verwaltete Gebäude in Berlin und Umgebung.",
  keywords: "Gebäudereinigung, Facility Management, Hausmeisterservice, Gebäudeservice, Berlin, Reinigungsservice, Hausverwaltung, Gewerbereinigung",
  openGraph: {
    title: "Solar Komfort GmbH - Professionelle Gebäudereinigung & Facility Management",
    description: "Ihr zuverlässiger Partner für saubere, gepflegte und professionell verwaltete Gebäude in Berlin und Umgebung.",
    url: "https://solar-komfort.de",
    siteName: "Solar Komfort GmbH",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://solar-komfort.de/img/flux/hero-gebaeudereinigung.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Komfort GmbH - Professionelle Gebäudereinigung & Facility Management",
    description: "Ihr zuverlässiger Partner für saubere, gepflegte und professionell verwaltete Gebäude in Berlin und Umgebung.",
    images: ["https://solar-komfort.de/img/flux/hero-gebaeudereinigung.webp"]
  },
  alternates: {
    canonical: "https://solar-komfort.de"
  }
};

export default function Home() {
  return (
    <>
      {/* Hero-Bereich */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/flux/referenz-einfamilienhaus2.webp"
            alt="Solar Komfort Dachreinigung"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-900/40 z-10"></div>
        
        <Container className="relative z-20">
          <div className="flex flex-col items-start justify-center min-h-screen py-20 text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white uppercase mb-4 drop-shadow-lg">
              PROFESSIONELLE<br />
              GEBÄUDEREINIGUNG<br />
              & FACILITY MANAGEMENT
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              Ihr zuverlässiger Partner für saubere, gepflegte und professionell verwaltete Gebäude in Berlin und Umgebung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#kontakt" className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all">
                Kostenfreie Beratung
              </a>
              <a href="#leistungen" className="px-8 py-4 text-lg font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 transition-all">
                Unsere Leistungen
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Einführung */}
      <div className="bg-white dark:bg-gray-900 py-16 sm:py-24">
        <Container>
          <SectionTitle>Vorteile unserer Dienstleistungen</SectionTitle>
          <Benefits />
          <Testimonials />
          <Faq />
          <CtaSection
            backgroundImage="/img/flux/hero-gebaeudereinigung.webp"
            backgroundAlt="Gebäudereinigung"
          />
        </Container>
      </div>
    </>
  );
}
