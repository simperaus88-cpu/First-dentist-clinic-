import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '918292789639',
  defaultMessage = 'Hello Dentora Clinic, I would like to inquire about booking a dental appointment.',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 pointer-events-auto">
      {/* Optional subtle desktop text bubble */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="hidden md:flex items-center gap-2 bg-white text-slate-800 text-xs font-semibold py-2 px-3.5 rounded-full shadow-lg border border-slate-100 hover:border-emerald-200 transition-all duration-200 group"
        aria-hidden="true"
        tabIndex={-1}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="group-hover:text-emerald-600 transition-colors">Chat on WhatsApp</span>
      </a>

      {/* Main Circular Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dentora Dental Clinic on WhatsApp (+91 82927 89639)"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl shadow-emerald-900/20 hover:shadow-emerald-500/30 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 ${
          isHovered ? 'bg-[#20bd5a]' : ''
        }`}
        title="Chat on WhatsApp (+91 82927 89639)"
      >
        {/* WhatsApp Official Vector Logo */}
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.175.2-.351.226-.652.075s-1.27-.468-2.42-1.494c-.895-.798-1.5-1.784-1.675-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.678-1.633-.929-2.235-.245-.587-.494-.507-.678-.517-.175-.01-.376-.01-.577-.01s-.527.075-.803.376c-.276.301-1.054 1.029-1.054 2.509 0 1.48 1.079 2.909 1.229 3.109.15.2 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.378.197 1.897.12.578-.087 1.78-.727 2.03-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.351zM12.04 2C6.52 2 2.03 6.488 2.03 12.008c0 1.84.5 3.565 1.375 5.05L2 22l5.075-1.33A10.007 10.007 0 0 0 12.04 22c5.52 0 10.01-4.488 10.01-10.008 0-5.52-4.49-10.008-10.01-10.008zm0 18.278a8.23 8.23 0 0 1-4.204-1.155l-.301-.18-3.013.79.803-2.937-.196-.312A8.258 8.258 0 0 1 3.774 12c0-4.558 3.708-8.266 8.266-8.266 4.558 0 8.266 3.708 8.266 8.266 0 4.558-3.708 8.278-8.266 8.278z" />
        </svg>
      </a>
    </div>
  );
};
