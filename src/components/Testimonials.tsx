"use client";

import { TESTIMONIALS_DATA } from "@/data/testimonials";
import { Star, CheckCircle, MessageSquareQuote, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google reviews badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#0f3d2e] text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
              <span>Verified Patient Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a261c] font-serif tracking-tight">
              What Our Patients Say
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Read authentic feedback from individuals and families who trusted Evrika Dent for their oral health and smile transformations.
            </p>
          </div>

          {/* Google rating card */}
          <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 font-bold text-xl">
              4.9
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-xs font-bold text-[#0a261c] mt-0.5">Google Rating</div>
              <div className="text-[11px] text-stone-500">Based on 380+ verified reviews</div>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400">{item.date}</span>
                </div>

                <div className="relative">
                  <MessageSquareQuote className="w-8 h-8 text-emerald-100 absolute -top-2 -left-2 -z-0 opacity-60" />
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed relative z-10 italic">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0f3d2e] text-white flex items-center justify-center text-xs font-bold font-serif">
                    {item.avatarText}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0a261c] flex items-center gap-1">
                      <span>{item.name}</span>
                      {item.verified && (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      )}
                    </div>
                    <div className="text-[10px] text-stone-500 font-medium">
                      {item.treatment}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
