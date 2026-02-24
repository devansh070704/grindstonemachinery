import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export const FloatingActions: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.pageYOffset > 400);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
                >
                    {/* Expanded Actions */}
                    <AnimatePresence>
                        {isExpanded && (
                            <>
                                {/* WhatsApp */}
                                <motion.a
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                                    transition={{ delay: 0.1 }}
                                    href="https://wa.me/919510554375"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 pl-4 pr-3 py-3 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all group"
                                >
                                    <span className="text-sm font-medium whitespace-nowrap">WhatsApp</span>
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                        <MessageCircle className="w-5 h-5" />
                                    </div>
                                </motion.a>

                                {/* Call Now */}
                                <motion.a
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                                    href="tel:+919510554375"
                                    className="flex items-center gap-3 pl-4 pr-3 py-3 bg-navy-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all group"
                                >
                                    <span className="text-sm font-medium whitespace-nowrap">Call Now</span>
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                </motion.a>

                                {/* Get Quote */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                                    transition={{ delay: 0.05 }}
                                >
                                    <Link
                                        to="/contact"
                                        className="flex items-center gap-3 pl-4 pr-3 py-3 gradient-gold text-navy-900 rounded-full shadow-lg hover:shadow-xl transition-all group btn-glow"
                                    >
                                        <span className="text-sm font-semibold whitespace-nowrap">Get Quote</span>
                                        <div className="w-10 h-10 bg-navy-900/10 rounded-full flex items-center justify-center">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                    </Link>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>

                    {/* Main Toggle Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all ${isExpanded
                            ? 'bg-navy-900 text-white rotate-45'
                            : 'gradient-gold text-navy-900 btn-glow'
                            }`}
                    >
                        {isExpanded ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Phone className="w-6 h-6" />
                        )}
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
