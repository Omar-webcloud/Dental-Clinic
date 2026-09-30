"use client";

import { CLINIC_CONFIG, createWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone, AlertCircle, Clock, ShieldAlert } from "lucide-react";

export default function EmergencyCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0a261c] via-[#0f3d2e] to-[#0a261c] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-emerald-500/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#051a13]/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-emerald-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Text */}
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
              <span>Same-Day Emergency Dental Care</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-serif tracking-tight">
              Experiencing Severe Tooth Pain or Need Urgent Treatment?
            </h2>

            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
              Dental emergencies can't wait. We keep dedicated daily slots open for acute toothache, chipped teeth, broken crowns, and post-injury trauma. Get fast pain relief today.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-emerald-300/90 pt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                Priority Same-Day Appointments
              </span>
              <span className="flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-emerald-400" />
                Immediate Pain Relief Protocol
              </span>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full sm:w-auto shrink-0">
            <a
              href={createWhatsAppUrl("🚨 EMERGENCY: Hello Evrika Dent, I am experiencing acute tooth pain and need an urgent emergency appointment today.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-[#051a13] font-bold text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all text-center"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp Emergency Desk</span>
            </a>

            <a
              href={`tel:${CLINIC_CONFIG.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-[#0f3d2e] hover:bg-[#14533f] text-emerald-100 font-semibold text-sm px-8 py-4 rounded-full border border-emerald-600/50 hover:border-emerald-400 transition-all text-center"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Hotline: {CLINIC_CONFIG.phoneDisplay}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
