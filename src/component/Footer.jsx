import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from "../logo.b54ee108340c4004ecc8.png";

const Footer = ({ isDarkTheme }) => {
  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' }
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
    <footer className={`relative mt-20 ${isDarkTheme ? 'bg-slate-900/50' : 'bg-gray-50/50'} backdrop-blur-lg border-t ${isDarkTheme ? 'border-white/10' : 'border-gray-200'}`}>
      {/* Decorative gradient blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-r from-rose-500/20 to-purple-500/20 blur-3xl rounded-full" />
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <img
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
                  <a
                    key={index}
                    href={social.href}
                    className={`p-2 rounded-full ${isDarkTheme ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}
                  >
                    <Icon className={`w-5 h-5 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className={`group flex items-center space-x-2 ${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
                  >
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`group flex items-center space-x-2 ${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
                  >
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@creativesignatureadvertisement.com"
                  className={`flex items-center space-x-3 ${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
                >
                  <Mail className="w-5 h-5" />
                  <span>info@creativesignatureadvertisement.com</span>
                </a>
              </li>
              {phoneNumbers.map((phone, index) => (
                <li key={index}>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className={`flex items-center space-x-3 ${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
                  >
                    <Phone className="w-5 h-5" />
                    <span>{phone}</span>
                  </a>
                </li>
              ))}
              <li className={`flex items-center space-x-3 ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                <MapPin className="w-5 h-5" />
                <span>Muweilah sharjah, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-12 pt-8 border-t ${isDarkTheme ? 'border-white/10' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} Creative Signature Advertisement. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}>
                Privacy Policy
              </a>
              <a href="#" className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;