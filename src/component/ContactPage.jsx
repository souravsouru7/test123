import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ExternalLink, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';

const ContactPage = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Our Location",
      content: "Muweilah sharjah, UAE",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      content: "info@creativesignatureadvertisement.com",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      content: [
        "+971 542411778",
        "+971 504339252",
        "+971 509460604",
        "+971 581944089"
      ],
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white' : 'bg-gradient-to-br from-gray-50 to-white text-slate-900'}`}>
      <Navbar 
        isDarkTheme={isDarkTheme}
        toggleTheme={toggleTheme}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Hero Section with Floating Elements */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [0, -10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={`text-xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
            >
              We're here to turn your ideas into reality. Reach out to us today!
            </motion.p>
          </motion.div>

          {/* Enhanced 3D Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`p-8 rounded-2xl ${isDarkTheme ? 'bg-white/5' : 'bg-white'} backdrop-blur-lg transform perspective-1000 transition-all duration-300`}
                style={{
                  boxShadow: hoveredCard === index ? 
                    `0 20px 40px rgba(0,0,0,0.2), 
                     inset 0 0 0 1px rgba(255,255,255,0.1)` : 
                    'none'
                }}
              >
                <motion.div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${info.color} p-4 mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-white">
                    {info.icon}
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{info.title}</h3>
                {Array.isArray(info.content) ? (
                  <div className={`space-y-3 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
                    {info.content.map((item, i) => (
                      <motion.p
                        key={i}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-2"
                      >
                        <ArrowRight className="w-4 h-4" />
                        {item}
                      </motion.p>
                    ))}
                  </div>
                ) : (
                  <motion.p 
                    whileHover={{ x: 10 }}
                    className={`flex items-center gap-2 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                    {info.content}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Interactive Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-purple-500/20 z-10 pointer-events-none" />
            <img
              src="/api/placeholder/1920/600"
              alt="Map"
              className="w-full h-[600px] object-cover"
            />
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute bottom-8 right-8 z-20"
            >
              <a
                href="#"
                className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold shadow-lg"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;