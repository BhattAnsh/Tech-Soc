'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { X } from "lucide-react";

export function GalleryContent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadingImages, setLoadingImages] = useState<{ [key: string]: boolean }>({});
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Hackathon", "Workshop", "Tech Talk", "Networking", "Social"];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      alt: "Hackathon 2024",
      category: "Hackathon",
      date: "March 2024"
    },
    {
      src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
      alt: "AI Workshop",
      category: "Workshop",
      date: "February 2024"
    },
    {
      src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
      alt: "Tech Talk: Future of AI",
      category: "Tech Talk",
      date: "January 2024"
    },
    {
      src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80",
      alt: "Networking Night",
      category: "Networking",
      date: "December 2023"
    },
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      alt: "Team Building Event",
      category: "Social",
      date: "November 2023"
    },
    {
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
      alt: "Python Workshop",
      category: "Workshop",
      date: "October 2023"
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      alt: "Coding Competition",
      category: "Hackathon",
      date: "September 2023"
    },
    {
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      alt: "Web Dev Bootcamp",
      category: "Workshop",
      date: "August 2023"
    },
    {
      src: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?auto=format&fit=crop&w=800&q=80",
      alt: "Tech Meetup",
      category: "Networking",
      date: "July 2023"
    }
  ];

  const handleImageLoad = (src: string) => {
    setLoadingImages(prev => ({ ...prev, [src]: false }));
  };

  const filteredImages = galleryImages.filter(image => 
    activeFilter === "All" ? true : image.category === activeFilter
  );

  return (
    <div className="relative z-10">
      <main className="container mx-auto px-6">
        {/* Header and Filters */}
        <div className="sticky top-16 bg-gray-950/80 backdrop-blur-md z-40 py-6 border-b border-gray-800">
          <h1 className="text-4xl font-bold mb-6">Event Gallery</h1>
          
          {/* Filter Section */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                {category}
                {category === "All" ? "" : ` (${galleryImages.filter(img => img.category === category).length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="py-8">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              No images found for this category.
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              layout
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800"
                  onClick={() => setSelectedImage(image.src)}
                >
                  {/* Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <ImageIcon className="w-10 h-10 text-gray-600" />
                  </div>
                  
                  {/* Actual Image */}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`
                      object-cover transition-transform duration-300 group-hover:scale-110
                      ${loadingImages[image.src] === false ? 'opacity-100' : 'opacity-0'}
                    `}
                    loading="lazy"
                    quality={85}
                    onLoad={() => handleImageLoad(image.src)}
                    onError={() => {
                      console.error(`Failed to load image: ${image.src}`);
                      setLoadingImages(prev => ({ ...prev, [image.src]: false }));
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-semibold">{image.alt}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-blue-400">{image.category}</span>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-400">{image.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full max-w-5xl aspect-video">
              {/* Modal Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <ImageIcon className="w-16 h-16 text-gray-600" />
              </div>
              
              <Image
                src={selectedImage}
                alt="Selected event"
                fill
                className={`object-contain ${loadingImages[selectedImage] === false ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => handleImageLoad(selectedImage)}
                quality={90}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}