import React from 'react';
import { Play, Calendar, Users, Award, ExternalLink } from 'lucide-react';

const Rudram = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-red-500 mb-6">RUDRAM</h1>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full font-medium">Drama</span>
              <span className="bg-gold-600 text-white px-4 py-2 rounded-full font-medium">Thriller</span>
              <span className="bg-gray-600 text-white px-4 py-2 rounded-full font-medium">Mythological Undertones</span>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A quiet DEA investigator and her autistic sister uncover a deadly drug empire. 
              When violence erupts, their bond awakens a divine force rooted in mythology, 
              transforming their fight for survival into a fight for justice.
            </p>
          </div>
        </div>
      </section>

      {/* Video and Details Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Video - Takes up 2 columns */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="font-serif text-3xl font-bold text-gold-400 mb-6 text-center">Official Teaser</h2>
                <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.youtube.com/embed/ekuYAGVWP8w?controls=1"
                    title="Rudram Official Teaser"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="mt-6 text-center">
                  <a
                    href="https://www.youtube.com/watch?v=ekuYAGVWP8w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar - Film Details and Poster */}
            <div className="lg:col-span-1 space-y-8">
              {/* Film Details Card */}
              <div className="bg-gray-800 rounded-lg p-6 border border-red-600/20">
                <h3 className="font-serif text-2xl font-bold text-gold-400 mb-6">Film Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Status</p>
                      <p className="text-gray-400 text-sm">Completed</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Production</p>
                      <p className="text-gray-400 text-sm">Independent Film</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Significance</p>
                      <p className="text-gray-400 text-sm">MonkeyGhostFilms Debut</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Poster */}
              <div className="aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/gen_banner_image.jpg"
                  alt="Rudram Movie Poster"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Synopsis Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gold-400 mb-4">Synopsis</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-8 border border-gold-600/20">
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              When a DEA investigator and her non-verbal autistic sister are targeted by a ruthless drug ring, 
              their bond unleashes a mythic fury that turns a personal struggle into a battle between 
              innocence and corruption.
            </p>
          </div>
        </div>
      </section>

      {/* Press & Media Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-gold-400 mb-4">Press & Media</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg">Featured coverage of Rudram in major publications</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sahan Journal */}
            <div className="bg-gray-800 rounded-lg p-8 border border-red-600/20 hover:border-red-500/40 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-gold-400 font-bold text-xl">Sahan Journal</h3>
                <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-red-400 transition-colors" />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Arts & Culture coverage featuring Rudram and other independent films in the Twin Cities area.
              </p>
              <a 
                href="https://sahanjournal.com/arts-culture/weekend-arts-nunnabove-black-queer-art/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Read Article
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Great Andhra */}
            <div className="bg-gray-800 rounded-lg p-8 border border-red-600/20 hover:border-red-500/40 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-gold-400 font-bold text-xl">Great Andhra</h3>
                <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-red-400 transition-colors" />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Telugu film Rudram made in Minnesota - comprehensive screening coverage and community response.
              </p>
              <a 
                href="https://m.greatandhra.com/movies/news/telugu-film-rudram-made-in-minnesota-screens-sept-14-148967" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Read Article
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Future Coverage Note */}
          <div className="mt-12 text-center">
            <div className="bg-gray-800 rounded-lg p-6 border border-gold-600/20 max-w-2xl mx-auto">
              <p className="text-gray-400">
                More press coverage and media features will be added as they become available. 
                Stay tuned for additional reviews and interviews.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rudram;