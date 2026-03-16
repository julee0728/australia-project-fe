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
            <div className="bg-white rounded-[24px] shadow-2xl w-full max-w-[420px] max-h-[85vh] overflow-y-auto relative z-10 animate-in fade-in zoom-in duration-300 border border-gray-100">
                {/* Header Image/Background */}
                <div className={`h-32 w-full relative bg-gradient-to-br from-[#2a3c56] to-[#1a2b3c] flex items-center justify-center overflow-hidden`}>
                    <div className="absolute top-2 right-2">
                        <button
                            onClick={onClose}
                            className="text-white/50 hover:text-white p-1 transition-all"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto backdrop-blur-md">
                            {React.cloneElement(service.icon, { className: "w-6 h-6 text-white" })}
                        </div>
                        <h2 className="text-lg font-black text-white uppercase tracking-tight">
                            {service.title} Services
                        </h2>
                    </div>
                </div>

                <div className="p-5">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <h3 className="text-[13px] font-bold text-[#233549] border-l-2 border-[#3174c8] pl-2 uppercase tracking-wider">Description</h3>
                            <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
                                Professional {service.title} experts providing top-quality work. We handle fixes to major installs.
                            </p>
                            <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-50">
                                <h4 className="font-bold text-[#3174c8] uppercase tracking-widest text-[9px] mb-1.5 flex items-center gap-1">
                                    Why Us?
                                </h4>
                                <ul className="space-y-1">
                                    {["Expert Work", "Fast Service"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-1.5 text-[#2e425a] font-semibold text-[10px]">
                                            <div className="w-1 h-1 bg-[#3174c8] rounded-full"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-[13px] font-bold text-[#233549] border-l-2 border-[#3174c8] pl-2 uppercase tracking-wider">Benefits</h3>
                            <div className="space-y-2">
                                {[
                                    { t: "Quality", d: "Expert work." },
                                    { t: "Licensed", d: "Trusted pros." }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2 p-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                                        <div className="bg-green-100 text-green-600 p-0.5 rounded shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#233549] text-[11px] leading-none">{item.t}</h5>
                                            <p className="text-[10px] text-gray-400 mt-0.5">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={onClose}
                                className="w-full bg-[#3174c8] hover:bg-[#2860a8] text-white font-bold py-2 rounded-lg transition-all uppercase tracking-widest text-[10px] shadow-sm"
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
