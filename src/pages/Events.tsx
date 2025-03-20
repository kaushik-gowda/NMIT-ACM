import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, X, ExternalLink } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  description: string;
  image: string;
  location?: string;
  time?: string;
  attendees?: string;
  outcome?: string;
  registrationLink?: string;
  registrationDeadline?: string;
  fee?: string;
}

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const upcomingEvents = [
    {
      title: "Hackathon 2024",
      date: "March 15-16, 2024",
      description: "48-hour coding challenge to build innovative solutions. Join us for an exciting weekend of coding, learning, and winning amazing prizes!",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1331&h=1600",
      location: "Main Auditorium",
      time: "9:00 AM onwards",
      registrationLink: "https://forms.google.com/hackathon2024",
      registrationDeadline: "March 10, 2024",
      fee: "₹500 per team"
    },
    {
      title: "STAY TUNED",
      date: "",
      description: "",
      image: "/images/",
      location: "",
      time: "",
      registrationLink: "",
      registrationDeadline: "",
      fee: ""
    },
    {
      title: "STAY TUNED",
      date: "",
      description: "",
      image: "/images/",
      location: "",
      time: "",
      registrationLink: "",
      registrationDeadline: "",
      fee: ""
    }
  ];

  const pastEvents = [
    
    /**
    {
      title: "Coding Competition",
      date: "November 25, 2023",
      description: "Inter-college competitive programming contest",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1331&h=1600",
      attendees: "200+ participants",
      outcome: "5 winning teams awarded"
    },
    {
      title: "Tech Symposium 2023",
      date: "October 10, 2023",
      description: "Annual technical symposium featuring industry leaders",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1331&h=1600",
      attendees: "500+ attendees",
      outcome: "12 keynote speakers"
    },
    */
    {
      title: "Tech Talk on Cybersecurity and Blockchain",
      date: "March 11, 2025",
      description: "A tech talk on Cybersecurity and Blockchain, covering key threats, security strategies, and career insights.",
      image: "/images/cybersecurity_techtalk.jpg",
      attendees: "100+ participants",
      outcome: "Enhanced knowledge of cybersecurity, blockchain applications, and industry networking."
    },
    
    {
      title: "ACM NMIT Recruitment 2024",
      date: "December 13, 2024",
      location: "Room No.284, D-Block",
      description: "Join ACM @ NMIT and be part of a dynamic community where research, technology, and innovation converge",
      image: "/images/recruitment_2024.jpg",
      attendees: "70+ attendies",
      outcome: "Recruited 40+ members"
    },
  ];

  const EventModal = ({ event, onClose }: { event: Event; onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[500px] object-contain rounded-tl-2xl"
            />
          </div>
          
          <div className="p-8 md:w-1/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center text-gray-700 mb-2">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="font-medium">{event.date}</span>
                </div>
                {event.time && (
                  <p className="text-gray-600">⏰ {event.time}</p>
                )}
                {event.location && (
                  <p className="text-gray-600">📍 {event.location}</p>
                )}
              </div>
              
              <p className="text-gray-700">{event.description}</p>
              
              {event.attendees && (
                <p className="text-gray-600">👥 {event.attendees}</p>
              )}
              {event.outcome && (
                <p className="text-gray-600">🎯 {event.outcome}</p>
              )}

              {event.registrationLink && (
                <div className="mt-6 space-y-4">
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Registration Details</h4>
                    {event.registrationDeadline && (
                      <p className="text-gray-600 mb-2">
                        <span className="font-medium">Deadline:</span> {event.registrationDeadline}
                      </p>
                    )}
                    {event.fee && (
                      <p className="text-gray-600 mb-4">
                        <span className="font-medium">Fee:</span> {event.fee}
                      </p>
                    )}
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                    >
                      Register Now
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-24">
      {/* Hero Section */}        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Events</h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto">
            Join us for exciting tech events, workshops, and competitions
          </p>
        </div>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Don't miss out on these exciting opportunities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="relative h-[400px]">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-contain rounded-t-2xl"
                  />
                  <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm">
                    Upcoming
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex items-center text-black mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="text-sm text-gray-500">
                    <p>📍 {event.location}</p>
                    <p>⏰ {event.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Past Events</h2>
            <p className="text-lg text-gray-600">Relive our successful events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="md:flex">
                  <div className="md:w-2/5 h-[400px]">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-contain rounded-tl-2xl"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-black mb-2">{event.date}</p>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <p>👥 {event.attendees}</p>
                      <p>🎯 {event.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
};

export default Events;