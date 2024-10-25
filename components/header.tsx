'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Circle } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-6`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between bg-black/50 rounded-full px-8 py-4 backdrop-blur-sm outline outline-white outline-1">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-white flex items-center gap-1"
          >
            KOMMA
            <Circle className="w-2 h-2 fill-current" />
          </button>

          {/* Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-white/80 transition-colors text-sm tracking-wider"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-white/80 transition-colors text-sm tracking-wider"
              >
                ABOUT US
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-white/80 transition-colors text-sm tracking-wider"
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollToSection('clients')}
                className="text-white hover:text-white/80 transition-colors text-sm tracking-wider"
              >
                CLIENTS
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-white hover:text-white/80 transition-colors text-sm tracking-wider"
              >
                PROJECTS
              </button>
              <button
                onClick={() => scrollToSection('insights')}
                className="text-white hover:text-white/80 transition-colors text-sm tracking-wider"
              >
                INSIGHTS
              </button>
            </div>
          </nav>

          {/* Contact Button */}
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-white text-black hover:bg-white/90 transition-colors rounded-full px-8 text-sm tracking-wider"
          >
            CONTACT US
          </Button>
        </div>
      </div>
    </header>
  );
}
