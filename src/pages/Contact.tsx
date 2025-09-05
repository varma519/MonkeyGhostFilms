import React, { useState } from 'react';
import { Send, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gold-400 mb-6">Contact Us</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with MonkeyGhostFilms. We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-gray-800 rounded-lg p-8 border border-red-600/20">
              <h2 className="font-serif text-2xl font-bold text-gold-400 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-vertical"
                    placeholder="Tell us about your inquiry, feedback, or how you'd like to collaborate..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Email */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gold-600/20">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-gold-400 mr-3" />
                <h3 className="text-xl font-semibold text-gold-400">Email</h3>
              </div>
              <p className="text-gray-300 mb-3">Reach us directly at:</p>
              <a
                href="mailto:monkeyghostfilms@gmail.com"
                className="text-white font-mono text-lg hover:text-red-400 transition-colors"
              >
                monkeyghostfilms@gmail.com
              </a>
            </div>

            {/* Social Media */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gold-600/20">
              <h3 className="text-xl font-semibold text-gold-400 mb-6">Follow Our Journey</h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-white transition-colors group"
                >
                  <Instagram className="h-6 w-6 mr-3 text-red-400 group-hover:text-red-300" />
                  <span>Instagram - Behind the scenes content</span>
                </a>
                
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-white transition-colors group"
                >
                  <Facebook className="h-6 w-6 mr-3 text-red-400 group-hover:text-red-300" />
                  <span>Facebook - Production updates</span>
                </a>
                
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-white transition-colors group"
                >
                  <Youtube className="h-6 w-6 mr-3 text-red-400 group-hover:text-red-300" />
                  <span>YouTube - Teasers and trailers</span>
                </a>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gold-600/20">
              <h3 className="text-xl font-semibold text-gold-400 mb-4">Get Involved</h3>
              <p className="text-gray-300 leading-relaxed">
                Interested in collaborating, investing, or learning more about MonkeyGhostFilms? 
                We welcome inquiries from fellow filmmakers, industry professionals, and anyone 
                passionate about independent cinema.
              </p>
            </div>

            {/* Response Time */}
            <div className="bg-red-600/10 border border-red-600/30 rounded-lg p-6">
              <h3 className="text-red-400 font-semibold mb-2">Response Time</h3>
              <p className="text-gray-300">
                We typically respond to all inquiries within 24-48 hours. 
                Thank you for your patience as we focus on bringing Rudram to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;