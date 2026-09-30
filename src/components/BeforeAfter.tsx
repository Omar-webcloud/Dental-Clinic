"use client";

import { useState } from "react";
import { TRANSFORMATIONS_DATA, TransformationItem } from "@/data/transformations";
import { getServiceWhatsAppUrl } from "@/lib/whatsapp";
import { Sparkles, MessageCircle, Clock, User, ArrowRight, Check } from "lucide-react";

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { id: "all", label: "All Cases" },
    { id: "veneers", label: "Ceramic Veneers" },
    { id: "implants", label: "Dental Implants" },
    { id: "whitening", label: "Laser Whitening" },
    { id: "aligners", label: "Clear Aligners" },
  ];

  const filteredCases =
    activeTab === "all"
      ? TRANSFORMATIONS_DATA
      : TRANSFORMATIONS_DATA.filter((c) => c.category === activeTab);

  return (
    <section id="results" className="py-20 bg-[#f5f2eb] border-t border-[#e2d8c9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a261c] font-serif tracking-tight">
            Real Results, Real Smiles
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Every smile tells a story of restored confidence and effortless chewing comfort. Browse recent clinical cases treated by our master ceramists and surgeons.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#0f3d2e] text-white shadow-md shadow-[#0f3d2e]/20 scale-105"
                  : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    {item.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0a261c] font-serif mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Before / After Comparison Spec Cards */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#faf8f5] border border-stone-200/80 mb-6">
                  <div className="space-y-1">
                    <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                      Initial Condition
                    </div>
                    <div className="text-xs font-semibold text-stone-700">
                      {item.beforeStats}
                    </div>
                  </div>

                  <div className="space-y-1 pl-3 border-l border-stone-200">
                    <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1">
                      <Check className="w-3 h-3 text-emerald-600" />
                      Result Achieved
                    </div>
                    <div className="text-xs font-bold text-[#0f3d2e]">
                      {item.afterStats}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-stone-500 pb-2">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-emerald-600" />
                    Treated by: <strong className="text-stone-800">{item.doctor}</strong>
                  </span>
                  <span>Patient: {item.patientAge}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-stone-100">
                <a
                  href={getServiceWhatsAppUrl(`Results Consultation for ${item.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0f3d2e] hover:bg-[#14533f] text-emerald-100 hover:text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-full shadow-xs hover:shadow-md transition-all group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
                  <span>Request Similar Consultation via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
