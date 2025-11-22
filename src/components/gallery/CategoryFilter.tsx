'use client';

import { motion } from 'framer-motion';

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  className = '',
}: {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap justify-center gap-2 mb-12 ${className}`}>
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Filter nach ${category}`}
          aria-pressed={selectedCategory === category}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}
