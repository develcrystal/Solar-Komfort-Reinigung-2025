import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-8 mx-auto text-white bg-blue-600 px-8 py-10 lg:px-16 lg:py-14 lg:flex-nowrap rounded-2xl shadow-lg border border-blue-500">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-bold lg:text-4xl">
            Bereit für ein kostenloses Angebot?
          </h2>
          <p className="mt-3 font-medium text-white text-opacity-90 lg:text-xl">
            Kontaktieren Sie uns noch heute für eine unverbindliche Beratung.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto mt-6 lg:mt-0">
          <a
            href="tel:061511546592"
            className="inline-block py-4 mx-auto text-lg font-medium text-center text-blue-600 bg-white rounded-xl px-8 lg:px-10 lg:py-5 shadow-md hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
          >
            06151 15 465 92
          </a>
        </div>
      </div>
    </Container>
  );
};