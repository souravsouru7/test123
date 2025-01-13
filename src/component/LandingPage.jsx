import React, { useState, useEffect } from 'react';
import { Camera, Paintbrush, Video, Globe, Trophy, Target, Lightbulb, Palette, PenTool, Users, ChevronRight, Play, ArrowRight, Star, Award, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import LatestWorks from './again/LatestWorks';
import ServiceShowcase from './again/ServiceShowcase';
import Footer from './Footer';

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('digital');
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const words = "We are delighted to describe what we Do!".split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hover: {
      scale: 1.05,
      rotate: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
      },
    },
    tap: {
      scale: 0.95,
      rotate: 0,
    },
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  const services = [
    { 
      name: 'Digital Marketing', 
      icon: Globe, 
      color: 'from-blue-500 to-cyan-500',
      description: 'Strategic online marketing solutions to boost your brand visibility and drive results.',
      features: ['SEO Optimization', 'PPC Campaigns', 'Content Marketing', 'Analytics & Reporting']
    },
    { 
      name: 'Brand Design', 
      icon: Paintbrush, 
      color: 'from-purple-500 to-pink-500',
      description: 'Creative branding solutions that tell your story and capture your audience.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy']
    },
    { 
      name: 'Video Production', 
      icon: Video, 
      color: 'from-red-500 to-orange-500',
      description: 'Professional video content that engages and inspires your audience.',
      features: ['Commercial Videos', 'Social Media Content', 'Motion Graphics', 'Video Editing']
    },
    { 
      name: 'Social Media', 
      icon: Users, 
      color: 'from-green-500 to-emerald-500',
      description: 'Comprehensive social media management to build your online presence.',
      features: ['Content Creation', 'Community Management', 'Social Strategy', 'Analytics']
    },
    { 
      name: 'UI/UX Design', 
      icon: PenTool, 
      color: 'from-yellow-500 to-amber-500',
      description: 'User-centered design solutions for digital products and services.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing']
    },
    { 
      name: 'Creative Strategy', 
      icon: Lightbulb, 
      color: 'from-indigo-500 to-violet-500',
      description: 'Strategic creative solutions to solve complex business challenges.',
      features: ['Market Research', 'Campaign Planning', 'Creative Direction', 'Brand Positioning']
    }
  ];

  const ServiceCard = ({ service, index, onClick }) => (
    <motion.div
      className={`
        absolute left-1/2 top-1/2 
        w-full max-w-[280px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[280px]
        transform-gpu perspective-1000
        -translate-x-1/2 -translate-y-1/2
      `}
      style={{
        transform: `
          rotate(${index * 60}deg)
          translateY(-${window.innerWidth < 480 ? '80px' : window.innerWidth < 640 ? '120px' : '140px'})
          scale(${window.innerWidth < 480 ? 0.5 : window.innerWidth < 640 ? 0.65 : window.innerWidth < 768 ? 0.8 : 1})
        `,
        zIndex: selectedService === service ? 50 : 1
      }}
    >
      <motion.div
        className={`
          p-4 sm:p-6 rounded-xl backdrop-blur-md
          bg-gradient-to-r ${service.color}
          cursor-pointer shadow-lg
          rotate-[-${index * 60}deg]
          hover:shadow-xl transition-shadow duration-300
        `}
        variants={cardVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={onClick}
        style={{
          animation: `float ${3 + index}s infinite ${index * 0.5}s`
        }}
      >
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <service.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 text-white" />
        </motion.div>
        <h3 className="font-semibold text-sm sm:text-lg text-white">{service.name}</h3>
      </motion.div>
    </motion.div>
  );
  
  const ServiceModal = ({ service, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
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
          <service.icon className="w-10 h-10 text-white mr-4" />
          <h3 className="text-2xl font-bold text-white">{service.name}</h3>
        </div>

        <p className="text-white/90 mb-6">{service.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-2"
            >
              <ChevronRight className="w-4 h-4 text-white/80 flex-shrink-0" />
              <span className="text-white/90">{feature}</span>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 w-full py-3 px-6 bg-white/20 hover:bg-white/30 rounded-lg text-white font-semibold backdrop-blur-sm transition-colors"
        >
          Learn More
        </motion.button>
      </motion.div>
    </motion.div>
  );

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-slate-900'} transition-colors duration-500`}>
     

      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <Navbar 
        isDarkTheme={isDarkTheme}
        toggleTheme={toggleTheme}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
     
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`
              absolute w-32 sm:w-64 h-32 sm:h-64 rounded-full 
              ${isDarkTheme ? 'opacity-30' : 'opacity-20'}
              blur-3xl
            `}
            style={{
              background: `radial-gradient(circle, ${i === 0 ? 'rgba(244,63,94,0.3)' :
                i === 1 ? 'rgba(99,102,241,0.3)' :
                  'rgba(236,72,153,0.3)'
                } 0%, transparent 70%)`,
              left: `${i * 30}%`,
              top: `${i * 20}%`,
              transform: `translate(-50%, -50%) rotate(${scrollY * 0.1}deg)`,
              animation: `float-${i} ${8 + i * 2}s infinite`
            }}
          />
        ))}

        {isDarkTheme && [...Array(30)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5,
              animation: `twinkle ${2 + Math.random() * 4}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center perspective-1000 pt-20 px-4">
     
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className="space-y-6 sm:space-y-8 transform transition-transform duration-300"
              style={{
                transform: `
                  translateZ(${50 + mousePosition.y * 0.5}px)
                  rotateX(${mousePosition.y * 0.05}deg)
                  rotateY(${mousePosition.x * 0.05}deg)
                `
              }}
            >
              <div className="relative">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap gap-x-4"
                  >
                    {words.map((word, index) => (
                      <motion.span
                        key={index}
                        variants={item}
                        className="inline-block transform hover:scale-110 transition-all duration-300
                         hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 to-violet-500
                         cursor-pointer"
                        whileHover={{
                          rotate: [-2, 2, -2],
                          transition: {
                            duration: 0.5,
                            repeat: Infinity,
                          },
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.div>
                </h1>
                <div className="absolute -top-4 -left-4 w-12 sm:w-20 h-12 sm:h-20 border-t-2 border-l-2 border-blue-500 animate-pulse" />
                <div className="absolute -bottom-4 -right-4 w-12 sm:w-20 h-12 sm:h-20 border-b-2 border-r-2 border-rose-500 animate-pulse" />
              </div>

              <p className={`text-base sm:text-lg md:text-xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} leading-relaxed animate-fade-in max-w-2xl`}>
                is one of the leading Advertising Agency Sharja,
                Dubai. We're unique and highly cost effective.
                Join our Amazing online classes
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up">
                <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/25 w-full sm:w-auto">
                  <span className="relative z-10 flex items-center justify-center font-semibold text-white">
                    Start Project
                    <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <button className={`group relative px-6 sm:px-8 py-3 sm:py-4 border-2 ${isDarkTheme ? 'border-white/20' : 'border-slate-200'} rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300 hover:border-rose-500 w-full sm:w-auto`}>
                  <span className="relative z-10 flex items-center justify-center font-semibold">
                    Our Showreel
                    <Play className="ml-2 w-4 h-4 transform group-hover:scale-110 transition-transform" />
                  </span></button>
              </div>
            </div>

            {/* Right - Services Showcase */}
            <div className="relative h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mt-8 sm:mt-12 md:mt-0">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.name}
                  service={service}
                  index={index}
                  onClick={() => setSelectedService(service)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal 
            service={selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        )}
      </AnimatePresence>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) rotate(0); 
          }
          50% { 
            transform: translateY(-20px) rotate(5deg); 
          }
        }

        @keyframes float-0 {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1); 
          }
          50% { 
            transform: translate(-50%, -60%) scale(1.1); 
          }
        }

        @keyframes float-1 {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1.1); 
          }
          50% { 
            transform: translate(-60%, -50%) scale(1); 
          }
        }

        @keyframes float-2 {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1); 
          }
          50% { 
            transform: translate(-40%, -60%) scale(1.1); 
          }
        }

        @keyframes twinkle {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0.5); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1); 
          }
        }

        @keyframes spin-slow {
          from { 
            transform: rotate(0deg); 
          }
          to { 
            transform: rotate(360deg); 
          }
        }

        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.3; 
          }
          50% { 
            transform: scale(1.1); 
            opacity: 0.1; 
          }
        }

        @keyframes animate-fade-in {
          from { 
            opacity: 0; 
          }
          to { 
            opacity: 1; 
          }
        }

        @keyframes animate-fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: animate-fade-in 0.5s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: animate-fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        @media (max-width: 640px) {
          .perspective-1000 {
            perspective: 500px;
          }
        }
            @media (max-width: 480px) {
    .perspective-1000 {
      perspective: 400px;
    }
  }
      @media (min-width: 481px) and (max-width: 640px) {
    .perspective-1000 {
      perspective: 500px;
    }
  }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
          

      `}</style>

      {/* Other Components */}
      <LatestWorks isDarkTheme={isDarkTheme} />
      <ServiceShowcase isDarkTheme={isDarkTheme} />
      <Footer isDarkTheme={isDarkTheme} />
    </div>
  );
};

export default LandingPage;