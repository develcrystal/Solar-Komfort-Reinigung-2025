"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-3xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-4">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-6 py-5 text-lg font-medium text-left text-gray-800 rounded-xl bg-white shadow-sm border border-gray-100 hover:bg-gray-50 hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-100 focus-visible:ring-opacity-75 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-6 h-6 text-blue-600 dark:text-blue-400`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-6 pt-5 pb-4 text-gray-600 bg-gray-50 rounded-b-xl mt-1 shadow-inner dark:bg-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Welche Reinigungsdienstleistungen bieten Sie an?",
    answer: "Wir bieten ein komplettes Spektrum an Reinigungsdienstleistungen: Büroreinigung, Industriereinigung, Krankenhausreinigung, Grundreinigung, Bauabschlussreinigung, Fassadenreinigung, Dachreinigung, Treppenhausreinigung und vieles mehr. Kontaktieren Sie uns für eine individuelle Beratung."
  },
  {
    question: "Wie oft sollte eine Büroreinigung durchgeführt werden?",
    answer: "Das hängt von der Nutzung ab. Typischerweise empfehlen wir täglich bis wöchentliche Unterhaltsreinigung für Büros. Wir erstellen individuelle Reinigungspläne basierend auf Ihren Bedürfnissen und dem Nutzungsgrad Ihrer Räumlichkeiten."
  },
  {
    question: "Sind Ihre Reinigungsmittel umweltfreundlich?",
    answer: "Ja, wir arbeiten ausschließlich mit TÜV-geprüften und umweltfreundlichen Reinigungsmitteln unseres ISO-zertifizierten Partners. Diese sind sowohl effektiv als auch schonend für Umwelt und Gesundheit."
  },
  {
    question: "Wie sind Ihre Mitarbeiter versichert?",
    answer: "Alle unsere Mitarbeiter sind festangestellt, sozialversichert und erhalten tariflichen Lohn. Zusätzlich haben wir einen Versicherungsschutz von bis zu 3.000.000 € je Schadensfall für maximale Sicherheit."
  },
  {
    question: "Können Sie Referenzen vorweisen?",
    answer: "Selbstverständlich! Wir haben bereits über 5.000 zufriedene Kunden betreut. Gerne stellen wir Ihnen auf Anfrage entsprechende Referenzen und Beispiele unserer Arbeit zur Verfügung."
  },
  {
    question: "Wie schnell können Sie mit der Reinigung beginnen?",
    answer: "Nach einem kostenlosen Beratungstermin und Angebotsannahme können wir in der Regel innerhalb von 1-2 Wochen mit der Reinigung beginnen. Bei Notfällen sind auch kurzfristige Termine möglich."
  }
];