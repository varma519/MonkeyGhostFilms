import React from 'react';
import { Heart, Smartphone, CreditCard, AlertCircle } from 'lucide-react';

const Donate = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gold-400 mb-6">
            Support MonkeyGhostFilms
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Independent cinema thrives on community support. Join us in bringing powerful stories to life.
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-gray-800 rounded-lg p-8 border border-red-600/20">
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-red-500 mr-3" />
              <h2 className="font-serif text-2xl font-bold text-gold-400">Why Your Support Matters</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Independent cinema thrives on community. If you wish to support our journey and future projects, 
              your contribution directly enables us to tell stories that matter, nurture emerging talent, 
              and create films with heart, courage, and cinematic depth.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Every contribution, no matter the size, helps us maintain our independence and artistic vision 
              while bringing <strong className="text-red-400">Rudram</strong> and future MonkeyGhostFilms 
              productions to audiences worldwide.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Zelle Payment */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gold-600/20 hover:border-gold-500/40 transition-colors">
            <div className="flex items-center mb-4">
              <Smartphone className="h-6 w-6 text-gold-400 mr-3" />
              <h3 className="text-xl font-semibold text-gold-400">Zelle</h3>
            </div>
            <p className="text-gray-300 mb-4">Quick and secure mobile payments</p>
            <div className="bg-gray-700 rounded p-4">
              <p className="text-sm text-gray-400 mb-2">Phone Number:</p>
              <p className="text-white font-mono">330-631-1320</p>
              <p className="text-sm text-gray-400 mb-2 mt-4">Email:</p>
              <p className="text-white font-mono">monkeyghostfilms@gmail.com</p>
            </div>
            <p className="text-sm text-gray-400 mt-3">
              Use your banking app's Zelle feature with either contact method
            </p>
          </div>

          {/* PayPal Payment */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gold-600/20 hover:border-gold-500/40 transition-colors">
            <div className="flex items-center mb-4">
              <CreditCard className="h-6 w-6 text-gold-400 mr-3" />
              <h3 className="text-xl font-semibold text-gold-400">PayPal</h3>
            </div>
            <p className="text-gray-300 mb-4">International donations welcome</p>
            <div className="bg-gray-700 rounded p-4">
              <p className="text-sm text-gray-400 mb-2">PayPal:</p>
              <p className="text-white font-mono">[PayPal link/email will be provided]</p>
            </div>
            <p className="text-sm text-gray-400 mt-3">
              Accepts major credit cards and PayPal balance
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-red-600/10 border border-red-600/30 rounded-lg p-6">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-red-400 font-semibold mb-2">Important Information</h3>
              <p className="text-gray-300 leading-relaxed">
                All contributions directly support ongoing and future productions under MonkeyGhostFilms. 
                Your generous support helps us maintain creative independence and continue telling stories 
                that bridge cultural narratives with contemporary relevance.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-gold-400 mb-6 text-center">
            How Your Support Helps
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎬</span>
              </div>
              <h3 className="text-lg font-semibold text-red-400 mb-2">Production Quality</h3>
              <p className="text-gray-400 text-sm">High-quality equipment, locations, and post-production resources</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-lg font-semibold text-red-400 mb-2">Talent Support</h3>
              <p className="text-gray-400 text-sm">Fair compensation for cast and crew, nurturing emerging talent</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-red-400 mb-2">Future Projects</h3>
              <p className="text-gray-400 text-sm">Development of new stories and expansion of our cinematic universe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;