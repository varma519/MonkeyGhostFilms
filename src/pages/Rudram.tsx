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
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Play className="h-20 w-20 text-red-500 mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold text-white mb-2">Rudram Official Teaser</h3>
                <p className="text-gray-400">YouTube embed will be placed here</p>
              </div>
            </div>
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
                  <span className="text-gray-300">In Production</span>
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
                src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Rudram Behind the Scenes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>


        {/* Press Links Placeholder */}
        <div className="bg-gray-800 rounded-lg p-8 border border-gold-600/20">
          <h2 className="font-serif text-2xl font-bold text-gold-400 mb-6">Press & Media</h2>
          <p className="text-gray-400 mb-4">Stay tuned for newspaper articles, web features, and press coverage of Rudram.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-sm text-gray-400">Press links will be added here</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-sm text-gray-400">Media coverage coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rudram;