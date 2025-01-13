import React, { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';

const ServiceShowcase = ({ isDarkTheme }) => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "3D Sign",
      description: "Custom 3D signage solutions for maximum visual impact and brand presence",
      icon: "🎨",
      color: "from-rose-500 to-pink-500",
      features: ['Custom Design', 'Material Selection', '3D Modeling', 'Installation']
    },
    {
      title: "LED Sign",
      description: "Energy-efficient LED signage that brings your brand to life",
      icon: "💡",
      color: "from-blue-500 to-cyan-500",
      features: ['Energy Efficient', 'Custom Animation', 'Remote Control', 'Weather Resistant']
    },
    {
      title: "Package Design",
      description: "Innovative packaging solutions that make your product stand out",
      icon: "📦",
      color: "from-purple-500 to-violet-500",
      features: ['Custom Packaging', 'Material Design', 'Prototype Testing', 'Eco-friendly Options']
    },
    {
      title: "Creative Design",
      description: "Stunning visual designs that capture attention and convey your message",
      icon: "✨",
      color: "from-amber-500 to-orange-500",
      features: ['Brand Identity', 'Visual Strategy', 'Digital Assets', 'Print Design']
    },
    {
      title: "Photography",
      description: "Professional photography services that showcase your brand",
      icon: "📸",
      color: "from-green-500 to-emerald-500",
      features: ['Product Photos', 'Event Coverage', 'Retouching', 'Studio Sessions']
    },
    {
      title: "Direction Sign",
      description: "Clear and effective wayfinding solutions for any space",
      icon: "🎯",
      color: "from-indigo-500 to-violet-500",
      features: ['Wayfinding Design', 'ADA Compliance', 'Material Selection', 'Installation']
    }
  ];

  const ServiceCard = ({ service }) => (
    <div
      className={`p-6 rounded-xl bg-gradient-to-r ${service.color} 
      shadow-lg hover:shadow-xl transition-all duration-300
      ${isDarkTheme ? 'backdrop-blur-lg bg-opacity-90' : 'backdrop-blur-md bg-opacity-80'}
      cursor-pointer`}
      onClick={() => setSelectedService(service)}
    >
      <div className="text-4xl mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">
        {service.title}
      </h3>
      <p className="text-white/80">
        {service.description}
      </p>
    </div>
  );

  const Modal = ({ service, onClose }) => (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-lg p-6 rounded-2xl bg-gradient-to-r ${service.color} shadow-xl`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center mb-6">
          <span className="text-4xl mr-4">{service.icon}</span>
          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
        </div>

        <p className="text-white/90 mb-6">
          {service.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {service.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center space-x-2"
            >
              <ChevronRight className="w-4 h-4 text-white/80" />
              <span className="text-white/90">{feature}</span>
            </div>
          ))}
        </div>

        <button
          className="w-full py-3 px-6 bg-white/20 hover:bg-white/30 rounded-lg text-white font-semibold backdrop-blur-sm transition-colors"
        >
          Learn More
        </button>
      </div>
    </div>
  );

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
            Signage & Digital Printing
          </h2>
          <p className={`text-lg ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
            Our experience and professionalism contribute to the printing service development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {selectedService && (
          <Modal service={selectedService} onClose={() => setSelectedService(null)} />
        )}
      </div>
    </div>
  );
};

export default ServiceShowcase;