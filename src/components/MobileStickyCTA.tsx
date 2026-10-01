"use client";

import { CLINIC_CONFIG, createWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone } from "lucide-react";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#d9ddda] bg-[#faf8f5]/95 p-3 shadow-2xl backdrop-blur-md safe-area-pb md:hidden">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* WhatsApp primary button */}
        <a
          href={createWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 bg-[#202321] px-3 py-3 text-xs font-semibold text-white transition-all active:bg-[#434945] sm:text-sm"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp Us</span>
        </a>

        {/* Call secondary button */}
        <a
          href={`tel:${CLINIC_CONFIG.phoneRaw}`}
          className="flex flex-1 items-center justify-center gap-2 border border-[#d9ddda] bg-[#e9ebe8] px-3 py-3 text-xs font-semibold text-[#343a37] transition-all active:bg-[#d9ddda] sm:text-sm"
        >
          <Phone className="w-4 h-4 text-[#777b77]" />
          <span>Call Now</span>
        </a>

      </div>
    </div>
  );
}
