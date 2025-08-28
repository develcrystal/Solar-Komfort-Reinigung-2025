'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageCard } from './ImageCard';
import { Lightbox } from './Lightbox';
import { CategoryFilter } from './CategoryFilter';
import { GalleryImage, GalleryProps } from './types';

export function Gallery({
  images,
  categories: initialCategories,
  defaultCategory = 'Alle',
  className = '',
}: GalleryProps) {
  // Add 'Alle' category if not present
  const categories = useMemo(
    () => (initialCategories.includes('Alle') ? initialCategories : ['Alle', ...initialCategories]),
    [initialCategories]
  );

  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Filter images based on selected category
  const filteredImages = useMemo(() => {
    return selectedCategory === 'Alle'
      ? images
      : images.filter((image) => image.category === selectedCategory);
  }, [images, selectedCategory]);

  // Handle category change
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    // Reset selected image when changing categories
    setSelectedImageIndex(null);
  };

  // Handle image click
  const handleImageClick = (image: GalleryImage) => {
    const index = filteredImages.findIndex((img) => img.src === image.src);
    if (index !== -1) {
      setSelectedImageIndex(index);
    }
  };

  // Navigation in lightbox
  const handleNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < filteredImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const selectedImage = selectedImageIndex !== null ? filteredImages[selectedImageIndex] : null;
  const hasNext = selectedImageIndex !== null && selectedImageIndex < filteredImages.length - 1;
  const hasPrev = selectedImageIndex !== null && selectedImageIndex > 0;

  return (
    <div className={`w-full ${className}`}>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      <AnimatePresence>
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              layout
            >
              <ImageCard
                image={image}
                onClick={handleImageClick}
                priority={index < 6} // Load first 6 images with priority
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">Keine Bilder in dieser Kategorie gefunden.</p>
        </div>
      )}

      <Lightbox
        image={selectedImage}
        onClose={handleCloseLightbox}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={hasNext}
        hasPrev={hasPrev}
      />
    </div>
  );
}

export { type GalleryImage } from './types';
