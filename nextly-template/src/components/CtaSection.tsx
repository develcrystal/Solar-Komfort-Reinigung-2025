import React from 'react';
import Image from 'next/image';

interface CtaSectionProps {
  backgroundImage: string;
  backgroundAlt?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  buttonText?: string;
  ctaLink?: string;
  buttonLink?: string;
  className?: string;
  children?: React.ReactNode;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  backgroundImage,
  backgroundAlt = "CTA Background",
  title = "Bereit für ein kostenloses Angebot?",
  subtitle,
  description = "Kontaktieren Sie uns noch heute für eine unverbindliche Beratung.",
  ctaText,
  buttonText = "Kontakt aufnehmen",
  ctaLink,
  buttonLink = "/kontakt",
  className = "",
  children
}) => {
  const finalCTAText = ctaText || buttonText;
  const finalCTALink = ctaLink || buttonLink;
  const finalDescription = subtitle || description;

  return (
    <section className={`relative py-24 w-full ${className}`}>
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full px-4">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">{title}</h2>
          <p className="text-xl mb-8 text-gray-100 drop-shadow-md">
            {finalDescription}
          </p>
          {children && (
            <div className="mb-8">
              {children}
            </div>
          )}
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-3xl mx-auto">
            <a
              href="tel:061511546592"
              className="px-8 py-4 text-lg font-bold text-center text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center flex-1"
            >
              <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              06151 15 465 92
            </a>
            <a
              href={finalCTALink}
              className="px-8 py-4 text-lg font-bold text-center text-white bg-orange-500 rounded-xl hover:bg-orange-600 transition-colors shadow-lg flex-1"
            >
              {finalCTAText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};