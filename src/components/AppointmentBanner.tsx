import React from 'react';
import { ArrowRight, Phone, CalendarCheck } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface AppointmentBannerProps {
  onOpenBooking: () => void;
}

export const AppointmentBanner: React.FC<AppointmentBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-[#07151C] py-16 sm:py-20 lg:py-24">
      {/* Background Cinematic Dental Photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/banner_consultation_1791759920910.jpg"
          alt="Dental consultation and modern treatment room"
          className="w-full h-full object-cover object-center filter brightness-60"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        {/* Deep Navy Dark Vignette Overlay for Crisp Typography Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07151C] via-[#07151C]/80 to-[#07151C]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Text Block */}
          <div className="text-center lg:text-left space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready for your best smile?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal flex items-center justify-center lg:justify-start gap-2">
              <CalendarCheck className="w-4 h-4 text-[#20D1CA]" />
              <span>Same-day appointments available. No waiting lists.</span>
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#08BDBB] hover:bg-[#20D1CA] transition-all duration-200 shadow-xl shadow-cyan-950/50 cursor-pointer active:scale-95"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${CLINIC_CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#20D1CA]" />
              <span>{CLINIC_CONTACT.phone}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
