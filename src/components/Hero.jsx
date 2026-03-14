import React from 'react';

const Hero = ({ onContactClick }) => {
    return (
        <section id="home" className="w-full relative pt-20 pb-28 px-8 lg:px-24 overflow-hidden border-b border-gray-200">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-top bg-no-repeat z-0"
                style={{ backgroundImage: "url('/hero-bg.png')" }}
            ></div>

            {/* Semi-transparent Gradient Overlay to make the text readable over the background image */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-black/10 z-0"></div>

            <div className="max-w-7xl mx-auto flex flex-col items-start relative z-10 pt-4">
                {/* Content */}
                <div className="md:w-2/3 lg:w-1/2 space-y-6 pr-4">
                    <h2 className="text-[44px] lg:text-[54px] font-bold text-[#2e425a] leading-[1.15] tracking-tight opacity-0 animate-fade-up">
                        Find Trusted Home<br className="hidden lg:block" /> Services Near You
                    </h2>
                    <p className="text-[20px] text-[#55677d] pr-10 leading-relaxed font-semibold opacity-0 animate-fade-up animation-delay-200">
                        Book Professional Carpenter, Electrician,<br className="hidden md:block" /> Plumber, Cleaning and Painting Experts<br className="hidden md:block" /> for Your Home
                    </p>

                    {/* Tags/Badges */}
                    <div className="flex flex-wrap gap-3 pt-6 pb-4 opacity-0 animate-fade-up animation-delay-400">
                        <span className="bg-[#fd9d58] text-white px-5 py-2 rounded-full text-[14px] font-semibold tracking-wide shadow-sm hover:shadow-[0_8px_20px_rgba(253,157,88,0.5)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">Carpenter</span>
                        <span className="bg-[#ffcc29] text-white px-5 py-2 rounded-full text-[14px] font-semibold tracking-wide shadow-sm hover:shadow-[0_8px_20px_rgba(255,204,41,0.5)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">Electrician</span>
                        <span className="bg-[#3174c8] text-white px-5 py-2 rounded-full text-[14px] font-semibold tracking-wide shadow-sm hover:shadow-[0_8px_20px_rgba(49,116,200,0.5)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">Plumber</span>
                        <span className="bg-[#ffad69] text-white px-5 py-2 rounded-full text-[14px] font-semibold tracking-wide shadow-sm hover:shadow-[0_8px_20px_rgba(255,173,105,0.5)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">Painting</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4 opacity-0 animate-fade-up animation-delay-400">
                        <button
                            className="bg-[#3174c8] hover:bg-[#2860a8] text-white font-medium px-8 py-3.5 rounded-lg shadow-md transition-all duration-300 cursor-pointer text-[17px] active:scale-95 hover:-translate-y-1 hover:shadow-xl"
                            onClick={() => {
                                const servicesSection = document.getElementById('services');
                                servicesSection?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Explore Services
                        </button>
                        <button
                            className="bg-white hover:bg-gray-50 text-[#3174c8] border border-[#3174c8] font-medium px-8 py-3.5 rounded-lg shadow-sm transition-all duration-300 cursor-pointer text-[17px] active:scale-95 hover:-translate-y-1 hover:shadow-lg"
                            onClick={onContactClick}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
