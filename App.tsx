import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Modules from './components/Modules';
import Benefits from './components/Benefits';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import Notification from './components/Notification';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      companyName: formData.get('companyName'),
      fleetSize: formData.get('fleetSize')
    };

    try {
      // Assuming backend runs on port 3001
      const response = await fetch('/api/demo-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        closeModal();
        setShowNotification(true);
        // Optional: Reset form handled by unmount of Modal
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'Hubo un problema al enviar la solicitud.'}`);
      }
    } catch (error) {
      console.error('Error enviando formulario:', error);
      alert('Error de conexión. Por favor verifica que el servidor esté corriendo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Notification 
        isVisible={showNotification} 
        message="Hemos recibido tu información y guardado tu solicitud en nuestra base de datos."
        onClose={() => setShowNotification(false)}
      />
      
      <DemoModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onSubmit={handleFormSubmit}
        isSubmitting={isSubmitting}
      />

      <Navbar onOpenDemo={openModal} />
      <main className="flex-grow">
        <Hero onOpenDemo={openModal} />
        <Overview />
        <Modules />
        <Benefits />
        <Comparison />
        <Testimonials />
        <FAQ />
        <CTA onOpenDemo={openModal} />
      </main>
      <Footer />
    </div>
  );
}

export default App;