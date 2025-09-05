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
          <div className="max-w-9xl mx-auto mb-8">
            <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/ekuYAGVWP8w?autoplay=1&loop=1&playlist=ekuYAGVWP8w&mute=1&controls=1"
                title="Rudram Teaser"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/rudram"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn More About Rudram
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="https://www.youtube.com/watch?v=ekuYAGVWP8w"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch on YouTube
            </a>
          </div>
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
            
            <div className="bg-gray-800 rounded-lg p-8 border border-red-600/20">
              <h4 className="font-serif text-2xl font-bold text-gold-400 mb-6">Film Highlights</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="text-white font-semibold mb-2">Mythological Depth</h5>
                    <p className="text-gray-400">Ancient wisdom meets modern storytelling in this unique narrative blend</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="text-white font-semibold mb-2">Authentic Characters</h5>
                    <p className="text-gray-400">Complex characters dealing with real-world challenges and extraordinary circumstances</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="text-white font-semibold mb-2">Independent Vision</h5>
                    <p className="text-gray-400">Bold storytelling that bridges cultural narratives with contemporary relevance</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-green-400 font-semibold">Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;