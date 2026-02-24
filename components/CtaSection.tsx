import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Calendar, CheckCircle, Sparkles } from 'lucide-react';

export const CtaSection: React.FC = () => {
  const benefits = [
    'Precision Guaranteed',
    'Technical Consultancy',
    'Global Export Ready',
  ];

  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Premium CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl md:rounded-[2.5rem] gradient-navy"
        >
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          {/* Content */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 md:gap-12 p-6 md:p-12 lg:p-16 xl:p-20">

            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/20 border border-gold-500/30">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span className="text-gold-400 text-sm font-medium">Free Consultation</span>
              </div>

              <div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
                  Ready to Enhance
                  <br />
                  <span className="text-gradient-gold">Your Production?</span>
                </h2>
                <p className="mt-6 text-neutral-400 text-lg leading-relaxed max-w-md">
                  Get technical details and quotes within 24 hours. Our engineering team is ready for your next industrial project.
                </p>
              </div>

              {/* Benefits */}
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gold-500" />
                    <span className="text-neutral-300 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Action Card */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-sm bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-6">
                <div className="text-center">
                  <h3 className="text-white text-2xl font-bold mb-2">Get Your Free Quote</h3>
                  <p className="text-neutral-400">No obligation, fast response</p>
                </div>

                <div className="space-y-4">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 gradient-gold text-navy-900 rounded-xl font-bold text-base hover:shadow-xl transition-all btn-glow"
                  >
                    <Calendar className="w-5 h-5" />
                    Request Tech Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  <div className="space-y-3">
                    <a
                      href="tel:+919510554375"
                      className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white rounded-xl font-bold text-base border border-white/20 hover:bg-white/20 transition-all"
                    >
                      <Phone className="w-5 h-5" />
                      +91 95105 54375
                    </a>
                    <div className="flex flex-col gap-2">
                      <a
                        href="tel:+919537396116"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/5 text-white/90 rounded-lg font-semibold text-sm border border-white/10 hover:bg-white/10 transition-all"
                      >
                        Tel: +91 95373 96116
                      </a>
                    </div>
                  </div>
                </div>

                <p className="text-center text-neutral-500 text-sm">
                  Or email us at{' '}
                  <a href="mailto:grindstonemachine@gmail.com" className="text-gold-400 hover:underline">
                    grindstonemachine@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
