import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, SlidersHorizontal, Tag } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { SEO } from '../components/SEO';
import { products } from '../data/products';
import { useDynamicAssets } from '../hooks/useDynamicAssets';

const ProductCard: React.FC<{ product: typeof products[0]; idx: number }> = ({ product, idx }) => {
    const assets = useDynamicAssets(product.id, product.legacyId, product.mainImage);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3, delay: idx * 0.04 }}
            className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-gold-400 transition-all duration-300 flex flex-col h-full group"
        >
            {/* Product Image */}
            <div className="relative overflow-hidden bg-slate-50 border-b border-slate-100" style={{ aspectRatio: '4/3' }}>
                <img
                    src={assets.mainImage}
                    alt={product.name}
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                    <span className="bg-navy-900/80 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                        {product.id}
                    </span>
                </div>
            </div>

            {/* Card Body */}
            <div className="p-5 flex flex-col flex-grow">
                {/* Category tag */}
                <div className="flex items-center gap-1.5 mb-2.5">
                    <Tag className="w-3 h-3 text-gold-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gold-600">{product.category}</span>
                </div>

                {/* Product Name */}
                <h3 className="text-sm font-black text-navy-900 tracking-tight leading-snug mb-2 line-clamp-2">
                    {product.name}
                </h3>

                {/* Short Description */}
                <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-2">
                    {product.shortDescription}
                </p>

                {/* 3 Key Features */}
                <ul className="space-y-1.5 mb-4 flex-grow">
                    {product.features.slice(0, 3).map((feature, i) => {
                        // Show only first sentence or up to 70 chars
                        const shortFeature = feature.split(':')[0].split('.')[0].trim();
                        const displayText = shortFeature.length > 70 ? shortFeature.slice(0, 70) + '…' : shortFeature;
                        return (
                            <li key={i} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                                <span className="text-[11px] text-slate-600 font-medium leading-tight line-clamp-1">
                                    {displayText}
                                </span>
                            </li>
                        );
                    })}
                </ul>

                {/* Price + View Details */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block leading-none mb-0.5">Price</span>
                        <span className="text-navy-900 font-black text-sm leading-tight">{product.price}</span>
                    </div>
                    <Link
                        to={`/products/${product.slug}`}
                        className="flex items-center gap-1.5 bg-navy-900 hover:bg-gold-500 text-white text-[10px] font-black uppercase tracking-widest px-3.5 py-2.5 rounded-lg transition-all duration-200 whitespace-nowrap shadow-sm"
                    >
                        View Details
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

const ProductsPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('all');

    const categories = [
        'all',
        'Grinding Machine',
        'Magnetic Separator',
        'Angle Dresser',
        'Job Work',
        'Polishing Machine',
        'Wheel Balancer',
        'Belt Driven Spindle',
        'Painting Services',
        'Industrial Painting Service',
        'Machine Brush',
        'New Items'
    ];

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO
                title="Industrial Grinding Machines Catalogue | Grindstone Ahmedabad"
                description="Browse 49+ precision grinding machines — cylindrical, CNC, hydraulic, internal & magnetic separators. Manufacturer & exporter in Ahmedabad, Gujarat. IS:2368 certified."
                schema={{
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Industrial Grinding Machines by Grindstone Machinery Industries",
                    "description": "49+ precision grinding machines manufactured in Ahmedabad, Gujarat. Cylindrical, CNC, hydraulic, internal, and magnetic coolant separator models.",
                    "numberOfItems": 49,
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Manual Cylindrical Grinding Machine", "url": "https://grindstonemachinery.in/products/manual-cylindrical-grinding-machine" },
                        { "@type": "ListItem", "position": 2, "name": "Hydraulic Cylindrical Grinding Machine", "url": "https://grindstonemachinery.in/products/hydraulic-cylindrical-grinding-machine" },
                        { "@type": "ListItem", "position": 3, "name": "CNC Cylindrical Grinding Machine", "url": "https://grindstonemachinery.in/products/cnc-cylindrical-grinding-machine" },
                        { "@type": "ListItem", "position": 4, "name": "Internal Grinding Machine", "url": "https://grindstonemachinery.in/products/internal-grinding-machine" },
                        { "@type": "ListItem", "position": 5, "name": "Magnetic Coolant Separator", "url": "https://grindstonemachinery.in/products/magnetic-coolant-separator" }
                    ]
                }}
            />
            <Navbar />

            {/* Page Header */}
            <section className="relative w-full pt-28 pb-14 px-4 md:px-6 overflow-hidden bg-navy-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/machinery-hero.webp"
                        alt="Industrial Machinery Background"
                        className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900 to-navy-900" />
                </div>
                <div className="relative z-10 max-w-[1440px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none mb-6">
                            Precision
                            <span className="block text-gold-500 mt-2">Machine Catalogue</span>
                        </h1>
                        <p className="text-slate-300 text-sm md:text-base lg:text-lg leading-relaxed mb-8">
                            Browse our catalogue of 49+ precision-engineered grinding machines manufactured in Ahmedabad, Gujarat.
                            From manual cylindrical grinders to fully automatic CNC grinding machines — all built to IS: 2368 & ISO: 2433
                            standards for global industrial requirements.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content: Sidebar + Grid */}
            <section className="w-full bg-slate-50 flex-grow">
                <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-screen">

                    {/* Left Sidebar: Categories */}
                    <aside className="w-full lg:w-64 lg:sticky lg:top-[88px] lg:h-[calc(100vh-88px)] bg-white border-b lg:border-b-0 lg:border-r border-slate-200 overflow-y-auto z-30 shrink-0">
                        <div className="p-5">
                            <div className="flex items-center gap-2 text-navy-900 mb-5 px-1">
                                <SlidersHorizontal className="w-4 h-4 text-gold-500" />
                                <h2 className="font-black uppercase tracking-widest text-xs">Filter by Category</h2>
                            </div>

                            <nav className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`whitespace-nowrap lg:whitespace-normal text-left px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-between gap-2 ${activeCategory === cat
                                            ? 'bg-navy-900 text-white shadow-md'
                                            : 'bg-transparent text-slate-500 hover:bg-slate-50 hover:text-navy-900'
                                            }`}
                                    >
                                        <span className="flex-grow">{cat === 'all' ? 'All Products' : cat}</span>
                                        {activeCategory === cat && (
                                            <motion.div layoutId="active-dot" className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0" />
                                        )}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Right Side: Product Grid */}
                    <main className="flex-1 p-5 md:p-8 lg:p-10">
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-3">
                                <h2 className="text-xl md:text-2xl font-black text-navy-900 tracking-tight">
                                    {activeCategory === 'all' ? 'All Products' : activeCategory}
                                </h2>
                                <span className="text-slate-400 font-bold text-xs uppercase tracking-widest bg-slate-100 px-3 py-1.5 rounded-lg">
                                    {filteredProducts.length} Products
                                </span>
                            </div>
                            <div className="h-0.5 w-12 bg-gold-500 rounded-full" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                            <AnimatePresence mode="popLayout">
                                {filteredProducts.map((product, idx) => (
                                    <ProductCard key={product.id} product={product} idx={idx} />
                                ))}
                            </AnimatePresence>
                        </div>
                    </main>
                </div>
            </section >

            {/* CTA Section */}
            <section className="w-full py-14 px-4 md:px-6 bg-navy-900 overflow-hidden">
                <div className="max-w-[900px] mx-auto text-center">
                    <span className="text-gold-500 font-bold uppercase tracking-widest text-xs">Custom Requirements?</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-3 mb-4">
                        Need a Custom Machine?
                    </h2>
                    <p className="text-slate-400 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
                        Looking for specifications not listed here? Our engineers design custom grinding solutions for unique industrial requirements.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-gold-500 text-white w-full sm:w-auto px-6 sm:px-8 py-4 rounded-lg font-black uppercase tracking-widest text-xs shadow-lg hover:bg-gold-600 transition-all"
                    >
                        Request Technical Consultation
                        <ArrowRight className="w-4 h-4 shrink-0" />
                    </Link>
                </div>
            </section >

            <Footer />
        </div>
    );
};

export default ProductsPage;
