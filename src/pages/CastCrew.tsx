import React, { useState } from 'react';

interface Person {
  id: string;
  name: string;
  role: string;
  character?: string;
  bio: string;
  image: string;
  quote?: string;
  profession?: string;
}

const CastCrew = () => {
  const [activeTab, setActiveTab] = useState<string>('bhavani-actor');

  // All team members - Cast and Crew combined
  const allMembers: Person[] = [
    // Cast Members
    {
      id: 'SasiChakravarthula',
      name: 'Sasi Chakravarthula',
      role: 'Story, Dialogues, Screenplay, Direction, Actor',
      character: 'Arjun',
      profession: 'IT Professional',
      bio: `I come from Andhra Pradesh, India — a place where cinema isn't just entertainment; it's woven into the emotional and cultural fabric of everyday life. I was one of those kids who grew up in awe of Telugu cinema, completely captivated by Megastar Chiranjeevi. His films shaped the way I saw storytelling, heroism, and performance.

For most of my life, storytelling was something I loved, but never pursued seriously. Life, like it does for many of us, moved in a different direction — careers, family, responsibilities. Yet that urge to tell stories never went away. And now, in a time where technology and community-driven platforms allow even first-time filmmakers to tell meaningful stories, I realized the time to act is now.

The soul of Rudram was born in the most unexpected way — during a playful, even humorous, argument with my wife, Sravanti. She was peacefully chanting "Shiva," and in the moment, I responded by chanting her name back to her — "Sravanti, Sravanti!" It was teasing at first, but it opened a doorway. We started talking about why we chant names at all, why names carry weight, and whether there's a force behind them.

That playful moment evolved into a deeper philosophical inquiry: Is there a creative and destructive force that governs our universe? And if so, how does that force manifest within us — especially in the quiet strength of women? That conversation planted the seed for Rudram.

Rudram is about storytelling — about the universal power of stories to transform, to preserve, to destroy, and to heal. I've always believed that human civilization evolved not just through survival, but through stories. Stories helped us understand ourselves, taught us values, and connected generations.

Another vital part of Rudram — and my life — is dance. I've always been drawn to movement, to rhythm, to the way a dancer can say everything without speaking a word. Growing up, watching Chiranjeevi dance was magic. There was strength, elegance, control, and sheer joy — and that language of movement always stayed with me.

I met Ahana, my dance teacher and dear friend, and something clicked. In her, I saw a spark — the same grace and strength I grew up idolizing. She reminded and reignited my passion not just for dance, but for taking bold creative steps. Ahana played a pivotal role in shaping Rudram, pushing me to move from idea to action.

In the end, Rudram is a deeply personal film. It's about inner divinity, feminine strength, the storytelling instinct we all carry, and the force — beyond name or form — that allows us to rise when the world tries to break us. It is a tribute to the women who inspired me, the stories that shaped me, and the fire that Chiranjeevi lit in my imagination all those years ago.`,
      image: '/cast_crew/sasi.jpg',
      quote: 'Rudram is where story, soul, and strength meet — born from love, inspired by dance, powered by belief.'
    },
    {
      id: 'SravantiYerragudi',
      name: 'Sravanti Yerragudi',
      role: 'Lead Actor, Producer, Singer, Sound, Assoc. Editor',
      character: 'Bhavani',
      profession: 'Tech Professional',
      bio: `I was born  and raised in Hyderabad, I grew up in a close-knit joint family, always surrounded and protected by my parents, brothers, and relatives. I have never been a very social person and have kept a small circle of friends. Acting was never something I envisioned for myself—I've always been shy and camera-conscious. My journey into the world of performing arts began unexpectedly this year when my husband, Sasi, recognized my singing talent and encouraged me to explore it further. With his motivation, I began learning Carnatic music and gradually gained confidence in expressing myself through art. When the opportunity to act as Bhavani in Rudram movie came along, it was again Sasi who pushed me out of my comfort zone. Facing the camera and performing in front of a crew was a big challenge for me, but his constant support gave me the courage to take the leap. What started as a hesitant step turned into an incredibly enriching experience—I made wonderful friends, shared countless fun moments with the crew, and learned a lot about filmmaking. My involvement in Rudram went beyond acting. I also took part in the editing process, which gave me a whole new perspective on storytelling and filmmaking. This journey has been filled with learning, laughter, and growth. I'm deeply grateful to my husband, my biggest cheerleader, for believing in me, encouraging me, and giving me this beautiful opportunity to be part of Rudram. I would also like to sincerely thank the amazing crew Maruthi, Harshita, Ahana, Aamani and Gowtham for their warmth, encouragement and support throughout this journey.`,
      bio: `I was born and raised in Hyderabad, I grew up in a close-knit joint family, always surrounded and protected by my parents, brothers, and relatives. I have never been a very social person and have kept a small circle of friends.

Acting was never something I envisioned for myself—I've always been shy and camera-conscious. My journey into the world of performing arts began unexpectedly this year when my husband, Sasi, recognized my singing talent and encouraged me to explore it further.

With his motivation, I began learning Carnatic music and gradually gained confidence in expressing myself through art. When the opportunity to act as Bhavani in Rudram movie came along, it was again Sasi who pushed me out of my comfort zone.

Facing the camera and performing in front of a crew was a big challenge for me, but his constant support gave me the courage to take the leap. What started as a hesitant step turned into an incredibly enriching experience—I made wonderful friends, shared countless fun moments with the crew, and learned a lot about filmmaking.

My involvement in Rudram went beyond acting. I also took part in the editing process, which gave me a whole new perspective on storytelling and filmmaking. This journey has been filled with learning, laughter, and growth.

I'm deeply grateful to my husband, my biggest cheerleader, for believing in me, encouraging me, and giving me this beautiful opportunity to be part of Rudram. I would also like to sincerely thank the amazing crew Maruthi, Harshita, Ahana, Aamani and Gowtham for their warmth, encouragement and support throughout this journey.`,
      image: '/cast_crew/Sravanthi.jpg',
      quote: 'From shy beginnings to screen presence — Rudram awakened an artist I never knew existed.'
    },
    {
      id: 'AhanaChandiniSubahan',
      name: 'Ahana Chandini Subahan',
      role: 'Actor, Assit. Director, Choreography, Sound',
      character: 'Shivani',
      profession: 'Dance Fitness Entrepreneur, Tech Professional',
      bio: `I am a full time engineer, a mother of two beautiful girls and I am someone who has always been deeply passionate about any form of arts. Dance has been my first love since I was three years old. From school stages to college festivals, I have constantly found myself immersed in the rhythm of music and movement. My mother was my first cheerleader who recognized and encouraged my passion and now my husband Riyaz is my biggest support as I continue to pursue what makes my soul come alive.
I reignited my dance journey through Zumba and discovered a way to combine fitness and dance movement . That spark led myself to build AHA Squad Zumba, a platform where passion meets purpose and where every beat inspires confidence. Through AhaSquad, I help people feel confident, energized and connect to their bodies through choreographed dance fitness routines.
My interest in film:
Dance has always been part of my identity and my passion. I have always believed that artistic expression is a powerful way to connect with others and with yourself, letting yourself free. Over the years, I’ve explored various dance forms and I’ve remained active in cultural performances, never missing a chance to create or be part of something meaningful.
Even as I work full-time in technology, my passion for arts never took a back seat. Whether it’s performing, teaching and now acting—ART is at the center of my life.
What made me act in Rudram:
Sasi, the man behind Rudram and director of the movie, is not just a colleague but one of my dearest and closest friends and a multi-talented person passionate about filmmaking. He’s my buddy in every sense-we share the same deep-rooted love for art beginning with dance, music and creativity. His passion for film, art, and purpose-driven storytelling instantly resonated with me where our passions naturally supported each other.
When he shared a one-line idea and his vision on Rudram on a fine day, I was impressed and spellbound. It was about dance, Shiva, power and everything I hold close to my heart. The concept was not only bold and beautiful but spiritual, intense, and emotionally charged. I instantly felt connected to it and I was proud to see my buddy take his first step towards his passion and his drive with sincere dedication to make it happen.
I never thought I would act until Sasi recognized my passion and envisioned a character in his story that would allow me to truly express myself, especially through my love for dance and emotion. I am incredibly grateful for that. Our shared love for arts laid the foundation for a creative partnership.
My Rudram Journey:
Being part of Rudram is deeply personal and a fulfilling experience for me. This isn’t just a film project, this is a collective dream and a passion project— a collaboration born out of friendship, shared passion that came to life through hard work, trust and love for the craft. Rudram beautifully blends Indian mythology, the opioid crisis, the power of sisterhood, and the divine energy of Lord Shiva into a story that is raw, emotional and impactful.
The role I played allowed me to pour my soul into the screen. The set was filled with talented, passionate, and beautiful people who brought their heart, time and dedication and the energy was magical uplifting each other. 
My relationship with my sister character Bhavani extends to real life as well. Sravanti, myself and our sisterhood didn’t stop when the cameras stopped rolling. Our real-life connection of love, guidance, and protective affection is deeply genuine and brought authenticity to the sisters’ story, making the on-screen relationship feel lived-in.
`,
      bio: `I am a full time engineer, a mother of two beautiful girls and I am someone who has always been deeply passionate about any form of arts. Dance has been my first love since I was three years old. From school stages to college festivals, I have constantly found myself immersed in the rhythm of music and movement. My mother was my first cheerleader who recognized and encouraged my passion and now my husband Riyaz is my biggest support as I continue to pursue what makes my soul come alive.

I reignited my dance journey through Zumba and discovered a way to combine fitness and dance movement. That spark led myself to build AHA Squad Zumba, a platform where passion meets purpose and where every beat inspires confidence. Through AhaSquad, I help people feel confident, energized and connect to their bodies through choreographed dance fitness routines.

My interest in film:
Dance has always been part of my identity and my passion. I have always believed that artistic expression is a powerful way to connect with others and with yourself, letting yourself free. Over the years, I've explored various dance forms and I've remained active in cultural performances, never missing a chance to create or be part of something meaningful.

Even as I work full-time in technology, my passion for arts never took a back seat. Whether it's performing, teaching and now acting—ART is at the center of my life.

What made me act in Rudram:
Sasi, the man behind Rudram and director of the movie, is not just a colleague but one of my dearest and closest friends and a multi-talented person passionate about filmmaking. He's my buddy in every sense-we share the same deep-rooted love for art beginning with dance, music and creativity. His passion for film, art, and purpose-driven storytelling instantly resonated with me where our passions naturally supported each other.

When he shared a one-line idea and his vision on Rudram on a fine day, I was impressed and spellbound. It was about dance, Shiva, power and everything I hold close to my heart. The concept was not only bold and beautiful but spiritual, intense, and emotionally charged. I instantly felt connected to it and I was proud to see my buddy take his first step towards his passion and his drive with sincere dedication to make it happen.

I never thought I would act until Sasi recognized my passion and envisioned a character in his story that would allow me to truly express myself, especially through my love for dance and emotion. I am incredibly grateful for that. Our shared love for arts laid the foundation for a creative partnership.

My Rudram Journey:
Being part of Rudram is deeply personal and a fulfilling experience for me. This isn't just a film project, this is a collective dream and a passion project— a collaboration born out of friendship, shared passion that came to life through hard work, trust and love for the craft. Rudram beautifully blends Indian mythology, the opioid crisis, the power of sisterhood, and the divine energy of Lord Shiva into a story that is raw, emotional and impactful.

The role I played allowed me to pour my soul into the screen. The set was filled with talented, passionate, and beautiful people who brought their heart, time and dedication and the energy was magical uplifting each other. My relationship with my sister character Bhavani extends to real life as well. Sravanti, myself and our sisterhood didn't stop when the cameras stopped rolling. Our real-life connection of love, guidance, and protective affection is deeply genuine and brought authenticity to the sisters' story, making the on-screen relationship feel lived-in.

Rudram represents what's possible when creative souls come together with one shared purpose. I feel truly honored to be part of this journey and I can't wait for the world to witness the spirit of Rudram.`,
      image: '/cast_crew/ahana.jpg',
      quote: 'A rhythm of passion, sisterhood, and soul — Rudram is where my art found voice.'
    },
    {
      id: 'AamaniGundu',
      name: 'Aamani Gundu',
      role: 'Actor, BG Voice',
      character: 'Sakthi',
      profession: 'Tech Professional',
      bio: `As someone completely new to the world of filmmaking, I stepped into Rudram as an amateur but with wide-eyed enthusiasm and a deep willingness to learn. I’ve always believed in trying new things, and this film felt like the perfect opportunity for a new beginning.

What drew me to Rudram was not just the story, but the energy and passion of the people behind it. From day one, I was surrounded by incredibly talented and supportive individuals who patiently introduced me to the nuances of the filmmaking process. Every scene, every rehearsal, every conversation was a window into a world I had never experienced before — a world that requires patience, coordination, creativity, and above all, heart.

The role I played in Rudram challenged me in unexpected ways and gave me a glimpse into the immense dedication it takes to bring a story to life. Watching the crew work so tirelessly behind the scenes — setting up lights, handling equipment, guiding performances, capturing the perfect moment — gave me a whole new respect for every person who contributes to a film, often without ever appearing on screen.

This experience wasn’t just about acting for me. It was about discovery, growth, and being part of something larger than myself. I’m grateful to have been welcomed into the Rudram family and to have played even a small role in a story that carries so much soul and purpose.

I walk away from this project with not just memories, but inspiration — and a newfound appreciation for the magic of cinema.`,
      image: '/cast_crew/amani.jpg',
      quote: 'From curiosity to confidence — Rudram sparked my love for cinema.'
    },
    {
      id: 'MaruthiLakkamraju',
      name: 'Maruthi Lakkamraju',
      role: 'Actor, Assit. Director, Sound, Tech Help, Prop Artist',
      character: 'Dr.Vibhi',
      profession: 'Tech Professional',
      bio: `I come from a small town in Andhra Pradesh, and Rudram marks my first step into the world of acting. Though I’ve always admired the arts, I never had the opportunity to explore them myself—until now.


When Sasi first approached me, I assumed Rudram would be a small, casual short film. But as I spent more time talking to him, I quickly realized this was a passion project built on a strong story and deep conviction. His enthusiasm was contagious—and with the constant support and dedication of his wife, Sravanthi, the energy behind the film felt unstoppable.


What began as a casual “yes” turned into something truly meaningful. I was offered a character that I connected with deeply, and the story itself was intense and engaging. Even though all of us actors were newcomers, the camaraderie and focus on set made it feel like a close-knit family. Each day was a new learning experience, and I genuinely looked forward to every scene.


The shoot was completed in just 12 days, but it never felt rushed or overwhelming. Each day on set was filled with collaboration and learning, and it never felt like work. I found myself drawn not just to acting, but to the entire filmmaking process.


I don’t think I could have done this without the wholehearted support and encouragement from my wife.


Rudram has been more than a project—it’s been a transformative experience. Whether or not the film succeeds, I know the joy, passion, and sense of community I felt will stay with me forever. I’m proud to have been part of it.
`,
      image: '/cast_crew/maruthi.jpg',
      quote: 'Rudram turned a simple yes into a lifelong passion.'
    },
    {
      id: 'Gowtham Parvataneni',
      name: 'Gowtham Parvataneni',
      role: 'Actor, Sound',
      character: 'Subha',
      profession: 'Tech Professional',
      bio: `Beyond the world of tech and code, I’ve always had a deep fascination with cinema — for its power to tell stories, evoke emotions, and make us see the world through someone else’s eyes.

My first brush with acting began back in India, during my school and college days. I participated in a few stage dramas and short films—not with the goal of becoming an actor, but out of curiosity and passion. There was something thrilling about stepping into a character’s shoes and living another life, even if just for a few moments. That spark never quite left me.

When the opportunity to be part of Rudram came along, I was drawn in by the script and the chance to portray a morally layered character — something I’d always wanted to explore as an actor. What made the experience truly special, though, was the team behind it. We operated like a close-knit startup rather than a traditional film crew — everyone wore multiple hats, supported each other, and poured their heart into the project.

The entire film was shot in just 10–12 days, but every moment was filled with intensity, learning, and genuine collaboration. From scene rehearsals to helping out with behind-the-scenes tasks, it felt less like a production and more like a creative family working toward a shared dream.

I’m incredibly grateful to the director, Sasi, and his production house for trusting me with this role and for building such a passionate team around this vision. Most importantly, I want to thank my wife for being my biggest cheerleader — her unwavering support and encouragement gave me the confidence to take this leap.

Rudram has been more than just a film for me—it’s been a journey of rediscovery, of reconnecting with an old love, and of pushing past boundaries I’d long accepted. I’m proud to be a part of this story, and I can’t wait for the world to experience the soul we poured into it.`,
      image: '/cast_crew/gowtham.jpg',
      quote: 'From tech to theatre—Rudram reignited my passion for storytelling and performance.'
    },
    {
      id: 'HarshithaKrishnapuram',
      name: 'Harshitha Krishnapuram',
      role: 'Actor, sound, Makeup, Line Producer',
      character: 'Achala',
      profession: 'Student',
      bio: `Acting in a film has always been a dream close to my heart. Ever since I was a teenager, I imagined myself in short films and music videos, often daydreaming while watching movies and wondering what it would feel like to step into the world of storytelling. Though I didn’t know when or how it would happen, that dream quietly stayed with me.

After moving to Minnesota, things slowly started falling into place—and that’s when Rudram came into my life.

I’ve always had a deep love for films—not just as a viewer, but for the craft behind them. I’m fascinated by how stories are shaped, how characters evolve, and how much dedication and teamwork go into creating something meaningful. So when I first heard about Rudram, something clicked instantly. The story was powerful, the vision was clear, and I felt an immediate connection.

Playing the role of Achala was such a fulfilling experience. She’s strong, intense, and layered—and I truly enjoyed bringing her to life on screen. It was both fun and challenging, and the emotional depth of the character made the process even more rewarding.

Working with the director, Sasi, was incredibly inspiring. His passion, vision, and attention to detail gave life to the story in a way that resonated with all of us. Being surrounded by such a talented and supportive cast and crew made the experience even more special—it truly felt like a creative family.

Rudram gave me the opportunity to live my long-held dream, and I couldn’t be more grateful. This journey has been filled with excitement, growth, learning, and above all, joy. I’m so thankful for everyone who believed in me and gave me the space to express myself.

I’ll always carry this experience with pride and gratitude—it marks the beginning of something I’ve always wished for.`,
      image: '/cast_crew/harshitha.jpg',
      quote: 'Rudram turned my teenage dream into a powerful, unforgettable reality.'
    },
    {
      id: 'supporting2-actor',
      name: '[Actor Name]',
      role: 'Supporting Actor',
      character: '[Character Name]',
      profession: 'Graphic Designer',
      bio: 'Bringing authenticity and nuance to their role, helping to create the believable world in which Rudram\'s story unfolds.',
      image: 'https://images.pexels.com/photos/8112200/pexels-photo-8112200.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The ensemble cast creates a family that extends beyond the screen.'
    },
    {
      id: 'supporting3-actor',
      name: '[Actor Name]',
      role: 'Supporting Actor',
      character: '[Character Name]',
      profession: 'Software Developer',
      bio: 'Delivering a powerful performance that showcases the collaborative spirit and talent that defines the Rudram cast.',
      image: 'https://images.pexels.com/photos/8112197/pexels-photo-8112197.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Working on Rudram has been an incredible journey of artistic growth.'
    },
    // Crew Members
    {
      id: 'director',
      name: '[Director Name]',
      role: 'Director',
      profession: 'Film Director',
      bio: 'Visionary director bringing together mythology and modern storytelling to create a unique cinematic experience that bridges cultural narratives.',
      image: 'https://images.pexels.com/photos/7991621/pexels-photo-7991621.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Rudram is about finding the divine within ourselves when faced with impossible odds.'
    },
    {
      id: 'cinematographer',
      name: '[Cinematographer Name]',
      role: 'Cinematographer',
      profession: 'Visual Artist',
      bio: 'Creating the visual language of Rudram, capturing both the gritty reality of the drug investigation and the ethereal beauty of mythological elements.',
      image: 'https://images.pexels.com/photos/7991664/pexels-photo-7991664.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Every frame tells a story, and every shadow holds meaning.'
    },
    {
      id: 'producer',
      name: '[Producer Name]',
      role: 'Producer',
      profession: 'Business Executive',
      bio: 'Overseeing the production of Rudram from conception to completion, ensuring the creative vision is realized while managing all aspects of the filmmaking process.',
      image: 'https://images.pexels.com/photos/7991473/pexels-photo-7991473.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Independent filmmaking requires passion, persistence, and a belief in the story you\'re telling.'
    },
    {
      id: 'editor',
      name: '[Editor Name]',
      role: 'Editor',
      profession: 'Video Editor',
      bio: 'Crafting the narrative flow and emotional rhythm of Rudram through precise editing that balances intense drama with mythological elements.',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Editing is where the magic happens - where footage becomes story.'
    },
    {
      id: 'sound-designer',
      name: '[Sound Designer Name]',
      role: 'Sound Designer',
      profession: 'Audio Engineer',
      bio: 'Creating the immersive audio landscape that brings Rudram to life, from subtle environmental sounds to the powerful audio of divine transformation.',
      image: 'https://images.pexels.com/photos/7991633/pexels-photo-7991633.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Sound is the invisible character that guides the audience\'s emotional journey.'
    },
    {
      id: 'music-composer',
      name: '[Music Composer Name]',
      role: 'Music Composer',
      profession: 'Musician',
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

        {/* Name Blocks - Flexible Horizontal Layout */}
        <div className="flex flex-wrap gap-2 mb-8">
          {allMembers.map((person) => (
            <button
              key={person.id}
              onClick={() => setActiveTab(person.id)}
              className={`px-3 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                activeTab === person.id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="font-semibold text-sm">{person.name}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Photo */}
          <div className="lg:col-span-1">
            <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden">
              <img
                src={activePerson.image}
                alt={activePerson.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Basic Info */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800 rounded-lg p-6 border border-gold-600/20">
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
                {activePerson.profession && (
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {activePerson.profession}
                  </span>
                )}
              </div>
              
              {activePerson.quote && (
                <div className="mt-4">
                  <blockquote className="text-gray-300 italic border-l-4 border-gold-400 pl-4">
                    "{activePerson.quote}"
                  </blockquote>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Biography Section - Full Width */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gold-600/20">
          <h3 className="text-xl font-semibold text-gold-400 mb-4">Journey into Rudram</h3>
          <div className="text-gray-300 leading-relaxed space-y-4">
            {activePerson.bio.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
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