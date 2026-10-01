"use client";

import Image from "next/image";
import { CLINIC_CONFIG, createWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#faf8f5]">
      <div className="mx-auto grid min-h-[680px] max-w-[1440px] grid-cols-1 items-center gap-10 px-5 pb-12 pt-12 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:py-16">
        <div className="relative z-10 lg:col-span-5 lg:py-12">
          <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#68706d]">
            <span className="h-px w-8 bg-[#9b938a]" /> Independent care, considered in every detail
          </p>
          <h1 className="max-w-[680px] text-[clamp(3.25rem,7vw,6.25rem)] leading-[0.98] text-[#202321]">
            A healthier smile, <span className="italic text-[#777b77]">beautifully</span> considered.
          </h1>
          <p className="mt-7 max-w-lg text-sm leading-7 text-[#68706d] sm:text-base">
            Thoughtful dentistry, precise technology and a team who takes the time to know you. Your care should feel as good as the result.
          </p>
          <p className="mt-5 text-xs font-medium text-[#68706d]">
            17 years of experience <span className="mx-2 text-[#b8b6b1]">/</span> 10,000+ smiles cared for
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-[#202321] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#434945]"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Book a consultation</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={`tel:${CLINIC_CONFIG.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 border border-[#d9ddda] px-5 py-3.5 text-sm font-semibold text-[#343a37] transition-colors hover:border-[#202321]"
            >
              <Phone className="h-4 w-4" />
              <span>{CLINIC_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[560px]">
          <Image
            src="/images/hero-smile.jpg"
            alt="Patient smiling after dental care at Evrika Dent"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "right center" }}
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#202321]/45 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white sm:bottom-8 sm:left-8 sm:right-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">Care, with a lighter touch</p>
              <p className="mt-1 font-serif text-2xl sm:text-3xl">Feel at ease. Leave smiling.</p>
            </div>
            <div className="hidden border-l border-white/50 pl-4 text-right sm:block">
              <p className="text-2xl font-serif">4.9</p>
              <p className="text-[10px] uppercase tracking-wider text-white/75">Patient rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
