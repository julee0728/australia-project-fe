import React from 'react';
import { ShieldAlert, ClipboardList, HeartHandshake, BadgeDollarSign } from 'lucide-react';

const WhyUsSection = () => {
    return (
        <section id="why-us" className="w-full bg-[#1a2b3c] py-20 px-8">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <p className="text-[#3174c8] font-bold tracking-widest uppercase mb-4">Why Us</p>
                <h2 className="text-1xl md:text-2xl font-medium text-white mb-16 tracking-tighter uppercase text-center">
                    What Sets Us Apart
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {/* Card 1 */}
                    <div className="bg-[#111827] rounded-[24px] p-8 border border-gray-800 hover:border-gray-600 transition-colors flex flex-col items-center text-center">
                        <div className="w-12 h-12 mb-4 text-red-400">
                            <ShieldAlert className="w-full h-full" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Emergency Care</h3>
                        <p className="text-gray-400 text-sm">Available 24/7 for urgent home repair issues.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#111827] rounded-[24px] p-8 border border-gray-800 hover:border-gray-600 transition-colors flex flex-col items-center text-center">
                        <div className="w-12 h-12 mb-4 text-amber-300">
                            <ClipboardList className="w-full h-full" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Personalized Plans</h3>
                        <p className="text-gray-400 text-sm">Treatments and repairs tailored to your specific needs.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#111827] rounded-[24px] p-8 border border-[#3174c8] hover:border-blue-400 transition-colors flex flex-col items-center text-center shadow-[0_0_15px_rgba(49,116,200,0.2)]">
                        <div className="w-12 h-12 mb-4 text-blue-400">
                            <HeartHandshake className="w-full h-full" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Comfort First</h3>
                        <p className="text-gray-400 text-sm">Friendly professionals and a mess-free environment.</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#111827] rounded-[24px] p-8 border border-gray-800 hover:border-gray-600 transition-colors flex flex-col items-center text-center">
                        <div className="w-12 h-12 mb-4 text-yellow-500">
                            <BadgeDollarSign className="w-full h-full" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Affordable Pricing</h3>
                        <p className="text-gray-400 text-sm">Flexible payment options and transparent quotes.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
