"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import Image from "next/image";

// Kategorien für die Filterung
const categories = [
  "Alle",
  "Dachreinigung",
  "Dachbeschichtung",
  "Fassadenreinigung",
  "Solaranlagenreinigung",
  "Referenzen",
  "Team",
  "Ausrüstung"
];

// Bilderzuordnung zu Kategorien mit relativen Pfaden
const imageData = [
  // Dachreinigung
  {
    src: "/img/flux/Vorher-Nachher Dachreinigung.webp",
    alt: "Vorher Nachher Dachreinigung",
    category: "Dachreinigung"
  },
  {
    src: "/img/flux/quer_Vorher-Nachher Dachreinigung.webp",
    alt: "Quer Vorher Nachher Dachreinigung",
    category: "Dachreinigung"
  },
  {
    src: "/img/flux/dach-reinigung-prozess1.webp",
    alt: "Dach Reinigung Prozess 1",
    category: "Dachreinigung"
  },
  {
    src: "/img/flux/dach-reinigung-prozess2.webp",
    alt: "Dach Reinigung Prozess 2",
    category: "Dachreinigung"
  },
  {
    src: "/img/flux/dach-reinigung-prozess3.webp",
    alt: "Dach Reinigung Prozess 3",
    category: "Dachreinigung"
  },
  {
    src: "/img/flux/dach-reinigung-prozess4.webp",
    alt: "Dach Reinigung Prozess 4",
    category: "Dachreinigung"
  },
  {
    src: "/img/flux/dach-reinigung-prozess5.webp",
    alt: "Dach Reinigung Prozess 5",
    category: "Dachreinigung"
  },
  {
    src: "/img/flux/dach-reinigung-prozess6.webp",
    alt: "Dach Reinigung Prozess 6",
    category: "Dachreinigung"
  },

  // Dachbeschichtung
  {
    src: "/img/flux/dachbeschichtung-prozess.webp",
    alt: "Dachbeschichtung Prozess",
    category: "Dachbeschichtung"
  },
  {
    src: "/img/flux/dach-beschichtung-prozess2.webp",
    alt: "Dach Beschichtung Prozess 2",
    category: "Dachbeschichtung"
  },
  {
    src: "/img/flux/dach-beschichtung-prozess2-2.webp",
    alt: "Dach Beschichtung Prozess 2-2",
    category: "Dachbeschichtung"
  },
  {
    src: "/img/flux/dach-beschichtung-prozess3.webp",
    alt: "Dach Beschichtung Prozess 3",
    category: "Dachbeschichtung"
  },
  {
    src: "/img/flux/dach-beschichtung-prozess3-1.webp",
    alt: "Dach Beschichtung Prozess 3-1",
    category: "Dachbeschichtung"
  },

  // Fassadenreinigung
  {
    src: "/img/flux/fassadenreinigung-vorher-nachher.webp",
    alt: "Fassadenreinigung Vorher Nachher",
    category: "Fassadenreinigung"
  },
  {
    src: "/img/flux/fassadenreinigung-prozess.webp",
    alt: "Fassadenreinigung Prozess",
    category: "Fassadenreinigung"
  },
  {
    src: "/img/flux/fassadenreinigung-prozess1.webp",
    alt: "Fassadenreinigung Prozess 1",
    category: "Fassadenreinigung"
  },

  // Solaranlagenreinigung
  {
    src: "/img/flux/solaranlagenreinigung-vorher-nachher.webp",
    alt: "Solaranlagenreinigung Vorher Nachher",
    category: "Solaranlagenreinigung"
  },
  {
    src: "/img/flux/solaranlagenreinigung-prozess.webp",
    alt: "Solaranlagenreinigung Prozess",
    category: "Solaranlagenreinigung"
  },
  {
    src: "/img/flux/solaranlagenreinigung-prozess2.webp",
    alt: "Solaranlagenreinigung Prozess 2",
    category: "Solaranlagenreinigung"
  },

  // Referenzen
  {
    src: "/img/flux/referenz-einfamilienhaus2.webp",
    alt: "Referenz Einfamilienhaus 2",
    category: "Referenzen"
  },
  {
    src: "/img/flux/referenz-einfamilienhaus3.webp",
    alt: "Referenz Einfamilienhaus 3",
    category: "Referenzen"
  },
  {
    src: "/img/flux/referenz-einfamilienhaus4.webp",
    alt: "Referenz Einfamilienhaus 4",
    category: "Referenzen"
  },
  {
    src: "/img/flux/referenz-einfamilienhaus5.webp",
    alt: "Referenz Einfamilienhaus 5",
    category: "Referenzen"
  },
  {
    src: "/img/flux/referenz-gewerbeobjekt1.webp",
    alt: "Referenz Gewerbeobjekt 1",
    category: "Referenzen"
  },
  {
    src: "/img/flux/referenz-gewerbeobjekt2.webp",
    alt: "Referenz Gewerbeobjekt 2",
    category: "Referenzen"
  },
  {
    src: "/img/flux/referenz-gewerbeobjekt3.webp",
    alt: "Referenz Gewerbeobjekt 3",
    category: "Referenzen"
  },
  {
    src: "/img/flux/referenz-mehrfamilienhaus1.webp",
    alt: "Referenz Mehrfamilienhaus 1",
    category: "Referenzen"
  },
  {
    src: "/img/flux/referenz-mehrfamilienhaus2.webp",
    alt: "Referenz Mehrfamilienhaus 2",
    category: "Referenzen"
  },
  {
    src: "/img/flux/referenz-mehrfamilienhaus3.webp",
    alt: "Referenz Mehrfamilienhaus 3",
    category: "Referenzen"
  },
  {
    src: "/img/flux/referenz-mehrfamilienhaus4.webp",
    alt: "Referenz Mehrfamilienhaus 4",
    category: "Referenzen"
  },
  {
    src: "/img/flux/referenz-mehrfamilienhaus5.webp",
    alt: "Referenz Mehrfamilienhaus 5",
    category: "Referenzen"
  },

  // Team
  {
    src: "/img/flux/team-geschaeftsfuehrer.webp",
    alt: "Team Geschäftsführer",
    category: "Team"
  },
  {
    src: "/img/flux/team-geschaeftsfuehrerteam1.webp",
    alt: "Team Geschäftsführerteam 1",
    category: "Team"
  },
  {
    src: "/img/flux/team-projektleiterimage.webp",
    alt: "Team Projektleiter",
    category: "Team"
  },
  {
    src: "/img/flux/team-technischer-leiterimage.webp",
    alt: "Team Technischer Leiter",
    category: "Team"
  },
  {
    src: "/img/flux/team-technischer-leiter1image.webp",
    alt: "Team Technischer Leiter 1",
    category: "Team"
  },
  {
    src: "/img/flux/team-gruppenfoto-neu.webp",
    alt: "Unser professionelles Team",
    category: "team"
  },
  {
    src: "/img/flux/team-gruppenfoto2.webp",
    alt: "Team Gruppenfoto 2",
    category: "Team"
  },
  {
    src: "/img/flux/team-beratung-neu.webp",
    alt: "Beratung vor Ort",
    category: "team"
  },
  {
    src: "/img/flux/team-bei-der-arbeitwebp.webp",
    alt: "Team bei der Arbeit",
    category: "Team"
  },

  // Ausrüstung
  {
    src: "/img/flux/firmenfahrzeug-solar-komfort1.webp",
    alt: "Firmenfahrzeug Solar Komfort 1",
    category: "Ausrüstung"
  },
  {
    src: "/img/flux/firmenfahrzeug-solar-komfort2.webp",
    alt: "Firmenfahrzeug Solar Komfort 2",
    category: "Ausrüstung"
  },
  {
    src: "/img/flux/firmenfahrzeug-solar-komfort3.webp",
    alt: "Firmenfahrzeug Solar Komfort 3",
    category: "Ausrüstung"
  },
  {
    src: "/img/flux/firmenfahrzeug-solar-komfort4.webp",
    alt: "Firmenfahrzeug Solar Komfort 4",
    category: "Ausrüstung"
  },
  {
    src: "/img/flux/professionelle-ausruestung1.webp",
    alt: "Professionelle Ausrüstung 1",
    category: "Ausrüstung"
  },
  {
    src: "/img/flux/professionelle-ausruestung2.webp",
    alt: "Professionelle Ausrüstung 2",
    category: "Ausrüstung"
  },
  {
    src: "/img/flux/professionelle-ausruestung3.webp",
    alt: "Professionelle Ausrüstung 3",
    category: "Ausrüstung"
  }
];

