import React from 'react';
import { Hammer, Lightbulb, PenTool } from 'lucide-react';

const WhatWeDoSection = () => {
    return (
        <section id="what-we-do" className="w-full max-w-7xl mx-auto px-8 py-20 bg-[#f8faff]">
            <div className="text-center mb-16 flex flex-col items-center">
                <p className="text-[#c5a059] font-bold tracking-widest uppercase mb-4 text-sm">What We Do</p>
                <h2 className="text-1xl md:text-2xl font-extrabold text-[#0f172a] mb-6 tracking-tight max-w-4xl font-serif">
                    Everything your home needs to stay functional and beautiful
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl font-medium">
                    We specialize in premium residential services, which means every repair and renovation is executed with professional standards — not unverified shortcuts.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* 1 */}
                <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col">
                    <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-xl mb-6">
                        <Hammer className="w-6 h-6 text-[#c5a059]" />
                    </div>
                    <h3 className="text-[#0f172a] font-bold text-xl mb-4">Repairs & Maintenance</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                        Get your home issues fixed right the first time. We handle plumbing leaks, electrical faults, and structural fixes with priority scheduling for verified homeowners.
                    </p>
                    <div className="text-[#c5a059] font-semibold text-sm">Packages from $150</div>
                </div>

                {/* 2 */}
                <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col">
                    <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-xl mb-6">
                        <PenTool className="w-6 h-6 text-[#c5a059]" />
                    </div>
                    <h3 className="text-[#0f172a] font-bold text-xl mb-4">Complete Renovations</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                        End-to-end management for high-value projects — kitchens, bathrooms, and living spaces. Dedicated project managers and licensed contractors ensuring every detail is accountable.
                    </p>
                    <div className="text-[#c5a059] font-semibold text-sm">Consultation from $500</div>
                </div>

                {/* 3 */}
                <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all flex flex-col">
                    <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-xl mb-6">
                        <Lightbulb className="w-6 h-6 text-[#c5a059]" />
                    </div>
                    <h3 className="text-[#0f172a] font-bold text-xl mb-4">Upgrades & Installations</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                        Modernize your property with smart home integrations, energy-efficient lighting, and custom fixtures. Delivered in 1-2 days by certified technicians.
                    </p>
                    <div className="text-[#c5a059] font-semibold text-sm">Starts from $250</div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDoSection;
