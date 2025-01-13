import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import s1 from "../../images/class1.jpg"
import s2 from "../../images/class2.jpg"
import s3 from "../../images/class3.jpg"
import s4 from "../../images/class4.jpg"


const LatestWorks = ({ isDarkTheme }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const portfolioItems = [
    {
      title: "Display Stands",
      image: s1,
      category: "Exhibition",
      color: isDarkTheme ? "from-pink-500 to-rose-500" : "from-pink-400 to-rose-400"
    },
    {
      title: "Mall Signage",
      image: s2,
      category: "Signage",
      color: isDarkTheme ? "from-purple-500 to-indigo-500" : "from-purple-400 to-indigo-400"
    },
    {
      title: "Event Exhibition",
      image: s3,
      category: "Events",
      color: isDarkTheme ? "from-blue-500 to-cyan-500" : "from-blue-400 to-cyan-400"
    },
    {
      title: "Vehicle Branding",
      image: s4,
      category: "Branding",
      color: isDarkTheme ? "from-rose-500 to-purple-500" : "from-rose-400 to-purple-400"
    }
  ];

  return (
    <div className={`py-24 ${isDarkTheme ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white' : 'bg-gradient-to-br from-gray-50 to-white text-slate-900'} transition-colors duration-500`}>
      <div className="container mx-auto px-4 relative">
        {/* Floating Background Elements */}
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
          className={`absolute top-20 right-20 w-64 h-64 bg-gradient-to-r ${isDarkTheme ? 'from-purple-500/20 to-pink-500/20' : 'from-purple-400/20 to-pink-400/20'} rounded-full blur-3xl`}
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
          className={`absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r ${isDarkTheme ? 'from-blue-500/20 to-cyan-500/20' : 'from-blue-400/20 to-cyan-400/20'} rounded-full blur-3xl`}
        />

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r ${isDarkTheme ? 'from-rose-500 to-purple-500' : 'from-rose-400 to-purple-400'} bg-clip-text text-transparent`}>
            Our Latest Work
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`text-xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
          >
            Explore our recent projects and creative solutions
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
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`rounded-2xl overflow-hidden ${isDarkTheme ? 'bg-white/5' : 'bg-white'} backdrop-blur-lg transform perspective-1000 transition-all duration-300`}
              style={{
                boxShadow: hoveredCard === index ? 
                  `0 20px 40px rgba(0,0,0,0.2), 
                   inset 0 0 0 1px rgba(255,255,255,0.1)` : 
                  'none'
              }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className={`px-6 py-3 bg-white ${isDarkTheme ? 'text-slate-900' : 'text-slate-800'} rounded-xl font-semibold flex items-center gap-2`}
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} flex items-center gap-2`}>
                  <ArrowRight className="w-4 h-4" />
                  {item.category}
                </p>
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
            whileHover={{ scale: 1.05 }}
            className={`px-8 py-4 bg-gradient-to-r ${isDarkTheme ? 'from-rose-500 to-purple-500' : 'from-rose-400 to-purple-400'} text-white rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg`}
          >
            View All Works
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default LatestWorks;