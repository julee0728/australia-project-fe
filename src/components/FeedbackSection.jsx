import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "John Smith",
        role: "Home Owner",
        content: "Outstanding service! The electrician arrived on time and fixed our wiring issues quickly. Highly recommended for any home maintenance needs.",
        rating: 5,
        image: "https://i.pravatar.cc/150?u=john"
    },
    {
        name: "Sarah Johnson",
        role: "Property Manager",
        content: "I've used their plumbing services multiple times for my rental properties. Always professional, reliable, and reasonably priced.",
        rating: 5,
        image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        name: "Michael Brown",
        role: "Home Owner",
        content: "The house painting job was impeccable. They were very careful with our furniture and the finish is perfect. Great attention to detail!",
        rating: 4,
        image: "https://i.pravatar.cc/150?u=michael"
    },
    {
        name: "Emily Davis",
        role: "Interior Designer",
        content: "Finding local experts who actually know their craft is hard. These guys are the real deal. Their carpentry work is top-notch.",
        rating: 5,
        image: "https://i.pravatar.cc/150?u=emily"
    },
    {
        name: "David Wilson",
        role: "Home Owner",
        content: "Excellent cleaning service! They reached every corner and the house was sparkling. Very polite staff and excellent communication.",
        rating: 5,
        image: "https://i.pravatar.cc/150?u=david"
    },
    {
        name: "Lisa Anderson",
        role: "Real Estate Agent",
        content: "I recommend them to all my clients. Whether it's a quick fix or a major renovation, they deliver quality results every single time.",
        rating: 5,
        image: "https://i.pravatar.cc/150?u=lisa"
    },
    {
        name: "Robert Taylor",
        role: "Business Owner",
        content: "Prompt response and quick turnaround. They fixed our office plumbing issues over the weekend so we were ready for Monday. Life savers!",
        rating: 4,
        image: "https://i.pravatar.cc/150?u=robert"
    }
];

const FeedbackSection = () => {
    return (
        <section id="feedback" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-8 md:px-20 text-center mb-16">
                <span className="text-[#3174c8] font-bold tracking-widest uppercase text-sm">Testimonials</span>
                <h2 className="text-4xl md:text-5xl font-black text-[#2a3c56] mt-4">
                    What Our <span className="text-[#3174c8]">Clients Say</span>
                </h2>
                <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
                    Real stories from real customers. We take pride in delivering excellence to every home in Australia.
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* First set of marquee items */}
                <div className="animate-marquee whitespace-nowrap py-12 flex">
                    {testimonials.map((item, index) => (
                        <div key={index} className="w-[400px] bg-[#f8faff] p-8 rounded-3xl mx-4 shadow-sm border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-2 flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
                                <div className="text-left">
                                    <h4 className="font-bold text-[#2a3c56] text-lg">{item.name}</h4>
                                    <p className="text-[#3174c8] text-sm font-semibold">{item.role}</p>
                                </div>
                                <div className="ml-auto flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < item.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <Quote className="w-8 h-8 text-[#3174c8]/10 absolute -top-4 -left-2" />
                                <p className="text-gray-600 leading-relaxed italic whitespace-normal">
                                    "{item.content}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Duplicate set for seamless looping */}
                <div className="animate-marquee whitespace-nowrap py-12 flex" aria-hidden="true">
                    {testimonials.map((item, index) => (
                        <div key={`dup-${index}`} className="w-[400px] bg-[#f8faff] p-8 rounded-3xl mx-4 shadow-sm border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-2 flex flex-col">
                            <div className="flex items-center gap-4 mb-6">
                                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
                                <div className="text-left">
                                    <h4 className="font-bold text-[#2a3c56] text-lg">{item.name}</h4>
                                    <p className="text-[#3174c8] text-sm font-semibold">{item.role}</p>
                                </div>
                                <div className="ml-auto flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < item.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <Quote className="w-8 h-8 text-[#3174c8]/10 absolute -top-4 -left-2" />
                                <p className="text-gray-600 leading-relaxed italic whitespace-normal">
                                    "{item.content}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeedbackSection;
