"use client";

import { useState, useEffect } from "react";
import { CLINIC_CONFIG, createWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [closedTooltip, setClosedTooltip] = useState(false);

  useEffect(() => {
    // Show greeting tooltip after 3 seconds on desktop
    const timer = setTimeout(() => {
      if (!closedTooltip) {
        setShowTooltip(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [closedTooltip]);

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-2">
      
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="glass-dark text-white p-3.5 rounded-2xl max-w-xs shadow-2xl border border-emerald-500/40 relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => {
              setShowTooltip(false);
              setClosedTooltip(true);
            }}
            className="absolute top-2 right-2 text-emerald-300 hover:text-white p-1"
            aria-label="Close message bubble"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider">
              {CLINIC_CONFIG.name} Online
            </span>
          </div>

          <p className="text-xs text-emerald-100 pr-3 leading-relaxed">
            👋 Hello! Have a dental question or want to reserve a consultation? Chat with us on WhatsApp!
          </p>
        </div>
      )}

      {/* Main floating action button */}
      <a
        href={createWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/60 animate-whatsapp-pulse group"
        aria-label="Chat with Evrika Dent on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
}
