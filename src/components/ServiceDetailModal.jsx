import React from 'react';

const ServiceDetailModal = ({ isOpen, onClose, service }) => {
    if (!isOpen || !service) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#2a3c56]/80 backdrop-blur-md transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-300">
                {/* Header Image/Background */}
                <div className={`h-48 md:h-64 w-full relative bg-gradient-to-br from-[#2a3c56] to-[#1a2b3c] flex items-center justify-center overflow-hidden`}>
                    <div className="absolute top-0 right-0 p-6">
                        <button
                            onClick={onClose}
                            className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm transition-all"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="text-center space-y-4">
                        <div className="w-20 h-20 bg-white/10 rounded-[28px] flex items-center justify-center mx-auto backdrop-blur-md ring-1 ring-white/20">
                            {React.cloneElement(service.icon, { className: "w-10 h-10 text-white" })}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
                            {service.title} <span className="text-[#5c85ba]">Services</span>
                        </h2>
                    </div>
                </div>

                <div className="p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-[#233549] border-l-4 border-[#3174c8] pl-5">Full Description</h3>
                            <p className="text-lg text-gray-500 leading-relaxed font-medium">
                                Our {service.title} experts are highly trained professionals dedicated to providing top-quality work. We handle everything from minor fixes to major installations with the highest standards of safety and efficiency.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                                <h4 className="font-bold text-[#3174c8] uppercase tracking-widest text-sm mb-3">Why Choose Us?</h4>
                                <ul className="space-y-2.5">
                                    {["Expert Workmanship", "Transparent Pricing", "Fast Turnaround", "Clean & Professional"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[#2e425a] font-semibold text-base">
                                            <span className="w-1.5 h-1.5 bg-[#3174c8] rounded-full"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-[#233549] border-l-4 border-[#3174c8] pl-5">Key Benefits</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { t: "Guaranteed Quality", d: "We stand by every job we do." },
                                    { t: "Licensed Pros", d: "Certified experts you can trust." },
                                    { t: "Quick Booking", d: "Schedule in minutes online." }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                                        <div className="bg-green-100 text-green-600 p-1.5 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#233549] text-base">{item.t}</h5>
                                            <p className="text-sm text-gray-500 font-medium">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={onClose}
                                className="w-full bg-[#3174c8] hover:bg-[#2860a8] text-white font-black py-4 rounded-2xl shadow-xl shadow-blue-500/20 transition-all uppercase tracking-widest text-sm"
                            >
                                Close Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailModal;
