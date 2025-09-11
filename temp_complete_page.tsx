import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { ExtendedProcessSteps } from "@/components/ExtendedProcessSteps";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Benefits from "@/components/Benefits";
import LeistungenImUberblick from "@/components/LeistungenImUberblick";
import TestimonialsSection from "@/components/TestimonialsSection";
import { WarumWirSection } from "@/components/WarumWirSection";
import { ProblemLoesungSection } from "@/components/ProblemLoesungSection";
import { Preiskalkulator } from "@/components/Preiskalkulator";

const testimonials = [
  {
    rating: "★★★★★",
    text: "Solar Komfort reinigt seit 3 Jahren unsere Büroräume. Immer pünktlich, gründlich und freundlich. Die Qualität stimmt einfach!",
    name: "Andreas Müller",
    role: "Geschäftsführer, IT-Consulting Berlin",
    initial: "A"
  },
  {
    rating: "★★★★★",
    text: "Hervorragende Fassadenreinigung! Das Ergebnis war beeindruckend und der Service sehr professionell. Gerne wieder!",
    name: "Bettina Klein",
    role: "Facility Managerin, Bürokomplex Mitte",
    initial: "B"
  },
  {
    rating: "★★★★★",
    text: "Zuverlässige Objektbetreuung seit Jahren. Probleme werden schnell gelöst und die Kommunikation ist immer transparent.",
    name: "Christian Weber",
    role: "Hausverwaltung, Wohnanlage Charlottenburg",
    initial: "C"
  }
];

const Testimonials = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {testimonials.map((testimonial, index) => (
      <div key={index} className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
        <div className="flex items-center mb-3 sm:mb-4">
          <div className="text-yellow-400 text-lg sm:text-xl">{testimonial.rating}</div>
        </div>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 italic">
          &ldquo;{testimonial.text}&rdquo;
        </p>
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-medium">
              {testimonial.initial}
            </div>
          </div>
          <div>
            <div className="font-medium text-gray-900 dark:text-white">{testimonial.name}</div>
            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const metadata: Metadata = {
  title: "Komfort Gebäudeservice24 GmbH - Gebäudereinigung Berlin",
  description: "Professionelle Gebäudereinigung in Berlin und Umgebung. Reinigungsfirma für Büro, Industrie und Facility Management. Jetzt Angebot anfordern!",
  keywords: "Gebäudereinigung Berlin, Reinigungsfirma Berlin, Facility Management Berlin, Komfort Gebäudeservice24",
  openGraph: {
    title: "Komfort Gebäudeservice24 GmbH - Ihre Gebäudereinigung als Komplettlösung",
    description: "Professionelle Gebäudereinigung, Unterhaltsreinigung, Industriereinigung und Facility Management. Tochterfirma der Solar Komfort GmbH mit über 5.000 zufriedenen Kunden.",
    url: "https://komfort-gebaeudeservice24.de",
    siteName: "Komfort Gebäudeservice24 GmbH",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://komfort-gebaeudeservice24.de/img/flux/komfort-team-cleaning.webp",
        width: 1200,
        height: 630,
        alt: "Komfort Gebäudeservice24 - Team bei der professionellen Gebäudereinigung"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Komfort Gebäudeservice24 GmbH - Ihre Gebäudereinigung als Komplettlösung",
    description: "Tochterfirma der Solar Komfort GmbH. Über 5.000 zufriedene Kunden. Komplettlösungen aus einer Hand.",
    images: ["https://komfort-gebaeudeservice24.de/img/flux/kunden-dachreinigung-1.jpg"]
  },
  alternates: {
    canonical: "https://komfort-gebaeudeservice24.de"
  }
};

export default function Home() {
  return (
