import React from 'react';
import { Heart, Users, Film } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gold-400 mb-6">About MonkeyGhostFilms</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Independent cinema that bridges worlds
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none mb-16">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            <strong className="text-gold-400">MonkeyGhostFilms Production</strong> is an independent film company 
            dedicated to telling bold stories that connect cultural roots with today's pressing realities. 
            We embrace collaboration, nurture first-time talent, and believe filmmaking is both art and community.
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            Our stories don't just entertain—they resonate. We dig deep into the human experience, 
            weaving together mythology and modernity, tradition and innovation, to create cinema 
            that speaks to both the heart and the mind.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gold-400 mb-3">Heart</h3>
            <p className="text-gray-400">Every story we tell comes from a place of genuine emotion and authentic human connection.</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500 transition-colors">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gold-400 mb-3">Community</h3>
            <p className="text-gray-400">We believe in the power of collaboration and nurturing emerging talent in the film industry.</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-500 transition-colors">
              <Film className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gold-400 mb-3">Cinematic Depth</h3>
            <p className="text-gray-400">Our films combine stunning visuals with profound storytelling that lingers long after the credits roll.</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 border border-red-600/20">
          <h2 className="font-serif text-2xl font-bold text-red-400 mb-6">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-gold-400">To create powerful stories with heart, courage, and cinematic depth.</strong> 
            We strive to produce films that not only entertain but also inspire, challenge, and unite audiences 
            across cultural boundaries. Through our work, we aim to showcase the beauty of diverse narratives 
            while maintaining the highest standards of filmmaking excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;