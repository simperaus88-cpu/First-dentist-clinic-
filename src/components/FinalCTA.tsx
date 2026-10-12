import React from 'react';
import { Phone, Check, ArrowRight } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="bg-[#08BDBB] py-20 lg:py-24 text-white relative overflow-hidden">
      {/* Decorative subtle ambient ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
          Your healthiest smile <br />
          starts today.
        </h2>

        {/* Supporting Text */}
        <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto leading-relaxed mb-10 font-normal">
          Request a free consultation in under 2 minutes. Same-day appointments available. Transparent pricing, no surprises.
        </p>

        {/* Action Buttons matching screenshot */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-10">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-[#07151C] bg-white hover:bg-slate-100 transition-all duration-200 shadow-xl shadow-cyan-900/30 cursor-pointer active:scale-95"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-4 h-4 text-[#08BDBB]" />
          </button>

          <a
            href={`tel:${CLINIC_CONTACT.phoneRaw}`}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/25 backdrop-blur-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>{CLINIC_CONTACT.phone}</span>
          </a>
        </div>

        {/* 3 Value Checklist badges below buttons */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/90 font-medium">
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 stroke-[3]" />
            <span>No waiting list</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 stroke-[3]" />
            <span>Transparent pricing</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 stroke-[3]" />
            <span>All ages welcome</span>
          </div>
        </div>

      </div>
    </section>
  );
};
