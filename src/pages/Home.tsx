import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/80 to-black z-10"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Film Production"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          {/* YouTube Teaser Embed */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-16 w-16 text-red-500 mb-4 mx-auto" />
                  <p className="text-gray-400">Rudram Teaser</p>
                  <p className="text-sm text-gray-500 mt-2">YouTube embed will be placed here</p>
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/rudram"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Watch Rudram Teaser
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Featured Film Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gold-400 mb-4">Our Debut Film</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-6xl font-bold text-red-500 mb-6">RUDRAM</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                A quiet DEA investigator and her autistic sister uncover a deadly drug empire. 
                When violence erupts, their bond awakens a divine force rooted in mythology, 
                transforming their fight for survival into a fight for justice.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">Drama</span>
                <span className="bg-gold-600 text-white px-3 py-1 rounded-full text-sm">Thriller</span>
                <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">Mythological</span>
              </div>
              <Link
                to="/rudram"
                className="inline-flex items-center text-gold-400 hover:text-gold-300 font-semibold text-lg transition-colors"
              >
                Learn More About Rudram
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7991664/pexels-photo-7991664.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Rudram Film Poster"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-600 rounded-full flex items-center justify-center">
                <Play className="h-8 w-8 text-white ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;