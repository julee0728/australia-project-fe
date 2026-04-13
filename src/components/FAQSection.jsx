import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How much does a routine audit cost?",
            answer: "Our initial routine audit is completely free. We visit your property, assess the required work, and provide a transparent, upfront quote with no hidden fees before any work begins."
        },
        {
            question: "Do you offer warranties on your work?",
            answer: "Yes! All our premium and complete packages come with a workmanship guarantee. We also honor all manufacturer warranties on the parts and materials we install."
        },
        {
            question: "Are your technicians fully licensed and insured?",
            answer: "Absolutely. Every professional on our team is fully vetted, licensed in their specific trade, and carries comprehensive insurance to protect your property and peace of mind during the project."
        },
        {
            question: "How long does a typical renovation project take?",
            answer: "It depends on the scope of the project. Small repairs can be done in a single day, while larger renovations may take a few weeks. Your dedicated project manager will provide a detailed timeline during the estimation phase."
        },
        {
            question: "Do I have to sign a long-term contract for maintenance?",
            answer: "No long-term lock-ins required! Our services are strictly on-demand or month-to-month, meaning you only pay for the work you need, when you need it."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="w-full max-w-4xl mx-auto px-8 py-20 bg-[#f8faff]">
            <div className="text-center mb-12">
                <p className="text-[#3174c8] font-bold tracking-widest uppercase mb-2">FAQ</p>
                <h2 className="text-1xl md:text-2xl font-medium text-[#1a2b3c] mb-4 tracking-tighter">
                    Frequently Asked Questions
                </h2>
                <div className="w-24 h-2 bg-[#3174c8] mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => toggleFaq(index)}
                    >
                        <div className="p-6 flex justify-between items-center gap-4">
                            <h3 className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-[#3174c8]' : 'text-[#1a2b3c]'}`}>
                                {faq.question}
                            </h3>
                            <div className={`text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#3174c8]' : ''}`}>
                                <ChevronDown className="w-6 h-6" />
                            </div>
                        </div>
                        
                        <div 
                            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
