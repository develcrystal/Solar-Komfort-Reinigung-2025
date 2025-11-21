import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

const testimonials = [
  {
    rating: "★★★★★",
    text: "Solar Komfort reinigt seit 3 Jahren unsere Büroräume in Darmstadt. Immer pünktlich, gründlich und freundlich. Die Qualität stimmt einfach!",
    name: "Andreas Müller",
    role: "Geschäftsführer, IT-Consulting Darmstadt",
    initial: "A"
  },
  {
    rating: "★★★★★",
    text: "Hervorragende Fassadenreinigung in Darmstadt! Das Ergebnis war beeindruckend und der Service sehr professionell. Gerne wieder!",
    name: "Bettina Klein",
    role: "Facility Managerin, Bürokomplex Darmstadt",
    initial: "B"
  },
  {
    rating: "★★★★★",
    text: "Zuverlässige Objektbetreuung in Darmstadt seit Jahren. Probleme werden schnell gelöst und die Kommunikation ist immer transparent.",
    name: "Christian Weber",
    role: "Hausverwaltung, Wohnanlage Darmstadt",
    initial: "C"
  }
];

const TestimonialsSection = () => (
  <Section className="bg-gray-50 dark:bg-gray-800">
    <Container>
      <div className="text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-stack-sm">
        Kundenstimmen
      </h2>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-container-md">
        Das sagen unsere Kunden
      </h3>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        Überzeugen Sie sich von der Qualität unserer Arbeit durch die Erfahrungen zufriedener Kunden.
      </p>
    </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-container-md rounded-radius-default shadow-shadow-elevation-1 transition-shadow border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-stack-sm">
              <div className="text-yellow-400 text-lg sm:text-xl">{testimonial.rating}</div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-stack-sm italic">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <div className="flex items-center">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                <span className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium">
                  {testimonial.initial}
                </span>
              </div>
              <div>
                <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    {/* Zufriedene Kunden Statistiken */}
    <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/img/flux/familie-zufrieden.webp"
              alt="Zufriedene Familie vor ihrem Haus nach professioneller Reinigung"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              Über 5.000 zufriedene Kunden
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Seit über 10 Jahren vertrauen Familien, Unternehmen und Hausverwaltungen in Darmstadt und Umgebung auf unsere professionellen Reinigungsdienstleistungen. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
                  5.000+
                </div>
                <div className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                  Zufriedene Kunden
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
                  10+
                </div>
                <div className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                  Jahre Erfahrung
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
                  99%
                </div>
                <div className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                  Kundenzufriedenheit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </Section>
);

export default TestimonialsSection;