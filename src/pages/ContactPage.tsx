import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        
        <div className="bg-zinc-800 p-6 rounded-lg border border-accent-500/20">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          
          <div className="space-y-4">
            <a href="mailto:your.email@example.com" 
              className="flex items-center text-gray-300 hover:text-accent-500 transition-colors">
              <Mail className="w-5 h-5 mr-3" />
              <span>nicolosimoncelli@gmail.com</span>
            </a>
            
            <a href="tel:+1234567890" 
              className="flex items-center text-gray-300 hover:text-accent-500 transition-colors">
              <Phone className="w-5 h-5 mr-3" />
              <span>+39 3484318070</span>
            </a>
            
            <div className="flex items-center text-gray-300">
              <MapPin className="w-5 h-5 mr-3" />
              <span>Verona, Italy</span>
            </div>
          </div>

          <div className="flex space-x-4 mt-8">
            <a href="#" className="text-accent-500 hover:text-accent-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-accent-500 hover:text-accent-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;