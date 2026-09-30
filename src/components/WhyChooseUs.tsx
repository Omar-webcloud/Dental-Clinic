"use client";

import Image from "next/image";
import { CLINIC_CONFIG, createWhatsAppUrl } from "@/lib/whatsapp";
import {
  ShieldCheck,
  Cpu,
  Eye,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  Clock,
  Award
} from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Eye,
      title: "Microscopic Dental Precision",
      desc: "Every restorative and root canal procedure is performed under Carl Zeiss optical microscopes with up to 25x magnification. We preserve maximum healthy enamel and eliminate microscopic infections.",
      badge: "Carl Zeiss Optical Partner",
    },
    {
      icon: Cpu,
      title: "In-House Digital CAD/CAM Lab",
      desc: "Our on-site 5-axis robotic milling center carves custom ceramic crowns and E.max veneers within hours. No unpleasant paste impressions, no temporary tooth delays.",
      badge: "Same-Day Restorations",
    },
    {
      icon: HeartHandshake,
      title: "100% Pain-Free Wand Anesthesia",
      desc: "Computerized STA injection delivers micro-doses below pain threshold sensors. Experience zero needle prick sensation, zero face numbness, and complete psychological ease.",
      badge: "Painless Guarantee",
    },
    {
      icon: Award,
      title: "17 Years Clinical Reputation",
      desc: "Over 10,000 successful restorations and implants placed with a 99.4% clinical retention rate. Backed by official Swiss manufacturer lifetime warranties.",
      badge: "Lifetime Warranty",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-[#f5f2eb] border-t border-[#e5decb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Why Patients Choose Evrika Dent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a261c] font-serif tracking-tight">
            Where Advanced Technology Meets Human Care
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            We reject the outdated, cold, assembly-line dentistry model. At Evrika Dent, we combine state-of-the-art European equipment with warm, individualized attention to ensure you feel calm and completely cared for.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visuals */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-[#0f3d2e]/20 group">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/dental-microscope.jpg"
                  alt="Carl Zeiss dental microscope and 3D digital scanner at Evrika Dent"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a261c]/90 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/90 text-[11px] font-semibold backdrop-blur-xs mb-2">
                  <Eye className="w-3.5 h-3.5" />
                  Carl Zeiss Micro-Endodontics Suite
                </div>
                <p className="text-xs text-emerald-100/90">
                  Sub-millimeter optical clarity ensuring gentle, tooth-preserving treatments.
                </p>
              </div>
            </div>

            {/* Clinic interior banner */}
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-stone-300/80 group">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/clinic-interior.jpg"
                  alt="Modern warm green interior of Evrika Dent dental office"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 glass-dark p-3 rounded-2xl border border-white/20 text-white text-xs flex items-center justify-between">
                <span className="font-medium">Designed for absolute patient comfort</span>
                <span className="text-emerald-300 font-bold text-[11px]">Boutique Clinic</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillars */}
          <div className="lg:col-span-7 space-y-5">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-xs hover:shadow-lg hover:border-emerald-300 transition-all duration-300 group flex flex-col sm:flex-row gap-4 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0f3d2e] flex items-center justify-center shrink-0 group-hover:bg-[#0f3d2e] group-hover:text-emerald-300 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-[#0a261c] font-serif">
                        {item.title}
                      </h3>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Quick CTA Box */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0a261c] text-white p-5 rounded-2xl border border-emerald-700/40">
              <div className="text-xs space-y-0.5 text-center sm:text-left">
                <div className="font-bold text-emerald-300 text-sm">Have a dental question or feeling tooth pain?</div>
                <div className="text-emerald-100/70">Chat directly with our medical reception team on WhatsApp.</div>
              </div>
              <a
                href={createWhatsAppUrl("Hello Evrika Dent, I would like to consult with a doctor about my dental questions.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#051a13] font-bold text-xs px-5 py-2.5 rounded-full shadow hover:scale-105 transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
