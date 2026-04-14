import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
    return (
        <section id="pricing" className="w-full max-w-7xl mx-auto px-8 py-24 bg-[#f8faff]">
            <div className="text-center mb-16">
                <p className="text-[#c5a059] font-bold tracking-widest uppercase mb-4 text-sm">Pricing</p>
                <h2 className="text-1xl md:text-2xl font-extrabold text-[#0f172a] mb-6 tracking-tight font-serif">
                    Transparent Retainers. No hidden fees.
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
                    All packages include a free initial consultation, transparent quotes, and a dedicated manager for your project.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Starter */}
                <div className="bg-white rounded-2xl p-10 border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
                    <h3 className="text-[#0f172a] font-bold uppercase tracking-widest mb-6 font-serif">Standard</h3>
                    <div className="mb-6 pb-6 border-b border-slate-100">
                        <span className="text-4xl font-black text-[#0f172a]">$150</span>
                        <span className="text-slate-500 ml-2">per visit</span>
                    </div>
                    <ul className="space-y-4 mb-8 text-slate-600 font-medium text-sm">
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#c5a059]" /> Standard diagnostic</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#c5a059]" /> Minor repairs included</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#c5a059]" /> Service warranty</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#c5a059]" /> Email support</li>
                    </ul>
                </div>

                {/* Growth / Pro */}
                <div className="bg-[#0f172a] rounded-2xl p-10 md:scale-105 border-2 border-[#c5a059] shadow-2xl relative text-white">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c5a059] text-[#0f172a] px-6 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
                        Premium Choice
                    </div>
                    <h3 className="text-[#c5a059] font-bold uppercase tracking-widest mb-6 font-serif mt-2">Comprehensive</h3>
                    <div className="mb-6 pb-6 border-b border-slate-700">
                        <span className="text-4xl font-black text-white">$450</span>
                        <span className="text-slate-400 ml-2">per project</span>
                    </div>
                    <ul className="space-y-4 mb-8 text-slate-300 font-medium text-sm">
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#c5a059]" /> Everything in Standard</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#c5a059]" /> Material sourcing & pickup</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#c5a059]" /> Dedicated craftsman</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#c5a059]" /> Priority scheduling</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#c5a059]" /> Extended 1-year warranty</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#c5a059]" /> 24/7 Phone support</li>
                    </ul>
                </div>

                {/* Scale */}
                <div className="bg-white rounded-2xl p-10 border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
                    <h3 className="text-[#0f172a] font-bold uppercase tracking-widest mb-6 font-serif">Executive</h3>
                    <div className="mb-6 pb-6 border-b border-slate-100">
                        <span className="text-4xl font-black text-[#0f172a]">$1,200</span>
                        <span className="text-slate-500 ml-2">full remodel</span>
                    </div>
                    <ul className="space-y-4 mb-8 text-slate-600 font-medium text-sm">
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#c5a059]" /> Everything in Comprehensive</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#c5a059]" /> Full project management</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#c5a059]" /> 3D Design rendering</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#c5a059]" /> Permitting assistance</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#c5a059]" /> Weekly progress reports</li>
                        <li className="flex items-center gap-3"><Check className="w-5 h-5 text-[#c5a059]" /> Lifetime workmanship guarantee</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
