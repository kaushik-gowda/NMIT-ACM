import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/5 backdrop-blur-sm">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-4">
            <a 
              href="https://nmit.ac.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/images/nmit_logo.png" 
                alt="NMIT Logo" 
                className="h-16 w-auto"
              />
            </a>
            <a 
              href="" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/images/acmnmit_logo.png" 
                alt="ACM Logo" 
                className="h-20 w-auto"
              />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`relative text-black hover:text-gray-600 transition-colors
              ${isActive('/') ? 'text-gray-600' : ''} 
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all 
              after:duration-300 hover:after:w-full`}
            >
              HOME
            </Link>
            <Link 
              to="/events" 
              className={`relative text-black hover:text-gray-600 transition-colors 
              ${isActive('/events') ? 'text-gray-600' : ''} 
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all 
              after:duration-300 hover:after:w-full`}
            >
              EVENTS
            </Link>

            <Link 
              to="/community" 
              className={`relative text-black hover:text-gray-600 transition-colors 
              ${isActive('/community') ? 'text-gray-600' : ''} 
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all 
              after:duration-300 hover:after:w-full`}
            >
              OUR COMMUNITY
            </Link>

            <Link 
              to="/gallery" 
              className={`relative text-black hover:text-gray-600 transition-colors 
              ${isActive('/gallery') ? 'text-gray-600' : ''} 
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all 
              after:duration-300 hover:after:w-full`}
            >
              GALLERY
            </Link>

            <Link 
              to="/sponsors" 
              className={`relative text-black hover:text-gray-600 transition-colors 
              ${isActive('/sponsors') ? 'text-gray-600' : ''} 
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all 
              after:duration-300 hover:after:w-full`}
            >
              SPONSORS
            </Link>

            <Link 
              to="/contact" 
              className={`relative text-black hover:text-gray-600 transition-colors 
              ${isActive('/contact') ? 'text-gray-600' : ''} 
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all 
              after:duration-300 hover:after:w-full`}
            >
              CONTACT
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-sm">
            <Link to="/" className="block px-3 py-2 text-black hover:text-gray-600 transition-colors">HOME</Link>
            <Link to="/events" className="block px-3 py-2 text-black hover:text-gray-600 transition-colors">EVENTS</Link>
            <Link to="/community" className="block px-3 py-2 text-black hover:text-gray-600 transition-colors">OUR COMMUNITY</Link>
            <Link to="/gallery" className="block px-3 py-2 text-black hover:text-gray-600 transition-colors">GALLERY</Link>
            <Link to="/sponsors" className="block px-3 py-2 text-black hover:text-gray-600 transition-colors">SPONSORS</Link>
            <Link to="/contact" className="block px-3 py-2 text-black hover:text-gray-600 transition-colors">CONTACT</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;