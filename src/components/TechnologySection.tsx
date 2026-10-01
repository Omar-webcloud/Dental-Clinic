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
    <section id="technology" className="relative overflow-hidden border-y border-[#d9ddda] bg-[#e9ebe8] py-20 text-[#202321]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">

          <h2 className="text-3xl text-[#202321] sm:text-4xl">
            Next-Gen Technology for Flawless Results
          </h2>
          <p className="text-sm leading-relaxed text-[#68706d] sm:text-base">
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
                className="flex flex-col justify-between border border-[#d9ddda] bg-[#f7f7f5] p-6 transition-all duration-300 hover:border-[#9b938a] sm:p-8 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center bg-[#202321] text-white transition-colors group-hover:bg-[#555b57]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="border border-[#d9ddda] bg-[#e9ebe8] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#68706d]">
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="mb-1 text-xl text-[#202321] transition-colors group-hover:text-[#68706d]">
                    {tech.title}
                  </h3>
                  <div className="mb-3 text-xs font-semibold text-[#777b77]">
                    {tech.brand}
                  </div>

                  <p className="mb-4 text-xs leading-relaxed text-[#68706d] sm:text-sm">
                    {tech.description}
                  </p>
                </div>

                <div className="flex items-start gap-2.5 border-t border-[#d9ddda] pt-4 text-xs text-[#68706d]">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#777b77]" />
                  <span>
                    <strong className="text-[#202321]">Patient Advantage:</strong> {tech.benefit}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Bottom Strip */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-xs text-[#68706d]">
            Curious about which technology will be used during your treatment?
          </p>
          <a
            href={createWhatsAppUrl("Hello Evrika Dent, I would like to ask about the diagnostic equipment and treatment process at your clinic.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#202321] px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#434945] sm:text-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consult with a Doctor via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
