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
    question: "Wie lange hält eine Dachbeschichtung?",
    answer: "Eine professionelle Dachbeschichtung von Solar Komfort hält in der Regel zwischen 10 und 15 Jahren, abhängig von den Wetterbedingungen und der Qualität der Dachziegel. Durch unsere hochwertige Nano-Beschichtung wird die Lebensdauer Ihres Daches deutlich verlängert.",
  },
  {
    question: "Wie oft sollte ein Dach gereinigt werden?",
    answer: "Wir empfehlen eine gründliche Dachreinigung alle 3-5 Jahre. Bei starkem Bewuchs durch Moos, Flechten oder Algen kann auch eine frühere Reinigung sinnvoll sein. Eine regelmäßige Reinigung verhindert Schäden und verlängert die Lebensdauer Ihres Daches.",
  },
  {
    question: "Welche Vorteile bietet die Nano-Beschichtung?",
    answer:
      "Unsere Nano-Beschichtung bietet mehrere Vorteile: Sie ist wasserabweisend, schmutzabweisend und verhindert das Wachstum von Moos und Algen. Zudem schützt sie vor UV-Strahlung und extremen Wetterbedingungen, was die Lebensdauer Ihres Daches erheblich verlängert.",
  },
  {
    question: "Wie lange dauert eine Dachbeschichtung?",
    answer:
      "Die Dauer einer Dachbeschichtung hängt von der Größe und dem Zustand Ihres Daches ab. In der Regel dauert der gesamte Prozess (Reinigung, Grundierung und Beschichtung) zwischen 2 und 5 Tagen. Wir arbeiten effizient, um die Beeinträchtigung für Sie so gering wie möglich zu halten.",
  },
  {
    question: "Bieten Sie auch Fassadenreinigung an?",
    answer:
      "Ja, neben der Dachbeschichtung und Dachreinigung bieten wir auch professionelle Fassadenreinigung an. Wir entfernen Schmutz, Algen und Verfärbungen von Ihrer Fassade und sorgen dafür, dass Ihr Haus wieder in neuem Glanz erstrahlt.",
  },
];