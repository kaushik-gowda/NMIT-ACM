import React, { useState } from 'react';
import { Image, X, ChevronLeft, ChevronRight, Calendar, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Gallery sections with event names and images
  const gallerySections = [
    /**
    {
      id: "hackathon-2023",
      title: "Hackathon 2023",
      description: "48-hour coding challenge where teams built innovative solutions",
      images: [
        {
          url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1470",
          caption: "Winners celebrating their achievement"
        },
        {
          url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1470",
          caption: "Teams collaborating on projects"
        },
        {
          url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1470",
          caption: "Participants during brainstorming session"
        },
        {
          url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1470",
          caption: "Late night coding session"
        },
        {
          url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1470",
          caption: "Project presentations"
        }
      ]
    },
    {
      id: "tech-workshop-series",
      title: "Tech Workshop Series",
      description: "Hands-on workshops on cutting-edge technologies led by industry experts",
      images: [
        {
          url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1470",
          caption: "Web Development Workshop"
        },
        {
          url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1470",
          caption: "Machine Learning Workshop"
        },
        {
          url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1470",
          caption: "UI/UX Design Workshop"
        },
        {
          url: "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=1470",
          caption: "Cloud Computing Workshop"
        }
      ]
    },
    */
    {
      id: "Recruitment 2024",
      title: "Recruitment 2024",
      description: "Join ACM @ NMIT and be part of a dynamic community where research, technology, and innovation converge",
      images: [
        {
          url: "/images/recruitment_1.jpg",
          caption: ""
        },
        {
          url: "/images/recruitment_4.jpg",
          caption: ""
        },
        {
          url: "/images/recruitment_3.jpg",
          caption: ""
        },
        {
          url: "/images/recruitment_5.jpg",
          caption: ""
        },
        {
          url: "/images/recruitment_2.jpg",
          caption: ""
        }
      ]
    },

  ];

  // Image Viewer Modal
  const ImageModal = ({ url, onClose }: { url: string; onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
      >
        <X className="h-8 w-8" />
      </button>
      <div className="relative max-w-6xl max-h-[90vh] flex items-center justify-center">
        <img
          src={url}
          alt="Gallery image"
          className="max-w-full max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );

  return (
    <div className="pt-8">
      {/* Hero Section */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Camera className="h-16 w-16 text-white mx-auto mb-6 opacity-80" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Gallery</h1>
          <p className="h-20 text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto">
            Capturing moments of innovation, collaboration, and achievement
          </p>
        </div>

      {/* Gallery Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {gallerySections.map((section, sectionIndex) => (
          <section 
            key={section.id} 
            id={section.id}
            className={`mb-24 ${sectionIndex % 2 === 0 ? '' : 'bg-gray-50 py-16 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-3xl'}`}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
              <div>
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-indigo-600 mr-2" />
                  <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <p className="text-gray-600 max-w-2xl">{section.description}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium">
                  <Camera className="h-4 w-4 mr-2" />
                  {section.images.length} Photos
                </div>
              </div>
            </div>

            {/* Gallery Grid with Masonry-like Layout */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ${
              sectionIndex % 2 === 0 ? '' : 'xl:grid-cols-4'
            }`}>
              {section.images.map((image, index) => (
                <div 
                  key={index}
                  className={`relative group overflow-hidden rounded-xl shadow-lg ${
                    // Create masonry-like effect with different heights
                    index % 3 === 0 ? 'row-span-2' : ''
                  } ${
                    // Make first image larger on even-indexed sections
                    sectionIndex % 2 === 0 && index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                  style={{
                    height: index % 3 === 0 ? '400px' : '300px'
                  }}
                >
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onClick={() => setSelectedImage(image.url)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-white text-sm">{image.caption}</p>
                  </div>
                  
                  {/* Stylish Hover Effect */}
                  <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal url={selectedImage} onClose={() => setSelectedImage(null)} />
      )}

      {/* Floating Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg py-3 px-6 z-30">
        <div className="flex space-x-6">
          {gallerySections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              {section.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;