import React from 'react';
import { Play, Calendar, Users, Award } from 'lucide-react';

const Rudram = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-red-500 mb-4">RUDRAM</h1>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-red-600 text-white px-4 py-2 rounded-full">Drama</span>
            <span className="bg-gold-600 text-white px-4 py-2 rounded-full">Thriller</span>
            <span className="bg-gray-600 text-white px-4 py-2 rounded-full">Mythological Undertones</span>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A quiet DEA investigator and her autistic sister uncover a deadly drug empire. 
            When violence erupts, their bond awakens a divine force rooted in mythology, 
            transforming their fight for survival into a fight for justice.
          </p>
        </div>

        {/* Teaser Video Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/ekuYAGVWP8w?controls=1"
              title="Rudram Official Teaser"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Synopsis Section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl font-bold text-gold-400 mb-6">Synopsis</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                <strong className="text-red-400">Rudram</strong> is a tense, emotional thriller interwoven with mythological elements. 
                At its heart is Bhavani, a DEA Diversion Investigator, and her non-verbal autistic sister Shivani. 
                Raised in foster care alongside their protective foster sister Shakthi, the trio share an unshakable bond.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                When Bhavani uncovers an opioid network led by the manipulative Dr. Vibhi, ruthless enforcer Subha, 
                and reckless pharmacist Achala, she becomes a target. The attack on her and Shivani triggers something 
                extraordinary—Shivani channels the divine energy of Shiva, unleashing the cosmic Tandava dance of 
                destruction and protection.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                The story mirrors modern tragedies of drug abuse with mythological symbolism. Bhavani represents resilience, 
                Shakthi embodies guardianship, and Shivani becomes the vessel of divine retribution. Their journey is not 
                just survival—it's transformation.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-gold-400">Rudram explores love, courage, and destiny in the face of overwhelming darkness. 
                It is both a gripping thriller and a spiritual allegory, where ordinary people discover extraordinary strength.</strong>
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-800 rounded-lg p-6 border border-red-600/20">
              <h3 className="font-semibold text-gold-400 mb-4">Film Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-red-500 mr-3" />
                  <span className="text-gray-300">Completed</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-red-500 mr-3" />
                  <span className="text-gray-300">Independent Film</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-red-500 mr-3" />
                  <span className="text-gray-300">Debut Feature</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="/gen_banner_image.jpg"
                alt="Rudram Banner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>


        {/* Press Links Placeholder */}
        <div className="bg-gray-800 rounded-lg p-8 border border-gold-600/20">
          <h2 className="font-serif text-2xl font-bold text-gold-400 mb-6">Press & Media</h2>
          <p className="text-gray-400 mb-6">Featured coverage of Rudram in major publications.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg border border-red-600/20 hover:border-red-500/40 transition-colors">
              <h3 className="text-gold-400 font-semibold text-lg mb-3">Sahan Journal</h3>
              <p className="text-gray-300 text-sm mb-4">Arts & Culture coverage featuring Rudram and other independent films</p>
              <a 
                href="https://sahanjournal.com/arts-culture/weekend-arts-nunnabove-black-queer-art/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-400 hover:text-red-300 font-medium text-sm transition-colors"
              >
                Read Article →
              </a>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg border border-red-600/20 hover:border-red-500/40 transition-colors">
              <h3 className="text-gold-400 font-semibold text-lg mb-3">Great Andhra</h3>
              <p className="text-gray-300 text-sm mb-4">Telugu film Rudram made in Minnesota - screening coverage</p>
              <a 
                href="https://m.greatandhra.com/movies/news/telugu-film-rudram-made-in-minnesota-screens-sept-14-148967" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-400 hover:text-red-300 font-medium text-sm transition-colors"
              >
                Read Article →
              </a>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">More press coverage and media features will be added as they become available.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rudram;