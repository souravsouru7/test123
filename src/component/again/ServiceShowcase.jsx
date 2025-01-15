import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ArrowRight } from 'lucide-react';

const ServiceShowcase = ({ isDarkTheme }) => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Digital Marketing',
      description: 'Strategic online marketing solutions to boost your brand visibility and drive growth.',
      features: [
        'Social Media Marketing',
        'Search Engine Optimization',
        'Content Marketing',
        'Email Marketing',
        'PPC Advertising'
      ],
      color: isDarkTheme ? 'from-blue-500 to-cyan-500' : 'from-blue-400 to-cyan-400',
      stats: [
        { label: 'Clients', value: '50+' },
        { label: 'Campaigns', value: '200+' },
        { label: 'ROI', value: '300%' }
      ]
    },
    {
      title: 'Brand Design',
      description: 'Creative brand identity design that captures your essence and connects with your audience.',
      features: [
        'Logo Design',
        'Brand Guidelines',
        'Visual Identity',
        'Brand Strategy',
        'Marketing Collateral'
      ],
      color: isDarkTheme ? 'from-purple-500 to-pink-500' : 'from-purple-400 to-pink-400',
      stats: [
        { label: 'Brands', value: '100+' },
        { label: 'Projects', value: '500+' },
        { label: 'Awards', value: '15+' }
      ]
    },
    {
      title: 'Video Production',
      description: 'High-quality video content that tells your story and engages your audience.',
      features: [
        'Corporate Videos',
        'Commercial Production',
        'Motion Graphics',
        'Event Coverage',
        'Social Media Content'
      ],
      color: isDarkTheme ? 'from-rose-500 to-orange-500' : 'from-rose-400 to-orange-400',
      stats: [
        { label: 'Videos', value: '300+' },
        { label: 'Clients', value: '80+' },
        { label: 'Views', value: '1M+' }
      ]
    },
    {
      title: 'Web Development',
      description: 'Custom web solutions that combine stunning design with powerful functionality.',
      features: [
        'Website Design',
        'E-commerce Solutions',
        'Web Applications',
        'CMS Development',
        'Website Maintenance'
      ],
      color: isDarkTheme ? 'from-emerald-500 to-teal-500' : 'from-emerald-400 to-teal-400',
      stats: [
        { label: 'Websites', value: '150+' },
        { label: 'Clients', value: '100+' },
        { label: 'Uptime', value: '99.9%' }
      ]
    }
  ];

  return (
    <div className={`py-24 ${isDarkTheme ? 'bg-slate-900' : 'bg-gray-50'} relative overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              background: `radial-gradient(circle, ${
                i === 0 ? '#4F46E5' : i === 1 ? '#7C3AED' : '#EC4899'
              }, transparent)`,
              width: '40%',
              height: '40%',
              left: `${i * 30}%`,
              top: `${i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${
              isDarkTheme ? 'from-blue-400 via-purple-500 to-pink-500' : 'from-blue-500 via-purple-600 to-pink-600'
            } bg-clip-text text-transparent`}
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`text-xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
          >
            Comprehensive digital solutions tailored to your business needs
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.03,
                y: -5
              }}
              onClick={() => setSelectedService(service)}
              className={`rounded-2xl overflow-hidden ${isDarkTheme ? 'bg-white/5' : 'bg-white'} backdrop-blur-lg shadow-xl
                border border-transparent hover:border-white/20 transition-all duration-300 cursor-pointer group`}
            >
              {/* Card Header */}
              <div className={`h-24 bg-gradient-to-r ${service.color} p-6 relative overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  style={{
                    background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)`,
                    backgroundSize: '200% 100%',
                  }}
                />
                <h3 className="text-2xl font-bold text-white relative z-10">{service.title}</h3>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-6">
                <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {service.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className={`text-lg font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                        {stat.value}
                      </div>
                      <div className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${service.color} 
                    text-white font-semibold flex items-center justify-center group`}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className={`relative w-full max-w-2xl rounded-2xl ${
                isDarkTheme ? 'bg-slate-800' : 'bg-white'
              } shadow-2xl overflow-hidden`}
            >
              {/* Modal Header */}
              <div className={`p-6 bg-gradient-to-r ${selectedService.color}`}>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-1 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                <p className={`text-lg ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
                  {selectedService.description}
                </p>

                {/* Features List */}
                <div>
                  <h4 className={`text-xl font-semibold mb-4 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-center space-x-3 ${
                          isDarkTheme ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        <ChevronRight className={`w-5 h-5 ${selectedService.color} text-white rounded-full`} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-6">
                  {selectedService.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10"
                    >
                      <div className={`text-2xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                        {stat.value}
                      </div>
                      <div className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceShowcase;