import React from 'react';
import { X, Check, Clock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { ServiceItem } from '../data/clinicData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#07151C]/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-slate-100 my-8 flex flex-col max-h-[90vh]">
        
        {/* Modal Header with Image */}
        <div className="relative h-60 sm:h-72 w-full flex-shrink-0 bg-slate-900">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center filter brightness-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07151C] via-[#07151C]/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm"
            aria-label="Close service modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header Title inside banner */}
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#08BDBB] text-white">
                {service.priceTag}
              </span>
              <span className="text-xs text-white/80 font-medium">
                {service.category}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm">
          
          {/* Detailed clinical explanation */}
          <div>
            <h4 className="text-xs font-bold text-[#08BDBB] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans']">
              OVERVIEW & CLINICAL APPROACH
            </h4>
            <p className="text-slate-600 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Duration & Guarantee row */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#F0F5F9] border border-slate-100">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#08BDBB]" />
              <div>
                <div className="text-[11px] text-slate-400">Typical Duration</div>
                <div className="font-bold text-[#17252D] text-xs sm:text-sm">{service.duration}</div>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#08BDBB]" />
              <div>
                <div className="text-[11px] text-slate-400">Dentora Standard</div>
                <div className="font-bold text-[#17252D] text-xs sm:text-sm">Pain-Free Protocols</div>
              </div>
            </div>
          </div>

          {/* Key Patient Benefits */}
          <div>
            <h4 className="text-xs font-bold text-[#17252D] uppercase tracking-wider mb-3">
              Key Advantages & Results
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#08BDBB]/20 text-[#08BDBB] flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-slate-600 text-xs">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Procedure */}
          <div>
            <h4 className="text-xs font-bold text-[#17252D] uppercase tracking-wider mb-3">
              Step-by-Step Care Journey
            </h4>
            <ol className="space-y-2 text-xs">
              {service.procedureSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-[#17252D] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700 leading-normal">{step}</span>
                </li>
              ))}
            </ol>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="p-5 sm:px-8 border-t border-slate-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Transparent pricing: <strong className="text-slate-800">{service.priceTag}</strong> (insurance eligible)
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => onBookService(service.id)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#08BDBB] hover:bg-[#20D1CA] transition-colors shadow-md"
            >
              <span>Schedule {service.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
