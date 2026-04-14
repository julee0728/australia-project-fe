import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
    return (
        <section id="how-it-works" className="w-full bg-[#0f172a] py-24 px-8">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <p className="text-[#c5a059] font-bold tracking-widest uppercase mb-4 text-sm">How It Works</p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 tracking-tight text-center max-w-4xl font-serif">
                    A premium process built for residential excellence
                </h2>
                <p className="text-lg text-slate-400 mb-20 text-center max-w-2xl font-medium">
                    Four steps. Premium quality. Measurable satisfaction — strictly managed from consultation to completion.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative w-full">
                    {/* Step 1 */}
                    <div className="flex flex-col relative z-10">
                        <h3 className="text-[#c5a059] font-bold text-lg mb-4 uppercase tracking-widest">Step 01</h3>
                        <h4 className="text-white font-bold text-xl mb-4 font-serif">Comprehensive Audit</h4>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            We audit your home requirements, structural integrity, and current layout to prepare a tailored, transparent assessment of what your property needs.
                        </p>
                        <div className="hidden md:flex absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#c5a059] items-center justify-center z-20 shadow-lg">
                            <ArrowRight className="w-5 h-5 text-[#0f172a]" />
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col relative z-10">
                        <h3 className="text-[#c5a059] font-bold text-lg mb-4 uppercase tracking-widest">Step 02</h3>
                        <h4 className="text-white font-bold text-xl mb-4 font-serif">Strategic Planning</h4>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            We build an authoritative plan outlining exact materials, dedicated personnel, and timelines. No generic quotes, only guaranteed specifications.
                        </p>
                        <div className="hidden md:flex absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#c5a059] items-center justify-center z-20 shadow-lg">
                            <ArrowRight className="w-5 h-5 text-[#0f172a]" />
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col relative z-10">
                        <h3 className="text-[#c5a059] font-bold text-lg mb-4 uppercase tracking-widest">Step 03</h3>
                        <h4 className="text-white font-bold text-xl mb-4 font-serif">Flawless Execution</h4>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Our licensed experts implement the solutions with rigorous oversight. Every project adheres to strict safety protocols and industry best practices.
                        </p>
                        <div className="hidden md:flex absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#c5a059] items-center justify-center z-20 shadow-lg">
                            <ArrowRight className="w-5 h-5 text-[#0f172a]" />
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col relative z-10">
                        <h3 className="text-[#c5a059] font-bold text-lg mb-4 uppercase tracking-widest">Step 04</h3>
                        <h4 className="text-white font-bold text-xl mb-4 font-serif">Ongoing Support</h4>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            We ensure long-term satisfaction providing warranties, maintenance guides, and prioritized emergency support for premium clients.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
