import React from 'react';
import { Instagram, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 relative z-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
          {/* Get In Touch Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <a 
                href="https://www.instagram.com/acm_nmit" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/acm-nmit" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://wa.me/+919876543210" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="mailto:acm@nmit.ac.in" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Department Info Section */}
          <div className="text-center flex flex-col justify-center">
            <h3 className="text-xl font-bold px-4">Department of Artificial Intelligence and Data Science, NMIT</h3>
            <p className="text-gray-400 italic mt-4">
              "Turning data into intelligence, fueling innovation"
            </p>
          </div>

          {/* Location Section */}
          <div className="space-y-4 lg:text-right">
            <h3 className="text-2xl font-bold mb-6">Where to find us</h3>
            <div className="flex flex-col lg:items-end space-y-2">
              <a 
                href="https://goo.gl/maps/YOUR_LOCATION_LINK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
              >
                <MapPin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <p className="font-semibold">NMIT, Yelahanka</p>
              </a>
              <p className="text-gray-300">Bengaluru, Karnataka, 560064</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="text-sm sm:text-base">Powered by ACM Student Chapter, NMIT Bengaluru | Copyright © 2025 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;