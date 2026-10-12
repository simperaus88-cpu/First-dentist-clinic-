import React from 'react';
import { Check, ArrowRight, Award, Clock, Heart } from 'lucide-react';

interface AboutSectionProps {
  onOpenTeam: () => void;
}

const CHECKLIST_ITEMS = [
  'Dental check-ups',
  'Root canal treatment',
  'Hygiene treatments',
  'Dental implant restoration',
  'Crowns, veneers & bridges',
  'Professional tooth whitening',
];

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenTeam }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold text-[#08BDBB] uppercase tracking-wider font-['Plus_Jakarta_Sans']">
              WHY CHOOSE US
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#17252D] leading-[1.2] tracking-tight">
              Are you looking for a dentist to give you that special smile?
            </h2>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
              Dentora Clinic provides the highest quality dental care in Portland with a group of experienced dentists and specialists committed to gentle, personalized treatment and anxiety-free visits.
            </p>

            {/* 2-Column Checklist with Turquoise Checkmarks matching screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 pt-2 pb-4">
              {CHECKLIST_ITEMS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#08BDBB]/15 text-[#08BDBB] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Meet Our Team Button */}
            <div className="pt-2">
              <button
                onClick={onOpenTeam}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-semibold text-white bg-[#07151C] hover:bg-[#0B171D] hover:ring-2 hover:ring-[#08BDBB] transition-all duration-200 cursor-pointer shadow-md active:scale-95"
              >
                <span>Meet Our Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Value Badges */}
            <div className="pt-6 border-t border-slate-100 flex items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#08BDBB]" />
                <span>Board-Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#08BDBB]" />
                <span>Zero Wait Times</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#08BDBB]" />
                <span>Gentle Sedation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dental Team Photography */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
              <img
                src="/src/assets/images/dental_team_scrubs_1791759884833.jpg"
                alt="Dentora professional clinical team in teal medical scrubs"
                className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07151C]/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white/50 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#17252D]">
                    15+ Licensed Clinicians & Hygienists
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Continuous advanced education at ADA & AGD
                  </div>
                </div>
                <button
                  onClick={onOpenTeam}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-[#08BDBB] hover:bg-[#20D1CA] transition-colors"
                >
                  View Bio
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
