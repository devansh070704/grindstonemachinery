import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { Youtube } from 'lucide-react';

// ─── Video Data ───────────────────────────────────────────────────────────────
// Each video: autoplay=1, mute=1, controls=0, loop=1, playlist=ID (required for loop)
// rel=0 = no related videos  |  modestbranding=1 = minimal YouTube branding

const videos = [
    { id: 'rLHpanU6I30', label: 'Grinding Machine in Action', isShort: true },
    { id: 'ZDatSM28NGc', label: 'Precision Grinding Demo', isShort: true },
    { id: '5zttV_e4fwQ', label: 'Manufacturing Floor', isShort: false },
    { id: 'DwYXxKy559k', label: 'Cylindrical Grinding Process', isShort: false },
    { id: 'jhDgEwHebag', label: 'Machine Testing', isShort: false },
    { id: 'wUDQLxkMbvk', label: 'Production Line', isShort: false },
    { id: 'IrDKA71jyRQ', label: 'Hydraulic Grinder Operation', isShort: false },
    { id: 'iCE4fAdNxlY', label: 'Quality Inspection', isShort: false },
    { id: 'btRuP-7NCBE', label: 'Factory Walkthrough', isShort: false },
];

const buildEmbedUrl = (id: string) =>
    `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;

// ─── Single Video Card ────────────────────────────────────────────────────────

const VideoCard: React.FC<{ video: typeof videos[0]; index: number }> = ({ video, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative bg-navy-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 ${video.isShort ? 'row-span-2' : ''}`}
        >
            {/* Aspect ratio wrapper: 9:16 for Shorts, 16:9 for regular */}
            <div
                className="relative w-full"
                style={{ paddingBottom: video.isShort ? '177.78%' : '56.25%' }}
            >
                <iframe
                    src={buildEmbedUrl(video.id)}
                    title={video.label}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                />
            </div>

            {/* Label overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <p className="text-white text-xs font-semibold tracking-wide truncate">{video.label}</p>
            </div>
        </motion.div>
    );
};

// ─── Gallery Page ─────────────────────────────────────────────────────────────

const GalleryPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-navy-900">
            <SEO
                title="Video Gallery | Grindstone Machinery Industries Ahmedabad"
                description="Watch Grindstone Machinery Industries in action — precision cylindrical grinding, hydraulic grinders, CNC machines, and our manufacturing facility in Ahmedabad, Gujarat."
                schema={{
                    "@context": "https://schema.org",
                    "@type": "VideoGallery",
                    "name": "Grindstone Machinery Video Gallery",
                    "description": "Watch precision grinding machines in action from Grindstone Machinery Industries, Ahmedabad.",
                    "publisher": {
                        "@type": "Organization",
                        "name": "Grindstone Machinery Industries"
                    }
                }}
            />
            <Navbar />

            {/* ── Hero Banner ── */}
            <section className="relative w-full pt-28 pb-14 px-4 md:px-6 overflow-hidden bg-navy-900">
                {/* Background grid effect */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(240,87,2,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(240,87,2,0.3) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />
                <div className="relative z-10 max-w-[1440px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                            <Youtube className="w-4 h-4 text-gold-500" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                                Grindstone Machinery — YouTube Channel
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none mb-5">
                            See the Machines
                            <span className="block text-gold-500 mt-1">in Action</span>
                        </h1>
                        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                            Precision grinding, hydraulic systems and our manufacturing facility in Vatva GIDC,
                            Ahmedabad — live and in motion.
                        </p>
                        <a
                            href="https://youtube.com/@grindstonemachineryindustries"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-7 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 transition-colors text-white font-bold text-sm shadow-lg hover:shadow-red-500/30"
                        >
                            <Youtube className="w-4 h-4" />
                            Subscribe on YouTube
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ── Video Grid ── */}
            <section className="flex-1 w-full px-4 md:px-6 py-12 md:py-20 bg-navy-900">
                <div className="max-w-[1440px] mx-auto">

                    {/* Short-form videos — 2-col portrait layout */}
                    <div className="mb-12">
                        <h2 className="text-white text-sm font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                            <span className="w-6 h-[2px] bg-gold-500 inline-block" />
                            Shorts — Quick Demos
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-2xl">
                            {videos.filter(v => v.isShort).map((video, idx) => (
                                <VideoCard key={video.id} video={video} index={idx} />
                            ))}
                        </div>
                    </div>

                    {/* Long-form videos — responsive grid */}
                    <div>
                        <h2 className="text-white text-sm font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                            <span className="w-6 h-[2px] bg-gold-500 inline-block" />
                            Full Videos
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {videos.filter(v => !v.isShort).map((video, idx) => (
                                <VideoCard key={video.id} video={video} index={idx} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Channel CTA ── */}
            <section className="w-full py-16 px-4 md:px-6 bg-gradient-to-br from-navy-800 to-navy-900 border-t border-white/10">
                <div className="max-w-[900px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Youtube className="w-12 h-12 text-red-500 mx-auto mb-5" />
                        <h2 className="text-white text-2xl md:text-3xl font-black tracking-tight mb-3">
                            Follow Our Journey on YouTube
                        </h2>
                        <p className="text-slate-400 text-sm max-w-lg mx-auto mb-7">
                            New videos every week — grinding machine demos, factory tours, and technical deep-dives
                            from Grindstone Machinery Industries, Ahmedabad.
                        </p>
                        <a
                            href="https://youtube.com/@grindstonemachineryindustries"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 transition-colors text-white font-bold px-8 py-4 rounded-xl text-sm shadow-lg hover:shadow-red-500/30"
                        >
                            <Youtube className="w-5 h-5" />
                            @GrindstoneMachineryIndustries
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default GalleryPage;
