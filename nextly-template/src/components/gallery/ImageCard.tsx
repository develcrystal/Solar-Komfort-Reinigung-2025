'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GalleryImage } from './types';

export function ImageCard({ image, onClick, priority = false }: { image: GalleryImage; onClick: (image: GalleryImage) => void; priority?: boolean }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleClick = () => {
    if (!error) {
      onClick(image);
    }
  };

  return (
    <div 
      className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
        error ? 'bg-gray-100 dark:bg-gray-800' : ''
      }`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`View ${image.alt}`}
    >
      <div className="aspect-[4/3] relative">
        {error ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <span className="text-gray-400">Bild konnte nicht geladen werden</span>
          </div>
        ) : (
          <>
            {isLoading && (
              <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 animate-pulse" />
            )}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`object-cover transition-opacity duration-300 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={() => setIsLoading(false)}
              onError={() => setError(true)}
              loading={priority ? 'eager' : 'lazy'}
              quality={80}
              priority={priority}
              placeholder={image.blurDataURL ? 'blur' : 'empty'}
              blurDataURL={image.blurDataURL}
            />
          </>
        )}
      </div>
      <div className="p-4 bg-white dark:bg-gray-800">
        <h3 className="text-gray-800 dark:text-white text-lg font-semibold line-clamp-1">
          {image.alt}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{image.category}</p>
      </div>
    </div>
  );
}
