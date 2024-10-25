"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/nav-link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-black' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <button onClick={() => scrollToSection('home')} className="text-2xl font-bold text-white">
              KOMMA<span className="text-white">•</span>
            </button>
          </div>

          <nav className="hidden md:flex items-center">
            <div className="relative">
              <div className="flex items-center space-x-8 px-8 py-2 rounded-full border border-white/30">
                <button onClick={() => scrollToSection('home')} className="text-white hover:text-white/80 transition-colors">HOME</button>
                <button onClick={() => scrollToSection('about')} className="text-white hover:text-white/80 transition-colors">ABOUT US</button>
                <button onClick={() => scrollToSection('services')} className="text-white hover:text-white/80 transition-colors">SERVICES</button>
                <button onClick={() => scrollToSection('clients')} className="text-white hover:text-white/80 transition-colors">CLIENTS</button>
                <button onClick={() => scrollToSection('projects')} className="text-white hover:text-white/80 transition-colors">PROJECTS</button>
                <button onClick={() => scrollToSection('contact')} className="text-white hover:text-white/80 transition-colors">INSIGHTS</button>
              </div>
            </div>
          </nav>

          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline" 
            className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors"
          >
            CONTACT US
          </Button>
        </div>
      </div>
    </header>
  );
}