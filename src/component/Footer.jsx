import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from "../logo.b54ee108340c4004ecc8.png";

const Footer = ({ isDarkTheme }) => {
  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'Digital Marketing',
    'Brand Design',
    'Video Production',
    'Social Media',
    'UI/UX Design',
    'Creative Strategy'
  ];

  const phoneNumbers = [
    '+971 542411778',
    '+971 504339252',
    '+971 509460604',
    '+971 581944089'
  ];

  return (
    <footer className={`relative mt-20 ${isDarkTheme ? 'bg-slate-900/50' : 'bg-gray-50/50'} backdrop-blur-lg`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

      {/* Main content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link to="/" className="block">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={Logo}
                alt="Logo"
                className="w-32 h-16 object-contain"
              />
            </Link>
            <p className={`${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
              Leading advertising agency providing unique and cost-effective solutions for your business needs.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`p-2 rounded-full ${isDarkTheme ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-100 hover:bg-gray-200'} 
                      transition-colors duration-300 ${social.color}`}
                  >
                    <Icon className={`w-5 h-5`} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className={`text-lg font-semibold mb-6 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 4 }}
                >
                  <Link
                    to={link.href}
                    className={`group flex items-center space-x-2 ${
                      isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    } transition-colors duration-300`}
                  >
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className={`text-lg font-semibold mb-6 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              Services
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 4 }}
                >
                  <a
                    href="#"
                    className={`group flex items-center space-x-2 ${
                      isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    } transition-colors duration-300`}
                  >
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    <span>{service}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className={`text-lg font-semibold mb-6 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 4 }}>
                <a
                  href="mailto:info@creativesignatureadvertisement.com"
                  className={`flex items-center space-x-3 ${
                    isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  } transition-colors duration-300`}
                >
                  <Mail className="w-5 h-5" />
                  <span className="truncate">info@creativesignatureadvertisement.com</span>
                </a>
              </motion.li>
              {phoneNumbers.map((phone, index) => (
                <motion.li key={index} whileHover={{ x: 4 }}>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className={`flex items-center space-x-3 ${
                      isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    } transition-colors duration-300`}
                  >
                    <Phone className="w-5 h-5" />
                    <span>{phone}</span>
                  </a>
                </motion.li>
              ))}
              <motion.li
                whileHover={{ x: 4 }}
                className={`flex items-center space-x-3 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}
              >
                <MapPin className="w-5 h-5" />
                <span>Muweilah sharjah, UAE</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`mt-12 pt-8 border-t ${isDarkTheme ? 'border-white/10' : 'border-gray-200'}`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
              {new Date().getFullYear()} Creative Signature Advertisement. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <motion.a
                whileHover={{ y: -2 }}
                href="#"
                className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} 
                  transition-colors duration-300`}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="#"
                className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} 
                  transition-colors duration-300`}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;