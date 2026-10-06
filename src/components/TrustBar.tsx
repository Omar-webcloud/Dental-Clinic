"use client";

import { Star, ShieldCheck, Award, Users, HeartHandshake } from "lucide-react";
import { CLINIC_CONFIG } from "@/lib/whatsapp";

export default function TrustBar() {
  const stats = [
    {
      icon: Award,
      value: "17+ Years",
      label: "Clinical Experience",
      subtext: "Continuous mastery since 2009",
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Treated Patients",
      subtext: "Smiles restored with care",
    },
    {
      icon: Star,
      value: "4.9 / 5.0",
      label: "Google Reviews",
      subtext: "Based on 380+ patient ratings",
    },
    {
      icon: ShieldCheck,
      value: "99.4%",
      label: "Success & Retention",
      subtext: "Lifetime implant warranty",
    },
    {
      icon: HeartHandshake,
      value: "100%",
      label: "Painless Protocol",
      subtext: "Gentle computer anesthesia",
    },
  ];

  return (
    <section className="bg-[#f3eee6] border-y border-[#e2d8c9] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-3 bg-white/60 backdrop-blur-xs border border-stone-200/60 hover:bg-white transition-all duration-300 group"
              >
                <div className="w-10 h-10 flex items-center justify-center mb-2.5 bg-[#e9ebe8] text-[#343a37] group-hover:bg-[#202321] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xl sm:text-2xl font-extrabold text-[#202321] font-serif tracking-tight">
                  {item.value}
                </span>
                <span className="text-xs font-bold text-[#343a37] uppercase tracking-wider mt-0.5">
                  {item.label}
                </span>
                <span className="text-[11px] text-stone-500 mt-1">
                  {item.subtext}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
