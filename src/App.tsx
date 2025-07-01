import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Beyond Career - Where Dreams Find Direction';
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup function
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">BC</span>
            </div>
            <span className="text-xl font-bold">Beyond Career</span>
          </div>
          <p className="text-gray-400 mb-4">
            Empowering students to achieve their career dreams through guidance, opportunities, and community.
          </p>
          <div className="text-gray-500 text-sm">
            © 2025 Beyond Career. All rights reserved. | Founded by IIT Kharagpur Students
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;