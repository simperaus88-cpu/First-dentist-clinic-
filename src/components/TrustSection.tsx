import React from 'react';
import { Star, ShieldCheck, Award } from 'lucide-react';

interface TrustSectionProps {
  onOpenTeam: () => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ onOpenTeam }) => {
  return (
    <section id="about-intro" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="mb-4">
          <span className="text-xs font-bold text-[#08BDBB] uppercase tracking-wider font-['Plus_Jakarta_Sans']">
            ABOUT US
          </span>
        </div>

        {/* Large Editorial Headline matching screenshot */}
        <div className="max-w-4xl mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#17252D] leading-[1.25] tracking-tight">
            We deliver{' '}
            <span className="text-[#08BDBB]">
              personalized dental treatments
            </span>{' '}
            with modern technology and gentle care ensuring healthy confident smiles for every patient.
          </h2>
        </div>

        {/* Metrics Row with High-Tech Operatory Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pb-14 border-b border-slate-100">
          
          {/* Metrics Column */}
          <div className="lg:col-span-7">
            <div className="text-xs text-slate-400 font-medium tracking-wide uppercase mb-6 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#08BDBB]" />
              <span>Thousands trust us for smiles</span>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              {/* Metric 1 */}
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17252D] tracking-tight font-['Plus_Jakarta_Sans'] tabular-nums">
                  98%
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500">
                  Satisfaction Rate
                </div>
              </div>

              {/* Metric 2 */}
              <div className="space-y-1 border-l border-slate-100 pl-4 sm:pl-8">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17252D] tracking-tight font-['Plus_Jakarta_Sans'] tabular-nums">
                  2k+
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500">
                  Smiles Transformed
                </div>
              </div>

              {/* Metric 3 */}
              <div className="space-y-1 border-l border-slate-100 pl-4 sm:pl-8">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#17252D] tracking-tight font-['Plus_Jakarta_Sans'] flex items-center gap-1 tabular-nums">
                  4.9
                  <span className="text-[#08BDBB] text-2xl sm:text-3xl">★</span>
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500">
                  Customer Rating
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Modern Operatory Room Photograph */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
              <img
                src="/src/assets/images/dental_operatory_room_1791759898022.jpg"
                alt="State of the art pristine dental operatory room at Dentora"
                className="w-full h-52 sm:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="font-medium drop-shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#20D1CA]" />
                  Suite 1 Operatory Room
                </span>
                <span className="text-slate-200/90 text-[11px] drop-shadow-sm">ISO Class 5 Clean Air</span>
              </div>
            </div>
          </div>

        </div>

        {/* Doctor Signature / Specialist Badge Row */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4">
          <div 
            onClick={onOpenTeam}
            className="flex items-center gap-4 cursor-pointer group hover:opacity-90 transition-opacity"
          >
            {/* Circular Doctor Avatar */}
            <div className="w-12 h-12 rounded-full ring-2 ring-[#08BDBB]/30 overflow-hidden bg-slate-100 flex-shrink-0">
              <img
                src="/src/assets/images/treatment_checkup_1791759909626.jpg"
                alt="Dr. Daniel Carter"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#17252D] group-hover:text-[#08BDBB] transition-colors">
                  Dr. Daniel Carter
                </span>
                <Award className="w-3.5 h-3.5 text-[#08BDBB]" />
              </div>
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <span>Lead Dental Specialist</span>
                <span>·</span>
                <span className="text-amber-500 font-medium">★ 4.9</span>
                <span className="text-slate-400">(450+ reviews)</span>
              </div>
            </div>
          </div>

          <button
            onClick={onOpenTeam}
            className="text-xs font-semibold text-[#08BDBB] hover:text-[#07151C] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Learn about our clinicians</span>
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
};
