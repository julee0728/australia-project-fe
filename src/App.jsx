import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import ServiceDetailModal from './components/ServiceDetailModal';

function App() {

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
      <div id="home">
        <Hero onContactClick={toggleModal} />
      </div>

      {/* Services */}
      <div id="services">
        <Services onServiceSelect={handleServiceSelect} />
      </div>

      {/* About */}
      <div id="about">
        <AboutSection />
      </div>

      {/* Contact */}
      <div id="contact">
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