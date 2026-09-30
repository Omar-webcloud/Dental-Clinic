"use client";

import { CLINIC_CONFIG, createWhatsAppUrl } from "@/lib/whatsapp";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Navigation,
  Sparkles,
  ExternalLink,
  Car
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#f5f2eb] border-t border-[#e2d8c9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Clinic Location & Easy Access</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a261c] font-serif tracking-tight">
            Visit Our Modern Dental Practice
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Conveniently situated with complimentary underground parking and direct transit connections. Our warm reception team is ready to welcome you.
          </p>
        </div>

        {/* 2-Column Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            
            {/* Address */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0f3d2e] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#0a261c]">Our Address</h3>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  {CLINIC_CONFIG.address}
                </p>
                <div className="text-[11px] text-emerald-700 font-semibold mt-2 flex items-center gap-1">
                  <Car className="w-3.5 h-3.5" />
                  <span>Free validated patient parking on Level B1</span>
                </div>
              </div>
            </div>

            {/* Direct Lines */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0f3d2e] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-[#0a261c]">Phone & Direct Lines</h3>
                <div className="text-xs">
                  <span className="text-stone-500">Reception: </span>
                  <a
                    href={`tel:${CLINIC_CONFIG.phoneRaw}`}
                    className="font-bold text-[#0f3d2e] hover:underline"
                  >
                    {CLINIC_CONFIG.phoneDisplay}
                  </a>
                </div>
                <div className="text-xs">
                  <span className="text-stone-500">Emergency 24/7: </span>
                  <a
                    href={`tel:${CLINIC_CONFIG.phoneRaw}`}
                    className="font-bold text-[#0f3d2e] hover:underline"
                  >
                    {CLINIC_CONFIG.secondaryPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-emerald-900 text-white rounded-2xl p-5 sm:p-6 border border-emerald-700/50 shadow-md flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-[#051a13] flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm text-white">WhatsApp Reception Desk</h3>
                <p className="text-xs text-emerald-100/80 mt-0.5">
                  Instant replies for questions, appointments, and treatment estimates.
                </p>
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-white mt-3 underline"
                >
                  <span>Chat on WhatsApp Now</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0f3d2e] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-xs">
                <h3 className="font-bold text-sm text-[#0a261c]">Working Hours</h3>
                <p className="text-stone-700">{CLINIC_CONFIG.workingHours.weekdays}</p>
                <p className="text-stone-700">{CLINIC_CONFIG.workingHours.saturday}</p>
                <p className="text-stone-500 italic">{CLINIC_CONFIG.workingHours.sunday}</p>
              </div>
            </div>

          </div>

          {/* Right Column: Simulated Visual Map with Directions CTA */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md flex flex-col justify-between relative min-h-[380px]">
            
            {/* Interactive map view container */}
            <div className="relative w-full h-[320px] bg-stone-100 overflow-hidden">
              <iframe
                title="Evrika Dent Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175409569766!2d-73.99343868459414!3d40.74844097932824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1625574512345!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-[105%]"
              ></iframe>

              {/* Floating map pin overlay */}
              <div className="absolute top-4 left-4 glass-dark p-3 rounded-2xl text-white text-xs border border-white/20 shadow-lg flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
                <div>
                  <div className="font-bold font-serif">Evrika Dent Clinic</div>
                  <div className="text-[10px] text-emerald-200">Open Today • Free Parking</div>
                </div>
              </div>
            </div>

            {/* Map footer with Get Directions CTA */}
            <div className="p-5 sm:p-6 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-100">
              <div className="text-xs text-stone-600 text-center sm:text-left">
                <strong className="text-stone-900 block font-semibold">Need help navigating?</strong>
                <span>Near 34th St - Herald Sq station with direct elevator access.</span>
              </div>

              <a
                href="https://maps.google.com/?q=742+Evergreen+Medical+Plaza+New+York+NY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0f3d2e] hover:bg-[#14533f] text-emerald-100 hover:text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-full shadow-md transition-all shrink-0"
              >
                <Navigation className="w-4 h-4 text-emerald-400" />
                <span>Get Google Maps Directions</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
