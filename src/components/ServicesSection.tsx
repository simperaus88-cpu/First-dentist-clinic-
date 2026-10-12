import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { SERVICES_LIST, ServiceItem } from '../data/clinicData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenBooking,
}) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F0F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 lg:mb-16">
          <div>
            <div className="text-xs font-bold text-[#08BDBB] uppercase tracking-wider mb-3 font-['Plus_Jakarta_Sans'] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURE TREATMENT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#17252D] tracking-tight leading-tight">
              Advanced Dental Care <br className="hidden sm:inline" />
              for a Healthier Smile
            </h2>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="self-start md:self-end inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#07151C] hover:bg-[#0B171D] hover:ring-2 hover:ring-[#08BDBB] transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 6 Service Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/70 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Upper Photographic Container */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Floating Price Pill Tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-[#08BDBB] bg-white/95 backdrop-blur-md shadow-sm border border-slate-100">
                    {service.priceTag}
                  </span>
                </div>

                {/* Corner quick affordance */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#08BDBB] shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Lower Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#17252D] group-hover:text-[#08BDBB] transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Learn More link with animated arrow */}
                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#08BDBB] group-hover:text-[#07151C] transition-colors">
                  <span className="flex items-center gap-1.5">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[11px] text-slate-400 font-normal">
                    {service.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
