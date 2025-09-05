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

  // All team members - Cast and Crew combined
  const allMembers: Person[] = [
    // Cast Members
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
      id: 'subha-actor',
      name: '[Actor Name]',
      role: 'Supporting Actor',
      character: 'Subha',
      bio: 'Bringing intensity and menace to the role of Subha, the ruthless enforcer whose actions escalate the conflict to dangerous heights.',
      image: 'https://images.pexels.com/photos/7991664/pexels-photo-7991664.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Subha is driven by loyalty, even when that loyalty leads to darkness.'
    },
    {
      id: 'achala-actor',
      name: '[Actor Name]',
      role: 'Supporting Actor',
      character: 'Achala',
      bio: 'Portraying the reckless pharmacist Achala, whose poor decisions become a catalyst for the unfolding tragedy.',
      image: 'https://images.pexels.com/photos/7991621/pexels-photo-7991621.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Achala shows how small compromises can lead to devastating consequences.'
    },
    {
      id: 'supporting1-actor',
      name: '[Actor Name]',
      role: 'Supporting Actor',
      character: '[Character Name]',
      bio: 'Contributing to the rich tapestry of Rudram with a memorable performance that adds depth to the story\'s emotional core.',
      image: 'https://images.pexels.com/photos/8112189/pexels-photo-8112189.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Every character in Rudram has a purpose and a story to tell.'
    },
    {
      id: 'supporting2-actor',
      name: '[Actor Name]',
      role: 'Supporting Actor',
      character: '[Character Name]',
      bio: 'Bringing authenticity and nuance to their role, helping to create the believable world in which Rudram\'s story unfolds.',
      image: 'https://images.pexels.com/photos/8112200/pexels-photo-8112200.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The ensemble cast creates a family that extends beyond the screen.'
    },
    {
      id: 'supporting3-actor',
      name: '[Actor Name]',
      role: 'Supporting Actor',
      character: '[Character Name]',
      bio: 'Delivering a powerful performance that showcases the collaborative spirit and talent that defines the Rudram cast.',
      image: 'https://images.pexels.com/photos/8112197/pexels-photo-8112197.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Working on Rudram has been an incredible journey of artistic growth.'
    },
    // Crew Members
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
    },
    {
      id: 'producer',
      name: '[Producer Name]',
      role: 'Producer',
      bio: 'Overseeing the production of Rudram from conception to completion, ensuring the creative vision is realized while managing all aspects of the filmmaking process.',
      image: 'https://images.pexels.com/photos/7991473/pexels-photo-7991473.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Independent filmmaking requires passion, persistence, and a belief in the story you\'re telling.'
    },
    {
      id: 'editor',
      name: '[Editor Name]',
      role: 'Editor',
      bio: 'Crafting the narrative flow and emotional rhythm of Rudram through precise editing that balances intense drama with mythological elements.',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Editing is where the magic happens - where footage becomes story.'
    },
    {
      id: 'sound-designer',
      name: '[Sound Designer Name]',
      role: 'Sound Designer',
      bio: 'Creating the immersive audio landscape that brings Rudram to life, from subtle environmental sounds to the powerful audio of divine transformation.',
      image: 'https://images.pexels.com/photos/7991633/pexels-photo-7991633.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Sound is the invisible character that guides the audience\'s emotional journey.'
    },
    {
      id: 'music-composer',
      name: '[Music Composer Name]',
      role: 'Music Composer',
      bio: 'Composing the musical score that weaves together contemporary thriller elements with traditional mythological themes to create Rudram\'s unique sound.',
      image: 'https://images.pexels.com/photos/8112189/pexels-photo-8112189.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Music bridges the gap between the earthly and the divine in Rudram.'
    }
  ];

  const activePerson = allMembers.find(person => person.id === activeTab) || allMembers[0];

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

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Tab Navigation */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 max-h-[600px] overflow-y-auto">
              {allMembers.map((person) => (
                <button
                  key={person.id}
                  onClick={() => setActiveTab(person.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                    activeTab === person.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <div className="font-semibold text-sm">{person.name}</div>
                  <div className="text-xs opacity-80">
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