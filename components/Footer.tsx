import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Cylindrical Grinding Machines',
    'Magnetic Coolant Separators',
    'Industrial Fabrication Works',
    'Expert Painting Services',
    'Tool Room Spare Parts',
    'Precision Job Work',
  ];

  return (
    <footer className="w-full bg-navy-900">
      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <img
                src="/images/grindstone-logo.png"
                alt="Grindstone Machinery Industries"
                className="h-12 md:h-14 w-auto"
              />
            </Link>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Leading Manufacturer and Exporter of high-precision grinding machines
              and industrial solutions. Precision-engineered excellence since 2023.
            </p>
            <div className="flex items-center gap-4">
              {[Linkedin, Facebook, Twitter, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 hover:bg-gold-500 hover:text-white transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-neutral-400 hover:text-gold-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold-500" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Solutions</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-neutral-400 hover:text-gold-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold-500" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Connect</h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-4 text-neutral-400 group">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold-500" />
                  </div>
                  <div className="space-y-1">
                    <a href="tel:+919510554375" className="block text-white font-medium hover:text-gold-500 transition-colors">
                      +91 95105 54375
                    </a>
                    <a href="tel:+919537396116" className="block text-white font-medium hover:text-gold-500 transition-colors">
                      +91 95373 96116
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="mailto:grindstonemachine@gmail.com"
                  className="flex items-start gap-4 text-neutral-400 hover:text-gold-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">grindstonemachine@gmail.com</p>
                    <p className="text-sm">Request Product Catalog</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-4 text-neutral-400">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Grindstone Machinery</p>
                    <p className="text-sm">Shed No 6, Shreyam-2 Industrial Park,</p>
                    <p className="text-xs">Kathwada GIDC, Ahmedabad - 382430</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm text-center md:text-left">
              © {currentYear} Grindstone Machinery Industries.
            </p>
            <div className="flex items-center gap-6 text-sm text-neutral-500">
              <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
