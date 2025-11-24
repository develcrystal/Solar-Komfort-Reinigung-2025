import React, { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundAlt?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({
  title = "PROFESSIONELLE GEBÄUDEREINIGUNG",
  subtitle = "Solar Komfort Tochterfirma - Komplettlösungen für Büro, Industrie und Facility Management aus einer Hand.",
  backgroundImage = "/img/flux/team-gruppenfoto-neu.webp",
  backgroundAlt = "Komfort Gebäudeservice24 - Team bei der professionellen Gebäudereinigung",
  ctaText = "Kostenlos anfragen",
  ctaLink = "/kontakt",
  className = "",
  children,
}) => {
  return (
    <>
      {/* Vollbreiter Hero mit Overlay-Text */}
      <div className={`relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh] min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] xl:min-h-[600px] ${className}`}>
        {/* Vollbreites Bild mit Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={backgroundAlt}
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Hero-Content */}
        <Container className="relative z-10 h-full flex items-start sm:items-center px-8 md:px-12 lg:px-16 xl:px-20 pt-8 sm:pt-0">
          <div className="max-w-2xl pr-4 md:pr-8 w-full">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white mb-3 sm:mb-4 md:mb-5">
              {title}
            </h1>
            <p className="py-2 text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 mb-4 sm:mb-5 md:mb-6 pr-4 md:pr-8">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4 mt-6 sm:mt-8">
              <Link
                href={ctaLink}
                className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {ctaText}
              </Link>
              {children}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};