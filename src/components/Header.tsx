import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#07151C]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
            : 'bg-gradient-to-b from-[#07151C]/80 via-[#07151C]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            
            {/* Brand Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 text-white group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-[#08BDBB] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
                {/* Minimalist Dental Tooth Icon */}
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.5 2C4.5 2 3 4.5 3 7.5c0 3.5 1.5 6.5 2.5 10 .8 2.8 2.2 4.5 4 4.5 1.5 0 2.2-1.5 2.5-3.5.3 2 1 3.5 2.5 3.5 1.8 0 3.2-1.7 4-4.5 1-3.5 2.5-6.5 2.5-10C21 4.5 19.5 2 16.5 2c-2.2 0-3.5 1.2-4.5 2.5C11 3.2 9.7 2 7.5 2zm.5 3.5c1.2 0 2 .8 2.5 1.8.3.6 1 .9 1.5.9s1.2-.3 1.5-.9c.5-1 1.3-1.8 2.5-1.8 1.8 0 2.8 1.5 2.8 3.5 0 2.8-1.2 5.5-2.1 8.8-.5 1.8-1.2 2.6-2 2.6-.8 0-1.2-1.5-1.5-3.2-.2-1.1-1.2-1.8-2.2-1.8s-2 .7-2.2 1.8c-.3 1.7-.7 3.2-1.5 3.2-.8 0-1.5-.8-2-2.6C6.2 12.8 5 10.1 5 7.3c0-2 1-3.5 3-3.5z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-wider font-['Plus_Jakarta_Sans'] text-white">
                DENTORA
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium text-white/85 hover:text-[#20D1CA] transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-white/85 hover:text-[#20D1CA] transition-colors cursor-pointer"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-sm font-medium text-white/85 hover:text-[#20D1CA] transition-colors cursor-pointer"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium text-white/85 hover:text-[#20D1CA] transition-colors cursor-pointer"
              >
                Contact
              </button>
            </nav>

            {/* Right Action: Phone + Turquoise "Book a Visit" Button */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href={`tel:${CLINIC_CONTACT.phoneRaw}`}
                className="flex items-center gap-1.5 text-xs text-white/90 hover:text-[#20D1CA] transition-colors font-medium tracking-tight"
                title="Call Dentora Clinic"
              >
                <Phone className="w-3.5 h-3.5 text-[#20D1CA]" />
                <span>{CLINIC_CONTACT.phone}</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#08BDBB] hover:bg-[#20D1CA] transition-all duration-200 shadow-md hover:shadow-cyan-500/25 cursor-pointer whitespace-nowrap active:scale-95"
              >
                Book a Visit
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-[#08BDBB] hover:bg-[#20D1CA] transition-all"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white/90 hover:text-white rounded-lg focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#07151C]/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between animate-fadeIn">
          <div className="space-y-6">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-lg font-medium text-white/90 hover:text-[#20D1CA] py-2 border-b border-white/10"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-lg font-medium text-white/90 hover:text-[#20D1CA] py-2 border-b border-white/10"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-lg font-medium text-white/90 hover:text-[#20D1CA] py-2 border-b border-white/10"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-lg font-medium text-white/90 hover:text-[#20D1CA] py-2 border-b border-white/10"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-lg font-medium text-white/90 hover:text-[#20D1CA] py-2 border-b border-white/10"
              >
                Contact
              </button>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${CLINIC_CONTACT.phoneRaw}`}
                className="flex items-center gap-3 text-white/80 py-2 text-sm"
              >
                <div className="w-8 h-8 rounded-full bg-[#08BDBB]/20 flex items-center justify-center text-[#20D1CA]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-white/50">Call our direct line</div>
                  <div className="font-semibold text-white">{CLINIC_CONTACT.phone}</div>
                </div>
              </a>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-full text-center font-semibold text-sm text-white bg-[#08BDBB] hover:bg-[#20D1CA] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-cyan-900/40"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
