import React from 'react';
import Image from 'next/image';

interface TwoColContentProps {
  title: string;
  textLeft: string;
  textRight: string;
  image: string;
  alt: string;
  className?: string;
}

export function TwoColContent({ title, textLeft, textRight, image, alt, className = '' }: TwoColContentProps) {
  return (
    <div className={className}>
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300">{textLeft}</p>
          <p className="text-gray-600 dark:text-gray-300">{textRight}</p>
        </div>
        <div className="flex justify-center">
          <Image
            src={image}
            alt={alt}
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
