import React, { CSSProperties } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundAlt?: string;
  style?: CSSProperties;
}

export const Hero: React.FC<HeroProps> = ({
  title = "PROFESSIONELLE GEBÄUDEREINIGUNG",
  subtitle = "Solar Komfort Tochterfirma - Komplettlösungen für Büro, Industrie und Facility Management aus einer Hand.",
  backgroundImage = "/img/flux/komfort-team-cleaning.webp",
  backgroundAlt = "Komfort Gebäudeservice24 - Team bei der professionellen Gebäudereinigung",
  style,
}) => {
return (
  <>
    {/* Vollbreiter Hero mit Overlay-Text */}
    <div className="relative w-full min-h-screen flex items-center justify-center">
      {/* Vollbreites Bild mit Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          className="object-cover brightness-75"
          priority
          style={style}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Hero-Content */}
      <Container className="relative z-10 flex items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12">
        <div className="max-w-2xl w-full pr-0 md:pr-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white mb-3 sm:mb-4 md:mb-5 drop-shadow-lg">
            {title}
          </h1>
          <p className="py-2 text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 drop-shadow-md mb-4 sm:mb-5 md:mb-6 pr-0 md:pr-4">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4 mt-6 sm:mt-8">
            <a
              href="/kontakt"
              className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Kostenlos anfragen
            </a>
            <a
              href="#leistungen"
              className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-center text-white border-2 border-white/50 rounded-lg hover:bg-white/10 transition-colors"
            >
              Leistungen ansehen
            </a>
          </div>
        </div>
      </Container>
    </div>
  </>
);
};