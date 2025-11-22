"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
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
