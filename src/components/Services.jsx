import React from 'react';
import { Hammer, Lightbulb, Wrench, SprayCan, PaintRoller, Paintbrush, Star } from 'lucide-react';

const Services = ({ onServiceSelect }) => {
    const handleServiceClick = (service) => {
        onServiceSelect(service);
    };

    const services = [
        {
            title: "Carpenter",
            desc: "Professional carpenter experts delivering high-quality woodwork solutions.We handle furniture repair, custom designs, and installations.Our team ensures durability, precision, and perfect finishing.Reliable service for both small fixes and complete projects.",
            icon: < Hammer className="w-8 h-8" />,
            color: "orange"
        },
        {
            title: "Electrician",
            desc: "Professional electrician experts providing safe and efficient solutions.We handle wiring, installations, and electrical repairs with precision.Our services ensure safety, reliability, and long- lasting performance.Available for both minor fixes and major electrical work.",
            icon: <Lightbulb className="w-8 h-8" />,
            color: "yellow"
        },
        {
            title: "Plumber",
            desc: "Professional plumber experts offering complete plumbing solutions.We fix leaks, install pipelines, and maintain water systems.Our team ensures quick response and durable repairs.Trusted for both emergency fixes and regular maintenance.",
            icon: < Wrench className="w-8 h-8" />,
            color: "blue"
        },
        {
            title: "Cleaning",
            desc: "Professional cleaning experts delivering spotless home services.We clean every corner with attention to detail and care.Our team uses safe products for a healthy environment.Perfect for regular cleaning and deep cleaning needs.",
            icon: < SprayCan className="w-8 h-8" />,
            color: "teal"
        },
        {
            title: "Painting (Exterior)",
            desc: " Professional exterior painting experts enhancing your home’s look.We use weather- resistant paints for long - lasting protection.Our team ensures smooth finishing and perfect coverage.Ideal for renovation and fresh exterior transformations.",
            icon: < PaintRoller className="w-8 h-8 -scale-x-100" />,
            color: "orange"
        },
        {
            title: "Painting (Interior)",
            desc: "Professional interior painting experts for beautiful home spaces.We provide smooth, clean, and modern finishes.Our team ensures minimal mess and quick completion.Perfect for giving your interiors a fresh new look.",
            icon: < Paintbrush className="w-8 h-8" />,
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
                <h2 className="text-2xl md:text-3xl font-black text-[#2e425a] mb-3 capitalize tracking-tighter">
                    Our <span className="text-[#3174c8]">Premium</span> Services
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
                    Expert professionals ready to help fix, build, and improve your home today.
                </p>
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
                            {/* Background circle */}
                            <div className={`absolute -right-20 -top-20 w-48 h-48 rounded-full ${colors.bg} opacity-0 group-hover:opacity-60 transition-all duration-700 scale-0 group-hover:scale-100`}></div>

                            {/* Icon + Title */}
                            <div className="flex flex-col items-center gap-5 mb-5 relative z-10">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${colors.bg} ${colors.text} shadow-inner ring-8 ring-white/50`}>
                                    {React.cloneElement(service.icon, { className: "w-8 h-8" })}
                                </div>
                                <h3 className="text-lg font-black text-[#1a2b3c] uppercase tracking-tight">
                                    {service.title}
                                </h3>
                            </div>

                            {/* Description with Star */}
                            <div className="flex-1 text-center relative z-10 space-y-1">
                                <div className="flex items-center text-start  gap-2 text-gray-500 text-[14px] ">

                                    <span>{service.desc}</span>
                                </div>


                            </div>

                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;