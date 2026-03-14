import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const scrollToSection = (id) => {
        setActiveLink(id);
        setIsSidebarOpen(false);

        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });

        window.location.hash = id;
    };

    return (
        <>
            {/* Navbar */}

            <nav className="bg-[#2a3c56] text-white px-8 md:px-20 py-6 flex items-center justify-between sticky top-0 z-50 shadow-lg">

                {/* Logo */}
                <h1
                    onClick={() => scrollToSection("home")}
                    className="text-[30px] font-black cursor-pointer"
                >
                    Home <span className="text-white">Services</span>
                </h1>

                {/* Desktop Nav */}

                <div className="hidden md:flex items-center space-x-16 text-[18px]">

                    <button
                        onClick={() => scrollToSection("home")}
                        className={`font-black uppercase tracking-widest pb-1 ${activeLink === "home" ? "border-b-4 border-[#5c85ba]" : ""
                            }`}
                    >
                        Home
                    </button>

                    <button
                        onClick={() => scrollToSection("services")}
                        className={`font-black uppercase tracking-widest pb-1 ${activeLink === "services" ? "border-b-4 border-[#5c85ba]" : ""
                            }`}
                    >
                        Services
                    </button>

                    <button
                        onClick={() => scrollToSection("about")}
                        className={`font-black uppercase tracking-widest pb-1 ${activeLink === "about" ? "border-b-4 border-[#5c85ba]" : ""
                            }`}
                    >
                        About
                    </button>

                    <button
                        onClick={() => scrollToSection("contact")}
                        className="bg-[#3174c8] px-6 py-2 rounded-full font-black uppercase"
                    >
                        Contact
                    </button>

                </div>

                {/* Mobile Menu Button */}

                <button
                    className="md:hidden"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <Menu className="w-8 h-8 text-white" />
                </button>

            </nav>

            {/* Sidebar */}

            <div className={`fixed inset-0 z-50 ${isSidebarOpen ? "block" : "hidden"}`}>

                {/* Backdrop */}

                <div
                    className="absolute inset-0 bg-black/40"
                    onClick={() => setIsSidebarOpen(false)}
                />

                {/* Sidebar Panel */}

                <div className="absolute left-0 top-0 h-full w-64 bg-white p-6 shadow-xl transform transition-transform duration-300">

                    {/* Close Button */}

                    <div className="flex justify-end mb-8">
                        <button onClick={() => setIsSidebarOpen(false)}>
                            <X className="w-7 h-7 text-[#2a3c56]" />
                        </button>
                    </div>

                    {/* Sidebar Links */}

                    <div className="flex flex-col space-y-6 text-lg font-bold text-[#2a3c56]">

                        <button
                            onClick={() => scrollToSection("home")}
                            className="text-left hover:text-[#3174c8]"
                        >
                            Home
                        </button>

                        <button
                            onClick={() => scrollToSection("services")}
                            className="text-left hover:text-[#3174c8]"
                        >
                            Services
                        </button>

                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-left hover:text-[#3174c8]"
                        >
                            About
                        </button>

                        <button
                            onClick={() => scrollToSection("contact")}
                            className="bg-[#3174c8] text-white px-5 py-3 rounded-xl"
                        >
                            Contact
                        </button>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Navbar;