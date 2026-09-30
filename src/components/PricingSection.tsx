"use client";

import { useState } from "react";
import { PRICING_DATA } from "@/data/technologies";
import { getServiceWhatsAppUrl, createWhatsAppUrl } from "@/lib/whatsapp";
import { DollarSign, Check, MessageCircle, HelpCircle, ShieldCheck } from "lucide-react";

export default function PricingSection() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section id="pricing" className="py-20 bg-[#f5f2eb] border-t border-[#e2d8c9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a261c] font-serif tracking-tight">
            Transparent Treatment Pricing
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            No unexpected add-ons or hidden fees. We provide a detailed, fixed-cost estimate following your 3D digital diagnosis before any treatment commences.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {PRICING_DATA.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === idx
                  ? "bg-[#0f3d2e] text-white shadow-md shadow-[#0f3d2e]/20 scale-105"
                  : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Selected Category Pricing Table */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md">
          <div className="mb-6 pb-4 border-b border-stone-100">
            <h3 className="text-xl font-bold text-[#0a261c] font-serif">
              {PRICING_DATA[activeCategory].category}
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              {PRICING_DATA[activeCategory].description}
            </p>
          </div>

          <div className="divide-y divide-stone-100">
            {PRICING_DATA[activeCategory].items.map((item, iIdx) => (
              <div
                key={iIdx}
                className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-stone-50/80 px-3 rounded-xl transition-colors"
              >
                <div className="space-y-0.5">
                  <div className="font-bold text-sm text-[#0a261c]">
                    {item.service}
                  </div>
                  <div className="text-xs text-stone-500">
                    {item.details}
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                  <div className="text-right">
                    <span className="text-base font-extrabold text-[#0f3d2e]">
                      {item.price}
                    </span>
                    {item.unit && (
                      <span className="text-[11px] text-stone-400 ml-1">
                        {item.unit}
                      </span>
                    )}
                  </div>

                  <a
                    href={getServiceWhatsAppUrl(item.service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-current" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee & installment footer */}
          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600 bg-[#faf8f5] p-4 rounded-2xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Includes official warranty certificate & treatment documentation</span>
            </div>

            <a
              href={createWhatsAppUrl("Hello Evrika Dent, I would like to get a cost estimate for my dental treatment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-800 font-bold hover:underline"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Need a custom price estimate? WhatsApp us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
