import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const ServicesFaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      title: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Digital Marketing Presentation"
    },
    {
      title: "Social Media Marketing",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Social Media Marketing"
    },
    {
      title: "Logo Design & Branding",
      image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Logo Design Example"
    },
    {
      title: "Web Design",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Web Design Workspace"
    }
  ];

  const faqs = [
    {
      question: "What services does Dimark Marketing Management offer?",
      answer: "We offer comprehensive digital marketing solutions including digital marketing strategy, social media marketing, logo design & branding, and web design services."
    },
    {
      question: "How can Dimark help improve my brand's visibility ?",
      answer: "We improve your brand's visibility through targeted digital marketing strategies, social media optimization, SEO, and creating compelling brand identity designs."
    }
  ];

  return (
    <div className="bg-teal-950 px-4 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-teal-800 rounded-lg overflow-hidden">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-white text-lg font-semibold">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center mb-20">
          <button className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors inline-flex items-center">
            EXPLORE MORE
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-teal-800/50 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full p-4 text-left text-white flex justify-between items-center hover:bg-teal-800/70"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <Plus 
                    className={`w-6 h-6 transform transition-transform ${
                      openFaq === index ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="p-4 text-gray-300 bg-teal-800/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed right-4 bottom-4 flex flex-col space-y-2 z-20">
          <button className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white hover:bg-emerald-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </button>
          <button className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white hover:bg-emerald-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesFaqSection;