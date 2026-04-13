import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
    return (
        <section id="pricing" className="w-full max-w-7xl mx-auto px-8 py-16 bg-[#f8faff]">
            <div className="text-center mb-16">
                <p className="text-[#3174c8] font-bold tracking-widest uppercase mb-2">Pricing</p>
                <h2 className="text-1xl md:text-2xl font-medium text-[#2e425a] mb-4 tracking-tighter">
                    Transparent packages. No hidden fees.
                </h2>
                <p className="text-lg text-gray-500 max-w-3xl mx-auto font-medium">
                    All packages include a free initial consultation, transparent quotes, and a dedicated manager for your project.
                </p>
                <div className="w-24 h-2 bg-[#3174c8] mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Starter */}
                <div className="bg-white rounded-[28px] p-8 border-2 border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-[#2e425a] font-bold uppercase tracking-widest mb-4">Starter</h3>
                    <div className="mb-4">
                        <span className="text-4xl font-black text-[#1a2b3c]">$150</span>
                        <span className="text-gray-500 ml-2">per visit</span>
                    </div>
                    <ul className="space-y-4 mb-8 text-gray-600 font-medium text-sm">
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#3174c8]" /> Standard diagnostic</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#3174c8]" /> Minor repairs included</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#3174c8]" /> Service warranty</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#3174c8]" /> Email support</li>
                    </ul>
                </div>

                {/* Growth / Pro */}
                <div className="bg-[#2e425a] rounded-[28px] p-8 md:scale-105 border-2 border-[#2e425a] shadow-2xl relative text-white">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#3174c8] text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg">
                        Most Popular
                    </div>
                    <h3 className="text-blue-200 font-bold uppercase tracking-widest mb-4 mt-2">Premium</h3>
                    <div className="mb-4">
                        <span className="text-4xl font-black text-white">$450</span>
                        <span className="text-blue-100 ml-2">per project</span>
                    </div>
                    <ul className="space-y-4 mb-8 text-gray-200 font-medium text-sm">
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#3174c8]" /> Everything in Starter</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#3174c8]" /> Material sourcing & pickup</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#3174c8]" /> Dedicated craftsman</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#3174c8]" /> Priority scheduling</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#3174c8]" /> Extended 1-year warranty</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#3174c8]" /> 24/7 Phone support</li>
                    </ul>
                </div>

                {/* Scale */}
                <div className="bg-white rounded-[28px] p-8 border-2 border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-[#2e425a] font-bold uppercase tracking-widest mb-4">Complete</h3>
                    <div className="mb-4">
                        <span className="text-4xl font-black text-[#1a2b3c]">$1,200</span>
                        <span className="text-gray-500 ml-2">full remodel</span>
                    </div>
                    <ul className="space-y-4 mb-8 text-gray-600 font-medium text-sm">
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#3174c8]" /> Everything in Premium</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#3174c8]" /> Full project management</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#3174c8]" /> 3D Design rendering</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#3174c8]" /> Permitting assistance</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#3174c8]" /> Weekly progress reports</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#3174c8]" /> Lifetime workmanship guarantee</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
