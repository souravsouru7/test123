import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink } from 'lucide-react';
import Navbar from './Navbar';

const LatestWorks = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const works = [
    {
      id: 1,
      title: "Menu Board Printing",
      image: "https://creativesignatureadvertisement.com/assets/images/class1.jpg",
      category: "Digital",
      description: "High-quality menu boards for restaurants and cafes"
    },
    {
      id: 2,
      title: "Trophies",
      image: "https://creativesignatureadvertisement.com/assets/images/class2.jpg",
      category: "Branding",
      description: "Custom-designed trophies for special events"
    },
    {
      id: 3,
      title: "Wall Graphics",
      image: "https://creativesignatureadvertisement.com/assets/images/class3.jpg",
      category: "Digital",
      description: "Eye-catching wall graphics for any space"
    },
    {
      id: 4,
      title: "Roll up Standee",
      image: "https://creativesignatureadvertisement.com/assets/images/class4.jpg",
      category: "Installation",
      description: "Portable and professional display solutions"
    },
    {
      id: 5,
      title: "3D Letters",
      image: "https://creativesignatureadvertisement.com/assets/images/class5.jpg",
      category: "Branding",
      description: "Custom 3D lettering for impactful signage"
    },
    {
      id: 6,
      title: "Shopping Bag Printing",
      image: "https://creativesignatureadvertisement.com/assets/images/class6.jpg",
      category: "Digital",
      description: "Branded shopping bags for retail businesses"
    },
    {
      id: 7,
      title: "Retail Signage",
      image: "https://creativesignatureadvertisement.com/assets/images/class7.jpg",
      category: "Retail",
      description: "Professional retail signage solutions"
    },
    {
      id: 8,
      title: "Mug Printing",
      image: "https://creativesignatureadvertisement.com/assets/images/class8.jpg",
      category: "Installation",
      description: "Custom printed mugs for merchandising"
    }
  ];

  const categories = ['All', ...new Set(works.map(work => work.category))];
  const filteredWorks = selectedCategory === 'All' 
    ? works 
    : works.filter(work => work.category === selectedCategory);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-slate-900 text-white' : 'bg-gray-50 text-slate-900'}`}>
      <Navbar 
        isDarkTheme={isDarkTheme}
        toggleTheme={toggleTheme}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <div className="relative pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium tracking-wider text-rose-500 mb-4 block">
              SHOWCASE
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Latest{' '}
              <span className="bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
                Works
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Explore our portfolio of creative solutions and innovative designs
            </p>
          </motion.div>

          <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-rose-500 text-white'
                    : isDarkTheme
                    ? 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                } shadow-md`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl ${
                  isDarkTheme 
                    ? 'bg-slate-800' 
                    : 'bg-white'
                } shadow-xl`}
              >
                <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 bg-rose-500 text-white text-sm rounded-full mb-4">
                        {work.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2">{work.title}</h3>
                      <p className="text-gray-300 mb-4">{work.description}</p>
                      <button className="inline-flex items-center gap-2 text-white hover:text-rose-400 transition-colors">
                        View Project <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LatestWorks;