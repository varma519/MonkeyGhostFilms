    ```javascript
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Sample gallery images - replace with actual behind-the-scenes photos
  const galleryImages = [
    // Poster images (po_* and grp_*)
    { id: 1, src: '/cast_crew/po_ahana.jpeg' },
    { id: 2, src: '/cast_crew/po_amani.jpeg' },
    { id: 3, src: '/cast_crew/po_gowtham.jpeg' },
    { id: 4, src: '/cast_crew/po_harshitha.jpeg' },
    { id: 5, src: '/cast_crew/po_maruthi.jpeg' },
    { id: 6, src: '/cast_crew/po_sravanthi.jpeg' },
    { id: 7, src: '/cast_crew/grp1.jpg' },
    
    // Behind-the-scenes images (bs_*)
    { id: 8, src: '/cast_crew/bs_1.heic' },
    { id: 9, src: '/cast_crew/bs_2.heic' },
    { id: 10, src: '/cast_crew/bs_3.heic' },
    { id: 11, src: '/cast_crew/bs_4.heic' },
    { id: 12, src: '/cast_crew/bs_5.heic' },
    { id: 13, src: '/cast_crew/bs_6.heic' },
    { id: 14, src: '/cast_crew/bs_7.heic' },
    { id: 15, src: '/cast_crew/bs_8.heic' }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1);
    } else {
      setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gold-400 mb-6">Gallery</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Behind-the-scenes glimpses from the making of Rudram
          </p>
        </div>

        {/* Posters Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gold-400 mb-4">Posters</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-xl mx-auto">
              Official posters and promotional artwork for Rudram
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.slice(0, 7).map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer relative overflow-hidden rounded-lg bg-gray-800 aspect-[3/4]"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={`Rudram Poster ${image.id}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Behind-the-Scenes Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gold-400 mb-4">Behind-the-Scenes</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-xl mx-auto">
              Exclusive glimpses from the making of Rudram
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.slice(7).map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer relative overflow-hidden rounded-lg bg-gray-800 aspect-square"
                onClick={() => openLightbox(index + 7)}
              >
                <img
                  src={image.src}
                  alt={`Behind the Scenes ${image.id}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image */}
              <img
                src={galleryImages[selectedImage].src}
                alt={`Gallery Image ${galleryImages[selectedImage].id}`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
```