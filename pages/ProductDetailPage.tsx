import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ChevronRight,
    Phone,
    Mail,
    CheckCircle2,
    MessageSquare,
    MessageCircle,
    Tag,
    Wrench,
    LayoutGrid,
    IndianRupee,
    FileText,
    ArrowRight
} from 'lucide-react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { SEO } from '../components/SEO';
import { products, Product } from '../data/products';
import { useDynamicAssets } from '../hooks/useDynamicAssets';

// ─── Section: Product FAQ Accordion Item ─────────────────────────────────────

const ProductFaqItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="border border-slate-200 rounded-xl overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-100 transition-colors"
            >
                <span className="font-bold text-navy-900 text-sm md:text-base pr-4">{q}</span>
                <svg
                    className={`w-5 h-5 text-gold-500 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {open && (
                <div className="px-5 pb-5 text-slate-500 text-sm md:text-base leading-relaxed">
                    {a}
                </div>
            )}
        </div>
    );
};

// ─── Section: Technical Specifications ───────────────────────────────────────

const SpecsTable: React.FC<{ specs: Record<string, string> }> = ({ specs }) => {
    const entries = Object.entries(specs);
    if (!entries.length) return null;
    return (
        <section className="w-full py-12 px-4 md:px-6 bg-white border-t border-slate-100">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center shrink-0">
                        <Wrench className="w-4 h-4 text-gold-500" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-black text-navy-900 tracking-tight">Technical Specifications</h2>
                </div>
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                    <table className="w-full text-sm">
                        <tbody>
                            {entries.map(([label, value], i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                                    <td className="px-5 py-3 font-bold text-navy-900 w-2/5 border-r border-slate-100 text-xs uppercase tracking-wide">
                                        {label}
                                    </td>
                                    <td className="px-5 py-3 text-slate-600 text-sm font-medium">
                                        {value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

// ─── Section: Industrial Applications ────────────────────────────────────────

const ApplicationsPills: React.FC<{ applications: string[] }> = ({ applications }) => {
    if (!applications.length) return null;
    return (
        <section className="w-full py-12 px-4 md:px-6 bg-slate-50 border-t border-slate-100">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center shrink-0">
                        <LayoutGrid className="w-4 h-4 text-gold-500" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-black text-navy-900 tracking-tight">Industrial Applications</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                    {applications.map((app, i) => (
                        <div
                            key={i}
                            className="flex items-center bg-white border border-slate-200 rounded-lg px-4 py-2.5 shadow-sm hover:border-gold-400 hover:shadow-md transition-all"
                        >
                            <span className="text-xs font-bold text-navy-900 uppercase tracking-wide">{app}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ─── Section: Pricing & Quote Box ────────────────────────────────────────────

const PricingBox: React.FC<{ product: Product }> = ({ product }) => {
    const customPricingNote = product.price?.toLowerCase().includes('inquiry') ||
        product.price?.toLowerCase().includes('contact');

    return (
        <section className="w-full py-12 px-4 md:px-6 bg-white border-t border-slate-100 overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center shrink-0">
                        <IndianRupee className="w-4 h-4 text-gold-500" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-black text-navy-900 tracking-tight">Pricing & Quote</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Price card */}
                    <div className="bg-navy-900 rounded-xl p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            <span className="text-gold-500 text-xs font-bold uppercase tracking-widest block mb-2">Listed Price</span>
                            <p className="text-white font-black text-2xl sm:text-3xl md:text-4xl tracking-tight break-words">{product.price}</p>
                            {customPricingNote && (
                                <p className="text-slate-400 text-xs mt-3">Custom pricing available based on specifications and quantity.</p>
                            )}
                        </div>
                        <a
                            href={`https://wa.me/919510554375?text=I'm interested in the ${product.name}. Please provide a quote.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 rounded-lg font-black uppercase tracking-widest text-xs transition-all w-full"
                        >
                            <MessageCircle className="w-4 h-4 shrink-0" />
                            WhatsApp for Price
                        </a>
                    </div>

                    {/* Quote card */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            <span className="text-navy-900 text-xs font-bold uppercase tracking-widest block mb-2">
                                <FileText className="inline w-3.5 h-3.5 mr-1 text-gold-500" />
                                Need a Formal Quote?
                            </span>
                            <p className="text-slate-600 text-sm leading-relaxed mt-3">
                                Send us your technical specifications, quantity, and delivery requirements. Our sales team will get back to you within 24 hours.
                            </p>
                        </div>
                        <Link
                            to="/contact"
                            className="mt-6 flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-6 py-3.5 rounded-lg font-black uppercase tracking-widest text-xs transition-all w-full"
                        >
                            <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                            Request Formal Quote
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ─── Main Product Detail Page ─────────────────────────────────────────────────

const ProductDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null);
    const [activeImage, setActiveImage] = useState<string>('');

    const assets = useDynamicAssets(product?.id || '', product?.legacyId, product?.mainImage);

    useEffect(() => {
        const foundProduct = products.find(p => p.slug === slug);
        if (foundProduct) {
            setProduct(foundProduct);
        } else {
            navigate('/products');
        }
    }, [slug, navigate]);

    useEffect(() => {
        if (assets.mainImage) {
            setActiveImage(assets.mainImage);
        }
    }, [assets.mainImage]);

    if (!product) return null;

    const allImages = [assets.mainImage, ...assets.gallery].filter(Boolean);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <SEO
                title={`${product.name} Manufacturer Ahmedabad | Grindstone Machinery`}
                description={`Buy ${product.name} from Grindstone Machinery, Ahmedabad. ${product.shortDescription} IS:2368 & ISO:2433 certified. Call +91 95105 54375.`}
                schema={[
                    {
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": product.name,
                        "description": product.shortDescription,
                        "brand": { "@type": "Brand", "name": "Grindstone Machinery Industries" },
                        "offers": {
                            "@type": "Offer",
                            "priceCurrency": "INR",
                            "price": product.price.replace(/[^0-9]/g, ''),
                            "availability": "https://schema.org/InStock",
                            "seller": { "@type": "Organization", "name": "Grindstone Machinery Industries" }
                        }
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://grindstonemachinery.in" },
                            { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://grindstonemachinery.in/products" },
                            { "@type": "ListItem", "position": 3, "name": product.name, "item": `https://grindstonemachinery.in/products/${product.slug}` }
                        ]
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            { "@type": "Question", "name": `What are the specifications of the ${product.name}?`, "acceptedAnswer": { "@type": "Answer", "text": `${product.shortDescription} Full technical specs including capacity and motor power are listed on this page.` } },
                            { "@type": "Question", "name": `Is the ${product.name} available for export?`, "acceptedAnswer": { "@type": "Answer", "text": "Yes, we export all our grinding machines globally from Ahmedabad, India with full documentation support." } }
                        ]
                    }
                ]}
            />
            <Navbar />

            {/* Breadcrumbs */}
            <div className="pt-24 md:pt-28 pb-4 px-4 md:px-6 bg-slate-50 border-b border-slate-200">
                <div className="max-w-[1440px] mx-auto flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link to="/products" className="hover:text-gold-500 transition-colors">Products</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-navy-900 truncate max-w-[200px]">{product.name}</span>
                </div>
            </div>

            {/* ─── SECTION 1: Hero ─── */}
            <section className="w-full py-10 md:py-16 px-4 md:px-6">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-10 md:gap-16">

                        {/* Left: Images */}
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.97 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center p-8 md:p-12"
                                style={{ aspectRatio: '4/3' }}
                            >
                                <img
                                    src={activeImage}
                                    alt={product.name}
                                    className="max-w-full max-h-full object-contain drop-shadow-lg"
                                />
                            </motion.div>

                            {allImages.length > 1 && (
                                <div className="grid grid-cols-4 gap-3">
                                    {allImages.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveImage(img)}
                                            className={`aspect-square rounded-lg p-2 border-2 transition-all ${activeImage === img
                                                ? 'border-gold-500 bg-gold-50'
                                                : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                                                }`}
                                        >
                                            <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-contain" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Right: Product Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex flex-col"
                        >
                            {/* Category Badge */}
                            <div className="flex items-center gap-2 mb-4">
                                <Tag className="w-3.5 h-3.5 text-gold-500" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded">
                                    {product.category}
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-2.5 py-1 rounded">
                                    {product.id}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-2xl md:text-4xl lg:text-[2.6rem] font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
                                {product.name}
                            </h1>

                            {/* Short Intro */}
                            <div className="space-y-2 mb-6">
                                {product.fullDescription.map((para, i) => (
                                    <p key={i} className="text-slate-600 text-sm md:text-base leading-relaxed">
                                        {para}
                                    </p>
                                ))}
                            </div>

                            {/* Key Features */}
                            {product.features.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-xs font-black uppercase tracking-widest text-navy-900 mb-3 flex items-center gap-2">
                                        <span className="w-4 h-0.5 bg-gold-500 inline-block rounded-full" />
                                        Key Features
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-2.5">
                                        {product.features.map((feature, i) => {
                                            const title = feature.split(':')[0].trim();
                                            const desc = feature.includes(':') ? feature.split(':').slice(1).join(':').trim() : '';
                                            return (
                                                <div key={i} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-100">
                                                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="text-xs font-black text-navy-900 leading-snug">{title}</p>
                                                        {desc && <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2">{desc}</p>}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* Price Callout */}
                            <div className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 flex items-center gap-4 mb-6">
                                <IndianRupee className="w-5 h-5 text-gold-500 shrink-0" />
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">Price</span>
                                    <span className="text-navy-900 font-black text-lg">{product.price}</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                                <a
                                    href={`https://wa.me/919510554375?text=I'm interested in the ${product.name}. Please provide technical details and a quote.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-black uppercase tracking-widest text-xs text-center transition-all flex items-center justify-center gap-2 shadow-sm"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    WhatsApp Inquiry
                                </a>
                                <Link
                                    to="/contact"
                                    className="flex-1 bg-navy-900 hover:bg-navy-800 text-white px-6 py-4 rounded-xl font-black uppercase tracking-widest text-xs text-center transition-all flex items-center justify-center gap-2 shadow-sm"
                                >
                                    <MessageSquare className="w-4 h-4 text-gold-500" />
                                    Request Quote
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── SECTION 2: Technical Specifications ─── */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
                <SpecsTable specs={product.specifications} />
            )}

            {/* ─── SECTION 3: Industrial Applications ─── */}
            {product.applications && product.applications.length > 0 && (
                <ApplicationsPills applications={product.applications} />
            )}

            {/* ─── SECTION 4: Pricing & Quote Box ─── */}
            <PricingBox product={product} />

            {/* Support CTA */}
            <section className="w-full py-12 px-4 md:px-6 bg-slate-50 border-t border-slate-200 overflow-hidden">
                <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-5">
                    <div className="bg-navy-900 rounded-xl p-6 md:p-10 text-white flex flex-col justify-center">
                        <h3 className="text-xl md:text-2xl font-black mb-3 tracking-tight">Direct Sales Hotline</h3>
                        <p className="text-slate-400 text-sm mb-5">Talk directly to Mr. Vishal Lunagriya (Partner) for custom pricing and technical requirements.</p>
                        <a href="tel:+919510554375" className="text-lg sm:text-xl md:text-2xl font-black text-gold-500 flex items-center gap-2 hover:scale-105 transition-transform origin-left w-fit break-all">
                            <Phone className="w-5 h-5 shrink-0" />
                            +91 95105 54375
                        </a>
                    </div>
                    <div className="bg-white rounded-xl p-6 md:p-10 border border-slate-200 flex flex-col justify-center">
                        <h3 className="text-xl md:text-2xl font-black mb-3 tracking-tight text-navy-900">Email Technical Queries</h3>
                        <p className="text-slate-500 text-sm mb-5">Send drawings or specifications for feasibility analysis.</p>
                        <a href="mailto:grindstonemachine@gmail.com" className="text-sm sm:text-base font-bold text-navy-900 flex items-start gap-2 hover:text-gold-600 transition-colors break-all">
                            <Mail className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                            grindstonemachine@gmail.com
                        </a>
                    </div>
                </div>
            </section>

            {/* ─── Product FAQ Section ─── */}
            <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-slate-50 border-t border-slate-100">
                <div className="max-w-[900px] mx-auto">
                    <div className="mb-10">
                        <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs">Product Questions</span>
                        <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-navy-900 tracking-tight">
                            FAQs — {product.name}
                        </h2>
                    </div>
                    <div className="space-y-3">
                        {[
                            { q: `What are the key specifications of the ${product.name}?`, a: `${product.shortDescription} Full technical specs including grinding capacity, motor power, and accuracy grades are listed above. Call +91 95105 54375 for a detailed datasheet.` },
                            { q: `What is the price of the ${product.name} in India?`, a: `The ${product.name} is priced at ${product.price || 'competitive rates based on configuration'}. Contact Grindstone Machinery Industries, Ahmedabad at +91 95105 54375 for exact pricing.` },
                            { q: `Is the ${product.name} available for export from India?`, a: `Yes. We export the ${product.name} from our Vatva GIDC factory in Ahmedabad with full documentation, insurance, and logistics support.` },
                            { q: `Can the ${product.name} be customized for my application?`, a: `Yes. We offer application-specific customization of the ${product.name} — including center distances, swing capacity, PLC controls, and automation. Contact us for feasibility.` },
                            { q: `What warranty does Grindstone Machinery offer on the ${product.name}?`, a: `All machines including the ${product.name} carry a manufacturer's warranty. Email grindstonemachine@gmail.com for warranty scope and service terms.` },
                        ].map((item, idx) => (
                            <ProductFaqItem key={idx} q={item.q} a={item.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Products Section */}
            <section className="w-full py-20 px-4 md:px-6 bg-white">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs">More Machinery</span>
                            <h2 className="text-3xl md:text-5xl font-black text-navy-900 tracking-tighter mt-2">Related Products</h2>
                        </div>
                        <Link to="/products" className="hidden md:flex items-center gap-2 group text-navy-900 font-bold uppercase tracking-widest text-xs">
                            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {products
                            .filter(p => p.id !== product.id && (p.category === product.category || Math.random() > 0.5))
                            .slice(0, 3)
                            .map(p => (
                                <Link
                                    key={p.id}
                                    to={`/products/${p.slug}`}
                                    className="group block bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1"
                                >
                                    <div className="aspect-[16/10] overflow-hidden bg-slate-200">
                                        <img
                                            src={p.mainImage}
                                            alt={p.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Tag className="w-3.5 h-3.5 text-gold-500" />
                                            <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">{p.category}</span>
                                        </div>
                                        <h3 className="text-lg font-black text-navy-900 mb-2 group-hover:text-gold-500 transition-colors uppercase tracking-tight">{p.name}</h3>
                                        <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed mb-4">{p.shortDescription}</p>
                                        <div className="flex items-center text-navy-900 font-bold text-xs uppercase tracking-widest gap-2">
                                            View Details <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ProductDetailPage;
