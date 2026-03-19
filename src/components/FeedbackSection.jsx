import React, { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "John Smith",
        role: "Home Owner",
        content:
            "Outstanding service! The electrician arrived on time and fixed our wiring issues quickly.",
        rating: 5,
    },
    {
        name: "Sarah Johnson",
        role: "Property Manager",
        content:
            "I've used their plumbing services multiple times. Always professional and reliable.",
        rating: 5,
    },
    {
        name: "Michael Brown",
        role: "Home Owner",
        content: "Painting job was impeccable. Great attention to detail!",
        rating: 4,
    },
    {
        name: "Emily Davis",
        role: "Interior Designer",
        content: "Their carpentry work is top-notch.",
        rating: 5,
    },
];

const TestimonialCard = ({ item }) => (
    <div className="w-[350px] bg-[#f8faff] p-6 rounded-2xl mx-4 shadow border flex flex-col">
        <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#3174c8] text-white flex items-center justify-center font-bold">
                {item.name.charAt(0)}
            </div>

            <div>
                <h4 className="font-bold text-[#2a3c56]">{item.name}</h4>
                <p className="text-[#3174c8] text-sm">{item.role}</p>
            </div>

            <div className="ml-auto flex">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < item.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>

        <div className="relative">
            <Quote className="w-6 h-6 text-[#3174c8]/20 absolute -top-3" />
            <p className="text-gray-600 italic">"{item.content}"</p>
        </div>
    </div>
);

const FeedbackSection = () => {
    const [play, setPlay] = useState(true);

    useEffect(() => {
        let timer;

        if (play) {
            timer = setTimeout(() => {
                setPlay(false);

                setTimeout(() => {
                    setPlay(true);
                }, 10000); // 10 sec pause
            }, 20000); // animation duration
        }

        return () => clearTimeout(timer);
    }, [play]);

    return (
        <section className="py-16 bg-white overflow-hidden">
            {/* Heading */}
            <div className="text-center mb-12 px-6">
                <span className="text-[#3174c8] font-bold tracking-widest uppercase text-sm">
                    Testimonials
                </span>

                <h2 className="text-3xl md:text-5xl font-black text-[#2a3c56] mt-4">
                    What Our <span className="text-[#3174c8]">Clients Say</span>
                </h2>

                <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
                    Real stories from real customers. We take pride in delivering excellence to every home in Australia.
                </p>
            </div>

            {/* Marquee */}
            <div className="overflow-hidden">
                <div className={`flex w-max ${play ? "animate-marquee" : ""}`}>
                    {[...testimonials, ...testimonials].map((item, index) => (
                        <TestimonialCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeedbackSection;