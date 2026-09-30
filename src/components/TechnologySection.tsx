"use client";

import { TECHNOLOGIES_DATA } from "@/data/technologies";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { Eye, Cpu, Scan, Shield, Sparkles, MessageCircle, CheckCircle } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Eye,
  Cpu,
  Scan,
  Shield,
};

export default function TechnologySection() {
  return (
    <section id="technology" className="py-20 bg-[#0a261c] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-emerald-600/15 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            Next-Gen Technology for Flawless Results
          </h2>
          <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed">
            By investing in premium European and American robotic equipment, we eliminate diagnostic blindspots, minimize recovery time, and guarantee lasting precision.
          </p>
        </div>

        {/* 4 Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TECHNOLOGIES_DATA.map((tech) => {
            const Icon = iconMap[tech.iconName] || Cpu;
            return (
              <div
                key={tech.id}
                className="bg-[#0f3d2e]/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-emerald-500/20 hover:border-emerald-400/50 shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-[#051a13] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-serif mb-1 group-hover:text-emerald-300 transition-colors">
                    {tech.title}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-300/80 mb-3">
                    {tech.brand}
                  </div>

                  <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed mb-4">
                    {tech.description}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#08241a] border border-emerald-600/30 text-xs text-emerald-200 flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Patient Advantage:</strong> {tech.benefit}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Bottom Strip */}
        <div className="mt-12 text-center">
          <p className="text-xs text-emerald-200/70 mb-4">
            Curious about which technology will be used during your treatment?
          </p>
          <a
            href={createWhatsAppUrl("Hello Evrika Dent, I would like to ask about the diagnostic equipment and treatment process at your clinic.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#051a13] font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consult with a Doctor via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
