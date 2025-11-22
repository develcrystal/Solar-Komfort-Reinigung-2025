export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
}

export interface GalleryProps {
  images: GalleryImage[];
  categories: string[];
  defaultCategory?: string;
  className?: string;
}

export interface ImageCardProps {
  image: GalleryImage;
  onClick: (image: GalleryImage) => void;
  priority?: boolean;
}

export interface LightboxProps {
  image: GalleryImage | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  className?: string;
}
