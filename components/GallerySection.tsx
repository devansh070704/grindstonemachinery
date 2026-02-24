import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProject {
  id: number;
  title: string;
  location: string;
  type: string;
  image: string;
}

const galleryItems: GalleryProject[] = [
  {
    id: 1,
    title: "Cylindrical Grinding Machine",
    location: "Ahmedabad, Gujarat",
    type: "High Precision",
    image: "/images/products/hydraulic-universal-cylindrical-grinders-500x500.webp"
  },
  {
    id: 2,
    title: "Magnetic Coolant Separator",
    location: "Pune, Maharashtra",
    type: "Industrial Filtration",
    image: "/images/products/magnetic-coolant-separator-500x500.webp"
  },
  {
    id: 3,
    title: "Industrial Base Fabrication",
    location: "Dahej, GIDC",
    type: "Structural Work",
    image: "/images/products/machine-painting-service-500x500.webp"
  },
  {
    id: 4,
    title: "Technical Job Work",
    location: "Vatva GIDC",
    type: "Precision Machining",
    image: "/images/machinery-about.webp"
  },
  {
    id: 5,
    title: "Machinery Painting",
    location: "Kathwada, Ahmedabad",
    type: "Epoxy Coating",
    image: "/images/machinery-hero.webp"
  },
  {
    id: 6,
    title: "Tool Room Spares",
    location: "Rajkot, Gujarat",
    type: "Custom Spares",
    image: "/images/products/wheel-balancing-stand-500x500.webp"
  }
];

export const GallerySection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }
    })
  };

  return (
    <>
      <section className="w-full pt-10 md:pt-16 pb-20 md:pb-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          >
            <div>
              <motion.span
                variants={fadeInUp}
                custom={0}
                className="text-gold-500 font-semibold text-sm uppercase tracking-widest"
              >
                Our Work
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                custom={1}
                className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-900 font-bold mt-4"
              >
                Recent <span className="text-gradient-gold">Projects</span>
              </motion.h2>
            </div>
            <motion.a
              variants={fadeInUp}
              custom={2}
              href="/products"
              className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-gold-500 transition-colors group"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Masonry Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {galleryItems.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                custom={idx}
                onClick={() => setSelectedProject(project)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${idx === 0 ? 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto' : 'aspect-[4/3]'
                  }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-gold-400 bg-gold-500/10 rounded-full border border-gold-500/20 mb-3">
                    {project.type}
                  </span>
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-neutral-300 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[200] bg-navy-900/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto"
                />
              </div>

              {/* Info */}
              <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-white text-2xl font-bold">{selectedProject.title}</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-gold-400">{selectedProject.type}</span>
                    <span className="text-neutral-400">{selectedProject.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
