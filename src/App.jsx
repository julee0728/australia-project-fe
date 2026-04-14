import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutSection from './components/AboutSection';
import FeedbackSection from './components/FeedbackSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import PricingSection from './components/PricingSection';
import WhyUsSection from './components/WhyUsSection';
import TheProblemSection from './components/TheProblemSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import HowItWorksSection from './components/HowItWorksSection';
import ResultsSection from './components/ResultsSection';
import FAQSection from './components/FAQSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  React.useEffect(() => {
    AOS.init({ duration: 800, once: false, offset: 100 });
  }, []);

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const toggleModal = () => setIsContactModalOpen(!isContactModalOpen);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-[#f8faff] flex flex-col">

      {/* Navbar */}
      <Navbar onContactClick={toggleModal} />

      {/* Home */}
      <div id="home" data-aos="fade-up">
        <Hero onContactClick={toggleModal} />
      </div>

      {/* The Problem */}
      <div id="the-problem" data-aos="fade-up">
        <TheProblemSection />
      </div>

      {/* What We Do */}
      <div id="what-we-do" data-aos="fade-up">
        <WhatWeDoSection />
      </div>

      {/* Services */}
      <div id="services" data-aos="fade-up">
        <Services onServiceSelect={handleServiceSelect} />
      </div>

      {/* How It Works */}
      <div id="how-it-works" data-aos="fade-up">
        <HowItWorksSection />
      </div>

      {/* Why Us */}
      <div id="why-us" data-aos="fade-up">
        <WhyUsSection />
      </div>

      {/* About */}
      <div id="about" data-aos="fade-up">
        <AboutSection />
      </div>

      {/* Pricing */}
      <div id="pricing" data-aos="fade-up">
        <PricingSection />
      </div>

      {/* Feedback */}
      <div id="feedback" data-aos="fade-up">
        <FeedbackSection />
      </div>

      {/* FAQ */}
      <div id="faq" data-aos="fade-up">
        <FAQSection />
      </div>

      {/* Results */}
      <div id="results" data-aos="fade-up">
        <ResultsSection />
      </div>

      {/* Contact */}
      <div id="contact" data-aos="fade-up">
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer onContactClick={toggleModal} />

      {/* Contact Modal */}
      {isContactModalOpen && (
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={toggleModal}
        />
      )}

      {/* Service Details Modal */}
      {selectedService && (
        <ServiceDetailModal
          isOpen={!!selectedService}
          onClose={closeServiceModal}
          service={selectedService}
        />
      )}

    </div>
  );
}

export default App;