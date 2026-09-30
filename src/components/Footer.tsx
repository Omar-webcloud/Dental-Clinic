"use client";

import { useState } from "react";
import Link from "next/link";
import { CLINIC_CONFIG, createWhatsAppUrl, getServiceWhatsAppUrl } from "@/lib/whatsapp";
import PrivacyModal from "@/components/PrivacyModal";
import {
  Phone,
  MessageCircle,
  Send,
  MapPin,
  Clock,
  Mail,
  ShieldCheck,
  ChevronRight,
  Heart
} from "lucide-react";

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#051a13] text-stone-300 pt-16 pb-24 md:pb-12 border-t border-[#0f3d2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#0f3d2e]/80">
            
            {/* Column 1: Brand & Bio (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-[#0f3d2e] p-2 flex items-center justify-center border border-emerald-500/30">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M12 2C8 2 6 5 6 9c0 3.5 1.5 8 3 12 1 2 2 2 3 0 .5-1 1-1 1.5 0 1 2 2 2 3 0 1.5-4 3-8.5 3-12 0-4-2-7-6.5-7h-2z" />
                    <path d="M9 9c0-1 1.5-2 3-2s3 1 3 2" />
                  </svg>
                </div>
                <div>
                  <span className="text-xl font-bold tracking-tight text-white font-serif">
                    Evrika
                  </span>
                  <span className="text-xl font-light tracking-wide text-emerald-400 ml-1">
                    Dent
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-400 leading-relaxed pr-4">
                Dentistry of the future where technology meets care. 17 years of clinical mastery, Carl Zeiss operating microscopes, and custom digital smile transformations.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-2 pt-2">
                <a
                  href={CLINIC_CONFIG.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#0a261c] hover:bg-emerald-600 text-emerald-400 hover:text-white flex items-center justify-center border border-emerald-800/40 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                </a>
                <a
                  href={CLINIC_CONFIG.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#0a261c] hover:bg-emerald-600 text-emerald-400 hover:text-white flex items-center justify-center border border-emerald-800/40 transition-colors"
                  aria-label="Telegram"
                >
                  <Send className="w-4 h-4" />
                </a>
                <a
                  href={CLINIC_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#0a261c] hover:bg-emerald-600 text-emerald-400 hover:text-white flex items-center justify-center border border-emerald-800/40 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#services" className="hover:text-emerald-400 transition-colors">
                    Services & Treatments
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="hover:text-emerald-400 transition-colors">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-emerald-400 transition-colors">
                    How We Work
                  </a>
                </li>
                <li>
                  <a href="#results" className="hover:text-emerald-400 transition-colors">
                    Before & After Results
                  </a>
                </li>
                <li>
                  <a href="#doctors" className="hover:text-emerald-400 transition-colors">
                    Our Doctors
                  </a>
                </li>
                <li>
                  <a href="#technology" className="hover:text-emerald-400 transition-colors">
                    Digital Technology
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-emerald-400 transition-colors">
                    Pricing & Estimates
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-emerald-400 transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Services (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Key Dental Treatments
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href={getServiceWhatsAppUrl("Swiss Dental Implants")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                  >
                    <span>Swiss Dental Implants</span>
                  </a>
                </li>
                <li>
                  <a
                    href={getServiceWhatsAppUrl("Ceramic Porcelain Veneers")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Ceramic Porcelain Veneers
                  </a>
                </li>
                <li>
                  <a
                    href={getServiceWhatsAppUrl("Microscope Root Canal Treatment")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Microscope Root Canal Therapy
                  </a>
                </li>
                <li>
                  <a
                    href={getServiceWhatsAppUrl("Professional Laser Whitening")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Professional Laser Whitening
                  </a>
                </li>
                <li>
                  <a
                    href={getServiceWhatsAppUrl("Clear Aligners Orthodontics")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Clear Aligners & Orthodontics
                  </a>
                </li>
                <li>
                  <a
                    href={getServiceWhatsAppUrl("AirFlow Spa Dental Hygiene")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    AirFlow Spa Dental Hygiene
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Hours (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Contact & Reception
              </h4>
              <div className="space-y-2.5 text-xs text-stone-400">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{CLINIC_CONFIG.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href={`tel:${CLINIC_CONFIG.phoneRaw}`} className="text-white hover:underline">
                    {CLINIC_CONFIG.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a
                    href={createWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-medium hover:underline"
                  >
                    WhatsApp: {CLINIC_CONFIG.whatsappNumber}
                  </a>
                </div>
                <div className="flex items-start gap-2 pt-1 text-[11px]">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div>{CLINIC_CONFIG.workingHours.weekdays}</div>
                    <div>{CLINIC_CONFIG.workingHours.saturday}</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom copyright & policies */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
            <div>
              © 2026 {CLINIC_CONFIG.name}. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Privacy Policy & Direct WhatsApp Architecture
              </button>
              <a href="#book" className="text-emerald-400 font-semibold hover:underline">
                Book Online
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
}
