import React from 'react';
import { Facebook, Twitter, Instagram, MapPin, ExternalLink } from 'lucide-react';

const Footer = ({ onContactClick }) => {
    return (
        <footer className="w-full bg-[#1a2b3c] text-white overflow-hidden">

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-8 pt-12 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-[22px] font-black tracking-tight">
                            Home Services
                        </h2>
                        <p className="text-gray-400 text-[14px] font-medium leading-relaxed">
                            Australia's leading platform for finding skilled, trusted, and professional home service experts.
                        </p>
                        <div className="flex gap-3">
                            {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                                <button key={idx} className="bg-white/5 hover:bg-[#3174c8] p-2 rounded-lg transition-all duration-300">
                                    <Icon className="w-4 h-4 text-white" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Explore */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase border-b border-[#3174c8] inline-block pb-1">
                            Explore
                        </h4>
                        <ul className="space-y-2">
                            {['Home', 'Services', 'About', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase border-b border-[#3174c8] inline-block pb-1">
                            Services
                        </h4>
                        <ul className="space-y-2">
                            {['Carpenter', 'Electrician', 'Plumber', 'Cleaning', 'Painting'].map((item) => (
                                <li key={item} className="text-gray-400 text-sm">
                                    {item} Experts
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Map */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase border-b border-[#3174c8] inline-block pb-1">
                            Head Office
                        </h4>
                        <div className="relative rounded-xl overflow-hidden border border-white/10">
                            <img
                                src="/map.png"
                                alt="Map"
                                className="w-full h-28 object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="bg-[#3174c8] text-white px-3 py-1 rounded-full text-[10px] flex items-center gap-1">
                                    View <ExternalLink className="w-3 h-3" />
                                </span>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <MapPin className="text-[#3174c8] w-4 h-4" />
                            <p className="text-gray-400 text-[11px]">
                                Sydney NSW 2000, Australia
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white/5 bg-black/20 py-3">
                <div className="max-w-7xl mx-auto px-8 flex justify-center items-center">
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest">
                        © 2026 <span className="text-white">HomeServices Aus</span>
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;