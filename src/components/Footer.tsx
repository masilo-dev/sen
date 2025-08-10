import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Learning Assessments',
    'IEP Development',
    'Family Support',
    'Behavioral Strategies',
    'Goal Setting',
    'Curriculum Adaptation',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">SEN Consultancy</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering every child's unique journey through expert special education consultancy services. 
              We believe in the potential of every child and work tirelessly to help them achieve their goals.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-3" />
                <span>hello@senconsultancy.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone size={16} className="mr-3" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-3" />
                <span>Serving families nationwide</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-300 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="mx-2 text-red-500 fill-current" size={16} />
              <span>for special education</span>
            </div>
            <div className="text-gray-300 text-sm">
              © {currentYear} SEN Consultancy. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;