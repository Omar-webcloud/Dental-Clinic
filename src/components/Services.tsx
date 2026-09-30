"use client";

import { useState } from "react";
import { SERVICES_DATA, ServiceItem } from "@/data/services";
import { getServiceWhatsAppUrl } from "@/lib/whatsapp";
import {
  ShieldCheck,
  Sparkles,
  Sun,
  Eye,
  Layers,
  HeartPulse,
  Activity,
  Smile,
  Clock,
  Check,
  MessageCircle,
  X,
  Info,
  ArrowRight
} from "lucide-react";

// Icon mapping helper
const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Sparkles,
  Sun,
  Microscope: Eye,
  Layers,
  HeartPulse,
  Activity,
  Smile,
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: "all", label: "All Treatments" },
    { id: "implants", label: "Implants & Surgery" },
    { id: "cosmetic", label: "Aesthetics & Veneers" },
    { id: "general", label: "Therapy & Hygiene" },
    { id: "orthodontics", label: "Aligners & Braces" },
    { id: "pediatric", label: "Children's Care" },
  ];

  const filteredServices =
    activeCategory === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => {
          if (activeCategory === "implants") return s.category === "implants" || s.category === "surgery";
          return s.category === activeCategory;
        });

  return (
    <section id="services" className="py-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a261c] font-serif tracking-tight">
            Complete Dental Care Under One Roof
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            From precision microscope restorations and computer-guided implants to bespoke porcelain smile makeovers, our specialists provide comfortable, pain-free dental solutions tailored to your unique anatomy.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#0f3d2e] text-white shadow-md shadow-[#0f3d2e]/20 scale-105"
                  : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.iconName] || Sparkles;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between relative group"
              >
                {service.popular && (
                  <span className="absolute top-5 right-5 bg-gradient-to-r from-emerald-600 to-[#0f3d2e] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                    Popular
                  </span>
                )}

                <div>
                  {/* Icon & Heading */}
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#0f3d2e] flex items-center justify-center mb-4 group-hover:bg-[#0f3d2e] group-hover:text-emerald-300 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0a261c] font-serif group-hover:text-[#14533f] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Key Benefits List */}
                  <ul className="mt-4 space-y-2 text-xs text-stone-700">
                    {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration & Price footer */}
                <div className="pt-6 mt-6 border-t border-stone-100">
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className="flex items-center gap-1.5 text-stone-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      {service.duration}
                    </span>
                    <span className="font-bold text-[#0a261c] bg-stone-100 px-2.5 py-1 rounded-lg">
                      From {service.priceFrom}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center justify-center gap-1 text-xs font-semibold py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-stone-600" />
                      <span>Details</span>
                    </button>

                    <a
                      href={getServiceWhatsAppUrl(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs hover:shadow-md transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Book on WA</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#0f3d2e] text-xs font-bold uppercase">
                <span>{selectedService.category}</span>
              </div>

              <h3 className="text-2xl font-bold text-[#0a261c] font-serif">
                {selectedService.title}
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed">
                {selectedService.fullDesc}
              </p>

              <div className="bg-[#faf8f5] p-4 rounded-2xl border border-stone-200/80">
                <h4 className="text-xs font-bold text-[#0a261c] uppercase tracking-wider mb-2">
                  Treatment Highlights & Clinical Advantages
                </h4>
                <ul className="space-y-2 text-xs text-stone-700">
                  {selectedService.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 py-2 text-xs">
                <div className="bg-stone-50 p-3 rounded-xl">
                  <div className="text-stone-500">Average Duration</div>
                  <div className="font-bold text-stone-800 mt-0.5">{selectedService.duration}</div>
                </div>
                <div className="bg-stone-50 p-3 rounded-xl">
                  <div className="text-stone-500">Starting Price</div>
                  <div className="font-bold text-[#0f3d2e] text-sm mt-0.5">from {selectedService.priceFrom}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={getServiceWhatsAppUrl(selectedService.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3.5 px-5 rounded-full shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Book This Treatment on WhatsApp</span>
                </a>

                <button
                  onClick={() => setSelectedService(null)}
                  className="py-3 px-5 text-stone-600 hover:bg-stone-100 rounded-full text-sm font-semibold transition-colors"
                >
                  Close
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
