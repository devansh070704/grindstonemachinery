import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 0,
    title: "Grinding Machines",
    description: "High-precision cylindrical grinding machines available in 49+ models. Engineered for exceptional accuracy and surface finish.",
    image: "/images/products/internal-cylindrical-grinding-machine-500x500.webp",
    features: ['Cylindrical Grinders', 'Manual & PLC Models', 'Precision Engineered']
  },
  {
    id: 1,
    title: "Coolant Separators",
    description: "Superior magnetic coolant separators and filtration systems designed to enhance machine life and component quality.",
    image: "/images/products/magnetic-coolant-separator-500x500.webp",
    features: ['Magnetic Separators', 'Filtration Systems', 'Water Chillers']
  },
  {
    id: 2,
    title: "Industrial Fabrication",
    description: "Expert heavy-duty structural fabrication, expert painting services, and precision job work tailored to industrial needs.",
    image: "/images/products/machine-painting-service-500x500.webp",
    features: ['Structural Work', 'Expert Painting', 'Custom Job Work']
  },
  {
    id: 3,
    title: "Tool Room Spares",
    description: "Wide range of tool room equipment including angle dressers, wheel balancers, and belt-driven spindles.",
    image: "/images/products/wheel-balancing-stand-500x500.webp",
    features: ['Angle Dressers', 'Wheel Balancers', 'Belt Driven Spindles']
  }
];

export const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section ref={sectionRef} className="w-full pt-10 md:pt-16 pb-10 md:pb-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="text-gold-500 font-semibold text-sm uppercase tracking-widest">
            Our Solutions
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-900 font-bold mt-4">
            Industrial Grinding
            <br />
            <span className="text-gradient-gold">& Fabrication</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-6 text-neutral-600 text-lg max-w-2xl mx-auto">
            From precision grinding machines to comprehensive industrial fabrication, we provide world-class manufacturing solutions.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              onMouseEnter={() => setActiveService(idx)}
              className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl cursor-pointer transition-all duration-500 ${activeService === idx ? 'ring-2 ring-gold-500' : ''
                }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-10 min-h-[360px] flex flex-col justify-end">
                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gold-500/20 backdrop-blur-sm flex items-center justify-center border border-gold-500/30">
                  <span className="text-gold-400 font-bold">0{service.id + 1}</span>
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-2xl md:text-3xl text-white font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-gold-400 bg-gold-500/10 rounded-full border border-gold-500/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-gold-400 font-semibold group-hover:gap-3 transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-navy-900 text-white rounded-full font-semibold hover:bg-navy-800 transition-all group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
