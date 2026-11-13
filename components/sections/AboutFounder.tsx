"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { founderNote } from "@/data/founderNotes";
import { siteConfig } from "@/data/siteData";
import { CheckCircle2, Award, HeartHandshake, PhoneCall } from "lucide-react";
import { ShapeRosetteMandala, ShapeCurvedStar } from "@/components/ui/ShapesGallery";

export const AboutFounder: React.FC = () => {
  const { isGujarati } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-charcoal-border/40">
      {/* Decorative vectors */}
      <div className="absolute top-10 right-6 text-primary pointer-events-none hidden md:block" aria-hidden="true">
        <ShapeRosetteMandala className="w-56 h-56 text-primary" opacity={0.04} />
      </div>
      <div className="absolute bottom-10 left-6 text-[#D4A373] pointer-events-none hidden sm:block" aria-hidden="true">
        <ShapeCurvedStar className="w-20 h-20 text-[#D4A373]" opacity={0.08} />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 2-Column Grid: Coach Visual & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Card with Portrait & Milestone Badge */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden bg-ivory border border-charcoal-border/80 shadow-soft">
              
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={founderNote.portrait}
                  alt={isGujarati ? founderNote.nameGujarati : founderNote.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover object-top"
                />
              </div>

              {/* Floating Personal Milestone Badge */}
              <div className="p-5 sm:p-6 bg-white border-t border-charcoal-border/70 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-terracotta uppercase tracking-wider block">
                    {isGujarati ? "અંગત સિદ્ધિ" : "Personal Milestone"}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold font-sans text-primary block mt-0.5">
                    {isGujarati ? "-૧૩ કિલો ફેટ લોસ" : "-13 kg Fat Loss"}
                  </span>
                  <span className="text-xs text-charcoal-muted">
                    {isGujarati ? "૮૫ કિલો થી ૭૨ કિલો સુધી" : "85 kg down to 72 kg"}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Coach Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="heading-subsection text-charcoal">
                {isGujarati ? founderNote.nameGujarati : founderNote.name}
              </h3>
              <p className="text-sm font-medium text-primary mt-1">
                {isGujarati ? founderNote.roleGujarati : founderNote.role} • {siteConfig.location.city}
              </p>
            </div>

            <div className="space-y-4 text-charcoal-muted text-[15px] sm:text-[16px] leading-relaxed">
              {(isGujarati ? founderNote.bioGujarati : founderNote.bioEnglish).map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Values */}
            <div className="pt-4 border-t border-charcoal-border/60 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {founderNote.coreValues.map((val, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-ivory border border-charcoal-border/60">
                  <span className="text-sm font-semibold text-charcoal block mb-1">
                    {isGujarati ? val.titleGu : val.titleEn}
                  </span>
                  <span className="text-xs text-charcoal-muted block leading-snug">
                    {isGujarati ? val.descGu : val.descEn}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct Connect Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#contact"
                className="btn-primary justify-center text-center text-sm !min-h-[44px]"
              >
                <span>{isGujarati ? "કોચ સાથે વાત કરો" : "Consult Coach Shaktisinh"}</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-secondary justify-center text-center text-sm !min-h-[44px] gap-2"
              >
                <PhoneCall className="w-4 h-4 text-primary" />
                <span>{siteConfig.phoneFormatted}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

