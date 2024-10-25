"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

export function Footer() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = [
    "Activation",
    "Public Relations",
    "Social Media",
    "Digital Content",
    "Other Enquiry"
  ];

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  return (
    <footer className="relative min-h-screen bg-black text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop')] 
        bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-light mb-4">
            LET'S HAVE A <span className="text-gray-400">DISCUSSION</span>
          </h2>
          <p className="text-xl text-gray-400">SHOOT US A MESSAGE</p>
        </div>

        <form className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Input Fields */}
            <div className="border-b border-white/30 pb-2">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent focus:outline-none text-white placeholder:text-white/60"
              />
            </div>
            
            <div className="border-b border-white/30 pb-2">
              <input
                type="tel"
                placeholder="Phone"
                className="w-full bg-transparent focus:outline-none text-white placeholder:text-white/60"
              />
            </div>
            
            <div className="border-b border-white/30 pb-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent focus:outline-none text-white placeholder:text-white/60"
              />
            </div>
          </div>

          {/* Services Selection */}
          <div className="mt-12">
            <div className="border-b border-white/30 pb-2 mb-4">
              <p className="text-white/60">What would you like to know</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {services.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <div className={`w-5 h-5 rounded-full border ${
                    selectedServices.includes(service)
                      ? 'border-white bg-white'
                      : 'border-white/30'
                  } flex items-center justify-center transition-colors`}>
                    {selectedServices.includes(service) && (
                      <div className="w-2 h-2 rounded-full bg-black" />
                    )}
                  </div>
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                    {service}
                  </span>
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={selectedServices.includes(service)}
                    onChange={() => toggleService(service)}
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-12">
            <Button 
              type="submit"
              className="bg-white text-black rounded-full px-8 hover:bg-white/90 transition-colors"
            >
              Submit
            </Button>
          </div>
        </form>

        {/* Footer Info */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-400">
          <div>
            <h3 className="text-white mb-4">KOMMA PROJECT</h3>
            <p className="mb-2">Puri Matari 1</p>
            <p className="mb-2">Jl. HR Rasuna Said Kav H1-2, M2 Floor</p>
            <p>Setabudi, Jakarta Selatan 12920</p>
          </div>
          
          <div>
            <p className="mb-2">E: PR@KOMMAPROJECT.ID</p>
            <p>P: +62 812 820 120</p>
          </div>

          <div className="flex justify-start md:justify-end items-start">
            <a 
              href="https://instagram.com/KOMMAPROJECTID" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>KOMMAPROJECTID</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}