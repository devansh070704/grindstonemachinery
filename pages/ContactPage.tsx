import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    ChevronDown,
    ArrowRight,
    MessageSquare,
    CheckCircle,
    Loader2,
    Shield,
    Star,
    Zap,
    ShieldCheck
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';

const ContactPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const benefits = [
        { icon: ShieldCheck, title: 'High Precision', text: 'Micron-level accuracy' },
        { icon: Star, title: '49+ Models', text: 'Diverse machinery range' },
        { icon: Clock, title: 'Expert Support', text: 'Technical assistance' },
        { icon: Zap, title: 'Export Quality', text: 'Global industrial standards' },
    ];

    const services = [
        'Cylindrical Grinding Machines',
        'Magnetic Coolant Separators',
        'Industrial Fabrication Works',
        'Tool Room Spare Parts',
        'Precision Job Work',
        'Industrial Painting Services',
        'Technical Consultancy',
        'Other'
    ];

    const contactInfo = [
        { icon: Phone, label: 'Sales & Support', value: '+91 95105 54375', href: 'tel:+919510554375', description: 'Primary Contact' },
        { icon: Phone, label: 'Technical Dept', value: '+91 95373 96116', href: 'tel:+919537396116', description: 'Mr. Vishal Lunagriya' },
        { icon: MapPin, label: 'Factory Address', value: 'Vatva, Ahmedabad', href: '#', description: 'GIDC Phase-4, Ahmedabad' },
        { icon: Mail, label: 'Official Email', value: 'grindstonemachine@gmail.com', href: 'mailto:grindstonemachine@gmail.com', description: 'Response within 24 hours' },
    ];

    const faqs = [
        {
            question: "Do you export machines internationally?",
            answer: "Yes, we are a leading manufacturer and exporter of grinding machines. we supply our precision-engineered products to clients globally with complete logistics support."
        },
        {
            question: "What is the typical lead time for a new machine?",
            answer: "Lead times vary by model and customization. Generally, standard models take 4-6 weeks, while highly customized PLC-controlled machines may take 8-12 weeks."
        },
        {
            question: "Do you provide installation and onsite training?",
            answer: "Absolutely. Our technical team provides complete installation, commissioning, and operator training to ensure your production line runs smoothly from day one."
        },
        {
            question: "Are custom machine designs available?",
            answer: "Yes, we specialize in custom technical solutions. Our engineering team can design machines tailored to your specific technical tolerances and production requirements."
        },
        {
            question: "What is your quality certification?",
            answer: "We follow rigorous ISO-grade quality standards. Every machine undergoes multi-stage technical inspection and performance testing before dispatch."
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO
                title="Contact Us | Grinding Machine Supplier Ahmedabad Gujarat"
                description="Get a precision engineering quote from Grindstone Machinery, Vatva GIDC Ahmedabad. Call +91 95105 54375 or email grindstonemachine@gmail.com."
                schema={[
                    {
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Contact Grindstone Machinery Industries",
                        "description": "Contact Grindstone Machinery Industries for grinding machine quotes, technical inquiries, or industrial fabrication services in Ahmedabad, Gujarat.",
                        "url": "https://grindstonemachinery.in/contact",
                        "mainEntity": {
                            "@type": "LocalBusiness",
                            "name": "Grindstone Machinery Industries",
                            "telephone": "+91-95105-54375",
                            "email": "grindstonemachine@gmail.com",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Plot No-5510, GIDC Phase-4, Nr. Ramol Cross Road, Vatva",
                                "addressLocality": "Ahmedabad",
                                "addressRegion": "Gujarat",
                                "postalCode": "382445",
                                "addressCountry": "IN"
                            }
                        }
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(f => ({
                            "@type": "Question",
                            "name": f.question,
                            "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                        }))
                    }
                ]}
            />
            <Navbar />

            {/* Hero Section with Image */}
            <section className="relative w-full pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 md:px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnVmYWN0dXJpbmd8ZW58MHx8MHx8fDA%3D"
                        alt="Contact Grindstone Machinery"
                        className="w-full h-full object-cover brightness-[0.4]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </div>
                <div className="relative z-10 max-w-[1440px] mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tighter max-w-3xl leading-[1.1]"
                    >
                        Precision Engineering Support.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed"
                    >
                        Get technical details, request a quote, or discuss your custom machinery requirements with our expert engineering team in Ahmedabad.
                    </motion.p>
                </div>
            </section>

            {/* Benefits Bar */}
            <section className="w-full py-6 md:py-8 lg:py-12 px-4 md:px-6 bg-gold-500">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2 sm:gap-3 text-white">
                                <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-xs sm:text-sm md:text-base leading-tight uppercase tracking-tight">{benefit.title}</p>
                                    <p className="text-blue-100 text-xs sm:text-sm hidden sm:block">{benefit.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Split Container */}
            <section className="w-full py-12 md:py-20 lg:py-32 px-4 md:px-6">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                        {/* Left: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-black rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-16"
                        >
                            <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs">Reach Us</span>
                            <h2 className="mt-3 md:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tighter">Get in Touch</h2>
                            <p className="mt-4 text-sm md:text-base text-slate-500 leading-relaxed">
                                We're an industrial manufacturing firm based in Ahmedabad. Contact us for high-precision machinery and structural fabrication.
                            </p>

                            <div className="mt-8 md:mt-12 lg:mt-16 space-y-3 md:space-y-4">
                                {contactInfo.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gold-500 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/90 transition-colors">
                                            <item.icon className="text-white w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">{item.label}</p>
                                            <p className="text-white font-bold text-base sm:text-lg md:text-xl group-hover:text-gold-500 transition-colors mt-0.5 break-words">{item.value}</p>
                                            <p className="text-slate-500 text-xs sm:text-sm mt-1">{item.description}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Service Area Image Placeholder */}
                            <div className="mt-8 sm:mt-10 md:mt-12 aspect-[16/6] rounded-xl md:rounded-2xl overflow-hidden bg-slate-800 relative shadow-2xl">
                                <img
                                    src="/images/machinery-about.webp"
                                    alt="Service Area Ahmedabad"
                                    className="w-full h-full object-cover opacity-60"
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                                    <div className="bg-gold-500 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest leading-relaxed">
                                        Plot No- 5510, GIDC Phase-4, Nr. Ramol Cross Road, Vatva, Ahmedabad-382445
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Quote Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-16 border border-slate-100"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <MessageSquare className="w-5 h-5 text-gold-500" />
                                <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs">Technical Query</span>
                            </div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black tracking-tighter">Request technical details</h2>
                            <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg text-slate-500 leading-relaxed">
                                Fill out the form below and our technical sales team will get back to you within 24 hours with product specifications.
                            </p>

                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center text-center py-12 bg-white rounded-2xl border border-slate-100 shadow-sm"
                                >
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle className="w-10 h-10 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                                    <p className="text-slate-500 max-w-xs mb-8">
                                        Thank you for contacting Grindstone Machinery Industries. We will get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="inline-flex items-center justify-center gap-3 bg-white text-gold-500 px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-base uppercase tracking-widest hover:bg-slate-100 transition-all shadow-2xl group"
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                                        <div>
                                            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Full Name *</label>
                                            <input
                                                type="text"
                                                placeholder="John Smith"
                                                required
                                                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all bg-white text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Phone Number *</label>
                                            <input
                                                type="tel"
                                                placeholder="07494 078333"
                                                required
                                                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all bg-white text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all bg-white text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Service Needed</label>
                                        <select className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all bg-white text-sm text-slate-600 appearance-none">
                                            <option value="">Select a service...</option>
                                            {services.map((service) => (
                                                <option key={service} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Technical Requirements / Message</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Please describe your technical requirements or machine models you're interested in..."
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all bg-white resize-none text-sm"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="inline-flex items-center justify-center gap-3 bg-navy-900 text-white px-6 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-base uppercase tracking-widest hover:bg-navy-800 transition-all shadow-2xl border-2 border-white/20"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Request
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-center text-slate-400 text-xs">
                                        Or call technical support: <a href="tel:+919510554375" className="text-gold-500 font-bold hover:underline">+91 95105 54375</a>
                                    </p>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Google Maps ── */}
            <section className="w-full px-4 md:px-6 pb-12 md:pb-16">
                <div className="max-w-[1440px] mx-auto">
                    <div className="mb-5">
                        <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs">Find Us</span>
                        <h2 className="mt-2 text-xl md:text-2xl font-extrabold text-navy-900 tracking-tight">Our Location — Vatva GIDC, Ahmedabad</h2>
                    </div>
                    <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50611.88455700144!2d72.62438124505725!3d23.05588190951679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e872c85558d81%3A0x49223bebd4e96eb8!2sGrindstone%20Machinery%20Industries!5e0!3m2!1sen!2sin!4v1771913276129!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Grindstone Machinery Industries — Vatva GIDC Ahmedabad"
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full py-12 md:py-20 lg:py-32 px-4 md:px-6 bg-slate-50">
                <div className="max-w-[900px] mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">FAQ</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tighter">
                            Common Questions
                        </h2>
                        <p className="mt-4 text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                            Got technical questions? We've got answers. Here are the most common things industrial clients ask Grindstone Machinery.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-5 md:p-7 text-left hover:bg-slate-50 transition-colors"
                                >
                                    <span className="font-bold text-black text-base md:text-lg pr-4">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gold-500 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-5 md:px-7 pb-6 md:pb-8 text-slate-500 leading-relaxed text-sm md:text-base">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="w-full py-12 md:py-16 lg:py-24 px-4 md:px-6 bg-gold-500 text-white relative overflow-hidden">
                <div className="max-w-[900px] mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 uppercase tracking-tight"
                    >
                        Industrial Machinery Experts.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto"
                    >
                        Our engineering team is available for technical consultancy and quotes from Ahmedabad facility.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <a
                            href="tel:+919510554375"
                            className="bg-black text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-black/80 transition-all inline-flex items-center justify-center gap-3 uppercase tracking-[0.2em]"
                        >
                            <Phone className="w-5 h-5 md:w-6 md:h-6" />
                            +91 95105 54375
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div >
    );
};

export default ContactPage;
