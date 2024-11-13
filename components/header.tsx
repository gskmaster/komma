'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Circle, Menu, X } from 'lucide-react'; // Import Menu and X icons

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-6 ${isScrolled ? 'bg-black/80' : 'bg-transparent'}`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between bg-black/50 rounded-full px-8 py-4 backdrop-blur-sm outline outline-white outline-1">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-white flex items-center gap-1"
          >
            KOMMA
            <Circle className="w-2 h-2 fill-current" />
          </button>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Navigation */}
          <nav className={`hidden md:block`}>
            <div className="flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-white/80 transition-colors text-sm tracking-wider">HOME</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-white/80 transition-colors text-sm tracking-wider">ABOUT US</button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-white/80 transition-colors text-sm tracking-wider">SERVICES</button>
              <button onClick={() => scrollToSection('clients')} className="text-white hover:text-white/80 transition-colors text-sm tracking-wider">CLIENTS</button>
              <button onClick={() => scrollToSection('projects')} className="text-white hover:text-white/80 transition-colors text-sm tracking-wider">PROJECTS</button>
              <button onClick={() => scrollToSection('insights')} className="text-white hover:text-white/80 transition-colors text-sm tracking-wider">INSIGHTS</button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="absolute top-full left-0 right-0 bg-black/80 rounded-lg shadow-lg mt-2 md:hidden">
              <div className="flex flex-col items-center space-y-2 p-4">
                <button onClick={() => scrollToSection('home')} className="text-white hover:text-white/80 transition-colors text-sm tracking-wider">HOME</button>
                <button onClick={() => scrollToSection('about')} className="text-white hover:text-white/80 transition-colors text-sm tracking-wider">ABOUT US</button>
                <button onClick={() => scrollToSection('services')} className="text-white hover:text-white/80 transition-colors text-sm tracking-wider">SERVICES</button>
                <button onClick={() => scrollToSection('clients')} className="text-white hover:text-white/80 transition-colors text-sm tracking-wider">CLIENTS</button>
                <button onClick={() => scrollToSection('projects')} className="text-white hover:text-white/80 transition-colors text-sm tracking-wider">PROJECTS</button>
                {/* <button onClick={() => scrollToSection('insights')} className="text-white hover:text-white/80 transition-colors text-sm tracking-wider">INSIGHTS</button> */}
                
                {/* Contact Button in Mobile Menu */}
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-black hover:bg-white/90 transition-colors rounded-full px-8 text-sm tracking-wider"
                >
                  CONTACT US
                </Button>
              </div>
            </nav>
          )}

          {/* Contact Button for Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-black hover:bg-white/90 transition-colors rounded-full px-8 text-sm tracking-wider"
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}