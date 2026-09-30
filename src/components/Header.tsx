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
      <div className="bg-[#051a13] text-[#c6ded3] text-xs py-2 px-4 border-b border-[#0f3d2e]/40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Accepting New Patients
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-[#9abfb0]">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              {CLINIC_CONFIG.workingHours.weekdays}
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-[#9abfb0]">
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
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-[#0f3d2e]">
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
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a261c]/95 backdrop-blur-md shadow-lg border-b border-emerald-900/30 py-3"
            : "bg-[#0a261c]/90 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo matching screenshot */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-[#0f3d2e] p-2 flex items-center justify-center shadow-md border border-emerald-500/30 group-hover:scale-105 transition-transform">
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
                <span className="text-xl font-bold tracking-tight text-white font-serif">
                  Evrika
                </span>
                <span className="text-xl font-light tracking-wide text-emerald-300">
                  Dent
                </span>
              </div>
              <p className="text-[10px] tracking-wider uppercase text-emerald-200/70 font-medium">
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
                className="text-[13px] font-medium text-emerald-100/80 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-emerald-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Phone */}
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right hidden lg:block">
              <div className="text-[11px] text-emerald-200/70 leading-none">Emergency & Appointments</div>
              <a
                href={`tel:${CLINIC_CONFIG.phoneRaw}`}
                className="text-xs font-semibold text-white hover:text-emerald-300 transition-colors"
              >
                {CLINIC_CONFIG.phoneDisplay}
              </a>
            </div>

            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#051a13] font-semibold text-xs px-5 py-2.5 rounded-full shadow-md hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-white hover:text-emerald-300 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm xl:hidden flex justify-end">
          <div className="w-[85%] max-w-sm bg-[#0a261c] h-full shadow-2xl p-6 flex flex-col justify-between border-l border-emerald-800/40 animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-emerald-800/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 p-1.5 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-5 h-5 text-white"
                    >
                      <path d="M12 2C8 2 6 5 6 9c0 3.5 1.5 8 3 12 1 2 2 2 3 0 .5-1 1-1 1.5 0 1 2 2 2 3 0 1.5-4 3-8.5 3-12 0-4-2-7-6.5-7h-2z" />
                    </svg>
                  </div>
                  <span className="font-bold text-white text-lg font-serif">Evrika Dent</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-emerald-300 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-base font-medium text-emerald-100 hover:text-emerald-400 border-b border-emerald-900/30"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-emerald-500" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-emerald-800/50 flex flex-col gap-3">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-[#051a13] font-bold text-sm py-3 rounded-full shadow-lg"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Book on WhatsApp</span>
              </a>

              <a
                href={`tel:${CLINIC_CONFIG.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 bg-[#0f3d2e] text-emerald-200 text-sm py-3 rounded-full border border-emerald-700/50"
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
