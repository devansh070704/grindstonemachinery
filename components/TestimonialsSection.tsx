import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "High-precision grinding machines that have transformed our production efficiency. Their technical support team in Ahmedabad is exceptional.",
    author: "Rajesh Patel",
    role: "Production Head",
    location: "Ahmedabad",
  },
  {
    id: 2,
    text: "Professional team with deep technical expertise in industrial fabrication. the machine bases they built for us are top-notch and durable.",
    author: "Sanjay Shah",
    role: "Engineering Manager",
    location: "Pune",
  },
  {
    id: 3,
    text: "Reliable export quality and timely delivery of magnetic separators. Their expertise in coolant filtration systems is commendable.",
    author: "Amit Kumar",
    role: "Operations Director",
    location: "Rajkot",
  },
  {
    id: 4,
    text: "Grindstone Machinery provides exceptional value with their 49+ models. Their technical consultancy helped us pick the perfect machine for our shop.",
    author: "Vishal Rathore",
    role: "Tool Room Owner",
    location: "Indore",
  }
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="w-full py-20 md:py-32 bg-neutral-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="text-gold-500 font-semibold text-sm uppercase tracking-widest">
            Testimonials
          </motion.span>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-900 font-bold mt-4">
            Trusted by Industrial
            <br />
            <span className="text-gradient-gold">Leaders</span>
          </motion.h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl border border-neutral-100">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-12 w-12 h-12 rounded-full gradient-gold flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-navy-900" />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-gold-500 fill-current" />
              ))}
            </div>

            {/* Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xl md:text-2xl lg:text-3xl text-navy-800 font-medium leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-navy-900 font-bold text-lg">{testimonials[currentIndex].author}</h4>
                    <p className="text-neutral-500">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                    </p>
                  </div>

                  {/* Navigation */}
                  <div className="flex gap-2">
                    <button
                      onClick={prev}
                      className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-navy-700 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={next}
                      className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-navy-700 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'w-8 bg-gold-500' : 'bg-neutral-300 hover:bg-neutral-400'
                    }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 text-neutral-500">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold-500 fill-current" />
              ))}
            </div>
            <span className="font-medium">Rated 5.0 based on customer reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
