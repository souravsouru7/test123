import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles, Stars, Zap, Loader } from 'lucide-react';

const CreativeAdLanding = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const controls = useAnimation();

  const services = [
    { name: 'Logo Design', color: '#FF6B6B', icon: '🎨', description: 'Brand identity that speaks' },
    { name: 'Brochure', color: '#4ECDC4', icon: '📑', description: 'Tell your story beautifully' },
    { name: 'Business Card', color: '#87D37C', icon: '💼', description: 'Make lasting impressions' },
    { name: 'Flyer', color: '#FFB6C1', icon: '📄', description: 'Catch every eye' },
    { name: 'Templates', color: '#3498DB', icon: '🎯', description: 'Design that scales' }
  ];

  const navItems = ['Home', 'Services', 'Portfolio', 'About', 'Contact'];

  // Magnetic button effect
  const magneticEffect = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - bounds.left;
    const mouseY = e.clientY - bounds.top;
    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;
    const maxDistance = 25;

    const deltaX = (mouseX - centerX) / centerX * maxDistance;
    const deltaY = (mouseY - centerY) / centerY * maxDistance;

    e.currentTarget.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  };

  const resetMagneticEffect = (e) => {
    e.currentTarget.style.transform = `translate(0px, 0px)`;
  };

  // Floating animation with dynamic paths
  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      x: [0, 15, 0],
      rotateZ: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Service card hover animation
  const serviceCardVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1,
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 0.3,
        rotate: {
          repeat: Infinity,
          duration: 2
        }
      }
    }
  };

  // Stagger animation for services
  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }));
  }, []);

  // Interactive background particles
  const particles = Array(20).fill().map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 overflow-hidden relative">
      {/* Animated background particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full mix-blend-multiply filter blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
            background: `linear-gradient(135deg, ${services[particle.id % services.length].color}88, transparent)`
          }}
          animate={{
            x: [0, Math.random() * 400 - 200],
            y: [0, Math.random() * 400 - 200],
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Enhanced Navbar */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {/* ... (navbar content remains the same) ... */}
      </motion.nav>

      {/* Main Content */}
      <div className="pt-16">
        <main className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Enhanced Services Section */}
            <motion.div className="w-full lg:w-1/2 relative min-h-[400px]" style={{ perspective: 2000 }}>
              <motion.div
                className="absolute w-full h-full"
                animate={{
                  rotateX: [0, 10, 0],
                  rotateY: [0, 15, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    className="absolute hidden lg:block cursor-pointer"
                    style={{
                      top: `${Math.sin(index * (2 * Math.PI / services.length)) * 120 + 200}px`,
                      left: `${Math.cos(index * (2 * Math.PI / services.length)) * 120 + 200}px`,
                    }}
                    variants={serviceCardVariants}
                    initial="initial"
                    whileHover="hover"
                    custom={index}
                    onHoverStart={() => setActiveService(index)}
                    onHoverEnd={() => setActiveService(null)}
                  >
                    <motion.div
                      className="p-6 rounded-2xl backdrop-blur-md relative overflow-hidden group"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}33, ${service.color}66)`,
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="text-2xl mr-2">{service.icon}</span>
                      <span className="font-medium">{service.name}</span>
                      <motion.p
                        className="text-sm mt-2 opacity-0 group-hover:opacity-100"
                        initial={{ height: 0 }}
                        whileHover={{ height: 'auto' }}
                      >
                        {service.description}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Mobile Services Grid with enhanced animations */}
              <div className="grid grid-cols-2 gap-4 lg:hidden">
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    className="p-4 rounded-2xl backdrop-blur-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    custom={index}
                    whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: `linear-gradient(135deg, ${service.color}33, ${service.color}66)`,
                    }}
                  >
                    <motion.span 
                      className="text-xl mr-2"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {service.icon}
                    </motion.span>
                    <span className="font-medium text-sm">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Content Section */}
            <motion.div
              className="w-full lg:w-1/2 text-center lg:text-left"
              variants={floatingAnimation}
              animate="animate"
            >
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold mb-6 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                We are delighted to describe
                <motion.span 
                  className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  what we Do!
                </motion.span>
              </motion.h1>

              <motion.div 
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.p className="text-gray-600 text-lg lg:text-xl mb-8">
                  is one of the leading Advertising Agency Sharja,
                  Dubai. We're unique and highly cost effective.
                  Join our Amazing online classes
                </motion.p>

                {/* Enhanced CTA Button with magnetic effect */}
                <motion.button
                  className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium group"
                  onMouseMove={magneticEffect}
                  onMouseLeave={resetMagneticEffect}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span className="relative z-10 flex items-center gap-2">
                    View More
                    <motion.div
                      animate={{
                        x: [0, 5, 0],
                        transition: { duration: 1, repeat: Infinity }
                      }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreativeAdLanding;