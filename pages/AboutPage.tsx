import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Shield,
    DollarSign,
    Clock,
    Phone,
    Award,
    Users,
    Target,
    Heart,
    CheckCircle2,
    ArrowRight,
    Star,
    Settings
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { SEO } from '../components/SEO';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { Footer } from '../components/Footer';
import { StatCounter } from '../components/StatCounter';
import { Mail, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
    const pillars = [
        {
            icon: Shield,
            title: 'Superior Quality',
            description: 'We exclusively use premium-grade materials and stringent quality control processes to ensure every machine meets international durability and performance standards.',
        },
        {
            icon: Settings,
            title: 'Modern Infrastructure',
            description: 'Our advanced manufacturing facility in Ahmedabad is equipped with precision tools and operated by a highly skilled workforce dedicated to engineering excellence.',
        },
        {
            icon: Clock,
            title: 'Timely Support',
            description: 'We are committed to on-schedule deliveries and providing prompt after-sales support, ensuring your industrial operations never face unnecessary downtime.',
        },
    ];

    const values = [
        {
            icon: Target,
            title: 'Our Mission',
            text: 'To provide reliable, high-precision grinding solutions that enhance industrial efficiency and productivity for our global clientele.',
        },
        {
            icon: Heart,
            title: 'Our Values',
            text: 'Integrity, precision engineering, and absolute customer satisfaction drive our operations. We treat every order with the highest professional care.',
        },
        {
            icon: Award,
            title: 'Our Promise',
            text: 'A personal commitment from our founders to deliver world-class machinery backed by extensive industrial expertise and responsive service.',
        },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO
                title="About Grindstone Machinery | Grinding Machine Manufacturer Ahmedabad"
                description="Grindstone Machinery Industries — manufacturing precision cylindrical grinding machines in Kathwada GIDC, Ahmedabad since 2023. IS:2368 & ISO:2433 certified."
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Grindstone Machinery Industries",
                    "foundingDate": "2023-09-06",
                    "founders": [
                        { "@type": "Person", "name": "Vishal Lunagriya" },
                        { "@type": "Person", "name": "Anita Vishal Lunagriya" },
                        { "@type": "Person", "name": "Nikita Krunalkumar Patel" }
                    ],
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Plot No-5510, GIDC Phase-4, Nr. Ramol Cross Road, Vatva",
                        "addressLocality": "Ahmedabad",
                        "addressRegion": "Gujarat",
                        "postalCode": "382445",
                        "addressCountry": "IN"
                    },
                    "telephone": "+91-95105-54375",
                    "knowsAbout": ["Cylindrical Grinding Machines", "Magnetic Coolant Separators", "Industrial Fabrication", "IS:2368 Standards"]
                }}
            />
            <Navbar />

            {/* Hero Section with Image */}
            <section className="relative w-full pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 md:px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1598302936625-6075fbd98dd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFudWZhY3R1cmluZ3xlbnwwfHwwfHx8MA%3D%3D"
                        alt="Grindstone Machinery Manufacturing Facility"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                </div>
                <div className="relative z-10 max-w-[1440px] mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-gold-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4"
                    >
                        Our Story
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tighter max-w-3xl"
                    >
                        Precision Engineering <br /> Since 2023
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed"
                    >
                        Founded by industry experts in Ahmedabad, Grindstone Machinery Industries has quickly become a trusted name in high-precision grinding solutions and industrial fabrication.
                    </motion.p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <div className="bg-navy-800/50 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-lg flex items-center gap-3">
                            <Shield className="w-5 h-5 text-gold-500" />
                            <span className="text-white font-bold text-xs uppercase tracking-widest">IS: 2368 & ISO: 2433 Certified</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            < section className="w-full py-8 sm:py-12 md:py-16 px-4 md:px-6 bg-gold-500" >
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
                        <div>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter">
                                <StatCounter value={15} duration={2} suffix="+" />
                            </h3>
                            <p className="text-blue-100 mt-2 text-sm md:text-base">Industry Experience</p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter">
                                <StatCounter value={49} duration={2} suffix="+" />
                            </h3>
                            <p className="text-blue-100 mt-2 text-sm md:text-base">Precision Products</p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter">
                                <StatCounter value={100} duration={2} suffix="%" />
                            </h3>
                            <p className="text-blue-100 mt-2 text-sm md:text-base">Quality Assurance</p>
                        </div>
                        <div>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter">
                                <StatCounter value={500} duration={2} suffix="+" />
                            </h3>
                            <p className="text-blue-100 mt-2 text-sm md:text-base">Clients Nationwide</p>
                        </div>
                    </div>

                    <div className="mt-10 pt-10 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4 text-white/80">
                            <MapPin className="w-6 h-6 text-gold-500 shrink-0" />
                            <p className="text-sm font-bold uppercase tracking-wider leading-tight">
                                Plot No-5510, GIDC Phase-4,<br />Nr. Ramol Cross Road, Vatva, Ahmedabad
                            </p>
                        </div>
                        <div className="flex items-center gap-4 text-white/80">
                            <Mail className="w-6 h-6 text-gold-500 shrink-0" />
                            <p className="text-sm font-bold lowercase tracking-wider">
                                grindstonemachine@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </section >

            {/* Mission Statement */}
            < section className="w-full py-20 md:py-32 px-4 md:px-6 bg-black" >
                <div className="max-w-[1200px] mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold text-white tracking-tighter leading-[1.1]"
                    >
                        Quality. <span className="text-gold-500">Precision.</span> Global Reach.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 md:mt-12 text-slate-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        We are a partnership-based firm specialized in the manufacturing and exporting of high-grade grinding machinery. Our Ahmedabad-based facility serves diverse industrial and engineering needs worldwide.
                    </motion.p>
                </div>
            </section >

            {/* Our Story Section */}
            < section className="w-full py-20 md:py-32 px-4 md:px-6" >
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Our Legacy</span>
                            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tighter">
                                Engineering the Future
                            </h2>
                            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                                <p>
                                    Registered on September 06, 2023, Grindstone Machinery Industries is strategically located within the Kathwada GIDC (Gujarat Industrial Development Corporation) estate in Ahmedabad. This tactical positioning ensures immediate access to the region's dense ecosystem of precision metalworking and heat-treatment expertise.
                                </p>
                                <p>
                                    The firm is expertly steered by Mr. Vishal Lunagriya (Partner & CEO) along with Ms. Anita Vishal Lunagriya and Ms. Nikita Krunalkumar Patel. This hands-on multi-partner governance structure allows for direct technical oversight across our boutique manufacturing operations.
                                </p>
                                <p>
                                    We specialize in a vertically integrated portfolio ranging from heavy-duty hydraulic cylindrical grinders to delicate internal grinding spindles with 2-micron runout accuracy. Adhering to IS: 2368 & ISO: 2433 testing standards, we ensure every machine delivers the reliability required for high-throughput production lines.
                                </p>
                            </div>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-gold-500" />
                                    Export Quality Standard
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-gold-500" />
                                    Advanced Manufacturing
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-gold-500" />
                                    ISO Standard Processes
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/machinery-detail.webp"
                                    alt="Precision Machinery Manufacturing"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-gold-500 text-white p-6 rounded-2xl shadow-xl">
                                <p className="text-4xl font-black">100%</p>
                                <p className="text-blue-100 text-sm">Quality Commitment</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section >

            {/* Values Section */}
            < section className="w-full py-20 md:py-32 px-4 md:px-6 bg-slate-50" >
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Our Philosophy</span>
                        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tighter">
                            Technical Vision
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, idx) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-lg shadow-slate-200/50 text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gold-500 flex items-center justify-center mx-auto mb-6">
                                    <value.icon className="text-white w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">{value.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm md:text-base">{value.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* 3 Pillars Grid */}
            < section className="w-full py-20 md:py-32 px-4 md:px-6" >
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Technical Edge</span>
                        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tighter">
                            Why Clients Choose Grindstone
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {pillars.map((pillar, idx) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="group bg-black rounded-3xl p-8 md:p-10 hover:bg-gold-500 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gold-500 group-hover:bg-white flex items-center justify-center mb-6 transition-colors">
                                    <pillar.icon className="text-white group-hover:text-gold-500 w-7 h-7 transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                                <p className="text-slate-400 group-hover:text-blue-50 leading-relaxed transition-colors text-sm md:text-base">{pillar.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Testimonial Section */}
            < TestimonialsSection />

            {/* CTA Strip */}
            < section className="w-full py-16 md:py-20 px-4 md:px-6 bg-gold-500" >
                <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            Request Your Customized Solution
                        </h3>
                        <p className="text-blue-100">Get a precision-engineered quote for your industrial needs today.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex flex-col gap-2">
                            <a
                                href="tel:+919510554375"
                                className="inline-flex items-center justify-center gap-3 bg-white text-gold-500 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all uppercase tracking-widest"
                            >
                                <Phone className="w-5 h-5" />
                                +91 95105 54375
                            </a>
                            <div className="flex justify-center gap-4 text-xs font-medium text-white/80">
                                <a href="tel:+919537396116" className="hover:text-white transition-colors">Tel: +91 95373 96116</a>
                            </div>
                        </div>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-900 transition-all uppercase tracking-widest"
                        >
                            Get Contact
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section >

            <Footer />
        </div >
    );
};

export default AboutPage;
