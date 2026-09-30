"use client";

import Image from "next/image";
import { CLINIC_CONFIG, createWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a261c] text-white">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-400 blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-emerald-600 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 z-10 space-y-6">
            
            {/* Tag badge / eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Your Smile, Our Priority</span>
            </div>

            {/* Subtitle tag matching screenshot exact words */}
            <p className="text-xs sm:text-sm text-emerald-200/90 font-medium max-w-lg leading-relaxed">
              Accurate treatment, comfort & a healthy smile without pain, fear, or stress. You feel calm — we care about the result.
            </p>

            {/* Main Title matching screenshot */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white leading-[1.15] font-serif">
              Dentistry of the future{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-200 to-white">
                where technology meets care
              </span>
            </h1>

            {/* Clinic description matching screenshot side note */}
            <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed max-w-xl">
              <strong className="text-white font-semibold">Evrika Dent</strong> is a modern multidisciplinary clinic with 17 years of experience and over 10,000 satisfied patients. We combine advanced Zeiss surgical microscopes, an in-house digital CAD/CAM milling center, and a gentle, patient-first approach.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-[#051a13] font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-xl hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <MessageCircle className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                <span>Book on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`tel:${CLINIC_CONFIG.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-[#0f3d2e]/80 hover:bg-[#14533f] text-emerald-100 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full border border-emerald-600/40 hover:border-emerald-400/60 transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {CLINIC_CONFIG.phoneDisplay}</span>
              </a>
            </div>

            {/* Trust checkmarks under CTA */}
            <div className="grid grid-cols-2 gap-2.5 pt-4 text-xs text-emerald-200/90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Painless Anesthesia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Carl Zeiss 25x Micro-Precision</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>In-House 5-Axis Milling Lab</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Lifetime Implant Guarantee</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Glassmorphic Stats Card matching Screenshots */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame with subtle decorative border */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-500/30 aspect-[4/3] sm:aspect-[16/11] group">
                <Image
                  src="/images/hero-smile.jpg"
                  alt="Smiling dental patient showing perfect white teeth at Evrika Dent"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                
                {/* Soft gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a261c]/80 via-transparent to-black/20 pointer-events-none"></div>

                {/* Floating Tag over image */}
                <div className="absolute top-4 left-4 glass-dark px-3 py-1.5 rounded-full text-[11px] font-medium text-emerald-200 border border-emerald-400/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Real Patient Result
                </div>
              </div>

              {/* Floating Glassmorphism Stats Card - EXACTLY MATCHING THE SCREENSHOT */}
              <div className="absolute -bottom-6 right-2 sm:right-6 md:right-8 glass-card-hero p-5 sm:p-6 rounded-2xl border border-white/20 text-center max-w-[200px] sm:max-w-[220px] shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-3">
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-serif">
                      17
                    </div>
                    <div className="text-[11px] sm:text-xs text-emerald-200/90 font-medium">
                      Years of Experience
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      10,000+
                    </div>
                    <div className="text-[11px] sm:text-xs text-emerald-200/90 font-medium">
                      Happy Patients
                    </div>
                  </div>

                  <a
                    href={createWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-[#082b1f] hover:bg-[#0c3e2d] text-emerald-200 text-xs font-semibold py-2 px-3 rounded-full border border-emerald-600/40 shadow hover:shadow-emerald-500/20 transition-all mt-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current text-emerald-400" />
                    <span>Contact Us</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
