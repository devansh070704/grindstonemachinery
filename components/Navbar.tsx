import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Products', href: '/products' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-navy-900/60 backdrop-blur-sm z-[9990]"
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-md bg-navy-900 z-[9999] shadow-2xl"
                        >
                            {/* Mobile Header */}
                            <div className="flex justify-between items-center p-6 border-b border-white/10">
                                <span className="font-display text-xl text-white">Menu</span>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Mobile Links */}
                            <div className="p-6 space-y-1">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <Link
                                            to={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`flex items-center justify-between py-4 px-4 rounded-xl transition-all ${isActive(link.href)
                                                ? 'bg-gold-500/20 text-gold-400'
                                                : 'text-white hover:bg-white/5'
                                                }`}
                                        >
                                            <span className="text-lg font-medium">{link.name}</span>
                                            <ChevronRight className="w-5 h-5 opacity-50" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Mobile CTA */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-navy-800 border-t border-white/10">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-full py-4 gradient-gold text-white rounded-xl font-bold text-center block shadow-lg btn-glow"
                                >
                                    Contact Now
                                </Link>
                                <a
                                    href="tel:+919510554375"
                                    className="flex items-center justify-center gap-2 mt-4 text-neutral-400 hover:text-gold-400 transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span className="font-medium">+91 95105 54375</span>
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Desktop Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${(isScrolled || location.pathname.startsWith('/products/'))
                    ? 'py-4 glass shadow-lg border-b border-neutral-200/50'
                    : 'py-6 bg-transparent'
                    }`}
            >
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="group flex items-center gap-2">
                        <img
                            src="/images/grindstone-logo.png"
                            alt="Grindstone Machinery Industries"
                            className="h-10 md:h-12 w-auto transition-all duration-500"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`relative px-5 py-2.5 text-sm font-medium transition-colors ${(isScrolled || location.pathname.startsWith('/products/'))
                                    ? isActive(link.href) ? 'text-gold-500' : 'text-navy-700 hover:text-navy-900'
                                    : isActive(link.href) ? 'text-gold-400' : 'text-white/80 hover:text-white'
                                    }`}
                            >
                                {link.name}
                                {isActive(link.href) && (
                                    <motion.div
                                        layoutId="navIndicator"
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-500 rounded-full"
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex flex-col items-end gap-0.5">
                            <a
                                href="tel:+919510554375"
                                className={`text-sm font-bold transition-colors ${(isScrolled || location.pathname.startsWith('/products/')) ? 'text-navy-900 hover:text-gold-500' : 'text-white hover:text-gold-400'}`}
                            >
                                +91 95105 54375
                            </a>
                            <a
                                href="tel:+919537396116"
                                className={`text-xs font-medium transition-colors ${(isScrolled || location.pathname.startsWith('/products/')) ? 'text-navy-700' : 'text-white/80'}`}
                            >
                                Tel: +91 95373 96116
                            </a>
                        </div>

                        <Link
                            to="/contact"
                            className="hidden md:block px-6 py-3 gradient-gold text-white rounded-full font-semibold text-sm hover:shadow-lg transition-all btn-glow"
                        >
                            Contact Now
                        </Link>

                        <button
                            className={`lg:hidden p-2 rounded-lg transition-colors ${(isScrolled || location.pathname.startsWith('/products/'))
                                ? 'text-navy-900 hover:bg-neutral-100'
                                : 'text-white hover:bg-white/10'
                                }`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </motion.nav>
        </>
    );
};
