"use client";

import { CLINIC_CONFIG, createWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone, AlertCircle, Clock, ShieldAlert } from "lucide-react";

export default function EmergencyCTA() {
  return (
    <section className="relative overflow-hidden bg-[#202321] py-16 text-white sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:px-12">
          
          {/* Left Text */}
          <div className="max-w-2xl space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
              <span>Same-Day Emergency Dental Care</span>
            </div>

            <h2 className="text-3xl leading-tight text-white sm:text-4xl">
              Experiencing Severe Tooth Pain or Need Urgent Treatment?
            </h2>

            <p className="text-sm leading-relaxed text-white/70 sm:text-base">
              Dental emergencies can&apos;t wait. We keep dedicated daily slots open for acute toothache, chipped teeth, broken crowns, and post-injury trauma. Get fast pain relief today.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-1 text-xs text-white/70 lg:justify-start">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#b8b6b1]" />
                Priority Same-Day Appointments
              </span>
              <span className="flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-[#b8b6b1]" />
                Immediate Pain Relief Protocol
              </span>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex w-full shrink-0 flex-col gap-3.5 sm:w-auto sm:flex-row lg:flex-col">
            <a
              href={createWhatsAppUrl("🚨 EMERGENCY: Hello Evrika Dent, I am experiencing acute tooth pain and need an urgent emergency appointment today.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-white px-6 py-4 text-sm font-semibold text-[#202321] transition-colors hover:bg-[#e9ebe8] sm:px-8"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp Emergency Desk</span>
            </a>

            <a
              href={`tel:${CLINIC_CONFIG.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-white sm:px-8"
            >
              <Phone className="w-4 h-4 text-[#b8b6b1]" />
              <span>Call Hotline: {CLINIC_CONFIG.phoneDisplay}</span>
            </a>
          </div>

      </div>
    </section>
  );
}
