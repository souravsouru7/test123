import React, { useState, useEffect } from 'react';
import { Camera, Paintbrush, Video, Globe, Trophy, Target, Lightbulb, Palette, PenTool, Users, ChevronRight, Play, ArrowRight, Star, Award } from 'lucide-react';

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('digital');

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

  const services = [
    { name: 'Digital Marketing', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { name: 'Brand Design', icon: Paintbrush, color: 'from-purple-500 to-pink-500' },
    { name: 'Video Production', icon: Video, color: 'from-red-500 to-orange-500' },
    { name: 'Social Media', icon: Users, color: 'from-green-500 to-emerald-500' },
    { name: 'UI/UX Design', icon: PenTool, color: 'from-yellow-500 to-amber-500' },
    { name: 'Creative Strategy', icon: Lightbulb, color: 'from-indigo-500 to-violet-500' }
  ];

  const stats = [
    { value: '15+', label: 'Years Experience', icon: Trophy },
    { value: '250+', label: 'Global Clients', icon: Globe },
    { value: '500+', label: 'Projects Done', icon: Target },
    { value: '35+', label: 'Creative Awards', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5,
              animation: `twinkle ${2 + Math.random() * 4}s infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center perspective-1000">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            animation: 'pulse 4s infinite'
          }}
        />
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div 
              className="space-y-8 transform transition-transform"
              style={{
                transform: `
                  translateZ(${50 + mousePosition.y * 0.5}px)
                  rotateX(${mousePosition.y * 0.05}deg)
                  rotateY(${mousePosition.x * 0.05}deg)
                `
              }}
            >
              <div className="relative">
                <h1 className="text-7xl font-bold leading-tight">
                  <span className="block transform hover:scale-105 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 to-violet-500">
                    Creative
                  </span>
                  <span className="block transform hover:scale-105 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-500 to-cyan-500">
                    Innovation
                  </span>
                  <span className="block transform hover:scale-105 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-orange-500 to-rose-500">
                    Dubai
                  </span>
                </h1>
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-blue-500 animate-pulse" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-rose-500 animate-pulse" />
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                Transforming brands through creative excellence and innovative advertising solutions in the heart of Dubai.
              </p>

              <div className="flex space-x-6">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/25">
                  <span className="relative z-10 flex items-center font-semibold">
                    Start Project
                    <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <button className="group relative px-8 py-4 border-2 border-white/20 rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300 hover:border-rose-500">
                  <span className="relative z-10 flex items-center font-semibold">
                    Our Showreel
                    <Play className="ml-2 w-4 h-4 transform group-hover:scale-110 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right - Services Showcase */}
            <div className="relative h-[600px]">
              {services.map((service, index) => (
                <div
                  key={service.name}
                  className="absolute left-1/2 top-1/2 w-64 perspective-1000"
                  style={{
                    transform: `
                      rotate(${index * 60}deg)
                      translateY(-180px)
                    `,
                  }}
                >
                  <div
                    className={`
                      p-6 rounded-xl backdrop-blur-md
                      bg-gradient-to-r ${service.color}
                      transform hover:scale-110 transition-all duration-300
                      cursor-pointer shadow-lg hover:shadow-xl
                      rotate-[-${index * 60}deg]
                    `}
                    style={{
                      animation: `float ${3 + index}s infinite ${index * 0.5}s`
                    }}
                  >
                    <service.icon className="w-8 h-8 mb-3" />
                    <h3 className="font-semibold text-lg">{service.name}</h3>
                  </div>
                </div>
              ))}

              {/* Center Piece */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32">
                <div className="relative w-full h-full animate-spin-slow">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 animate-pulse" />
                  <div className="absolute inset-2 rounded-full bg-slate-900" />
                  <Palette className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-rose-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.5s ${index * 0.1}s both`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-rose-500/50 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 mb-4 text-rose-500" />
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 mt-2">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.1; }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;