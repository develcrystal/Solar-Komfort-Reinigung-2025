'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from './types';

export function Lightbox({
  image,
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}: {
  image: GalleryImage | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!image) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (hasPrev) onPrev();
          break;
        case 'ArrowRight':
          if (hasNext) onNext();
          break;
        default:
          break;
      }
    },
    [image, onClose, onNext, onPrev, hasNext, hasPrev]
  );

  useEffect(() => {
    if (image) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, handleKeyDown]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Bildvorschau"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2"
        onClick={onClose}
        aria-label="Schließen"
      >
        <X size={32} />
      </button>

      {hasPrev && (
        <button
          className="absolute left-4 text-white hover:text-gray-300 transition-colors p-2 bg-black/50 rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Vorheriges Bild"
        >
          <ChevronLeft size={40} />
        </button>
      )}

      <div className="relative w-full max-w-6xl max-h-[90vh]">
        <div className="relative w-full h-[80vh]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            priority
            sizes="(max-width: 1024px) 100vw, 80vw"
          />
        </div>
        <div className="mt-4 p-4 bg-black/70 text-white rounded-b-lg">
          <h3 className="text-xl font-semibold">{image.alt}</h3>
          <p className="text-gray-300">{image.category}</p>
        </div>
      </div>

      {hasNext && (
        <button
          className="absolute right-4 text-white hover:text-gray-300 transition-colors p-2 bg-black/50 rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Nächstes Bild"
        >
          <ChevronRight size={40} />
        </button>
      )}
    </div>
  );
}
