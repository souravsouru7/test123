import React, { useState, useEffect } from 'react';
import { Camera, Paintbrush, Video, Globe, Trophy, Target, Lightbulb, Palette, PenTool, Users, ChevronRight, Play, ArrowRight, Star, Award, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import TextTransition, { presets } from "react-text-transition";
import Navbar from './Navbar';
import LatestWorks from './again/LatestWorks';
import ServiceShowcase from './again/ServiceShowcase';
import Footer from './Footer';

const TEXTS = [
  "Creative Excellence",
  "Digital Innovation",
  "Brand Success",
  "Marketing Solutions"
];

const TYPING_TEXTS = [
  "Digital Marketing",
  "Brand Design",
  "Video Production",
  "Social Media",
  "Web Development"
];

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('digital');
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [index, setIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000
    );
    return () => clearTimeout(intervalId);
  }, []);

  useEffect(() => {
    const text = TYPING_TEXTS[typingIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypingText(text.substring(0, typingText.length + 1));
        if (typingText === text) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setTypingText(text.substring(0, typingText.length - 1));
        if (typingText === '') {
          setIsDeleting(false);
          setTypingIndex((typingIndex + 1) % TYPING_TEXTS.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [typingText, isDeleting, typingIndex]);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesConfig = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  const services = [
    { 
      name: 'Digital Marketing', 
      icon: Globe, 
      color: 'from-blue-500 to-cyan-500',
      description: 'Strategic online marketing solutions to boost your brand visibility and drive results.',
      features: ['SEO Optimization', 'PPC Campaigns', 'Content Marketing', 'Analytics & Reporting'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'Brand Design', 
      icon: Paintbrush, 
      color: 'from-purple-500 to-pink-500',
      description: 'Creative branding solutions that tell your story and capture your audience.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'Video Production', 
      icon: Video, 
      color: 'from-red-500 to-orange-500',
      description: 'Professional video content that engages and inspires your audience.',
      features: ['Commercial Videos', 'Social Media Content', 'Motion Graphics', 'Video Editing'],
      image: 'https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-gradient-to-b from-gray-900 to-black text-white' : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'} overflow-hidden`}>
      {/* Background Images */}
      <div className="fixed inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-b ${isDarkTheme ? 'from-gray-900/90 to-black/90' : 'from-gray-50/90 to-white/90'} z-10`} />
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: isDarkTheme ? 0.3 : 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={isDarkTheme 
              ? "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              : "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            }
            alt="Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          ...particlesConfig,
          particles: {
            ...particlesConfig.particles,
            color: {
              value: isDarkTheme ? "#ffffff" : "#000000"
            },
            links: {
              ...particlesConfig.particles.links,
              color: isDarkTheme ? "#ffffff" : "#000000",
            }
          }
        }}
        className="absolute inset-0 z-10"
      />
      
      <div className="relative z-20">
        <Navbar 
          isDarkTheme={isDarkTheme}
          toggleTheme={toggleTheme}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* Hero Section */}
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full blur-3xl ${isDarkTheme ? 'opacity-30' : 'opacity-20'}`}
                animate={{
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 15 + i * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                style={{
                  background: `radial-gradient(circle, ${
                    isDarkTheme
                      ? i === 0 ? '#4F46E5' : i === 1 ? '#7C3AED' : i === 2 ? '#EC4899' : i === 3 ? '#3B82F6' : '#10B981'
                      : i === 0 ? '#60A5FA' : i === 1 ? '#A78BFA' : i === 2 ? '#F472B6' : i === 3 ? '#34D399' : '#FCD34D'
                  }, transparent)`,
                  width: '40%',
                  height: '40%',
                  left: `${i * 20}%`,
                  top: `${i * 15}%`,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center relative"
              >
                {/* 3D Floating Elements */}
                <div className="absolute inset-0 -z-10">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute ${isDarkTheme ? 'opacity-60' : 'opacity-40'}`}
                      animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                    >
                      {[
                        <Star className="w-6 h-6" />,
                        <Award className="w-8 h-8" />,
                        <Trophy className="w-7 h-7" />,
                        <Target className="w-6 h-6" />
                      ][i % 4]}
                    </motion.div>
                  ))}
                </div>

                {/* Main Title */}
                <motion.div
                  className="relative mb-6 perspective-1000"
                  animate={{
                    rotateX: [0, 5, 0],
                    rotateY: [0, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <h1 className={`text-6xl md:text-8xl font-bold mb-6 ${
                    isDarkTheme 
                      ? 'bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500' 
                      : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
                  } bg-clip-text text-transparent transform-gpu`}>
                    <TextTransition springConfig={presets.wobbly}>
                      {TEXTS[index % TEXTS.length]}
                    </TextTransition>
                  </h1>
                </motion.div>

                {/* Typing Text */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mb-12"
                >
                  <h2 className={`text-3xl md:text-4xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
                    Empowering Your Business with{' '}
                    <span className={`font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                      {typingText}
                    </span>
                    <span className="animate-blink">|</span>
                  </h2>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative px-10 py-5 rounded-2xl font-semibold text-white
                      bg-gradient-to-r from-rose-500 to-pink-500 overflow-hidden
                      transform perspective-1000`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/30 transform -skew-x-12"
                      initial={{ x: "100%" }}
                      whileHover={{ x: "-100%" }}
                      transition={{ duration: 0.7 }}
                    />
                    <span className="relative flex items-center justify-center space-x-2">
                      <span>Get Started</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>

                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: isDarkTheme 
                        ? "0 20px 40px rgba(255, 255, 255, 0.1)"
                        : "0 20px 40px rgba(0, 0, 0, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative px-10 py-5 rounded-2xl font-semibold
                      ${isDarkTheme 
                        ? 'bg-white/10 hover:bg-white/20 text-white' 
                        : 'bg-black/5 hover:bg-black/10 text-gray-900'}
                      backdrop-blur-lg transform perspective-1000
                      border border-transparent hover:border-current`}
                  >
                    <span className="relative flex items-center justify-center space-x-2">
                      <Play className="w-5 h-5" />
                      <span>Watch Demo</span>
                    </span>
                  </motion.button>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                  className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                  animate={{
                    y: [0, 10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ChevronRight 
                    className={`w-8 h-8 rotate-90 ${
                      isDarkTheme ? 'text-white/50' : 'text-gray-900/50'
                    }`}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className={`py-20 ${isDarkTheme ? 'bg-black/50' : 'bg-white/50'} backdrop-blur-lg`}>
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r ${
                isDarkTheme 
                  ? 'from-blue-400 via-purple-500 to-pink-500' 
                  : 'from-blue-600 via-purple-600 to-pink-600'
              } bg-clip-text text-transparent`}
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`text-center mb-12 text-lg ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Comprehensive solutions for your digital needs
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className={`group p-6 rounded-2xl ${
                    isDarkTheme 
                      ? 'bg-white/5 hover:bg-white/10' 
                      : 'bg-white hover:bg-gray-50'
                  } backdrop-blur-lg transition-all duration-300 cursor-pointer
                    border border-transparent hover:border-rose-500/20`}
                >
                  <div className="mb-4">
                    <service.icon className={`w-12 h-12 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                    {service.name}
                  </h3>
                  <p className={`mb-6 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className={`flex items-center space-x-2 ${
                          isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        <ChevronRight className="w-4 h-4 text-rose-500" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className={`w-full py-3 px-6 rounded-xl 
                      ${isDarkTheme 
                        ? 'bg-white/10 hover:bg-white/20 text-white' 
                        : 'bg-gray-900/10 hover:bg-gray-900/20 text-gray-900'}
                      backdrop-blur-lg transition-all duration-300
                      flex items-center justify-center space-x-2`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Latest Works Section */}
        <LatestWorks isDarkTheme={isDarkTheme} />

        {/* Service Showcase Section */}
        <ServiceShowcase isDarkTheme={isDarkTheme} />

        {/* Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20, rotateX: -20 }}
                animate={{ scale: 1, y: 0, rotateX: 0 }}
                exit={{ scale: 0.9, y: 20, rotateX: 20 }}
                className={`relative w-full max-w-lg p-8 rounded-2xl bg-gradient-to-br ${selectedService.color} shadow-2xl overflow-hidden`}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  className="absolute inset-0 opacity-20"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                >
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <div className="relative z-10">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 text-white/80 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="flex items-center mb-6">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <selectedService.icon className="w-12 h-12 text-white mr-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">{selectedService.name}</h3>
                  </div>

                  <p className="text-white/90 mb-8">{selectedService.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedService.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <ChevronRight className="w-5 h-5 text-white/70" />
                        <span className="text-white/90">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer isDarkTheme={isDarkTheme} />
      </div>
    </div>
  );
};

export default LandingPage;