import { Container } from './Container';
import Image from 'next/image';
import React from 'react';

interface SharedDienstleistungenHeaderProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const SharedDienstleistungenHeader: React.FC<SharedDienstleistungenHeaderProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => (
  <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] min-h-[350px] sm:min-h-[400px] w-full">
    <div className="absolute inset-0 z-0">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover brightness-[0.8]"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/50"></div>
    </div>

    <Container className="relative z-10 h-full flex items-center">
      <div className="max-w-2xl sm:max-w-3xl lg:max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white uppercase mb-3 sm:mb-4 md:mb-6 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-4 sm:mb-6 md:mb-8 drop-shadow-md">
          {description}
        </p>
      </div>
    </Container>
  </div>
);
