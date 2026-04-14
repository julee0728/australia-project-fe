import React from 'react';
import { ShieldAlert, ClipboardList, HeartHandshake, BadgeDollarSign } from 'lucide-react';

const WhyUsSection = () => {
    return (
        <section id="why-us" className="w-full bg-[#0f172a] py-24 px-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <p className="text-[#c5a059] font-bold tracking-widest uppercase mb-4 text-sm">Why Us</p>
                <h2 className="text-1xl md:text-2xl font-extrabold text-white mb-16 tracking-tight font-serif uppercase text-center">
                    What Sets Us Apart
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {/* Card 1 */}
                    <div className="bg-[#1e293b] rounded-2xl p-8 border border-slate-700 hover:border-[#c5a059] transition-colors flex flex-col items-center text-center">
                        <div className="w-12 h-12 mb-6 text-[#c5a059]">
                            <ShieldAlert className="w-full h-full" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-3 font-serif">Priority Availability</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">Exclusive priority scheduling ensuring immediate action for critical home repairs.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#1e293b] rounded-2xl p-8 border border-slate-700 hover:border-[#c5a059] transition-colors flex flex-col items-center text-center">
                        <div className="w-12 h-12 mb-6 text-[#c5a059]">
                            <ClipboardList className="w-full h-full" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-3 font-serif">Verified Expertise</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">Fully licensed and rigorously vetted professionals tailored to your precise structural needs.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#1e293b] rounded-2xl p-8 border border-[#c5a059] transition-colors flex flex-col items-center text-center shadow-[0_0_20px_rgba(197,160,89,0.15)] relative transform -translate-y-2">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c5a059] text-[#0f172a] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Guaranteed
                        </div>
                        <div className="w-12 h-12 mb-6 text-[#c5a059] mt-2">
                            <HeartHandshake className="w-full h-full" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-3 font-serif">Uncompromised Quality</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">Premium finishings and dedicated account management for complete peace of mind.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#1e293b] rounded-2xl p-8 border border-slate-700 hover:border-[#c5a059] transition-colors flex flex-col items-center text-center">
                        <div className="w-12 h-12 mb-6 text-[#c5a059]">
                            <BadgeDollarSign className="w-full h-full" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-3 font-serif">Transparent Retainers</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">Direct, comprehensive quoting upfront. No hidden surcharges or vague estimates.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
