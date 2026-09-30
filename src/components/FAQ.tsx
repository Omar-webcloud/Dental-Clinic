"use client";

import { useState } from "react";
import { FAQ_DATA, FAQItem } from "@/data/faq";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Sparkles, Search } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-booking-1");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "booking", label: "WhatsApp & Booking" },
    { id: "comfort", label: "Pain-Free Comfort" },
    { id: "implants", label: "Implants & Surgery" },
    { id: "treatment", label: "Microscope & Care" },
    { id: "pricing", label: "Pricing & Plans" },
  ];

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-[#faf8f5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a261c] font-serif tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Everything you need to know about our modern pain-free treatments, WhatsApp booking system, and clinic policies.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative mb-8">
          <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. pain, implants, WhatsApp, price)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-stone-200 text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-xs"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#0f3d2e] text-white shadow-xs"
                  : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-stone-200/80 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/60 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-[#0a261c] font-serif">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? "bg-[#0f3d2e] text-white rotate-180"
                        : "bg-stone-100 text-stone-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-[#faf8f5]/50 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-stone-500 text-sm">
              No questions matched your search query. Try another term or contact us directly.
            </div>
          )}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-stone-200 text-center space-y-3">
          <p className="text-xs sm:text-sm text-stone-700 font-medium">
            Have an unanswered question about your dental situation?
          </p>
          <a
            href={createWhatsAppUrl("Hello Evrika Dent, I have a specific dental question that wasn't on your FAQ page.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Ask Our Doctors on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
