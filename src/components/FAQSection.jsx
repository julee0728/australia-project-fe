import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How much does an initial consultation cost?",
            answer: "Our initial evaluation is completely complimentary. We review your requirements, assess the scope of the project, and provide a transparent, upfront retainer quote with no hidden fees before any commitment is made."
        },
        {
            question: "Do you offer warranties on your workmanship?",
            answer: "Absolutely. All our premium service tiers include a comprehensive workmanship guarantee. We uphold the highest standards of execution and honor all supplier warranties on premium materials."
        },
        {
            question: "Are your technicians fully licensed and insured?",
            answer: "Without exception. Every professional partner in our network is rigorously vetted, fully licensed in their respective jurisdiction, and carries comprehensive liability insurance to protect your property."
        },
        {
            question: "What is the timeline for complex renovations?",
            answer: "Timelines reflect the scale of the project. Routine implementations are executed promptly, while complex structural changes require thorough scheduling. A dedicated project manager will provide an exact timeline during consultation."
        },
        {
            question: "Am I locked into a long-term service contract?",
            answer: "We do not mandate long-term lock-ins. Our premium services are structured on-demand or month-to-month, ensuring you retain full control over your ongoing retainers and property management."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="w-full max-w-4xl mx-auto px-8 py-24 bg-[#f8faff]">
            <div className="text-center mb-16">
                <p className="text-[#c5a059] font-bold tracking-widest uppercase mb-4 text-sm">FAQ</p>
                <h2 className="text-1xl md:text-2xl font-extrabold text-[#0f172a] mb-6 tracking-tight font-serif">
                    Frequently Asked Questions
                </h2>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => toggleFaq(index)}
                    >
                        <div className="p-6 flex justify-between items-center gap-4">
                            <h3 className={`font-bold text-lg transition-colors font-serif ${openIndex === index ? 'text-[#c5a059]' : 'text-[#0f172a]'}`}>
                                {faq.question}
                            </h3>
                            <div className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#c5a059]' : ''}`}>
                                <ChevronDown className="w-6 h-6" />
                            </div>
                        </div>
                        
                        <div 
                            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <p className="text-slate-600 leading-relaxed text-sm">
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
