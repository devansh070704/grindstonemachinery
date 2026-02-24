import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Home,
    Wrench,
    Cog,
    BarChart,
    ChevronDown,
    ArrowRight,
    ShieldCheck,
    Zap,
    Star,
    Phone,
    Settings,
    Hammer,
    Building2,
    Droplets,
    Shield,
    Clock,
    Award
} from 'lucide-react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { SEO } from '../components/SEO';

// ─── Section: Services FAQ Item ─────────────────────────────────────────────

const ServicesFaqItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
            >
                <span className="font-bold text-navy-900 text-base md:text-lg pr-4">{q}</span>
                <ChevronDown className={`w - 5 h - 5 text - gold - 500 transition - transform ${open ? 'rotate-180' : ''} `} />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 text-slate-500 text-sm md:text-base leading-relaxed border-t border-slate-50 pt-4">
                            {a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ServicesPage: React.FC = () => {
    const services = [
        {
            icon: Settings,
            title: 'Grinding Machines',
            description: 'Leading manufacturer of high-precision cylindrical grinding machines available in 49+ distinct models. Engineered for maximum accuracy.',
            features: ['Manual & PLC Models', 'Heavier Casting Design', 'Precision Bearings', 'Custom Tooling'],
            image: '/images/products/internal-cylindrical-grinding-machine-500x500.webp',
        },
        {
            icon: Zap,
            title: 'Coolant Separators',
            description: 'Efficient Magnetic Coolant Separators designed for continuous filtration of metal particles in industrial processes.',
            features: ['Magnetic Drum', 'High Filtration', 'Low Maintenance', 'Energy Efficient'],
            image: '/images/products/magnetic-coolant-separator-500x500.webp',
        },
        {
            icon: Building2,
            title: 'Industrial Fabrication',
            description: 'Expert structural fabrication works including heavy machinery bases, specialized enclosures, and technical structural welding.',
            features: ['Technical Welding', 'Heavy Structures', 'Expert Painting', 'Durable Finish'],
            image: '/images/products/machine-painting-service-500x500.webp',
        },
        {
            icon: Wrench,
            title: 'Tool Room Spares',
            description: 'High-quality spares including Angle Dressers, Wheel Balancers, and customized components for various machine types.',
            features: ['Precision Machined', 'High-Grade Steel', 'Universal Fit', 'Stock Available'],
            image: '/images/products/wheel-balancing-stand-500x500.webp',
        },
        {
            icon: Droplets,
            title: 'Precision Job Work',
            description: 'High-tolerance cylindrical grinding and CNC Wire Cutting (EDM) services for intricate conductive metal components in Titanium, Steel, and Carbide.',
            features: ['CNC Wire EDM', 'Micron Accuracy', 'Burr-Free Edges', 'High Repeatability'],
            image: '/images/products/cnc-cylindrical-grinding-machine-500x500.webp',
        },
        {
            icon: ShieldCheck,
            title: 'Industrial Painting',
            description: 'Professional Epoxy and PU coating services designed for machinery protection against corrosion and chemical exposure in industrial environments.',
            features: ['Corrosion Proofing', 'Epoxy & PU Coating', 'Chemical Resistance', 'Aesthetic Branding'],
            image: '/images/products/cot-and-apron-grinding-machine-500x500.webp',
        },
    ];

    const steps = [
        {
            number: '01',
            title: 'Analysis',
            description: 'Contact us with your technical requirements. We analyze your specific industrial needs and propose the most efficient machinery solution.',
            icon: Phone,
        },
        {
            number: '02',
            title: 'Technical Design',
            description: 'Our engineering team develops technical designs and configurations tailored to your manufacturing specifications and tolerances.',
            icon: Shield,
        },
        {
            number: '03',
            title: 'Manufacturing',
            description: 'Precision manufacturing begins in our Ahmedabad facility using high-grade materials and advanced machining techniques.',
            icon: Clock,
        },
        {
            number: '04',
            title: 'Quality & Delivery',
            description: 'Rigorous quality testing is performed followed by secure logistics to deliver your machinery safely to your facility.',
            icon: Award,
        },
    ];

    const benefits = [
        { icon: ShieldCheck, title: 'Export Quality', text: 'Precision Engineered for Global Standards' },
        { icon: Zap, title: 'Prompt Support', text: 'Responsive Technical Assistance' },
        { icon: Star, title: 'Proven Results', text: '49+ High-Performance Products' },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO
                title="Industrial Solutions & Fabrication Services | Ahmedabad Gujarat"
                description="Precision grinding, magnetic filtration, CNC job work & industrial painting services in Ahmedabad. ISO-grade quality. Get a quote today."
                schema={[
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Industrial Fabrication & Precision Grinding Services",
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Grindstone Machinery Industries",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Ahmedabad",
                                "addressRegion": "Gujarat",
                                "addressCountry": "IN"
                            },
                            "telephone": "+91-95105-54375"
                        },
                        "serviceType": ["Precision Job Work", "CNC Wire EDM", "Machine Painting", "Industrial Fabrication", "Magnetic Coolant Filtration"],
                        "areaServed": { "@type": "State", "name": "Gujarat" }
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            { "@type": "Question", "name": "What industrial services does Grindstone Machinery offer in Ahmedabad?", "acceptedAnswer": { "@type": "Answer", "text": "We offer precision cylindrical grinding, CNC wire EDM job work, industrial fabrication, and specialized machine painting (epoxy/PU) services in Vatva GIDC, Ahmedabad." } },
                            { "@type": "Question", "name": "Do you provide CNC wire EDM job work services in India?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We have high-speed CNC wire EDM machines for precision cutting and tool room requirements, serving clients across India from our Ahmedabad facility." } },
                            { "@type": "Question", "name": "What is the difference between epoxy and PU coating for industrial machines?", "acceptedAnswer": { "@type": "Answer", "text": "Epoxy coatings provide superior chemical resistance and durability for internal components, while PU (Polyurethane) coatings offer better UV resistance and gloss for external surfaces. We offer both based on your requirements." } },
                            { "@type": "Question", "name": "What is the typical turnaround for precision job work in Ahmedabad?", "acceptedAnswer": { "@type": "Answer", "text": "Standard job work typically takes 3-7 days depending on the volume and technical complexity. We prioritize fast turnaround for tool room emergencies." } }
                        ]
                    }
                ]}
            />
            <Navbar />

            {/* Hero Section with Image */}
            <section className="relative w-full pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 md:px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/home-hero.webp"
                        alt="Expert Paving Solutions"
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
                        What We Do
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tighter max-w-3xl leading-[1.1]"
                    >
                        Industrial Grinding <br /> & Precision Solutions.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed"
                    >
                        From cylindrical grinders to custom industrial fabrication, we provide precision-engineered excellence for your manufacturing needs.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 flex flex-wrap gap-4"
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-gold-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-gold-500/90 transition-all uppercase tracking-widest"
                        >
                            Get Contact
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <div className="flex flex-col gap-2">
                            <a
                                href="tel:+919510554375"
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all uppercase tracking-widest"
                            >
                                <Phone className="w-5 h-5" />
                                +91 95105 54375
                            </a>
                            <div className="flex justify-center gap-4 text-xs font-medium text-white/80">
                                <a href="tel:+919537396116" className="hover:text-gold-400 transition-colors">Tel: +91 95373 96116</a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Bar */}
            <section className="w-full py-16 md:py-20 px-4 md:px-6 bg-black">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        {benefits.map((benefit, idx) => (
                            <div
                                key={idx}
                                className={`py - 8 md: py - 12 px - 6 md: px - 10 text - center ${idx !== benefits.length - 1 ? 'md:border-r border-white/10' : ''
                                    } ${idx !== 0 ? 'border-t md:border-t-0 border-white/10' : ''} `}
                            >
                                <p className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase">{benefit.title}</p>
                                <p className="text-slate-500 text-sm mt-2">{benefit.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="w-full py-20 md:py-32 px-4 md:px-6 bg-slate-50">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Expert Solutions</span>
                        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tighter">
                            Comprehensive Industrial Solutions
                        </h2>
                        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
                            We take pride in our versatility. From precision grinding to heavy fabrication, we apply the same high standards to every project.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05, duration: 0.6 }}
                                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col"
                            >
                                <div className="aspect-[16/9] overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6 md:p-8 flex-1 flex flex-col">
                                    <div className="w-12 h-12 rounded-2xl bg-gold-500 flex items-center justify-center mb-6">
                                        <service.icon className="text-white w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed mb-6 text-sm md:text-base">
                                        {service.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {service.features.map((feature, i) => (
                                            <span key={i} className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gold-500 bg-gold-500/5 px-3 py-1.5 rounded-full">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    <Link
                                        to="/contact"
                                        className="mt-auto inline-flex items-center justify-center gap-2 w-full py-4 bg-navy-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-gold-500 transition-all duration-300 group/btn"
                                    >
                                        Request a Quote
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="w-full py-20 md:py-32 px-4 md:px-6 bg-black">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Our Process</span>
                        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tighter">
                            How We Work
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative group"
                            >
                                <span className="text-7xl md:text-8xl font-black text-white/5 leading-none block mb-[-20px] transition-colors group-hover:text-gold-500/10">
                                    {step.number}
                                </span>
                                <h3 className="text-xl font-bold text-white relative z-10">{step.title}</h3>
                                <p className="text-slate-500 text-sm mt-3 leading-relaxed relative z-10">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="w-full py-20 md:py-32 px-4 md:px-6 bg-gold-500">
                <div className="max-w-[900px] mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tighter"
                    >
                        Ready to Enhance Your Production?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-blue-100 text-lg mb-8 max-w-xl mx-auto"
                    >
                        Get a detailed technical quote from Ahmedabad's trusted machinery experts. We respond to all inquiries within 24 hours.
                    </motion.p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-white text-gold-500 px-10 py-5 rounded-xl font-bold hover:bg-blue-50 transition-all uppercase tracking-widest"
                        >
                            Contact Us
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <div className="flex flex-col gap-2">
                            <a
                                href="tel:+919510554375"
                                className="inline-flex items-center justify-center gap-2 bg-black text-white px-10 py-5 rounded-xl font-bold hover:bg-gray-900 transition-all uppercase tracking-widest"
                            >
                                <Phone className="w-5 h-5" />
                                +91 95105 54375
                            </a>
                            <div className="flex justify-center gap-4 text-xs font-medium text-white/80">
                                <a href="tel:+919537396116" className="hover:text-white transition-colors">Tel: +91 95373 96116</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full py-20 md:py-32 px-4 md:px-6 bg-slate-50 border-t border-slate-100">
                <div className="max-w-[900px] mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs">Services FAQ</span>
                        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tighter">
                            Common Questions
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {[
                            { q: "What industrial services does Grindstone Machinery offer?", a: "We provide high-precision cylindrical grinding, CNC wire EDM job work, structural fabrication, and professional machine painting services (epoxy and PU) in Vatva GIDC, Ahmedabad." },
                            { q: "Do you provide CNC wire EDM job work services?", a: "Yes. Our facility is equipped with precision wire EDM machines for complex industrial components and tool room tooling requirements." },
                            { q: "What is the difference between epoxy and PU coating?", a: "Epoxy is highly durable and resistant to industrial chemicals, ideal for heavy-duty machine frames. PU (Polyurethane) provides an automotive-grade finish with high UV and weather resistance." },
                            { q: "What is the typical turnaround time for services?", a: "Most grinding and fabrication job work takes 3 to 10 days depending on complexity and material availability. We offer express support for critical production breakdowns." },
                        ].map((item, idx) => (
                            <ServicesFaqItem key={idx} q={item.q} a={item.a} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ServicesPage;
