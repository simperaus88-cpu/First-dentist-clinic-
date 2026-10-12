import React, { useState } from 'react';
import { PROCESS_STRIP } from '../data/clinicData';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export const ProcessStrip: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="bg-white border-b border-slate-100 shadow-xs relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 py-3 sm:py-4">
          {PROCESS_STRIP.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveStep(idx)}
              onMouseLeave={() => setActiveStep(null)}
              onClick={() => setActiveStep(activeStep === idx ? null : idx)}
              className="p-3 sm:px-5 group cursor-pointer transition-all duration-200 hover:bg-[#F0F5F9]/60 rounded-lg relative"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#08BDBB] tracking-wider font-mono">
                  {item.step}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#17252D] group-hover:text-[#08BDBB] transition-colors">
                  {item.label}
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-300 ml-auto group-hover:text-[#08BDBB] group-hover:translate-x-0.5 transition-all hidden sm:block" />
              </div>
              <p className="mt-1 text-[11px] text-slate-500 line-clamp-1 group-hover:text-slate-700 transition-colors">
                {item.desc}
              </p>

              {/* Active / Popover Preview */}
              {activeStep === idx && (
                <div className="absolute left-2 right-2 top-full mt-1.5 p-3.5 bg-white rounded-xl shadow-xl border border-slate-100 z-30 animate-fadeIn text-xs text-slate-600 hidden md:block">
                  <div className="flex items-center gap-2 font-semibold text-[#17252D] mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#08BDBB]" />
                    <span>{item.step} · {item.label}</span>
                  </div>
                  <p className="text-slate-600 leading-normal">{item.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
