import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Sample gallery images - replace with actual behind-the-scenes photos
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Behind the Scenes - Director at Work',
      description: 'Our director guiding the cast through an intense dramatic scene'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/7991621/pexels-photo-7991621.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cinematography Setup',
      description: 'Setting up the perfect shot for a crucial scene'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/7991664/pexels-photo-7991664.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cast in Character',
      description: 'The main cast preparing for an emotional sequence'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/8112189/pexels-photo-8112189.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'On Set Atmosphere',
      description: 'Capturing the intense atmosphere during filming'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/8112197/pexels-photo-8112197.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Character Development',
      description: 'Working through character motivations and emotions'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/8112200/pexels-photo-8112200.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Technical Excellence',
      description: 'Our crew ensuring every technical detail is perfect'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/7991473/pexels-photo-7991473.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Collaborative Process',
      description: 'The collaborative spirit that drives our production'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/7991633/pexels-photo-7991633.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Artistic Vision',
      description: 'Bringing the artistic vision of Rudram to life'
    }
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Poster 1 - Main Movie Poster */}
            <div className="group cursor-pointer relative overflow-hidden rounded-lg bg-gray-800 aspect-[3/4]">
              <img
                src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Rudram Main Poster"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">Main Poster</h3>
                  <p className="text-gray-300 text-sm">Official theatrical poster</p>
                </div>
              </div>
            </div>

            {/* Poster 2 - Character Poster */}
            <div className="group cursor-pointer relative overflow-hidden rounded-lg bg-gray-800 aspect-[3/4]">
              <img
                src="https://images.pexels.com/photos/7991621/pexels-photo-7991621.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Rudram Character Poster"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">Character Poster</h3>
                  <p className="text-gray-300 text-sm">Featuring the main characters</p>
                </div>
              </div>
            </div>

            {/* Poster 3 - Teaser Poster */}
            <div className="group cursor-pointer relative overflow-hidden rounded-lg bg-gray-800 aspect-[3/4]">
              <img
                src="https://images.pexels.com/photos/7991664/pexels-photo-7991664.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Rudram Teaser Poster"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">Teaser Poster</h3>
                  <p className="text-gray-300 text-sm">First look promotional poster</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group cursor-pointer relative overflow-hidden rounded-lg bg-gray-800 aspect-square"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                  <p className="text-gray-300 text-xs line-clamp-2">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
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
                <X className="h-6 w-6" />
              </button>

              {/* Previous button */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Next button */}
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6">
                  <h3 className="text-gold-400 font-semibold text-lg mb-2">
                    {galleryImages[selectedImage].title}
                  </h3>
                  <p className="text-gray-300">
                    {galleryImages[selectedImage].description}
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    {selectedImage + 1} of {galleryImages.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Note */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-lg p-6 border border-gold-600/20 max-w-2xl mx-auto">
            <p className="text-gray-400">
              More behind-the-scenes photos and production stills will be added as filming progresses. 
              Follow our journey as we bring Rudram to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;