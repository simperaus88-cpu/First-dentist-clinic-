import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin, Heart } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface FooterProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenTeam: () => void;
  onSelectServiceById: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenTeam,
  onSelectServiceById,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#07151C] text-slate-300 pt-16 sm:pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Layout matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-[#08BDBB] flex items-center justify-center text-white shadow-sm">
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
            </div>

            <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
              YOUR FAMILY DENTAL CLINIC
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Comprehensive, empathetic dental care for children and adults. Built on precision, gentle care, and patient trust.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <a
                href={`tel:${CLINIC_CONTACT.phoneRaw}`}
                className="flex items-center gap-2 text-white hover:text-[#20D1CA] transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#08BDBB]" />
                <span>{CLINIC_CONTACT.phone}</span>
              </a>
              <a
                href={`mailto:${CLINIC_CONTACT.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-[#20D1CA] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#08BDBB]" />
                <span>{CLINIC_CONTACT.email}</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400 text-xs">
                <MapPin className="w-3.5 h-3.5 text-[#08BDBB] mt-0.5 flex-shrink-0" />
                <span>{CLINIC_CONTACT.address}</span>
              </div>
            </div>
          </div>

          {/* Column 2: SERVICES */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onSelectServiceById('check-up')}
                  className="hover:text-[#20D1CA] transition-colors cursor-pointer"
                >
                  Dental Check-Up
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectServiceById('cleaning')}
                  className="hover:text-[#20D1CA] transition-colors cursor-pointer"
                >
                  Teeth Cleaning
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectServiceById('whitening')}
                  className="hover:text-[#20D1CA] transition-colors cursor-pointer"
                >
                  Tooth Whitening
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectServiceById('implants')}
                  className="hover:text-[#20D1CA] transition-colors cursor-pointer"
                >
                  Dental Implants
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectServiceById('veneers')}
                  className="hover:text-[#20D1CA] transition-colors cursor-pointer"
                >
                  Veneers & Crowns
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectServiceById('emergency')}
                  className="hover:text-[#20D1CA] transition-colors cursor-pointer"
                >
                  Emergency Care
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: CLINIC */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              CLINIC
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-[#20D1CA] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTeam}
                  className="hover:text-[#20D1CA] transition-colors cursor-pointer"
                >
                  Meet the Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('testimonials')}
                  className="hover:text-[#20D1CA] transition-colors cursor-pointer"
                >
                  Patient Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking()}
                  className="hover:text-[#20D1CA] transition-colors cursor-pointer"
                >
                  Online Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: OPENING HOURS */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              OPENING HOURS
            </h4>
            <div className="space-y-1.5 text-xs text-slate-300">
              <p>{CLINIC_CONTACT.hours.weekdays}</p>
              <p>{CLINIC_CONTACT.hours.saturday}</p>
              <p className="text-slate-400">{CLINIC_CONTACT.hours.sunday}</p>
            </div>

            <div className="pt-2">
              <div className="text-[11px] font-bold text-[#20D1CA] uppercase tracking-wider mb-1">
                24/7 EMERGENCY
              </div>
              <a
                href={`tel:${CLINIC_CONTACT.phoneRaw}`}
                className="text-xs font-semibold text-white hover:text-[#20D1CA] transition-colors"
              >
                {CLINIC_CONTACT.phone}
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3 text-slate-400">
              <a
                href="#facebook"
                aria-label="Dentora on Facebook"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                aria-label="Dentora on Instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                aria-label="Dentora on Twitter"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 hover:text-white flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                aria-label="Dentora on LinkedIn"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Dentora Dental Clinic. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
            <a href="#accessibility" className="hover:text-slate-300 transition-colors">
              Accessibility
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
