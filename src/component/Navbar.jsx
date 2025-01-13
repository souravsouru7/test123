import React from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from "../logo.b54ee108340c4004ecc8.png";

const Navbar = ({ isDarkTheme, toggleTheme, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 ${isDarkTheme ? 'bg-slate-900/80' : 'bg-white/80'} backdrop-blur-md border-b ${isDarkTheme ? 'border-white/10' : 'border-slate-200'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg animate-pulse" />
              <img
                src={Logo}
                alt="Logo"
                className="absolute inset-0.5 w-9 h-9 rounded-lg object-cover"
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative group ${
                  isActivePath(item.path)
                    ? 'text-rose-500'
                    : isDarkTheme
                    ? 'text-white hover:text-rose-500'
                    : 'text-slate-900 hover:text-rose-600'
                } transition-colors duration-300`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-rose-500 transition-all duration-300
                    ${isActivePath(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}
                />
              </Link>
            ))}
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isDarkTheme
                  ? 'bg-slate-800 hover:bg-slate-700'
                  : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors duration-300`}
            >
              {isDarkTheme ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        md:hidden absolute w-full 
        ${isDarkTheme ? 'bg-slate-900/95' : 'bg-white/95'} 
        backdrop-blur-md
        transition-all duration-300 ease-in-out
        ${isMobileMenuOpen ? 'max-h-64 border-b' : 'max-h-0 overflow-hidden'}
        ${isDarkTheme ? 'border-white/10' : 'border-slate-200'}
      `}>
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block py-2 ${
                isActivePath(item.path)
                  ? 'text-rose-500'
                  : isDarkTheme
                  ? 'text-white hover:text-rose-500'
                  : 'text-slate-900 hover:text-rose-600'
              } transition-colors duration-300`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;