import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, ChevronRight } from 'lucide-react';
import s1 from "../../images/class1.jpg"
import s2 from "../../images/class2.jpg"
import s3 from "../../images/class3.jpg"
import s4 from "../../images/class4.jpg"

const LatestWorks = ({ isDarkTheme }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioItems = [
    {
      title: "Display Stands",
      image: s1,
      category: "Exhibition",
      description: "Custom display stands designed for maximum impact at exhibitions and trade shows.",
      color: isDarkTheme ? "from-pink-500 to-rose-500" : "from-pink-400 to-rose-400",
      stats: [
        { label: "Projects", value: "50+" },
        { label: "Clients", value: "30+" },
        { label: "Countries", value: "5+" }
      ]
    },
    {
      title: "Mall Signage",
      image: s2,
      category: "Signage",
      description: "Modern and eye-catching mall signage solutions that guide and inform.",
      color: isDarkTheme ? "from-purple-500 to-indigo-500" : "from-purple-400 to-indigo-400",
      stats: [
        { label: "Installations", value: "100+" },
        { label: "Malls", value: "20+" },
        { label: "Cities", value: "8+" }
      ]
    },
    {
      title: "Event Exhibition",
      image: s3,
      category: "Events",
      description: "Comprehensive exhibition solutions for events of all sizes.",
      color: isDarkTheme ? "from-blue-500 to-cyan-500" : "from-blue-400 to-cyan-400",
      stats: [
        { label: "Events", value: "200+" },
        { label: "Venues", value: "40+" },
        { label: "Years", value: "10+" }
      ]
    },
    {
      title: "Vehicle Branding",
      image: s4,
      category: "Branding",
      description: "Professional vehicle wrapping and branding services.",
      color: isDarkTheme ? "from-rose-500 to-purple-500" : "from-rose-400 to-purple-400",
      stats: [
        { label: "Vehicles", value: "300+" },
        { label: "Brands", value: "50+" },
        { label: "Designs", value: "100+" }
      ]
    }
  ];

  return (
    <div className={`py-24 ${isDarkTheme ? 'bg-gradient-to-br from-slate-900 to-slate-800' : 'bg-gradient-to-br from-gray-50 to-white'} relative overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${isDarkTheme ? 'from-blue-400 via-purple-500 to-pink-500' : 'from-blue-500 via-purple-600 to-pink-600'} bg-clip-text text-transparent`}>
              Latest Works
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`text-xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
          >
            Explore our recent projects and creative solutions that drive results
          </motion.p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
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
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setSelectedProject(item)}
              className={`rounded-2xl overflow-hidden ${isDarkTheme ? 'bg-white/5' : 'bg-white'} backdrop-blur-lg shadow-xl
                border border-transparent hover:border-white/20 transition-all duration-300 cursor-pointer`}
            >
              <div className="relative overflow-hidden group">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Overlay */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-90 
                    transition-opacity duration-300 flex items-center justify-center`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.9 }}
                >
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/90 mb-4">{item.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl font-semibold text-white 
                        border border-white/20 hover:bg-white/20 transition-colors duration-300
                        flex items-center justify-center mx-auto"
                    >
                      View Details
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              {/* Stats */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${isDarkTheme ? 'bg-white/10' : 'bg-gray-100'}`}>
                    {item.category}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {item.stats.map((stat, i) => (
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(79, 70, 229, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className={`group relative px-8 py-4 bg-gradient-to-r ${isDarkTheme ? 'from-blue-500 to-purple-600' : 'from-blue-400 to-purple-500'} 
              rounded-xl font-semibold text-white overflow-hidden`}
          >
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default LatestWorks;