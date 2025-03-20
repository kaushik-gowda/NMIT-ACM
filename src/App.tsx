import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Community from './pages/Community';
import Gallery from './pages/Gallery';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center">
        <div className="relative">
          <div className="preloader-logo-glow"></div>
          <img 
            src="/images/acmnmit_logo.png" 
            alt="ACM NMIT Logo" 
            className="w-64 h-64 preloader-logo"
          />
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community" element={<Community />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;