export default function GaleriePage() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [selectedImage, setSelectedImage] = useState<typeof imageData[0] | null>(null);

  const filteredImages = selectedCategory === "Alle"
    ? imageData
    : imageData.filter(image => image.category === selectedCategory);

  const openLightbox = (image: typeof imageData[0]) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <Container>
      <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto mt-16 mb-20">
        <h1 className="text-4xl font-bold tracking-tight text-center text-gray-800 dark:text-white mb-8">
          Unsere Bildergalerie
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
          Entdecken Sie unsere Projekte, unser Team und unsere Ausrüstung in dieser Bildergalerie.
          Filtern Sie nach Kategorien, um genau das zu finden, was Sie interessiert.
        </p>

        {/* Kategorie-Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Debug-Information */}
        {filteredImages.length === 0 && (
          <div className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Keine Bilder in der Kategorie &quot;{selectedCategory}&quot; gefunden.
          </div>
        )}

        {/* Einfaches Grid für die Galerie */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white dark:bg-gray-800">
                <h3 className="text-gray-800 dark:text-white text-lg font-semibold">{image.alt}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <div className="relative max-w-4xl max-h-[80vh] w-full">
              <div style={{ position: 'relative', width: '100%', height: '70vh' }}>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                <h3 className="text-xl font-semibold">{selectedImage.alt}</h3>
                <p className="text-gray-300">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}