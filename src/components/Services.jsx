import React from 'react';
import { Hammer, Lightbulb, Wrench, SprayCan, PaintRoller, Paintbrush } from 'lucide-react';

const Services = ({ onServiceSelect }) => {
    const handleServiceClick = (service) => {
        onServiceSelect(service);
    };

    const services = [
        {
            title: "Carpenter",
            desc: "Professional woodwork and furniture repair",
            icon: <Hammer className="w-8 h-8" />,
            color: "orange"
        },
        {
            title: "Electrician",
            desc: "Electrical repair and installation",
            icon: <Lightbulb className="w-8 h-8" />,
            color: "yellow"
        },
        {
            title: "Plumber",
            desc: "Fix pipes, leaks and water systems",
            icon: <Wrench className="w-8 h-8" />,
            color: "blue"
        },
        {
            title: "Cleaning",
            desc: "Professional home cleaning services",
            icon: <SprayCan className="w-8 h-8" />,
            color: "teal"
        },
        {
            title: "Painting (Exterior)",
            desc: "Exterior painting services",
            icon: <PaintRoller className="w-8 h-8 -scale-x-100" />,
            color: "orange"
        },
        {
            title: "Painting (Interior)",
            desc: "Interior painting services",
            icon: <Paintbrush className="w-8 h-8" />,
            color: "orange"
        }
    ];

    const getColorClasses = (colorName) => {
        if (colorName === 'orange') return { bg: 'bg-orange-50', text: 'text-orange-500', border: 'border-orange-100', shadow: 'hover:shadow-orange-100' };
        if (colorName === 'yellow') return { bg: 'bg-yellow-50', text: 'text-yellow-500', border: 'border-yellow-100', shadow: 'hover:shadow-yellow-100' };
        if (colorName === 'blue') return { bg: 'bg-blue-50', text: 'text-blue-500', border: 'border-blue-100', shadow: 'hover:shadow-blue-100' };
        if (colorName === 'teal') return { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-100', shadow: 'hover:shadow-teal-100' };
        return { bg: 'bg-gray-50', text: 'text-gray-500', border: 'border-gray-100', shadow: 'hover:shadow-gray-100' };
    };

    return (
        <section id="services" className="w-full max-w-7xl mx-auto px-8 py-16 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-black text-[#2e425a] mb-3  capitalize tracking-tighter">Our <span className="text-[#3174c8]">Premium</span> Services</h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">Expert professionals ready to help fix, build, and improve your home today.</p>
                <div className="w-24 h-2 bg-[#3174c8] mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                    const colors = getColorClasses(service.color);
                    return (
                        <div
                            key={index}
                            className={`group flex flex-col bg-white rounded-[28px] p-7 md:p-8 border-2 ${colors.border} shadow-sm hover:shadow-2xl ${colors.shadow} transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden`}
                        >
                            {/* Decorative background circle on hover */}
                            <div className={`absolute -right-20 -top-20 w-48 h-48 rounded-full ${colors.bg} opacity-0 group-hover:opacity-60 transition-all duration-700 scale-0 group-hover:scale-100 bg-red-500`}></div>

                            <div className="flex flex-col items-center gap-5 mb-6 relative z-10">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${colors.bg} ${colors.text} shadow-inner ring-8 ring-white/50`}>
                                    {React.cloneElement(service.icon, { className: "w-8 h-8" })}
                                </div>
                                <h3 className="text-2xl font-black text-[#1a2b3c] uppercase tracking-tight">{service.title}</h3>
                            </div>

                            <div className="flex-1 text-center relative z-10 mb-6">
                                <p className="text-[16px] text-gray-500 leading-relaxed font-semibold">
                                    {service.desc}
                                </p>
                            </div>

                            <div className="mt-auto relative z-10">
                                <button
                                    onClick={() => handleServiceClick(service)}
                                    className={`w-full py-4 px-6 rounded-xl font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-[#3174c8] group-hover:text-white border-2 border-[#3174c8] text-[#3174c8] shadow-lg group-hover:shadow-blue-500/20 active:scale-95 text-sm`}
                                >
                                    View Details
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
