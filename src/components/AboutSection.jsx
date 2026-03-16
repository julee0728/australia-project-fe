import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="w-full relative py-24 md:py-32 px-8 lg:px-24 overflow-hidden bg-[#f0f7ff]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">

                {/* Left Side Content */}
                <div className="md:w-1/2 space-y-8 pr-4 animate-fade-up opacity-0 animation-delay-200" style={{ animationFillMode: 'forwards' }}>
                    <div className="inline-block px-4 py-1.5 bg-blue-100 text-[#3174c8] rounded-full text-[13px] font-bold uppercase tracking-widest mb-2">
                        Professional & Trusted
                    </div>
                    <h2 className="text-[40px] lg:text-[50px] font-extrabold text-[#2e425a] leading-[1.1] tracking-tight">
                        We Are Australia's Most Trusted <span className="text-[#3174c8]">Home Service</span> Experts
                    </h2>
                    <p className="text-[19px] text-[#55677d] leading-relaxed font-medium">
                        With over 15 years of experience, we provide high-quality building and repair services across Australia. From minor leaks to major renovations.
                    </p>

                    <ul className="space-y-3">
                        {[
                            "100% Satisfaction Guarantee",
                            "Certified & Insured Professionals",
                            "Transparent & Flat-Rate Pricing",
                            "24/7 Emergency Support Available"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-base font-semibold text-[#2e425a]">
                                <div className="bg-[#3174c8] rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="pt-4 flex gap-8 items-center">
                        <div className="flex flex-col">
                            <span className="text-4xl font-black text-[#3174c8]">15k+</span>
                            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Happy Clients</span>
                        </div>
                        <div className="w-[1px] h-12 bg-gray-300"></div>
                        <div className="flex flex-col">
                            <span className="text-4xl font-black text-[#3174c8]">200+</span>
                            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Expert Workers</span>
                        </div>
                    </div>
                </div>

                {/* Right Side Image - Hero Image reused as requested */}
                <div className="md:w-1/2 mt-16 md:mt-0 flex justify-end relative animate-fade-up opacity-0 animation-delay-400" style={{ animationFillMode: 'forwards' }}>
                    <div className="relative">
                        {/* Decorative background shape */}
                        <div className="absolute -inset-10 bg-blue-200/50 rounded-full blur-3xl -z-10"></div>
                        <img
                            src="/hero-bg.png"
                            alt="About Us Illustration"
                            className="w-full max-w-[600px] object-contain drop-shadow-2xl rounded-3xl saturate-[1.1]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
