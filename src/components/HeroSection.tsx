import React from 'react';
import { ArrowRight, Phone, Star } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onSelectService: (serviceName: string) => void;
}

const SERVICE_CHIPS = [
  { label: 'Dental Check-up', id: 'check-up' },
  { label: 'Teeth Cleaning', id: 'cleaning' },
  { label: 'Tooth Whitening', id: 'whitening' },
  { label: 'Gum Treatment', id: 'check-up' },
  { label: 'Implants', id: 'implants' },
  { label: 'Root Canal', id: 'emergency' },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onSelectService,
}) => {
  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden bg-[#07151C]">
      {/* Background High-Resolution Dental Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_dentist_patient_1791759869815.jpg"
          alt="Gentle dental examination with patient smiling in operatory chair"
          className="w-full h-full object-cover object-right md:object-center transform scale-100 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic Multi-layered Vignette & Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07151C] via-[#07151C]/85 md:via-[#07151C]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07151C] via-transparent to-[#07151C]/60" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-36 md:pb-24">
        <div className="max-w-2xl">
          
          {/* Eyebrow Label matching reference */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#20D1CA] text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
            <span className="flex items-center justify-center w-3.5 h-3.5 text-[#20D1CA]">
              <Star className="w-3.5 h-3.5 fill-current" />
            </span>
            <span>BEST DENTAL CARE · PORTLAND, OR</span>
          </div>

          {/* Main Headline - 3 lines matching screenshot */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Experience <br />
            Comfortable <br />
            Dental <span className="text-[#20D1CA]">Care.</span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed font-normal mb-8 max-w-xl text-balance">
            Your family&apos;s dental health, handled with care. Modern technology, gentle hands, and transparent pricing — always.
          </p>

          {/* Primary CTA + Phone Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#08BDBB] hover:bg-[#20D1CA] transition-all duration-200 shadow-lg shadow-cyan-950/40 hover:shadow-cyan-400/30 cursor-pointer active:scale-98"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${CLINIC_CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-[#20D1CA] transition-colors py-2 px-1 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#20D1CA]" />
              <span>Or Call: {CLINIC_CONTACT.phone}</span>
            </a>
          </div>

          {/* Service Chips Row */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {SERVICE_CHIPS.map((chip, index) => (
                <button
                  key={index}
                  onClick={() => onSelectService(chip.id)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 bg-white/10 hover:bg-white/20 hover:text-white border border-white/10 backdrop-blur-sm transition-all duration-150 cursor-pointer hover:border-[#08BDBB]/50 active:scale-95"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
