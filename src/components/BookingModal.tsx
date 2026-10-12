import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Phone, Sparkles, User, Mail, MessageSquare } from 'lucide-react';
import { SERVICES_LIST, CLINIC_CONTACT } from '../data/clinicData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceId: initialServiceId || 'check-up',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: '10:00 AM - Morning',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable booking submission
    setTimeout(() => {
      const generatedRef = `DEN-${Math.floor(10000 + Math.random() * 90000)}`;
      setBookingRef(generatedRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  const selectedService = SERVICES_LIST.find((s) => s.id === formData.serviceId) || SERVICES_LIST[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#07151C]/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          /* Confirmation Success State */
          <div className="py-6 text-center space-y-5 animate-scaleUp">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center ring-8 ring-emerald-50">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#F0F5F9] text-[#08BDBB] mb-2 font-mono">
                REF #{bookingRef}
              </span>
              <h3 className="text-2xl font-bold text-[#17252D]">
                Appointment Request Received!
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-md mx-auto">
                Thank you, <strong className="text-slate-800">{formData.name}</strong>. Our clinical coordinator will call or SMS you at <strong className="text-slate-800">{formData.phone}</strong> to confirm your slot.
              </p>
            </div>

            {/* Booking Summary Box */}
            <div className="bg-[#F0F5F9] rounded-2xl p-5 text-left text-xs space-y-2.5 border border-slate-200/70">
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">Service:</span>
                <span className="font-bold text-[#17252D]">{selectedService.title}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">Date:</span>
                <span className="font-bold text-[#17252D]">{formData.date}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500">Time Window:</span>
                <span className="font-bold text-[#17252D]">{formData.timeSlot}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Clinic Location:</span>
                <span className="font-medium text-[#17252D]">{CLINIC_CONTACT.address}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#08BDBB] hover:bg-[#20D1CA] transition-colors"
              >
                Done
              </button>
              <a
                href={`tel:${CLINIC_CONTACT.phoneRaw}`}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#08BDBB]" />
                <span>Call Clinic Desk</span>
              </a>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#08BDBB] uppercase tracking-wider font-['Plus_Jakarta_Sans'] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>EASY ONLINE SCHEDULING</span>
              </div>
              <h3 className="text-2xl font-bold text-[#17252D] tracking-tight">
                Book Your Dental Visit
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Select your preferred treatment and date. No upfront payment required.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-[#17252D] mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jordan Hayes"
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#08BDBB] text-slate-800"
                  />
                </div>
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#17252D] mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jordan@example.com"
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#08BDBB] text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#17252D] mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(503) 555-0192"
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#08BDBB] text-slate-800"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-[#17252D] mb-1">
                  Requested Service
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#08BDBB] text-slate-800 bg-white"
                >
                  {SERVICES_LIST.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.title} ({srv.priceTag})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#17252D] mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#08BDBB] text-slate-800 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#17252D] mb-1">
                    Time Window
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#08BDBB] text-slate-800 bg-white"
                    >
                      <option>8:30 AM - Early Morning</option>
                      <option>10:00 AM - Morning</option>
                      <option>1:30 PM - Early Afternoon</option>
                      <option>3:30 PM - Afternoon</option>
                      <option>5:30 PM - Late Afternoon</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="block text-xs font-bold text-[#17252D] mb-1">
                  Dental Concerns or Special Comfort Requests (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Sensitive teeth, anxiety regarding dental sounds, sedation questions..."
                    className="w-full pl-10 pr-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#08BDBB] text-slate-800"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#08BDBB] hover:bg-[#20D1CA] transition-all duration-200 shadow-md shadow-cyan-900/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Confirming availability...</span>
                  ) : (
                    <span>Request Appointment</span>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400 pt-1">
                🔒 Your privacy is fully protected under HIPAA. No fee is charged today.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
