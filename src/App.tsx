/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProcessStrip } from './components/ProcessStrip';
import { TrustSection } from './components/TrustSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { PatientJourney } from './components/PatientJourney';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AppointmentBanner } from './components/AppointmentBanner';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ServiceModal } from './components/ServiceModal';
import { TeamModal } from './components/TeamModal';
import { FadeInSection } from './components/FadeInSection';
import { WhatsAppButton } from './components/WhatsAppButton';
import { SERVICES_LIST, ServiceItem } from './data/clinicData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  const handleOpenBooking = (serviceId?: string) => {
    setBookingServiceId(serviceId || 'check-up');
    setIsBookingOpen(true);
  };

  const handleSelectServiceFromChip = (serviceId: string) => {
    const found = SERVICES_LIST.find((s) => s.id === serviceId);
    if (found) {
      setActiveServiceModal(found);
    } else {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookFromServiceModal = (serviceId: string) => {
    setActiveServiceModal(null);
    handleOpenBooking(serviceId);
  };

  const handleBookWithDoctor = (_doctorName: string) => {
    setIsTeamModalOpen(false);
    handleOpenBooking('check-up');
  };

  const handleSelectServiceById = (serviceId: string) => {
    const found = SERVICES_LIST.find((s) => s.id === serviceId);
    if (found) {
      setActiveServiceModal(found);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#17252D] selection:bg-[#08BDBB] selection:text-white">
      {/* Fixed Sticky Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* 1. Full-Width Cinematic Hero Section (immediately visible) */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
          onSelectService={handleSelectServiceFromChip}
        />

        {/* 2. Process Indicator Strip */}
        <FadeInSection>
          <ProcessStrip />
        </FadeInSection>

        {/* 3. Welcome / Trust Metrics Section */}
        <FadeInSection>
          <TrustSection
            onOpenTeam={() => setIsTeamModalOpen(true)}
          />
        </FadeInSection>

        {/* 4. Feature Treatments Services Section */}
        <FadeInSection>
          <ServicesSection
            onSelectService={(service) => setActiveServiceModal(service)}
            onOpenBooking={() => handleOpenBooking()}
          />
        </FadeInSection>

        {/* 5. Why Choose Us / Dental Team Section */}
        <FadeInSection>
          <AboutSection
            onOpenTeam={() => setIsTeamModalOpen(true)}
          />
        </FadeInSection>

        {/* 6. Patient Journey ("How It Works") Section */}
        <FadeInSection>
          <PatientJourney
            onOpenBooking={() => handleOpenBooking()}
          />
        </FadeInSection>

        {/* 7. Patient Reviews / Testimonials Section */}
        <FadeInSection>
          <TestimonialsSection />
        </FadeInSection>

        {/* 8. Full-Width Photographic CTA Banner */}
        <FadeInSection>
          <AppointmentBanner
            onOpenBooking={() => handleOpenBooking()}
          />
        </FadeInSection>

        {/* 9. Final Turquoise CTA Section */}
        <FadeInSection>
          <FinalCTA
            onOpenBooking={() => handleOpenBooking()}
          />
        </FadeInSection>
      </main>

      {/* 11. Deep Navy Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenTeam={() => setIsTeamModalOpen(true)}
        onSelectServiceById={handleSelectServiceById}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={bookingServiceId}
      />

      <ServiceModal
        service={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        onBookService={handleBookFromServiceModal}
      />

      <TeamModal
        isOpen={isTeamModalOpen}
        onClose={() => setIsTeamModalOpen(false)}
        onBookWithDoctor={handleBookWithDoctor}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
}
