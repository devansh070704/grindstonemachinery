import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Award, Phone, CheckCircle, ChevronDown, Settings } from 'lucide-react';
import { StatCounter } from '../components/StatCounter';
import { ServicesSection } from '../components/ServicesSection';
import { GallerySection } from '../components/GallerySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CtaSection } from '../components/CtaSection';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { SEO } from '../components/SEO';

const LOCAL_BUSINESS_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Grindstone Machinery Industries",
    "description": "Leading manufacturer and exporter of high-precision cylindrical grinding machines, magnetic coolant separators, and industrial fabrication services in Ahmedabad, Gujarat, India.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No-5510, GIDC Phase-4, Nr. Ramol Cross Road, Vatva",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "382445",
        "addressCountry": "IN"
    },
    "telephone": "+91-95105-54375",
    "email": "grindstonemachine@gmail.com",
    "openingHours": "Mo-Sa 09:00-18:00",
    "priceRange": "\u20b9\u20b9\u20b9"
};

const ORGANIZATION_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Grindstone Machinery Industries",
    "foundingDate": "2023-09-06",
    "areaServed": ["Ahmedabad", "Gujarat", "India"],
    "contactPoint": { "@type": "ContactPoint", "telephone": "+91-95105-54375", "contactType": "Sales" }
};

const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        { "@type": "Question", "name": "Who is the best cylindrical grinding machine manufacturer in Ahmedabad?", "acceptedAnswer": { "@type": "Answer", "text": "Grindstone Machinery Industries in Kathwada GIDC, Ahmedabad, manufactures 49+ models certified to IS: 2368 & ISO: 2433 standards." } },
        { "@type": "Question", "name": "What types of grinding machines are made in Ahmedabad Gujarat?", "acceptedAnswer": { "@type": "Answer", "text": "Hydraulic, CNC, manual, internal, universal, and PLC-controlled cylindrical grinding machines are manufactured in Ahmedabad. Grindstone Machinery specializes in all these variants." } },
        { "@type": "Question", "name": "Do you export grinding machines from India?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Grindstone Machinery Industries exports precision grinding machines globally with full logistics support from Ahmedabad." } },
        { "@type": "Question", "name": "What is the price of a cylindrical grinding machine in India?", "acceptedAnswer": { "@type": "Answer", "text": "Manual models start from \u20b98,25,000. Hydraulic and CNC models are priced higher. Call +91 95105 54375 for an exact quote." } },
        { "@type": "Question", "name": "Are your grinding machines IS and ISO standard certified?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. All machines comply with IS: 2368 & ISO: 2433 standards ensuring export-quality spindle runout and surface finish accuracy." } }
    ]
};

const faqItems = [
    { q: "Who is the best cylindrical grinding machine manufacturer in Ahmedabad?", a: "Grindstone Machinery Industries, located in Kathwada GIDC, Ahmedabad, is a leading manufacturer and exporter with 49+ models all certified to IS: 2368 & ISO: 2433 standards." },
    { q: "What types of grinding machines are manufactured in Ahmedabad, Gujarat?", a: "Ahmedabad's GIDC belt produces hydraulic, CNC, manual, internal, universal, and PLC-controlled cylindrical grinding machines. Grindstone Machinery specializes in all these from its Kathwada GIDC factory." },
    { q: "Do you export grinding machines from India?", a: "Yes. Grindstone Machinery Industries manufactures and exports precision grinding machines globally, providing full logistics support from its Ahmedabad facility." },
    { q: "What is the price of a cylindrical grinding machine in India?", a: "Manual cylindrical grinding machines start from ₹8,25,000. Hydraulic and CNC models are priced higher based on specs. Call +91 95105 54375 for a detailed quote." },
    { q: "Are your machines IS and ISO standard compliant?", a: "Yes. Every machine complies with IS: 2368 & ISO: 2433 standards, ensuring export-quality surface finish and spindle runout accuracy for global industrial requirements." },
];

