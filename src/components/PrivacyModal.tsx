"use client";

import { X, ShieldCheck, Lock, Check } from "lucide-react";
import { CLINIC_CONFIG } from "@/lib/whatsapp";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95 duration-200 max-h-[85vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Close Privacy Policy Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#0f3d2e] text-xs font-bold uppercase">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Privacy & Data Transparency</span>
          </div>

          <h3 className="text-2xl font-bold text-[#0a261c] font-serif">
            Patient Privacy Policy & Data Handling
          </h3>

          <p className="text-xs text-stone-500">
            Last updated: September 2026 • Evrika Dent Clinic
          </p>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed pt-2">
            
            <div className="p-4 rounded-2xl bg-[#faf8f5] border border-stone-200">
              <h4 className="font-bold text-[#0a261c] mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                No Database Storage Architecture
              </h4>
              <p className="text-xs text-stone-600">
                Our website utilizes a privacy-first, zero-database architecture. Appointment requests submitted on this website are not stored in any external server database; they simply format an encrypted, pre-filled WhatsApp message directly in your local browser.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#0a261c] mb-1">
                1. Information We Process
              </h4>
              <p className="text-xs text-stone-600">
                When you choose to contact us via WhatsApp or phone, you voluntarily share basic contact details (name, phone number, and treatment interest). This information is solely used by our clinical staff to coordinate your in-person consultation.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#0a261c] mb-1">
                2. Medical Record Confidentiality
              </h4>
              <p className="text-xs text-stone-600">
                All clinical examinations, 3D scans, and treatment plans conducted in-clinic are securely stored within our internal, HIPAA/GDPR-compliant offline medical record system with strict doctor-patient confidentiality.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#0a261c] mb-1">
                3. Your Rights
              </h4>
              <p className="text-xs text-stone-600">
                You have the right at any time to request the deletion or retrieval of your communication history by messaging our WhatsApp administrative desk or calling our reception at {CLINIC_CONFIG.phoneDisplay}.
              </p>
            </div>

          </div>

          <div className="pt-4 border-t border-stone-100 text-right">
            <button
              onClick={onClose}
              className="bg-[#0f3d2e] hover:bg-[#14533f] text-white text-xs sm:text-sm font-bold py-2.5 px-6 rounded-full transition-colors"
            >
              I Understand & Agree
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
