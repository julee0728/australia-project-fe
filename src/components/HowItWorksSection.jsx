import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
    return (
        <section id="how-it-works" className="w-full bg-[#1a2b3c] py-20 px-8">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <p className="text-[#3174c8] font-bold tracking-widest uppercase mb-4">How It Works</p>
                <h2 className="text-1xl md:text-2xl font-medium text-white mb-6 tracking-tighter text-center max-w-4xl">
                    A proven system built for simple home repairs
                </h2>
                <p className="text-lg text-gray-400 mb-16 text-center max-w-2xl font-medium">
                    Four steps. 1 day. Measurable satisfaction — or we work the next job at no cost.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative w-full">
                    
                    {/* Step 1 */}
                    <div className="flex flex-col relative z-10">
                        <h3 className="text-[#3174c8] font-bold text-lg mb-4 uppercase tracking-widest">Step 01</h3>
                        <h4 className="text-white font-bold text-xl mb-4">Free home audit</h4>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            We audit your home requirements, current setup, materials needed, and the competitor landscape — all specific to your exact suburb's code.
                        </p>
                        <div className="w-10 h-10 rounded-full bg-[#3174c8] text-white flex items-center justify-center hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col relative z-10">
                        <h3 className="text-[#3174c8] font-bold text-lg mb-4 uppercase tracking-widest">Step 02</h3>
                        <h4 className="text-white font-bold text-xl mb-4">Custom strategy</h4>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            We build a 1-day plan targeting the exact fixes your home needs — not generic patches, but durable, customized solutions.
                        </p>
                        <div className="w-10 h-10 rounded-full bg-[#3174c8] text-white flex items-center justify-center hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col relative z-10">
                        <h3 className="text-[#3174c8] font-bold text-lg mb-4 uppercase tracking-widest">Step 03</h3>
                        <h4 className="text-white font-bold text-xl mb-4">Launch & optimise</h4>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            We implement the solutions, optimise your living space settings, and run targeted tests with dedicated equipment. Same-day completion.
                        </p>
                        <div className="w-10 h-10 rounded-full bg-[#3174c8] text-white flex items-center justify-center hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col relative z-10">
                        <h3 className="text-[#3174c8] font-bold text-lg mb-4 uppercase tracking-widest">Step 04</h3>
                        <h4 className="text-white font-bold text-xl mb-4">Scale what works</h4>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Monthly check-in calls to review results, double down on top-performing upgrades, and expand to high-value renovations like kitchens and living rooms.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