const HomePage: React.FC = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const stagger = {
        visible: {
            transition: { staggerChildren: 0.15 }
        }
    };

    const trustBadges = [
        { icon: Shield, text: '100% Quality Guaranteed' },
        { icon: Award, text: 'Manufacturer & Exporter' },
        { icon: Clock, text: 'Timely Delivery & Support' },
    ];

    const stats = [
        { value: 15, suffix: '+', label: 'Years Industry Experience' },
        { value: 49, suffix: '+', label: 'Precision Products' },
        { value: 100, suffix: '%', label: 'Quality Rating' },
        { value: 4.7, suffix: '/5', label: 'Customer Rating' },
    ];

    const [openFaq, setOpenFaq] = React.useState<number | null>(null);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO
                title="Cylindrical Grinding Machine Manufacturer Ahmedabad | Grindstone Machinery"
                description="Leading manufacturer & exporter of hydraulic, CNC & manual cylindrical grinding machines in Ahmedabad, Gujarat. 49+ models. IS:2368 & ISO:2433 certified. Call +91 95105 54375."
                schema={[LOCAL_BUSINESS_SCHEMA, ORGANIZATION_SCHEMA, FAQ_SCHEMA]}
            />
            <Navbar />

            {/* ===== HERO SECTION - Cinematic ===== */}
            <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/machinery-hero.webp"
                        alt="Grindstone Machinery - Precision Industrial Equipment"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/60 to-navy-900/90" />
                </div>

                {/* Hero Content */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                    className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-28 sm:pt-32 pb-16 sm:pb-20 text-center"
                >
                    {/* Badge */}
                    <motion.div
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8 border border-white/20"
                    >
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-500 rounded-full animate-pulse" />
                        <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide">Precision Engineering Excellence</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        variants={fadeInUp}
                        className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-white font-bold leading-[1.15] mb-4 sm:mb-6"
                    >
                        Precision Grinding
                        <br />
                        <span className="text-gradient-gold">& Industrial Solutions</span>
                    </motion.h1>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-wrap justify-center gap-3 mb-6"
                    >
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full flex items-center gap-2">
                            <Shield className="w-4 h-4 text-gold-500" />
                            <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest">IS: 2368 & ISO: 2433</span>
                        </div>
                    </motion.div>

                    {/* Subheading */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-neutral-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl lg:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
                    >
                        Manufacturer & Exporter of high-precision Cylindrical Grinding Machines with micron-level tolerances.
                        Specializing in Magnetic Filtration, Spindle Tech, and ISO-standard Engineering.
                        Serving global industries from Kathwada GIDC, Ahmedabad.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 px-2">
                        <Link
                            to="/contact"
                            className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 gradient-gold text-white rounded-full font-semibold text-sm sm:text-base hover:shadow-xl transition-all btn-glow"
                        >
                            Get Technical Details
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <div className="flex flex-col gap-2">
                            <a
                                href="tel:+919510554375"
                                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-sm sm:text-base border border-white/20 hover:bg-white/20 transition-all"
                            >
                                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                                +91 95105 54375
                            </a>
                            <div className="flex justify-center gap-4 text-xs font-medium text-white/80">
                                <a href="tel:+919537396116" className="hover:text-gold-400 transition-colors">Tel: +91 95373 96116</a>
                                <span className="text-white/20">|</span>
                                <span className="text-white/60 uppercase tracking-wider">Ahmedabad, Gujarat</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        variants={fadeInUp}
                        className="hidden sm:flex flex-wrap justify-center gap-4 md:gap-10"
                    >
                        {trustBadges.map((badge, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-white/70">
                                <badge.icon className="w-4 h-4 md:w-5 md:h-5 text-gold-400" />
                                <span className="text-xs md:text-sm font-medium">{badge.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Floating Trust Section Removed for Decluttering */}
            </section>

            {/* ===== STATS SECTION ===== */}
            <section className="w-full py-16 md:py-20 gradient-navy">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={stagger}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
                    >
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="text-center"
                            >
                                <div className="flex items-baseline justify-center gap-1 mb-2">
                                    <StatCounter
                                        value={stat.value}
                                        duration={2}
                                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold-400"
                                    />
                                    <span className="text-2xl md:text-3xl font-bold text-gold-500">{stat.suffix}</span>
                                </div>
                                <p className="text-neutral-400 text-sm md:text-base font-medium uppercase tracking-wider">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ===== WHY CHOOSE US ===== */}
            <section className="w-full pt-20 md:pt-32 pb-10 md:pb-16 bg-neutral-50">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="text-center mb-16"
                    >
                        <motion.span variants={fadeInUp} className="text-gold-500 font-semibold text-sm uppercase tracking-widest">
                            Our Value Proposition
                        </motion.span>
                        <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-900 font-bold mt-4">
                            Precision Engineered
                            <br />
                            <span className="text-gradient-gold">Industrial Excellence</span>
                        </motion.h2>
                    </motion.div>

                    {/* Feature Cards */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    >
                        {[
                            {
                                icon: Award,
                                title: 'Micron-Level Precision',
                                description: 'Adhering to IS: 2368 & ISO: 2433 standards, we deliver internal grinding spindles with 2-micron runout accuracy.',
                            },
                            {
                                icon: Settings,
                                title: 'Vertical Integration',
                                description: 'We manufacture critical sub-assemblies in-house, ensuring absolute control over SFPM and vibration levels.',
                            },
                            {
                                icon: CheckCircle,
                                title: 'Bespoke Engineering',
                                description: 'High-customization solutions with direct access to technical decision-makers for complex industrial requirements.',
                            },
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="group bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-neutral-100 hover-lift"
                            >
                                <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-6 group-hover:animate-glow">
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-3">{feature.title}</h3>
                                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <ServicesSection />
            <GallerySection />
            <TestimonialsSection />
            <CtaSection />

            {/* ===== FAQ SECTION ===== */}
            <section className="w-full py-20 md:py-28 px-4 md:px-6 bg-white">
                <div className="max-w-[900px] mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Common Questions</span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tighter">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-3 text-slate-500 text-sm max-w-xl mx-auto">
                            Everything you need to know about our grinding machines, manufacturing process, and services.
                        </p>
                    </div>
                    <div className="space-y-3">
                        {faqItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="border border-slate-200 rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-slate-50 transition-colors"
                                >
                                    <span className="font-bold text-navy-900 text-sm md:text-base pr-4">{item.q}</span>
                                    <ChevronDown className={`w-5 h-5 text-gold-500 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                                </button>
                                {openFaq === idx && (
                                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-slate-500 text-sm md:text-base leading-relaxed">
                                        {item.a}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HomePage;
