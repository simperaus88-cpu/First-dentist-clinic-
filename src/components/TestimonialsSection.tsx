import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquarePlus, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS_LIST, TestimonialItem } from '../data/clinicData';

export const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<TestimonialItem[]>(TESTIMONIALS_LIST);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    quote: '',
    service: 'General Dentistry',
  });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.quote) return;

    const initials = newReview.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || 'PT';

    const created: TestimonialItem = {
      id: `rev-${Date.now()}`,
      name: newReview.name,
      role: 'Verified Google Review',
      rating: newReview.rating,
      quote: newReview.quote,
      service: newReview.service,
      date: 'Just now',
      initials,
    };

    setReviews([created, ...reviews]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowReviewModal(false);
      setNewReview({ name: '', rating: 5, quote: '', service: 'General Dentistry' });
    }, 1800);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block matching screenshot */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold text-[#08BDBB] uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans']">
            PATIENT REVIEWS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#17252D] tracking-tight leading-tight mb-3">
            Don&apos;t take our word for it.
          </h2>
          <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-slate-500 font-medium">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-slate-800">4.9 average</span>
            <span>from 1,200+ verified patient reviews</span>
          </div>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {reviews.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-[#F0F5F9] rounded-2xl p-7 sm:p-8 border border-slate-200/60 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Quote Text */}
                <p className="text-xs sm:text-sm text-[#17252D] leading-relaxed mb-6 font-normal">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Patient Avatar & Meta matching screenshot */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
                <div className="w-10 h-10 rounded-full bg-[#08BDBB]/20 text-[#08BDBB] font-bold text-xs flex items-center justify-center ring-2 ring-white">
                  {review.initials}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#17252D]">
                    {review.name}
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                    <CheckCircle className="w-3 h-3 text-[#08BDBB]" />
                    <span>{review.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setShowReviewModal(true)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#08BDBB] hover:text-[#07151C] bg-[#F0F5F9] hover:bg-slate-100 px-4 py-2.5 rounded-full transition-colors cursor-pointer"
          >
            <MessageSquarePlus className="w-3.5 h-3.5" />
            <span>Leave a Patient Review</span>
          </button>
        </div>

      </div>

      {/* Leave Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <h3 className="text-lg font-bold text-[#17252D] mb-1">
              Share Your Dentora Experience
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Your honest feedback helps us provide gentle, exceptional dental care.
            </p>

            {submittedMessage ? (
              <div className="py-8 text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
                  <ThumbsUp className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-800">Thank you!</h4>
                <p className="text-xs text-slate-500">Your review has been recorded.</p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder="e.g. Jessica Miller"
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#08BDBB]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Treatment Received
                  </label>
                  <select
                    value={newReview.service}
                    onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#08BDBB]"
                  >
                    <option>Dental Check-Up</option>
                    <option>Teeth Cleaning</option>
                    <option>Tooth Whitening</option>
                    <option>Dental Implants</option>
                    <option>Veneers & Crowns</option>
                    <option>Emergency Care</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className={`text-xl transition-colors ${
                          star <= newReview.rating ? 'text-amber-400' : 'text-slate-300'
                        }`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Review
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={newReview.quote}
                    onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                    placeholder="Tell us about the clinician, clinic atmosphere, and care..."
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#08BDBB]"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-4 py-2 text-xs text-slate-500 hover:text-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-[#08BDBB] hover:bg-[#20D1CA] rounded-lg transition-colors"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
