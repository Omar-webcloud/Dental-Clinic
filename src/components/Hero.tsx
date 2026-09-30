"use client";

import Image from "next/image";
import { CLINIC_CONFIG, createWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden">
      {/* Full-bleed Background Image */}
      <Image
        src="/images/hero-smile.jpg"
        alt="Smiling dental patient showing perfect white teeth at Evrika Dent"
        fill
        priority
        className="object-cover object-right"
        sizes="100vw"
      />

      {/* Multi-stop gradient overlay — dark at bottom, lighter at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#041510]/90 via-[#041510]/40 to-transparent pointer-events-none" />

      {/* Compact glassmorphic card anchored bottom-left */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 lg:pb-14">
        <div className="glass-card-hero rounded-2xl border border-white/15 shadow-2xl backdrop-blur-xl p-5 sm:p-6 max-w-xl">

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.15] font-serif">
            <span className="text-white">Dentistry where </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 via-40% to-emerald-400 drop-shadow-none" style={{backgroundImage: "linear-gradient(90deg, #ffffff 0%, #a7f3d0 30%, #ffffff 55%, #34d399 80%, #6ee7b7 100%)"}}>
              technology meets care
            </span>
          </h1>

          {/* Sub-line */}
          <p className="mt-2 text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
            17 years · 10,000+ happy smiles · Zero-pain guarantee
          </p>

          {/* Divider */}
          <div className="my-4 border-t border-white/10" />

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#051a13] font-bold text-sm px-5 py-2.5 rounded-full shadow-lg hover:shadow-emerald-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all group"
            >
              <MessageCircle className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
              <span>Book on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href={`tel:${CLINIC_CONFIG.phoneRaw}`}
              className="inline-flex items-center justify-center gap-1.5 text-emerald-100 hover:text-white font-semibold text-sm px-5 py-2.5 rounded-full border border-emerald-500/30 hover:border-emerald-400/60 hover:bg-white/5 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call {CLINIC_CONFIG.phoneDisplay}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
