"use client";

import { CLINIC_CONFIG, createWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone } from "lucide-react";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#051a13]/95 backdrop-blur-md p-3 border-t border-emerald-900/60 shadow-2xl safe-area-pb">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* WhatsApp primary button */}
        <a
          href={createWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] active:bg-[#20bd5a] text-[#051a13] font-bold text-xs sm:text-sm py-3 px-3 rounded-full shadow-lg transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp Us</span>
        </a>

        {/* Call secondary button */}
        <a
          href={`tel:${CLINIC_CONFIG.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 bg-[#0f3d2e] active:bg-[#14533f] text-emerald-100 font-semibold text-xs sm:text-sm py-3 px-3 rounded-full border border-emerald-600/50 shadow-md transition-all"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span>Call Now</span>
        </a>

      </div>
    </div>
  );
}
