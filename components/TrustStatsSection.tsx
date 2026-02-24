
import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface StatItemProps {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  delay?: number;
}

const StatCard: React.FC<StatItemProps> = ({ value, suffix, prefix = "", label, delay = 0 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        delay,
        ease: [0.16, 1, 0.3, 1]
      });
      return controls.stop;
    }
  }, [isInView, value, count, delay]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 flex flex-col justify-center items-center text-center transition-all hover:bg-white/15 group"
    >
      <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tighter mb-1 flex items-baseline">
        {prefix && <span>{prefix}</span>}
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <span className="text-white/70 font-medium tracking-tight text-sm md:text-base">
        {label}
      </span>
    </motion.div>
  );
};

export const TrustStatsSection: React.FC = () => {
  return (
    <section className="w-full bg-black relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px] lg:min-h-[800px]">

        {/* Left Side: Full-Bleed Image with Text Overlay */}
        <div className="relative h-[500px] lg:h-auto">
          {/* Background Image */}
          <img
            src="/images/machinery-about.webp"
            alt="Grindstone Machinery Team"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />

          {/* Text Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end lg:justify-center p-8 md:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Precision Quality <br className="hidden sm:block" />You Can Truly Rely On.
              </h2>
              <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
                We are an Ahmedabad-based industrial manufacturing firm specializing in precision grinding machines. We believe in engineering integrity: direct factory support, export-quality units, and high-precision craftsmanship delivered with 49+ proven machine models.
              </p>

              {/* Feature List */}
              <div className="space-y-3">
                {[
                  "Export Quality Finish",
                  "Factory Technical Support",
                  "Custom Precision Design"
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Stats Grid on Dark Background */}
        <div className="bg-black flex items-center justify-center p-8 md:p-12 lg:p-16">
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <StatCard value={3} suffix="+" label="Years Experience" delay={0.1} />
              <StatCard value={49} suffix="+" label="Machine Models" delay={0.2} />
              <StatCard value={100} suffix="%" label="Quality Assurance" delay={0.3} />
              <StatCard value={400} suffix="+" label="Units Delivered" delay={0.4} />
            </div>

            {/* Trust Badges */}
            <motion.div
              className="mt-8 flex items-center justify-center gap-6 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-white">SSI</p>
                <p className="text-xs text-white/50">Regd.</p>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">MSME</p>
                <p className="text-xs text-white/50">India</p>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">ISO</p>
                <p className="text-xs text-white/50">Standard</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
