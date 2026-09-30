"use client";

import Image from "next/image";
import { DOCTORS_DATA } from "@/data/doctors";
import { getDoctorWhatsAppUrl } from "@/lib/whatsapp";
import { Award, GraduationCap, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#0f3d2e] text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Master Clinicians</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a261c] font-serif tracking-tight">
            Meet Our Expert Dental Specialists
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Our doctors are certified fellows and international trainers with decades of collective experience, dedicated to gentle, predictable, and aesthetic dental care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTORS_DATA.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Portrait Frame */}
                <div className="relative aspect-square w-full bg-stone-100 overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Experience floating pill */}
                  <div className="absolute bottom-3 left-3 bg-[#0a261c]/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-500/30">
                    {doctor.experienceYears}+ Years Clinical Mastery
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0a261c] font-serif">
                      {doctor.name}
                    </h3>
                    <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mt-0.5">
                      {doctor.role}
                    </p>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {doctor.bio}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    <div className="flex items-center gap-1.5 text-xs text-stone-700 font-medium">
                      <GraduationCap className="w-4 h-4 text-[#0f3d2e] shrink-0" />
                      <span className="truncate">{doctor.education}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {doctor.keyTreatments.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-semibold bg-stone-100 text-stone-700 px-2.5 py-0.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-7 pt-0">
                <a
                  href={getDoctorWhatsAppUrl(doctor.name, doctor.role)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-full shadow-md hover:shadow-emerald-600/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Book with {doctor.name.split(",")[0]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
