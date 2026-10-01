"use client";

import { MessageCircle, Scan, FileText, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export default function TreatmentProcess() {
  const steps = [
    {
      num: "01",
      icon: MessageCircle,
      title: "Book Your Visit on WhatsApp",
      desc: "Send a quick WhatsApp message or fill out our online request. Our patient coordinator instantly confirms your consultation slot.",
      highlight: "Takes under 30 seconds",
    },
    {
      num: "02",
      icon: Scan,
      title: "3D Diagnostic & Consultation",
      desc: "Comprehensive evaluation with our 3D CBCT scanner and Carl Zeiss microscope to pinpoint exact dental health with zero guesswork.",
      highlight: "Sub-millimeter accuracy",
    },
    {
      num: "03",
      icon: FileText,
      title: "Transparent Treatment Plan",
      desc: "We review your options together on a 4K screen, providing a fixed, transparent financial estimate before any procedure begins.",
      highlight: "Zero surprise fees",
    },
    {
      num: "04",
      icon: Sparkles,
      title: "Painless Gentle Treatment",
      desc: "Relax in our ergonomic chairs while computerized anesthesia and gentle microsurgical techniques restore your radiant, healthy smile.",
      highlight: "100% painless guarantee",
    },
  ];

  return (
    <section id="process" className="py-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a261c] font-serif tracking-tight">
            How We Work: 4 Steps to Your Dream Smile
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            From your very first WhatsApp greeting to your final sparkling smile checkup, experience transparent, stress-free dental care.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 relative flex flex-col justify-between group"
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-950 flex items-center justify-center group-hover:bg-[#0f3d2e] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-extrabold text-stone-200 group-hover:text-emerald-300 transition-colors font-serif">
                    {step.num}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#0a261c] font-serif group-hover:text-[#14533f] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100">
                  <span className="inline-block text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                    ✓ {step.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process CTA */}
        <div className="mt-12 text-center">
          <a
            href={createWhatsAppUrl("Hello Evrika Dent, I would like to start with Step 1 and book an initial dental consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0f3d2e] hover:bg-[#14533f] text-emerald-100 hover:text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg hover:shadow-emerald-900/30 hover:scale-105 transition-all group"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400 fill-current" />
            <span>Start Step 1: Request WhatsApp Appointment</span>
            <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
