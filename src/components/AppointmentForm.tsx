"use client";

import { useState } from "react";
import Image from "next/image";
import { CLINIC_CONFIG, createWhatsAppUrl, AppointmentData } from "@/lib/whatsapp";
import { SERVICES_DATA } from "@/data/services";
import {
  Calendar,
  Clock,
  User,
  Phone,
  MessageCircle,
  CheckCircle2,
  Send,
  Eye
} from "lucide-react";

export default function AppointmentForm() {
  const [formData, setFormData] = useState<AppointmentData>({
    fullName: "",
    phone: "",
    service: "General Consultation & 3D Scan",
    preferredDate: "",
    preferredTime: "Morning (9:00 AM - 12:00 PM)",
    patientType: "New Patient",
    message: "",
  });

  const [errors, setErrors] = useState<{ fullName?: string; phone?: string }>({});
  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { fullName?: string; phone?: string } = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your name";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Build WhatsApp URL and redirect
    const url = createWhatsAppUrl(formData);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="book" className="py-20 bg-[#faf8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Image Panel */}
          <div className="hidden lg:block lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[600px]">
            <Image
              src="/images/consultation-smile.jpg"
              alt="Happy dental patient with a perfect smile at Evrika Dent"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1200px) 40vw, 500px"
            />
            {/* Dark gradient overlay at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#202321]/85 via-[#202321]/20 to-transparent" />

            {/* Overlay content — minimal */}
            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
              <h2 className="text-2xl font-extrabold text-white font-serif leading-snug text-shadow-md">
                Your smile transformation<br />
                <span className="text-emerald-300">starts with one message</span>
              </h2>
              {/* 3 compact trust pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  { icon: <CheckCircle2 className="w-3 h-3" />, label: "Reply in 5 min" },
                  { icon: <CheckCircle2 className="w-3 h-3" />, label: "Zero spam" },
                  { icon: <CheckCircle2 className="w-3 h-3" />, label: "Free consultation" },
                ].map(({ icon, label }) => (
                  <div key={label} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-card-hero border border-white/15 text-emerald-200 text-[11px] font-medium backdrop-blur-sm">
                    <span className="text-emerald-400">{icon}</span>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xl relative">
              
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-100">
                <div>
                  <h3 className="text-xl font-bold text-[#0a261c] font-serif">
                    Request Appointment via WhatsApp
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Fields marked with <span className="text-red-500 font-bold">*</span> are required
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{showPreview ? "Hide Preview" : "Preview Message"}</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Patient Type toggle */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                    Patient Status
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["New Patient", "Existing Patient"].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            patientType: type as "New Patient" | "Existing Patient",
                          }))
                        }
                        className={`py-2 px-4 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                          formData.patientType === type
                            ? "bg-[#0f3d2e] text-white border-[#0f3d2e] shadow-xs"
                            : "bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. John Smith"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-stone-50 border text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all ${
                          errors.fullName ? "border-red-500 bg-red-50/30" : "border-stone-200"
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +1 (555) 000-1234"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-stone-50 border text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all ${
                          errors.phone ? "border-red-500 bg-red-50/30" : "border-stone-200"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">
                    Treatment of Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                  >
                    <option value="General Consultation & 3D Scan">
                      General Consultation & 3D Scan
                    </option>
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Emergency Tooth Pain Relief">
                      Emergency Tooth Pain Relief
                    </option>
                  </select>
                </div>

                {/* Preferred Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1.5">
                      Preferred Time of Day
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                      >
                        <option value="Morning (9:00 AM - 12:00 PM)">
                          Morning (9:00 AM - 12:00 PM)
                        </option>
                        <option value="Afternoon (12:00 PM - 4:00 PM)">
                          Afternoon (12:00 PM - 4:00 PM)
                        </option>
                        <option value="Evening (4:00 PM - 8:00 PM)">
                          Evening (4:00 PM - 8:00 PM)
                        </option>
                        <option value="Any Available Time">
                          Any Available Time
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Notes / Message */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">
                    Notes or Specific Concerns (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your symptoms, previous treatments, or any questions..."
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                {/* WhatsApp Live Preview Box */}
                {showPreview && (
                  <div className="p-4 rounded-2xl bg-[#09261b] text-emerald-100 text-xs font-mono space-y-1.5 border border-emerald-600/40">
                    <div className="text-emerald-400 font-bold mb-1">WhatsApp Message Preview:</div>
                    <div className="whitespace-pre-line leading-relaxed">
                      {`🦷 *Appointment Request - ${CLINIC_CONFIG.name}*\n` +
                        `━━━━━━━━━━━━━━━━━━━━\n` +
                        `👤 *Name:* ${formData.fullName || "[Your Name]"}\n` +
                        `📱 *Phone:* ${formData.phone || "[Your Phone]"}\n` +
                        `📋 *Patient Status:* ${formData.patientType}\n` +
                        `✨ *Interested Service:* ${formData.service}\n` +
                        (formData.preferredDate ? `📅 *Preferred Date:* ${formData.preferredDate}\n` : "") +
                        `⏰ *Preferred Time:* ${formData.preferredTime}\n` +
                        (formData.message ? `💬 *Notes:* ${formData.message}\n` : "") +
                        `━━━━━━━━━━━━━━━━━━━━`}
                    </div>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base py-4 px-6 rounded-full shadow-lg hover:shadow-emerald-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Request Appointment via WhatsApp</span>
                  <Send className="w-4 h-4" />
                </button>

                <p className="text-center text-[11px] text-stone-400">
                  Clicking will open WhatsApp with your pre-filled inquiry. No data is stored on remote servers.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
