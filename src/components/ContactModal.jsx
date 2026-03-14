import React from 'react';

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="bg-white rounded-[20px] shadow-2xl w-[90%] max-w-[500px] p-10 relative z-10 animate-in fade-in zoom-in duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-[#233549] mb-3">Contact Us</h2>
                    <p className="text-gray-500 text-[15px]">Need help with home services? Contact our team anytime.</p>
                </div>

                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message Sent!'); onClose(); }}>
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3174c8] focus:border-transparent transition-all placeholder:text-gray-400 text-gray-700 mt-2"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3174c8] focus:border-transparent transition-all placeholder:text-gray-400 text-gray-700"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3174c8] focus:border-transparent transition-all placeholder:text-gray-400 text-gray-700"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Message"
                            rows="4"
                            className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3174c8] focus:border-transparent transition-all placeholder:text-gray-400 text-gray-700 resize-none"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#3b6bb4] hover:bg-[#2e5591] text-white font-medium py-3.5 rounded-xl shadow-md transition-colors text-[16px] mt-4"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
