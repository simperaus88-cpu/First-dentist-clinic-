import React from 'react';
import { X, Award, Star, CheckCircle, GraduationCap } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '../data/clinicData';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookWithDoctor: (doctorName: string) => void;
}

export const TeamModal: React.FC<TeamModalProps> = ({
  isOpen,
  onClose,
  onBookWithDoctor,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#07151C]/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 my-8 max-h-[90vh] flex flex-col">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close team modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6">
          <div className="text-xs font-bold text-[#08BDBB] uppercase tracking-wider font-['Plus_Jakarta_Sans'] mb-1">
            DENTORA CLINICAL FACULTY
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#17252D]">
            Meet Our Experienced Dental Team
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Every clinician at Dentora pursues ongoing training in the newest gentle techniques and minimally invasive treatments.
          </p>
        </div>

        {/* Doctors list */}
        <div className="overflow-y-auto space-y-6 pr-1">
          {TEAM_MEMBERS.map((doctor: TeamMember, idx: number) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#F0F5F9] border border-slate-200/70 flex flex-col sm:flex-row gap-5 items-start justify-between"
            >
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-base sm:text-lg font-bold text-[#17252D]">
                    {doctor.name}
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#08BDBB]/15 text-[#08BDBB]">
                    {doctor.experience} Experience
                  </span>
                  <div className="flex items-center gap-1 text-xs text-amber-500 font-bold ml-auto sm:ml-0">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{doctor.rating}</span>
                    <span className="text-slate-400 font-normal">({doctor.reviewCount}+ reviews)</span>
                  </div>
                </div>

                <div className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#08BDBB]" />
                  <span>{doctor.role}</span>
                </div>

                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                  <span>{doctor.credentials}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {doctor.bio}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {doctor.specialties.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 bg-white text-slate-600 rounded text-[11px] border border-slate-200"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="sm:self-center w-full sm:w-auto">
                <button
                  onClick={() => onBookWithDoctor(doctor.name)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#08BDBB] hover:bg-[#20D1CA] transition-colors whitespace-nowrap shadow-sm"
                >
                  Book with Doctor
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
