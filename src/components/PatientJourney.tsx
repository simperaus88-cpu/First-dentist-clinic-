import React from 'react';
import { Calendar, UserCheck, Scan, HeartHandshake } from 'lucide-react';
import { JOURNEY_STEPS } from '../data/clinicData';

interface PatientJourneyProps {
  onOpenBooking: () => void;
}

export const PatientJourney: React.FC<PatientJourneyProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar className="w-4 h-4 text-[#20D1CA]" />;
      case 'UserCheck':
        return <UserCheck className="w-4 h-4 text-[#20D1CA]" />;
      case 'Scan':
        return <Scan className="w-4 h-4 text-[#20D1CA]" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-4 h-4 text-[#20D1CA]" />;
    }
  };

  // Thumbnail photo sources for the 4 journey cards
  const STEP_IMAGES = [
    '/src/assets/images/banner_consultation_1791759920910.jpg',
    '/src/assets/images/dental_team_scrubs_1791759884833.jpg',
    '/src/assets/images/treatment_checkup_1791759909626.jpg',
    '/src/assets/images/hero_dentist_patient_1791759869815.jpg',
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#07151C] relative overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#08BDBB]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#20D1CA]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Heading Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="text-xs font-bold text-[#20D1CA] uppercase tracking-wider mb-3 font-['Plus_Jakarta_Sans']">
            HOW IT WORKS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
            Your journey to a healthier <br />
            smile.
          </h2>
        </div>

        {/* 4 Cards in One Horizontal Row on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {JOURNEY_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="group bg-[#0B1E28] hover:bg-[#0E2633] rounded-2xl p-6 border border-white/5 hover:border-[#20D1CA]/30 transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-lg"
            >
              {/* Large Faint Step Number in Background */}
              <div className="absolute -top-3 -right-2 text-7xl font-extrabold text-white/[0.04] select-none font-mono pointer-events-none group-hover:text-[#20D1CA]/10 transition-colors">
                {step.number}
              </div>

              <div>
                {/* Compact Thumbnail Container */}
                <div className="relative h-32 w-full rounded-xl overflow-hidden mb-5 bg-[#07151C]">
                  <img
                    src={STEP_IMAGES[idx]}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E28] via-transparent to-transparent" />
                </div>

                {/* Step Pill / Badge with Icon */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-[#08BDBB]/20 flex items-center justify-center">
                    {getIcon(step.iconName)}
                  </div>
                  <span className="text-xs font-bold text-[#20D1CA] tracking-wide">
                    {step.badge}
                  </span>
                </div>

                {/* Step Title & Copy */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#20D1CA] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom Subtle Step Progress Line */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                <span>Phase {step.number} of 04</span>
                <span className="text-[#20D1CA] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Seamless Care →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Helper */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-[#20D1CA] transition-colors cursor-pointer"
          >
            <span>Ready to take the first step? Start your journey online</span>
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
};
