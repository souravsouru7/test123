import React, { useState, useEffect } from 'react';
import { Users, Clock, Star, ChevronRight, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const testimonials = [
    {
      name: "Jijesh",
      role: "Capital University",
      content: "The staff are very professional. The design team are very patient to redesign what exactly we want from first draft."
    },
    {
      name: "Parvathi Nair",
      role: "DADO Motives",
      content: "Thank you guys a lot for your help in printing! Excellent and quick work, good quality and price."
    },
    {
      name: "Paragan",
      role: "Panoor Construction",
      content: "Excellent support from them to edit my proof and final output came out good and they delivered"
    }
  ];

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white' : 'bg-gradient-to-br from-gray-50 to-white text-slate-900'}`}>
      <Navbar 
        isDarkTheme={isDarkTheme}
        toggleTheme={toggleTheme}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-64 h-64 rounded-full ${isDarkTheme ? 'opacity-30' : 'opacity-20'} blur-3xl`}
            animate={{
              x: mousePosition.x * (i + 1) * 2,
              y: mousePosition.y * (i + 1) * 2,
            }}
            style={{
              background: `radial-gradient(circle, ${
                i === 0 ? 'rgba(244,63,94,0.3)' :
                i === 1 ? 'rgba(99,102,241,0.3)' :
                'rgba(236,72,153,0.3)'
              } 0%, transparent 70%)`,
              left: `${i * 30}%`,
              top: `${i * 20}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
              About Us
            </h1>
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className={`text-xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Today our company is one of the leading participants in the printing market. We produce an extensive range of printed products – from leaflets and business cards to multi-page publications and complex packaging.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-xl ${isDarkTheme ? 'bg-white/5' : 'bg-slate-50'} backdrop-blur-lg`}
                >
                  <Clock className="w-8 h-8 text-rose-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
                  <p className={isDarkTheme ? 'text-gray-400' : 'text-gray-600'}>Ready for urgent orders anytime</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-xl ${isDarkTheme ? 'bg-white/5' : 'bg-slate-50'} backdrop-blur-lg`}
                >
                  <Users className="w-8 h-8 text-purple-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className={isDarkTheme ? 'text-gray-400' : 'text-gray-600'}>Professional skilled staff</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[400px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-purple-500 rounded-2xl transform rotate-6 opacity-20 blur-xl" />
              <div className={`absolute inset-0 ${isDarkTheme ? 'bg-white/5' : 'bg-white/80'} backdrop-blur-xl rounded-2xl p-8`}>
                <img
                  src="https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.jpg?s=1024x1024&w=is&k=20&c=j174vsUa49_4Wpbi3w6lRUSblh5FqgHzI6F3FX7vpYE="
                  alt="Printing process"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className={`relative py-20 ${isDarkTheme ? 'bg-black/20' : 'bg-slate-50/50'}`}>
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            What Our Customers Say
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-xl ${isDarkTheme ? 'bg-white/5' : 'bg-white'} backdrop-blur-lg`}
              >
                <MessageSquare className="w-8 h-8 text-rose-500 mb-4" />
                <p className={isDarkTheme ? 'text-gray-300' : 'text-gray-600'}>{testimonial.content}</p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'}`}>{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;