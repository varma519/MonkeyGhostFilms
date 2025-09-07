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
  const [activeTab, setActiveTab] = useState<string>('SasiChakravarthula');

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
      id: 'SharmilaShanmugham',
      name: 'Sharmila Shanmugham',
      role: 'Actor',
      character: 'Vimala',
      profession: 'Tech Professional',
      bio: `I’ve always enjoyed watching movies whenever I get the time. There’s something comforting and inspiring about immersing myself in different stories and characters. But while I love being a movie enthusiast, acting was never really on my radar.

When Sasi and Ahana first approached me with an opportunity to be part of Rudram, I wasn’t sure if I could pull it off. Acting felt so far from my comfort zone. But with their encouragement—and the blessings of my family—I realized this was a great opportunity to explore something new and step into a completely different creative space.

As Sasi explained more about the role, something changed. The character he envisioned for me felt unique and impactful. I knew this wasn’t just a random role—it was one I had to say yes to.

Rudram has been my first-ever film experience, and it’s one I will always cherish. From day one, the entire team made me feel welcomed and at ease. It didn’t feel like work—it felt like being part of something meaningful, surrounded by passionate people who truly believed in the story we were telling.

I’m grateful to Sasi for bringing me on this journey, and to everyone on the team who made it so memorable. Acting may not have been part of my original plan, but Rudram showed me the magic that happens when you say yes to something unexpected.`,
      image: '/cast_crew/sharmila.jpg',
      quote: 'The ensemble cast creates a family that extends beyond the screen.'
    },
    {
      id: 'PraveenSreekumar',
      name: 'Praveen Sreekumar',
      role: 'Actor',
      character: 'Dhruva',
      profession: 'Tech Professional',
      bio: `My interests have always revolved around creativity and movement — from digital art and music to cricket and running. But one passion that has always quietly stayed with me is my fascination with filmmaking, especially everything that happens behind the camera.

I’ve long been intrigued by the technical side of cinema—the lighting, framing, camera angles, and the behind-the-scenes magic that brings stories to life. While I never imagined myself in front of the camera, I’ve always dreamed of being part of the filmmaking process in some form.

When Rudram came along, I saw it as the perfect opportunity to explore that dream. Even though my role wasn’t strictly technical, being involved in the production gave me firsthand exposure to how a film is made—from the passion in every performance to the coordination behind each frame.

The experience was exciting, eye-opening, and full of learning. Working with Sasi and the Rudram crew made me appreciate just how much dedication and teamwork go into even the smallest moments on screen.

I’m grateful for the chance to step into this world and for the memories and insights I gained along the way. Rudram will always remain a special milestone in my creative journey.`,
      image: '/cast_crew/praveen.jpg',
      quote: 'Rudram gave me a front-row seat to the magic behind the camera.'
    },
    {
      id: 'DeepakBhatt',
      name: 'Deepak Bhatt',
      role: 'Actor',
      profession: 'Tech Professional',
      bio: `I’m a spiritual seeker, tea lover, and lifelong learner who enjoys swimming, playing badminton, and exploring new places. At home, I’m a husband, a father to a curious little boy, and a full-time bug fixer—both in code and in life!

Rudram marked my first step into the world of acting, and though my role was short, the experience was deeply meaningful. What drew me to the project wasn’t just the chance to act—it was the story. The role I played—a doctor who stands up to a corrupt pharmaceutical mafia—spoke to something I genuinely care about. He wasn’t a traditional hero with big action scenes. He was someone who made a brave, conscious choice in a broken system, and paid the price for it. That kind of character felt real and worth portraying.

The shoot spanned just a few days, but every moment on set was filled with energy, learning, and camaraderie. I especially appreciated working with Sasi, our director—his calm, clear, and collaborative style brought out the best in everyone. I still smile when I think about one scene with Gowtham, who had to choke me for the shot—after every take, he kept checking in with, “Are you okay, bro?” That kind of care and respect made the experience even more special.

What stood out most was how each team member brought their own magic to the project. From the cast to the crew, everyone was committed, passionate, and generous with their time and talent. It didn’t feel like a set full of newcomers—it felt like a crew of storytellers with a shared purpose.

Rudram gave me the opportunity to merge purpose and performance. I’ll always be grateful for this experience and proud to be part of a film that aims to spark conversations that matter.
`,
      image: '/cast_crew/deepak.jpg',
      quote: 'Techie by day, actor by chance—Rudram made my first film unforgettable.'
    },
    {
      id: 'AnilKumarKundeti',
      name: 'Anil Kumar Kundeti',
      role: 'Director of Photography, Mentor',
      profession: 'Director, Cinematography',
      bio: `My journey with Rudram began when I first came across Sasi’s post in a Minnesota film group. At first, I wasn’t sure how serious it was, but when I spoke with him, I quickly realized his passion and commitment. He invited me to his home to show a version of the film shot on iPhone, and though it was raw and technically limited, I could immediately see the potential and the strong vision behind it. That first meeting convinced me that Sasi wasn’t just experimenting — he was ready to make a real film.

I explained the importance of departments like lighting, audio, and camera work, and he immediately took steps to bring those elements together. Unlike many first-time directors, Sasi was open to learning, quick to adapt, and eager to hear suggestions. He didn’t hold on to ego — instead, he welcomed collaboration. That impressed me deeply and made me want to join this journey.

As we began production, I saw his seriousness grow every day. He planned scenes carefully, respected deadlines, and ensured the entire crew was involved in decision-making. What struck me most was his flexibility: he gave freedom to actors and crew to improvise, which is rare in directors. This openness created a sense of ownership for everyone on set.

Working with the team was an experience I truly enjoyed. Shravanthi played a crucial role in supporting us throughout, making sure we had everything we needed, from meals to logistics, so the set always felt like home. Every person in the team felt valued, and it was like being part of an extended family.

For me, every day on set felt rewarding rather than tiring. I found myself learning as much as I contributed — especially in how Sasi handled people with patience, empathy, and respect. He had a way of motivating everyone to give their best, not through pressure but through trust.

I also admired how quickly he shifted from the iPhone concept to building a professional setup with proper equipment, sound, and lighting. That leap showed me his determination to make Rudram not just a project, but a film of real quality. Seeing the transformation of scenes with proper lighting, crisp audio, and cinematic visuals was inspiring.

Looking back, Rudram was not just a film, but a journey of collaboration, creativity, and trust. It brought together people from different backgrounds, all united by one vision. I feel proud to have contributed to shaping the visual language and to have witnessed Sasi’s growth as a director.

I would gladly work with Sasi and this team again on any project. In fact, I hope Rudram is only the beginning for all of us. This film is proof that passion, hard work, and commitment can overcome limitations and create something meaningful. I believe Rudram will resonate with audiences, and more importantly, it will stand as an example of what can be achieved when a group of people come together with genuine dedication.`,
      image: '/cast_crew/Anil.jpeg',
      quote: 'Rudram was not just a film, but a journey of collaboration, creativity, and trust. Every day on set felt rewarding, and being part of Sasi’s vision made me believe in the power of passion and teamwork.'
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