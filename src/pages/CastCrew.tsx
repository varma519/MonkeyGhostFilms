import React, { useState } from 'react';

interface Person {
  id: string;
  name: string;
  role: string;
  character?: string;
  bio: string;
  image: string;
  quote?: string;
}

const CastCrew = () => {
  const [activeTab, setActiveTab] = useState<string>('bhavani-actor');

  // Sample cast and crew data - you can replace with actual data
  const people: Person[] = [
    {
      id: 'bhavani-actor',
      name: '[Actor Name]',
      role: 'Lead Actor',
      character: 'Bhavani',
      bio: 'Dedicated performer bringing depth and authenticity to the role of Bhavani, the DEA investigator whose resilience drives the heart of Rudram.',
      image: 'https://images.pexels.com/photos/8112189/pexels-photo-8112189.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Playing Bhavani has been a transformative journey of understanding strength in vulnerability.'
    },
    {
      id: 'shivani-actor',
      name: '[Actor Name]',
      role: 'Lead Actor',
      character: 'Shivani',
      bio: 'Bringing sensitivity and power to the role of Shivani, portraying the complex character who channels divine energy through her unique perspective.',
      image: 'https://images.pexels.com/photos/8112200/pexels-photo-8112200.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Shivani taught me that true strength comes from embracing who you are completely.'
    },
    {
      id: 'shakthi-actor',
      name: '[Actor Name]',
      role: 'Supporting Actor',
      character: 'Shakthi',
      bio: 'Embodying the protective spirit of Shakthi, bringing warmth and fierce loyalty to the foster sister who stands as the guardian of the family bond.',
      image: 'https://images.pexels.com/photos/8112197/pexels-photo-8112197.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Shakthi represents the guardian we all need and the guardian we can all become.'
    },
    {
      id: 'vibhi-actor',
      name: '[Actor Name]',
      role: 'Antagonist',
      character: 'Dr. Vibhi',
      bio: 'Masterfully portraying the manipulative Dr. Vibhi, bringing complexity to the character that drives the central conflict of our story.',
      image: 'https://images.pexels.com/photos/7991473/pexels-photo-7991473.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Every antagonist believes they are the hero of their own story.'
    },
    {
      id: 'director',
      name: '[Director Name]',
      role: 'Director',
      bio: 'Visionary director bringing together mythology and modern storytelling to create a unique cinematic experience that bridges cultural narratives.',
      image: 'https://images.pexels.com/photos/7991621/pexels-photo-7991621.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Rudram is about finding the divine within ourselves when faced with impossible odds.'
    },
    {
      id: 'cinematographer',
      name: '[Cinematographer Name]',
      role: 'Cinematographer',
      bio: 'Creating the visual language of Rudram, capturing both the gritty reality of the drug investigation and the ethereal beauty of mythological elements.',
      image: 'https://images.pexels.com/photos/7991664/pexels-photo-7991664.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Every frame tells a story, and every shadow holds meaning.'
    }
  ];

  const activePerson = people.find(person => person.id === activeTab) || people[0];

  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gold-400 mb-6">Cast & Crew</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the talented individuals bringing Rudram to life
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Tab Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {people.map((person) => (
                <button
                  key={person.id}
                  onClick={() => setActiveTab(person.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    activeTab === person.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <div className="font-semibold">{person.name}</div>
                  <div className="text-sm opacity-80">
                    {person.character ? `${person.character} - ${person.role}` : person.role}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800 rounded-lg p-8 border border-gold-600/20">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Photo */}
                <div className="md:col-span-1">
                  <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden">
                    <img
                      src={activePerson.image}
                      alt={activePerson.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h2 className="font-serif text-3xl font-bold text-gold-400 mb-2">
                      {activePerson.name}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                        {activePerson.role}
                      </span>
                      {activePerson.character && (
                        <span className="bg-gold-600 text-white px-3 py-1 rounded-full text-sm">
                          {activePerson.character}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-3">Biography</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {activePerson.bio}
                    </p>
                  </div>

                  {activePerson.quote && (
                    <div>
                      <h3 className="text-lg font-semibold text-red-400 mb-3">On Rudram</h3>
                      <blockquote className="text-gray-300 italic border-l-4 border-gold-400 pl-4">
                        "{activePerson.quote}"
                      </blockquote>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note for Future Updates */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-lg p-6 border border-red-600/20 max-w-2xl mx-auto">
            <p className="text-gray-400 text-sm">
              Complete cast and crew information will be updated as production progresses. 
              Each profile will include detailed biographies and insights into their Rudram journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastCrew;