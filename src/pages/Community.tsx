import React from 'react';
import { UserCircle2, Users, Crown, Code2, Palette, Calendar, Globe2, GraduationCap, Linkedin, Instagram, Github, Mail } from 'lucide-react';

const Community = () => {
  return (
    <div className="pt-28">
      {/* Hero Section */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet The Crew</h1>
        </div>
      

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Faculty Incharge Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">Faculty Incharge</h2>
            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Palanivel Ramaswamy",
                  designation: "Assistant Professor",
                  description: "Seasoned professional with 15+ years of expertise in Healthcare Data Analytics, Digital Marketing, Data Science, Cyber Security, Wireless Communication, IoT, and Social Media Analysis.",
                  image: "/images/palanivel_sir.jpg",
                  icon: <GraduationCap className="w-6 h-6" />,
                  social: {
                    linkedin: "https://www.linkedin.com/in/masterpalanivel/",
                    email: "mailto:palanivel.r@nmit.ac.in"
                  }
                },
                {
                  name: "Sowmya M",
                  designation: "Assistant Professor",
                  description: "Experienced researcher with 13+ years of expertise in Computer Networks, IoT, Wireless Sensor Networks, Software Engineering, Cyber Security, AI, and Machine Learning.",
                  image: "/images/sowmya_mam.jpg",
                  icon: <GraduationCap className="w-6 h-6" />,
                  social: {
                    linkedin: "",
                    email: "mailto:Sowmya.m@nmit.ac.in"
                  }
                }
              ].map((faculty, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <img 
                      src={faculty.image} 
                      alt={faculty.name}
                      className="w-24 h-24 rounded-full object-cover mr-6"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{faculty.name}</h3>
                      <p className="text-blue-600">{faculty.designation}</p>
                      
                      {/* Social Media Links */}
                      <div className="flex mt-2 space-x-3">
                        <a 
                          href={faculty.social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                          aria-label={`${faculty.name}'s LinkedIn`}
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a 
                          href={faculty.social.email}
                          className="text-gray-600 hover:text-red-600 transition-colors"
                          aria-label={`Email ${faculty.name}`}
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{faculty.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Office Bearers Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">Office Bearers</h2>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "abc",
                    role: "President",
                    description: "Leading the community initiatives and strategic planning.",
                    image: "",
                    icon: <Crown className="w-6 h-6" />,
                    social: {
                      linkedin: "https://linkedin.com/in/alexthompson",
                      instagram: "https://instagram.com/alexthompson",
                      github: "https://github.com/alexthompson",
                      email: "mailto:alex.thompson@acm.nmit.ac.in"
                    }
                  },
                  {
                    name: "Sameer Gupta",
                    role: "Vice President",
                    description: "Supporting community operations and member engagement.",
                    image: "/images/sameer_gupta.jpg",
                    icon: <UserCircle2 className="w-6 h-6" />,
                    social: {
                      linkedin: "https://linkedin.com/in/emilyrodriguez",
                      instagram: "https://instagram.com/emilyrodriguez",
                      github: "https://github.com/emilyrodriguez",
                      email: "mailto:emily.rodriguez@acm.nmit.ac.in"
                    }
                  },
                  {
                    name: "hij",
                    role: "Treasurer",
                    description: "Managing financial planning and budget allocation.",
                    image: "",
                    icon: <Users className="w-6 h-6" />,
                    social: {
                      linkedin: "https://linkedin.com/in/davidkim",
                      instagram: "https://instagram.com/davidkim",
                      github: "https://github.com/davidkim",
                      email: "mailto:david.kim@acm.nmit.ac.in"
                    }
                  }
                ].map((bearer, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
                    <div className="flex flex-col items-center mb-4">
                      <img 
                        src={bearer.image} 
                        alt={bearer.name}
                        className="w-32 h-32 rounded-full object-cover mb-4"
                      />
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-gray-900">{bearer.name}</h3>
                        <p className="text-green-600">{bearer.role}</p>
                        
                        {/* Social Media Links */}
                        <div className="flex justify-center mt-3 space-x-4">
                          <a 
                            href={bearer.social.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                            aria-label={`${bearer.name}'s LinkedIn`}
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                          <a 
                            href={bearer.social.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-pink-600 transition-colors"
                            aria-label={`${bearer.name}'s Instagram`}
                          >
                            <Instagram className="w-5 h-5" />
                          </a>
                          <a 
                            href={bearer.social.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-black transition-colors"
                            aria-label={`${bearer.name}'s GitHub`}
                          >
                            <Github className="w-5 h-5" />
                          </a>
                          <a 
                            href={bearer.social.email}
                            className="text-gray-600 hover:text-red-600 transition-colors"
                            aria-label={`Email ${bearer.name}`}
                          >
                            <Mail className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-center">{bearer.description}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    name: "mno",
                    role: "Secretary",
                    description: "Coordinating communications and documentation.",
                    image: "",
                    icon: <Users className="w-6 h-6" />,
                    social: {
                      linkedin: "https://linkedin.com/in/sophiechen",
                      instagram: "https://instagram.com/sophiechen",
                      github: "https://github.com/sophiechen",
                      email: "mailto:sophie.chen@acm.nmit.ac.in"
                    }
                  },
                  {
                    name: "Kaushik P",
                    role: "Webmaster",
                    description: "Managing digital presence and technical infrastructure.",
                    image: "/images/kaushik_p.jpg",
                    icon: <Code2 className="w-6 h-6" />,
                    social: {
                      linkedin: "https://linkedin.com/in/jameswilson",
                      instagram: "https://instagram.com/jameswilson",
                      github: "https://github.com/jameswilson",
                      email: "mailto:james.wilson@acm.nmit.ac.in"
                    }
                  }
                ].map((bearer, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
                    <div className="flex flex-col items-center mb-4">
                      <img 
                        src={bearer.image} 
                        alt={bearer.name}
                        className="w-32 h-32 rounded-full object-cover mb-4"
                      />
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-gray-900">{bearer.name}</h3>
                        <p className="text-green-600">{bearer.role}</p>
                        
                        {/* Social Media Links */}
                        <div className="flex justify-center mt-3 space-x-4">
                          <a 
                            href={bearer.social.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                            aria-label={`${bearer.name}'s LinkedIn`}
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                          <a 
                            href={bearer.social.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-pink-600 transition-colors"
                            aria-label={`${bearer.name}'s Instagram`}
                          >
                            <Instagram className="w-5 h-5" />
                          </a>
                          <a 
                            href={bearer.social.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-black transition-colors"
                            aria-label={`${bearer.name}'s GitHub`}
                          >
                            <Github className="w-5 h-5" />
                          </a>
                          <a 
                            href={bearer.social.email}
                            className="text-gray-600 hover:text-red-600 transition-colors"
                            aria-label={`Email ${bearer.name}`}
                          >
                            <Mail className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-center">{bearer.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Heads Section */}
          <div>
            <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">Team Heads</h2>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  {
                    name: "Gautam V",
                    role: "Tech Lead",
                    description: "Leading technical initiatives",
                    image: "/images/gautam_v.jpg",
                    icon: <Code2 className="w-6 h-6" />,
                    social: {
                      linkedin: "https://linkedin.com/in/ryanpark",
                      instagram: "https://instagram.com/ryanpark",
                      github: "https://github.com/ryanpark",
                      email: "mailto:ryan.park@acm.nmit.ac.in"
                    }
                  },
                  {
                    name: "Amruthamsha P Raju",
                    role: "Research Head",
                    description: "Managing research projects",
                    image: "/images/amruthamsha_raju.jpg",
                    icon: <Palette className="w-6 h-6" />,
                    social: {
                      linkedin: "https://linkedin.com/in/lisawang",
                      instagram: "https://instagram.com/lisawang",
                      github: "https://github.com/lisawang",
                      email: "mailto:lisa.wang@acm.nmit.ac.in"
                    }
                  },
                  {
                    name: "Disha R",
                    role: "Events Head",
                    description: "Coordinating community events",
                    image: "/images/disha_r.jpg",
                    icon: <Calendar className="w-6 h-6" />,
                    social: {
                      linkedin: "https://linkedin.com/in/markjohnson",
                      instagram: "https://instagram.com/markjohnson",
                      github: "https://github.com/markjohnson",
                      email: "mailto:mark.johnson@acm.nmit.ac.in"
                    }
                  },
                  {
                    name: "Vaishalli Ravikumar",
                    role: "Design Head",
                    description: "Overseeing visual identity",
                    image: "/images/vaishalli_ravikumar.jpg",
                    icon: <Globe2 className="w-6 h-6" />,
                    social: {
                      linkedin: "https://linkedin.com/in/annasmith",
                      instagram: "https://instagram.com/annasmith",
                      github: "https://github.com/annasmith",
                      email: "mailto:anna.smith@acm.nmit.ac.in"
                    }
                  },
                  {
                    name: "Praviksha R Shetty",
                    role: "Social media Head",
                    description: "Managing online presence",
                    image: "/images/praviksha_shetty.jpg",
                    icon: <Users className="w-6 h-6" />,
                    social: {
                      linkedin: "https://linkedin.com/in/tombrown",
                      instagram: "https://instagram.com/tombrown",
                      github: "https://github.com/tombrown",
                      email: "mailto:tom.brown@acm.nmit.ac.in"
                    }
                  }
                ].map((head, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-4 transform transition-all duration-300 hover:scale-105">
                    <div className="flex flex-col items-center text-center">
                      <img 
                        src={head.image} 
                        alt={head.name}
                        className="w-24 h-24 rounded-full object-cover mb-4"
                      />
                      <h3 className="text-lg font-semibold text-gray-900">{head.name}</h3>
                      <p className="text-purple-600 text-sm">{head.role}</p>
                      <p className="text-gray-600 text-sm mt-2">{head.description}</p>
                      
                      {/* Social Media Links */}
                      <div className="flex justify-center mt-3 space-x-3">
                        <a 
                          href={head.social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                          aria-label={`${head.name}'s LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a 
                          href={head.social.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-pink-600 transition-colors"
                          aria-label={`${head.name}'s Instagram`}
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                        <a 
                          href={head.social.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-black transition-colors"
                          aria-label={`${head.name}'s GitHub`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a 
                          href={head.social.email}
                          className="text-gray-600 hover:text-red-600 transition-colors"
                          aria-label={`Email ${head.name}`}
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  {
                    name: "Chaithanya V K",
                    role: "Marketing Head",
                    description: "Leading marketing initiatives",
                    image: "/images/chaithanya_vk.jpg",
                    icon: <Users className="w-6 h-6" />,
                    social: {
                      linkedin: "https://linkedin.com/in/sarahlee",
                      instagram: "https://instagram.com/sarahlee",
                      github: "https://github.com/sarahlee",
                      email: "mailto:sarah.lee@acm.nmit.ac.in"
                    }
                  },
                  {
                    name: "abc",
                    role: "PR Head",
                    description: "Building brand reputation",
                    image: "",
                    icon: <Users className="w-6 h-6" />,
                    social: {
                      linkedin: "https://linkedin.com/in/mikedavis",
                      instagram: "https://instagram.com/mikedavis",
                      github: "https://github.com/mikedavis",
                      email: "mailto:mike.davis@acm.nmit.ac.in"
                    }
                  },
                  {
                    name: "Vaishnavi Pasodi",
                    role: "Documentation Head",
                    description: "Ensuring structured records",
                    image: "/images/vaishnavi_pasodi.jpg",
                    icon: <Users className="w-6 h-6" />,
                    social: {
                      linkedin: "https://linkedin.com/in/rachelgreen",
                      instagram: "https://instagram.com/rachelgreen",
                      github: "https://github.com/rachelgreen",
                      email: "mailto:rachel.green@acm.nmit.ac.in"
                    }
                  },
                  {
                    name: "Srusti",
                    role: "Sponsorship Head",
                    description: "Securing strategic partnerships",
                    image: "/images/srusti.jpg",
                    icon: <Users className="w-6 h-6" />,
                    social: {
                      linkedin: "https://linkedin.com/in/christaylor",
                      instagram: "https://instagram.com/christaylor",
                      github: "https://github.com/christaylor",
                      email: "mailto:chris.taylor@acm.nmit.ac.in"
                    }
                  },
                  {
                    name: "mno",
                    role: "Volunteer Head",
                    description: "Coordinating community efforts",
                    image: "",
                    icon: <Users className="w-6 h-6" />,
                    social: {
                      linkedin: "https://linkedin.com/in/emmawilson",
                      instagram: "https://instagram.com/emmawilson",
                      github: "https://github.com/emmawilson",
                      email: "mailto:emma.wilson@acm.nmit.ac.in"
                    }
                  }
                ].map((head, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-4 transform transition-all duration-300 hover:scale-105">
                    <div className="flex flex-col items-center text-center">
                      <img 
                        src={head.image} 
                        alt={head.name}
                        className="w-24 h-24 rounded-full object-cover mb-4"
                      />
                      <h3 className="text-lg font-semibold text-gray-900">{head.name}</h3>
                      <p className="text-purple-600 text-sm">{head.role}</p>
                      <p className="text-gray-600 text-sm mt-2">{head.description}</p>
                      
                      {/* Social Media Links */}
                      <div className="flex justify-center mt-3 space-x-3">
                        <a 
                          href={head.social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                          aria-label={`${head.name}'s LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a 
                          href={head.social.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-pink-600 transition-colors"
                          aria-label={`${head.name}'s Instagram`}
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                        <a 
                          href={head.social.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-black transition-colors"
                          aria-label={`${head.name}'s GitHub`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a 
                          href={head.social.email}
                          className="text-gray-600 hover:text-red-600 transition-colors"
                          aria-label={`Email ${head.name}`}
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;