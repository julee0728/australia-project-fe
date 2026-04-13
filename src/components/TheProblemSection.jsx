import React from 'react';

const TheProblemSection = () => {
    return (
        <section id="the-problem" className="w-full max-w-7xl mx-auto px-8 py-20 bg-white">
            <div className="text-center mb-16 flex flex-col items-center">
                <p className="text-[#3174c8] font-bold tracking-widest uppercase mb-4">The Problem</p>
                <h2 className="text-1xl md:text-2xl font-medium text-[#1a2b3c] mb-6 tracking-tighter max-w-4xl">
                    Most homeowner repairs turn into a nightmare — and cost you daily
                </h2>
                <p className="text-lg text-gray-500 max-w-3xl font-medium">
                    When something breaks in your house, the local handyman three doors down is either busy or unresponsive. Here's why that keeps happening.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* 1 */}
                <div className="bg-blue-50/50 rounded-[28px] p-8 border border-blue-100 flex flex-col">
                    <span className="text-3xl font-black text-blue-200 mb-4 opacity-50">01</span>
                    <h3 className="text-[#1a2b3c] font-bold text-lg mb-4">Your local repairman is booked out</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        72% of homeowners choose a repairman from the first page of Google. If your trusted person is busy, you're left waiting weeks for a simple fix while the problem gets worse.
                    </p>
                </div>

                {/* 2 */}
                <div className="bg-red-50/50 rounded-[28px] p-8 border border-red-100 flex flex-col">
                    <span className="text-3xl font-black text-red-200 mb-4 opacity-50">02</span>
                    <h3 className="text-[#1a2b3c] font-bold text-lg mb-4">DIY fixes are costing you more</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Most YouTube tutorials make it look easy, but have no clear instructions for your specific home setup, and aren't optimized for safety. You try it, make a mistake, and end up hiring a pro anyway.
                    </p>
                </div>

                {/* 3 */}
                <div className="bg-green-50/50 rounded-[28px] p-8 border border-green-100 flex flex-col">
                    <span className="text-3xl font-black text-green-200 mb-4 opacity-50">03</span>
                    <h3 className="text-[#1a2b3c] font-bold text-lg mb-4">You're wasting money on cheap parts</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Generic hardware store trips without proper knowledge, missing tools, or cheap replacment parts burn through budget on items that will break again in six months.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TheProblemSection;
