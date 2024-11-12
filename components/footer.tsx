"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

export function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [errors, setErrors] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [hasSubmitError, setHasSubmitError] = useState(false);

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

  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'name' && value.trim() === '') {
      error = 'Name is required';
    }
    if (name === 'phone' && !/^\d+$/.test(value)) {
      error = 'Phone must be numeric';
    }
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Email is invalid';
    }
    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHasSubmitError(false);

    // Validate all fields before submitting
    validateField('name', formData.name);
    validateField('phone', formData.phone);
    validateField('email', formData.email);

    // Check if there are any errors
    if (errors.name || errors.phone || errors.email) {
      setIsSubmitting(false);
      setHasSubmitError(true);
      return;
    }

    // Perform AJAX submission
    // (Existing submission code here)
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, services: selectedServices }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        // Reset form
        setFormData({ name: '', phone: '', email: '' });
        setSelectedServices([]);
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
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

        <form className="max-w-3xl mx-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Input Fields */}
            <div className="border-b border-white/30 pb-2">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-transparent focus:outline-none text-white placeholder:text-white/60 ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="border-b border-white/30 pb-2">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full bg-transparent focus:outline-none text-white placeholder:text-white/60 ${errors.phone ? 'border-red-500' : ''}`}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <div className="border-b border-white/30 pb-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-transparent focus:outline-none text-white placeholder:text-white/60 ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
                  <div className={`w-5 h-5 rounded-full border ${selectedServices.includes(service)
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
              className={`rounded-full px-8 hover:bg-white/90 transition-colors ${submitSuccess ? 'animate-bounce' : ''} ${hasSubmitError ? 'bg-red-500 text-white' : 'bg-white text-black'}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
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