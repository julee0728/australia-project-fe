import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, MapPin, ExternalLink } from 'lucide-react';

const Footer = ({ onContactClick }) => {
    return (
        <footer className="w-full bg-[#1a2b3c] text-white overflow-hidden">
            {/* Main Footer Section */}
            <div className="max-w-7xl mx-auto px-8 pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <h2 className="text-[28px] font-black tracking-tight">
                            Home<span className="text-[#3174c8]">Services</span>
                        </h2>
                        <p className="text-gray-400 text-sm font-medium leading-relaxed">
                            Australia's leading platform for finding skilled, trusted, and professional home service experts. Quality work is our signature.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                                <button key={idx} className="bg-white/5 hover:bg-[#3174c8] p-3 rounded-xl transition-all duration-300 group cursor-pointer active:scale-95">
                                    <Icon className="w-5 h-5 text-white" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quick Explore */}
                    <div className="space-y-6 lg:ml-8">
                        <h4 className="text-lg font-bold text-white uppercase tracking-widest border-b-2 border-[#3174c8] inline-block pb-1">Explore</h4>
                        <ul className="space-y-4">
                            {['Home', 'Services', 'About', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white hover:translate-x-2 flex items-center gap-2 transition-all font-semibold">
                                        <span className="w-1.5 h-1.5 bg-[#3174c8] rounded-full"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white uppercase tracking-widest border-b-2 border-[#3174c8] inline-block pb-1">Our Services</h4>
                        <ul className="space-y-4">
                            {['Carpenter', 'Electrician', 'Plumber', 'Cleaning', 'Painting'].map((item) => (
                                <li key={item} className="text-gray-400 hover:text-white cursor-pointer transition-all font-bold uppercase tracking-tight text-sm">
                                    {item} Experts
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Location/Map Column */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white uppercase tracking-widest border-b-2 border-[#3174c8] inline-block pb-1">Head Office</h4>
                        <div className="relative rounded-2xl overflow-hidden group shadow-2xl border-2 border-white/5">
                            <img
                                src="/map.png"
                                alt="Map"
                                className="w-full h-40 object-cover saturate-[0.5] group-hover:saturate-100 transition-all duration-500 cursor-pointer"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all flex items-center justify-center">
                                <span className="bg-[#3174c8] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                    View Map <ExternalLink className="w-3 h-3" />
                                </span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 mt-4">
                            <MapPin className="text-[#3174c8] w-5 h-5 shrink-0" />
                            <p className="text-gray-400 text-xs font-bold leading-normal">
                                LVL 14, 123 George Street,<br />Sydney NSW 2000, Australia
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Sub Footer */}
            <div className="border-t border-white/5 bg-black/20 py-8">
                <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                        © 2024 <span className="text-white">HomeServices Aus</span>. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-gray-500 text-xs font-bold uppercase tracking-widest">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
