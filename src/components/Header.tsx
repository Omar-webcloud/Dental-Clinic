"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CLINIC_CONFIG, createWhatsAppUrl } from "@/lib/whatsapp";
import { Phone, MessageCircle, Send, Menu, X, Clock, MapPin, ChevronRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "How We Work", href: "#process" },
    { name: "Results", href: "#results" },
    { name: "Doctors", href: "#doctors" },
    { name: "Technology", href: "#technology" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Notification / Information Bar */}
      <div className="bg-[#e9ebe8] text-[#68706d] text-xs py-2 px-4 border-b border-[#d9ddda]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Accepting New Patients
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-[#68706d]">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              {CLINIC_CONFIG.workingHours.weekdays}
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-[#68706d]">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              New York, NY 10001
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs ml-auto">
            <a
              href={`tel:${CLINIC_CONFIG.phoneRaw}`}
              className="flex items-center gap-1 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              {CLINIC_CONFIG.phoneDisplay}
            </a>
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-[#d9ddda]">
              <a
                href={CLINIC_CONFIG.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors p-1"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
              <a
                href={CLINIC_CONFIG.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors p-1"
                aria-label="Telegram"
              >
                <Send className="w-3.5 h-3.5" />
              </a>
              <a
                href={CLINIC_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors p-1"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 border-b border-[#d9ddda] transition-all duration-300 ${
          isScrolled
            ? "bg-[#faf8f5]/95 backdrop-blur-md shadow-sm py-3"
            : "bg-[#faf8f5] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo matching screenshot */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#202321] p-2 flex items-center justify-center transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-white"
              >
                <path d="M12 2C8 2 6 5 6 9c0 3.5 1.5 8 3 12 1 2 2 2 3 0 .5-1 1-1 1.5 0 1 2 2 2 3 0 1.5-4 3-8.5 3-12 0-4-2-7-6.5-7h-2z" />
                <path d="M9 9c0-1 1.5-2 3-2s3 1 3 2" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-[#202321] font-serif">
                  Evrika
                </span>
                <span className="text-xl font-light tracking-wide text-[#777b77]">
                  Dent
                </span>
              </div>
              <p className="text-[10px] tracking-wider uppercase text-[#68706d] font-medium">
                Modern Dental Clinic
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium text-[#4b514e] hover:text-[#202321] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1px] after:bg-[#202321] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Phone */}
          <div className="hidden md:flex items-center gap-4">
              <div className="text-right hidden lg:block">
              <div className="text-[11px] text-[#68706d] leading-none">Emergency & Appointments</div>
              <a
                href={`tel:${CLINIC_CONFIG.phoneRaw}`}
                className="text-xs font-semibold text-[#202321] hover:text-[#777b77] transition-colors"
              >
                {CLINIC_CONFIG.phoneDisplay}
              </a>
            </div>

            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#202321] hover:bg-[#434945] text-white font-semibold text-xs px-5 py-2.5 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#202321] hover:text-[#777b77] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm xl:hidden flex justify-end">
          <div className="w-[85%] max-w-sm bg-[#202321] h-full shadow-2xl p-6 flex flex-col justify-between border-l border-white/10 animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#faf8f5] p-1.5 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-5 h-5 text-[#202321]"
                    >
                      <path d="M12 2C8 2 6 5 6 9c0 3.5 1.5 8 3 12 1 2 2 2 3 0 .5-1 1-1 1.5 0 1 2 2 2 3 0 1.5-4 3-8.5 3-12 0-4-2-7-6.5-7h-2z" />
                    </svg>
                  </div>
                  <span className="font-bold text-white text-lg font-serif">Evrika Dent</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-white/60 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 text-base font-medium text-white/80 hover:text-white border-b border-white/8 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-white/40" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-white text-[#202321] font-bold text-sm py-3 transition-colors hover:bg-[#e9ebe8]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Book on WhatsApp</span>
              </a>

              <a
                href={`tel:${CLINIC_CONFIG.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 border border-white/20 text-white/80 text-sm py-3 transition-colors hover:bg-white/5"
              >
                <Phone className="w-4 h-4" />
                <span>Call {CLINIC_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
