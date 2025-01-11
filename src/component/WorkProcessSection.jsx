import React from 'react';
import { Lightbulb, Target, BarChart3, Settings } from 'lucide-react';
import imge from "../homeabout.28579d72eb8c30afb34b.jpg"
const WorkProcessSection = () => {
  return (
    <div className="bg-teal-950 py-20 px-4 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-teal-950 animate-gradient"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl font-bold text-white text-center mb-4 hover:scale-105 transition-transform duration-300">
          Our Work Process
        </h2>
        <p className="text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Our Approach Is Clear And Collaborative, Ensuring Your Goals 
          Are Met At Every Step:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image with hover effect */}
          <div className="lg:col-span-1 group perspective-1000">
            <div className="rounded-lg overflow-hidden transform transition-transform duration-500 hover:rotate-y-12 hover:shadow-2xl">
              <img 
                src={imge} 
                alt="Business stationery layout" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Right Column - Process Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Discovery Card */}
            <div className="bg-teal-800 rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 hover:rotate-2 transition-all duration-300 hover:shadow-xl">
              <div className="animate-bounce-slow">
                <Lightbulb className="w-12 h-12 text-white mb-4" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Discovery</h3>
              <p className="text-gray-300">
                We dive deep into understanding your brand, audience, and goals.
              </p>
            </div>

            {/* Strategy Card */}
            <div className="bg-teal-800 rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 hover:rotate-2 transition-all duration-300 hover:shadow-xl">
              <div className="animate-pulse">
                <Target className="w-12 h-12 text-white mb-4" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Strategy</h3>
              <p className="text-gray-300">
                A customized roadmap designed for growth and impact.
              </p>
            </div>

            {/* Execution Card */}
            <div className="bg-teal-800 rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 hover:rotate-2 transition-all duration-300 hover:shadow-xl">
              <div className="animate-bounce-slow">
                <BarChart3 className="w-12 h-12 text-white mb-4" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Execution</h3>
              <p className="text-gray-300">
                Bringing the strategy to life with precision and creativity.
              </p>
            </div>

            {/* Optimization Card */}
            <div className="bg-teal-800 rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 hover:rotate-2 transition-all duration-300 hover:shadow-xl">
              <div className="animate-spin-slow">
                <Settings className="w-12 h-12 text-white mb-4" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Optimization</h3>
              <p className="text-gray-300">
                Continuous improvement to maximize results.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section with fade-in effect */}
        <div className="mt-32 text-center opacity-0 animate-fade-in">
          <p className="text-gray-300 mb-4">Our Services</p>
          <h2 className="text-4xl font-bold text-white">
            Explore Our Services
          </h2>
        </div>

        {/* Floating Action Buttons with hover effects */}
        <div className="fixed right-4 bottom-4 flex flex-col space-y-2 z-20">
          <button className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white hover:bg-emerald-600 transform hover:scale-110 transition-all duration-300 hover:rotate-12">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </button>
          <button className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white hover:bg-emerald-600 transform hover:scale-110 transition-all duration-300 hover:-rotate-12">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-12 {
          transform: rotateY(12deg);
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WorkProcessSection;