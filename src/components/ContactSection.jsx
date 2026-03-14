import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contact-section" className="w-full bg-white py-24 px-8 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

                {/* Contact Info */}
                <div className="lg:w-5/12 space-y-10">
                    <div className="space-y-4">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#233549]">Get In <span className="text-[#3174c8]">Touch</span></h2>
                        <p className="text-lg text-gray-500 font-medium leading-relaxed">
                            Have a project in mind? Or need a quick repair? Send us a message and our team will get back to you within 2 hours.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-5 group">
                            <div className="bg-blue-50 p-4 rounded-2xl group-hover:bg-[#3174c8] transition-colors duration-300">
                                <Phone className="text-[#3174c8] group-hover:text-white" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#233549]">Call Us Fast</h4>
                                <p className="text-gray-500 font-semibold">+61 123 456-789</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 group">
                            <div className="bg-blue-50 p-4 rounded-2xl group-hover:bg-[#3174c8] transition-colors duration-300">
                                <Mail className="text-[#3174c8] group-hover:text-white" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#233549]">Email Support</h4>
                                <p className="text-gray-500 font-semibold">info@homeservices.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 group">
                            <div className="bg-blue-50 p-4 rounded-2xl group-hover:bg-[#3174c8] transition-colors duration-300">
                                <MapPin className="text-[#3174c8] group-hover:text-white" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#233549]">Office Address</h4>
                                <p className="text-gray-500 font-semibold">123 Business St, Sydney, Australia</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 group">
                            <div className="bg-blue-50 p-4 rounded-2xl group-hover:bg-[#3174c8] transition-colors duration-300">
                                <Clock className="text-[#3174c8] group-hover:text-white" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-[#233549]">Working Hours</h4>
                                <p className="text-gray-500 font-semibold">Mon - Sat: 8AM - 8PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:w-7/12">
                    <div className="bg-[#f0f7ff] rounded-[40px] p-10 md:p-14 shadow-xl border border-blue-50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl -mr-16 -mt-16"></div>

                        <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); alert('Message Sent!'); }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#233549] uppercase tracking-wider ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white border-2 border-transparent focus:border-[#3174c8] rounded-2xl px-6 py-4 outline-none transition-all placeholder:text-gray-300 font-semibold shadow-sm"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#233549] uppercase tracking-wider ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white border-2 border-transparent focus:border-[#3174c8] rounded-2xl px-6 py-4 outline-none transition-all placeholder:text-gray-300 font-semibold shadow-sm"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#233549] uppercase tracking-wider ml-1">Subject</label>
                                <select className="w-full bg-white border-2 border-transparent focus:border-[#3174c8] rounded-2xl px-6 py-4 outline-none transition-all font-semibold shadow-sm appearance-none">
                                    <option>General Inquiry</option>
                                    <option>Carpenter Services</option>
                                    <option>Electrical Repair</option>
                                    <option>Plumbing Issue</option>
                                    <option>Cleaning Services</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#233549] uppercase tracking-wider ml-1">Your Message</label>
                                <textarea
                                    placeholder="Tell us about your project..."
                                    rows="5"
                                    className="w-full bg-white border-2 border-transparent focus:border-[#3174c8] rounded-2xl px-6 py-4 outline-none transition-all placeholder:text-gray-300 font-semibold shadow-sm resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full md:w-auto bg-[#3174c8] hover:bg-[#2860a8] text-white font-bold uppercase tracking-widest px-12 py-5 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
                            >
                                Send Message
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
