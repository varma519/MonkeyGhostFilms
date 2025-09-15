import React from 'react';
import { Star, ExternalLink, MessageSquare, ThumbsUp } from 'lucide-react';

const Reviews = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gold-400 mb-6">Reviews & Ratings</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Share your experience and help us reach more film enthusiasts
          </p>
        </div>

        {/* IMDb Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-gold-400 mb-4">IMDb Rating</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/90 rounded-lg p-8 border border-gold-600/40 text-center shadow-xl">
              <div className="mb-4">
                <span className="text-4xl">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-gold-400 mb-4">Now on IMDb!</h3>
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                Our film <span className="text-red-400 font-semibold">Rudram</span> is now officially on IMDb! 
                Your support means everything to us. 
              </p>
              <a
                href="https://www.imdb.com/title/tt38192091/?ref_=ttkw_ov_bk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-yellow-600 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="mr-2">⭐</span>
                Rate & Review on IMDb
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
              <p className="text-sm text-gray-400 mt-4">
                Your honest reviews help us reach a wider audience!
              </p>
            </div>
          </div>
        </section>

        {/* Google Reviews Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-gold-400 mb-4">Google Reviews</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8 border border-gold-600/20 hover:border-gold-500/40 transition-colors group">
              <div className="flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-gold-400 mr-3" />
                <h3 className="text-2xl font-semibold text-gold-400">Share Your Experience</h3>
              </div>
              <p className="text-gray-300 mb-6 text-center text-lg">
                Help us grow by sharing your experience with MonkeyGhostFilms and Rudram
              </p>
              <div className="bg-gray-700 rounded p-6 text-center">
                <p className="text-white text-lg mb-4">Your honest review helps other film enthusiasts discover our work</p>
                <a 
                  href="https://www.google.com/search?sca_esv=52a9a0426a099c0c&hl=en&authuser=0&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E2dx7tMKaeG34EItOSolu8EvNhVdZ-jD4O0iG-xSdI0T7cfav-7E-t__DZ_1S_HicevQNESjxjFmt9YxJPnWak_Ed6kSr5jZSeVhF_4Eib3KX3WU8A%3D%3D&q=MonkeyGhostFilms+Productions+Reviews&sa=X&ved=2ahUKEwiB8ZjJm9mPAxW-LtAFHebADGMQ0bkNegQIIBAD&biw=1416&bih=775&dpr=2"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-lg"
                >
                  <Star className="mr-2 h-5 w-5" />
                  Leave a Google Review
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-4 text-center">
                <strong>Cast & crew members:</strong> Please share your Rudram experience and journey with us!
              </p>
            </div>
          </div>
        </section>

        {/* Community Feedback Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-gold-400 mb-4">Community Feedback</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-red-600/20 text-center">
              <MessageSquare className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-red-400 mb-2">Share Your Thoughts</h3>
              <p className="text-gray-400 text-sm">
                Tell us what resonated with you about Rudram's story and characters
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 border border-gold-600/20 text-center">
              <ThumbsUp className="h-12 w-12 text-gold-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gold-400 mb-2">Rate Our Work</h3>
              <p className="text-gray-400 text-sm">
                Your ratings help us understand what works and what we can improve
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-600/20 text-center">
              <Star className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-400 mb-2">Spread the Word</h3>
              <p className="text-gray-400 text-sm">
                Help independent cinema by recommending Rudram to fellow film lovers
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-600/10 to-gold-600/10 rounded-lg p-8 border border-gold-600/30 text-center">
          <h3 className="text-2xl font-bold text-gold-400 mb-4">Every Review Matters</h3>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            As an independent film production, your reviews and ratings are invaluable to our growth. 
            They help us reach new audiences, attract future collaborators, and continue telling 
            meaningful stories that bridge cultures and touch hearts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;