import React from 'react';

const ResultsSection = () => {
    return (
        <section id="results" className="w-full max-w-7xl mx-auto px-8 py-20 bg-white">
            <div className="text-center mb-16 flex flex-col items-center">
                <p className="text-[#3174c8] font-bold tracking-widest uppercase mb-4">Results</p>
                <h2 className="text-1xl md:text-2xl font-medium text-[#1a2b3c] mb-6 tracking-tighter">
                    What homeowners say after 90 days
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl font-medium">
                    Real outcomes from real families. We measure success in completed renovations and peace of mind — not just hours worked.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Result 1 */}
                <div className="bg-white rounded-[28px] p-8 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border-t-[6px] border-t-green-400">
                    <h3 className="text-[#3174c8] font-bold uppercase tracking-widest mb-6">FAMILY HOME — SYDNEY</h3>
                    <p className="text-gray-600 italic mb-10 leading-relaxed">
                        "Within 8 weeks we were enjoying our newly renovated kitchen and our friends wouldn't stop complimenting it. The design campaign alone brought so much value to our home in the first month."
                    </p>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-[#1a2b3c] rounded-full flex items-center justify-center text-white font-bold text-xl">
                            JM
                        </div>
                        <div>
                            <h4 className="text-[#1a2b3c] font-bold">John M.</h4>
                            <p className="text-gray-500 text-sm">Homeowner, Inner Sydney</p>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                        <div>
                            <p className="text-[#3174c8] font-black text-2xl mb-1">34%</p>
                            <p className="text-gray-500 text-sm">Increase in home value</p>
                        </div>
                        <div>
                            <p className="text-[#3174c8] font-black text-2xl mb-1">+62%</p>
                            <p className="text-gray-500 text-sm">Space efficiency</p>
                        </div>
                    </div>
                </div>

                {/* Result 2 */}
                <div className="bg-white rounded-[28px] p-8 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border-t-[6px] border-t-[#3174c8]">
                    <h3 className="text-[#3174c8] font-bold uppercase tracking-widest mb-6">MULTI-STORY HOUSE — MELBOURNE</h3>
                    <p className="text-gray-600 italic mb-10 leading-relaxed">
                        "We'd tried two other contractors. Ventoria was the first to actually audit our specific suburb regulations and build a strategy around it. We moved from an outdated design to a modern masterpiece in 10 weeks."
                    </p>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-[#1a2b3c] rounded-full flex items-center justify-center text-white font-bold text-xl">
                            SC
                        </div>
                        <div>
                            <h4 className="text-[#1a2b3c] font-bold">Sarah C.</h4>
                            <p className="text-gray-500 text-sm">Property Owner, East Melbourne</p>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                        <div>
                            <p className="text-[#3174c8] font-black text-2xl mb-1">+51%</p>
                            <p className="text-gray-500 text-sm">Energy efficiency savings</p>
                        </div>
                        <div>
                            <p className="text-[#3174c8] font-black text-2xl mb-1">4.1x</p>
                            <p className="text-gray-500 text-sm">Return on investment</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResultsSection;
