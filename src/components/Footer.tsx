import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Instagram, Youtube, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Film className="h-8 w-8 text-gold-400" />
              <span className="font-bold text-xl text-gold-400">MonkeyGhostFilms</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Independent film production dedicated to telling bold stories that connect cultural 
              roots with today's pressing realities. Stories rooted in mythology, powered by human truth.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/rudramgf/?igsh=MWUyZmUzNHd6dG95ZA%3D%3D#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@MonkeyGhostFilms" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="mailto:Monkeyghostfilms@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gold-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/rudram" className="text-gray-400 hover:text-white transition-colors">
                  Rudram
                </Link>
              </li>
              <li>
                <Link to="/cast-crew" className="text-gray-400 hover:text-white transition-colors">
                  Cast & Crew
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-400 hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gold-400 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/donate" className="text-gray-400 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="mailto:Monkeyghostfilms@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 MonkeyGhostFilms Productions. All rights reserved.
            </p>
            <div className="flex items-center text-gray-400 text-sm mt-2 md:mt-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span>for independent cinema</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;