import React from 'react';

const TheProblemSection = () => {
    return (
        <section id="the-problem" className="w-full max-w-7xl mx-auto px-8 py-24 bg-white">
            <div className="text-center mb-16 flex flex-col items-center">
                <p className="text-[#c5a059] font-bold tracking-widest uppercase mb-4 text-sm">The Problem</p>
                <h2 className="text-1xl md:text-2xl font-extrabold text-[#0f172a] mb-6 tracking-tight max-w-4xl font-serif">
                    Most homeowner repairs turn into a nightmare — and cost you daily
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl font-medium">
                    When something breaks in your house, the local handyman three doors down is either busy or unresponsive. Here's why that keeps happening.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* 1 */}
                <div className="bg-[#f8faff] rounded-2xl p-10 border border-slate-100 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
                    <span className="text-4xl font-black text-[#c5a059] mb-6 opacity-30 font-serif font-style: italic">01</span>
                    <h3 className="text-[#0f172a] font-bold text-1xl mb-4">You rely on unverified availability</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Most homeowners choose a repairman from local directories. If your trusted person is busy, you're left waiting weeks for a simple fix while the problem gets worse and costs multiply.
                    </p>
                </div>

                {/* 2 */}
                <div className="bg-[#f8faff] rounded-2xl p-10 border border-slate-100 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
                    <span className="text-4xl font-black text-[#c5a059] mb-6 opacity-30 font-serif font-style: italic">02</span>
                    <h3 className="text-[#0f172a] font-bold text-1xl mb-4">DIY solutions create larger issues</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Most YouTube tutorials make it look easy, but have no clear instructions for your specific home setup, and aren't optimized for safety. You try it, make a mistake, and end up hiring a pro anyway.
                    </p>
                </div>

                {/* 3 */}
                <div className="bg-[#f8faff] rounded-2xl p-10 border border-slate-100 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
                    <span className="text-4xl font-black text-[#c5a059] mb-6 opacity-30 font-serif font-style: italic">03</span>
                    <h3 className="text-[#0f172a] font-bold text-1xl mb-4">Temporary fixes waste money</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Generic hardware store trips without proper knowledge, missing tools, or cheap replacement parts burn through budget on items that will break again in six months.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TheProblemSection;
