import React, { useEffect, useState } from 'react';
import { ChevronRight, Building2, Users, Zap, Code, Cpu, Sparkles, Database, Globe, Server, Layers, Wifi, Award, BookOpen, Lightbulb, Network, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Add animation classes based on scroll position
      const aboutSections = document.querySelectorAll('.about-section');
      aboutSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        
        if (isVisible) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Featured event (just using the first one)
  const featuredEvent = {
    id: 1,
    title: "Hackathon 2024",
    date: "March 15-16, 2024",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1331&h=1600"
  };

  // Tech words for the animated background
  const techWords = [
    'AI', 'ML', 'IoT', 'Cloud', 'DevOps', 'Blockchain', 
    'React', 'Node.js', 'Python', 'JavaScript', 'Data Science',
    'Cybersecurity', 'AR/VR', 'Quantum', 'Robotics', 'Web3'
  ];

  // ACM Facts
  const acmFacts = [
    {
      description: "A Vast Network Of Nearly 100,000 Highly Dedicated Students And Professional Peers",
      color: "from-blue-500 to-cyan-400",
      rotation: "rotate-0",
      distance: 180
    },
    {
      description: "ACM'S Carrer & Job Center, Where you will find targeted Job Opportunities And More",
      color: "from-purple-500 to-pink-400",
      rotation: "rotate-72",
      distance: 180
    },
    {
      description: "The Opportunities To Join One Or More Of ACM'S Special Intrest Groups And Offers Lifelong Learning Resources",
      color: "from-amber-500 to-yellow-400",
      rotation: "rotate-144",
      distance: 180
    },
    {
      description: "ACM Provides Participation In The ACM Distinguished Speaker program(DSP)",
      color: "from-green-500 to-emerald-400",
      rotation: "rotate-216",
      distance: 180
    },
    {
      description: "Unique Volunteering Opportunities To Gain Hands-On Experience and Knowledge Of The Marketplace",
      color: "from-red-500 to-orange-400",
      rotation: "rotate-288",
      distance: 180
    }
  ];

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Hero Section with Interactive Elements */}
      <div className="min-h-screen relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-white"></div>
          
          {/* Floating Tech Words */}
          <div className="absolute inset-0 overflow-hidden">
            {techWords.map((word, i) => (
              <div 
                key={i}
                className="absolute text-blue-500/20 font-bold"
                style={{
                  fontSize: `${Math.random() * 20 + 14}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`
                }}
              >
                {word}
              </div>
            ))}
          </div>
          
          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-blue-400 opacity-10"
                style={{
                  width: `${Math.random() * 15 + 5}px`,
                  height: `${Math.random() * 15 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`
                }}
              ></div>
            ))}
          </div>
          
          {/* Tech-inspired Decorative Elements */}
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-64 h-64 border-4 border-blue-200 rounded-full opacity-20 animate-pulse"></div>
          </div>
          <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2">
            <div className="w-48 h-48 border-4 border-indigo-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          {/* Circuit-like Patterns */}
          <div className="absolute top-1/3 right-10 w-64 h-64 opacity-10">
            <div className="absolute top-0 left-0 w-full h-2 bg-indigo-400"></div>
            <div className="absolute top-0 left-0 w-2 h-full bg-indigo-400"></div>
            <div className="absolute bottom-0 right-0 w-full h-2 bg-indigo-400"></div>
            <div className="absolute bottom-0 right-0 w-2 h-full bg-indigo-400"></div>
            <div className="absolute top-1/2 left-0 w-full h-2 bg-indigo-400 transform -translate-y-1/2"></div>
            <div className="absolute top-0 left-1/2 w-2 h-full bg-indigo-400 transform -translate-x-1/2"></div>
          </div>
          
          {/* Floating Tech Icons */}
          <div className="absolute top-1/4 right-1/4 text-blue-300 opacity-20 animate-pulse">
            <Code className="w-16 h-16" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 text-indigo-300 opacity-20" style={{animation: 'float 15s infinite ease-in-out'}}>
            <Cpu className="w-20 h-20" />
          </div>
          <div className="absolute top-2/3 right-1/3 text-purple-300 opacity-20" style={{animation: 'float 18s infinite ease-in-out'}}>
            <Sparkles className="w-14 h-14" />
          </div>
          <div className="absolute top-1/3 left-1/5 text-cyan-300 opacity-20" style={{animation: 'float 12s infinite ease-in-out'}}>
            <Database className="w-12 h-12" />
          </div>
          <div className="absolute bottom-1/3 right-1/5 text-green-300 opacity-20" style={{animation: 'float 20s infinite ease-in-out'}}>
            <Globe className="w-18 h-18" />
          </div>
          <div className="absolute top-1/2 left-1/2 text-red-300 opacity-20" style={{animation: 'float 16s infinite ease-in-out'}}>
            <Server className="w-14 h-14" />
          </div>
          <div className="absolute bottom-1/5 left-1/4 text-yellow-300 opacity-20" style={{animation: 'float 14s infinite ease-in-out'}}>
            <Layers className="w-16 h-16" />
          </div>
          <div className="absolute top-1/5 right-1/5 text-pink-300 opacity-20" style={{animation: 'float 17s infinite ease-in-out'}}>
            <Wifi className="w-12 h-12" />
          </div>
        </div>

        {/* Content */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 md:pt-48 relative z-10">
          <div className="slide-in max-w-3xl">
            {/* Decorative Element */}
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mb-8 rounded-full"></div>
            
            {/* 3D-like Title with Gradient and Shadow */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Hi, from{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 blur-sm transform translate-x-1 translate-y-1">ACM NMIT</span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 animate-gradient">ACM NMIT</span>
              </span>
            </h1>
            
            <p className="text-2xl text-gray-700 mb-12 max-w-2xl leading-relaxed">
              Association for Computing Machinery — 
              <span className="relative inline-block ml-1">
                <span className="typing-cursor"></span>
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                  Empowering the next generation of tech innovators
                </span>
              </span>
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transform group-hover:scale-110 transition-all duration-500"></span>
                Join Us <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="/events"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-lg font-medium rounded-md text-gray-700 hover:text-gray-900 hover:border-gray-400 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gray-200 opacity-0 group-hover:opacity-20 transform group-hover:scale-110 transition-all duration-500"></span>
                Explore Events <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Sections */}
      <div className="relative bg-white py-20 w-full">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* About Institution */}
            <div className="about-section slide-in-left bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <Building2 className="h-8 w-8 text-black mr-3" />
                <h2 className="text-3xl font-bold text-black">About Institution</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Nitte Meenakshi Institute of Technology (NMIT) was established in 2001 and is recognized as one of the premier engineering colleges in Bangalore, India.
                </p>
                <p>
                  Nitte Meenakshi Institute of Technology (NMIT) is now a constituent college of Nitte (Deemed to be University), Mangaluru, further strengthening its academic and research capabilities. NMIT continues to offer high-quality undergraduate and postgraduate programs.
                </p>
                <p>
                  With state-of-the-art infrastructure, experienced faculty, and a strong focus on research and innovation, NMIT provides students with a comprehensive learning environment that prepares them for successful careers in technology and engineering.
                </p>
              </div>
            </div>

            {/* About ACM NMIT */}
            <div className="about-section slide-in-right bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-black mr-3" />
                <h2 className="text-3xl font-bold text-black">About ACM NMIT</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  The ACM Student Chapter at NMIT is a vibrant community of technology enthusiasts, developers, and innovators working together to advance computing as a science and profession.
                </p>
                <p>
                  Our chapter organizes various technical events, workshops, and hackathons throughout the year, providing students with opportunities to enhance their skills, network with industry professionals, and stay updated with the latest technological trends.
                </p>
                <p>
                  We believe in fostering a collaborative environment where students can learn, grow, and contribute to the field of computing while building lasting relationships with fellow tech enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="relative py-20 w-full">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-white"></div>
          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-cyan-400 opacity-20"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center mb-12">
            <div className="h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-1/4 mr-6"></div>
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-cyan-400 mr-3 neon-element" />
              <h2 className="text-4xl font-bold text-black">Notifications</h2>
            </div>
            <div className="h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-1/4 ml-6"></div>
          </div>
          
          <div className="flex justify-center relative">
            {/* Single Featured Event with Link to Events Page */}
            <Link to="/events" className="group relative overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 max-w-3xl">
              <img
                src={featuredEvent.image}
                alt={featuredEvent.title}
                className="w-full h-[600px] object-contain shadow-lg"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-2xl font-bold mb-2">{featuredEvent.title}</h3>
                  <p className="text-white/90 text-lg">{featuredEvent.date}</p>
                  <p className="text-white/90 text-lg mt-4">Click to see event details</p>
                </div>
              </div>
              
              {/* Neon Border Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 neon-element"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 neon-element"></div>
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-cyan-400 via-fuchsia-500 to-cyan-400 neon-element"></div>
                <div className="absolute top-0 bottom-0 right-0 w-[3px] bg-gradient-to-b from-cyan-400 via-fuchsia-500 to-cyan-400 neon-element"></div>
              </div>
            </Link>
          </div>
          
          {/* Text in Black */}
          <div className="text-center mt-8">
            <span className="text-lg font-bold text-black">HACK</span>
            <span className="mx-2 text-black">•</span>
            <span className="text-lg font-bold text-black">CODE</span>
            <span className="mx-2 text-black">•</span>
            <span className="text-lg font-bold text-black">INNOVATE</span>
          </div>
        </div>
      </div>

      {/* Team Section with Fixed Background */}
      <div className="relative h-[500px] bg-fixed bg-center bg-cover w-full" style={{ 
        backgroundImage: 'url("/images/orientation_2.JPG")' 
      }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-white mb-8 text-center">
            Get To Know The Team
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl text-center">
            Meet the passionate individuals who drive innovation and excellence at ACM NMIT
          </p>
          <a
            href="/community"
            className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-black transition-colors duration-300"
          >
            Meet Our Team <ChevronRight className="ml-2 h-6 w-6" />
          </a>
        </div>
      </div>

      {/* 5 Facts About ACM Section */}
      <div className="relative py-24 bg-gradient-to-b from-white to-gray-50 w-full overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Circular Layout Container */}
          <div className="relative h-[500px] sm:h-[600px] md:h-[700px] flex items-center justify-center">
            {/* Center Circle with ACM Title */}
            <div className="absolute z-20 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-xl flex items-center justify-center transform transition-all duration-500 hover:scale-110">
              <div className="text-center text-white p-2 sm:p-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">5 Facts</h2>
                <h3 className="text-sm sm:text-base md:text-lg font-bold">About ACM</h3>
              </div>
            </div>

            {/* Facts positioned in a circle */}
            {acmFacts.map((fact, index) => {
              const angle = (index * (360 / acmFacts.length)) * (Math.PI / 180);
              const radius = window.innerWidth < 640 ? 150 : window.innerWidth < 768 ? 200 : 250;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={index}
                  className="absolute z-10 w-32 sm:w-40 md:w-48 fact-card"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    transition: 'all 0.5s ease-out',
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 transform transition-all duration-500 hover:scale-110 hover:z-30">
                    <div className={`absolute inset-0 bg-gradient-to-br ${fact.color} opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
                    <p className="text-gray-700 text-center text-xs sm:text-sm md:text-base">{fact.description}</p>
                  </div>

                  {/* Connecting Line */}
                  <div
                    className="absolute top-1/2 left-1/2 h-0.5 origin-left z-0"
                    style={{
                      width: `${radius - 60}px`,
                      transform: `rotate(${angle * (180 / Math.PI) + 180}deg)`,
                      background: `linear-gradient(to right, ${fact.color.split(' ')[1]}, ${fact.color.split(' ')[3]})`,
                      opacity: 0.3
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-20"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;