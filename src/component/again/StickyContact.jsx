import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const StickyContact = () => {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/1234567890" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors duration-300 hover:scale-110 transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Phone */}
      <a
        href="tel:+1234567890" // Replace with your phone number
        className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-colors duration-300 hover:scale-110 transform"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Email */}
      <a
        href="mailto:example@example.com" // Replace with your email
        className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition-colors duration-300 hover:scale-110 transform"
      >
        <Mail className="w-6 h-6" />
      </a>
    </div>
  );
};

export default StickyContact;